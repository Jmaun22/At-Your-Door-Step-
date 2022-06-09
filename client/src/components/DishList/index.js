import React, { useEffect } from 'react';
import DishItem from '../DishItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_DISHES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_DISHES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function DishList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DISHES);

  useEffect(() => {
    console.log("--------Loading---------")
    console.log(data)
    if (data) {
      dispatch({
        type: UPDATE_DISHES,
        dishes: data.dishes,
      });
      data.dishes.forEach((dish) => {
        idbPromise('dishes', 'put', dish);
      });
    } else if (!loading) {
      idbPromise('dishes', 'get').then((dishes) => {
        dispatch({
          type: UPDATE_DISHES,
          dishes: dishes,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterDishes() {
    if (!currentCategory) {
      return state.dishes;
    }

    return state.dishes.filter(
      (dishes) => dishes.category._id === currentCategory
    );
  }

  return (
    <div className="my-2" >
      <h2>Our Food:  🥗</h2>
      {state.dishes.length ? (
        <div className="flex-row-customer dish-css">
          {filterDishes().map((dish) => (
            <DishItem
              key={dish._id}
              _id={dish._id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              quantity={dish.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any dishes yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default DishList;
