import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { CgCrop } from "react-icons/cg";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    function scrollHandler() {
        if (window.scrollY < 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    function resizeHandler() {
        setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return (
            <Navbar
                    expanded={expand}
                    fixed="top"
                    expand="md"
                    className={navColor ? "sticky" : "navbar"}
            >
                <Container>
                    <span/>
                    <Navbar.Toggle
                            aria-controls="responsive-navbar-nav"
                            onClick={() => {
                                updateExpanded(expand ? false : "expanded");
                            }}
                    >
                        <span/>
                        <span/>
                        <span/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" defaultActiveKey="#home">
                            {(navColor || isMobile) && (
                                <>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                                as={Link}
                                                to="/about"
                                                onClick={() => updateExpanded(false)}
                                        >
                                            <AiOutlineUser style={{marginBottom: "2px"}}/> About
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                                as={Link}
                                                to="/project"
                                                onClick={() => updateExpanded(false)}
                                        >
                                            <AiOutlineFundProjectionScreen
                                                    style={{marginBottom: "2px"}}
                                            />{" "}
                                            Projects
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                                as={Link}
                                                to="/sponsor"
                                                onClick={() => updateExpanded(false)}
                                        >
                                            <CgCrop style={{marginBottom: "2px"}}/> Sponsor
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                                href="https://techuni.org/blog/"
                                                onClick={() => updateExpanded(false)}
                                        >
                                            <CgCrop style={{marginBottom: "2px"}}/> Blog
                                        </Nav.Link>
                                    </Nav.Item>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;
