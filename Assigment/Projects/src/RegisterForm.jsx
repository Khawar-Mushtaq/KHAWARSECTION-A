import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
    const [Register,setRegister]=useState({First:'',Last:'',Email:'',Password:'',RePassword:''})
    const [error,setErrormessage]=useState();
    const handlesubmit=(e)=>{
        e.preventDefault();
        setErrormessage(true)
        console.log(Register.First,Register.Last,Register.Email,Register.Password,Register.RePassword);
    }
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setRegister({...Register, [name]:value})
    }
    return (
        <div className='Registerdiv'>
            <Card style={{ width: '20rem', height: '38rem', backgroundColor: '#194D33' }}>
                <Card.Body>
                    <h1 style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Register</h1>
                    <Form onSubmit={handlesubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:'white'}}>First Name</Form.Label>
                            <Form.Control type="text" name="First" onChange={handlechange} placeholder="First" />
                            <p style={{color:'white', fontSize:'10px'}}>{(error)&&(!Register.First)&&"Invalid Input"}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:'white'}}>Last Name</Form.Label>
                            <Form.Control type="text" name="Last" onChange={handlechange} placeholder="Last" />
                            <p style={{color:'white', fontSize:'10px'}}>{(error)&&(!Register.Last)&&"Invalid Input"}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:'white'}}>Email</Form.Label>
                            <Form.Control type="text" name="Email" onChange={handlechange} placeholder="example@gmail.com" />
                            <p style={{color:'white', fontSize:'10px'}}>{(error)&&(!Register.Email)&&"Invalid Input"}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}>Password</Form.Label>
                            <Form.Control type="password" name="Password" onChange={handlechange} placeholder="Password" />
                            <p style={{color:'white', fontSize:'10px'}}>{(error)&&(!Register.Password)&&"Invalid Input"}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{color:'white'}}>Re-Password</Form.Label>
                            <Form.Control type="password" name="RePassword" onChange={handlechange} placeholder="Re-Password" />
                            <p style={{color:'white', fontSize:'10px'}}>{(error)&&(!Register.RePassword)&&"Invalid Input"}</p>
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

export default RegisterForm