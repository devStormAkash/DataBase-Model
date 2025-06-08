import mongoose from "mongoose"
const orderItemSchema = new mongoose.Schema({
  item : {
    type :mongoose.Schema.Types.ObjectId,
    ref : "Product"
  },
  numberOfItems : {
    type :Number,
    required : true,
    default : 0
  }
})
const orderSchema = new mongoose.Schema({
  totalPrice : {
    type : Number,
    default : 0
  },
  owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  itemList : [orderItemSchema],
  address : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Address"
  },
  status : {
    type : String,
    enum : ["PENDING" , "DELIVERED" , "CANCELLED"],
    default : PENDING
  }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)