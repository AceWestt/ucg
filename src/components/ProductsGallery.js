import React, { useEffect, useRef } from 'react';
import { plants } from '@files/plants';
// import Swiper from 'swiper';
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
import Btn from '@components/Btn';
import controlBtnIcn from '@imgs/common/whitePrevBtnIcn.svg';
import 'swiper/css';
const ProductsGallery = ({ customClass = '', products = [] }) => {
	const productsSwiperRef = useRef(null);
	const productsElementSwiperRef = useRef(null);

	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);

	useEffect(() => {
		if (Array.isArray(products) && products.length > 0) {
			productsSwiperRef.current = new Swiper(productsElementSwiperRef.current, {
				slidesPerView: 'auto',
				spaceBetween: -1,
				navigation: {
					nextEl: nextButtonRef.current,
					prevEl: prevButtonRef.current,
				},
			});
		}
	}, [products]);

	if (!Array.isArray(products) || products.length < 1) {
		return '';
	}

	return (
		<div className={`products-gallery-component ${customClass}`}>
			<div className="products-gallery-component-container">
				<div className="list swiper" ref={productsElementSwiperRef}>
					<div className="list-wrapper swiper-wrapper">
						{products.map((p, i) => {
							const plantText = () => {
								return p.plants
									.map((p) => {
										return plants[p].title;
									})
									.join(', ');
							};
							const plantsString = plantText();
							return (
								<div className="item-wrapper swiper-slide" key={`product-slide-${i}`}>
									<div className="item">
										<div className="side text">
											<div className="info-container">
												<div className="info">
													<div className="label text-mini">Марка:</div>
													<h2>{p.mark}</h2>
												</div>
												<div className="info">
													<div className="label text-mini">Область применения:</div>
													<p>{p.usage}</p>
												</div>
												<div className="info">
													<div className="label text-mini">Заводы:</div>
													<p>{plantsString}</p>
												</div>
											</div>
											{Array.isArray(p.certs) && p.certs.length > 0 && (
												<div className="btn-container">
													<Btn text="Посмотреть сертификаты" />
												</div>
											)}
										</div>
										<div className="side img">
											<img src={p.img} alt={p.mark} />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="controls">
				<div className="control prev" ref={prevButtonRef}>
					<img src={controlBtnIcn} alt="prev" />
				</div>
				<div className="control next" ref={nextButtonRef}>
					<img src={controlBtnIcn} alt="prev" />
				</div>
			</div>
		</div>
	);
};

export default ProductsGallery;
