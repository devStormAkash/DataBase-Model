import mongoose from "mongoose"
 const subtodSchema = new mongoose.Schema({
  content : {
    type : String,
    required : [true, "You can not enter empty todo"],
    trim : true
  },
  markAsComplete : {
    type : Boolean,
    default :  false
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }

 },
 {timestamps : true})

 export const SubTodo = mongoose.model("SubTodo",subtodSchema)