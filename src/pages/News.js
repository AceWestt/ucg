import React, { useState } from 'react';
// import { news as newsRaw } from '../files/news';
import NewsHero from './news/NewsHero';
import Btn from '../components/Btn';
import paginationPrevIcn from '@imgs/common/paginationPrevIcn.svg';
import paginationNextIcn from '@imgs/common/paginationNextIcn.svg';
import { useEffect } from 'react';
import { callGet, useAppContext } from '../appContext';
import parse from 'html-react-parser';
import { getLangString } from '@utils/tools';

// const length = newsRaw.length;
// const perPage = 6;
// const pages = Math.ceil(length / 6);
// const pageNums = Array.from({ length: pages }, (_, i) => i + 1);

const News = () => {
	const [backendData, setBackendData] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNums, setPageNums] = useState(1);
	const [news, setNews] = useState([]);
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet(`api/news?page=${currentPage}`);
				if (maindata.status === 200) {
					setBackendData(maindata.data);
					setNews(maindata.data.news.data);
					const perPage = maindata.data.news.per_page;
					const total = maindata.data.news.total;
					const pages = Math.ceil(total / perPage);
					setPageNums(Array.from({ length: pages }, (_, i) => i + 1));
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [currentPage]);

	const formattedDate = (date) => {
		const d = new Date(date);
		return `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}.${
			d.getMonth() + 1
		}.${d.getFullYear()}`;
	};

	if (!Array.isArray(news) || news.length < 1) {
		return '';
	}

	return (
		<div className="page news">
			<NewsHero news={backendData.carousel} id="news-main" />
			<section
				className="section news-container section-column p-left p-right"
				id="news-all"
			>
				<div className="section-title">{backendData[`block_name_${lang}`]}</div>
				<div className="news-list">
					{news.map((n, i) => {
						let text = n[`description_${lang}`];
						text = text.length > 74 ? `${text.substring(0, 74)}...` : text;
						let title = n[`title_${lang}`];
						title = title.length > 140 ? `${title.substring(0, 140)}...` : title;
						return (
							<div className="news-item" key={`news-item-${i}`}>
								<span className="date">{formattedDate(n.published_at)}</span>
								<h4>{parse(title)}</h4>
								<img src={n.cover} alt={title} />
								{parse(text)}
								<Btn
									type="subtle"
									text={getLangString(
										lang,
										'Читать подробнее',
										'Read more',
										"Batafsil o'qish"
									)}
									link={{ href: `/news/${n.slug}` }}
								/>
							</div>
						);
					})}
				</div>
				<div className="pagination-container">
					<div className="pagination">
						<div
							className="control"
							onClick={() => {
								if (currentPage > 1) {
									setCurrentPage(currentPage - 1);
								}
							}}
						>
							<span>{getLangString(lang, 'Предыдущая', 'Oldingi', 'Previous')}</span>
						</div>
						<div
							className={`control ${currentPage === 1 ? 'active' : ''}`}
							onClick={() => setCurrentPage(1)}
						>
							<img src={paginationPrevIcn} alt="first" />
						</div>
						<div className="page-nums">
							{pageNums.map((p) => (
								<div
									className={`control ${p === currentPage ? 'active' : ''}`}
									onClick={() => setCurrentPage(p)}
									key={`paginatino-${p}`}
								>
									<span>{p}</span>
								</div>
							))}
						</div>
						<div
							className={`control ${
								currentPage === (backendData.news?.last_page || 1) ? 'active' : ''
							}`}
							onClick={() => setCurrentPage(backendData.news?.last_page || 1)}
						>
							<img src={paginationNextIcn} alt="last" />
						</div>
						<div
							className="control"
							onClick={() => {
								if (currentPage < (backendData.news?.last_page || 1)) {
									setCurrentPage(currentPage + 1);
								}
							}}
						>
							<span>{getLangString(lang, 'Следующая', 'Next', 'Keyingi')}</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default News;
