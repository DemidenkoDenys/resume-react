import React from 'react';
import { getTranslatedValue } from '../../selectors/localization.js';

export const PersonalitiesList = ({ list, language }) => {

	return(
       
		<ul className='personalities-list'>
			{   
				list.map(item => {

					let { id, title, desc } = { ...item };
					
					return(
						<li key={ id } className="personalities-item">
							<strong className='personalities-item__header appear'>{ getTranslatedValue(title, language) }</strong><br/>
							<span className='personalities-item__description appear'>{ getTranslatedValue(desc, language) }</span>
						</li>
					)
				})
			}
		</ul>

	);
}