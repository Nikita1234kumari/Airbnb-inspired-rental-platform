const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title : {
   type : String,
   required : true,
  },
  description : String,
  image : {
    type : String,
    default : 
         "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec",
    set : (v) => v ==="" ? "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec" : v,
  },
  price : Number,
  location : String,
  country: String   
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;