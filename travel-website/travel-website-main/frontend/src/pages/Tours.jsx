import React from "react";
import {Container,Row,Col} from "reactstrap";
import SearchBar from "./Searchbar";
import "./home.css";
import TourCard from "./TourCard";
import tourData from "../data/tours"


const Tours = () => { 
 return (
    <section>
        <div className="backg">
                <h1 className="text-center p-5">Explore</h1>
        </div>
        <Container>
        <Row>
            <SearchBar/>
            <h2 className="p-3">Our featured tours</h2>
            {/* Displaying all tours */}
            {tourData.map(tour =>(
            <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
            ))} 
        </Row>
        </Container>
</section>
);
};
export default Tours;