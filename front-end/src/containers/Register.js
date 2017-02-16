import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory} from 'react-router';
import RegisterAction from '../actions/RegisterAction';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerResponse: ''
			// email: '',
			// name: '',
			// username: '',
			// password: '',
			// password2: ''
		}
		this.registerUser = this.registerUser.bind(this);
		// this.handleEmail = this.handleEmail.bind(this);
		// this.handleName = this.handleName.bind(this);
		// this.handleUserName = this.handleUserName.bind(this);
		// this.handlePassword = this.handlePassword.bind(this);
		// this.handlePassword2 = this.handlePassword2.bind(this);
	}
	
	registerUser(event){
		event.preventDefault();
		var email=event.target[0].value;
		var name=event.target[1].value;
		var userName=event.target[2].value;
		var password=event.target[3].value;
		var password2=event.target[4].value;
		this.props.registerAction({
			email: email,
			name: name,
			username: userName,
			password: password,
			password2: password2
		});
	}

	// handleEmail(event){
	// 	var email = event.target.value;
	// 	if((email.indexOf('@')!== -1)&&(email.indexOf('.')!== -1)){
	// 		this.setState({
	// 			email: email
	// 		})				
	// 	}else{
	// 		this.setState({
	// 			email: 'Invalid Email'
	// 		})			
	// 	}
	// }

	// handleName(event){
	// 	this.setState({
	// 		name: event.target.value
	// 	})
	// }

	// handleUserName(event){
	// 	this.setState({
	// 		username: event.target.value
	// 	})
	// }

	// handlePassword(event){
	// 	this.setState({
	// 		password: event.target.value
	// 	})
	// }

	// handlePassword2(event){
	// 	this.setState({
	// 		password2: event.target.value
	// 	})
	// }
	
	render(){
		if(this.props.registerResponse.msg === "userNameTaken"){
			var message = "User Name is taken";
		}else if(this.props.registerResponse.msg === "userInserted"){
			message = "User Added. Please Log in to continue."
			browserHistory.push('/login');
		}else{
			message = "";
		}
		return(
			<div className='login-route-wrapper'>
				<h1>Register</h1>
				<form onSubmit={this.registerUser}>	
					<h3 className='success'>{message}</h3>
					<input onChange={this.handleEmail} type="email" className="form-control" name="email" placeholder="Email Address" />
					<input onChange={this.handleName} type="text" className="form-control" name="name" placeholder="Name" />
					<input onChange={this.handleUserName} type="text" className="form-control" name="username" placeholder="User Name" />
					<input onChange={this.handlePassword} type="password" className="form-control" placeholder="Enter Password" />
					<input onChange={this.handlePassword2} type="password" className="form-control" name="password" placeholder="Repeat Password" />
					<div>
						<button id="btn-signup" type="submit" className="button">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);