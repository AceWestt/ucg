import React from 'react';
import { plants } from '@files/plants';

const Shares = ({ id = '', plantsId = '' }) => {
	return (
		<section className="section shares section-column p-left" id={id}>
			<div className="section-title">Количество акций и уставной капитал:</div>
			<div className="shares-section-container">
				<div className="header">
					<div className="title">
						Мы вносим значительный вклад в дело развития экономики Казахстана и
						соседних стран, и понимаем, какая ответственность лежит на наших плечах.
					</div>
					<p>
						Успех и благосостояние сотен тысяч людей в странах, где присутствует наша
						компания, зависит от нашей четкой и слаженной работы. Без цемента не
						построишь новых домов, больниц и театров; без нашей продукции остановится
						строительство, и как следствие - рост экономики и благосостояния людей.
						Поэтому мы всегда в движении и развитии.
					</p>
				</div>
				<div className="numbers">
					<div className="row">
						<div className="column active">
							<div className="top">
								<span className="value">40</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Количество акций</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">40</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Количество акций</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">40</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Количество акций</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="top">
								<span className="value">36$</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Уставной капитал</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">36$</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Уставной капитал</span>
							</div>
						</div>
						<div className="column active">
							<div className="top">
								<span className="value">36$</span>
								<span className="label">млн</span>
							</div>
							<div className="bottom">
								<span>Уставной капитал</span>
							</div>
						</div>
					</div>
				</div>
				<div className="plants" id={plantsId}>
					<div className="section-title">Наши заводы:</div>
					<div className="list">
						{plants.map((p, i) => {
							return (
								<div className="item" key={`plant-${i}`}>
									<div className="title">{p.title}</div>
									<div className="contact-details">
										<div className="detail">
											<div className="label">Адрес:</div>
											<p>{p.address}</p>
										</div>
										<div className="detail">
											<div className="label">Номер телефона:</div>
											<p>{p.phone}</p>
										</div>
										<div className="detail">
											<div className="label">Мощность:</div>
											<p>{p.power}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shares;
