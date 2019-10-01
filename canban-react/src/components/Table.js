import React from 'react';
import "../style.css";
import Column from "./Column.js";
import PropTypes from 'prop-types';

export default class Table extends React.Component{
	addCol(){
		let buffArr = [];
		let arrDataCol = this.props.columnsData;
		for(let i=0; i<arrDataCol.length; i++){
			buffArr[i] = <Column id={arrDataCol[i].id} 
								 title={arrDataCol[i].title} 
								 key={arrDataCol[i].id}
								 cardsData={this.cardForCol(arrDataCol[i].id)}
								 headerForAddCards={this.props.headerForAddCards}/>;
		}
		return buffArr;
	}
	cardForCol(colIdx){
		let buffArr = [];
		let arrDataCard = this.props.cardsData;
		for(let i=0; i<arrDataCard.length; i++){

			if(colIdx === arrDataCard[i].columnId){
				buffArr.push(arrDataCard[i]);
			}
		}
		return buffArr;
	}
	render(){
		return <div className="board">{this.addCol()}</div>;
	}
}

Table.propTypes = {
	columnsData: PropTypes.array,
	headerForAddCards: PropTypes.func,
	cardsData: PropTypes.array
}