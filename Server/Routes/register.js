var express=require('express');
var router=express.Router();
var user=require('../schema/userData')

router.post('/',function(req,res){
  var save1=new user(req.body);
  save1.save(function(q){
    console.log(q);
  })
});

/*router.get('/:idno/:passwd',function(req,res){
var x=req.params.idno.split("=")[1];
var y=req.params.passwd.split("=")[1];
user.find({name:x, pass:y},function(e,d){
  console.log(d);
})
});*/

router.post('/login',function(req,res){
user.find({name:req.body.user, pass:req.body.pass},function(e,d){
  console.log(d);
})
})


module.exports=router;
