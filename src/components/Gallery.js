import React, { useEffect, useRef } from 'react';
import galleryControlBtn from '@imgs/common/galleryControlbtn.svg';
// import Swiper from 'swiper';
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Gallery = ({ customClass = '', slides = [] }) => {
	const gallerySwiperRef = useRef(null);
	const gallerySwiperElementRef = useRef(null);
	const thumbsSwiperRef = useRef(null);
	const thumbsSwiperElementRef = useRef(null);
	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);
	useEffect(() => {
		if (Array.isArray(slides) && slides.length > 0) {
			thumbsSwiperRef.current = new Swiper(thumbsSwiperElementRef.current, {
				loop: true,
				spaceBetween: 10,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesProgress: true,
			});
			gallerySwiperRef.current = new Swiper(gallerySwiperElementRef.current, {
				loop: true,
				spaceBetween: 10,
				navigation: {
					nextEl: nextButtonRef.current,
					prevEl: prevButtonRef.current,
				},
				thumbs: {
					swiper: thumbsSwiperRef.current,
				},
			});
		}
	}, [slides]);

	if (!Array.isArray(slides) || slides.length < 1) {
		return '';
	}
	return (
		<div className={`gallery-component ${customClass}`}>
			<div className="control prev">
				<div className="btn" ref={prevButtonRef}>
					<img src={galleryControlBtn} alt="prev img" />
				</div>
			</div>
			<div className="gallery-container">
				<div className="main-container">
					<div
						className="main swiper"
						ref={gallerySwiperElementRef}
						style={{
							'--swiper-navigation-color': '#fff',
							'--swiper-pagination-color': '#fff',
						}}
					>
						<div className="main-wrapper swiper-wrapper">
							{slides.map((s, i) => {
								return (
									<div className="item-wrapper swiper-slide" key={`gallery-item-${i}`}>
										<div className="item">
											<img src={s} alt="img" />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="thumbs-container">
					<div className="thumbs swiper" ref={thumbsSwiperElementRef}>
						<div className="thumbs-wrapper swiper-wrapper">
							{slides.map((s, i) => {
								return (
									<div className="item-wrapper swiper-slide" key={`gallery-item-${i}`}>
										<div className="item">
											<img src={s} alt="img" />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="control next">
				<div className="btn" ref={nextButtonRef}>
					<img src={galleryControlBtn} alt="prev img" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
