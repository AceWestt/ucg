import React from 'react';
import BtnRounded from '../../components/BtnRounded';
import hero1bg from '../../imgs/home/hero-bg-1.png';
// import logo from '../../imgs/common/logo.svg';
import Btn from '../../components/Btn';
// import facebookIcn from '../../imgs/common/facebookicn.svg';
// import twitterIcn from '../../imgs/common/twittericn.svg';
import { useAppContext } from '../../appContext';
import { getLangString } from '../../utils/tools';
// import { Link } from 'react-router-dom';
// import slidePrevIcn from '../../imgs/common/hero-slider-prev.svg';
// import slideNextIcn from '../../imgs/common/hero-slider-next.svg';

const Hero = ({ data = {} }) => {
	const { setIsFormModalOpen, lang } = useAppContext();
	return (
		<div className="hero-section">
			<div className="slide">
				<img className="bg-img" src={hero1bg} alt="hero1" />
				<div className="top-sec p-left">
					<div className="title">
						<h1>{data[`heading_${lang}`]}</h1>
					</div>
					<div className="logo-holder p-right">
						<img src={data.heading_logo} alt="logo" />
					</div>
				</div>
				<div className="bottom-sec">
					<div className="left p-left">
						{data.common?.socials && (
							<div className="social-links">
								{data.common.socials.map((s) => {
									return (
										<a key={`social-${s.id}`} href={s.url} className="social-links-link">
											<img src={s.icon} alt={s.name} />
										</a>
									);
								})}
							</div>
						)}

						{/* <div className="slider">
              <div className="slider-slide prev">
                <img src={slidePrevIcn} alt="prev" />
              </div>
              <div className="slider-slide next">
                <img src={slideNextIcn} alt="next" />
              </div>
            </div> */}
					</div>
					<div className="mid">
						<h3>{data[`heading_more_${lang}`]}</h3>
						<Btn
							type="secondary"
							text={getLangString(lang, 'Подробно', 'Details', 'Batafsil')}
							link={{ href: '/about', router: true }}
						/>
					</div>
					<div className="right p-right">
						<BtnRounded action={() => setIsFormModalOpen(true)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
