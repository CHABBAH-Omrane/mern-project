import React from 'react'
import {Button,Form,Modal ,Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import { updatePartnerById} from '../../actions/adminActions'
import { useDispatch } from "react-redux";


const ModalPartnerUpdate = ({handleCloseUpdate,handleShowUpdate,el}) => {

 
  const dispatch = useDispatch();

  const [newInputUpdate,setNewInputUpdate]= useState(el)
    // categories:"",
    // title:"",
    // nameManger:"",
    // e_mail:"",
    // phoneNum:"",
    // desc:"",
    // address: "",
    // logo:"",
    // photos:"",
    // videos:"",
    //  facebook:"",
    //  instagram:"",
  
  const handleChangeUpdate=(e)=>{
    setNewInputUpdate({...newInputUpdate,[e.target.name]:e.target.value})
    e.preventDefault()
  }

  return (
   
   <div key={newInputUpdate._id}>
    {console.log("update",newInputUpdate)}
        <Modal show={handleShowUpdate} onHide={handleCloseUpdate}  >
    <Modal.Header closeButton > 
      <Modal.Title>Edit Partner</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
    <Form>

      
     

    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Categories
        </Form.Label>
        <Col sm="10">
        <Form.Select className="mb-3" name="categories" onChange={handleChangeUpdate}>
          {/* <option value={el.categories}>Select Option</option> */}
      <option value="salle">Salle des fetes</option>
      <option value="photographe">Photographe</option>
      <option value="troupemusical">Troupe musical</option>
    </Form.Select>
        </Col>
      </Form.Group>

    


      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Title:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
            placeholder={newInputUpdate.title}
            onChange={handleChangeUpdate}
            name="title"
            autoFocus />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Name Manger:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
            value={newInputUpdate.nameManger}
            onChange={handleChangeUpdate}
            name="nameManger"
            autoFocus />
        </Col>
      </Form.Group>


          
<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Email address:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="email"
            placeholder={newInputUpdate.e_mail}
            onChange={handleChangeUpdate}
            name="e_mail"
            autoFocus />
        </Col>
      </Form.Group>
          
      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Phone Number:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="number"
            placeholder={newInputUpdate.phoneNum}
            onChange={handleChangeUpdate}
            name="phoneNum"
            autoFocus />
        </Col>
      </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Descreption:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
          placeholder={newInputUpdate.desc}
          onChange={handleChangeUpdate}
          name="desc"
          autoFocus/>
        </Col>
      </Form.Group>

        

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Address:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
          placeholder={newInputUpdate.address}
          onChange={handleChangeUpdate}
          name="address"
          autoFocus/>
        </Col>
      </Form.Group>

          

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Logo:
                </Form.Label>
        <Col sm="10">
          <Form.Control type="text"
            placeholder={newInputUpdate.logo}
            onChange={handleChangeUpdate}
            name="logo"
            autoFocus/>
        </Col>
      </Form.Group>

        

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Photos:
                </Form.Label>
        <Col sm="10">
          <Form.Control type="text"
            placeholder={newInputUpdate.photos}
            onChange={handleChangeUpdate}
            name="photos"
            autoFocus/>
        </Col>
      </Form.Group>

         

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Videos:
                </Form.Label>
        <Col sm="10">
          <Form.Control type="text"
            placeholder={newInputUpdate.videos}
            onChange={handleChangeUpdate}
            name="videos"
            autoFocus/>
        </Col>
        </Form.Group>

          

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Facebook:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
            placeholder={newInputUpdate.facebook}
            onChange={handleChangeUpdate}
            name="facebook"
            autoFocus/>
        </Col>
        </Form.Group>

         

<Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Instagram:
                </Form.Label>
        <Col sm="10">
          <Form.Control  type="text"
            placeholder={newInputUpdate.instagram}
            onChange={handleChangeUpdate}
            name="instagram"
            autoFocus
            />
        </Col>
        </Form.Group>
          
      </Form>
      
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseUpdate}>
        Close
      </Button>
      <Button variant="primary" type="submit"  onClick={()=>dispatch(updatePartnerById(newInputUpdate._id,newInputUpdate) , handleCloseUpdate())} >
        Edit
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )   
}

export default ModalPartnerUpdate
