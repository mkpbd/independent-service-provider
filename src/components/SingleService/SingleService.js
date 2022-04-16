
import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { ServiceContext } from '../Service/Service';
import './SingelService.css'

const SingleService = () => {
    const services = useContext(ServiceContext);
    return (
       <>
        {services.map(service => (
             <Col key={service.id}>
             <Card className='border-0 text-center d-block p-3 bg-dark text-white card-hover'>
               <Card.Title className='title-font-weight my-3'>{service.serviceName}</Card.Title>
               <Card.Img className='img-fluid h-25 w-25' src={service.serviceIcon} />
               <Card.Body>
                 <Card.Text>
                  {service.serviceSummary}
                 </Card.Text>
                 <Button type="href">Service Charge: {service.price}$</Button>
                 
               </Card.Body>
             </Card>
           </Col>
        ))}
       </>
    );
};

export default SingleService;