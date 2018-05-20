import React from 'react';

import './portfolio-filter.scss';

export const PortfolioFilter = ({ name, check, onChangeFilter }) => {

 	const toggleFilter = () => {
		onChangeFilter(name, !check);
  	}

	return (
	  	<li className='portfolio-filter__item'>
		
			<label>

				<input className='portfolio-filter__checker'
				   	   type='checkbox'
				   	   checked={ check } 
				   	   value={ name }
				   	   onChange={ toggleFilter } />

				<span className='portfolio-filter__marker'>{ name }</span>

			</label>

	  	</li>
	)
};