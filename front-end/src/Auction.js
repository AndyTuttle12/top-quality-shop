import React, {Component } from 'react';

class Auction extends Component{

	render(){
		var auctionItem = this.props.item;
		return(
			<div className="product-wrapper">
				<h1 className="auction-title">{auctionItem.title}</h1>
				<div className="auction-content">
					<div className="auction-img">
						<img src={auctionItem.url} alt="Auction Item"/>
					</div>
					<div className="auction-details">
						<p className="description">{auctionItem.desc}</p>
						<div className="price-info">
							<h3 className="current-bid">Current Bid: {auctionItem.current_bid}</h3>
							<h4 className="starting-bid">Starting Price: {auctionItem.starting_bid}</h4>
							<h4 className="buy-now">Buy Now Price: {auctionItem.buy_now_price}</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Auction;