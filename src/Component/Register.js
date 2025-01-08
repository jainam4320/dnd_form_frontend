import React, { useState } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

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
                setRegister(true);
                window.location.href = "/login";
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>

                        <h2>Register</h2>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            {/* email */}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
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

                            {/* submit button */}
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Register
                            </Button>
                        </Form>

                        {/* Validation Message Display */}
                        {register ? (
                            <p className="text-success">You Are Registered Successfully</p>
                        ) : (
                            <p className="text-danger">You Are Not Registered</p>
                        )}
                    </Col>
                </Row>
            </Container>

        </>
    )
}