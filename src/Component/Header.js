import React from "react";
import { Container } from "react-bootstrap";
import Cookies from "universal-cookie";
import logo from "../Assets/logo.png";

export default function Login() {

    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }

    return (
        <Container>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <img src={logo} alt="logo" width="32" height="32" />
                    <span className="fs-4">Custom Form App</span>
                </a>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {token === undefined ? (
                        <>
                            <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/register">Register</a>
                            <a className="py-2 link-body-emphasis text-decoration-none" href="/login">Login</a>
                        </>
                    ) : (
                        <>
                            <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/forms/list">Forms</a>
                            <a className="py-2 link-body-emphasis text-decoration-none" href="#" onClick={() => logout()}>Logout</a>
                        </>
                    )}
                </nav>
            </div>
        </Container>
    )
}