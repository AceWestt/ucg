import React, { useState, useEffect, useCallback } from 'react';
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

const Nav = ({ fixed = false }) => {
	const {
		closeAllModals,
		isMenuOpen,
		setIsMenuOpen,
		setIsFactoryModalOpen,
		setIsSiteMapModalOpen,
	} = useAppContext();
	const [y, setY] = useState(window.scrollY);
	const [disappear, setDisappear] = useState(false);

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				const current = disappear;
				if (current) {
					setDisappear(false);
				}
			} else if (y < window.scrollY && window.scrollY !== 0) {
				const current = disappear;
				if (!current) {
					setDisappear(true);
				}
			}
			setY(window.scrollY);
		},
		[y, disappear]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, [handleNavigation]);
	return (
		<nav
			className={`nav ${fixed ? 'fixed' : ''} ${disappear ? 'disappear' : ''}`}
		>
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
