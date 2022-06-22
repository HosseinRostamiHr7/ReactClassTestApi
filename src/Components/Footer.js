import React from 'react';
import { ListGroup, Badge, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-secondary mt-4">
                <Row>
                    <Col>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" variant="dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default Footer;