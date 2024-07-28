import React from "react";
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const quick__links = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/tours",
        display: "Tours",
    },
];

const quick__links2 = [
    {
        path: "#",
        display: "Gallery",
    },
    {
        path: "/login",
        display: "Login",
    },
    {
        path: "/register",
        display: "Register",
    },
];


const Footer = () => {
    return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg="3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptate?</p>

                        <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to="#"><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to="#"><i class="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
                            </span>
                            <span>
                                <Link to="#"><i class="ri-instagram-line"></i></Link>
                            </span>
                        </div>
                </Col>

                <Col lg="3">
                    <h5 className="footer__link-title">Discover</h5>

                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item,index)=>(
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg="3">
                <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links2.map((item,index)=>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg="3">
                <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links ">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-map-pin-line"></i></span>
                                        Address:
                                    </h6>
                                    <p className="abc mb-0">Mangalore, India</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-mail-line"></i></span>
                                        Email:
                                    </h6>
                                    <p className="abc mb-0">travels@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone:
                                    </h6>
                                    <p className="abc mb-0">+91 987654321</p>
                                </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
    );
};
export default Footer;