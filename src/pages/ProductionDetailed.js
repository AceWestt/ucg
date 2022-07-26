import React, { useState, useEffect } from 'react';
import Btn from '../components/Btn';
import { useParams } from 'react-router-dom';
// import { plants } from '../files/plants';
// import { products } from '../files/products';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';
import ProductsGallery from '../components/ProductsGallery';
import { useAppContext } from '../appContext';
import { getLangString } from '../utils/tools';
import { callGet } from '../appContext';

const ProductionDetailed = () => {
	const [factories, setFactories] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/production');
				if (maindata.status === 200) {
					setFactories(maindata.data.factories);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const { lang } = useAppContext();
	const { id } = useParams();
	const factory = factories?.filter((f) => +f.id === +id)[0] || undefined;

	if (
		!factory ||
		!factory[`description_${lang}`] ||
		factory[`description_${lang}`].length < 1
	) {
		return '';
	}
	return (
		<div className="page production-detailed">
			<section className="section go-back p-left">
				<Btn
					type="subtle"
					text={
						lang === 'ru'
							? 'Вернуться к списку заводов'
							: lang === 'en'
							? 'Back to Factories'
							: 'Zavodlarga qaytish'
					}
					link={{ href: '/production', router: true }}
				/>
			</section>
			<section className="section content p-left">
				<div className="container">
					<h2>{factory[`title_${lang}`]}</h2>
					<img
						className="hero-img"
						src={factory.cover}
						alt={factory[`title_${lang}`]}
					/>
					{factory[`description_${lang}`].map((f, index) => {
						return (
							<TextBlock key={`text-block-${index}`} title={f.heading} text={f.text} />
						);
					})}

					{Array.isArray(factory.productions) && factory.productions.length > 0 && (
						<div className="products-section">
							<div className="products-wrapper">
								<ProductsGallery products={factory.productions} />
							</div>
						</div>
					)}
					{Array.isArray(factory[`growth_${lang}`]) &&
						factory[`growth_${lang}`].length > 0 && (
							<>
								<h2>
									{getLangString(
										lang,
										'Устойчивое развитие',
										'Sustainable development',
										'Barqaror rivojlanish'
									)}
								</h2>
								{factory[`growth_${lang}`].map((d, i) => {
									return (
										<TextBlock
											key={`development-field-${i}`}
											title={d.heading}
											text={d.text}
										/>
									);
								})}
							</>
						)}
					{Array.isArray(factory.gallery) && factory.gallery.length > 0 && (
						<>
							<div className="section-title gallery-section-title">
								{getLangString(lang, 'Галерея:', 'Gallery:', 'Galereya')}
							</div>
							<div className="gallery-wrapper">
								<Gallery slides={factory.gallery} />
							</div>
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProductionDetailed;
