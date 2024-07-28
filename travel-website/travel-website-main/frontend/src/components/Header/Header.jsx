import React from "react";
import {Container,Row,Button} from "reactstrap";
import {NavLink,Link} from "react-router-dom";
import './Header.css';
const nav_links=[
{
path: '/home',
display: 'Home'
},
{
path: '/about',
display: 'About'
},
{
path: '/tours',
display: 'Tours'
},
]

const Header = () => { 
    return <header className="header">
    <Container> 
        <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
        { /*Logo*/ }
            <div className="logo">
                <img src="https://p7.hiclipart.com/preview/286/721/319/travel-agent-logo-travel-thumbnail.jpg" alt="Not loaded..." height="100px"/>
            </div>
        { /*logo end*/ }
        { /*=menu start=*/ }
        <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
             {nav_links.map((item) => (
                <li className="nav__item">
                <NavLink to={item.path}>{item.display}</NavLink>
                </li>
            ))}
            </ul>
        </div>
        { /*menu end-*/ }
        <div className="nav__right d-flex align-items-center gap-4 ">
            <div className="nav__btns d-flex align-items-center gap-4 "> 
                <Button className="btn secondary__btn">
                    <Link to='/login'>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                    <Link to='/register'>Register</Link>
                </Button>
            </div>
        </div>
        </div>
        </Row>
    </Container>
    </header>
};
export default Header;