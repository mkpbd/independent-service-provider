import React, { useRef } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithGithub,
  useSendEmailVerification,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'
const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return;
  }

  if (user || userGit || userGoogle) {
    navigate(from, { replace: true });
  }
  const handleSigneGoole = () => {
    signInWithGoogle();
  };

  if(error){
     //console.log('error', error.message);
    toast("user name or password dose not match");

  }

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    if(email && password){
      signInWithEmailAndPassword(email, password);
      toast("Login success full");
      return;
    }
    toast("place give valid email and password");


    
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("password reset send");
    } else {
      toast("place valid Email address");
    }
  };

  return (
   <div className="login-bg pt-2 py-3">
      <div className="container">
      <div className="row">
        <Col className="sm-8 col-lg-6 offset-lg-3 offset-sm-2">
          <Card className="border">
            <Card.Body>
              <ToastContainer></ToastContainer>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    ref={emailRef}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>

              <div className="py-3">
              <p>
               
               Forget Password
               <span className="ms-2 text-primary pointer"  onClick={handleResetPassword}>
                 Reset password
               </span>
             </p>
             <p>
               You have no account <Link to='/signup' className="ms-2 text-decoration-none">Sing Up</Link>
             </p>
              </div>

          
          {/* Social Media  Login  */}

          <div className="text-center">
            <h6>---------------- OR --------------------</h6>
            <Button
              onClick={handleSigneGoole}
              className="my-2 btn btn-sm btn-secondary"
            >
              Google Account
            </Button>{" "}
            <br></br>
            <Button
              onClick={() => signInWithGithub()}
              className="my-2 btn btn-sm btn-secondary"
            >
              GitHub Account
            </Button>
          </div>
          </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
   </div>
  );
};

export default Login;
