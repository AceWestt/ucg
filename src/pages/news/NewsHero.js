import React, { useEffect, useRef } from 'react';
// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import prevButtonImg from '@imgs/common/newsSliderControl.svg';
import 'swiper/css';
import 'swiper/css/pagination';

const NewsHero = ({ news, id = '' }) => {
	const heroSwiper = useRef(null);
	const heroSwiperContainer = useRef(null);
	const heroPaginationContainer = useRef(null);
	const prevButton = useRef(null);
	const nextButton = useRef(null);
	useEffect(() => {
		if (Array.isArray(news) && news.length > 0) {
			heroSwiper.current = new Swiper(heroSwiperContainer.current, {
				slidesPerView: 'auto',
				spaceBetween: 144,
				centeredSlides: true,
				modules: [Pagination, Navigation, Autoplay],
				// watchSlidesProgress: true,
				navigation: {
					nextEl: nextButton.current,
					prevEl: prevButton.current,
				},
				observer: true,
				pagination: {
					el: heroPaginationContainer.current,
					clickable: true,
					// type: 'bullets',
					// clickable: true,
					// dynamicBullets: true,
				},
				autoplay: {
					// reverseDirection: true,
					// disableOnInteraction: false,
				},
			});
		}
	}, [news]);
	console.log(news);
	return (
		<section className="section news-hero section-column" id={id}>
			<div className="news-hero-container">
				<div className="news-hero-list swiper" ref={heroSwiperContainer}>
					<div className="news-hero-list-wrapper swiper-wrapper">
						{news.map((n, index) => {
							return (
								<div
									className="news-hero-item-wrapper swiper-slide"
									key={`news-hero-${index}`}
								>
									<div className="news-hero-item">
										<img src={n.cover} alt={n.title} />
										<div className="text">
											<h3>
												{n.text.length > 140 ? `${n.text.substring(0, 140)}...` : n.text}
											</h3>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="control prev" ref={prevButton}>
					<img src={prevButtonImg} alt="control" />
				</div>
				<div className="control next" ref={nextButton}>
					<img src={prevButtonImg} alt="control" />
				</div>
			</div>
			<div
				className="news-hero-paginatino-container"
				ref={heroPaginationContainer}
			></div>
		</section>
	);
};

export default NewsHero;
