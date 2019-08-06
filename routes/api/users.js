const express = require('express');
const router = express.Router();

// @route    POST/GET api/users
// @desc     Register user
// @access   Public

router.post('/',(req,res)=>{
console.log(req.body);
    res.send('user router')

});
module.exports=router;

