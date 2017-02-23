import React from 'react';
import ReactDOM from 'react-dom';
export default class Muni extends React.Component{

render(){
return(
  <div className="container">
  <br/><br/>
  <form name='register'>
  <label>Name:</label>
  <input type='text' name="user" id='name'/><br/>
  <label>DOB:</label>
  <input type='date' name="dob" id='dob'/><br/>
  <label>Gender:</label>
  <input type='radio' name="sex" id='sex' value="m"/>Male
  <input type='radio' name="sex" id='sex' value="f"/>Female<br/>
  <label>Occupation:</label>
  <select name="job">
  <option value="emp">Employed</option>
  <option value="unemp">Unemployed</option>
  </select><br />
  <button onClick={this.savetodb}>Register</button>
  </form>
</div>

);
}

savetodb(e){
  e.preventDefault();
  var userData={
    name:document.register.user.value,
    dob:document.register.dob.value,
    gender:document.register.sex.value,
    job:document.register.job.value
  };
  $.ajax({
    url:"/register",
    data:userData,
    method:'post'
  })
}

}
