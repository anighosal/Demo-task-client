import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="bg-secondary mt-5">
      <Row>
        <Col className="text-white">
          <h2>Contact</h2>
          <h4>webdite: www.TechMagnetHire.com</h4>
          <p>
            Embrace challenges, for they are the stepping stones to mastery in
            web development. In the world of web development, every problem you
            solve is a new skill you gain." "The web is your canvas, and code is
            your brush.
          </p>
          <FaFacebook></FaFacebook> <FaLinkedinIn></FaLinkedinIn>{" "}
          <FaTwitter></FaTwitter>
        </Col>

        <Col className="text-white">
          <h2>Address</h2>
          <p>
            Name: TechMagnetHire <br /> Address: 123 Main Street, Suite 456{" "}
            <br /> City: Anytown State/Province: Any State/Province Postal code:
            12345 Country: United States <br /> Phone number: +1 (123) 456-7890
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
