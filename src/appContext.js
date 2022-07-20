import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [lang, setLang] = useState('ru');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [isFactoryModalOpen, setIsFactoryModalOpen] = useState(false);
	const [isSiteMapModalOpen, setIsSiteMapModalOpen] = useState(false);
	const [isOfficerModalOpen, setIsOfficerModalOpen] = useState(false);

	const [activeDirector, setActiveDirector] = useState();

	const closeAllModals = () => {
		setIsMenuOpen(false);
		setIsFactoryModalOpen(false);
		setIsFormModalOpen(false);
		setIsSiteMapModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				lang,
				setLang,
				closeAllModals,
				isMenuOpen,
				setIsMenuOpen,
				isFormModalOpen,
				setIsFormModalOpen,
				isFactoryModalOpen,
				setIsFactoryModalOpen,
				isSiteMapModalOpen,
				setIsSiteMapModalOpen,
				activeDirector,
				setActiveDirector,
				isOfficerModalOpen,
				setIsOfficerModalOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
