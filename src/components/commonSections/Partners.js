import React from 'react';
import img1 from '@imgs/common/partners/1.png';
import img2 from '@imgs/common/partners/2.png';
import img3 from '@imgs/common/partners/3.png';
import img4 from '@imgs/common/partners/4.png';
import img5 from '@imgs/common/partners/5.png';
import img6 from '@imgs/common/partners/6.png';

const Partners = ({ id = '' }) => {
	return (
		<section className="section partners section-column" id={id}>
			<div className="section-title">Партнеры:</div>
			<div className="list-wrap">
				{[1, 2].map((i) => {
					return (
						<div className="list-part" key={i}>
							{array.map((item, index) => {
								return (
									<div className="item" key={`partner-${i}-${index}`}>
										<img src={item} alt="partner" />
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Partners;

const array = [img1, img2, img3, img4, img5, img6];
