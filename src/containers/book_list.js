import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

	render() {

		return (<ul>
			{this.props.books.map( book => {
				return <li  key={book.title} >{book.title}</li>
			})}
		</ul>);
		
	}

}

const mapStateToProps = (state) => {
	return {
		books: state.books

	};
	
}


export default connect(mapStateToProps)(BookList);