import React from 'react';
import closeBtn from '@imgs/common/modalCloseBtn.svg';
import { plants } from '../../files/plants';
import Btn from '@components/Btn';
import { useAppContext } from '../../appContext';

const Factorires = () => {
	const { setIsFactoryModalOpen } = useAppContext();
	return (
		<div className="section factories-modal section-column" id="factories-modal">
			<div className="header">
				<div className="title">Выбрать предприятие</div>
				<div
					className="close-modal-btn"
					onClick={() => setIsFactoryModalOpen(false)}
				>
					<img src={closeBtn} alt="close-btn" />
				</div>
			</div>
			<div className="container">
				{plants.map((p, i) => {
					return (
						<div className="item" key={`plants-modal-${i}`}>
							<img src={p.homeImg} alt="img" className="bg" />
							<div className="info">
								<div className="title">{p.title}</div>
								{p.fields && <Btn link={{ href: `/production/${i}` }} text="Выбрать" />}
								<div className="address">{p.address}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Factorires;
