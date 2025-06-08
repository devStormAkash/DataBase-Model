import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
  user_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  name : {
    type : String,
    required : true
  },
  city : {
    type : String,
    required : true
  },
  state : {
    type : String,
    required : true
  },
  district : {
    type : String,
    required : true
  },
  pincode : {
    type : Number,
    required : true,
    min : 7,
    max : 7
  },
  mobileno : {
    type : Number,
    required : true,
    min : 10,
    max : 10
  },
  completeAddress : {
    type : String,
    required : true
  },
  landmark : {
    type : String,
    required : true
  },
})

export const Address = mongoose.model("Address",addressSchema)