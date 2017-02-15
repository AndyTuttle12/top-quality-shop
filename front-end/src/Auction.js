import React, {Component } from 'react';

class Auction extends Component{

	render(){
		var auctionItem = this.props.item;
		return(
			<div className="product-wrapper">
				<h1>{auctionItem.title}</h1>
				<div>
					<img src={auctionItem.url} alt="Auction Item"/>
				</div>
			</div>
		);
	}
	
}

export default Auction;