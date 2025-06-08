import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  age : {
    type : Number,
    required : true
  },
  gender : {
    type : String,
    enum : ["M","F","O"],
    required  : true
  },
  bloodgroup : {
    type : String,
    required : true
  },
  diagnosedWIth : {
    type : String,
    required : true
  },
  admittedIn : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Hospital"
    
  },
  medicalRecord : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "MedicalReport",
  },
  consultingDoctor : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Doctor",
    required : true
  },
  address : {
    type : String,
    required : true
  },
  
},{timestamps:true})

export const Patient = mongoose.model("Patient", patientSchema) 