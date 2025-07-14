import dotenv from 'dotenv' ;
import express from 'express' ;
import { User } from '../models/user.models.js' ;
import { Todo } from '../models/todo.models.js' ;
import { modules } from '../models/easy.js'
import mongoose from 'mongoose' ;

mongoose.connect('mongodb://localhost:27017/todos')


dotenv.config() ;

const app = express() ;

const port = process.env.PORT || 3000 ;

app.use(express.json()) ;

app.post('/signup' , async function (req,res){

    let username = req.body.username ;
    let password = req.body.password ;
    let email = req.body.email ;

    await modules.UserModel.create({
        email: email,
        password: password,
        username: username
    });

    res.status(200).send('Signup Success') ;

}) ;

app.post('/login' , function (req,res){

}) ;

app.post('/todo' , function (req,res){

}) ;

app.get('/todos' , function (req , res){

}) ;

app.listen(port , () => {
    console.log(`App is running on the Port : ${port}`) ;
}) ;