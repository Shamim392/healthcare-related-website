import React from "react";
import { Col, Container, ModalFooter, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-secondary text-white">
            <ModalFooter color="" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">CONTACT INFORMATION</h5>
                            <p>
                                Address: Uttara,Dhaka 1230 <br />
                                Openning time:
                                8am to 10pm from Monday to Saturday
                            </p>
                        </Col>
                        <Col md="6">
                            <h5 className="title">Services</h5>
                            <div>
                                <ul>
                                    <li className="list-unstyled text-white">
                                        <a className="text-white" href="#!">Shipping</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a className="text-white" href="#!">Retuns</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a className="text-white" href="#!">Site Map</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a className="text-white" href="#!"> Products Recalls</a>
                                    </li>
                                </ul>
                            </div>
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