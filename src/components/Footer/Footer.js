import React from "react";
import { Col, Container, ModalFooter, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-secondary text-white">
            <ModalFooter color="" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </Col>
                        <Col md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled text-white">
                                    <a className="text-white" href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className="text-white" href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className="text-white" href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className="text-white" href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright@ MedicinePlus 2021
                    </Container>
                </div>
            </ModalFooter>
        </div>
    );
}

export default Footer;