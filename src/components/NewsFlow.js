import React, { useRef, useEffect } from 'react';
import Swiper, { Navigation } from 'swiper';
import controlIcn from '@imgs/common/newsFlowControlIcn.svg';
import Btn from '@components/Btn';
import 'swiper/css';
import { useAppContext } from '../appContext';
import parse from 'html-react-parser';

const NewsFlow = ({ news, title = 'Новости' }) => {
	const newsSwiperRef = useRef(null);
	const newsElementSwiperRef = useRef(null);

	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);

	const { lang } = useAppContext();

	const formattedDate = (date) => {
		const d = new Date(date);
		return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
	};

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
							let text = n[`description_${lang}`];
							text = text.length > 74 ? text.substring(0, 74) + '...' : text;

							return (
								<div className="item-wrapper swiper-slide" key={`news-flow-item-${i}`}>
									<div className="item">
										<span className="date">{formattedDate(n.published_at)}</span>
										<h4>
											{n[`title_${lang}`].length > 140
												? `${n[`title_${lang}`].substring(0, 140)}...`
												: n[`title_${lang}`]}
										</h4>
										<img src={n.cover} alt={n.title} />

										{parse(text)}

										<Btn
											type="subtle"
											text="Читать подробнее"
											link={{ href: `/news/${i}`, router: true }}
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
					text={
						lang === 'ru'
							? 'Смотреть все новости'
							: lang === 'en'
							? 'See All News'
							: 'Barcha yangiliklar'
					}
					link={{ href: '/news', rotuer: true }}
				/>
			</div>
		</section>
	);
};

export default NewsFlow;
