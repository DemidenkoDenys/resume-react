export const changeLanguage = language => {

	// here can be async function(){ 
		// here must be dispatch of any action
	// }

	return dispatch => {
		dispatch({
			type: 'LNG_CHANGE',
			language: language
		});
	}
}