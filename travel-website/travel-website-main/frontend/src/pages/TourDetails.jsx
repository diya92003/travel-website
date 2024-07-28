import React,{useState} from "react";
import { useParams } from "react-router-dom";
import {Container,Row,Col,Form} from "reactstrap";
import {Button} from "react-bootstrap";
import "./tourdetails.css";
import tourData from "../data/tours"
import {toast,ToastContainer} from "react-toastify";
import axios from"axios";

const TourDetails = () => { 
    const {id}=useParams()
    const tour = tourData.find(tour=>tour.id===id)
    const {photo,title,city,price,maxGroupSize}=tour

    const [Name, setName] = useState("");
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const[groupSize,setgroupSize]=useState("");

const handleSubmit1 = async () => {
    try {    
           const response = await axios.post("http://localhost:4000/book", {
            Name,
           from,
           to,
           groupSize
          });
        console.log(response);
        // Assuming your backend returns a success message
        toast.success(response.data.msg);
      } catch (error) {
        // Handle registration failure
        toast.error(error.response.data.msg);
        console.log(error)
      }
};
const [Review, setReview] = useState("");
const handleSubmit2 = async () => {
    try {    
           const response = await axios.post("http://localhost:4000/createReview", {
            Review
          });
        console.log(response);
        // Assuming your backend returns a success message
        toast.success(response.data.msg);
      } catch (error) {
        // Handle registration failure
        toast.error(error.response.data.msg);
        console.log(error)
      }
};
   
    return  <>
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="tour_content">
                        <img src={photo} alt="...loading"/>
                        <div className="tour_info">
                            <h2>{title}</h2>
                            <span><i class="ri-map-pin-fill"></i> {city}</span><br/>
                            <span>${price} per person</span><br/>
                            <span><i class="ri-group-line"> {maxGroupSize}</i></span>
                        </div>
                        <div className="tour_reviews mt-3">
                            <h4>Reviews</h4>
                            <Form>
                                <div className="review_input">
                                <input type="text" name="Review" value={Review} placeholder="Share your thoughts" onChange={(e)=>setReview(e.target.value)}/>
                                <Button className="btn primary__btn text-white" onClick={handleSubmit2}>Submit</Button>
                                </div><br/>
                            </Form>
                            <ToastContainer/>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="booking">
                    <div className="booking_info">
                            <h2>Enter your information<br/></h2>
                            <Form>
                                <div className="booking_input">
                                    <input type="text" value={Name} placeholder="Enter your full name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                                    <span>from</span>
                                    <input type="date" value={from} onChange={(e)=>setfrom(e.target.value)}/>
                                    <span><br/><br/>to</span>
                                    <input type="date" value={to} onChange={(e)=>setto(e.target.value)}/>
                                    <br/><br/>
                                    <input type="number" placeholder="Number of people" value={groupSize} onChange={(e)=>setgroupSize(e.target.value)}/><br/><br/>
                                    <Button className="btn primary__btn text-white" onClick={handleSubmit1}>Book</Button>
                                </div><br/>
                            </Form>
                            <ToastContainer/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section></>;
};
export default TourDetails;