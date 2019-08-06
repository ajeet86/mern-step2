const express = require('express');
const router = express.Router();

// @route    POST/GET api/users
// @desc     Register user
// @access   Public

router.get('/',(req,res)=>res.send('post router'));
module.exports=router;

