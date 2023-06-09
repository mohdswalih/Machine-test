import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handelLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));
    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem("loggedin", true);
      navigate("/home");
    }
    else {
      alert("wrong Email Or Password")

    }
  };

  return (
<div>
<div id='log'style={{textAlign:'right'}}>
              Don't have an account: 
              <button style={{ backgroundColor: 'skyblue', padding: '6px', borderRadius: '5px' }} >
      <Link style={{textDecoration:'none'}}  to="/register" id='butn'>Register</Link>
      </button>
      </div>
    
    <div className='login'>
      <Form onSubmit={handelLogin}>
        <div className='cards'>
        <h1>Login</h1>

        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="email" placeholder="Enter email" />
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="password" placeholder="Password" />
        </Form.Group>
        <br></br><br></br>

        <Button variant="primary" type="submit" id='but'>
          Login        </Button>

        <br></br>
        <Form.Group>
        </Form.Group>
        </div>
      </Form>
    </div>

    </div>
  )
}

export default Login
