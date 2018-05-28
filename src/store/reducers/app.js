const initialState = {
	language: 'ru',
	workFinded: true
};

const app = (state = initialState, action) => {

	if(action.type === 'LANGUAGE_CHANGE'){
		document.documentElement.lang = action.language;
        return { ...state, language: action.language };
	}

    return state;
}

export default app;