import React from 'react';
import Btn from '../components/Btn';
import { useParams } from 'react-router-dom';
import { plants } from '../files/plants';
import { products } from '../files/products';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';
import ProductsGallery from '../components/ProductsGallery';

const ProductionDetailed = () => {
	const { id } = useParams();
	const data = plants[id];
	const productsFiltered = products.filter((f) => f.plants.includes(+id));
	return (
		<div className="page production-detailed">
			<section className="section go-back p-left">
				<Btn type="subtle" text="Вернуться к списку заводов" />
			</section>
			<section className="section content p-left">
				<div className="container">
					<h2>{data.title}</h2>
					<img className="hero-img" src={data.homeImg} alt={data.title} />
					{Array.isArray(data.fields) &&
						data.fields.length > 0 &&
						data.fields.map((f, index) => {
							if (f.type === 'text-block') {
								return (
									<TextBlock key={`text-block-${index}`} title={f.title} text={f.text} />
								);
							}

							if (f.type === 'product-block' && productsFiltered.length > 0) {
								return (
									<div className="products-section" key={`production-section-${index}`}>
										<div className="products-wrapper">
											<ProductsGallery products={productsFiltered} />
										</div>
									</div>
								);
							}
							return '';
						})}
					{Array.isArray(data.development) && data.development.length > 0 && (
						<>
							<h2>Устойчивое развитие</h2>
							{data.development.map((d, i) => {
								return (
									<TextBlock
										key={`development-field-${i}`}
										title={d.title}
										text={d.text}
									/>
								);
							})}
						</>
					)}
					{Array.isArray(data.gallery) && data.gallery.length > 0 && (
						<>
							<div className="section-title gallery-section-title">Галерея:</div>
							<div className="gallery-wrapper">
								<Gallery slides={data.gallery} />
							</div>
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProductionDetailed;
