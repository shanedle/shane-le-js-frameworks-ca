import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row className="justify-content-center text-center">
                    <p>
                        Copyright &copy; {new Date().getFullYear()}
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;