import React from 'react';
import logo from '../imgs/common/logo-white.svg';
import facebookIcn from '@imgs/common/facebookicn.svg';
import twitterIcn from '@imgs/common/twittericn.svg';
import footerBg from '@imgs/common/footerbg.svg';
import { plants } from '../files/plants';
const Footer = () => {
	return (
		<footer className="section section-footer section-column p-left p-right">
			<img src={footerBg} alt="img" className="footer-bg-img" />
			<div className="footer-header">
				<a className="logo" href="/">
					<img src={logo} alt="logo" />
				</a>
				<div className="social-links">
					<a
						href="https://www.facebook.com/unitedcementgroup/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={facebookIcn} alt="fb" />
					</a>
					<a
						href="https://twitter.com/cement_group?s=21&t=UPU-YlqBmOQl5tUPednszg"
						target="_blank"
						rel="noreferrer"
					>
						<img src={twitterIcn} alt="fb" />
					</a>
				</div>
			</div>
			<div className="links">
				<div className="link-group">
					<a className="text-menu" href="/about">
						О компании
					</a>
					<a className="text-mini" href="/about#about-company">
						Описание о компании
					</a>
					<a className="text-mini" href="/about#about-mission">
						Миссия, Стратегия, Ценности
					</a>
					<a className="text-mini" href="/about#about-directors">
						Руководители
					</a>
					<a className="text-mini" href="/about#about-structure">
						Структура холдинга
					</a>
					<a className="text-mini" href="/about#about-for-investors">
						Инвесторам
					</a>
					<a className="text-mini" href="/about#about-shares">
						Количество акций и уставной капитал
					</a>
					<a className="text-mini" href="/about#about-factories">
						Заводы
					</a>
					<a className="text-mini" href="/about#about-shares">
						Количество акций и уставной капитал
					</a>
					<a className="text-mini" href="/about#about-partners">
						Партнёры
					</a>
				</div>
				<div className="link-group">
					<a className="text-menu" href="/production">
						Производство
					</a>
					<a className="text-mini" href="/production#production-factory-map">
						Карта заводов
					</a>
					{plants.map((p, i) => {
						return (
							<a
								className="text-mini"
								key={`plant-link-footer-${i}`}
								href={`/production/${i}`}
							>
								{p.title}
							</a>
						);
					})}
				</div>
				<div className="link-group">
					<a className="text-menu" href="/projects">
						Проекты
					</a>
					<a className="text-mini" href="/projects">
						Все проекты
					</a>
				</div>
				<div className="link-group">
					<a className="text-menu" href="/news">
						Новости
					</a>
					<a className="text-mini" href="/news#news-main">
						Главные новости
					</a>
					<a className="text-mini" href="/news#news-all">
						Все новости
					</a>
				</div>
				<div className="link-group">
					<a className="text-menu" href="/special-offer">
						Бонусы
					</a>
					<a className="text-mini" href="/special-offer#special-offer-details">
						Подробнее о специальном предложении
					</a>
				</div>
				<div className="link-group">
					<a className="text-menu" href="/career">
						Карьера
					</a>
					<a className="text-mini" href="/career#career-openings">
						Доступные вакансии
					</a>
				</div>
				<div className="link-group">
					<a className="text-menu" href="/contact">
						Контакты
					</a>
					<a className="text-mini" href="/contact#contact-main-office">
						Контактные данные главного офиса
					</a>
					<a className="text-mini" href="/contact#contact-factories">
						Контактные данные заводов
					</a>
					<a className="text-mini" href="/contact#contact-hr">
						Контактные данные hr отдела
					</a>
				</div>
			</div>
			<div className="copy text-mini">
				© UnitedCementGroup. All Rights Reserved{' '}
			</div>
		</footer>
	);
};

export default Footer;
