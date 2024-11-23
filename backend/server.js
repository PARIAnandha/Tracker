const express=require('express')
const dotenv=require('dotenv')
const DBconnection = require('./dbconnection')
const userRoutes = require('./userRoutes')
const contactRoutes = require('./contactRoutes');
const cors=require('cors')

const app=express()
dotenv.config()


// Middleware
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}))
// Database connection
DBconnection()
// Routes
app.use('/api', userRoutes);
// Routes
app.use('/api', contactRoutes);

// Server setup
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`success full listen port ${port} depandance ${process.env.DEPANDANCE}`)
})