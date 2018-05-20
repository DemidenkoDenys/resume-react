export const sortFilters = (filters, selectedFilter) => {

	const ALL_FILTERS = 'All';

	let ANY_FILTER_SELECTED = true;
	
	if(selectedFilter === ALL_FILTERS){
		if(filters[ALL_FILTERS] === true){
	  		Object.keys(filters).forEach(key => {
				if(filters[key] === true && key !== ALL_FILTERS)
					filters[key] = false;
			});
		} else {
			filters[ALL_FILTERS] = true;
		}
	} else {
		if(filters[selectedFilter] === true){
			filters[ALL_FILTERS] = false;
		} else {
			Object.keys(filters).forEach(key => {
				if(filters[key] === true)
					ANY_FILTER_SELECTED = false;
			});

			if(ANY_FILTER_SELECTED === true){
				filters[ALL_FILTERS] = true;
			}
		}
	}

	return filters;
}

export const sortPortfolioItemsByFilters = (data, filters) => {
	let addedKeys = [],
		list = [];

	for(let key in data){
		data[key].name = key;

		if(!filters['All']){
			for(let i = 0; i < data[key].techs.length; i++){
				if(filters[data[key].techs[i]]){
					if(addedKeys.indexOf(key) < 0){
						list.push(data[key]);
						addedKeys.push(key);
					}
				}
			}
		} else {
			list.push(data[key]);
		}
	}

	return list;
}