import React from 'react'
import "./Reg.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


import {  Button,Form } from 'react-bootstrap';
const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/")
  };


  return (
    <div>
<div id='log'style={{textAlign:'right'}}>
              Already have an account: 
              <button style={{ backgroundColor: 'skyblue', padding: '6px', borderRadius: '5px' }} >
      <Link style={{textDecoration:'none'}}  to="/" id='butn'>Login</Link>
      </button>
      </div>
    <div className='register'>

      <Form onSubmit={handelSubmit}>
        <div className='card'>
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name </Form.Label>
          <Form.Control name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="text" placeholder="Enter Name" />
        </Form.Group>
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
        <Button variant="primary" type="submit" id='but'>
          Submit
        </Button>
        <br></br>
        <Form.Group>

        </Form.Group>
        </div>
      </Form>

    </div>
    </div>
    
  )
}

export default Register
