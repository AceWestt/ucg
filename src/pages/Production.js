import React, {useEffect, useState} from 'react';
// import heroImg from '@imgs/production/hero.jpg';
import CommonHero from '../components/CommonHero';
import ProductionMain from './production/ProductionMain';
import patternImg from '@imgs/production/pattern.png';
import sectionImg from '@imgs/production/section-2.jpg';
import { callGet, useAppContext } from '../appContext';

const Production = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/production');
				if (maindata.status === 200) {
					console.log(maindata)
					setBackendData(maindata.data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="page production">
			<CommonHero title={backendData[`block_name_${lang}`]} img={backendData.block_cover} />
			<ProductionMain id="production-factory-map" data={backendData} />
			<section className="section text-section-one p-right">
				<div className="side pattern-holder">
					<img src={backendData.pattern} alt="pattern" />
				</div>
				<div className="side text-holder">
					<h3>{backendData[`right_${lang}`]}</h3>
					<p>
						{backendData[`right_description_${lang}`]}
					</p>
				</div>
			</section>
			<section className="section text-section-two section-column p-left">
				<div className="section-title">{backendData[`power_name_${lang}`]}</div>
				<div className="section-container">
					<div className="side text-holder">
						<h2>В 2021 году объём произведенного цемента составил 1 500 млн тонн</h2>
						{/* <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
						</p> */}
					</div>
					<div className="side img-text-holder">
						<img src={sectionImg} alt="section" />
						<div className="text-wrapper">
							<h2>Своя лаборатория для проверки качества цемента</h2>
							{/* <p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur.
							</p> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Production;
