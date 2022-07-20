import React from 'react';
import Btn from '@components/Btn';
import { useParams } from 'react-router-dom';
import { news } from '@files/news';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';

const NewsDetailed = () => {
	const { id } = useParams();
	const newsItem = news[id];
	return (
		<div className="page news-detailed">
			<section className="section go-back p-left">
				<Btn
					type="subtle"
					text="Вернуться к списку новостей"
					link={{ href: '/news' }}
				/>
			</section>
			<section className="section content p-left">
				<div className="container">
					<div className="date-container">
						<span>{newsItem.date}.2022</span>
					</div>
					<img className="hero-img" src={newsItem.cover} alt={newsItem.title} />
					<TextBlock title={newsItem.title} text={newsItem.text} />
					{Array.isArray(newsItem.gallery) && newsItem.gallery.length > 0 && (
						<div className="gallery-wrapper">
							<div className="section-title">Галерея новости:</div>
							<Gallery slides={newsItem.gallery} />
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default NewsDetailed;
