import { createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

let store = createStore(reducers, 
						compose(
      						applyMiddleware(thunk),
      						window.devToolsExtension ? window.devToolsExtension() : f => f
    					));

// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => { 					// подписались на изменения хранилища
    // console.log(store.getState()); 		// при каждом изменении store будет выведего его
});

export default store;