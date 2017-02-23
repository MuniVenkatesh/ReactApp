var mongoose=require('mongoose');

var Schema=mongoose.Schema(
  {
    name: String,
    pass: String,
    dob: Date,
    gender: String,
    job: String
  }
)


module.exports=mongoose.model('userData',Schema);
