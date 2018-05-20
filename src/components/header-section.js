import React from 'react';

import './header-section.scss';

export const HeaderSection = (props) => {

	if(props.children && props.children.length > 0){
		return(
			<h2 className="section__header appear">
				{ props.children.map(item => item) }
			</h2>
		)
	} else {
		return (
			<h2 className="section__header appear">
				<span>#{ props.title }</span>
			</h2>
		);
	}
}