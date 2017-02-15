import { combineReducers } from 'redux';
import GetHomeReducer from './GetHomeReducer';
import RegisterReducer from './RegisterReducer';

const rootReducer = combineReducers({
	home: GetHomeReducer,
	register: RegisterReducer

});

export default rootReducer;