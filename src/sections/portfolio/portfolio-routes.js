import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Portfolio from './portfolio';
import ListRoutes from './list/list-routes';
import CONTENT from './portfolio.json';


const PortfolioRoutes = ({ header }) => {

	const rootRoute = () => { return <Portfolio header={ header } 
												filters={ CONTENT.filters }
												list={ CONTENT.list } /> };

	return(
		<Fragment>

			<Route exact path='/' render={ rootRoute } />
		
			<ListRoutes data={ CONTENT.list } />
		
		</Fragment>
	)
}

export default PortfolioRoutes;