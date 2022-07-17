import React, { useEffect, useRef } from 'react';
import Btn from '../../components/Btn';
import Swiper from 'swiper';
import 'swiper/css';
import officer1 from '../../imgs/about/offficers-1.png';
import officer2 from '../../imgs/about/offficers-2.png';
import officer3 from '../../imgs/about/offficers-3.png';
import chevronLeft from '../../imgs/common/chevron-left.svg';
const Officers = () => {
	const swiperRef = useRef(null);
	const swiperElementRef = useRef(null);
	useEffect(() => {
		swiperRef.current = new Swiper(swiperElementRef.current, {
			slidesPerView: 3,
			spaceBetween: 0,
		});
	}, []);

	const onPrev = () => {
		swiperRef.current.slidePrev();
	};

	const onNext = () => {
		swiperRef.current.slideNext();
	};

	return (
		<section className="section officers p-left p-right">
			<div className="section-title">Руководители:</div>
			<div className="officers-wrap">
				<div className="control officers-prev-button" onClick={onPrev}>
					<img src={chevronLeft} alt="prev" />
				</div>
				<div className="officers-container">
					<div className="officers swiper" ref={swiperElementRef}>
						<div className="officers-wrapper swiper-wrapper">
							{officers.map((o) => {
								return (
									<div className="officer swiper-slide" key={`officer-${o.id}`}>
										<div className="item">
											<img src={o.img} alt={o.name} />
											<div className="name">{o.name}</div>
											<div className="title">{o.title}</div>
											<Btn type="subtle" text="Подробнее" />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="control officers-next-button" onClick={onNext}>
					<img src={chevronLeft} alt="next" />
				</div>
			</div>
		</section>
	);
};

export default Officers;

const officers = [
	{
		id: 1,
		name: 'Коробкин Василий Викторович',
		title: 'Генеральный директор АО “Бекабадцемент”',
		img: officer1,
	},
	{
		id: 2,
		name: 'Коробкин Василий Викторович',
		title: 'Генеральный директор АО “Бекабадцемент”',
		img: officer2,
	},
	{
		id: 3,
		name: 'Коробкин Василий Викторович',
		title: 'Генеральный директор АО “Бекабадцемент”',
		img: officer3,
	},
];
