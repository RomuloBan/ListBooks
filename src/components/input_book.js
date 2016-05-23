import React from 'react';
import { connect } from 'react-redux';


const InputBook = ({ dispatch }) => {

	let input;

	const clickHandler = () => {
		if(input.value) dispatch({ type: 'ADD_BOOK', title: input.value });
		
		input.value = '';
	};

	return(
		<div>
			<input ref={(ref) => { input = ref }} type="text" />
			<button onClick={clickHandler} >Save</button>
		</div>
	);
}


export default connect()(InputBook);