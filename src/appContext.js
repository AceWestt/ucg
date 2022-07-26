import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import logo from '@imgs/common/logo.svg';

const AppContext = React.createContext();

const apiEndpoint = 'https://api.unicementgroup.com/';

const callGet = async (url) => {
	return await axios.get(apiEndpoint + url);
};

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
		setIsOfficerModalOpen(false);
	};

	const [mainBackendData, setMainBackendData] = useState({});

	const [navEmail, setNavEmail] = useState('sales@unicementgroup.com');
	const [navPhone, setNavPhone] = useState('+10 (998 7091) 2 24 48');
	const [navLogo, setNavLogo] = useState(logo);
	const [factories, setFactories] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/main');
				if (maindata.status === 200) {
					setMainBackendData(maindata.data);
					setNavEmail(maindata.data.email);
					setNavPhone(maindata.data.phone);
					setNavLogo(maindata.data.logo);
					setFactories(maindata.data.factories);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

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
				navPhone,
				setNavPhone,
				navEmail,
				setNavEmail,
				mainBackendData,
				navLogo,
				factories,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, callGet };
