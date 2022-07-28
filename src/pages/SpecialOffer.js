import React, { useState, useEffect } from 'react';
import CommonHero from '../components/CommonHero';
// import heroImg from '@imgs/specialOffer/hero.jpg';
import TextBlock from '../components/TextBlock';
// import { plants as plantsRaw } from '../files/plants';
import { callGet, useAppContext } from '../appContext';

const SpecialOffer = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/special_offers');
				setBackendData(maindata.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="page special-offer">
			<CommonHero
				title={backendData[`block_name_${lang}`]}
				img={backendData.block_cover}
			/>
			<section className="section content p-left" id="special-offer-details">
				{Array.isArray(backendData.special_offers) &&
					backendData.special_offers.length > 0 && (
						<div className="container">
							{backendData.special_offers.map((p, i) => {
								return (
									<div className="wrapper" key={`offer-wrapper-${i}`}>
										<h2 className="pre-wrap-text">{p[`title_${lang}`]}</h2>
										{p[`description_${lang}`]?.map((s, si) => {
											return (
												<TextBlock
													key={`text-of-${i}-${si}`}
													title={s.heading}
													text={s.text}
													parseHtml
												/>
											);
										})}
									</div>
								);
							})}
						</div>
					)}
			</section>
		</div>
	);
};

export default SpecialOffer;
