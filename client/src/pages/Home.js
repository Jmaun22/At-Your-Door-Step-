import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';
import Button from "react-bootstrap/Button";



const Home = () => {
  return (
    <div className="homepage-container" >

     <div className='homepageBackground'>

    <button>
        Click to Get started
      </button>

    </div> 

    <div>

    <h1> Lets get started</h1>
    <Button variant="warning">Warning</Button>



 
  
     </div>

      <CategoryMenu />

        <ProductList />

    
  

    

      <Cart />
    </div> 
  );
};

export default Home;
