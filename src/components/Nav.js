import React from 'react';
import NavLink from './NavLink';
import Btn from './Btn';

import logo from '../imgs/common/logo.svg';
import siteMapLinkIcon from '../imgs/common/site-map-link-icon.svg';
import mailIcon from '../imgs/common/nav-mail-icon.svg';
import phoneIcon from '../imgs/common/nav-phone-icon.svg';
import menuToggleIcon from '../imgs/common/nav-menu-btn.svg';
import menuCloseIcon from '@imgs/common/closeModalMenuIcn.svg';
import { useAppContext } from '../appContext';
// import LangBar from './navComponents/LangBar';

const Nav = () => {
	const {
		closeAllModals,
		isMenuOpen,
		setIsMenuOpen,
		setIsFactoryModalOpen,
		setIsSiteMapModalOpen,
	} = useAppContext();
	return (
		<nav className="nav">
			<div className="container">
				<a href="/" className="logo">
					<img src={logo} alt="logo" />
				</a>
				<NavLink
					text="Карта сайта"
					icon={siteMapLinkIcon}
					customClass="sitemap-open"
					action={() => {
						closeAllModals();
						setIsSiteMapModalOpen(true);
					}}
				/>
				<Btn
					text="Выбрать предприятие"
					action={() => {
						closeAllModals();
						setIsFactoryModalOpen(true);
					}}
				/>
				<NavLink
					link="mailto:sales@unicementgroup.com"
					text="sales@unicementgroup.com"
					icon={mailIcon}
					customClass="mail-link"
				/>
				<NavLink
					link="tel:+10 (998 7091) 2 24 48"
					text="+10 (998 7091) 2 24 48"
					icon={phoneIcon}
					customClass="phone-link"
				/>
				{/* <LangBar /> */}
				<div
					className={`toggle-menu-btn ${isMenuOpen ? 'open' : ''}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<img src={isMenuOpen ? menuCloseIcon : menuToggleIcon} alt="togglemenu" />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
