import React from 'react';
import svg from '@imgs/about/structure.svg';

const Structure = () => {
	return (
		<section className="section structure section-column p-left p-right">
			<div className="section-title">Структура</div>
			<div className="structure-wrap">
				<img src={svg} alt="структура" />
			</div>
		</section>
	);
};

export default Structure;
