import React, { useState } from 'react';
import { news as newsRaw } from '../files/news';
import NewsHero from './news/NewsHero';
import Btn from '../components/Btn';
import paginationPrevIcn from '@imgs/common/paginationPrevIcn.svg';
import paginationNextIcn from '@imgs/common/paginationNextIcn.svg';
import { useEffect } from 'react';

const length = newsRaw.length;
const perPage = 6;
const pages = Math.ceil(length / 6);
const pageNums = Array.from({ length: pages }, (_, i) => i + 1);

const News = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const [news, setNews] = useState(newsRaw.slice(0, perPage));
	useEffect(() => {
		const currentIndex = currentPage * perPage - perPage;

		const cut = newsRaw.slice(currentIndex, currentPage * perPage);
		console.log(cut);
		setNews(cut);
	}, [currentPage]);

	return (
		<div className="page news">
			<NewsHero news={news} id="news-main" />
			<section
				className="section news-container section-column p-left p-right"
				id="news-all"
			>
				<div className="section-title">Новости:</div>
				<div className="news-list">
					{news.map((n, i) => {
						return (
							<div className="news-item" key={`news-item-${i}`}>
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
							<span>Предыдущая</span>
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
								currentPage === pageNums.length - 1 ? 'active' : ''
							}`}
							onClick={() => setCurrentPage(pageNums.length)}
						>
							<img src={paginationNextIcn} alt="last" />
						</div>
						<div
							className="control"
							onClick={() => {
								if (currentPage < pageNums.length) {
									setCurrentPage(currentPage + 1);
								}
							}}
						>
							<span>Следующая</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default News;
