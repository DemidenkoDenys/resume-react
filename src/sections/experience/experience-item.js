import React from 'react';
import { getTranslatedValue } from '../../selectors/localization.js';

const ExperienceItem = ({ item, order, index, left, language }) => {

	const rootClass = 'experience-item';

	let { title, year, desc } = item;

	return(
	
		<li className={ `${rootClass} ${rootClass}${!!left ? '_top-left' : '_bottom-right' }`} 
			style={{ order: order, msFlexOrder: order }}>

			<figure className={`${rootClass}__image-wrapper appear`}>
				<div className={`${rootClass}__image`}/>
			</figure>

			<i className={`${rootClass}__pointer`}></i>

			<h3 className={`${rootClass}__header`}>
				<time className={`${rootClass}__year`}>
					<span className={`${rootClass}__year-text`}>{ year }</span>
				</time>
				<span>{ getTranslatedValue(title, language) }</span>
			</h3>

			<p className={`${rootClass}__description appear`}>{ getTranslatedValue(desc, language) }</p>
		</li>
	);
};

export default ExperienceItem;