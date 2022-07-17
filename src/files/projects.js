import socialCatIcon from '@imgs/projects/social-project-icn.svg';
import stateCatIcon from '@imgs/projects/stateProjects.svg';
import socialCatCover from '@imgs/projects/socialCover.jpg';
import stateCatCover from '@imgs/projects/stateCover.jpg';
import allCover from '@imgs/projects/allCover.jpg';
import cover1 from '@imgs/projects/cover1.jpg';
import cover2 from '@imgs/projects/cover2.jpg';
import cover3 from '@imgs/projects/cover3.jpg';
import cover4 from '@imgs/projects/cover4.jpg';
import cover5 from '@imgs/projects/cover5.jpg';
import cover6 from '@imgs/projects/cover6.jpg';
import cover7 from '@imgs/projects/cover7.jpg';
import galleryImg1_1 from '@imgs/projects/gallery1_1.jpg';

const fields = [
	{
		type: 'text-block',
		title: 'О проекте:',
		text: `Две ракеты-носителя "Протон-М" и разгонные блоки отправлены
на космодром Байконур из Центра Хруничева (входит в "Роскосмос")
для пусков, один из которых - в интересах зарубежного заказчика, сообщается на сайте госкорпорации.

"Из Государственного космического научно-производственного центра имени М. В. Хруничева… на космодром Байконур отправлены блоки
двух ракет-носителей "Протон-М", разгонные блоки "Бриз-М" и ДМ. Средства выведения предназначены для целевых программ госкорпорации "Роскосмос", одна из которых будет реализована
в интересах иностранного заказчика", - указано в сообщении.`,
	},
	{
		type: 'text-block',
		title: 'Объём работ:',
		text: `Общая территория Акционерного Общества составляет 42,10 га земли,
в том числе производственные помещения занимают 8,14 га,
сады – 6,03 га, а железная дорога — 10 км.

На производстве «Кувасайцемент» используются известняк Ляганского, железосодержащие компоненты и гипсовый камень
месторождение (Узбекистан).

Годовая производственная мощность основноготехнологического оборудования предприятия:

1. клинкер – 839,1 тыс. тонн
2. цемент – 1001,0 тыс. тонн.

В целях улучшения производственных показателей,
снижения расхода энергоносителей и обновления технологического оборудования на территории Акционерного Общества
ежегодно производятся работы по модернизации
оборудований производства. Проводимые предприятием модернизации направлены на максимальное использование оборудования,
увеличение производительности основного оборудования
и межремонтного цикла, а также охрану окружающей среды.`,
	},
	{
		type: 'text-block',
		title: 'Итог:',
		text: `Предприятие имеет собственные карьеры: карьер местонахождения Ляган по добыче известняка, а также карьер местонахождения Ляган
по добыче ракушечника.

Ежегодно предприятием добывается в среднем 
до 1 000 000 тн основного сырья.
 
Кроме этого, предприятие закупает сырьё с других карьеров
на основании заключённых договоров в объёме 400 000 тн.
По итогам 2021 года предприятием за добытый объём сырья
с собственных карьеров выплачены налоги в государственный бюджет на сумму 3 101 тысяч долларов США.`,
	},
];

const gallery = [galleryImg1_1, galleryImg1_1, galleryImg1_1, galleryImg1_1];

export const categories = [
	{
		id: 0,
		title: 'Все\nпроекты',
		cover: allCover,
		coverColor: '#878786',
	},
	{
		id: 1,
		title: 'Социальные\nпроекты',
		icon: socialCatIcon,
		cover: socialCatCover,
		coverColor: '#5C5C59',
		type: 'Социальный проект',
	},
	{
		id: 2,
		title: 'Государственные\nпроекты',
		icon: stateCatIcon,
		cover: stateCatCover,
		coverColor: '#2B2B2A',
		type: 'Государственный проект',
	},
];

const main = {
	title: 'Космодром Байконур\nна территории Республики Казахстан',
	cat_id: 1,
};

const main2 = {
	title: 'Кыргызский\nГосударственный Цирк\nим. А. Изибаева',
	cat_id: 1,
};

const main5 = {
	title: '«Реабилитация сектора\nэнергетики»',
	cat_id: 2,
};

const main6 = {
	title: '«Реконструкция ирригационной системы\nКыргызской Республики»',
	cat_id: 2,
};

const main7 = {
	title: '«Альтернативная\nавтомобильная дорога\nСевер-Юг»',
	cat_id: 2,
};

export const projects = [
	{
		id: 1,
		...main,
		img: cover1,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 2,
		...main2,
		img: cover2,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 3,
		...main,
		img: cover3,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 4,
		...main,
		img: cover4,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 5,
		...main5,
		img: cover5,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 6,
		...main6,
		img: cover6,
		fields: fields,
		gallery: gallery,
	},
	{
		id: 7,
		...main7,
		img: cover7,
		fields: fields,
		gallery: gallery,
	},
];
