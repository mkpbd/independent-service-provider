import React, { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Register.css'

import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  // const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

  if(error){
    toast(error.message);
  }
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
        updateProfile({displayName: name})
      }else{
        toast("place all file are required");
      }

     

      

  }

  return (
    <div className="containers rgBg-color">
      <div className="row gx-0 py-5">
        <Col className="col-sm-8 col-lg-6 offset-lg-3 offset-sm-2">
         <Card>
            <Card.Body>
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
              Sing Up
            </Button>
            <ToastContainer></ToastContainer>
          </Form>
          <h6 className="my-4 text-center text-secondary"><Link to='/login' className="text-decoration-none">Already account for login</Link></h6>
            </Card.Body>
         </Card>
        </Col>
      </div>
    </div>
  );
};

export default Register;
