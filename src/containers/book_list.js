import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {



	renderList() {
		return this.props.books.map( book => {

				return (<li className="list-group-item" style={{'backgroundColor': book.selected ? 'orange' : ''}} key={book.title} ><div className="book-title" onClick={() => this.props.onBookSelected(book)}>{book.title}</div><div onClick={() => {this.props.onBookRemoved(book)}} className="glyphicon glyphicon-remove pull-right remove-icon"></div></li>);
					   
		});
	}

	render() {
		return (<ul className="list-group book-list">
				{this.renderList()}
				</ul>);		
	}

}

const mapStateToProps = (state) => {
	return {
		books: state.books
	};	
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBookSelected: (book) => { 
			dispatch({ type: 'SELECT_BOOK',
						 id: book.id,
					  title: book.title
					});
		},
		onBookRemoved: (book) => { 
			dispatch({ type: 'REMOVE_BOOK',
						 id: book.id
					});
		}
	};	
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);