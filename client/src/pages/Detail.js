import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_DISHES,
} from '../utils/actions';
import { QUERY_DISHES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import Footer from '../components/Footer';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentDish, setCurrentDish] = useState({});

  const { loading, data } = useQuery(QUERY_DISHES);

  const { dishes, cart } = state;

  useEffect(() => {
    // already in global store
    if (dishes.length) {
      setCurrentDish(dishes.find((dish) => dish._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_DISHES,
        dishes: data.dishes,
      });

      data.dishes.forEach((dish) => {
        idbPromise('dishes', 'put', dish);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('dishes', 'get').then((indexedDishes) => {
        dispatch({
          type: UPDATE_DISHES,
          dishes: indexedDishes,
        });
      });
    }
  }, [dishes, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (!itemInCart) {
      dispatch({
        type: ADD_TO_CART,
        dish: { ...currentDish, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentDish, purchaseQuantity: 1 });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentDish._id,
    });

    idbPromise('cart', 'delete', { ...currentDish });
  };

  return (
    <>
      {currentDish && cart ? (
        <div className="container my-1">
          <Link className="back-to-dishes-link" to="/prepper">← Back to Dishes</Link>

          <h2>{currentDish.name}</h2>

          <p>{currentDish.description}</p>


          {currentDish.ingredients ? (
            <ul>
              {currentDish.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>Loading</p>
          )}

          <p>
            <strong>Price:</strong>${currentDish.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentDish._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentDish.image}`}
            alt={currentDish.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
      <Footer />
    </>
  );
}

export default Detail;
