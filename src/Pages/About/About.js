import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './About.css'

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("data/aboutme.json")
      .then((data) => data.json())
      .then((data) => setAbout(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={10} className="offset-1">
            {about.map((ab) => (
              <Card className="p-4">
                <Card.Img className="img-fluid img-size"  src={ab.image}></Card.Img>
                <Card.Title className="text-center py-5">
                  Name: {ab.name}
                </Card.Title>
                <Card.Body>
                  {ab.myGoal}

                  {
                    <ul class="list-group list-group-flush my-2">
                      {ab.Skill.map((s, index) => (
                        <li key={index} class="list-group-item">
                          {s}
                        </li>
                      ))}
                    </ul>
                  }
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
