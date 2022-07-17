import React, { useEffect, useRef, useState } from 'react';
import galleryControlBtn from '@imgs/common/galleryControlbtn.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

const Gallery = (props) => {
	const { customClass = '', slides = [] } = props;
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	useEffect(() => {
		console.log(thumbsSwiper);
	}, [thumbsSwiper]);

	if (!Array.isArray(slides) || slides.length < 1) {
		return '';
	}
	return (
		<div className={`gallery-component ${customClass}`}>
			<div className="control prev">
				<div className="btn">
					<img src={galleryControlBtn} alt="prev img" />
				</div>
			</div>
			<div className="gallery-container">
				<div className="main-container">
					<Swiper
						style={{
							'--swiper-navigation-color': '#fff',
							'--swiper-pagination-color': '#fff',
						}}
						loop={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="main"
					>
						{slides.map((s, i) => {
							return (
								<SwiperSlide className="item-wrapper" key={`gallery-item-${i}`}>
									<img src={s} alt="img" />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="thumbs-container">
					<Swiper
						onSwiper={setThumbsSwiper}
						loop={true}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="thumbs"
					>
						{slides.map((s, i) => {
							return (
								<SwiperSlide className="item-wrapper" key={`gallery-thumb-${i}`}>
									<img src={s} alt="img" />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
			<div className="control next">
				<div className="btn">
					<img src={galleryControlBtn} alt="prev img" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
