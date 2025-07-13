import dotenv from 'dotenv' ;
import express from 'express' ;


dotenv.config() ;

const app = express() ;

const port = process.env.PORT || 3000 ;

app.use(express.json()) ;

app.post('/signup' , function (req,res){

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