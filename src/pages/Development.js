import React, { useEffect, useRef, useState } from 'react';
import CommonHero from '../components/CommonHero';
// import heroImg from '@imgs/development/hero.jpg';
import openBtnIcn from '@imgs/development/buttonOpen.svg';
import closeBtnIcn from '@imgs/development/buttonClose.svg';
// import { plants as rawPlants } from '../files/plants';
import TextBlock from '../components/TextBlock';
import BottomForm from '@components/BottomForm';
import { callGet, useAppContext } from '../appContext';

const Development = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/growth');
				console.log(maindata);
					setBackendData(maindata);
				// if (maindata.status === 200) {
					
				// }
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
	const [active, setActive] = useState(-1);

	const handleToggle = (index) => {
		if (active === index) {
			setActive(-1);
		} else {
			setActive(index);
		}
	};
	// const plants = rawPlants.filter(
	// 	(f) => Array.isArray(f.development) && f.development.length > 0
	// );
	return (
		<div className="page development">
			<CommonHero img={backendData.block_cover} title={backendData[`block_name_${lang}`]} />
			<section className="section content p-left">
				<div className="container">
					<div className="container-header">
						<div className="company-title">United Cement Group</div>
						<p>
							United Cement Group — крупнейший в Центральной Азии цементный холдинг,
							который стремится соответствовать самым высоким стандартам бизнеса.
							Холдинг UCG ориентирован на устойчивое развитие и уделяет большое
							внимание принципам ESG — экологии, социальным вопросам и корпоративному
							управлению (environmental, social and governance).
							<br /> Каждое предприятие UCG проводит регулярную работу по устойчивому
							развитию, с подробной информацией можно ознакомиться на страницах
							заводов.
						</p>
					</div>
					{Array.isArray(backendData.factories) && backendData.factories.length > 0 && backendData.factories.map((p, i) => {
						return (
							<div
								className={`development-wrapper ${i === active ? 'active' : ''}`}
								key={`development-wrapper-of-${i}`}
							>
								<div className="wrapper-header">
									<h2>{p[`title_${lang}`]}</h2>
									<div className="toggle-button" onClick={() => handleToggle(i)}>
										<img src={i === active ? closeBtnIcn : openBtnIcn} alt="toggle" />
									</div>
								</div>
								<WrapperBody p={p} i={i} active={active === i} />
							</div>
						);
					})}
				</div>
			</section>
			<BottomForm />
		</div>
	);
};

export default Development;

const WrapperBody = ({ p, i, active, lang }) => {
	const wrapperRef = useRef(null);
	const [height, setHeight] = useState(0);
	useEffect(() => {
		if (active) {
			const height = wrapperRef.current.offsetHeight;
			setHeight(height);
		} else {
			setHeight(0);
		}
	}, [active]);
	return (
		<div className="wrapper-body" style={{ height: height }}>
			<div className="wrapper" ref={wrapperRef}>
				{p?.[`growth_${lang}`]?.map((d, di) => {
					return (
						<TextBlock key={`text-of-${i}-${di}`} title={d.heading} text={d.text} parseHtml />
					);
				})}
			</div>
		</div>
	);
};
