import React from 'react';
import { Route } from 'react-router-dom';

import PortfolioDetail from '../details/portfolio-detail';

const ListRoutes = ({ data }) => {
	let routeList = [];

	for(let key in data){
		routeList.push(
			<Route key={key} 
				   path={'/' + key} 
				   render={() => ( <PortfolioDetail name={ key } item={ data[key] } /> )} />
		);
	};

	return routeList;
}

export default ListRoutes;