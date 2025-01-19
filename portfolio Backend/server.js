const express=require('express')
const app=express();
const router=require('./routes/route')
require('dotenv').config();
const dbConnect=require('./connection/dbConnection');
const cors=require('cors')

dbConnect();

app.use(cors());
app.use(express.json());

app.use('/api',router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
  });