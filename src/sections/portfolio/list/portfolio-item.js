import React from 'react';
import { Link } from 'react-router-dom';
import { getTranslatedValue } from '../../../selectors/localization.js';

import './portfolio-item.scss';

const PortfolioItem = ({ item, language, onSelect }) => {

	const { name, title, short, desc, techs, link } = {...item};

	const handleClick = () => {
		localStorage.setItem("app_address", name);
		onSelect(name);
	}

	return (

		<li className="portfolio-item">
			<div className="portfolio-item__wrapper">
				
				<img className='portfolio-item__image' src={ require('../../../images/works/' + name + '.jpg') } alt={ getTranslatedValue(short, language) }/>
				
				<Link className='portfolio-item__link-wrapper' to={ '/'.concat(name) } onClick={ handleClick }>

					<h3 className='portfolio-item__header'>{ getTranslatedValue(title, language) }</h3>
					<p className='portfolio-item__short-description'>{ getTranslatedValue(short, language) }</p>

					<article className='portfolio-item__description'>
						<small className='portfolio-item__description_text'>{ getTranslatedValue(desc, language) }</small>

						<p className="portfolio-item__technologies-list">
							{ techs.map(item => 
								<span className='portfolio-item__technologies-item' key={ item }>{ item }</span>)
							}
						</p>
					</article>

					<p className="portfolio-item__print-link">{ link }</p>
				</Link>
			</div>
		</li>
	)
};

export default PortfolioItem;