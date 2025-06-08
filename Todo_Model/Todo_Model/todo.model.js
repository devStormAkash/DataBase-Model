import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
  title : {
    type :String,
    required : [true, "It is a required field"],
    maxlength : 100,
    trim : true
  },
  markAsComplete : {
    type :Boolean,
    default :false
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  subtodos: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref : "SubTodo"
    }
  ]
},
{timestamps : true})


export const Todo = mongoose.model("Todo",todoSchema)