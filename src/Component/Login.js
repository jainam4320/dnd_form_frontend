import React, { useState } from 'react';
import { Container, FormCheck, Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setFailLogin] = useState(false);
    const cookies = new Cookies();

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => {
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                window.location.href = "/forms/list";
            })
            .catch((error) => {
                setFailLogin(true);
                error = new Error();
            });
    }

    return (
        <>
            <Container>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Sign in</h2>

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

                        {/* remember me */}
                        <div class="form-check text-start my-3">
                            <FormCheck></FormCheck>
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>

                        {/* Validation Message Display */}
                        {login ? (
                            <p className="text-danger">Credentials did not match, please try again.</p>
                        ) : (<></>)}

                        {/* submit button */}
                        <Button
                            variant="btn btn-primary w-100 py-2"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Sign in
                        </Button>

                        {/* Register Button */}
                        <a class="me-3 py-2 link-body-emphasis text-decoration-none text-decoration-underline" href="./register">New user... Register</a>
                    </Form>
                </div>
            </Container>
        </>
    )
}