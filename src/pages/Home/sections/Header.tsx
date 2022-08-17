import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
    // const downloadFile = () => {
    //     const path = require("../../../assets/cv.pdf");
    //     window.open(path);
    // };
    return (
        <div className="header">
            <Navbar bg="light" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="zakiaHead">Zakia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            {/* <Nav.Link href="#wid">What I do?</Nav.Link> */}
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Project</Nav.Link>
                            {/* <Nav.Link href="#gallery">Portfolio</Nav.Link> */}
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            {/* <Button
                                onClick={downloadFile}
                                size="sm"
                                variant="outline-primary"
                                className="header-action"
                            >
                                Resume
                            </Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
