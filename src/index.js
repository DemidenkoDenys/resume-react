import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { wow } from './libs/wow/wow';
import { detect } from 'detect-browser';
import store from './store/store';
import Page from './sections/page';

import './index.scss';

const browser = detect();

let root = document.getElementById('react-root');
	root.classList.add(browser.name);

ReactDOM.render(
	<Provider store={ store }>
		<Page />
	</Provider>,
	document.getElementById('react-root')
);