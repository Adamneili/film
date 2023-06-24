import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";


function Navbarapp({nameSearch, setNameSearch,rateSearch,setRateSearch,movies,setmovies}) {
 const handleChange=(event)=>{setNameSearch(event.target.value)}
 const ratingChanged=(e)=>{
setRateSearch(e)
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary"
    Navbar bg="white">
      <Container fluid>
        <Navbar.Brand  style={{color: 'red',fontSize: "40px",}}>Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={nameSearch}
              onChange={handleChange}

            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ReactStars
          count={6}
          onChange={ratingChanged}
          size={20}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          value={rateSearch}
          edit={true}
          />
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;