import React from "react";
import DishList from "../components/DishList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="homepage-container" >

     <div className='homepageBackground'>

    <button>
      
        <Link to="/prepper">
        Click to Get started
            </Link>
      </button>

    </div> 

    <div>

    <h1> Lets get started</h1>
    <Button variant="warning">Warning</Button>



 
  
     </div>

      <CategoryMenu />

        <DishList />

    
  

    

      <Cart />
    </div> 
  );
};

export default Home;
