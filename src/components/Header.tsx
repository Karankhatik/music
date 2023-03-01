import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Container>
        {/* Left side of the header where we have image */}
        <Row>
          <Col sm={10} style={{ paddingTop: "20px" }}>
            <div className="img"></div>
          </Col>
          {/* Right side of the header where we have text */}
          <Col
            sm={2}
            style={{ paddingTop: "20px", fontWeight: "bold", color: "white" }}
          >
            <p>Your Favourtie music all day 🌞and all night 🌚</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
