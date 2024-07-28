import React from "react"; 
import './Searchbar.css' ;
import { Col,Form,FormGroup} from "reactstrap"; 

const SearchBar =() => {
    return (
    <Col lg='12'>
        <div className="search_bar">
            <Form className="d-flex align-items-center gap-4 mt-4">
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span><i class="ri-map-pin-line"></i></span> 
                    <div>
                        <h6>Location</h6> 
                        <input type="text" placeholder="Where are you go" />
                    </div> 
                </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group-fast">
                <span><i class="ri-map-pin-time-line"></i></span> 
                <div>
                    <h6>Distance</h6> 
                    <input type="number" placeholder="Distance k/m" />
                </div> 
            </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group-fast">
                <span><i class="ri-group-line"></i></span> 
                <div>
                    <h6>MaxPeople</h6> 
                    <input type="number" placeholder="0"/>
                </div> 
            </FormGroup>
            <span className="search_icon" type="submit">
                <i class="ri-search-line"></i>
            </span>
            </Form>
        </div>
    </Col>
    );
}
export default SearchBar;
