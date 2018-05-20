import React from 'react';

import ExperienceItem from './experience-item';

import './experience-list.scss';

const ExperienceList = ({ list, language }) => {

	let upperCounter = 0, 
		lowerCounter = Math.round(list.length / 2);

	return(
		<ul className="experience-list">

			{
				list.map((item, index) =>
					<ExperienceItem item={ item } 
									key={ item.id }
									order={ index % 2 === 0 ? ++upperCounter : ++lowerCounter } 
									left={ index % 2 === 0 }
									language={ language }
									/>
				)
			}
			
		</ul>
	)
}

export default ExperienceList;