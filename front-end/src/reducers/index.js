import { combineReducers } from 'redux';
import GetHomeReducer from './GetHomeReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import GetAuctionItemReducer from './GetAuctionItemReducer';
import BidReducer from './BidReducer';

const rootReducer = combineReducers({
	home: GetHomeReducer,
	register: RegisterReducer,
	login: LoginReducer,
	auctionItem: GetAuctionItemReducer,
	bid: BidReducer

});

export default rootReducer;