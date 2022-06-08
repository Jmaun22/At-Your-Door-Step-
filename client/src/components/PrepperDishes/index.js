import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useMyDishesContext } from '../../utils/GlobalState';
import { UPDATE_DISHES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_MY_DISHES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function DishListPrepper() {
  const { loading, data } = useQuery(QUERY_MY_DISHES);
  console.log(data)
  const userData = data?.myDishes || {};
  console.log(userData)

  // const [deleteBook] = useMutation(REMOVE_BOOK);

  // // create function that accepts the book's mongo _id value as param and deletes the book from the database
  // const handleDeleteBook = async (bookId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     console.log(bookId)
  //     const { data } = await deleteBook({
  //       variables: { bookId },
  //     });

  //     // upon success, remove book's id from localStorage
  //     removeBookId(bookId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="my-2">
      <h2>Our Food:</h2>
      {userData.length ? (
        <div className="flex-row">
    
          {userData.map((dish) => (
            <ProductItem
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
  )
};

export default DishListPrepper;
