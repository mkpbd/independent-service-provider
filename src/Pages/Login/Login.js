import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <Col className="sm-8 col-lg-6 offset-lg-3 offset-sm-2">
          <Card className="text-center">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          {/* Social Media  Login  */}

          <div className="text-center">
            <h2>---------------- OR --------------------</h2>
            <Button className="my-2 btn btn-lg btn-secondary">
              Google Account
            </Button>{" "}
            <br></br>
            <Button className="my-2 btn btn-lg btn-secondary">
              GitHub Account
            </Button>
           
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Login;
