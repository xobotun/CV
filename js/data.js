var data = function(){
	return {
		general: {
			name: "Павел Маминов",
			race: "Человек",
			gender: "Мужчина",
			birthday: new Date(1996, 3, 10),
			age: "REPORT AS A BUG",
			professions: [{
				name: "Программист",
				level: 7
			},
			{
				name: "Художник",
				level: 3
			}],
			professions_list: "REPORT AS A BUG",
			alignment: "Законопослушный Добрый",
			location: "Москва",
			photo_url: "photos/240/myself.jpg"
		},
		job_history: [{
			name: "Инженер-программист",
			where: "НП \"Медэкоэргоцентр\"",
			began: new Date(2017, 6, 20),
			began_text: "20 августа 2017",
			ended: new Date(),
			ended_text: "н.в.",
			experience: "REPORT AS A BUG",
			workplace_description: "Организация на территории воинской части. Здесь готовили к полёту Лайку, Белку-и-Стрелку, Гагарина и других космонавтов. Здания старые, а оборудование – модернизируется.",
			job_description: "Мы работали над установкой в центрифугу диаметром пятнадцать метров и возрастом шестьдесят лет макета кабины самолёта Т-50. Моей изначальной задачей было создание ПО для управления скоростью вращения центрифуги, но по мере развития проекта мне пришлось администрировать\
							  физически разделённую сеть из более чем двадцати более-менее однотипных промышленных компьютеров под управлением Windows.",
			related_skills: ["C#", "System Administration", "Teamwork"]
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
			job_description: "Мне необходимо было разработать серверную часть определённого сервиса, работая в команде frontend- и Android-разработчиков.",
			related_skills: ["Java", "Spring", "Teamwork"]
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
			description: "Двухлетнее обучение по примерно 200 академических часов в семестре от крутых людей из Mail.Ru и не только.",
			proof_url: "https://park.mail.ru/alumni/82/3017/",
			photo_urls: ["photos/112/TP_face.jpg", "photos/112/TP_back.jpg"]
		},
		{
			name: "Бауманец",
			where: "МГТУ им. Н. Э. Баумана",
			began: new Date(2013, 7, 1),
			began_text: "сентября 2013",
			ended: new Date(2017, 5, 20),
			ended_text: "20 июня 2017",
			length: "REPORT AS A BUG",
			description: "Бакалавр с кафедры ИУ6 \"Компьютерные системы и сети\". Изучали 60% программирования, 25% микроконтроллеров и схемотехники и 15% администрирования сетей. Дипломную работу по распознаванию лиц и использованием нейронных сетей защитил на \"отлично\".",
			proof_url: null,
			photo_urls: null
		}],
		secondary: [{
			name: "CUDA и машинное обучение~",
			where: "НОЦ \"Технопарк\"",
			began: new Date(2016, 8, 1),
			began_text: "середины сентября 2016",
			ended: new Date(2017, 1, 1),
			ended_text: "начало февраля 2017",
			length: "REPORT AS A BUG",
			description: "Полгода введения в машинное обучение и, попутно, программирование на CUDA",
			proof_url: "https://park.mail.ru/alumni/open-courses/",
			photo_urls: ["photos/112/cuda.jpg"]
		},
		{
			name: "Самсунг",
			where: "Гнусмас",
			began: new Date(2016, 6, 12),
			began_text: "середины июля 2016",
			ended: new Date(2016, 6, 26),
			ended_text: "конец июля 2016",
			length: "REPORT AS A BUG",
			description: "Две недели разработки на js под Tizen",
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
			description: "Полгода введения в азы геймдизайна.",
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
			description: "Школа. Окончил с серебряной медалью.",
			proof_url: null,
			photo_urls: null
		}]},
		skills: {
			max_skill_level: 100,
			skill_families: [{
				name: "Программирование",
				description: "Сводка языков программирования, которыми я владею.",
				skillsets: [{
					name: "C#",
					level: 30,
					began: new Date(2016, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "linq",
						level: 15
					},
					{
						name: "wpf",
						level: 5
					},
					{
						name: "mvvm",
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
					}]
				},
				{
					name: "Java",
					level: 50,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Spring",
						level: 20
					},
					{
						name: "Hibernate",
						level: 30
					}]
				},
				{
					name: "Javascript",
					level: 10,
					began: new Date(2014, 0, 1),
					experience: "REPORT AS A BUG",
					is_spoiler_open: false,
					subskills: [{
						name: "Vue.js",
						level: 30
					},
					{
						name: "Ненависть",
						level: 60
					}]
				}]},
				{
					name: "Искусство",
					description: "Всё, про что относится к дизайну-рисованию-творчеству.",
					skillsets:[
				]},
				{
					name: "Общие навыки",
					description: "Всё, что так или иначе пригождается в работе.",
					skillsets:[
				]},
				{
					name: "Прочее",
					description: "Всё, что не вошло в вышеприведённые категории, но я зачем-то захотел внести сюда.",
					skillsets:[
				]}
			]
		},
		books_read: {
			name: "Все книги, которые я когда-либо прочитал. Ну, хорошо, не все.",
			list: [{
				name: "Приёмы объектно-ориентированного проектирования",
				author: "Э. Гамма, Р. Хелм, Р. Джонсон, Д. Влиссидес",
				description: "Классическая книга, посвящённая паттернам объектно-ориентированного программирования. Содержит те знания, которыми обязательно обладать любому программисту.",
				photo_urls: ["waagh!"]
			},
			{
				name: "Код",
				author: "Ч. Петцольд",
				description: "описание",
				photo_urls: ["waagh@"]
			},
			{
				name: "Что-то про джаву.",
				author: "человек",
				description: "Так себе",
				photo_urls: ["waagh#"]
			},
			{
				name: "Responsive Web Design with HTML5 and CSS3",
				author: "Ben Frain",
				description: "Странно в 2107 году читать книгу 2012 года выпуска, но без неё не было бы этой страницы. Или она была бы в стиле 2007 года.",
				photo_urls: ["waagh$"]
			},
			{
				name: "Совершенный код",
				author: "Стив Макконнелл",
				description: "Книга про best practices архитектуры, проектирования и кодирования. Систематизирует несистематизированные знания и привосит новые, хотя временами и очевидные.",
				photo_urls: ["waagh%"]
			}]
		},
		is_photo_enlarger_active: false
	}
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

var preprocessed_data = function(){
	var raw_data = data();
	
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