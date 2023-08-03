import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/web-development.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img1} alt="" text="first slide" />
          <Carousel.Caption className="caption-top">
            <h3 className="fw-bold">We Code Your Visions into Web Wonders.</h3>
            <p>
              The best websites are not built overnight; they're crafted with
              dedication and precision.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            fluid
            alt=""
            text="first slide"
          />
          <Carousel.Caption className="caption-top">
            <h3 className="fw-bold">
              Crafting Digital Experiences, One Line of Code at a Time
            </h3>
            <p>
              Embrace challenges, for they are the stepping stones to mastery in
              web development
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="" text="first slide" />
          <Carousel.Caption className="caption-top">
            <h3 className="fw-bold">Building Tomorrow's Web Today.</h3>
            <p>
              The web is your canvas, and code is your brush. Paint a
              masterpiece.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
