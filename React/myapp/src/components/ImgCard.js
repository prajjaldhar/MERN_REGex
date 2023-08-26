import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/ImageCard.css"; // Import your custom styles

const ImgCard = ({ title, price, image }) => {
  return (
    <div className="col-md-3">
      <Card className="custom-card">
        <Card.Img variant="top" src={image} className="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImgCard;
