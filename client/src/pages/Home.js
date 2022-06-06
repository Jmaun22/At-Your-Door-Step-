import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';

const Home = () => {
  return (
    <div className="homepageBackground" >

    {/* <div className='homepageBackground'>
    <h1> yoy</h1>

    </div> */}

      <CategoryMenu />
      {/* <ProductList /> */}

      <button>
        Click to Get started
      </button>

      <Cart />
    </div>
  );
};

export default Home;
