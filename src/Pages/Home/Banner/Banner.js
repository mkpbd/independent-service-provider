
import React, { useContext } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import { ServiceContext } from "../../../components/Service/Service";
import useService from "../../../hooks/useService";
import './Banner.css'

const Banner = () => {
    const [services] = useService();
   
  return (
   
      <Carousel className="py-5">
        {
            services.map(service =>(
                <Carousel.Item interval={2000} key={service.id} className="img-opacity">
                <img
                  className="d-block w-100"
                  src={service.serviceImage}
                  alt="First slide"
                />
                 <Container className="my-5">
                <Carousel.Caption className='py-2'>
                  <h2>{service.serviceName}</h2>
                  <p>{service.serviceSummary}</p>
                  <h3 className="text-warning">Service price {service.price}$</h3>
                  <Button className="btn btn-danger">Add Service</Button>
                 
                </Carousel.Caption>
                </Container>
              </Carousel.Item>
            ))
        }

       

       
      </Carousel>
  
  );
};

export default Banner;
