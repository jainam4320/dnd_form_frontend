import React from "react";
import { Container } from "react-bootstrap";
import Cookies from "universal-cookie";

export default function Login() {

    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }

    return (
        <Container>
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="./" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <span class="fs-4">Custom Form App</span>
                </a>
                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {token === undefined ? (
                        <>
                            <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="./register">Register</a>
                            <a class="py-2 link-body-emphasis text-decoration-none" href="./login">Login</a>
                        </>
                    ) : (
                        <a class="py-2 link-body-emphasis text-decoration-none" href="#" onClick={() => logout()}>Logout</a>
                    )}
                    {/* <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="./register">Register</a>
                    <a class="py-2 link-body-emphasis text-decoration-none" href="./login">Login</a>
                    <a class="py-2 link-body-emphasis text-decoration-none" href={() => logout()}>Logout</a> */}
                </nav>
            </div>
        </Container>
    )
}