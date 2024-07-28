import React from "react";
import {Container,Row,Col} from "reactstrap";
import './home.css';
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import SearchBar from "./Searchbar";


const Home = () => { 
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                    <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
                    <p>Take a break from the monotony of daily life, offering relaxation and an escape from routine stressors.Create cherished memories, build strong connections with others, and deepen our understanding of the world. Find a source of inspiration, sparking creativity and providing fresh perspectives on life.  </p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero_img">
                        <img src={img1} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero_img mt-4">
                        <img src={img2} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero_img mt-5">
                        <img src={img3} alt=""/>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    </>
};
export default Home;