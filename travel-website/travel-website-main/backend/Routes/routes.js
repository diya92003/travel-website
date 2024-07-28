const express=require("express");
const router=express.Router();
const customerController=require("../Controllers/customerController.js");
const subcriberController=require("../Controllers/subscriberController.js");
const bookingController=require("../Controllers/bookingController.js")
const reviewController=require("../Controllers/reviewController.js")
//Login and register
router.post("/register",customerController.createCustomer);
router.post("/login",customerController.loginCustomer);

//Newsletter subscriber
router.post("/newsletter",subcriberController.createSubcriber);

//Booking
router.post("/book",bookingController.createBooking);

//Review
router.post("/createReview",reviewController.createReview);
router.get("/getReview",reviewController.readreview);
router.get("/getReview/:id",reviewController.readreviewbyid);
router.put("/update/:id",reviewController.updatereview);
router.delete("/delete/:id",reviewController.deletereview);         

module.exports=router;