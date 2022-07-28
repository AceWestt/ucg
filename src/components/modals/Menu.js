import React from 'react';
import Nav from '@components/Nav.js';
import bg from '@imgs/common/modals/menubg.png';
import { plants } from '@files/plants';
import phoneIcon from '@imgs/common/nav-phone-icon.svg';
import mailIcon from '@imgs/common/nav-mail-icon.svg';
import { useAppContext } from '../../appContext';
import NavLink from '../NavLink';
import siteMapLinkIcon from '@imgs/common/site-map-link-icon.svg';
import { getLangString } from '../../utils/tools';
import { Link } from 'react-router-dom';
const Menu = () => {
	const {
		closeAllModals,
		setIsFactoryModalOpen,
		setIsSiteMapModalOpen,
		factories,
		lang,
		navEmail,
		navPhone,
	} = useAppContext();
	return (
		<div id="site-menu">
			<img className="bg" src={bg} alt="menu-bg" />
			<section className="section menu-section section-column">
				<Nav />
				<div className="section mobile-header mobile-only section-column">
					<div
						className="production-select"
						onClick={() => {
							closeAllModals();
							setIsFactoryModalOpen(true);
						}}
					>
						{getLangString(
							lang,
							'Выберите предприятие',
							'Choose factory',
							'Zavodni tanlang'
						)}
					</div>
					<NavLink
						text={getLangString(lang, 'Карта сайта', 'Site Map', 'Sayt xaritasi')}
						icon={siteMapLinkIcon}
						customClass="sitemap-open"
						action={() => {
							closeAllModals();
							setIsSiteMapModalOpen(true);
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
				</div>
				<div className="links-wrapper p-left p-right">
					<div className="links">
						<div className="link-group">
							<Link to="/" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Главная', 'Asosiy', 'Main')}
							</Link>
							<Link to="/projects" onClick={() => closeAllModals()}>
								{getLangString(
									lang,
									'Мы помогли построить',
									'We helped build',
									'Qurishga yordam berdik'
								)}
							</Link>
							<Link to="/career" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Карьера', 'Career', 'Karyera')}
							</Link>
						</div>
						<div className="link-group">
							<Link to="/about" onClick={() => closeAllModals()}>
								{getLangString(lang, 'О компании', 'About', 'Biz haqimizda')}
							</Link>
							<Link to="/news" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Новости', 'News', 'Yangiliklar')}
							</Link>
							<Link to="/development" onClick={() => closeAllModals()}>
								{getLangString(
									lang,
									'Устойчивое развитие',
									'Sustainable Growth',
									'Barqaror rivojlanish'
								)}
							</Link>
						</div>
						<div className="link-group">
							<Link to="/production" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Производство', 'Production', 'Ishlab chiqarish')}
							</Link>
							<Link to="/special-offer" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Бонусы', 'Bonuses', 'Bonuslar')}
							</Link>
							<Link to="/contact" onClick={() => closeAllModals()}>
								{getLangString(lang, 'Контакты', 'Contact', 'Aloqa')}
							</Link>
						</div>
					</div>
				</div>
				<div className="contact-details p-left p-right">
					{factories.map((p, i) => {
						return (
							<div className="contact" key={`plant-contact-${i}`}>
								<div className="title">{p[`title_${lang}`]}</div>
								<div className="phone">
									<img src={phoneIcon} alt="phone" />
									<span>{p.telephone}</span>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Menu;
