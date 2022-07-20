import React from 'react';
import { useAppContext } from '../../appContext';
import directorModalPattern from '@imgs/common/directorModalPattern.svg';
import closeBtn from '@imgs/common/modalCloseBtn.svg';

const DirectorModal = () => {
	const { activeDirector, setActiveDirector, setIsOfficerModalOpen } =
		useAppContext();
	if (!activeDirector) {
		return '';
	}
	return (
		<section className="section section-director-modal" id="director-modal">
			<div className="container">
				<div className="header">
					<img src={directorModalPattern} className="pattern" alt="pattern" />
					<div className="side info">
						{activeDirector.img && (
							<img className="avatar" src={activeDirector.img} alt="director" />
						)}
						<div className="text">
							<div className="name">{activeDirector.name}</div>
							<div className="job-title">{activeDirector.title}</div>
							<div className="address">
								<label>Адрес:</label>
								<div className="value">{activeDirector.address}</div>
							</div>
							<div className="phone">
								<label>Телефон приемной:</label>
								<div className="value">{activeDirector.phone}</div>
							</div>
						</div>
					</div>
					<div className="side close">
						<div
							className="close-btn"
							onClick={() => {
								setActiveDirector(null);
								setIsOfficerModalOpen(false);
							}}
						>
							<img src={closeBtn} alt="close" />
						</div>
					</div>
				</div>
				<div className="body">
					<div className="body-wrap">
						{Array.isArray(activeDirector.education) &&
							activeDirector.education.length > 0 && (
								<div className="side">
									<div className="title">Образование:</div>
									<div className="list">
										{activeDirector.education.map((item, index) => {
											return (
												<div className="item" key={`officer-eductation-${index}`}>
													<span className="year">{item.year}</span>
													<span className="place">{item.place}</span>
												</div>
											);
										})}
									</div>
								</div>
							)}
						{Array.isArray(activeDirector.experience) &&
							activeDirector.experience.length > 0 && (
								<div className="side">
									<div className="title">Опыт работы:</div>
									<div className="list">
										{activeDirector.experience.map((item, index) => {
											return (
												<div className="item" key={`officer-experience-${index}`}>
													<span className="year">{item.year}</span>
													<span className="place">{item.place}</span>
												</div>
											);
										})}
									</div>
								</div>
							)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DirectorModal;
