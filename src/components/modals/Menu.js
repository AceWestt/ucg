import React from 'react';
import Nav from '@components/Nav.js';
import bg from '@imgs/common/modals/menubg.png';
import { plants } from '@files/plants';
import phoneIcon from '@imgs/common/nav-phone-icon.svg';

const Menu = () => {
	return (
		<div id="site-menu">
			<img className="bg" src={bg} alt="menu-bg" />
			<section className="section menu-section section-column">
				<Nav />
				<div className="links-wrapper p-left p-right">
					<div className="links">
						<div className="link-group">
							<a href="/">Главная</a>
							<a href="/about">О компании</a>
							<a href="/production">Проиозводство</a>
						</div>
						<div className="link-group">
							<a href="/projects">Мы помогли построить</a>
							<a href="/news">Новости</a>
							<a href="/special-offer">Бонусы</a>
						</div>
						<div className="link-group">
							<a href="/career">Карьера</a>
							<a href="/development">Устойчивое развитие</a>
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
