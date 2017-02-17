import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetAuctionAction from '../actions/AuctionItemAction';
import SubmitBidAction from '../actions/SubmitBidAction';

class AuctionItem extends Component{
	constructor(props) {
		super(props);
		this.submitBid = this.submitBid.bind(this);
	}

	componentDidMount() {
		var auctionId = this.props.params.auctionId;
		this.props.getAuctionData(auctionId);
	}

	submitBid(event){
		event.preventDefault();
		console.log(this.props.userToken)
		if(this.props.userToken === undefined){

		}else{
			var bidAmount = event.target[0].value;
			var auctionItem = this.props.auctionDetail[0];
			if(auctionItem.current_bid === 'No bids yet.'){
				auctionItem.current_bid = Number(auctionItem.starting_bid) - .01;
			}
			if(bidAmount < auctionItem.current_bid){
				console.log("bid too low");
			}else{
				console.log("submit");
				this.props.submitBidToExpress(bidAmount, auctionItem.id, this.props.userToken)
			}
		}
	}

	render(){
		if(this.props.auctionDetail.length === 0){
			return (
				<p>Loading Auction...</p>
			);
		}
		// var currAuction = [];
		var auctionItem = this.props.auctionDetail[0];
		if(auctionItem.current_bid === null){
			auctionItem.current_bid = "No bids yet.";
		}
		// console.log(auctionItem);
		return(
			<div className="home-page">
				<h1>Auction</h1>
				<div className="card-area">
					<div className="auction-card">
						<h1>{auctionItem.title}</h1>
						<p>{auctionItem.desc}</p>
						<p>Current High Bid {auctionItem.current_bid}</p>
						<p>High Bidder: {auctionItem.high_bidder_id}</p>
						<p>Starting Bid: {auctionItem.starting_bid}</p>
						<form onSubmit={this.submitBid}>
							<input type="number" placeholder="Enter your bid" />
							<button type="submit">Bid</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		auctionDetail: state.auctionItem,
		userToken: state.login.token
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getAuctionData: GetAuctionAction,
		submitBidToExpress: SubmitBidAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionItem);