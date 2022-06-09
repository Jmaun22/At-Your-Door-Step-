const { AuthenticationError } = require('apollo-server-express');
const { User, Dish, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    dishes: async (parent, { category, name, prepper }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      if (prepper) {
        params.prepper = prepper;
      }

      return await Dish.find(params).populate('category').populate('prepper');
    },
    myDishes: async (parent, { prepper }, context) => {
      const params = {};
      if(prepper) {
        params.prepper = prepper
      } else {
        params.prepper = context.user._id
      }

      return await Dish.find(params).populate('category').populate('prepper');
    },
    dish: async (parent, { _id }) => {
      return await Dish.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.dishes',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.dishes',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ dishes: args.dishes });
      const line_items = [];
      
      const { dishes } = await order.populate('dishes');
      console.log( dishes );

      for (let i = 0; i < dishes.length; i++) {
        const dish = await stripe.products.create({
          name: dishes[i].name,
          description: dishes[i].description,
          images: [`${url}/images/${dishes[i].image}`]
        });

        const price = await stripe.prices.create({
          product: dish.id,
          unit_amount: dishes[i].price * 100,
          currency: 'usd',
        });
        console.log(price);

        try { line_items.push({
          price: price.id,
          quantity: 1
        })} catch (e){ console.log(e) };
        };
        console.log(dishes)

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { dishes }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ dishes });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateDish: async (parent, { _id}) => {
      return await Dish.findById(_id);
    },
    addDish: async (parent, args, context) => {
      args.ingredients = args.ingredients.split(',');
      args.prepper = context.user._id

      const catId = await Category.findOne({name: args.category}).exec();
      args.category = catId._id
      
      const dish = await Dish.create(args);
      return dish;
    },
    removeDish: async (parent, args) => {
        const deleteDish = await Dish.findOneAndDelete({_id: args._id})

        return deleteDish;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
