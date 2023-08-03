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
          <Card.Title>{description}</Card.Title>
          <Card.Text>
            Join our team of skilled software engineers & Product Manager and
            contribute to cutting-edge projects in the tech industry.
          </Card.Text>
          <Button variant="outline-success">
            View More <FaArrowRight></FaArrowRight>{" "}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Job;
