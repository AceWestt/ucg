import React from 'react';
import BottomForm from '../components/BottomForm';
import CommonHero from '../components/CommonHero';
import Partners from '../components/commonSections/Partners';
import hero from '../imgs/about/hero.png';
import section2img from '../imgs/about/quality.png';
import section3img from '../imgs/about/section3.jpg';
import logowhite from '../imgs/common/logo-white.svg';
import ForInvestors from './about/ForInvestors';
import Officers from './about/Officers';
import Shares from './about/Shares';
import Structure from './about/Structure';

const About = () => {
	return (
		<div className="page about">
			<CommonHero id="about-company" title="О Компании" img={hero} />
			<section className="p-left">
				<div className="section-2-card m-t-n">
					<div className="text-wrap">
						<h3>Качество на века</h3>
						<p>
							United Cement Group (UCG) – крупнейший в Центральной Азии цементный
							холдинг, с общей производственной мощностью в 7,6 миллионов тонн. Холдинг
							специализируется на производстве общестроительных и специальных марок
							цемента самого высокого качества. UCG – ведущий производитель цемента,
							работающий на рынках всей Центральной Азии.
						</p>
					</div>
					<img src={section2img} alt="img" />
				</div>
			</section>
			<section>
				<div className="section-3-wrap" id="about-mission">
					<div className="img-wrap">
						<img src={section3img} alt="img" />
					</div>
					<div className="text-wrap p-left p-right">
						<img src={logowhite} alt="logo" />
						<div className="details">
							<div className="details-detail">
								<div className="title">Миссия</div>
								<p>
									Ближайшая цель компании — увеличение доли на рынках цемента Центральной
									Азии и России и усиление конкурентной позиции.
								</p>
							</div>
							<div className="details-detail">
								<div className="title">Цель</div>
								<p>
									Ближайшая цель компании — увеличение доли на рынках цемента Центральной
									Азии и России и усиление конкурентной позиции.
								</p>
							</div>
							<div className="details-detail">
								<div className="title">Стратегия</div>
								<p>
									Формирование бренда и ориентация на позицию ценового лидера путем
									консолидации цементных активов на смежных рынках Казахстана и
									Узбекистана усилит конкурентоспособность UCG. Для достижения
									поставленной цели компания застроит новые производственные мощности,
									совершенствует системы управления и обеспечит вертикальную интеграцию с
									источниками сырья. Кроме того, важной составляющей станет повышение
									производительности труда на основе высококвалифицированной и
									мотивированной команды профессионалов.
								</p>
							</div>
							<div className="details-detail">
								<div className="title">Ценности</div>
								<p>
									Наши ценности находят отражение в наших успехах, являются обязательными
									для нас и предлагаются всем, кто с нами сотрудничает. Мы не отступаем
									от наших ценностей ради получения прибыли. Мы воспринимаем их как
									связующее звено всех сфер нашей деятельности и ожидаем того же во
									взаимоотношениях с нашими деловыми партнерами.
								</p>
								<p>
									Мы вносим значительный вклад в дело развития экономики Казахстана и
									соседних стран, и понимаем, какая ответственность лежит на наших
									плечах. Успех и благосостояние сотен тысяч людей в странах, где
									присутствует наша компания, зависит от нашей четкой и слаженной работы.
									Без цемента не построишь новых домов, больниц и театров; без нашей
									продукции остановится строительство, и как следствие - рост экономики и
									благосостояния людей. Поэтому мы всегда в движении и развитии.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Officers id="about-directors" />
			<Structure id="about-structure" />
			<ForInvestors id="about-for-investors" />
			<Shares id="about-shares" plantsId="about-factories" />
			<Partners id="about-partners" />
			<BottomForm />
		</div>
	);
};

export default About;
