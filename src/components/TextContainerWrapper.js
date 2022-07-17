import React from 'react';

const TextContainerWrapper = ({
	data = [],
	wrapValue = false,
	vertical = false,
}) => {
	if (!Array.isArray(data) || data.length < 1) {
		return '';
	}
	return (
		<div className="text-container-wrapper">
			{data.map((row, rindex) => {
				return (
					<div className="text-row" key={`text-row-${rindex}`}>
						<div className="row-title">{row.title}</div>
						<div className={`row-content ${vertical ? 'vertical' : ''}`}>
							{Array.isArray(row.columns) &&
								row.columns.length > 0 &&
								row.columns.map((c, cindex) => {
									return (
										<div className="column" key={`text-row-${rindex}-column-${cindex}`}>
											<div className="label">{c.label}</div>
											<div className={`value ${wrapValue ? 'pre-wrap-text' : ''}`}>
												{c.value}
											</div>
										</div>
									);
								})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TextContainerWrapper;
