import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import logo from '@imgs/common/logo.svg';

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
		setIsOfficerModalOpen(false);
	};

	const [mainBackendData, setMainBackendData] = useState({});

	const [navEmail, setNavEmail] = useState('sales@unicementgroup.com');
	const [navPhone, setNavPhone] = useState('+10 (998 7091) 2 24 48');
	const [navLogo, setNavLogo] = useState(logo);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await axios.get(`http://api.unicementgroup.com/api/main`);
				if (maindata.status === 200) {
					console.log(maindata.data);
					setMainBackendData(maindata.data);
					setNavEmail(maindata.data.email);
					setNavPhone(maindata.data.phone);
					setNavLogo(maindata.data.logo);
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
