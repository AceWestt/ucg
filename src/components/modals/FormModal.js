import React, { useState } from 'react';
import modalCloseIcn from '@imgs/common/modalCloseBtn.svg';
import Btn from '@components/Btn';
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../appContext';

const FormModal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [successMessage, setSuccessMessage] = useState('');
	const onSubmit = (data) => {
		console.log(data);
		setSuccessMessage('Сообщение успешно отправлено!');
	};
	const { setIsFormModalOpen } = useAppContext();
	return (
		<div className="form-modal" id="form-modal-contact">
			<div className="wrapper">
				<div className="header">
					<h4>Хотите отправить нам сообщение?</h4>
					<div className="text-mini">
						(Не забудьте указать имя, номер телефона и ваше сообщение.
						<br />
						Данные поля обязательны для корректной отправки)
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<label>Имя*</label>
						<input
							type="text"
							placeholder="Напишите ваше имя"
							{...register('name', { required: true })}
						/>
						{errors.name?.type === 'required' && (
							<p className="text-mini" style={{ color: 'red' }}>
								Пожалуйста укажите имя
							</p>
						)}
					</div>
					<div className="form-control">
						<label>Номер телефона*</label>
						<input
							type="text"
							placeholder="Напишите номер вашего телефона"
							{...register('phone', { required: true })}
						/>
						{errors.phone?.type === 'required' && (
							<p style={{ color: 'red' }} className="text-mini">
								Пожалуйста введите правильный номер
							</p>
						)}
					</div>
					<div className="form-control">
						<label>E-mail</label>
						<input
							type="text"
							placeholder="Напишите ваш e-mail адрес"
							{...register('email')}
						/>
					</div>
					<div className="form-control">
						<label>Сообщение*</label>
						<input
							type="text"
							placeholder="Напишите ваше сообщение..."
							{...register('message', { required: true })}
						/>
						{errors.message?.type === 'required' && (
							<p className="text-mini" style={{ color: 'red' }}>
								Пожалуйста введите сообщение
							</p>
						)}
					</div>
					<div className="form-control btn-container">
						<Btn type="primary" submitButton text="Отправить" />
						{successMessage && (
							<div className="text-usual green-text text-600">{successMessage}</div>
						)}
					</div>
				</form>
				<div className="close-btn" onClick={() => setIsFormModalOpen(false)}>
					<img src={modalCloseIcn} alt="close" />
				</div>
			</div>
		</div>
	);
};

export default FormModal;
