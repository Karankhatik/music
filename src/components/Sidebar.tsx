import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <Navbar className="sidebar">
        <Container fluid>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }}></Nav.Link>
            <Nav.Link as={Link} to="/playlist" style={{ color: "white" }}>
              Playlist
            </Nav.Link>
            <Nav.Link as={Link} to="/favourites" style={{ color: "white" }}>
              Favourites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
