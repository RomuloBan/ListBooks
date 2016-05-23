import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

var store = createStore(reducers);


const dispatchAction = (action) => {
	store.dispatch(action);
}

ReactDOM.render(
  <Provider store={store}>
    <App onDispatchAction={dispatchAction}/>
  </Provider>
  , document.querySelector('.container'));
