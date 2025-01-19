const mongoose=require('mongoose');
const Message=require('../models/messageSchema')
exports.sendMessage=async(req,res)=>{
    const {name,email,message}=req.body;
    try{
        const existEmail=await Message.findOne({email})
        if(existEmail){
            return res.json({
                success:false,
                message:"Email already exists!"
            })
        }


        const mess=await Message.create({name,email,message});

        res.json({
            success:true,
            message:"Message sent successfully.",
            data:mess,
        })
    }catch(e){
        res.json({
            message:"Sending Failed"
        })
    }
}
    exports.showMessage=async(req,res)=>{
        try{
            const allMessage = await Message.find({});
            res.json({
                success:true,
                message:"All Messages",
                data:allMessage,

                
            })
        }catch(e){
            res.json({
                success:false,
                message:"Data Not Found"
            })
        }
    }
