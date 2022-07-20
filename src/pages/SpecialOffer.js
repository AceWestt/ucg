import React from 'react';
import CommonHero from '../components/CommonHero';
import heroImg from '@imgs/specialOffer/hero.jpg';
import TextBlock from '../components/TextBlock';
import { plants as plantsRaw } from '../files/plants';

const SpecialOffer = () => {
	const plants = plantsRaw.filter(
		(f) => Array.isArray(f.specialOffer) && f.specialOffer.length > 0
	);
	return (
		<div className="page special-offer">
			<CommonHero title="Специальное предложение" img={heroImg} />
			<section className="section content p-left" id="special-offer-details">
				{Array.isArray(plants) && plants.length > 0 && (
					<div className="container">
						{plants.map((p, i) => {
							return (
								<div className="wrapper" key={`offer-wrapper-${i}`}>
									<h2 className="pre-wrap-text">{p.title}</h2>
									{p.specialOffer.map((s, si) => {
										return (
											<TextBlock
												key={`text-of-${i}-${si}`}
												title={s.title}
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
