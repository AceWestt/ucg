import React, { useState, useEffect, useCallback } from 'react';
import NavLink from './NavLink';
import Btn from './Btn';

import { Link } from 'react-router-dom';
import siteMapLinkIcon from '../imgs/common/site-map-link-icon.svg';
import mailIcon from '../imgs/common/nav-mail-icon.svg';
import phoneIcon from '../imgs/common/nav-phone-icon.svg';
import menuToggleIcon from '../imgs/common/nav-menu-btn.svg';
import menuCloseIcon from '@imgs/common/closeModalMenuIcn.svg';
import { useAppContext } from '../appContext';
import LangBar from './navComponents/LangBar';
import { getLangString } from '../utils/tools';

const Nav = ({ fixed = false }) => {
	const {
		closeAllModals,
		isMenuOpen,
		setIsMenuOpen,
		setIsFactoryModalOpen,
		setIsSiteMapModalOpen,
		navPhone,
		navEmail,
		navLogo,
		lang,
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
				<Link to="/" className="logo">
					<img src={navLogo} alt="logo" />
				</Link>
				<NavLink
					text={getLangString(lang, 'Карта сайта', 'Site Map', 'Sayt xaritasi')}
					icon={siteMapLinkIcon}
					customClass="sitemap-open"
					action={() => {
						closeAllModals();
						setIsSiteMapModalOpen(true);
					}}
				/>
				<Btn
					text={getLangString(
						lang,
						'Выбрать предприятие',
						'Choose Factory',
						'Zavodni tanlash'
					)}
					action={() => {
						closeAllModals();
						setIsFactoryModalOpen(true);
					}}
				/>

				{navEmail && (
					<NavLink
						link={`mailto:${navEmail}`}
						text={navEmail}
						icon={mailIcon}
						customClass="mail-link"
					/>
				)}

				{navPhone && (
					<NavLink
						link={`tel:${navPhone}`}
						text={navPhone}
						icon={phoneIcon}
						customClass="phone-link"
					/>
				)}

				<LangBar />

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
