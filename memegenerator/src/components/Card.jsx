import React from "react";
import {useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../card.css'

const MemeCard = (props) => {

    const navigate=useNavigate();

  return (
    <Card style={{ width: "18rem", margin:"10px"  }} className="card">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Button variant="primary" onClick={(e)=>navigate(`/edit?url=${props.img}`)}>Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
