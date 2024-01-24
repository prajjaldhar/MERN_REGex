import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, imgsrc, desc, btn }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default ProjectCard;
