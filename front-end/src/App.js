import React, { Component } from 'react';
import './styles.css';
import Nav from './containers/Nav';
// import SignIn from './containers/Login';
// import Register from './containers/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<div className="App-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
