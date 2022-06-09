import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DISH = gql`
  mutation addDish($name: String!, $ingredients: String!, $price: String!, $category: String!, $description: String, $image: String) {
    addDish(name: $name, ingredients: $ingredients, price: $price, category: $category, description: $description, image: $image) {
      _id
      name
   }
  }
`;

export const REMOVE_DISH = gql`
  mutation removeDish($dishId: ID!) {
    removeDish( _id: $dishId) {
      _id
      name
   }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($dishes: [ID]!) {
    addOrder(dishes: $dishes) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $address: String!
    $state: String!
    $city: String!
    $phoneNumber: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      address: $address
      state: $state
      city: $city
      phoneNumber: $phoneNumber
    ) {
      token
      user {
        _id
      }
    }
  }
`;
