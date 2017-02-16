import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../Auction';

class Home extends Component{


	componentDidMount() {
		this.props.getHomeData();
	}

	render(){
		// console.log(this.props.homeData)
		var homeAuctions = [];
		this.props.homeData.map((auction, index)=>{
			homeAuctions.push(<Auction key={index} item={auction}/>);
			return homeAuctions;
		});
		return(
			<div className="home-page">
				<h1>Deals of the Day</h1>
				<div className="card-area">
					<div className="auction-card">
						{homeAuctions}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		homeData: state.home
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHomeData: GetHomeAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);