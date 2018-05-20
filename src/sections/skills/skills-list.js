import React from 'react';
import { getTranslatedValue } from '../../selectors/localization.js';

export const SkillsList = ({ list, headers, language }) => {

	return(

		<ol className="skills-list">
			{
				list.map((item, index) => {

					if(item.head){

						return <h3 className='skills-item__header' key={ index }>{ getTranslatedValue(headers[item.skill], language) }</h3>;
					
					} else {
					
						return(
							<li className={`appear skills-item skills-item_level-${item.percent}`}
								key={ index }>

								<strong className='skills-item__title'>
									{ item.svg && item.svg !== '' && <span className='skills-item__svg' dangerouslySetInnerHTML={{ __html: item.svg }}/> }
									{ item.skill }
								</strong>
								
								<sup className='skills-item__percentage'>{ item.percent }%</sup>
							</li>
						)
					}

				})
			}
		</ol>
	);

}