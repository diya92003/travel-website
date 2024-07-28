import React,{useState} from "react";
import "./newsletter.css"
import {Container, Row,Col} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  

const Newsletter = () => {
    const [Email, setEmail] = useState("");
const handleSubmit = async () => {
    try {
        const response = await axios.post("http://localhost:4000/newsletter", {Email});
        console.log(response);
        // Assuming your backend returns a success message
        toast.success(response.data.msg);
      } catch (error) {
        // Handle registration failure
        toast.error(error.response.data.msg);
        console.log(error)
      }
  };
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h3>Subscribe now to get useful travelling information.</h3>
                        <div className="newsletter__input">
                            <input name="Email" type="email" placeholder="Enter your Email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
                            <button onClick={handleSubmit} className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Get up to date with all the trendy places to visit and create fun memoris!Dont miss out!</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src="https://freepngimg.com/download/globe/99482-earth-travel-globe-free-transparent-image-hq.png" alt="" />
                    </div>
                </Col>
            </Row>
            <ToastContainer/>
        </Container>
    </section>
}
export default Newsletter;