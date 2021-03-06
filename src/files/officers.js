import officer1 from '@imgs/about/offficers-1.png';
import officer2 from '@imgs/about/offficers-2.png';
import officer3 from '@imgs/about/offficers-3.png';

const education1 = [
	{
		year: 'с 1991 по 1996 год',
		place:
			'Рудненский индустриальный институт Город: Рудный Республика Казахстан.',
	},
	{
		year: '2006 год',
		place: 'Обучение «Prime Consult»',
	},
	{
		year: '2006 год',
		place: '«Hock accounting training»',
	},
	{
		year: '2008 год',
		place:
			'Семинар компании «HeidelbergCement AG Schelklingen» и «Holcim GmbH Dotternhausen».',
	},
	{
		year: '2009 год',
		place:
			'Специализированная программа «Альтернативное финансирование в условиях кризиса» г Лондон. Великобритания.',
	},
	{
		year: '2010 год',
		place:
			'«Железнодорожные перевозки Горно-Металлургических Грузов», г Санкт Петербург, Российская Федерация',
	},
	{
		year: '2011 год',
		place:
			'«Железнодорожные перевозки Горно-Металлургических Грузов», г Санкт Петербург, Российская Федерация',
	},
	{
		year: '2012 год',
		place: 'Обучение МВА в Международной Академии Бизнеса.',
	},
	{
		year: '2017 год',
		place: 'Международный институт экономики и права.',
	},
	{
		year: '2018 год',
		place:
			'Российская академия народного хозяйства и государственной службы при Президенте РФ Экономика. ',
	},
];

const experience1 = [
	{
		year: 'с 2003 по 2005  год',
		place: 'Генеральный директор ООО “Сандин” Башкортостан',
	},
	{
		year: 'с 2005 по 2006 год',
		place:
			'Технический директор ООО “Новотройцкий 	цементный завод” г. Новотроицк',
	},
	{
		year: 'с 2006 по 2012 год',
		place:
			'Вице-президент по производству  ТОО “United Cement Group” город Алматы, Республика Казахстан',
	},
	{
		year: 'с 2012 по 2014 год',
		place:
			'Генеральный директор ОАО “Новотройцкий   цементный завод” г. Новотроицк',
	},
	{
		year: 'с 2014 по 2018 год',
		place:
			'Генеральный директор ООО “Сандийский гипсоперерабатывающий комбинат” город Кумертау',
	},
	{
		year: 'с 2018 по 2020 год',
		place:
			'Директор  ГБУ “Управление Капитального Строительства” Оренбургской области ',
	},
	{
		year: 'с 2020 по настоящее время',
		place: 'Генеральный директор  АО “Бекабадцемент”',
	},
];

const education2 = [
	{
		year: 'с 1986 по 1990 год',
		place:
			'Фрунзенский машиностроительный техникум. Специальность: Техник-механик',
	},
	{
		year: 'с 1997 по 2002 год',
		place: 'Кыргызский технический университет. Специальность: Инженер',
	},
];

const experience2 = [
	{
		year: 'с 1992 по 2002  год',
		place: 'Механик ТПШ в «Кантский цементно-шиферный комбинат» ',
	},
	{
		year: 'с 2002 по 2008 год',
		place:
			'Инженер-механик, главный механик комбината в «Кантский цементно-шиферный комбинат» ',
	},
	{
		year: 'с 2008 по 2009 год',
		place: 'Технический  директор в ОАО «Кантский цементный завод»',
	},
	{
		year: 'с 2009 по 2013 год',
		place:
			'Технический директор, Управляющий  директор в ТОО «Цементный завод Семей»',
	},
	{
		year: 'с 2013 по 2014 год',
		place: 'Технический директор в ОсОО «Цемек Минералс»',
	},
	{
		year: '2016 год',
		place: 'Технический директор в ОАО «Кантский цементный завод»',
	},
	{
		year: 'с 2016 по настоящее время',
		place: 'Генеральный директор  в ОАО «Кантский цементный завод»',
	},
];

export const officers = [
	{
		id: 1,
		name: 'Коробкин Василий Викторович',
		title: 'Генеральный директор  АО “Бекабадцемент”',
		img: officer1,
		address:
			'Республика Узбекистан, Ташкентская область, г. Бекабад, ул. Истиклол, 20',
		phone: '+10 (998 7091) 2 24 48, 2 49 61',
		education: education1,
		experience: experience1,
	},
	{
		id: 2,
		name: 'Мельников Сергей Николаевич',
		title: 'Генеральный директор Кантский цементный завод',
		img: officer2,
		address:
			'Кыргызская Республика, Чуйская область, Ысыкатинский район, г. Кант, Восточная промзона',
		phone: '+10 (996 312) 69 65 50',
		education: education2,
		experience: experience2,
	},
	{
		id: 3,
		name: 'Рахманов Дамир Эгембердиевич',
		title: 'И.О генерального директора  АО «Кувасайцемент»',
		img: officer3,
		address:
			'Республика Узбекистан, Ферганская область, г. Кувасай, ул. Мустакиллик, 138',
		phone: '+10 (998 7337) 3 36 12, 3 31 94',
	},
];
