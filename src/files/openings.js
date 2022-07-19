import autoBaseIcn from '@imgs/career/autoBaseIcn.svg';
import buildSectorIcn from '@imgs/career/buildSectorIcn.svg';
import cementProductionIcn from '@imgs/career/cementProducitonIcn.svg';
import cementRepairServiceIcn from '@imgs/career/cementRepairServiceIcn.svg';
import electroWorkshopIcn from '@imgs/career/electroWorkshop.svg';
import materialIcn from '@imgs/career/materialIcn.svg';
import measurementWorkshopIcn from '@imgs/career/measurementWorkshopIcn.svg';
import plantManagementIcn from '@imgs/career/plantManagementIcn.svg';
import repairMechanicsIcn from '@imgs/career/repairMechanicsIcn.svg';
import salesIcn from '@imgs/career/salesIcn.svg';
import trailwayIcn from '@imgs/career/trailwayIcn.svg';
import unloadReadyProductionIcn from '@imgs/career/unloadReadyProductIcn.svg';
import quvaysNodataImg from '@imgs/career/quvaytNodataImg.png';
import qizilqumNodataImg from '@imgs/career/qizilqumNodataImg.png';
import bekabadNodataImg from '@imgs/career/bekabadNodataImg.png';

export const openings = [
	{
		plant: 'Кантский Цементный Завод',
		contactDetails: [
			`<span class="text-600">Номер телефона:</span>

+996 312 61-69-50 (5340)
+996 3132 5-77-17 (5340)
+996 3132 5-75-42 (5320)`,
			`<span class="text-600">Начальник отдела кадров:</span>

+996 0702 53-10-93
Олеся Солдатенкова`,
			`<span class="text-600">Факс:</span>

+996 312 60-71-83`,
			`<span class="text-600">Email:</span>

OSoldatenkova@cement.kg`,
		],
		vacancies: [
			{
				title: 'Цементное производство',
				icn: cementProductionIcn,
				openings: [
					'Помощник машиниста вращающейся печи 5 разряда',
					'Футеровщик-каменщик 5 разряда',
				],
			},
			{
				title: 'Автобаза',
				icn: autoBaseIcn,
				openings: [
					'Машинист трактора К-700',
					'Машинист погрузчика',
					'Автослесарь 5 разряда',
				],
			},
			{
				title: 'Железнодорожный цех',
				icn: trailwayIcn,
				openings: [
					'Мастер по ремонту мех.оборудования',
					'Машинист маневрового тепловоза ',
					'Помощник машиниста маневрового тепловоза',
					'Грузчик разных грузов',
				],
			},
			{
				title: 'Цех отгрузки готовой продукции',
				icn: unloadReadyProductionIcn,
				openings: ['Дежурный электрослесарь 5 разряда', 'Бункеровщик 4 разряда'],
			},
			{
				title: 'Ремонтно-механический цех',
				icn: repairMechanicsIcn,
				openings: ['Электрогазосварщик 5 разряда', 'Токарь 6 разряда'],
			},
			{
				title: 'Ремонтная служба цементного производства',
				icn: cementRepairServiceIcn,
				openings: [
					'Заместитель начальника РСЦП',
					'Крановщик 6 разряда',
					'Слесарь 4 разряда',
					'Электросварщик 4 разряда',
				],
			},
			{
				title: 'Электроцех',
				icn: electroWorkshopIcn,
				openings: ['Электромонтер 5 разряда'],
			},
			{
				title: 'Цех контрольно-измерительных приборов и автоматики',
				icn: measurementWorkshopIcn,
				openings: ['Наладчик 5 разряда', 'Наладчик 6 разряда'],
			},
			{
				title: 'Стройучасток',
				icn: buildSectorIcn,
				openings: ['Плотник-бетонщик'],
			},

			{
				title: 'Отдел материально-технического снабжения',
				icn: materialIcn,
				openings: ['Кладовщик - стропальщик'],
			},
			{
				title: 'Отдел продаж',
				icn: salesIcn,
				openings: ['Заместитель начальника ОП '],
			},
			{
				title: 'Заводоуправление',
				icn: plantManagementIcn,
				openings: ['Начальник ОИТ', 'Инженер по использованию энергоресурсов'],
			},
		],
	},
	{
		plant: 'Кувасайцемент',
		contactDetails: [
			`<span class="text-600">Номер телефона:</span>

Тел: (79) 229-83-48,
 229-84-15, 229-83-56)`,
			`<span class="text-600">Email:</span>

info@kuvasaycement.uz`,
		],
		nodataImg: quvaysNodataImg,
	},
	{
		plant: 'Кызылкумцемент',
		contactDetails: [
			`<span class="text-600">Номер телефона:</span>

Тел: (79) 229-83-48,
229-84-15, 229-83-56`,
			`<span class="text-600">Начальник отдела кадров:</span>

+(79) 229-82-87
Данияров Б. И.`,
		],
		nodataImg: qizilqumNodataImg,
	},
	{
		plant: 'Бекабадцемент',
		contactDetails: [
			`<span class="text-600">Номер телефона:</span>

+0 (370) 214-05-28, 214-05-06`,
			`<span class="text-600">Факс:</span>

+0 (370) 214-05-21, 214-05-05`,
			`<span class="text-600">Email:</span>

info@bekabad-cement.uz`,
		],
		nodataImg: bekabadNodataImg,
	},
];
