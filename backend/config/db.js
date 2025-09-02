import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ranivanshika849_db_user:IzmmaBxVV0bGPMko@cluster0.11sj079.mongodb.net/TailResume')
    .then(()=>console.log('DB CONNECTED in Your Server'))
}


//password --> IzmmaBxVV0bGPMko

// key -->mongodb+srv://ranivanshika849_db_user:IzmmaBxVV0bGPMko@cluster0.11sj079.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0