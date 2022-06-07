import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../pages/pagesCSS/HomePage.css';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";

const Home = () => {

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
        
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
 {/* dish name */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">🍲</InputGroup.Text>
    <FormControl
      placeholder="Dish Name"
      aria-label="Username"
      aria-describedby="basic-addon1"

    
    />
      </InputGroup>
    {/* description */}
   

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">📝</InputGroup.Text>
    <FormControl
      placeholder="Dish Description"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
{/* image */}
<div className="m-3">
      <label className="mx-3">🖼️ Choose image: </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primary">Upload food pic</button>
    </div>
{/* price */}
<InputGroup className="mb-3">
    <InputGroup.Text>💰$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
  {/* ingredients */}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="🧂Ingredients" />
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
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>





  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
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

    

    
  

    

      <Cart />
    </div> 
  );
};

export default Home;
