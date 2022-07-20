import React from 'react';

const CommonHero = ({ title = 'UCG', img = '', customClass = '', id = '' }) => {
	return (
		<div className={`common-hero p-left ${customClass}`} id={id}>
			{img && <img src={img} alt="hero" />}
			<h1>{title}</h1>
		</div>
	);
};

export default CommonHero;
