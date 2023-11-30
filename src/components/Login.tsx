import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from "react-bootstrap";


export function Login() {
    return (
        <Container>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Button>Submit</Button>
            </Row>
            <Row>
                <p>Not a member? <a href='#!'>Register here!</a></p>
            </Row>
        </Container>
    );
}