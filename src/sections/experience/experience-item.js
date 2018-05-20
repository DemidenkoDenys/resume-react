import React from 'react';
import { getTranslatedValue } from '../../selectors/localization.js';

const ExperienceItem = ({ item, order, left, language }) => {

	let { title, year, desc, image, color } = item;

	return(
		
		<li className={ 'experience-item ' + ( !!left ? 'experience-item_top-left ' : 'experience-item_bottom-right' ) } 
			style={{ order: order, msFlexOrder: order, color: `#${ color }` }}>

			<img className='experience-item__image appear' 
				 src={ require(`../../images/experience/${ image }`) } 
				 alt={ getTranslatedValue(title, language) }/>

			<i className='experience-item__pointer' style={{ background: `#${ color }` }}></i>

			<h3 className='experience-item__header'>
				<time className='experience-header__year' style={{ background: `#${ color }` }}>{ year }</time>
				<span>{ getTranslatedValue(title, language) }</span>
			</h3>

			<p className="experience-item__description appear">{ getTranslatedValue(desc, language) }</p>

		</li>

	);
};

export default ExperienceItem;