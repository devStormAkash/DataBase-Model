import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
    lowercase : true,
    unique : true
  },
  email :{
    type :String,
    required : true,
    unique : true,
    lowercase : true
  },
  password : {
    type :String,
    required : true,
    minlength : [8,"Atleast 8 Character , You provide {VALUE}"],
    maxlength : 12
  }
},
{timestamps :true})


export const User = mongoose.model("User",userSchema)