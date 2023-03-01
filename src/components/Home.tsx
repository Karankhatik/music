import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import MusicCard from "./MusicCard";
import Sidebar from "./Sidebar";
// import  Header  from './Header'

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* //Side bar */}
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          {/* //Header and page content  */}
          <Col xs={10} id="page-content-wrapper">
            <Header />
            <MusicCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
