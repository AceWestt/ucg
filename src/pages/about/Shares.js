import React from 'react';
// import { plants } from '@files/plants';

const Shares = ({ id = '', plantsId = '', data = {} }) => {
	const {
		title = '',
		leftText = '',
		rightText = '',
		stocks = '',
		funds = '',
		lang = 'ru',
		plants = [],
	} = data;
	return (
		<section className="section shares section-column p-left" id={id}>
			<div className="section-title">{title}</div>
			<div className="shares-section-container">
				<div className="header">
					<div className="title">{leftText}</div>
					<p>{rightText}</p>
				</div>
				<div className="numbers">
					<div className="row">
						<div className="column active">
							<div className="top">
								<span className="value">{stocks}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Количество акций'
										: lang === 'en'
										? 'stocks'
										: 'Aksiyalar'}
								</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">{stocks}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Количество акций'
										: lang === 'en'
										? 'stocks'
										: 'Aksiyalar'}
								</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">{stocks}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Количество акций'
										: lang === 'en'
										? 'stocks'
										: 'Aksiyalar'}
								</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="top">
								<span className="value">{funds}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Уставной капитал'
										: lang === 'en'
										? 'Authorized capital'
										: 'Ustav kapitali'}
								</span>
							</div>
						</div>
						<div className="column">
							<div className="top">
								<span className="value">{funds}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Уставной капитал'
										: lang === 'en'
										? 'Authorized capital'
										: 'Ustav kapitali'}
								</span>
							</div>
						</div>
						<div className="column active">
							<div className="top">
								<span className="value">{funds}</span>
								<span className="label">{lang === 'ru' ? 'млн' : 'mln'}</span>
							</div>
							<div className="bottom">
								<span>
									{lang === 'ru'
										? 'Уставной капитал'
										: lang === 'en'
										? 'Authorized capital'
										: 'Ustav kapitali'}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="plants" id={plantsId}>
					<div className="section-title">
						{lang === 'ru'
							? 'Наши заводы:'
							: lang === 'en'
							? 'Our Factories'
							: 'Bizning zavodlarimiz'}
					</div>
					<div className="list">
						{plants.map((p, i) => {
							return (
								<div className="item" key={`plant-${i}`}>
									<div className="title">{p[`title_${lang}`]}</div>
									<div className="contact-details">
										<div className="detail">
											<div className="label">
												{lang === 'ru' ? 'Адрес:' : lang === 'en' ? 'Address:' : 'Manzil:'}
											</div>
											<p>{p[`address_${lang}`]}</p>
										</div>
										<div className="detail">
											<div className="label">
												{lang === 'ru'
													? 'Номер телефона:'
													: lang === 'en'
													? 'Phone Number:'
													: 'Telefon raqami:'}
											</div>
											<p>{p.telephone}</p>
										</div>
										<div className="detail">
											<div className="label">
												{lang === 'ru'
													? 'Мощность:'
													: lang === 'en'
													? 'Power:'
													: 'Ishlab chiqarish kuchi:'}
											</div>
											<p>{p[`power_${lang}`]}</p>
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
