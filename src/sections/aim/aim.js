import React from 'react';

import { HeaderSection } from '../../components/header-section';
import { getTranslatedValue } from '../../selectors/localization.js';

import CONTENT from './aim.json';

import './aim.scss';

export const Aim = ({ language, header }) => {

	return(
       
		<section className="aim-section">

			<HeaderSection title={ getTranslatedValue(header, language) } />

			<p className="appear aim__description appear">{ getTranslatedValue(CONTENT.text, language) }</p>

		</section>
	);
}