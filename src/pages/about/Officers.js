import React, { useEffect, useRef } from 'react';
import Btn from '../../components/Btn';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';
import { officers } from '../../files/officers';
import chevronLeft from '../../imgs/common/chevron-left.svg';
import { useAppContext } from '../../appContext';
const Officers = ({ id = '', data = [], label = '' }) => {
	const swiperRef = useRef(null);
	const swiperElementRef = useRef(null);
	const { setActiveDirector, setIsOfficerModalOpen } = useAppContext();
	const { lang } = useAppContext();
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
			<div className="section-title">{label}</div>
			<div className="officers-wrap">
				<div className="control officers-prev-button" onClick={onPrev}>
					<img src={chevronLeft} alt="prev" />
				</div>
				<div className="officers-container">
					<div className="officers swiper" ref={swiperElementRef}>
						<div className="officers-wrapper swiper-wrapper">
							{data.map((o) => {
								return (
									<div className="officer swiper-slide" key={`officer-${o.id}`}>
										<div className="item">
											<img src={o.avatar} alt={o[`name_${lang}`]} />
											<div className="name">{o[`name_${lang}`]}</div>
											<div className="job-title">{o[`position_${lang}`]}</div>
											{/* {(o.education || o.experience) && (
												<Btn
													type="subtle"
													text="Подробнее"
													action={() => {
														setActiveDirector(o);
														setIsOfficerModalOpen(true);
													}}
												/>
											)} */}
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
