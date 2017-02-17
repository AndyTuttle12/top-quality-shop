import $ from 'jquery';

export default function(bidAmount, auctionItemId, userToken){
	var bidInfo = {
		bidAmount: bidAmount,
		auctionItem: auctionItemId,
		userToken: userToken
	}
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3000/submitBid",
		data: bidInfo
	});
	return{
		type: "SUBMIT_BID",
		payload: thePromise
	}
}