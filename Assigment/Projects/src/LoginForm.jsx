import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const LoginForm = () => {
  const [Loginform,setLoginform]=useState({Username:'',Password:''});
  const [error,setErrormessage]=useState();
  const handlesubmit=(e)=>{
    e.preventDefault();
    setErrormessage(true)
    // alert(Loginform.Username);
    // alert(Loginform.Password);
  }
  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
      setLoginform({...Loginform,[name]:value})
  }

  return (
    <div className='logindiv'>
    <Card style={{ width: '20rem',height:'25rem', backgroundColor:'#194D33' }}>
      <Card.Body>
        <h1 style={{color:'white'}}>LOGIN</h1>
        <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'white'}}>Email address</Form.Label>
        <Form.Control type="email" name="Username" onChange={handlechange} placeholder="Enter email" />
        <p style={{color:'white' , fontSize:'10px'}}>{(error)&&(!Loginform.Username)&&"Invalid Input"}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white'}}>Password</Form.Label>
        <Form.Control type="password" name="Password"  onChange={handlechange} placeholder="Password" />
        <p style={{color:'white',fontSize:'10px'}}>{(error)&&(!Loginform.Password)&&"Invalid Input"}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </div>
  )
}

export default LoginForm