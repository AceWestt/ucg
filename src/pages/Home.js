import React, { useState, useEffect } from 'react';
import Hero from './home/Hero';
import Btn from '../components/Btn';
import bgPattern from '../imgs/home/bg-pattern.svg';
import factorymodel from '../imgs/home/ucg-factory-model.png';
import logo from '../imgs/common/logo.svg';
import { plants } from '@files/plants';
import { products } from '../files/products';
import { news } from '../files/news';
import ProductsGallery from '../components/ProductsGallery';
import Partners from '../components/commonSections/Partners';
import NewsFlow from '../components/NewsFlow';
import vid from '../imgs/home/video-factory.mp4';
import { useAppContext } from '../appContext';
// import ProjectsHome from './home/ProjectsHome';

const Home = () => {
	const { mainBackendData: backendData, lang } = useAppContext();

	return (
		<div className="page home">
			<Hero data={backendData} />
			<div className="mission-section">
				<img className="bg-pattern" src={bgPattern} alt="bg" />
				<div className="left p-left">
					<img
						className="logo"
						alt={backendData.main_logo}
						src={backendData.main_logo}
					/>
					<p>{backendData[`main_description_${lang}`]}</p>
				</div>
				<div className="right">
					<img src={factorymodel} alt="factorymodel" />
					<video autoPlay muted loop>
						<source src={backendData.main_video} type="video/mp4" />
						{/* <source src="movie.ogg" type="video/ogg" /> */}
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<section className="section plants section-column">
				<div className="section-title">
					{backendData[`factories_label_${lang}`]}
				</div>
				{backendData.factories && backendData.factories.length > 0 && (
					<div className="list">
						{backendData.factories.map((p, i) => {
							return (
								<div className="item" key={`home-plant-${i}`}>
									<div className="details">
										<div className="title">{p[`title_${lang}`]}</div>
										<div className="common-details">
											<div className="row">
												<div className="row-title">
													{lang === 'ru' && 'Адрес:'}
													{lang === 'en' && 'Address:'}
													{lang === 'uz' && 'Manzil:'}
												</div>
												<p>{p[`address_${lang}`]}</p>
											</div>
											<div className="row">
												<div className="row-title">
													{lang === 'ru' && 'Номер телефона:'}
													{lang === 'en' && 'Phone Number:'}
													{lang === 'uz' && 'Telefon raqami:'}
												</div>
												<p>{p.telephone}</p>
											</div>
											<div className="row">
												<div className="row-title">
													{lang === 'ru' && 'Мощность:'}
													{lang === 'en' && 'Power:'}
													{lang === 'uz' && 'Ishlab chiqarish kuchi:'}
												</div>
												<p>{p[`power_${lang}`]}</p>
											</div>
											<div className="row">
												<div className="row-title">
													{lang === 'ru' && 'Руководитель:'}
													{lang === 'en' && 'Head:'}
													{lang === 'ru' && 'Rahbar:'}
												</div>
												<p>{p[`boss_${lang}`]}</p>
											</div>
										</div>
										{p[`description_${lang}`] && p[`description_${lang}`].length > 0 && (
											<Btn
												text={
													lang === 'ru'
														? 'Подробнее о заводе'
														: lang === 'en'
														? 'Details'
														: lang === 'uz'
														? 'Batafsil'
														: ''
												}
												link={{ href: `/production/${p.id}`, router: true }}
											/>
										)}
									</div>
									<div className="img">
										<img src={p.cover} alt={p[`title_${lang}`]} />
									</div>
								</div>
							);
						})}
					</div>
				)}
			</section>
			{Array.isArray(backendData.productions) &&
				backendData.productions.length > 0 && (
					<section className="section products">
						<ProductsGallery products={backendData.productions} />
					</section>
				)}

			{/* <ProjectsHome /> */}
			<Partners
				data={backendData.partners}
				label={backendData[`partners_label_${lang}`]}
			/>
			<NewsFlow
				news={backendData.news}
				title={lang === 'ru' ? 'Новости' : lang === 'en' ? 'News' : 'Yangiliklar'}
			/>
		</div>
	);
};

export default Home;
