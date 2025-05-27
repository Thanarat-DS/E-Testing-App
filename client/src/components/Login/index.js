import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import place_holder_logo from '../../images/place_holder_logo.jpg';
import APIDomain, { API_AUTH_URL } from '../../APIs/api';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
        const response = await axios.post(
          API_AUTH_URL +"/api/login",
          { username, password },
          { withCredentials: true } // ให้ browser ส่ง cookie ได้
        );
        onLogin(); // เรียกฟังก์ชันที่ได้จาก App.js เพื่ออัปเดต state
      } catch (error) {
        console.error("Login Error:", error);
        setErrorMessage(
          error.response?.data?.error || "Failed to connect to the server."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' stackable>
      <Grid.Column mobile={16} tablet={8} computer={6} style={{ maxWidth: 450 }}>
        <Image src={place_holder_logo} size='Large' centered />
        <Header as='h2' style={{ color: 'rgb(80, 45, 30)' }} textAlign='center'>
            E-Testing | Log-in to your account
        </Header>
        {errorMessage && <Message negative>{errorMessage}</Message>}
        <Form size='large' onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              style={{ backgroundColor: 'rgb(80, 45, 30)', color: 'white' }}
              fluid
              size='large'
              type='submit'
              loading={loading}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Forgot password? <a href='#'>Reset Password</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
