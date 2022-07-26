import React, { useEffect, useRef, useState } from 'react';
// import smallCardImg from '@imgs/production/smallcardplantimg.png';
// import { plants } from '@files/plants';
import mapImg from '@imgs/production/map.svg';
import openBtnIcn from '@imgs/production/openButton.svg';
import closeBtnIcn from '@imgs/production/closeButton.svg';
import plantIcn from '@imgs/production/plantIcn.svg';
import { useAppContext } from '../../appContext';

const responsive = true;

const ProductionMain = ({ id = '', data = {} }) => {
	const [activePlant, setActivePlant] = useState(0);
	const { lang } = useAppContext();

	return (
		<section className="section main section-column p-left p-right">
			<div className="small-card-container">
				<div className="small-card">
					<div className="side left">
						<div className="title">{data[`info_name_${lang}`]}</div>
						<div className="highlights">
							{data[`description_${lang}`]?.map((h, i) => {
								return (
									<div className="item" key={i}>
										<span className="line"></span>
										<span className="text">{h}</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className="side right">
						<img src={data.info_cover} alt="plant" />
						<div className="highlights mobile-only">
							{data[`description_${lang}`]?.map((h, i) => {
								return (
									<div className="item" key={i}>
										<span className="line"></span>
										<span className="text">{h}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="plants-container" id={id}>
				<div className="section-title">{data[`factory_name_${lang}`]}</div>
				<div className="map-container">
					<img src={mapImg} className="map-bg" alt="map" />
					<div className="thumb-container">
						<div className="thumb-img">
							{data.factories?.map((p, index) => {
								return (
									<img
										key={`plant-thumb-img-${index}`}
										src={p.cover}
										className={`img ${activePlant === index ? 'active' : ''}`}
										alt={p[`title_${lang}`]}
									/>
								);
							})}
						</div>

						<div className="thumb-title">
							{data.factories?.[activePlant]?.[`title_${lang}`]}
						</div>
					</div>
					<div className="points-container">
						{data.factories?.map((p, index) => {
							if (
								p.coords &&
								typeof p.coords_x === 'number' &&
								typeof p.coords_y === 'number'
							) {
								const x = responsive ? `${p.coords_x * 0.052}vw` : `${p.coords_x}px`;
								const y = responsive ? `${p.coords_y * 0.052}vw` : `${p.coords_y}px`;
								return (
									<div
										className={`point ${activePlant === index ? 'active' : ''}`}
										key={`point-of-${index}`}
										style={{ top: y, right: x }}
									>
										<span>{p[`title_${lang}`]}</span>
										<div className="icon-container" onClick={() => setActivePlant(index)}>
											<img src={plantIcn} alt={p[`title_${lang}`]} />
										</div>
									</div>
								);
							}
							return '';
						})}
					</div>
				</div>
				<div className="list">
					{data.factories?.map((item, index) => {
						return (
							<PlantListItem
								key={`plant-${index}`}
								item={item}
								active={activePlant === index}
								click={() => setActivePlant(index)}
								lang={lang}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProductionMain;

const PlantListItem = ({
	item,
	active = false,
	click = () => {},
	lang = 'ru',
}) => {
	const [height, setHeight] = useState(0);
	const containerRef = useRef(null);
	useEffect(() => {
		if (active) {
			const height = containerRef.current.offsetHeight;
			setHeight(height);
		} else {
			setHeight(0);
		}
	}, [active]);
	return (
		<div className={`item ${active ? 'active' : ''}`}>
			<div className="item-header">
				<img className="plant-icon" src={plantIcn} alt="plant icon" />
				<span>{item[`title_${lang}`]}</span>
				<img
					className="control-button"
					src={active ? closeBtnIcn : openBtnIcn}
					alt="control"
					onClick={click}
				/>
			</div>
			<div className="item-body" style={{ height: height }}>
				<div className="item-body-container" ref={containerRef}>
					<div className="detail">
						<span className="label">
							{lang === 'ru'
								? 'Год основания:'
								: lang === 'en'
								? 'Year of Foundation'
								: 'Tashkil topgan yili'}
						</span>
						<span className="value">
							{item[`foundation_year_${lang}`] ? item[`foundation_year_${lang}`] : '-'}
						</span>
					</div>
					<div className="detail">
						<span className="label">
							{lang === 'ru'
								? 'Мощность:'
								: lang === 'en'
								? 'Power:'
								: 'Ishlab chiqarish kuchi:'}
						</span>
						<span className="value">
							{item[`power_${lang}`] ? item[`power_${lang}`] : '-'}
						</span>
					</div>
					<div className="detail">
						<span className="label">
							{lang === 'ru' ? 'Руководитель:' : lang === 'en' ? 'Head:' : 'Rahbar:'}
						</span>
						<span className="value">
							{item[`boss_${lang}`] ? item[`boss_${lang}`] : '-'}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

// const highlights = [
// 	'Большая производственная мощность',
// 	'Высшее качество',
// 	'Высококвалифицированные сотрудники',
// 	'Современное оборудование',
// 	'Качественный цемент',
// 	'Огромный опыт',
// ];
