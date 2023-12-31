import React from "react";
import { useState } from 'react';
import {Modal,Button,Form,FormControl,InputGroup} from 'react-bootstrap';

const Addmovie = ({movies,setMovies}) => {
    const [show, setShow] = useState(false);
    const [newTitle,setNewTitle]=useState()
    const [newRate,setNewRate]=useState()
    const [newPoster,setNewPoster]=useState()
    const [newDescription,setNewDescription]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const NewMovie=()=>{
    let newMovie={
      id:Math.random(),
      name:newTitle,
      image:newPoster,
      rating:newRate,
      description:newDescription
    }
     
  setMovies([...movies,newMovie])
  handleClose()
  }
  return (
    <div>
      <div>
        <Button variant="primary"  onClick={handleShow}>
          Add New Movie
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Enter Movie title
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </InputGroup>
            <br />

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Enter Movie Rating
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setNewRate(e.target.value)}
              />
            </InputGroup>
            <br />

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Enter Movie PosterURL
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setNewPoster(e.target.value)}
              />
            </InputGroup>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter Movie Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={NewMovie}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Addmovie;
