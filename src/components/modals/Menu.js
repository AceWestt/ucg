import React from 'react';
import Nav from '@components/Nav.js';
import bg from '@imgs/common/modals/menubg.png';
import { plants } from '@files/plants';
import phoneIcon from '@imgs/common/nav-phone-icon.svg';
import mailIcon from '@imgs/common/nav-mail-icon.svg';
import { useAppContext } from '../../appContext';
import NavLink from '../NavLink';
import siteMapLinkIcon from '@imgs/common/site-map-link-icon.svg';

const Menu = () => {
	const { closeAllModals, setIsFactoryModalOpen, setIsSiteMapModalOpen } =
		useAppContext();
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
						Выберите предприятие: Бекабадцемент
					</div>
					<NavLink
						text="Карта сайта"
						icon={siteMapLinkIcon}
						customClass="sitemap-open"
						action={() => {
							closeAllModals();
							setIsSiteMapModalOpen(true);
						}}
					/>
					<NavLink
						link="tel:+10 (998 7091) 2 24 48"
						text="+10 (998 7091) 2 24 48"
						icon={phoneIcon}
						customClass="phone-link"
					/>
					<NavLink
						link="mailto:sales@unicementgroup.com"
						text="sales@unicementgroup.com"
						icon={mailIcon}
						customClass="mail-link"
					/>
				</div>
				<div className="links-wrapper p-left p-right">
					<div className="links">
						<div className="link-group">
							<a href="/">Главная</a>
							<a href="/projects">Мы помогли построить</a>
							<a href="/career">Карьера</a>
						</div>
						<div className="link-group">
							<a href="/about">О компании</a>
							<a href="/news">Новости</a>
							<a href="/development">Устойчивое развитие</a>
						</div>
						<div className="link-group">
							<a href="/production">Проиозводство</a>
							<a href="/special-offer">Бонусы</a>
							<a href="/contact">Контакты</a>
						</div>
					</div>
				</div>
				<div className="contact-details p-left p-right">
					{plants.map((p, i) => {
						return (
							<div className="contact" key={`plant-contact-${i}`}>
								<div className="title">{p.title}</div>
								<div className="phone">
									<img src={phoneIcon} alt="phone" />
									<span>{p.phone}</span>
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
