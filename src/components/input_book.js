import React from 'react';


const InputBook = ({ onClickSave }) => {

	let input;

	const clickHandler = () => {
		if(input.value) onClickSave({ type: 'ADD_BOOK', title: input.value });
		
		input.value = '';
	};

	return(
		<div>
			<input ref={(ref) => { input = ref }} type="text" />
			<button onClick={clickHandler} >Save</button>
		</div>
	);
}


export default InputBook;