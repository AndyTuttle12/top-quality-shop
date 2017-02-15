import React, { Component } from 'react';
import {Link} from 'react-router';

class Login extends Component{
	render(){
		return(
			<div>
				<h1>Login</h1>
				<input id="login-username" type="text" className="form-control" name="username" placeholder="email" />                                        
				<input id="login-password" type="password" className="form-control" name="password" placeholder="password" />
				<input id="login-remember" type="checkbox" name="remember" defaultValue={1} />
				<Link to="/register"> <a>Create Account</a></Link>
				<a id="btn-login" className="btn btn-success">Login</a>
			</div>
		);
	}
}

export default Login;