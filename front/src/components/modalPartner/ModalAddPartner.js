import React from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { addPartner } from '../../actions/adminActions'
import { useDispatch } from "react-redux";
import axios from 'axios';

const ModalAddPartner = ({ handleClose, handleShow }) => {

  //state file pour logo
  const [file, setFile] = useState(null)



  const dispatch = useDispatch();

  const [newInput, setNewInput] = useState({
    categories: "",
    title: "",
    nameManger: "",
    e_mail: "",
    phoneNum: "",
    desc: "",
    address: "",
    logo: "",
    photos: "",
    videos: "",
    facebook: "",
    instagram: "",
  })

  const handleChange = (e) => {
    setNewInput({ ...newInput, [e.target.name]: e.target.value })
  }
  //  console.log(show )

  //file image
  const selectImage = (e) => {
    setFile(e.target.files[0])
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(addPartner(newInput, file), handleClose())

    //poru image with schema image
    // let formData= new FormData()
    // formData.append("avatar", file)
    // axios.post("http://localhost:5000/img",formData)
    // .then(res=>console.log(res.data))
  }





  return (

    <>


      <Modal show={handleShow} onHide={handleClose}  >
        <Modal.Header closeButton >
          <Modal.Title>List of Partner</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>


            {/* <Form.Control type="text" onChange={handleChange}
              name="categories" placeholder="categories"  autoFocus/> */}

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Categories
              </Form.Label>
              <Col sm="10">
                <Form.Select className="mb-3" name="categories" onChange={handleChange}>
                  <option value="select">Select Option</option>
                  <option value="Salle">Salle des fetes</option>
                  <option value="Photographe">Photographe</option>
                  <option value="Troupe">Troupe</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Title:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  name="title"
                  autoFocus />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Name Manger:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Manger"
                  onChange={handleChange}
                  name="nameManger"
                  autoFocus />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Email address:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="e_mail"
                  autoFocus />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Phone Number:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number"
                  placeholder="phoneNum"
                  onChange={handleChange}
                  name="phoneNum"
                  autoFocus />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Descreption:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="desc"
                  onChange={handleChange}
                  name="desc"
                  autoFocus />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Address:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Address"
                  onChange={handleChange}
                  name="address"
                  autoFocus />
              </Col>
            </Form.Group>


            {/* logo with schema partner */}
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Logo:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Logo"
                  onChange={handleChange}
                  name="logo"
                  autoFocus />
              </Col>
            </Form.Group>

            {/* logo in another schema */}
            {/* <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">
        Logo:
                </Form.Label>
        <Col sm="10">
          <Form.Control type="file"
            placeholder="Logo" 
            onChange={selectImage}
            name="avatar"     
            autoFocus/>
        </Col>
      </Form.Group> */}


            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Photos:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Photo"
                  onChange={handleChange}
                  name="photos"
                  autoFocus />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Videos:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="Video"
                  onChange={handleChange}
                  name="videos"
                  autoFocus />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Facebook:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="facebook"
                  onChange={handleChange}
                  name="facebook"
                  autoFocus />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="2">
                Instagram:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  placeholder="instagram"
                  onChange={handleChange}
                  name="instagram"
                  autoFocus
                />
              </Col>
            </Form.Group>


          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalAddPartner
