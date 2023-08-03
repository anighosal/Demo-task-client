import React from "react";
import img from "../../assets/Consulting_model-1.png";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5 fw-bold">About Us</h2>
      <div className="d-flex gap-5">
        <div className="picture">
          <img className="w-30" src={img} alt="" />
        </div>
        <div>
          <h2>Mission and Values of TechMagnetHire:</h2> <br />
          <p className="bg-secondary p-3 rounded text-white">
            At TechMagnetHire, our mission is to bridge the gap between
            exceptional tech talent and innovative companies worldwide. We are
            committed to providing a seamless platform that connects highly
            skilled software engineers, visionary product managers, and
            brilliant data scientists with organizations eager to drive
            technological advancements.
          </p>
          <br />
          <p className="bg-secondary p-3 rounded text-white">
            Our core values are deeply rooted in fostering growth, embracing
            diversity, and nurturing collaboration. We believe in empowering our
            partners with the finest tech talent, creating opportunities for
            mutual growth, and transforming challenges into solutions through
            innovation and teamwork.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
