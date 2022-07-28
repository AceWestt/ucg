import React, { useEffect, useState } from 'react';
import bg from '@imgs/common/bottomFormBg.jpg';
import Btn from '@components/Btn';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getLangString } from '../utils/tools';
import { useAppContext } from '../appContext';

const BottomForm = ({ customClass = '' }) => {
	const { lang } = useAppContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [successMessage, setSuccessMessage] = useState('');
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
		<section className={`section bottom-form ${customClass} section-column`}>
			<img src={bg} alt="bg" className="bg" />
			<div className="container">
				<div className="side text">
					<div className="title">
						{
							(getLangString(lang),
							'Появились вопросы? Напишите нам',
							'Have questions? Write to us',
							'Savollar bormi? Bizga yozing')
						}
					</div>
					<div className="desc">
						{
							(getLangString(lang),
							'Наши специалисты свяжутся с вами в ближайшее время',
							'Our experts will contact you soon',
							'Bizning mutaxassisimiz tez orada aloqaga chiqadi')
						}
					</div>
				</div>
				<div className="side form">
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
										'Write your name',
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
							<label>Сообщение*</label>
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
				</div>
			</div>
		</section>
	);
};

export default BottomForm;
