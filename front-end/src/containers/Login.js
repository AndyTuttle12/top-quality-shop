import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginAction from '../actions/LoginAction';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		}
		this.loginSubmit = this.loginSubmit.bind(this);
	}

	loginSubmit(event){
		event.preventDefault();
		var userName=event.target[0].value;
		var password=event.target[1].value;
		this.props.loginAction({
			username: userName,
			password: password
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.loginResponse.msg === "badUsername"){
			this.setState({
				message: "Please enter the correct username."
			});
		}else if(this.props.loginResponse.msg === "badPassword"){
			this.setState({
				message: "Please check your password and try again."
			});
		}else if(this.props.loginResponse.msg === "Login Successful"){
			browserHistory.push('/');
		}else{
			this.setState({
				message:""
			})
		}
	}

	render(){
		
		return(
			<div className="login-area">
				<h1>Login</h1>
				<form onSubmit={this.loginSubmit}>
					<h3 className='success'>{this.state.message}</h3>
					<input id="login-username" type="text" className="login-input form-control" name="username" placeholder="User Name" />
					<br/>                                     
					<input id="login-password" type="password" className="login-input form-control" name="password" placeholder="Password" />
					<br/><br/>
					<input id="login-remember" type="checkbox" name="remember" defaultValue={1} /><label className="check-label" htmlFor="login-remember" ></label>Keep me logged in.
					<br/><br/>
					Don&#39;t have an account? <Link to="/register">Create One Here</Link>
					<br/><br/>
					<button id="login" type="submit" className="login-button">Login</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);