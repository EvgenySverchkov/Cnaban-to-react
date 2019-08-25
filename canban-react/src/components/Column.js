import React from 'react';
import "../style.css";
import Card from './Card.js';
import PropTypes from 'prop-types';

export default class Column extends React.Component{
	addCards(){
		let arrBuff=[];
		let arrCardData = this.props.cardsData;
		for(let i=0; i<arrCardData.length; i++){
			arrBuff.push(<Card key={arrCardData[i].id} 
							   id={arrCardData[i].id} 
							   title={arrCardData[i].title}/>);
		}
		return arrBuff;
	}
	render(){
		return (
			<div className="columns" id={this.props.id}>
				<p className="headline">{this.props.title}</p>
				{this.addCards()}
				<button className="addButton" onClick={this.props.headerForAddCards}>Add</button>
			</div>
			);
	}
}

Column.propTypes = {
	cardsData: PropTypes.array,
	id: PropTypes.number,
	title: PropTypes.string,
	headerForAddCards: PropTypes.func
}