import React from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Heart } from "react-bootstrap-icons";

type Props = {};
var img: string = "";

//Header and method of the api
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "099b161b4cmsh63662cb4bb98abcp1e615ajsn282625f09d93",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

//Music Card function
const MusicCard = (props: Props) => {
  //this state is used for storing the api get data
  const [data, setData] = useState<any>();

  const [cardKey, setCardKey] = useState(null);

  //useEffect use When component mount the fetch api fatches the api and store it into the data state
  useEffect(() => {
    fetch(
      "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        //setData set data
        setData(response.tracks);
      })
      .catch((err) => console.error(err));
  }, []);

  const addToFavourite = (key: any) => {
    //to fine the music card from the data using the key
    const selectedCard = data.find((card: any) => card.key === key);

    //set the local storage with key and music card data
    localStorage.setItem(key, selectedCard);
  };

  return (
    <>
      <Container>
        <Row>
          {/* using the map funtion to take out the data from the data  */}
          {data.map((music: any) => {
            //Accesing the image link
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
                  {/* Music card Image */}
                  <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: "100%", height: "100px", color: "green" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      {/* Music Title */}
                      {music.title}
                      <Button
                        onClick={() => addToFavourite(music.key)}
                        variant="link"
                      >
                        <Heart />
                      </Button>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default MusicCard;
