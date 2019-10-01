import React from 'react';
import '../style.css';
import PropTypes from 'prop-types';

export default class Card extends React.Component{
	render(){
		return (
			<div className="card" 
				 draggable='true' 
				 id={this.props.id} 
				 data-column={this.props.columnId}>

				<button className="removeButton" data-card-id={this.props.id}></button>
				<p className="card-content" draggable='false'>{this.props.title}</p>

			</div>
			);
	}
}

Card.propTypes = {
	id: PropTypes.number,
	columnId: PropTypes.number,
	title: PropTypes.string
}