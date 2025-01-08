import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setFailRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:3000/register",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                window.location.href = "/login";
            })
            .catch((error) => {
                setFailRegister(true);
                error = new Error();
            });
    }

    return (
        <>
            <Container>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Register</h2>

                        {/* email */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                            />
                        </Form.Group>

                        {/* password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Group>

                        {/* Validation Message Display */}
                        {register ? (
                            <p className="my-3 text-danger">Signup failed, please try again.</p>
                        ) : (<></>)}

                        {/* submit button */}
                        <Button
                            variant="btn btn-primary w-100 py-2 my-3"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Register
                        </Button>

                        {/* Login Button */}
                        <a class="me-3 py-2 link-body-emphasis text-decoration-none text-decoration-underline" href="./login">Already a user... Login</a>
                    </Form>
                </div>
            </Container>
        </>
    )
}