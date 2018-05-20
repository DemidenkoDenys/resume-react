import React from 'react';

import { HeaderSection } from '../../components/header-section';
import { SkillsList } from './skills-list';
import { getTranslatedValue } from '../../selectors/localization.js';

import CONTENT from './skills.json';

export const Skills = ({ language, headers }) => {

	return(
       
		<section className="skills-section">

			<HeaderSection title={ getTranslatedValue(headers.skills, language) } />

			<SkillsList list={ CONTENT.skills } headers={ headers } language={ language } />

		</section>
	);
}