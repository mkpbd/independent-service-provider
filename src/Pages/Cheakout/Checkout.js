import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container my-5 py-3">
      <Form className="">
        <div className="row border p-3">
          <Col sm="7">
            <h2 className=" py-3 d-block">Checkout</h2>
            <h5 className="border-bottom w-100 d-block">Billing Details</h5>
            <Form.Group as={Row}>
              <Col sm="6">
                <Form.Group column="sm" className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col sm="6">
                <Form.Group
                  column="sm"
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company Name (Optional) </Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country Name (Optional) </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Country Name</option>
                <option value="1">Bangladesh</option>
                <option value="2">India</option>
                <option value="3">US</option>
                <option value="4">Pakistan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Street address </Form.Label>
              <Form.Control
                type="text"
                placeholder="House number and Street name"
              />
              <Form.Control
                type="text"
                placeholder="Apartment, suite,unit etc optional"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Town/City </Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Zip </Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone </Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Order Notes</Form.Label>
              <textarea
                className="form-control form-control-sm"
                name=""
                id=""
                cols="10"
                rows="5"
              ></textarea>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Col>
          {/* product order area */}
          <Col sm="5">
           

            <Card className="p-4 border mt-5">
                <Card.Title> Your Order</Card.Title>
              <Card.Body>
                <Row className="border-bottom">
                  <Col sm="6">
                    <h5> Product</h5>
                  </Col>
                  <Col sm="6">
                    <h5> Total</h5>
                  </Col>
                </Row>
                <Row className="border-bottom">
                  <Col sm="6">
                    <h5> net niza X 1</h5>
                  </Col>
                  <Col sm="6">
                    <h5> 20$</h5>
                  </Col>
                </Row>
                <Row className="border-bottom">
                  <Col sm="6">
                    <h5> Subtotal</h5>
                  </Col>
                  <Col sm="6">
                    <h5> 20$</h5>
                  </Col>
                </Row>
                <Row className="border-bottom">
                  <Col sm="6">
                    <h5> Shipping</h5>
                  </Col>
                  <Col sm="6">
                    <h5> Enter your email address to View Shipping options</h5>
                  </Col>
                </Row>
                <Row className="border-bottom">
                  <Col sm="6">
                    <h5> Total</h5>
                  </Col>
                  <Col sm="6">
                    <h5> 20$</h5>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="border-0 bg-white">
                  
            <Button
              className="w-100 btn btn-danger"
              variant="primary"
              type="submit"
            >
              Check out Process
            </Button>
              </Card.Footer>
            </Card>

          </Col>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
