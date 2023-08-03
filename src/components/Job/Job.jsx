import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaArrowRight, FaBeer } from "react-icons/fa";

const Job = ({ job }) => {
  const { title, thumbnail, description } = job;
  return (
    <Container>
      <Card>
        <div className="job-listing">
          <Card.Img variant="top" src={thumbnail} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Button variant="outline-success">
            View More <FaArrowRight></FaArrowRight>{" "}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Job;
