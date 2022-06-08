import React from "react";

import DishList from "../components/DishList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_DISH } from "../utils/mutations";
// import PrepperMenu from "../components/PrepperDishes";
import CategoryMenu from "../components/CategoryMenu";


const Home = () => {


  const [formState, setFormState] = useState({ name: '', description: '', image: '',price: '', category: '', ingredients: ''});
  const [addDish, { error }] = useMutation(ADD_DISH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   alert(`sumbitted ${formState.name}`);
   console.log('working')
   console.log(formState)
    try {
      const mutationResponse = await addDish({
        variables: { ...formState },
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

     <div className='homepageBackground'>

    <button>
      
        <Link to="/prepper">
        Click to Get started
            </Link>
      </button>

    </div> 

    <div>

    <h1> Lets get started</h1>


    <Button variant="primary" onClick={handleShow}>
       Get prepping add a Dish!!
      </Button>

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
<div className="m-3">
      <label className="mx-3">🖼️ Choose image: </label>
      <input className="d-none" type="file" name="image" onChange={handleChange}/>
      <button className="btn btn-outline-primary">Upload food pic</button>
    </div>
{/* price */}
<InputGroup className="mb-3">
    <InputGroup.Text >💰$</InputGroup.Text>

    <InputGroup.Text >.00</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" name='price'  onChange={handleChange}/>
  </InputGroup>
  {/* ingredients */}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="" name='ingredients' placeholder="🧂Ingredients" onChange={handleChange} />
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

     <h1>Your prepper dishes</h1>
      <CategoryMenu />
      <DishList />


     <div>

     </div>
  
  

    

      <Cart />
    </div> 
  );
};

export default Home;
