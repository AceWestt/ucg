import React from 'react';
import CommonHero from '../components/CommonHero';
import heroImg from '@imgs/career/hero.jpg';
import { openings } from '../files/openings';
import parse from 'html-react-parser';
import Btn from '../components/Btn';
import BottomForm from '@components/BottomForm';

const Career = () => {
	return (
		<div className="page career">
			<CommonHero img={heroImg} title="Карьера" />
			<section
				className="section content section-column p-left p-right"
				id="career-openings"
			>
				{openings.map((o, i) => {
					return (
						<div className="opening-container" key={`opening-container-${i}`}>
							<div className="plant-title">{o.plant}</div>
							{Array.isArray(o.contactDetails) && o.contactDetails.length > 0 && (
								<div className="contacts">
									<div className="label green-text">Контакты HR отдела:</div>
									<div className="list">
										{o.contactDetails.map((d, di) => {
											return (
												<div
													className="item pre-wrap-text"
													key={`contact-detail-of-${i}-${di}`}
												>
													{parse(d)}
												</div>
											);
										})}
									</div>
								</div>
							)}
							{Array.isArray(o.vacancies) && o.vacancies.length > 0 ? (
								<div className="vacancies">
									{o.vacancies.map((v, vi) => {
										return (
											<div className="item" key={`vacancy-of-${i}-${vi}`}>
												{v.icn && <img src={v.icn} className="icon" alt="icon" />}
												<h4>{v.title}</h4>
												<div className="btn-container">
													<Btn
														type="subtle"
														text="Подробнее"
														disabled={!Array.isArray(v.openings) || v.openings.length < 1}
													/>
												</div>
											</div>
										);
									})}
								</div>
							) : (
								<div className="no-vacancy-wrapper">
									<div className="wrapper">
										<div className="side info">
											<h4>
												В настоящее время доступных вакансий на предприятии не имеется
											</h4>
											<Btn disabled text="Подробнее" type="subtle" />
										</div>
										{o.nodataImg && (
											<div className="side img">
												<img src={o.nodataImg} alt="no data" />
											</div>
										)}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</section>
			<BottomForm />
		</div>
	);
};

export default Career;
