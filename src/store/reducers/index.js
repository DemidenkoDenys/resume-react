import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import portfolio from './portfolio';
import app from './app';

export default combineReducers({
	routerReducer,
	portfolio,
	app
});