import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
// import { bindActionCreators } from 'redux';

import Menu from './menu/menu';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Personalities } from './personalities/personalities';
import { Aim } from './aim/aim';
import { Interests } from './interests/interests';
import PortfolioRoutes from './portfolio/portfolio-routes';
import ReactTooltip from 'react-tooltip';
import inView from 'in-view';

// page.scss impoted in ../index.scss

import HEADERS from '../data/headers.json';

class Page extends Component {

	history = createBrowserHistory();

	// if( localStorage.getItem('app_address') === null || 
	// 	localStorage.getItem('app_address') === undefined || 
	// 	localStorage.getItem('app_address') === ''){
	// 		history.push('/');	
	// 		localStorage.setItem('app_address', '');
	// } else
	// 	history.push('/' + localStorage.getItem('app_address'));

	componentDidMount(){
		inView('.appear')
    		.on('enter', (e) => {
    			e.classList.add('animated');
    			e.classList.remove('appear');
    		});
	}

	render() {

		return (
			<Fragment>

				<Router history={ this.history }>

					<Fragment>
						
						<Menu />

						<Experience header={ HEADERS.experience } language={ this.props.language } workFinded={ this.props.workFinded } />

						<Skills headers={ HEADERS } language={ this.props.language } />

						<Personalities header={ HEADERS.personalities } language={ this.props.language } />

						<Aim header={ HEADERS.aim } language={ this.props.language } />

						<Interests header={ HEADERS.interests } language={ this.props.language } />

						<PortfolioRoutes header={ HEADERS.portfolio } />
		
						<ReactTooltip place="top" type="dark" effect="float" offset={{ top: 10, left: 10 }} />
	
					</Fragment>

				</Router>

			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	 language: state.app.language,
	 workFinded: state.app.workFinded
});

// const actionsStateToProps = dispatch => ({
//    	onChangeLanguage: bindActionCreators(changeLanguage, dispatch)
// });

// const mapDispathToProps = dispatch => ({
// 	onChangeLanguage: language => dispatch({ type: 'LNG_CHANGE', language: language }),
// })

export default connect(mapStateToProps)(Page);