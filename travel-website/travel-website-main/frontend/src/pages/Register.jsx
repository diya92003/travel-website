import React,{useState} from "react";       
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button } from "react-bootstrap";
import "./loginregister.css";
import axios from "axios";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register=()=>{
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

const handleSubmit = async () => {
    try {    
           const response = await axios.post("http://localhost:4000/register", {
            Name,
            Email,
            Password
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
    return(
        <>
        <section className="lrbackg">
     <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-4">
        <br/>
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <Form id="Register">
                        <div className="form-group">
                            <input type="text" name="Name" value={Name} className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                        </div><br />
                        <div className="form-group">
                            <input type="email" name="Email" value={Email}  className="form-control"placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div><br />
                        <div className="form-group">
                            <input type="password" name="Password" value={Password} class="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div><br />
                        <div className="d-grid">
                        <Button variant="primary" onClick={handleSubmit}>Register</Button>
                        </div>  
                    </Form>
                </div>
            </div>
            <br/>
        </div>
    </div>
</div>
<ToastContainer/>
</section>
</>
);
};
export default Register;