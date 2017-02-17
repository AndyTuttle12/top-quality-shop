import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetAuctionAction from '../actions/AuctionItemAction';

class AuctionItem extends Component{

	componentDidMount() {
		var auctionId = this.props.params.auctionId;
		this.props.getAuctionData(auctionId);
	}

	render(){
		if(this.props.auctionDetail.length === 0){
			return (
				<p>Loading Auction...</p>
			);
		}
		// var currAuction = [];
		var auctionItem = this.props.auctionDetail[0];
		console.log(auctionItem);
		return(
			<div className="home-page">
				<h1>Auction</h1>
				<div className="card-area">
					<div className="auction-card">
						<h1>{auctionItem.title}</h1>
						<p>{auctionItem.desc}</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		auctionDetail: state.auctionItem
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getAuctionData: GetAuctionAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionItem);