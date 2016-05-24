import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';


const InputBook = ({ dispatch }) => {

	let input;

	const clickHandler = () => {
		if(input.value) dispatch({ type: actions.ADD_BOOK, title: input.value });
		
		input.value = '';
	};

	return(
		<div className="input-book">
			<input ref={(ref) => { input = ref }} type="text" />
			<button type="button" className="btn btn-default" onClick={clickHandler} >Save</button>
		</div>
	);
}


export default connect()(InputBook);