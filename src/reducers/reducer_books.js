export default function (state = [], action) {

	switch(action.type) {

		case 'ADD_BOOK':
			return [...state, Object.assign({}, { title: action.title })];
		break;

		default:

		return state;
	}

}
