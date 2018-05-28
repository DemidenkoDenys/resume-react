import React from 'react';

import { HeaderSection } from '../../components/header-section';
import ExperienceList from './experience-list';
import { getTranslatedValue } from '../../selectors/localization.js';


import CONTENT from './experience.json';


export const Experience = ({ language, header, workFinded }) => {

	return(
       
		<section className="experience-section">

			<HeaderSection title={ getTranslatedValue(header, language) } />

			<ExperienceList list={ CONTENT.list } language={ language } workFinded={ workFinded }/>

		</section>
	);
}