import React, { useEffect, useState } from 'react';
import CommonHero from '../components/CommonHero';
// import heroImg from '@imgs/contact/hero.jpg';
// import img1 from '@imgs/contact/1.jpg';
// import img2 from '@imgs/contact/2.jpg';
import TextContainerWrapper from '../components/TextContainerWrapper';
// import { plants } from '../files/plants';
import Btn from '../components/Btn';
import BottomForm from '@components/BottomForm';
import { callGet, useAppContext } from '../appContext';

const Contact = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/contact');
				setBackendData(maindata.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="page contact">
			<CommonHero
				img={backendData.block_cover}
				title={backendData[`block_name_${lang}`]}
			/>
			<div className="section content p-left">
				<div className="container">
					<div className="block b-white">
						<div className="text-container-wrapper-parent" id="contact-main-office">
							<TextContainerWrapper
								data={[
									{
										title: backendData[`first_contact_${lang}`],
										columns: backendData[`first_contact_list_${lang}`],
									},
									{
										title: backendData[`second_contact_${lang}`],
										columns: backendData[`second_contact_list_${lang}`],
									},
								]}
								wrapValue
							/>
						</div>

						<div className="img-container first">
							<img src={backendData.block_cover_small} alt="img" />
						</div>
					</div>
					<div className="section-title">Наши заводы:</div>
					<div className="block plants" id="contact-factories">
						<TextContainerWrapper
							data={backendData?.factories?.map((f) => {
								return {
									title: f[`title_${lang}`],
									columns: [
										{
											heading:
												lang === 'ru' ? 'Адрес:' : lang === 'en' ? 'Address:' : 'Manzil:',
											text: f[`address_${lang}`],
										},
										{
											heading:
												lang === 'ru'
													? 'Номер телефона:'
													: lang === 'en'
													? 'Phone:'
													: 'Telefon:',
											text: f.telephone,
										},
										{
											heading:
												lang === 'ru' ? 'Мощность:' : lang === 'en' ? 'Power:' : 'Kuchi:',
											text: f[`power_${lang}`],
										},
									],
								};
							})}
						/>
					</div>
					<div className="block b-white hr">
						<div className="text-container-wrapper-parent" id="contact-hr">
							<TextContainerWrapper
								data={[
									{
										title: backendData[`third_contact_${lang}`],
										columns: backendData[`third_contact_list_${lang}`],
									},
								]}
								wrapValue
								vertical
							/>
							<div className="call-me">
								<span className="label">{backendData[`contact_help_${lang}`]}</span>
								<Btn
									text={
										lang === 'ru' ? 'Отправить' : lang === 'en' ? 'Send' : "Jo'natish"
									}
								/>
							</div>
						</div>
						<div className="img-container second">
							<img src={backendData[`block_cover_third`]} alt="img" />
						</div>
					</div>
				</div>
			</div>
			<BottomForm />
		</div>
	);
};

export default Contact;

// const firstDetails = [
// 	{
// 		title: 'Контакты главного холдинга:',
// 		columns: [
// 			{
// 				label: 'Адрес:',
// 				value: 'Темисколи Древи 39,Офис 502, 1066,\nНикосиа, Кипр',
// 			},
// 			{
// 				label: 'Номер телефона:',
// 				value: '+(357) 22 262108\n+(357) 22 262100',
// 			},
// 			{
// 				label: 'Режим работы:',
// 				value: 'Рабочик дни: Пн - Пт\nВыходные дни: Сб - Вс',
// 			},
// 		],
// 	},
// 	{
// 		title: 'Контакты главного холдинга:',
// 		columns: [
// 			{
// 				label: 'Адрес:',
// 				value:
// 					'Республика Казахстан, город Алматы,\nпр. Аль-Фараби, 17, Бизнес Центр «Нурлы-Тау» корпус 4Б, 9-этаж.',
// 			},
// 			{
// 				label: 'Номер телефона:',
// 				value: '+ 7 727 277 77 20/30 (ext. 111)\n+ 7 727 277 77 40 Факс',
// 			},
// 			{
// 				label: 'Режим работы:',
// 				value: 'Рабочик дни: Пн - Пт\nВыходные дни: Сб - Вс',
// 			},
// 		],
// 	},
// ];

// const hr = [
// 	{
// 		title: 'Контакты hr-отдела',
// 		columns: [
// 			{
// 				label: 'Номер телефона:',
// 				value: '+10 (998 70 91) 2 24 48,\n2 49 61',
// 			},
// 			{
// 				label: 'Факс:',
// 				value: '+10 (998 70 91) 2 24 48,\n+10 (998 70 91) 2 24 50,',
// 			},
// 			{
// 				label: 'E-mail:',
// 				value: 'hr@ucg.uz',
// 			},
// 		],
// 	},
// ];
