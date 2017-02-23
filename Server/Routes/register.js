var express=require('express');
var router=express.Router();
var user=require('../schema/userData')

router.post('/',function(req,res){
  var save1=new user(req.body);
  save1.save(function(q){
    console.log(q);
  })
});

module.exports=router;
