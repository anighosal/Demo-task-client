import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SuccesHistory from "../SuccesHistory/SuccesHistory";

const Succes = () => {
  const [win, setWin] = useState([]);

  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setWin(data));
  }, []);
  return (
    <Container className="mt-5 px-3">
      <h2 className="fw-bold text-center text-success mb-5">
        ---------- Our Success Story --------
      </h2>
      <Row>
        {win.map((winner) => (
          <SuccesHistory key={winner.id} winner={winner}></SuccesHistory>
        ))}
      </Row>
    </Container>
  );
};

export default Succes;
