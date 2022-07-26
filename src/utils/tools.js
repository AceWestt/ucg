export const getLangString = (lang = 'ru', ru = '', en = '', uz = '') => {
	if (lang === 'ru') {
		return ru;
	}
	if (lang === 'en') {
		return en;
	}
	if (lang === 'uz') {
		return uz;
	}
	return ru;
};
