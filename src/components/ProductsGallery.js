import React, { useEffect, useRef } from 'react';
import Swiper, { Navigation } from 'swiper';
import controlBtnIcn from '@imgs/common/whitePrevBtnIcn.svg';
import 'swiper/css';
import { useAppContext } from '../appContext';
const ProductsGallery = ({ customClass = '', products = [] }) => {
	const productsSwiperRef = useRef(null);
	const productsElementSwiperRef = useRef(null);

	const { lang } = useAppContext();

	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);

	useEffect(() => {
		if (Array.isArray(products) && products.length > 0) {
			productsSwiperRef.current = new Swiper(productsElementSwiperRef.current, {
				slidesPerView: 'auto',
				spaceBetween: -1,
				modules: [Navigation],
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
								if (p[`factories_${lang}`]) {
									return p[`factories_${lang}`];
								}
								return '';
							};
							const plantsString = plantText();
							return (
								<div className="item-wrapper swiper-slide" key={`product-slide-${i}`}>
									<div className="item">
										<div className="side text">
											<div className="info-container">
												<div className="info">
													<div className="label text-mini">
														{lang === 'ru' && 'Марка:'}
														{lang === 'en' && 'Title:'}
														{lang === 'uz' && 'Markasi:'}
													</div>
													<h2>{p[`title_${lang}`]}</h2>
												</div>

												{p[`description_${lang}`] && (
													<div className="info">
														<div className="label text-mini">
															{lang === 'ru' && 'Область применения:'}
															{lang === 'en' && 'Field of Usage:'}
															{lang === 'uz' && 'Qo`llash maydoni:'}
														</div>
														<p>{p[`description_${lang}`]}</p>
													</div>
												)}

												<div className="info">
													{plantsString && (
														<div className="label text-mini">
															{lang === 'ru' && 'Заводы:'}
															{lang === 'en' && 'Factories:'}
															{lang === 'uz' && 'Zavodlar:'}
														</div>
													)}
													<p>{plantsString}</p>
												</div>
											</div>
										</div>
										<div className="side img">
											<img src={p.image} alt="img" />
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
