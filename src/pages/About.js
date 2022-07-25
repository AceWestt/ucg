import React, { useState, useEffect } from 'react';
import BottomForm from '../components/BottomForm';
import CommonHero from '../components/CommonHero';
import Partners from '../components/commonSections/Partners';
// import hero from '../imgs/about/hero.png';
// import section2img from '../imgs/about/quality.png';
// import section3img from '../imgs/about/section3.jpg';
// import logowhite from '../imgs/common/logo-white.svg';
import ForInvestors from './about/ForInvestors';
import Officers from './about/Officers';
import Shares from './about/Shares';
// import Structure from './about/Structure';
import { callGet, useAppContext } from '../appContext';

const About = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/about');
				if (maindata.status === 200) {
					setBackendData(maindata.data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="page about">
			<CommonHero
				id="about-company"
				title={backendData[`block_name_${lang}`]}
				img={backendData.block_cover}
			/>
			<section className="p-left">
				<div className="section-2-card m-t-n">
					<div className="text-wrap">
						<h3>{backendData[`heading_${lang}`]}</h3>
						<p>{backendData[`heading_text_${lang}`]}</p>
					</div>
					<img src={backendData.heading_cover} alt="img" />
				</div>
			</section>
			<section>
				<div className="section-3-wrap" id="about-mission">
					<div className="img-wrap">
						<img src={backendData.logo_cover} alt="img" />
					</div>
					<div className="text-wrap p-left p-right">
						<img src={backendData.logo} alt="logo" />
						{Array.isArray(backendData[`mission_text_${lang}`]) &&
							backendData[`mission_text_${lang}`].length > 0 && (
								<div className="details">
									{backendData[`mission_text_${lang}`].map((m, i) => {
										return (
											<div className="details-detail" key={`m-text-${i}`}>
												<div className="title">{m.heading}</div>
												<p>{m.text}</p>
											</div>
										);
									})}
								</div>
							)}
					</div>
				</div>
			</section>
			<Officers
				id="about-directors"
				data={backendData.bosses}
				label={backendData[`block_boss_name_${lang}`]}
			/>
			{/* <Structure id="about-structure" /> */}
			<ForInvestors
				id="about-for-investors"
				label={backendData[`investors_label_${lang}`]}
				finances={backendData[`finances_${lang}`]}
				docs={backendData[`docs_${lang}`]}
			/>
			<Shares
				id="about-shares"
				plantsId="about-factories"
				title={backendData[`stocks_label_${lang}`]}
				data={{
					leftText: backendData[`stocks_left_${lang}`],
					rightText: backendData[`stocks_right_${lang}`],
					stocks: backendData.stocks_text,
					funds: backendData.fund_text,
					lang: lang,
					plants: backendData.factories,
				}}
			/>
			<Partners
				id="about-partners"
				data={backendData.partners}
				label={
					lang === 'ru' ? 'Партнеры:' : lang === 'en' ? 'Partners:' : 'Partnyorlar:'
				}
			/>
			<BottomForm />
		</div>
	);
};

export default About;
