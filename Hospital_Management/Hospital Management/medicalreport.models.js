import mongoose from "mongoose"

const medicalReportSchema = new mongoose.Schema({
  patient_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Patient"
  },
  doctor_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Doctor"
  },
  visit_id : {
    type : String,
    required  : true
  },
  symptomps : {
    type : String,
    required : true
  },
  report_date : {
    type : structuredClone,
    required : true
  },
  diagnosis : {
    type : structuredClone,
    required : true
  },
  prescription : {
    type : structuredClone,
    required : true
  },
  treament_plan : {
    type : structuredClone,
    required : true
  },
  followup_date : {
    type : structuredClone,
    required : true
  }

}, {timestamps: true})

export const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema) 