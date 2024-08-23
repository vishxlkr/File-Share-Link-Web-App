import express from 'express';
import cors from'cors';
import router  from './routes/routes.js';
import DBConnection from './database/db.js';
const port = process.env.PORT || 8000;
const app=express();
app.use(cors());
app.use('/',router);

DBConnection();

app.listen(port,()=>{
    console.log("Server is running on port 8000!");
});