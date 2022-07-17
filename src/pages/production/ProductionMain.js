import React, { useEffect, useRef, useState } from 'react';
import smallCardImg from '@imgs/production/smallcardplantimg.png';
import { plants } from '@files/plants';
import mapImg from '@imgs/production/map.svg';
import openBtnIcn from '@imgs/production/openButton.svg';
import closeBtnIcn from '@imgs/production/closeButton.svg';
import plantIcn from '@imgs/production/plantIcn.svg';

const responsive = false;

const ProductionMain = () => {
	const [activePlant, setActivePlant] = useState(0);

	return (
		<section className="section main section-column p-left p-right">
			<div className="small-card-container">
				<div className="small-card">
					<div className="side left">
						<div className="title">United Cement Group</div>
						<div className="highlights">
							{highlights.map((h, i) => {
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
						<img src={smallCardImg} alt="plant" />
					</div>
				</div>
			</div>
			<div className="plants-container">
				<div className="section-title">Наши заводы:</div>
				<div className="map-container">
					<img src={mapImg} className="map-bg" alt="map" />
					<div className="thumb-container">
						<div className="thumb-img">
							{plants.map((p, index) => {
								return (
									<img
										key={`plant-thumb-img-${index}`}
										src={p.homeImg}
										className={`img ${activePlant === index ? 'active' : ''}`}
										alt={p.title}
									/>
								);
							})}
						</div>

						<div className="thumb-title">{plants[activePlant].title}</div>
					</div>
					<div className="points-container">
						{plants.map((p, index) => {
							if (
								p.coords &&
								typeof p.coords.x === 'number' &&
								typeof p.coords.y === 'number'
							) {
								const x = responsive ? `${p.coords.x * 0.52}vw` : `${p.coords.x}px`;
								const y = responsive ? `${p.coords.y * 0.52}vw` : `${p.coords.y}px`;
								return (
									<div
										className={`point ${activePlant === index ? 'active' : ''}`}
										key={`point-of-${index}`}
										style={{ top: y, right: x }}
									>
										<span>{p.title}</span>
										<div className="icon-container" onClick={() => setActivePlant(index)}>
											<img src={plantIcn} alt={p.title} />
										</div>
									</div>
								);
							}
							return '';
						})}
					</div>
				</div>
				<div className="list">
					{plants.map((item, index) => {
						return (
							<PlantListItem
								key={`plant-${index}`}
								item={item}
								active={activePlant === index}
								click={() => setActivePlant(index)}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProductionMain;

const PlantListItem = ({ item, active = false, click = () => {} }) => {
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
				<span>{item.title}</span>
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
						<span className="label">Год основания:</span>
						<span className="value">{item.foundedIn ? item.foundedIn : '-'}</span>
					</div>
					<div className="detail">
						<span className="label">Мощность:</span>
						<span className="value">{item.power ? item.power : '-'}</span>
					</div>
					<div className="detail">
						<span className="label">Руководитель:</span>
						<span className="value">{item.director ? item.director : '-'}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const highlights = [
	'Большая производственная мощность',
	'Высшее качество',
	'Высококвалифицированные сотрудники',
	'Современное оборудование',
	'Качественный цемент',
	'Огромный опыт',
];
