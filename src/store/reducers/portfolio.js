import { sortFilters } from '../../selectors/selectors';
import CONTENT from '../../sections/portfolio/portfolio.json';

const initFiltersState = (filters) => {
    let filtersCopy = {};
    filters.map((item, index) => 
        filtersCopy[item] = index === 0
    );
    return filtersCopy;
}

const initialState = {
	viewMode: 'iphone',
    workOpen: false,
    iframeLoaded: false,
    iframeOnScreen: false,
    filters: initFiltersState(CONTENT.filters)
}

const portfolio = (state = initialState, action) => {

    switch(action.type){
        case 'WORK_OPEN':
            return { ...state, workOpen: action.open }

        case 'WORK_CLOSE':
            return { ...state, workOpen: false, iframeLoaded: false, iframeOnScreen: false }

        case 'IFRAME_LOADED':
            return { ...state, iframeLoaded: action.loaded, iframeOnScreen: action.appear }

        case 'IFRAME_ON_SCREEN':
            return { ...state, iframeOnScreen: action.appear }

        case 'MODE_CHANGE':
            return { ...state, viewMode: action.view };

        case 'FILTER_CHANGE':
            return { ...state, 
                        filters: sortFilters({ ...state.filters, 
                                                [action.filter]: action.check }, action.filter) };

        default:
            return state;
    }
}

export default portfolio;