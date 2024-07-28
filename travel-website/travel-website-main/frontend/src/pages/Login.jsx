import React,{useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "./loginregister.css";
import { Form, Button } from "react-bootstrap";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login=()=>{
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

const handleSubmit = async () => {
  try {
      const response = await axios.post("http://localhost:4000/login", {
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
        <section className="lrbackg">
     <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-3">
        <br/><br/>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <Form> 
                        <div className="form-group"> 
                            <input type="email" name="Email" value={Email} className="form-control" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div><br />
                        <div className="form-group">
                            <input type="password" name="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} class="form-control" placeholder="Enter your password"/>
                        </div><br />
                        <div className="d-grid">
                        <Button variant="primary" onClick={handleSubmit}>Login</Button>
                        </div>   
                    </Form>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    </div>
</div><ToastContainer/>
    </section>
    );
};
export default Login;