import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Link from './Link';
import { QUERY_CATEGORY_DISHES } from '../utils/mutations';

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [searchCategoryDishes, { error }] = useMutation(QUERY_CATEGORY_DISHES);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await searchCategoryDishes({
        variables: { name: searchFilter },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button onClick={handleSearch}>OK</button>
      </div>
    </>
  );
};

export default Search;