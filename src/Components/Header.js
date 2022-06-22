import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container fluid="md">
                        <Navbar.Brand href="#">LEARNITO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className=" my-2 m-auto "
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">خانه</Nav.Link>
                                <NavDropdown title="دوره ها" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action2">درباره ما</Nav.Link>
                                <Nav.Link href="#">تماس با ما</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="primary">جستجو</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded mx-auto d-block "
                            src="https://testers.work/wp-content/uploads/2020/09/software-testing.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded mx-auto d-block "
                            src="https://testers.work/wp-content/uploads/2020/09/software-testing.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded mx-auto d-block "
                            src="https://testers.work/wp-content/uploads/2020/09/software-testing.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </>
        </div>
    );
};

export default Header;