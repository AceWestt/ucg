import React, { useRef, useEffect } from 'react';
import Swiper, { Navigation } from 'swiper';
import controlIcn from '@imgs/common/newsFlowControlIcn.svg';
import Btn from '@components/Btn';
import 'swiper/css';

const NewsFlow = ({ news, title = 'Новости' }) => {
	const newsSwiperRef = useRef(null);
	const newsElementSwiperRef = useRef(null);

	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);

	useEffect(() => {
		if (Array.isArray(news) && news.length > 0) {
			newsSwiperRef.current = new Swiper(newsElementSwiperRef.current, {
				slidesPerView: 'auto',
				spaceBetween: 50,
				modules: [Navigation],
				navigation: {
					nextEl: nextButtonRef.current,
					prevEl: prevButtonRef.current,
				},
			});
		}
	}, [news]);

	if (!Array.isArray(news) || news.length < 1) {
		return '';
	}
	return (
		<section className="section news-flow-component section-column p-left">
			<div className="header p-right">
				<div className="section-title">{title}</div>
				<div className="controls">
					<div className="control prev" ref={prevButtonRef}>
						<img src={controlIcn} alt="prev" />
					</div>
					<div className="control next" ref={nextButtonRef}>
						<img src={controlIcn} alt="prev" />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="list swiper" ref={newsElementSwiperRef}>
					<div className="list-wrapper swiper-wrapper">
						{news.map((n, i) => {
							return (
								<div className="item-wrapper swiper-slide" key={`news-flow-item-${i}`}>
									<div className="item">
										<span className="date">{`${n.date}.2022`}</span>
										<h4>
											{n.title.length > 140 ? `${n.title.substring(0, 140)}...` : n.title}
										</h4>
										<img src={n.cover} alt={n.title} />
										<p>{n.text.length > 74 ? `${n.text.substring(0, 74)}...` : n.text}</p>
										<Btn
											type="subtle"
											text="Читать подробнее"
											link={{ href: `/news/${i}` }}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="go-to-all-container">
				<Btn
					type="secondary"
					text="Смотреть все новости"
					link={{ href: '/news' }}
				/>
			</div>
		</section>
	);
};

export default NewsFlow;
