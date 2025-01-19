const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.URL)
    .then(()=>console.log("Database Connected"))
    .catch((e)=>{console.log("DB connection problem" , e)
        process.exit(1)
    })
}

module.exports=dbConnect;