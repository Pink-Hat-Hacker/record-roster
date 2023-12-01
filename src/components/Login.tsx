import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';


export function Login() {
    const [authMode, setAuthMode] = useState("signin");
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    if (authMode === "signin") {
        // Log In Authentication Form
        return (
            <Container className="Auth-form-container">
                <Form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <a href="#" className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </a>
                        </div>
                        <Row className="form-group mt-3">
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </Row>
                        <Row className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </Row>
                        <Row className="d-grid gap-2 mt-3">
                            <Button type="submit" className="btn btn-primary">
                                Submit
                            </Button>
                        </Row>
                        <Button variant='link' className="text-center mt-2">
                            Forgot password?
                        </Button>
                    </div>
                </Form>
            </Container>
        );
    } else {
        // Registration Form
        return (
            <Container className="Auth-form-container">
                <Form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <a href="#" className="link-primary" onClick={changeAuthMode}>
                                Sign In
                            </a>
                        </div>
                        <Row className="form-group mt-3">
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                            />
                        </Row>
                        <Row className="form-group mt-3">
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                            />
                        </Row>
                        <Row className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                            />
                        </Row>
                        <Row className="d-grid gap-2 mt-3">
                            <Button type="submit" className="btn btn-primary">
                                Submit
                            </Button>
                        </Row>
                        <Button variant='link' className="text-center mt-2">
                            Forgot password?
                        </Button>
                    </div>
                </Form>
            </Container>
        )
    }

}