
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ResetPassword = () => {
    const navigate=useNavigate
  const { randomString } = useParams();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/reset-password/${randomString}`, {
        password,
      });

      console.log(response.data);
         navigate('/')

    } catch (error) {
      setErrorMessage('Error during password reset. Please try again.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-50">
      <Form className="text-center">
        <h2>Reset Password</h2>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Button onClick={handleResetPassword} variant="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
