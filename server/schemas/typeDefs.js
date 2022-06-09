const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  

  type Dish {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    ingredients: [String]
    category: Category
    prepper: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    dishes: [Dish]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
    state: String
    city: String
    phoneNumber: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }
  

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    dishes(category: ID, name: String): [Dish]
    myDishes(prepper: ID): [Dish]
    dish(_id: ID!): Dish
    user: User
    order(_id: ID!): Order
    checkout(dishes: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, address: String!, state: String!, city: String!, phoneNumber: String): Auth
    addOrder(dishes: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, address: String, state: String, city: String, phoneNumber: String): User
    updateDish(_id: ID!): Dish
    removeDish(_id: ID!): Dish
    login(email: String!, password: String!): Auth
    addDish(name: String!, ingredients: String!, price: String!, category: String!, description: String, image: String): Dish
  }
`;

module.exports = typeDefs;
