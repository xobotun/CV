var data_ru = function() {
	return {
		general: {
			name: "Павел Маминов",
			race: "Человек",
			gender: "Мужчина",
			birthday: new Date(1996, 3, 10),
			age: "REPORT AS A BUG",
			professions: [{
				name: "Программист",
				level: 8
			},
			{
				name: "Художник",
				level: 3
			}],
			professions_list: "REPORT AS A BUG",
			alignment: "Законопослушный Добрый",
			location: "Москва",
			photo_url: "photos/240/myself.jpg",
			phone: "+7 916 533-25-55",
			email: "maminov.pavel@mail.ru",
			profiles: [{
				name: "GitHub",
				link: "https://github.com/xobotun",
				img: "icons/github.svg"
			},
			{
				name: "LinkedIn",
				link: "https://www.linkedin.com/in/xobotun",
				img: "icons/linkedin.svg"
			},
			{
				name: "ВКонтакте",
				link: "https://vk.com/id10461816",
				img: "icons/vk.svg"
			},
			{
				name: "HeadHunter",
				link: "https://hh.ru/resume/f0b8dabbff031f44380039ed1f546f34695052",
				img: "icons/hh.svg"
			}]
		},
		job_history: [{
			name: "Java-программист",
			where: "NTRLab",
			began: new Date(2017, 10, 7),
			began_text: "7 ноября 2017",
			ended: new Date(),
			ended_text: "н.в.",
			experience: "REPORT AS A BUG",
			workplace_description: "Аутсорсинговая компания с штаб-квартирой в Томске c 2000 года.",
			job_description: "99% рабочего времени было потрачено на поддержку и перевод бекенда приложения Мосгортранса с набора jar'ников на WildFly. Это был и есть крайне длинный проект, который начала не наша компания и закончу, по видимости, не я. Есть множество проектов с тоннами легаси-кода. \
			Здесь подобного кода тоже достаточно, но проект сравнительно молодой: был начат примерно в 2015 году и пережил переход с python на \"микросервисную\" Java SE, с Elasticsearch на PostgreSQL и с Java SE на Java EE. Сначала я занимался написанием определителя маршрутов транспортных средств \
			по их телеметрии, затем интегрировал доставшийся мне отдельный проект в глобальный ear'ник, а затем наш тимлид уволился и нас бросили на затыкание оставшихся брешей и доработку фич. Затем наступил этап, когда мы были сами себе тимлиды, архитекторы и девопсы, надо было только выполнять \
			таски в Jira и отмечать время. Но с опытным специалистом всё же было приятнее работать.",
			related_skills: ["Java EE", "Hibernate", "Spring", "Командная работа"]
		},{
			name: "Инженер-программист",
			where: "НП \"Медэкоэргоцентр\"",
			began: new Date(2017, 6, 20),
			began_text: "20 августа 2017",
			ended: new Date(2017, 10, 4),
			ended_text: "3 ноября 2017",
			experience: "REPORT AS A BUG",
			workplace_description: "Организация на территории воинской части. Здесь готовили к полёту Лайку, Белку-и-Стрелку, Гагарина и других космонавтов. Здания старые, но в процессе капитального ремонта, и оборудование – модернизируется.",
			job_description: "Мы работали над установкой в центрифугу диаметром пятнадцать метров и возрастом шестьдесят лет макета кабины самолёта Т-50. Моей изначальной задачей было создание ПО для управления скоростью вращения центрифуги, но по мере развития проекта мне пришлось администрировать\
							  физически разделённую сеть из более чем двадцати более-менее однотипных промышленных компьютеров под управлением Windows. А затем на мои плечи внезапно упало бремя документирования всей компьютерной части проекта: руководств по включению, пользованию и т.п., и десятков\
							  ГОСТовских диаграмм. Прям как второй диплом.",
			related_skills: ["C#", "Системное администрирование", "Написание документации"]
		},
		{
			name: "Младший Java разработчик",
			where: "Кое-где",
			began: new Date(2016, 6),
			began_text: "июля 2016",
			ended: new Date(2017, 4),
			ended_text: "май 2017",
			experience: "REPORT AS A BUG",
			workplace_description: "Подработка в обход трудового законодательства России.",
			job_description: "Мне необходимо было разработать серверную часть внутреннего программного продукта, работая в команде frontend- и Android-разработчиков.",
			related_skills: ["Java", "Spring", "Hibernate", "Командная работа"]
		}],
		education_history: {
			primary: [{
			name: "Системный архитектор",
			where: "НОЦ \"Технопарк\"",
			began: new Date(2015, 8, 10),
			began_text: "середины сентября 2015",
			ended: new Date(2017, 7, 28),
			ended_text: "28 августа 2017",
			length: "REPORT AS A BUG",
			description: "Двухлетнее обучение на проектах по приблизительно 220 академических часов в семестре от крутых людей из Mail.Ru, ABBYY и не только. Обучали практически всему: программированию на Java, python, js и С++, разработке архитектуры и разработке интерфейсов, MySQL и её индексам,\
						  MongoDB, методологиям командной разработки, базовому управлению персоналом и временем и искусству выступления.",
			proof_url: "https://park.mail.ru/alumni/82/3017/",
			photo_urls: ["photos/112/TP_face.jpg", "photos/112/TP_back.jpg"]
		},
		{
			name: "Бакалавр",
			where: "МГТУ им. Н. Э. Баумана",
			began: new Date(2013, 7, 1),
			began_text: "сентября 2013",
			ended: new Date(2017, 5, 20),
			ended_text: "20 июня 2017",
			length: "REPORT AS A BUG",
			description: "Бакалавр с кафедры ИУ6 \"Компьютерные системы и сети\" по специальности 09.03.01, что бы это ни значило. Изучали 60% программирования, 25% микроконтроллеров и схемотехники и 15% администрирования сетей. Странно, что не преподавали практики программирования,\
						  но зато очень хорошо объяснили работу процессора. Матанализ, линейная алгебра и теория вероятностей – в комплекте. Дипломную работу по распознаванию лиц с использованием нейронных сетей защитил на \"отлично\".",
			proof_url: null,
			photo_urls: ["photos/112/BMSTU_1.jpg", "photos/112/BMSTU_2.jpg", "photos/112/BMSTU_3.jpg", "photos/112/BMSTU_4.jpg", "photos/112/BMSTU_5.jpg"]
		}],
		secondary: [{
			name: "CUDA и машинное обучение~",
			where: "НОЦ \"Технопарк\"",
			began: new Date(2016, 8, 1),
			began_text: "середины сентября 2016",
			ended: new Date(2017, 1, 1),
			ended_text: "начало февраля 2017",
			length: "REPORT AS A BUG",
			description: "Полтора месяца программирование на CUDA и полгода введения в машинное обучение. В качестве выпускного проекта был сделан классификатор монет по их изображениям. Правда, он сделан \"в лоб\", и поддерживает только монеты от пяти копеек до десяти не-юбилейных рублей,\
						  но всё же классифицирует.",
			proof_url: "https://park.mail.ru/alumni/open-courses/",
			photo_urls: ["photos/112/cuda.jpg"]
		},
		{
			name: "Веб-приложения на Tizen",
			where: "Samsung R&D Institute Rus",
			began: new Date(2016, 6, 12),
			began_text: "середины июля 2016",
			ended: new Date(2016, 6, 26),
			ended_text: "конец июля 2016",
			length: "REPORT AS A BUG",
			description: "Производственная летняя практика на базе Самсунга. Две недели разработки приложений на js под Tizen: начиная наручными часами и заканчивая телевизорами. Правда, процессора нет ни там, ни там.",
			proof_url: null,
			photo_urls: ["photos/112/samsung.jpg"]
		},
		{
			name: "Введение в геймдизайн",
			where: "Универсариум",
			began: new Date(2016, 1, 1),
			began_text: "февраля 2016",
			ended: new Date(2016, 3, 1),
			ended_text: "апрель 2016",
			length: "REPORT AS A BUG",
			description: "Полгода введения в азы геймдизайна: начиная от простого описания идеи игры и референсов, заканчивая разработкой простого дизайн-документа и описанием собираемой статистики. Неплохо систематизирует знания, полученные в ходе прохождения многих игр.",
			proof_url: "http://universarium.org/cert/0460-000359-01-16",
			photo_urls: ["photos/112/universarium-gamedesign.jpg"]
		},
		{
			name: "Выпускник",
			where: "Экономическая школа-лицей",
			began: new Date(2002, 8, 1),
			began_text: "1 сентября 2002",
			ended: new Date(2013, 5, 1),
			ended_text: "июнь 2013",
			length: "REPORT AS A BUG",
			description: "Школа, одна из многих. Где-то в страших классах я начал становиться программистом. Окончил с серебряной медалью.",
			proof_url: null,
			photo_urls: ["photos/112/School_1.jpg", "photos/112/School_2.jpg", "photos/112/School_3.jpg", "photos/112/School_4.jpg"]
		}]},
		skills: {
			max_skill_level: 100,
			skill_families: [{
				name: "Программирование",
				description: "Сводка языков программирования, которыми я владею.",
				skillsets: [
				{
					name: "Java",
					level: 60,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Spring",
						level: 30
					},
					{
						name: "Hibernate",
						level: 65
					},
					{
						name: "Java SE",
						level: 55
					},
					{
						name: "Java EE",
						level: 50
					},
					{
						name: "EJB",
						level: 45
					},
					{
						name: "JUnit",
						level: 39
					},
					{
						name: "Mockito",
						level: 49
					}]
				},
				{
					name: "C#",
					level: 35,
					began: new Date(2016, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "linq",
						level: 25
					},
					{
						name: "wpf",
						level: 10
					},
					{
						name: "mvvm",
						level: 25
					},
					{
						name: "Unity",
						level: 30
					},
					{
						name: "NUnit",
						level: 15
					}]
				},
				{
					name: "C++",
					level: 40,
					began: new Date(2013, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "stdlib",
						level: 30
					},
					{
						name: "boost",
						level: 5
					},
					{
						name: "Cocos2D-x",
						level: 25
					},
					{
						name: "CppUnit",
						level: 15
					},
					{
						name: "RS-232",
						level: 35
					},
					{
						name: "RS-485",
						level: 20
					},
					{
						name: "MIL-STD-1553B",
						level: 10
					}]
				},
				{
					name: "Javascript",
					level: 40,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Vue.js",
						level: 30
					},
					{
						name: "Vanilla JS",
						level: 50
					},
					{
						name: "jQuery",
						level: 20
					},
					{
						name: "Node.js",
						level: 5
					},
					{
						name: "Ненависть",
						level: 70
					}]
				},
				{
					name: "HTML",
					level: 70,
					began: new Date(2007, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				},
				{
					name: "CSS",
					level: 60,
					began: new Date(2011, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				},
				{
					name: "Python",
					level: 25,
					began: new Date(2015, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "2.7",
						level: 25
					},
					{
						name: "3.6",
						level: 15
					},
					{
						name: "Numpy",
						level: 30
					},
					{
						name: "Pandas",
						level: 25
					},
					{
						name: "Django",
						level: 15
					},
					{
						name: "sklearn",
						level: 20
					}]
				},
				{
					name: "Ruby",
					level: 13,
					began: new Date(2013, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Rubocop",
						level: 10
					},
					{
						name: "Ruby on Rails",
						level: 10
					}]
				},
				{
					name: "Golang",
					level: 20,
					began: new Date(2017, 2, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				},
				{
					name: "Android",
					level: 40,
					began: new Date(2016, 8, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				},
				{
					name: "masm",
					level: 55,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				},
				{
					name: "SQL",
					level: 50,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "MySQL",
						level: 50
					},
					{
						name: "PostgreSQL",
						level: 70
					},
					{
						name: "Oracle SQL",
						level: 40
					},
					{
						name: "MS SQL",
						level: 20
					}]
				},
				{
					name: "Другие БД",
					level: 20,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "MongoDB",
						level: 40
					},
					{
						name: "Cassandra DB",
						level: 15
					},
					{
						name: "Redis",
						level: 50
					},
					{
						name: "RabbitMQ",
						level: 25
					}]
				},
				{
					name: "Методологии",
					level: 45,
					began: new Date(2015, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Scrum",
						level: 35
					},
					{
						name: "Kanban",
						level: 35
					},
					{
						name: "TDD",
						level: 15
					},
					{
						name: "Waterfall",
						level: 20
					}]
				},
				{
					name: "Принципы",
					level: 55,
					began: new Date(2013, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "SOLID",
						level: 40
					},
					{
						name: "YAGNI",
						level: 45
					},
					{
						name: "KISS",
						level: 25
					},
					{
						name: "DRY",
						level: 40
					}]
				}]
			},
			{
				name: "Искусство",
				description: "Всё, про что относится к дизайну-рисованию-творчеству.",
				skillsets:[{
					name: "3Ds Max",
					level: 25,
					began: new Date(2008, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Lowpoly Modelling",
						level: 40
					},
					{
						name: "Lowpoly UV-Unwrap",
						level: 30
					},
					{
						name: "Skeletal Animation",
						level: 10
					},
					{
						name: "Material Editing",
						level: 10
					},
					{
						name: "Vray Rendering",
						level: 0
					}]
				},
				{
					name: "Photoshop",
					level: 15,
					began: new Date(2009, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Ретушь",
						level: 10
					},
					{
						name: "Текстурирование",
						level: 20
					}]
				},
				{
					name: "Substance Painter",
					level: 35,
					began: new Date(2017, 3, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Простые фотореалистичные текстуры",
						level: 45
					},
					{
						name: "Smart Materials",
						level: 5
					}]
				},
				{
					name: "Adobe Illustrator",
					level: 10,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: []
				}]
			},
			{
				name: "Общие навыки",
				description: "Всё, что так или иначе пригождается в работе.",
				skillsets:[{
					name: "Командная работа",
					level: 35,
					began: new Date(2012, 3, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Общение",
						level: 45
					},
					{
						name: "Выступления",
						level: 30
					},
					{
						name: "Объяснения",
						level: 15
					}]
				},
				{
					name: "Системное администрирование",
					level: 45,
					began: new Date(2010, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Windows домашний",
						level: 55
					},
					{
						name: "Windows серверный",
						level: 15
					},
					{
						name: "Linux домашний",
						level: 10
					},
					{
						name: "Linux серверный",
						level: 35
					}]
				},
				{
					name: "MS Office",
					level: 75,
					began: new Date(2007, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Word",
						level: 80
					},
					{
						name: "Excel",
						level: 30
					},
					{
						name: "Powerpoint",
						level: 60
					},
					{
						name: "Visio",
						level: 70
					},
					{
						name: "Outlook",
						level: 15
					},
					{
						name: "Access",
						level: 25
					}]
				},
				{
					name: "Инструменты разработчика",
					level: 50,
					began: new Date(2015, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "git",
						level: 15
					},
					{
						name: "GitHub",
						level: 70
					},
					{
						name: "Jira",
						level: 40
					},
					{
						name: "SVN",
						level: 20
					}]
				}]
			},
			{
				name: "Прочее",
				description: "Всё, что не вошло в вышеприведённые категории, но я зачем-то захотел внести сюда.",
				skillsets: []
			}
		]},
		books_read: {
			name: "Все книги, которые я когда-либо прочитал. Ну, хорошо, не все.",
			list: [{
				name: "Приёмы объектно-ориентированного проектирования",
				author: "Э. Гамма, Р. Хелм, Р. Джонсон, Д. Влиссидес",
				description: "Классическая книга, посвящённая паттернам объектно-ориентированного программирования. Содержит те знания, которыми обязательно обладать любому программисту.",
				photo_urls: null
			},
			{
				name: "Код. Тайный язык информатики",
				author: "Ч. Петцольд",
				description: "Краткий экскурс в историю, покрывающий темы от кодирования данных и до триггеров и ассемблера. Книга для первого курса, чтобы получше разобраться в устройстве компьютера.",
				photo_urls: null
			},
			/*
			// Так и не вспомнил, что это была за книга, но она мне не понравилась и качеством изготовления, и очень спорными моментами. Почти ничего из неё не вынес.	// UPD: Это был Эффективный Код Джошуа Блоха. И там была ужасная типографская работа: одной страницы не было и замещающая её повторялась одна страница повторялась: 114→115→115→117 :(
			{
				name: "Что-то про джаву.",
				author: "человек",
				description: "Так себе",
				photo_urls: null
			},*/
			{
				name: "Responsive Web Design with HTML5 and CSS3",
				author: "Ben Frain",
				description: "Странно в 2017 году читать книгу 2012 года выпуска, но без неё не было бы этой страницы. Или она была бы в стиле 2007 года.",		// Ну, да. Сейчас она в стиле 2011.
				photo_urls: null
			},
			{
				name: "Совершенный код",
				author: "Стив Макконнелл",
				description: "Книга про best practices архитектуры, проектирования и кодирования. Систематизирует несистематизированные знания и привосит новые, хотя временами и очевидные.",
				photo_urls: null
			}]
		},
		is_photo_enlarger_active: false
	}
}

var data_en = function() {
	return {} // TODO
}

function calculate_age(data) {
	var now = new Date();
	var delta = new Date(now - data);
	var age = delta.getUTCFullYear() - 1970;
	var age_last_digit = age % 10;
	
	var suffix = "";
	switch(age_last_digit) {
		case 1: 
			suffix = "год";
			break;
		case 2: 
		case 3: 
		case 4: 
			suffix = "года";
			break;
		default:
			suffix = "лет";
			break;
	}
	
	if (age % 100 == 11 || age % 100 == 12)
		suffix = "лет";
		
	return age + " " + suffix;
}

// I hope you won't expect me to make rule-driven date parser? `calculate_age` copy-paste will work precisely the same way and faster than overcomplicated thing. YAGNI, btw. Calendars change only once in ~2000 years.
function calculate_experience(date_began, date_ended) {
	if (date_ended == undefined || !(date_ended instanceof Date))
		date_ended = new Date();
	
	var delta = new Date(date_ended - date_began);
	var years = delta.getUTCFullYear() - 1970;
	var months = delta.getUTCMonth();
	var years_last_digit = years % 10;
	var months_last_digit = months % 10;
	var experience_strings = [];

	if (years > 0) {
		var years_suffix = "";
		switch(years_last_digit) {
			case 1: 
				years_suffix = "год";
				break;
			case 2: 
			case 3: 
			case 4: 
				years_suffix = "года";
				break;
			default:
				years_suffix = "лет";
				break;
		}
		
		if (years % 100 == 11 || years % 100 == 12)
			years_suffix = "лет";
		
		experience_strings.push(years + " " + years_suffix);
	}
	
	if (months > 0) {
		var months_suffix = "";
		switch(months_last_digit) {
			case 1: 
				months_suffix = "месяц";
				break;
			case 2: 
			case 3: 
			case 4: 
				months_suffix = "месяца";
				break;
			default:
				months_suffix = "месяцев";
				break;
		}
		
		if (months % 100 == 11 || months % 100 == 12)
			months_suffix = "месяцев";
		
		experience_strings.push(months + " " + months_suffix);
	}
			
	return experience_strings.join(" ");
}

function get_localized_data()  {
	var path = window.location.pathname;

	if (path === "/en")
		return data_en();
	if (path === "/ru")
		return data_ru();
	
	return data_ru();
}

var preprocessed_data = function() {
	var raw_data = get_localized_data();
	
	// 1. Inject max_skill_level constant in childs.
	// 5. Calculate experience for skills.
	var max_skill_level = raw_data.skills.max_skill_level;
	
	// For programming, design, general_skills, etc.
	for (skill_family of raw_data.skills.skill_families) {
		// For each programming language.
		for (skillset of skill_family.skillsets) {
			skillset.max_skill_level = max_skill_level;
			skillset.experience = calculate_experience(skillset.began);
			// For each technology in programming language
			for (subskill of skillset.subskills) {
				subskill.max_skill_level = max_skill_level;
			}
		}
	}
	
	// 2. Calculate age.
	raw_data.general.age = calculate_age(raw_data.general.birthday)
	
	// 3. Calculate experience in job_history, education_history.primary, education_history.secondary and skills.
	for (workplace of raw_data.job_history) {
		workplace.experience = calculate_experience(workplace.began, workplace.ended);
	}
	
	for (education_place of raw_data.education_history.primary) {
		education_place.length = calculate_experience(education_place.began, education_place.ended);
	}
	for (education_place of raw_data.education_history.secondary) {
		education_place.length = calculate_experience(education_place.began, education_place.ended);
	}
	
	// 4. Concat professions list into string.
	raw_data.general.professions_list = "";
	for (profession of raw_data.general.professions) {
		raw_data.general.professions_list += profession.name + "(" + profession.level + ")" + " / ";
	}
	raw_data.general.professions_list = raw_data.general.professions_list.slice(0, -3);
	
	
	return raw_data;
}