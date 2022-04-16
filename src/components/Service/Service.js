import React, { createContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useService from "../../hooks/useService";
import SingleService from "../SingleService/SingleService";
import "./Service.css";

export const ServiceContext = createContext([]);
const Service = () => {
  const [service] = useService();
  return (
    <ServiceContext.Provider value={service}>
      <div className="serviceImage py-5">
        <Container className="my-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            <SingleService></SingleService>
          </Row>
        </Container>
      </div>
    </ServiceContext.Provider>
  );
};

export default Service;
