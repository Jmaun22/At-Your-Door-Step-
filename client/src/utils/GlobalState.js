import React, { createContext, useContext } from "react";
import { useDishReducer } from './reducers'

const StoreContext = createContext();
const myDishesContext = createContext();
const { Provider } = StoreContext;
const { Prepper } = myDishesContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useDishReducer({
    dishes: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const StorePrepper = ({ value = [], ...props }) => {
  const [state, dispatch] = useDishReducer({
    dishes: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Prepper value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

const useMyDishesContext = () => {
  return useContext(myDishesContext);
};

export { StoreProvider, StorePrepper, useStoreContext, useMyDishesContext };
