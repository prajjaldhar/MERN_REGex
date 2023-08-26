import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./assets/ImageCard.css";

const CardImage = ({ title, imgsrc, desc }) => {
  const [Count, setCount] = useState(50);
  const HandleClick = () => {
    setCount(Count + 1);
    console.log("Button Clicked", Count);
  };

  return (
    <Card className="custom-card" style={{ width: "18rem" }}>
      <Card.Img className="card-img" variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button onClick={HandleClick} variant="primary">
          Go somewhere
        </Button>
        {Count}
      </Card.Body>
    </Card>
  );
};

export default CardImage;
