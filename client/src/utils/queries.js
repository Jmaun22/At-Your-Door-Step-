import { gql } from '@apollo/client';

export const QUERY_DISHES = gql`
  query getDishes($category: ID) {
    dishes(category: $category) {
      _id
      name
      description
      image
      price
      ingredients
      category {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORY_DISHES = gql`
  query getCategoryDishes($categoryname: name) {
    categorydishes(name: $categoryname) {
      _id
      name
      description
      image
      price
      ingredients
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($dishes: [ID]!) {
    checkout(dishes: $dishes) {
      session
    }
  }
`;

export const QUERY_ALL_DISHES = gql`
  {
    dishes {
      _id
      name
      description
      price
      ingredients
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      password
      address
      state
      city
      phoneNumber
      orders {
        _id
        purchaseDate
        dishes {
          _id
          name
          description
          image
          price
          ingredients
        }
      }
    }
  }
`;
