import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/forgotpassword', {
        email,
      });

      console.log(response.data);
      
    } catch (error) {
      setErrorMessage('Error during password reset. Please try again.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-50">
      <Form className="text-center">
        <h2>Forgot Password</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Button onClick={handleForgotPassword} variant="danger">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
