import React from 'react';
import closeBtn from '@imgs/common/modalCloseBtn.svg';
// import { plants } from '../../files/plants';
import Btn from '@components/Btn';
import { useAppContext } from '../../appContext';
import { getLangString } from '../../utils/tools';

const Factorires = () => {
	const { setIsFactoryModalOpen, lang, factories, closeAllModals } =
		useAppContext();
	if (!Array.isArray(factories) || factories.length < 1) return '';
	return (
		<div className="section factories-modal section-column" id="factories-modal">
			<div className="header">
				<div className="title">
					{getLangString(
						lang,
						'Выбрать предприятие',
						'Choose Factory',
						'Zavodni tanlash'
					)}
				</div>
				<div
					className="close-modal-btn"
					onClick={() => setIsFactoryModalOpen(false)}
				>
					<img src={closeBtn} alt="close-btn" />
				</div>
			</div>
			<div className="container">
				{factories.map((p, i) => {
					return (
						<div className="item" key={`plants-modal-${i}`}>
							<img src={p.cover} alt="img" className="bg" />
							<div className="info">
								<div className="title">{p[`title_${lang}`]}</div>
								{Array.isArray(p[`description_${lang}`]) &&
									p[`description_${lang}`].length > 0 && (
										<Btn
											link={{ href: `/production/${p.id}`, router: true }}
											text={getLangString(lang, 'Выбрать', 'Choose', 'Tanlash')}
											action={() => closeAllModals()}
										/>
									)}
								<div className="address">{p[`address_${lang}`]}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Factorires;
