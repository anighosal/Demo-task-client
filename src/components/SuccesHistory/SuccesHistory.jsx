import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import "./SuccesHistory.css";

const SuccesHistory = ({ winner }) => {
  const { name, description, image, company } = winner;
  return (
    <Col style={{ rowGap: "2rem" }} md={3}>
      <Card
        className="story"
        style={{ width: "18rem", height: "32rem", position: "relative" }}
      >
        <Card.Img
          className="card-img-top"
          style={{ height: "12rem" }}
          variant="top"
          src={image}
        />
        <Card.Body style={{ position: "relative" }}>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Company: {company}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Button
            variant="outline-success"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "90%",

              transform: "translateX(-50%)",
            }}
          >
            <FaAngleRight></FaAngleRight>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SuccesHistory;
