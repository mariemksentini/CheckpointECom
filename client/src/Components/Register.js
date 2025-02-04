import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/AuthActions';

const Register =()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister =(e)=>{
        e.preventDefault()
        dispatch(register({name, age, email, password}, navigate))
    }
    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter age" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button onClick={(e)=> handleRegister(e)} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Register