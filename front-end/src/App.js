import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
					<input className="search-bar" placeholder="Search..."/>
					<select className="categories-dropdown" label="Categories">Categories
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
				</div>
			</div>
		);
	}
}

export default App;
