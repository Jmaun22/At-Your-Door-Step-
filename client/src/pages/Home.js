import React from "react";

import DishList from "../components/DishList";
// import CategoryMenu from "../components/CategoryMenu";


import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { InputGroup, FormControl, Dropdown, DropdownButton, Card} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_DISH } from "../utils/mutations";
import Footer from "../components/Footer";
import PrepperDishes from "../components/PrepperDishes";




const Home = () => {


  const [formState, setFormState] = useState({ name: '', description: '', image: '', price: '', category: '', ingredients: ''});
  const [addDish, { error }] = useMutation(ADD_DISH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   alert(`sumbitted ${formState.name}`);
   console.log('working')
   console.log(formState)
    try {
      console.log(formState.name)
      console.log(formState.price)
      console.log(formState.category)
      console.log(formState.ingredients)
      console.log(formState.description)
      console.log(formState.image)
      const { mutationResponse } = await addDish({
        variables: {
          name: formState.name,
          ingredients: formState.ingredients,
          price: formState.price,
          category: formState.category,
          description: formState.description,
          image: formState.image
        },
      });
      console.log(mutationResponse);
  
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 



  return (
    <div className="homepage-container" >

     <div >
     <img  src="images/door-step.jpg">
   
     </img>

    <button className="customer-btn">
      
        <Link to="/prepper" className="prepperbtn">
        Click here to see your dishes
            </Link>
      </button>

    </div> 

    <div>

{/* add a dish div */}

   <div className="prepper-module">
    <h1> Lets get started as a Prepper 🚀</h1>


   
      <button onClick={handleShow}  id='module-btn' >
      Get prepping add a Dish!!🍲
      </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your dish here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
 {/* dish name */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"  >🍲</InputGroup.Text>
    <FormControl name="name"  onChange={handleChange}
      placeholder="Dish Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
      </InputGroup>
    {/* description */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1" >📝</InputGroup.Text>
    <FormControl name="description" onChange={handleChange}
      placeholder="Dish Description"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
{/* image */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1" >🖼️</InputGroup.Text>
    <FormControl name="image" onChange={handleChange}
      placeholder="URL"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
{/* price */}
<InputGroup className="mb-3">
    <InputGroup.Text >💰$</InputGroup.Text>

    <InputGroup.Text >.00</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" name='price'  onChange={handleChange}/>
  </InputGroup>
  {/* ingredients */}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <FormControl type="" name='ingredients' placeholder="🧂Ingredients" onChange={handleChange} />
  </Form.Group>


{/* category */}
<InputGroup className="mb-3">
    <DropdownButton  
      variant="outline-secondary"
      title="🥘Dish Category"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#"></Dropdown.Item>
      <Dropdown.Item href="#">Vagetarian</Dropdown.Item>
      <Dropdown.Item href="#">Mexican</Dropdown.Item>
      <Dropdown.Item href="#">Chinese</Dropdown.Item>
      <Dropdown.Item href="#">Italian</Dropdown.Item>
      <Dropdown.Item href="#">Desserts</Dropdown.Item>
      <Dropdown.Item href="#">Beverages</Dropdown.Item>
      <Dropdown.Item href="#">Baked Goods</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with dropdown button" name='category' onChange={handleChange}/>
  </InputGroup>





  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleFormSubmit}>
    Submit
  </Button>
</Form>
        
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 
    



 
   
     </div>
     <div className="prepper-benfits">
     <Card className="bg-dark text-white">
  <Card.Img src="images/cash.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Cash☘️</Card.Title>
   
    <Card.Text> Make some meal earn some extra cash!!</Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="images/schedule.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Own your schedule🗓</Card.Title>
    <Card.Text>
      Make meals on your own time and schedule them to be made at your own time!!
    </Card.Text>
 
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="images/call.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Support at every turn📞</Card.Title>
  
    <Card.Text>Get support every step of the way reach out to us!</Card.Text>
  </Card.ImgOverlay>
</Card>




     </div>
   
    <div className="our-dishes"> 
     <h1>Your prepper dishes 🥣</h1>
     <div style={{width: '100%'}}> 
     <PrepperDishes />
     </div>

     </div>

 

     <div>
  
     <Cart />
     <Footer />

     </div> 
    
    </div> 
    

  );
};

export default Home;
