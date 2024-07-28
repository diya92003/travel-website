const mongoose=require("mongoose")
const reviewSchema= new mongoose.Schema({
    review:{
        type:String
    }
    },
    {timestamps:true},
);

module.exports = new mongoose.model("review",reviewSchema);