import React from 'react';

import ExperienceItem from './experience-item';

import './experience-list.scss';

const ExperienceList = ({ list, language, workFinded }) => {

	let upperCounter = 0, 
		lowerCounter = Math.round(list.length / 2),
		workFindedClass = workFinded ? 'experience-list_work-finded' : '';

	return(
		<ul className={`experience-list ${workFindedClass}`}>

			{
				list.map((item, index) => {
					if( workFinded && index === 8)
						return false;

					if(!workFinded && index === 9)
						return false;
					
					if(workFinded && index === 9)
						index = 8;

					return <ExperienceItem  item={ item } 
											key={ item.id }
											index={ index }
											order={ index % 2 === 0 ? ++upperCounter : ++lowerCounter } 
											left={ index % 2 === 0 }
											language={ language }
					/>
				})
			}
			
		</ul>
	)
}

export default ExperienceList;