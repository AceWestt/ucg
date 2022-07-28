import React, { useState, useEffect } from 'react';
import CommonHero from '../components/CommonHero';
import Btn from '../components/Btn';
import BottomForm from '@components/BottomForm';
import { callGet, useAppContext } from '../appContext';
import VacancyModal from '../components/modals/VacancyModal';

const Career = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/career');
				setBackendData(maindata.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const [activeVacancy, setActiveVacancy] = useState({});
	const [isVacanyModalOpen, setIsVacanyModalOpen] = useState(false);

	useEffect(() => {}, []);

	return (
		<div className="page career">
			<CommonHero
				img={backendData.block_cover}
				title={backendData[`block_name_${lang}`]}
			/>
			<section
				className="section content section-column p-left p-right"
				id="career-openings"
			>
				{Array.isArray(backendData.careers) &&
					backendData.careers.length > 0 &&
					backendData.careers.map((o, i) => {
						return (
							<div className="opening-container" key={`opening-container-${i}`}>
								<div className="plant-title">{o[`title_${lang}`]}</div>
								{Array.isArray(o[`description_${lang}`]) &&
									o[`description_${lang}`].length > 0 && (
										<div className="contacts">
											<div className="label green-text">{o[`contact_${lang}`]}</div>
											<div className="list">
												{o[`description_${lang}`].map((d, di) => {
													return (
														<div
															className="item pre-wrap-text"
															key={`contact-detail-of-${i}-${di}`}
														>
															<p className="text-600">{d.heading}</p>
															<p>{d.text}</p>
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
													{v.cover && <img src={v.cover} className="icon" alt="icon" />}
													<h4>{v[`title_${lang}`]}</h4>
													<div className="btn-container">
														<Btn
															type="subtle"
															text={
																lang === 'ru'
																	? 'Подробнее'
																	: lang === 'en'
																	? 'More'
																	: 'Batafsil'
															}
															disabled={!Array.isArray(v.jobs) || v.jobs.length < 1}
															action={() => {
																setActiveVacancy(v);
																setIsVacanyModalOpen(true);
															}}
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
													{lang === 'ru'
														? 'В настоящее время доступных вакансий на предприятии не имеется'
														: lang === 'en'
														? 'No vacancies for division'
														: `Vakolatlar yo'q`}
												</h4>
												<Btn
													disabled
													text={
														lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'More' : 'Batafsil'
													}
													type="subtle"
												/>
											</div>
											{o.cover && (
												<div className="side img">
													<img src={o.cover} alt="no data" />
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
			<div
				id="career-modal-container"
				className={isVacanyModalOpen ? '' : 'hidden'}
			>
				<VacancyModal
					vacany={activeVacancy}
					close={() => {
						setIsVacanyModalOpen(false);
						setActiveVacancy({});
					}}
				/>
			</div>
		</div>
	);
};

export default Career;
