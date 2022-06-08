import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';

import Carousel from 'react-bootstrap/Carousel'
import '../pages/pagesCSS/PrepperPage.css';



const Prepper = () => {
  return (
    <div className="homepage-container" >

   

     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/food-bags.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Feed your Family</h3>
      <p>Sign up for tasty meals!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/preped-food.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Spice up your palete!!</h3>
      <p>Try some truely authentic food from one of our preppers.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/kitchen-food.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Want to make some extra cash??</h3>
      <p>Quick sign up to be a prepper to start earning.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    



    <div>

    <h1> Lets get started</h1>




 
  
     </div>

      <CategoryMenu />

        <ProductList />

    
  

    

      {/* <Cart /> */}
    </div> 
  );
};

export default Prepper;
