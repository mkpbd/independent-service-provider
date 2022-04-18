
import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../Service/Service';
import './SingelService.css'

const SingleService = () => {
    const services = useContext(ServiceContext);
    return (
       <>
        {services.map(service => (
             <Col key={service.id}>
             <Card className='border-0 text-center h-100 d-block p-3 bg-dark text-white card-hover'>
               <Card.Title className='title-font-weight my-3'>{service.serviceName}</Card.Title>
               <Card.Img className='img-fluid h-25 w-25' src={service.serviceIcon} />
               <Card.Body>
                 <Card.Text>
                  {service.serviceSummary}
                 </Card.Text>
                 <Card.Link className='link text-decoration-none text-white'>Service Charge: {service.price}$</Card.Link>
                 
               </Card.Body>
               <Card.Footer>
                  <Link to='/checkout'>  <Button className='btn btn-danger' >Checkout Service</Button></Link>
               </Card.Footer>
             </Card>
           </Col>
        ))}
       </>
    );
};

export default SingleService;