import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import { Heart } from "react-bootstrap-icons";

type Props = {};
var img: string = "";
const Favorite = (props: Props) => {
  //set the data
  // const [data, setData] = useState(null);


  return (
    <>
    {/* Navbar for back to home page */}
      {/* <Container>
        <Row>
          {data.map((music: any) => {
            if (music.images !== undefined) {
              img = music.images["coverart"];
            }
            return (
              <Col xs={2} key={music.key}>
                <Card
                  style={{
                    width: "9rem",
                    marginTop: "30px",
                    height: "11rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: "100%", height: "100px", color: "green" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      {music.title}
                      <Button variant="link">
                        <Heart />
                      </Button>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container> */}
    </>
  );
};

export default Favorite;
