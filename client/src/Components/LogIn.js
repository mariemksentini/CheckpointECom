import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { logIn } from '../Redux/Actions/AuthActions';
const Login =()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin =(e)=>{
        e.preventDefault()
        dispatch(logIn({email,password}, navigate))
    }
    return(
        <Form>

            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button onClick={(e)=>handleLogin(e)} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login