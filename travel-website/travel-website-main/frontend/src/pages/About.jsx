import React from "react";
import {Container,Row,Col} from "reactstrap";
import "./about.css"
import Newsletter from "./Newsletter";

const About= () => { 
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                    <h1>We aim for Happy customers!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel dolorum laudantium blanditiis minima debitis nemo reprehenderit eveniet et recusandae neque perspiciatis veniam, libero, assumenda id minus amet impedit obcaecati.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <img id="cust" src="https://img.freepik.com/premium-photo/happy-young-asian-tourist-woman-holding-passport-boarding-pass-with-baggage-going-travel-holidays-blue-background_74952-981.jpg" alt="" height="250px"/>
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
};
export default About;