import React from 'react';
import svg from '@imgs/about/structure.svg';
import svgm from '@imgs/about/structurem.svg';

const Structure = ({ id = '' }) => {
	return (
		<section className="section structure section-column p-left p-right" id={id}>
			<div className="section-title">Структура холдинга:</div>
			<div className="structure-wrap">
				<img src={svg} alt="структура" />
				<img src={svgm} className="mobile-only" alt="структура" />
			</div>
		</section>
	);
};

export default Structure;
