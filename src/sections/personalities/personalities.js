import React from 'react';

import { HeaderSection } from '../../components/header-section';
import { PersonalitiesList } from './personalities-list';
import { getTranslatedValue } from '../../selectors/localization.js';

import CONTENT from './personalities.json';
import './personalities.scss';

export const Personalities = ({ header, language }) => {

	return(
       
		<section className="personalities-section">

			<HeaderSection title={ getTranslatedValue(header, language) } />

			<PersonalitiesList list={ CONTENT.list } language={ language } />

		</section>
	);
}