import React from 'react';
import heroImg from '@imgs/production/hero.jpg';
import CommonHero from '../components/CommonHero';
import ProductionMain from './production/ProductionMain';
import patternImg from '@imgs/production/pattern.png';
import sectionImg from '@imgs/production/section-2.jpg';

const Production = () => {
	return (
		<div className="page production">
			<CommonHero title="Производство" img={heroImg} />
			<ProductionMain id="production-factory-map" />
			<section className="section text-section-one p-right">
				<div className="side pattern-holder">
					<img src={patternImg} alt="pattern" />
				</div>
				<div className="side text-holder">
					<h3>Крупнейшая в Центральной Азии цементная компания</h3>
					<p>
						Мы вносим значительный вклад в дело развития экономики Казахстана и
						соседних стран, и понимаем, какая ответственность лежит на наших плечах.
						Успех и благосостояние сотен тысяч людей в странах, где присутствует наша
						компания, зависит от нашей четкой и слаженной работы. Без цемента не
						построишь новых домов, больниц и театров; без нашей продукции остановится
						строительство, и как следствие - рост экономики и благосостояния людей.
						Поэтому мы всегда в движении и развитии.
					</p>
				</div>
			</section>
			<section className="section text-section-two section-column p-left">
				<div className="section-title">Производственные мощности:</div>
				<div className="section-container">
					<div className="side text-holder">
						<h2>В 2021 году объём произведенного цемента составил 1 500 млн тонн</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<div className="side img-text-holder">
						<img src={sectionImg} alt="section" />
						<div className="text-wrapper">
							<h2>Своя лаборатория для проверки качества цемента</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Production;
