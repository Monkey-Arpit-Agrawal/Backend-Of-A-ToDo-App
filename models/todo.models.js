import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    Title : {
        type : String ,
        required : true ,
    } ,
    Status : {
        type : Boolean ,
        default : false
    } ,
    UserId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User'
    }
} , {timestamps : true}) ;

export const Todo = mongoose.model('Todo',todoSchema) ;