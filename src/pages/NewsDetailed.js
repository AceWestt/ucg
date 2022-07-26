import React, { useState, useEffect } from 'react';
import Btn from '@components/Btn';
import { useParams } from 'react-router-dom';
// import { news } from '@files/news';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';
import { getLangString } from '@utils/tools';
// import parse from 'html-react-parser';
import { callGet, useAppContext } from '../appContext';

const NewsDetailed = () => {
	const { id } = useParams();
	const [newsItem, setNewsItem] = useState(undefined);
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet(`api/news/${id}`);
				if (maindata.status === 200) {
					setNewsItem(maindata.data.data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [id]);

	const formattedDate = (date) => {
		const d = new Date(date);
		return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
	};

	if (!newsItem || !newsItem[`description_${lang}`]) {
		return '';
	}
	return (
		<div className="page news-detailed">
			<section className="section go-back p-left">
				<Btn
					type="subtle"
					text={getLangString(
						lang,
						'Вернуться к списку новостей',
						'Back to news',
						'Yangiliklarga qaytish'
					)}
					link={{ href: '/news', router: true }}
				/>
			</section>
			<section className="section content p-left">
				<div className="container">
					<div className="date-container">
						<span>{formattedDate(newsItem.published_at)}</span>
					</div>
					<img
						className="hero-img"
						src={newsItem.cover}
						alt={newsItem[`title_${lang}`]}
					/>
					<TextBlock
						title={newsItem[`title_${lang}`]}
						text={newsItem[`description_${lang}`]}
						parseHtml
						nowrap
					/>
					{Array.isArray(newsItem.gallery) && newsItem.gallery.length > 0 && (
						<div className="gallery-wrapper">
							<div className="section-title">
								{getLangString(
									lang,
									'Галерея новости:',
									'News gallery',
									'Yangilik galereyasi'
								)}
							</div>
							<Gallery slides={newsItem.gallery} />
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default NewsDetailed;
