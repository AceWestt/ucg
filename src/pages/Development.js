import React, { useEffect, useRef, useState } from 'react';
import CommonHero from '../components/CommonHero';
import heroImg from '@imgs/development/hero.jpg';
import openBtnIcn from '@imgs/development/buttonOpen.svg';
import closeBtnIcn from '@imgs/development/buttonClose.svg';
import { plants as rawPlants } from '../files/plants';
import TextBlock from '../components/TextBlock';

const Development = () => {
	const [active, setActive] = useState(-1);

	const handleToggle = (index) => {
		if (active === index) {
			setActive(-1);
		} else {
			setActive(index);
		}
	};
	const plants = rawPlants.filter(
		(f) => Array.isArray(f.development) && f.development.length > 0
	);
	return (
		<div className="page development">
			<CommonHero img={heroImg} title="Устойчивое развитие" />
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
					{plants.map((p, i) => {
						return (
							<div
								className={`development-wrapper ${i === active ? 'active' : ''}`}
								key={`development-wrapper-of-${i}`}
							>
								<div className="wrapper-header">
									<h2>{p.title}</h2>
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
		</div>
	);
};

export default Development;

const WrapperBody = ({ p, i, active }) => {
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
				{p.development.map((d, di) => {
					return (
						<TextBlock key={`text-of-${i}-${di}`} title={d.title} text={d.text} />
					);
				})}
			</div>
		</div>
	);
};
