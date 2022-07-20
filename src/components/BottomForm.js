import React, { useEffect, useState } from 'react';
import bg from '@imgs/common/bottomFormBg.jpg';
import Btn from '@components/Btn';
import { useForm } from 'react-hook-form';

const BottomForm = ({ customClass = '' }) => {
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
						Появились вопросы?
						<br />
						Напишите нам
					</div>
					<div className="desc">
						Наши специалисты свяжутся с<br />
						вами в ближайшее время
					</div>
				</div>
				<div className="side form">
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
				</div>
			</div>
		</section>
	);
};

export default BottomForm;
