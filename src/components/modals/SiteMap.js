import React from 'react';
import phoneIcn from '@imgs/common/phoneWhiteIcn.svg';
import mailIcn from '@imgs/common/mailWhiteIcn.svg';
import facebookIcn from '@imgs/common/facebookicn.svg';
import twitterIcn from '@imgs/common/twittericn.svg';
import sitemapIcn from '@imgs/common/siteMapWhiteIcn.svg';
import closeIcn from '@imgs/common/modalCloseBtnWhite.svg';
import logo from '@imgs/common/logo-white.svg';
import siteMapPattern from '@imgs/common/sitemapPattern.svg';
import { plants } from '../../files/plants';
import { useAppContext } from '../../appContext';

const SiteMap = () => {
	const { setIsSiteMapModalOpen } = useAppContext();
	return (
		<div
			className="section section-sitemap-modal section-column p-left p-right"
			id="site-map-modal"
		>
			<img className="pattern" src={siteMapPattern} alt="pattern" />
			<div className="header">
				<div className="section-label">
					<img src={sitemapIcn} alt="sitemap" />
					<span>Карта сайта</span>
				</div>
				<div className="close-btn" onClick={() => setIsSiteMapModalOpen(false)}>
					<img src={closeIcn} alt="close" />
				</div>
			</div>
			<div className="body">
				<div className="side logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="side links">
					<div className="column">
						<div className="link-group">
							<a className="text-menu" href="/">
								Главная
							</a>
							<a className="text-mini" href="/">
								Выбрать предприятие
							</a>
							<a className="text-mini" href="/about">
								О компании
							</a>
							<a className="text-mini" href="/production">
								Заводы
							</a>
							<a className="text-mini" href="/#home-products">
								Производимая продукция
							</a>
							<a className="text-mini" href="/projects">
								Проекты
							</a>
							<a className="text-mini" href="/#home-partners">
								Партнёры
							</a>
							<a className="text-mini" href="/news">
								Новости
							</a>
						</div>
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
					</div>
					<div className="column">
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
							<a className="text-menu" href="/development">
								Устойчивое развитие
							</a>
							<a className="text-mini" href="/development">
								ESG по всем заводам
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
				</div>
			</div>
			<div className="footer">
				<div className="contact-details">
					<a className="item" href="tel:(357) 22 262108">
						<img src={phoneIcn} alt="phone" />
						<span>(357) 22 262108</span>
					</a>
					<a className="item" href="mailto:sales@unicementgroup.com">
						<img src={mailIcn} alt="mail" />
						<span>sales@unicementgroup.com</span>
					</a>
				</div>
				<div className="social-links">
					<a href="https://www.facebook.com/unitedcementgroup/">
						<img src={facebookIcn} alt="fb" />
					</a>
					<a href="https://twitter.com/cement_group?s=21&t=UPU-YlqBmOQl5tUPednszg">
						<img src={twitterIcn} alt="twitter" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SiteMap;
