import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name : {
    type :String,
    required : true
  },
  qualification : {
    type :String,
    required : true
  },
  experience : {
    type : Number,
    required : true
  },
  worksIn : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : "Hospital"
    }],
  salary : {
    type : Number, 
    required : true
  }  
},{timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema) 