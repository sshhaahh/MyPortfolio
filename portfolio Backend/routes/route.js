const express=require('express');
const {sendMessage,showMessage}=require('../controllers/messageController')

const router=express.Router();

router.post('/sendmessage',sendMessage);
router.get('/showmessages',showMessage);


module.exports=router