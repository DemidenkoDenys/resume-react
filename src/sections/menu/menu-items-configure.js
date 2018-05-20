import MENUS from './menu.json';

export const menuItemsConfigure = (linkAction, changeLanguageHandler, changePortfolioViewHandler, openModalHandler, list = [], counter = 0) => {

	const menuActions = [
		(e) => { e.preventDefault(); linkAction({ href: "https://djinni.co/q/0aa7121b/" }); },
		(e) => { e.preventDefault(); linkAction({ href: "https://github.com/demidenkodenys" }); },
		(e) => { e.preventDefault(); linkAction({ href: "https://www.linkedin.com/in/demidenko-denys/" }); },

		(e) => { e.preventDefault(); openModalHandler({ modalOpened: true, image: 'diplom.png' }); },
		(e) => { e.preventDefault(); openModalHandler({ modalOpened: true, image: 'review.jpg' }); },
		(e) => { e.preventDefault(); openModalHandler({ modalOpened: true, image: 'balls.png' }); },

		(e) => { e.preventDefault(); linkAction({ href: "./downloads/Demidenko_Denys_CV.pdf", download: true }); },
		(e) => { e.preventDefault(); linkAction({ href: "./downloads/Demidenko_Denys_CV.docx", download: true }); },
		(e) => { e.preventDefault(); window.print(); },

		(e) => { e.preventDefault(); changeLanguageHandler('ru'); },
		(e) => { e.preventDefault(); changeLanguageHandler('uk'); },
		(e) => { e.preventDefault(); changeLanguageHandler('en'); },

		(e) => { e.preventDefault(); changePortfolioViewHandler('iphone'); },
		(e) => { e.preventDefault(); changePortfolioViewHandler('samsung'); },
		(e) => { e.preventDefault(); changePortfolioViewHandler('ipad'); },

		(e) => { e.preventDefault(); changePortfolioViewHandler('ipad-pro'); },
		(e) => { e.preventDefault(); changePortfolioViewHandler('laptop'); },
		(e) => { e.preventDefault(); changePortfolioViewHandler('desktop'); },            
	];

	const menuActiveConditions = [
		() => { return false; },
		() => { return false; },
		() => { return false; },

		() => { return false; },
		() => { return false; },
		() => { return false; },

		() => { return false; },
		() => { return false; },
		() => { return false; },

		(language) => { return language === 'ru' },
		(language) => { return language === 'uk' },
	    (language) => { return language === 'en' },
	    
	    (viewMode) => { return viewMode === 'iphone' },
	    (viewMode) => { return viewMode === 'samsung' },
	    (viewMode) => { return viewMode === 'ipad' },

	    (viewMode) => { return viewMode === 'ipad-pro' },
	    (viewMode) => { return viewMode === 'laptop' },
	    (viewMode) => { return viewMode === 'desktop' }
	];

	for(let key in MENUS){
		list.push({
			id: key,
			title:  MENUS[key],
			active: menuActiveConditions[counter],
			action: menuActions[counter]
		});
		counter++;
	}

	return list;
}