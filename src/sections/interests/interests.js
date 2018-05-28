import React from 'react';
import Slider from 'react-slick';

import { HeaderSection } from '../../components/header-section';
import { getTranslatedValue } from '../../selectors/localization.js';

import CONTENT from './interests.json';

import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import './interests.scss';

export const Interests = ({ header, language }) => {

	return(
		<section className="interests-section">

			<HeaderSection title={ getTranslatedValue(header, language) } />

			<p className='appear'>{ getTranslatedValue(CONTENT.desc, language) }</p>

			<Slider {...settings} className="interests-list appear">
			 	{
			 		CONTENT.list.map(item => {

			 			let { id, image, title, taboo } = { ...item };

			 			return(
							<div className='interests-item' key={ id }>

			 					{ (taboo && taboo === '1') ? <span className='interests-item__taboo glyphicon glyphicon-ban-circle' /> : null }

	 							<img className='interests-item__image' 
	 						 		 src={ require(`../../images/interests/${ image }`) }
	 						 		 data-tip={ getTranslatedValue(title, language) }
	 						 		 alt={ getTranslatedValue(title, language) } />

	 							<p className="interests-item__description">{ getTranslatedValue(title, language) }</p>

			 				</div>
			 			)
					})
			 	}
			</Slider>

		</section>
	)
}

const settings = {
	dots: false,
	// lazyLoad: 'ondemand',
	infinite: true,
	autoplay: false,
	speed: 100,
	slidesToShow: 5,
	slidesToScroll: 3,
	responsive: [
		{ breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
		{ breakpoint: 640, settings: { slidesToShow: 3, slidesToScroll: 1 } },
		{ breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } }
	]
};	