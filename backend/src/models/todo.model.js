import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:String,
    required:true,
    
  }

},{timestamps:true})