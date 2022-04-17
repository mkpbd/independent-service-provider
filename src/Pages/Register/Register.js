import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";

import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    if(user){
      navigate('/service');
    }
  

  const handleSignIn = (event)=>{
      event.preventDefault();
      const name = event.target.fullNames.value;
      setFullName(name);
      const email = event.target.email.value;
      setEmail(email);
      const password = event.target.password.value;
      setPassword(password);

      //console.log('email = ', email, "full ", name, 'pass ', password);

      if(name && email && password){
        createUserWithEmailAndPassword(email, password);
      }else{
        alert("place all file are required");
      }

     

      

  }

  return (
    <div className="container">
      <div className="row">
        <Col className="col-sm-8 col-lg-6 offset-lg-3 offset-sm-2">
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="nameId">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="fullNames" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h3 className="my-4 text-center text-secondary"><Link to='/login' className="text-decoration-none">Already account for login</Link></h3>
        </Col>
      </div>
    </div>
  );
};

export default Register;
