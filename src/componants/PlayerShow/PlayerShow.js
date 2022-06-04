import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayerShow.css'

const PlayerShow = ({player}) => {
    console.log(player);
    const {idCategory,strCategory,strCategoryThumb} = player;
    return (
        <div>
            
            <Card className='my-card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strCategoryThumb} />
  <Card.Body>
    <Card.Title className='card-text'>{strCategory}</Card.Title>
    
  </Card.Body>
  
  <Card.Body>
    <p className='bitton'><Link to={`/food/${strCategory}`} className='btn btn-outline-primary'>see Detailes</Link></p>
  </Card.Body>
</Card>
        </div>
    );
};

export default PlayerShow;