import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useState } from 'react'

const Login = () => {
  
    const [id, setId] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const loginUser=(event)=>{
        event.preventDefault();
        console.log("login user function")
        dispatch(authenticateAction.login(id, password))
        goToMain();
    }

    const navigate = useNavigate();

    const goToMain=()=>{
        navigate("/");
    }
    
    return (
    <Container>
        <Form onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                Login
            </Button>
        </Form>
    </Container>
  )
}

export default Login