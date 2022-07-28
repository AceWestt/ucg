import React, { useState, useEffect } from 'react';
import modalCloseIcn from '@imgs/common/modalCloseBtn.svg';
import Btn from '@components/Btn';
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../appContext';
import axios from 'axios';
import { getLangString } from '../../utils/tools';

const VacancyModal = ({ vacany = undefined, close = () => {} }) => {
	const [isloading, setIsloading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [successMessage, setSuccessMessage] = useState('');
	const onSubmit = async (data) => {
		if (isloading) {
			return;
		}
		setIsloading(true);
		let formData = new FormData();
		formData.append('first_name', data.first_name);
		formData.append('last_name', data.last_name);
		formData.append('phone', data.phone);
		formData.append('application_file', data.file[0]);
		formData.append('comment', data.comment);

		try {
			const resp = await axios.post(
				`https://api.unicementgroup.com/api/job/${chosenJob.id}/apply`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
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
	const { lang } = useAppContext();
	const [chosenJob, setChosenJob] = useState(undefined);
	const [isParent, setIsParent] = useState(true);

	useEffect(() => {
		if (successMessage) {
			const timer = setTimeout(() => {
				setSuccessMessage('');
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [successMessage]);
	if (!vacany || !vacany.jobs || vacany.jobs.length < 1) {
		return '';
	}
	return (
		<div className="form-modal" id="form-modal-vacancy">
			<div className="wrapper parent">
				{isParent ? (
					<div className="header">
						<h4>{vacany[`title_${lang}`]}</h4>
						<div className="text-mini">
							{lang === 'ru'
								? 'Ниже указаны доступные вакансии по данному разделу'
								: lang === 'en'
								? 'Openings by the division are listed below'
								: "Bo'lim bo'yicha vakolatlar ro'yxati"}
						</div>
					</div>
				) : (
					<div className="header">
						<h4>
							{lang === 'ru'
								? 'Отправить резюме'
								: lang === 'en'
								? 'Send Resume'
								: "Resyume jo'natish"}
						</h4>
						<div className="text-mini">
							{lang === 'ru'
								? '(Не забудьте указать имя, фамилию, номер телефона и ваш файл-резюме. Данные поля обязательны для корректной отправки)'
								: lang === 'en'
								? 'Please fill all the fields'
								: "Barcha ma'lumotlarni kiriting"}
						</div>
					</div>
				)}

				{isParent && (
					<div className="body">
						{vacany.jobs.map((j, i) => {
							return (
								<div className="item" key={`job-${i}`}>
									<span>{j[`title_${lang}`]}</span>
									<div className="btn-container">
										<Btn
											type="subtle"
											text={
												lang === 'ru'
													? 'Отправить резюме'
													: lang === 'en'
													? 'Send Resume'
													: "Resyume jo'natish"
											}
											action={() => {
												setChosenJob(j);
												setIsParent(false);
											}}
										/>
									</div>
								</div>
							);
						})}
					</div>
				)}

				{!isParent && (
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
								{...register('first_name', {
									required: true,
								})}
							/>
							{errors.name && (
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
								{getLangString(lang, 'Фамилия*', 'Last Name*', 'Familiya*')}
							</label>
							<input
								type="text"
								placeholder={getLangString(
									lang,
									'Напишите вашу фамилию',
									'Write your last name',
									'Familiyangizni yozing*'
								)}
								{...register('last_name', {
									required: true,
								})}
							/>
							{errors.name && (
								<p className="text-mini" style={{ color: 'red' }}>
									{getLangString(
										lang,
										'Напишите вашу фамилию',
										'Write your last name',
										'Familiyangizni yozing*'
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
							<label>
								{getLangString(lang, 'Комментарий', 'Comment', 'Fikringiz')}
							</label>
							<input
								type="text"
								placeholder={getLangString(
									lang,
									'Напишите ваш комментарий',
									'Write your comment',
									'Fikringizni yozing'
								)}
								{...register('comment')}
							/>
						</div>
						<div className="form-control">
							<label>
								{getLangString(
									lang,
									'Загрузите ваш файл*',
									'Upload your file*',
									'Faylni yuklang*'
								)}
							</label>
							<div className="file-input">
								<Btn
									type="subtle"
									text={getLangString(lang, 'Загрузить', 'Upload', 'Yuklash')}
								/>
								<input
									type="file"
									placeholder=""
									{...register('file', { required: true })}
								/>
							</div>

							{errors.file?.type === 'required' && (
								<p style={{ color: 'red' }} className="text-mini">
									{getLangString(
										lang,
										'Загрузите ваш файл*',
										'Upload your file*',
										'Faylni yuklang*'
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
										: getLangString(lang, 'Отрпавить', 'Send', "Jo'natish")
								}
								disabled={isloading}
							/>
							{successMessage && (
								<div className="text-usual green-text text-600">{successMessage}</div>
							)}
						</div>
					</form>
				)}

				<div className="close-btn" onClick={close}>
					<img src={modalCloseIcn} alt="close" />
				</div>
			</div>
		</div>
	);
};

export default VacancyModal;
