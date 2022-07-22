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
import axios from 'axios';
// import ProjectsHome from './home/ProjectsHome';

const Home = () => {
	// const [backendData, setBackendData] = useState({});
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await axios.get(`/api/main`);
	// 		if (data.status === 200) {
	// 			setBackendData(data);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);
	return (
		<div className="page home">
			<Hero />
			<div className="mission-section">
				<img className="bg-pattern" src={bgPattern} alt="bg" />
				<div className="left p-left">
					<img className="logo" alt="logo" src={logo} />
					<p>
						United Cement Group (UCG) – крупнейший в Центральной Азии цементный
						холдинг с общей производственной мощностью в 7,6 миллионов тонн. Холдинг
						специализируется на производстве общестроительных и специальных марок
						цемента самого высокого качества, ориентирован на устойчивое развитие и
						уделяет большое внимание принципам ESG — экологии, социальным вопросам и
						корпоративному управлению (environmental, social and governance).
						<br />
						<br />
						Наша цель — увеличение доли на рынках цемента Центральной Азии и России и
						усиление конкурентной позиции.
						<br />
						<br />В холдинг входит шесть заводов, которые располагаются на территориях
						Узбекистана и Кыргызстана:
					</p>
				</div>
				<div className="right">
					<img src={factorymodel} alt="factorymodel" />
					<video autoPlay muted loop>
						<source src={vid} type="video/mp4" />
						{/* <source src="movie.ogg" type="video/ogg" /> */}
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<section className="section plants section-column">
				<div className="section-title">Наши заводы:</div>
				<div className="list">
					{plants.map((p, i) => {
						return (
							<div className="item" key={`home-plant-${i}`}>
								<div className="details">
									<div className="title">{p.title}</div>
									<div className="common-details">
										<div className="row">
											<div className="row-title">Адрес:</div>
											<p>{p.address}</p>
										</div>
										<div className="row">
											<div className="row-title">Номер телефона:</div>
											<p>{p.phone}</p>
										</div>
										<div className="row">
											<div className="row-title">Мощность:</div>
											<p>{p.power}</p>
										</div>
										<div className="row">
											<div className="row-title">Руководитель:</div>
											<p>{p.director ? p.director : '-'}</p>
										</div>
									</div>
									{p.fields && (
										<Btn text="Подробнее о заводе" link={{ href: `/production/${i}` }} />
									)}
								</div>
								<div className="img">
									<img src={p.homeImg} alt={p.title} />
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="section products">
				<ProductsGallery products={products} />
			</section>
			{/* <ProjectsHome /> */}
			<Partners />
			<NewsFlow news={news} />
		</div>
	);
};

export default Home;
