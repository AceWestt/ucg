import React, { useState, useEffect } from 'react';
import modalCloseIcn from '@imgs/common/modalCloseBtn.svg';
import Btn from '@components/Btn';
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../appContext';
import axios from 'axios';
import { getLangString } from '../../utils/tools';

const FormModal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [successMessage, setSuccessMessage] = useState('');

	const { setIsFormModalOpen, lang } = useAppContext();

	const [isloading, setIsloading] = useState(false);

	const onSubmit = async (data) => {
		if (isloading) {
			return;
		}
		setIsloading(true);
		const payload = {
			kind: 'common',
			name: data.name,
			phone: data.phone,
			email: data.email,
			message: data.message,
		};

		try {
			const resp = await axios.post(
				`https://api.unicementgroup.com/api/contact-form`,
				payload,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			setSuccessMessage(
				getLangString(
					lang,
					'Сообщение успешно отправлено!',
					'Message sent!',
					'Xabar yuborildi!'
				)
			);
			setIsloading(false);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		if (successMessage) {
			const timer = setTimeout(() => {
				setSuccessMessage('');
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [successMessage]);
	return (
		<div className="form-modal" id="form-modal-contact">
			<div className="wrapper">
				<div className="header">
					<h4>
						{getLangString(
							lang,
							'Хотите отправить нам сообщение?',
							'Want to send a message to us?',
							'Bizga xabar yuborishni istaysizmi?'
						)}
					</h4>
					<div className="text-mini">
						{getLangString(
							lang,
							'(Не забудьте указать имя, номер телефона и ваше сообщение. Данные поля обязательны для корректной отправки)',
							'Do not forget to enter your name, phone number, and your message. These fields are required for a correct connection'
						)}
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<label>{getLangString(lang, 'Имя*', 'First Name*', 'Ism*')}</label>
						<input
							type="text"
							placeholder={getLangString(
								lang,
								'Напишите ваше имя',
								'Write your name',
								'Ismingizni yozing*'
							)}
							{...register('name', { required: true })}
						/>
						{errors.name?.type === 'required' && (
							<p className="text-mini" style={{ color: 'red' }}>
								{getLangString(
									lang,
									'Напишите ваше имя',
									'Write your first name',
									'Ismingizni yozing*'
								)}
							</p>
						)}
					</div>
					<div className="form-control">
						<label>
							{getLangString(lang, 'Номер телефона*', 'Phone*', 'Telefon*')}
						</label>
						<input
							type="text"
							placeholder={getLangString(
								lang,
								'Напишите номер вашего телефона',
								'Write your phone number',
								'Telefon raqamingizni yozing'
							)}
							{...register('phone', { required: true })}
						/>
						{errors.phone?.type === 'required' && (
							<p style={{ color: 'red' }} className="text-mini">
								{getLangString(
									lang,
									'Напишите номер вашего телефона',
									'Write your phone number',
									'Telefon raqamingizni yozing'
								)}
							</p>
						)}
					</div>
					<div className="form-control">
						<label>E-mail</label>
						<input
							type="text"
							placeholder={getLangString(
								lang,
								'Напишите ваш e-mail адрес',
								'Write your email address',
								'E-mail manzilingizni yozing'
							)}
							{...register('email')}
						/>
					</div>
					<div className="form-control">
						<label>{getLangString(lang, 'Сообщение*', 'Message*', 'Xabar*')}</label>
						<input
							type="text"
							placeholder={getLangString(
								lang,
								'Напишите ваше сообщение...',
								'Write your message...',
								'Xabaringizni yozing...'
							)}
							{...register('message', { required: true })}
						/>
						{errors.message?.type === 'required' && (
							<p className="text-mini" style={{ color: 'red' }}>
								{getLangString(
									lang,
									'Напишите ваше сообщение...',
									'Write your message...',
									'Xabaringizni yozing...'
								)}
							</p>
						)}
					</div>
					<div className="form-control btn-container">
						<Btn
							type="primary"
							submitButton
							text={
								isloading
									? getLangString(
											lang,
											'Отправляется...',
											'Sending...',
											'Yuborilmoqda...'
									  )
									: getLangString(lang, 'Отправить', 'Send', 'Yuborish')
							}
							disabled={isloading}
						/>
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
