import React from 'react';
import Table from './Table.js';
import {getColumns} from '../services/getColumns.js';
import {getCards} from '../services/getCards.js';
import {headerForAddCards} from "../services/headerForAddCards.js";

export default class TableContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columnsData: [],
			cardsData: []
		};
		this.addCards = this.addCards.bind(this);
		
	}
	
	addCards(event){
		headerForAddCards(event).then(data=>this.setState({cardsData: [...this.state.cardsData, data]}));
	}

	componentDidMount(){
		getColumns()
			.then(result=>this.setState({columnsData: result}));
		getCards()
			.then(result=>this.setState({cardsData: result}));
	}
	render(){
		return <Table columnsData={this.state.columnsData} 
					  cardsData={this.state.cardsData}
					  headerForAddCards = {this.addCards}/>;
	}
}