import React from 'react';
import ReactDOM from 'react-dom';

export default class Muni extends React.Component{

constructor(props){
  super(props);
  this.state={name:"",pass:""};
  this.onValuechange = this.onValuechange.bind(this);
}

onValuechange(e){
  switch(e.target.name)
  {
    case 'name':this.setState({name:e.target.value});
                break;
    case 'pass':this.setState({pass:e.target.value});
              break;

  }
}

render(){
return(
  <div>
  <form name="login">
  User Name:
  <input type="text" name="name" value={this.state.name} onChange={this.onValuechange}/><br/>
  Password :
  <input type="password" name="pass" value={this.state.pass} onChange={this.onValuechange}/><br/>
  <button onClick={this.checklogin}>Login</button>
  </form>
</div>

);
}

/*checklogin(e){
  e.preventDefault();
  var login={
    user:document.login.name.value,
    pass:document.login.pass.value
  };
  console.log(login);
  $.ajax({
    url:'/register/id='+login.user+'/pass='+login.pass,
    method:'get'
  });
}*/


checklogin(e){
  e.preventDefault();
  var login={
    user:document.login.name.value,
    pass:document.login.pass.value
  };
  console.log(login);
  $.ajax({
    url:'/register/login',
    method:'post',
    data:login
  });
}

}
