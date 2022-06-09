import React, { useEffect } from 'react';
import DishItem from '../DishItem';
import { useMyDishesContext } from '../../utils/GlobalState';
import { UPDATE_DISHES } from '../../utils/actions';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MY_DISHES } from '../../utils/queries';
import { REMOVE_DISH } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function DishListPrepper() {
  const { loading, data } = useQuery(QUERY_MY_DISHES);
  const userData = data?.myDishes || {};


  const [deleteDish, { error }] = useMutation(REMOVE_DISH);

  const handleDeleteDish = async (dishId) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;


    if (!token) {
      return false;
    }


    try {
      console.log(dishId)
      const { data } = await deleteDish({
        variables: { dishId },
      });
    } catch (err) {
      console.error(err);
    }
  };


  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="my-2">
  
      {userData.length ? (
        <div className="flex-row">
    
          {userData.map((dish) => (
            <div>
            <DishItem
              key={dish._id}
              _id={dish._id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              quantity={dish.quantity}
            />
            <button onClick={() => handleDeleteDish(dish._id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any dishes yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  )
};

export default DishListPrepper;
