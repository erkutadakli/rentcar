const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

router.get('/',checkAuth,function(req,res,next){
    res.status(200).send({'dasd':'asd'})
})
module.exports = router;