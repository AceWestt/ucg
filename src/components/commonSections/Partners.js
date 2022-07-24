import React, { useEffect, useState } from 'react';
import img0 from '@imgs/common/partners/0.png';
import img1 from '@imgs/common/partners/1.png';
import img2 from '@imgs/common/partners/2.png';
import img3 from '@imgs/common/partners/3.png';
import img4 from '@imgs/common/partners/4.png';
import img5 from '@imgs/common/partners/5.png';
import img6 from '@imgs/common/partners/6.png';
import img7 from '@imgs/common/partners/7.png';
import img8 from '@imgs/common/partners/8.png';
import { useAppContext } from '../../appContext';

const Partners = ({ id = '', data = [], label = '' }) => {
	const [partners, setPartners] = useState(array);
	const [sectionlabel, setSectionLabel] = useState('Партнеры:');
	const { lang } = useAppContext();
	useEffect(() => {
		if (Array.isArray(data) && data.length > 0) {
			setPartners(data);
		}
	}, [data]);
	useEffect(() => {
		if (label) {
			setSectionLabel(label);
		}
	}, [label]);
	return (
		<section className="section partners section-column" id={id}>
			<div className="section-title">{sectionlabel}</div>
			<div className="list-wrap">
				{[1, 2].map((i) => {
					return (
						<div className="list-part" key={i}>
							{partners.map((item, index) => {
								return (
									<div className="item" key={`partner-${i}-${index}`}>
										<img src={item.image || item.img} alt="partner" />
										{Array.isArray(item[`description_${lang}`]) &&
											item[`description_${lang}`].length > 0 && (
												<div className="info">
													{item[`description_${lang}`].map((f, fi) => {
														return (
															<div className="field" key={`field-of-${index}-${fi}`}>
																<span className="text-600">{f.heading}</span>{' '}
																<span>{f.text}</span>
															</div>
														);
													})}
												</div>
											)}
										{item.fields && item.fields.length > 0 && (
											<div className="info">
												{item.fields.map((f, fi) => {
													return (
														<div className="field" key={`field-of-${index}-${fi}`}>
															<span className="text-600">{f.label}</span>{' '}
															<span>{f.value}</span>
														</div>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Partners;

const array = [
	{
		img: img0,
		fields: [
			{
				label: 'Адрес:',
				value: 'г. Бишкек, ул. Льва Толстого, 12',
			},
			{
				label: 'Отдел продаж:',
				value: '+996 (312) 59-00-25, 54-01-36',
			},
			{
				label: 'WhatsApp:',
				value: '+996 552 62-29-33',
			},
			{
				label: 'Эл.почта:',
				value: 'om@bishkekkurulush.kg',
			},
			{
				label: 'Сайт:',
				value: 'www.bishkekkurulush.kg',
			},
		],
	},
	{
		img: img1,
		fields: [
			{
				label: 'Адрес:',
				value:
					'Участок ЖБИ Кант, ЗАО "Кум - Шагыл", Расположен в г. Кант, р-н "Восточная промзона"',
			},
			{
				label: 'Телефоны:',
				value: '+996 3132 70405, +996 555 202028',
			},
			{
				label: 'Эл.почта:',
				value: 'kch-beton@mail.ru',
			},
			{
				label: 'Сайт:',
				value: 'wwww.kumshagyl.kg',
			},
		],
	},
	{
		img: img2,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, ул. Чолпон – Атинская, 2',
			},
			{
				label: 'Телефон:',
				value: '+996 (0701) 43 01 53, +996 (0701) 43 01 09',
			},
			{
				label: 'Эл.почта:',
				value: 'info@kyrgyzbeton.kg',
			},
			{
				label: 'Сайт:',
				value: 'www.kyrgyzbeton.kg',
			},
		],
	},
	{
		img: img3,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, ул. Чолпон – Атинская, 2',
			},
			{
				label: 'Телефон:',
				value: '+996 (0701) 43 01 53, +996 (0701) 43 01 09',
			},
			{
				label: 'Эл.почта:',
				value: 'info@kyrgyzbeton.kg',
			},
			{
				label: 'Сайт:',
				value: 'www.kyrgyzbeton.kg',
			},
		],
	},
	{
		img: img4,
		fields: [
			{
				label: 'Адрес:',
				value: 'г. Бишкек, ул. Кулатова, 8 ',
			},
			{
				label: 'Служба поддержки клиентов:',
				value: ' +996 312 565491',
			},
			{
				label: 'Whatsapp:',
				value: '+ 996 555 435140',
			},
			{
				label: 'Факс:',
				value: '+996 312 591779',
			},
			{
				label: 'Эл.почта:',
				value: 'tash-temir@mail.ru',
			},
			{
				label: 'Сайт:',
				value: 'www.tash-temir.kg',
			},
		],
	},
	{
		img: img5,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, Шабдан Баатыра 1А',
			},
			{
				label: 'Телефон:',
				value: '+996 0705 499443',
			},
		],
	},
	{
		img: img6,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, проспект Чуй 2а',
			},
			{
				label: 'Отдел сбыта:',
				value: '+996 312 532720',
			},
			{
				label: 'Приёмная:',
				value: '+996 312 532695, +996 312 534914',
			},
			{
				label: 'Факс:',
				value: '+996 312 532728',
			},
			{
				label: 'Эл.почта:',
				value: 'zavod-jbi2014@mail.ru',
			},
			{
				label: 'Сайт:',
				value: ' www.zavod-jbi.kg',
			},
		],
	},
	{
		img: img7,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, ул.Токтогула 125/1, 11 эт. БЦ "АВАНГАРД"',
			},
			{
				label: 'Телефон:',
				value: '+996 (312) 53-51-02, +996 (772) 53-51-02',
			},
			{
				label: 'Эл.почта:',
				value: 'avangard_style@mail.ru',
			},
			{
				label: 'Сайт:',
				value: 'www.avangardstyle.kg',
			},
		],
	},
	{
		img: img8,
		fields: [
			{
				label: 'Адрес:',
				value: 'г.Бишкек, ул.Ибраимова, 100 пересекает ул. Киевская',
			},
			{
				label: 'Телефоны:',
				value:
					'+996 312 903333; +996 772 903333; +996 552 903333; +996 553 903333; +996 709 033333',
			},
			{
				label: 'Эл.почта:',
				value: 'baytashgroup@gmail.com',
			},
			{
				label: 'Сайт:',
				value: 'www.baytashgroup.kg',
			},
		],
	},
];

/*
Адрес: г.Бишкек, ул.Ибраимова, 100 пересекает ул. Киевская
Телефоны: +996 312 903333; +996 772 903333;
+996 552 903333; +996 553 903333; +996 709 033333
Эл.почта: baytashgroup@gmail.com
Сайт: www.baytashgroup.kg
*/
