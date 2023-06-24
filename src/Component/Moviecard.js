import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

// MovieCard component


const Moviecard = ({movie}) => {
  return (
    // MovieList component

  
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
        {movie.description}
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>

        <ReactStars
          count={6}
          size={20}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          value={movie.rating}
          edit={false}
          />
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard
