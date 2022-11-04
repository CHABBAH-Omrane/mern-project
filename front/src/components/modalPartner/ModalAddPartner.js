import React from 'react'
import {Button,Form,Modal} from 'react-bootstrap'
import { useState } from 'react'


const ModalAddPartner = ({handleShow,handleClose,show }) => {

  const [newInput,setNewInput]= useState()
  const handleChange=(e)=>{
    setNewInput({...newInput,[e.target.name]:e.target.value})
  }
 console.log(show )
  return (
   
        <Modal show={handleShow} onHide={handleClose}>
    <Modal.Header closeButton> 
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Categorie:</Form.Label>
          <Form.Control
            type="text"
              onChange={handleChange}
              name="categorie"
            placeholder="categorie"
            autoFocus
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={handleChange}
            name="title"
            autoFocus
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name Manger:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Manger"
            onChange={handleChange}
            name="nameManger"
            autoFocus
          />
          </Form.Group> 
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleChange}
            name="e_mail"
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone 1"
            onChange={handleChange}
            name="num1"
            autoFocus
          />
          <Form.Control
            type="text"
            placeholder="phone 2"
            onChange={handleChange}
            name="num2"
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        ><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          autoFocus
        />
        </Form.Group> 
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Logo:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Logo"
            onChange={handleChange}
            name="logo"
            autoFocus
          />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Photos:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Photo"
            onChange={handleChange}
            name="photos"
            autoFocus
          />
          </Form.Group> 
           
          <Form.Label>Link Facebook:</Form.Label>
          <Form.Control
            type="text"
            placeholder="facebook"
            onChange={handleChange}
            name="facebook"
            autoFocus
          />
          </Form.Group>
        
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
  
  )
}

export default ModalAddPartner
