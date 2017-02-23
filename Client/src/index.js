import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Muni from './muni.js';
import Mukesh from './mukesh.js';

export default class Basic extends React.Component{

constructor(){
super();
this.state = {'name':'reactstateex'};
this.check1=this.check1.bind(this);
}
check1()
{
return this.state.name;
}


render(){
return(
  <div>
<h1>Hello from React</h1>
<Link to='/muni'>Login</Link><br/>
<Link to='/mukesh'>Register</Link>
{this.props.children}
</div>

);
}

}


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Basic} >
  <Route path="/muni" component={Muni} />
  <Route path="/mukesh" component={Mukesh} />
  </Route>
  </Router>,
  document.getElementById("start"));
