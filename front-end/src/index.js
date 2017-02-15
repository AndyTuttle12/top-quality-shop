import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise';
import App from './App';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Search from './containers/Search';
import './index.css';

const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers);

ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<Router history={browserHistory}>
		        <Route path="/" component={App}>
		        	<IndexRoute component={Home}/>
		        	<Route path="/login" component={Login}/>
		        	<Route path="/register" component={Register}/>
		        	<Route path="/search/:term" component={Search}/>
		        </Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
