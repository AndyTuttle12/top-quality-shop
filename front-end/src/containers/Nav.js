import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import '../styles.css';

class Nav extends Component {

	render() {
		console.log(this.props);
		if(this.props.navResponse.token){
			var name = this.props.navResponse.username;
			var welcomeMessage = 'Welcome back, ' + name +'!';
			var account = "Account";
			var logout = "Logout";
			var login = '';
			var register = '';
		}else{
			welcomeMessage = ""
			account = '';
			logout = '';
			login = 'Login';
			register = 'Register';
		}
		return (
			<div className="nav-bar">
				<div className="App-header">
					<Link to="/"><img src={'/tqs.png'} className="App-logo" alt="logo" /></Link>
					<h4>&nbsp;&nbsp; ( Bid on great new and used electronics. ) </h4>
					<form className="search-area">
						<input className="search-bar" placeholder="Search..." name="term"/>
						<select className="categories-dropdown" defaultValue="" name="Categories">Categories
							<option className="dropdown-item" value="">Categories</option>
							<optgroup className="dropdown-option" label="Home Audio">Home Audio
								<option className="dropdown-item" value="Speakers">Speakers</option>
								<option className="dropdown-item" value="Amplifiers">Amplifiers</option>
								<option className="dropdown-item" value="Pre-amps/Processors">Pre-amps/Processors</option>
								<option className="dropdown-item" value="AV Receivers/Integrated Amps">AV Receivers/Integrated Amps</option>
								<option className="dropdown-item" value="Phono Pre-Amps / Turn Tables">Phono Pre-Amps / Turn Tables</option>
							</optgroup>
							<optgroup className="dropdown-option" label="Headphones / Portable">Headphones / Portable
								<option className="dropdown-item" value="Open-Back">Open-Back</option>
								<option className="dropdown-item" value="Closed-Back">Closed-Back</option>
								<option className="dropdown-item" value="IEMs">IEMs</option>
								<option className="dropdown-item" value="Over-Ear">Over-Ear</option>
								<option className="dropdown-item" value="On-Ear">On-Ear</option>
								<option className="dropdown-item" value="Headphone Amps">Headphone Amps</option>
								<option className="dropdown-item" value="Portable DACs/Amps">Portable DACs/Amps</option>
							</optgroup>
							<optgroup className="dropdown-option" label="Computer-Audio">Computer-Audio
								<option className="dropdown-item" value="Monitors">Monitors</option>
								<option className="dropdown-item" value="Processors / ADCs">Processors / ADCs</option>
								<option className="dropdown-item" value="Mics">Mics</option>
								<option className="dropdown-item" value="DACs / DAC-Amp-Combos">DACs / DAC-Amp-Combos</option>
							</optgroup>
							<optgroup className="dropdown-option" label="Control">Control
								<option className="dropdown-item" value="Remotes">Remotes</option>
								<option className="dropdown-item" value="Connected Home">Connected Home</option>
								<option className="dropdown-item" value="Control Systems">Control Systems</option>
							</optgroup>
							<optgroup className="dropdown-option" label="Video">Video
								<option className="dropdown-item" value="TVs">TVs</option>
								<option className="dropdown-item" value="Projectors">Projectors</option>
								<option className="dropdown-item" value="Screens">Screens</option>
								<option className="dropdown-item" value="Video Systems">Video Systems</option>
								<option className="dropdown-item" value="Video Servers/Storage">Video Servers/Storage</option>
							</optgroup>
						</select>
						<button className="search-button" type="submit" value="Search">Search</button>
					</form>
					
					<div className="header-right">
						<p>{welcomeMessage}</p>
						<Link to="/">{account}</Link> 
						<Link to="/">{logout}</Link>					
						<Link to="/login">{login}</Link>
						<Link to="/register">{register}</Link>
					</div>
				</div>
				<div className="App-header-lower">
					<Link to="/">Home Audio</Link>
					<Link to="/">Home Video</Link>
					<Link to="/">Portable Audio</Link>
					<Link to="/">Computer Audio</Link>
					<Link to="/">Control</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		navResponse: state.login
	}
}

export default connect(mapStateToProps)(Nav);
