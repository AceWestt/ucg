import React from 'react';
import CommonHero from '../components/CommonHero';
import heroImg from '@imgs/contact/hero.jpg';
import img1 from '@imgs/contact/1.jpg';
import img2 from '@imgs/contact/2.jpg';
import TextContainerWrapper from '../components/TextContainerWrapper';
import { plants } from '../files/plants';
import Btn from '../components/Btn';

const Contact = () => {
	const plantsData = plants.map((p) => {
		return {
			title: p.title,
			columns: [
				{
					label: 'Aдрес',
					value: p.address,
				},
				{
					label: 'Номер телефона:',
					value: p.phone,
				},
				{
					label: 'Мощность:',
					value: p.power,
				},
			],
		};
	});
	return (
		<div className="page contact">
			<CommonHero img={heroImg} title="Контакты" />
			<div className="section content p-left">
				<div className="container">
					<div className="block b-white">
						<div className="text-container-wrapper-parent">
							<TextContainerWrapper data={firstDetails} wrapValue />
						</div>

						<div className="img-container first">
							<img src={img1} alt="img" />
						</div>
					</div>
					<div className="section-title">Наши заводы:</div>
					<div className="block plants">
						<TextContainerWrapper data={plantsData} />
					</div>
					<div className="block b-white hr">
						<div className="text-container-wrapper-parent">
							<TextContainerWrapper data={hr} wrapValue vertical />
							<div className="call-me">
								<span className="label">
									Так же, вы можете оставить
									<br />
									жалобу или предложение
								</span>
								<Btn text="Отправить" />
							</div>
						</div>
						<div className="img-container second">
							<img src={img2} alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

const firstDetails = [
	{
		title: 'Контакты главного холдинга:',
		columns: [
			{
				label: 'Адрес:',
				value: 'Темисколи Древи 39,Офис 502, 1066,\nНикосиа, Кипр',
			},
			{
				label: 'Номер телефона:',
				value: '+(357) 22 262108\n+(357) 22 262100',
			},
			{
				label: 'Режим работы:',
				value: 'Рабочик дни: Пн - Пт\nВыходные дни: Сб - Вс',
			},
		],
	},
	{
		title: 'Контакты главного холдинга:',
		columns: [
			{
				label: 'Адрес:',
				value:
					'Республика Казахстан, город Алматы,\nпр. Аль-Фараби, 17, Бизнес Центр «Нурлы-Тау» корпус 4Б, 9-этаж.',
			},
			{
				label: 'Номер телефона:',
				value: '+ 7 727 277 77 20/30 (ext. 111)\n+ 7 727 277 77 40 Факс',
			},
			{
				label: 'Режим работы:',
				value: 'Рабочик дни: Пн - Пт\nВыходные дни: Сб - Вс',
			},
		],
	},
];

const hr = [
	{
		title: 'Контакты hr-отдела',
		columns: [
			{
				label: 'Номер телефона:',
				value: '+10 (998 70 91) 2 24 48,\n2 49 61',
			},
			{
				label: 'Факс:',
				value: '+10 (998 70 91) 2 24 48,\n+10 (998 70 91) 2 24 50,',
			},
			{
				label: 'E-mail:',
				value: 'hr@ucg.uz',
			},
		],
	},
];
