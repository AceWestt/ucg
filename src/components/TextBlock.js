import React from 'react';
import parse from 'html-react-parser';

const TextBlock = ({
	customClass = '',
	title = '',
	text = '',
	parseHtml = false,
	nowrap = false,
}) => {
	return (
		<div className={`text-block ${customClass ? customClass : ''}`}>
			<div className="side title">
				<h3>{title}</h3>
			</div>
			<div className="side text">
				{nowrap ? parse(text) : <p>{parseHtml ? parse(text) : text}</p>}
			</div>
		</div>
	);
};

export default TextBlock;
