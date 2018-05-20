import TRANSLATIONS from '../data/localization/translations.json';

export const getTranslatedValue = (value, language) => {
	if(value && (typeof value === 'string') && value.indexOf('__key__') === 0){
		let key = value.replace(/__key__/gi, '');
		return TRANSLATIONS[key] ? TRANSLATIONS[key][language] : null;
	}

	return value;
}