import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import "./GithubUserSearch.css";

const GithubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData(null);
    }
  };

  return (
    <Container className="mt-4 github-search-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>GitHub Username</Form.Label>
              <div className="search">
                <Form.Control
                  type="text"
                  placeholder="Enter GitHub username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </Form.Group>
            <Button variant="primary" onClick={handleSearch} block>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      {userData && (
        <Row className="mt-4 justify-content-center">
          <Col md={6}>
            <Card className="user-card">
              <Card.Body>
                <div className="text-center">
                  <Image
                    src={userData.avatar_url}
                    className="user-card-img"
                    roundedCircle
                  />
                </div>
                <Card.Title className="text-center user-card-title">
                  {userData.login}
                </Card.Title>
                <Card.Text className="text-center user-card-text">
                  Followers: {userData.followers}
                </Card.Text>
                <Card.Text className="text-center user-card-text">
                  Repositories: {userData.public_repos}
                </Card.Text>
                <div className="text-center">
                  <Card.Link
                    href={userData.html_url}
                    className="user-card-link"
                    target="_blank"
                  >
                    GitHub Profile
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GithubUserSearch;
