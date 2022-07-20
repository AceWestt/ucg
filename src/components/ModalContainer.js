import React, { useEffect, useState } from 'react';
import { useAppContext } from '../appContext';
import Menu from '@components/modals/Menu';
import FormModal from '@components/modals/FormModal';
import Factorires from './modals/Factorires';
import SiteMap from './modals/SiteMap';
import DirectorModal from './modals/DirectorModal';

const ModalContainer = () => {
	const [isModalContainerOpen, setIsModalContainerOpen] = useState(false);

	const {
		isMenuOpen,
		isFormModalOpen,
		isFactoryModalOpen,
		isSiteMapModalOpen,
		isOfficerModalOpen,
	} = useAppContext();

	useEffect(() => {
		if (
			isMenuOpen ||
			isFormModalOpen ||
			isFactoryModalOpen ||
			isSiteMapModalOpen ||
			isOfficerModalOpen
		) {
			setIsModalContainerOpen(true);
		} else {
			setIsModalContainerOpen(false);
		}
	}, [
		isMenuOpen,
		isFormModalOpen,
		isFactoryModalOpen,
		isSiteMapModalOpen,
		isOfficerModalOpen,
	]);
	return (
		<div id="modal-container" className={isModalContainerOpen ? '' : 'hidden'}>
			{isMenuOpen && <Menu />}
			{isFormModalOpen && <FormModal />}
			{isFactoryModalOpen && <Factorires />}
			{isSiteMapModalOpen && <SiteMap />}
			{isOfficerModalOpen && <DirectorModal />}
		</div>
	);
};

export default ModalContainer;
