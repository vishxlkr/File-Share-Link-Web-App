import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection= async()=>{
    const MONGODB_URL=process.env.MONGODB_URL;
    
    try {
        console.log("DB connection established");
        await mongoose.connect(MONGODB_URL);

    } catch (error) {
        console.log("Error while connecting to MONGODB",error);
    }
};

export default DBConnection;