export default function (state = [], action) {

	switch(action.type) {

		case 'ADD_BOOK':
		return [...state, book(undefined, action)];


		case 'SELECT_BOOK':			
		return state.map(t => 
                book(t, action)
            );

		case 'REMOVE_BOOK':			
		return state.filter(t => 
                book(t, action)
            );

		default:

		return state;
	}

}

let incrementalId = 0;



const book = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                id: incrementalId++,
                title: action.title,
                selected: false
            };
        case 'SELECT_BOOK':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                selected: !state.selected
            };
         case 'REMOVE_BOOK':
            if (state.id !== action.id) {
                return true;
            }
            return false;

           
        default:
            return state;
    }
};
