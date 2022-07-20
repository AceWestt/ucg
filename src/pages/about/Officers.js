import React, { useEffect, useRef } from 'react';
import Btn from '../../components/Btn';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';
import { officers } from '../../files/officers';
import chevronLeft from '../../imgs/common/chevron-left.svg';
import { useAppContext } from '../../appContext';
const Officers = ({ id = '' }) => {
	const swiperRef = useRef(null);
	const swiperElementRef = useRef(null);
	const { setActiveDirector, setIsOfficerModalOpen } = useAppContext();
	useEffect(() => {
		swiperRef.current = new Swiper(swiperElementRef.current, {
			slidesPerView: 1,
			spaceBetween: 0,
			// loop: true,
			autoplay: true,
			modules: [Autoplay],
			breakpoints: {
				991: {
					slidesPerView: 3,
				},
			},
		});
	}, []);

	const onPrev = () => {
		swiperRef.current.slidePrev();
	};

	const onNext = () => {
		swiperRef.current.slideNext();
	};

	return (
		<section className="section officers p-left p-right" id={id}>
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
											<div className="job-title">{o.title}</div>
											{(o.education || o.experience) && (
												<Btn
													type="subtle"
													text="Подробнее"
													action={() => {
														setActiveDirector(o);
														setIsOfficerModalOpen(true);
													}}
												/>
											)}
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
