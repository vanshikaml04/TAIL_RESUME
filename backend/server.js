import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';

const app = express()
const PORT = 4000;

app.use(cors())

// connect db
connectDB();

// middleware
app.use(express.json())


// routes

app.get('/',(req,res)=>{
    res.send('API WORKING ON EDGE')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})


