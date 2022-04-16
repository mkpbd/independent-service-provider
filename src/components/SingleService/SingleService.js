import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { ServiceContext } from '../Service/Service';

const SingleService = () => {
    const services = useContext(ServiceContext);
    return (
       <>
        {services.map(service => (
             <Col>
             <Card className='border-0 text-center d-block'>
               <Card.Title>{service.serviceName}</Card.Title>
               <Card.Img className='img-fluid h-25 w-25' src={service.serviceIcon} />
               <Card.Body>
                 <Card.Text>
                  {service.serviceSummary}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
        ))}
       </>
    );
};

export default SingleService;