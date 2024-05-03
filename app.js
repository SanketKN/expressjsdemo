import express from "express";
import productRoutes from './routes/productRoutes.js'

const app = express() //function constructor
app.use(express.json())
app.use('/ibm',productRoutes) 
//any url ending with /ibm will call productRoutes
//app.use is called middleware

app.listen(9999, ()=> console.log('server strated'))
