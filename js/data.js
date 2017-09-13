var data = function(){
	return {
		general: {
			name: "Павел Маминов",
			race: "Человек",
			profession: [{
				name: "Программист",
				level: 7
			},
			{
				name: "Художник",
				level: 3
			}],
			alignment: "Lawful Good",
			location: "Москва",
			photo_url: "none yet"
		},
		job_history: [{
			name: "Инженер-программист",
			where: "НП \"Медэкоэргоцентр\"",
			began: new Date(2017, 6, 20).toString(),
			ended: "н.в.",
			workplace_description: "Организация на территории воинской части. Здесь готовили к полёту Лайку, Белку-и-Стрелку, Гагарина и других космонавтов. Здания старые, а оборудование – модернизируется.",
			job_description: "Мы работали над установкой в центрифугу диаметром пятнадцать метров и возрастом шестьдесят лет макета кабины самолёта Т-50. Моей изначальной задачей было создание ПО для управления скоростью вращения центрифуги, но по мере развития проекта мне пришлось администрировать\
							  физически разделённую сеть из более чем двадцати более-менее однотипных промышленных компьютеров под управлением Windows.",
			related_skills: ["C#", "System Administration", "Teamwork"]
		},
		{
			name: "Младший Java разработчик",
			where: "Кое-где",
			began: new Date(2016, 6).toString(),
			ended: new Date(2017, 4).toString(),
			workplace_description: "Подработка в обход трудового законодательства России.",
			job_description: "Мне необходимо было разработать серверную часть определённого сервиса, работая в команде frontend- и Android-разработчиков.",
			related_skills: ["Java", "Spring", "Teamwork"]
		}],
		education_history: {
			primary: [{
			name: "Системный архитектор",
			where: "НОЦ \"Технопарк\"",
			began: "~2015",
			ended: "лето 2017",
			description: "Двухлетнее обучение по примерно 200 академических часов в семестре от крутых людей из Mail.Ru и не только.",
			proof_url: "too lazy to add",
			photo_urls: ["diploma_side_1", "diploma_side_2"]
		},
		{
			name: "Бауманец",
			where: "МГТУ им. Н. Э. Баумана",
			began: "2013",
			ended: "2017",
			description: "Бакалавр с кафедры ИУ6 \"Компьютерные системы и сети\". Изучали 60% программирования, 25% микроконтроллеров и схемотехники и 15% администрирования сетей. Дипломную работу по распознаванию лиц и использованием нейронных сетей защитил на \"отлично\".",
			proof_url: null,
			photo_urls: ["diploma_side_1", "diploma_side_2", "diploma_side_3", "diploma_side_etc"]
		}],
		secondary:[{
			name: "CUDA и машинное обучение~",
			name: "НОЦ \"Технопарк\"",
			began: "~2016",
			ended: "~2016",
			description: "Полгода введения в машинное обучение и, попутно, программирование на CUDA",
			proof_url: "too lazy to add",
			photo_urls: ["diploma_side_1"]
		},
		{
			name: "Введение в геймдизайн",
			where: "Универсариум",
			began: "~2016",
			ended: "~2016",
			description: "Полгода введения в азы геймдизайна.",
			proof_url: "too lazy to add",
			photo_urls: ["diploma_side_1"]
		},
		{
			name: "Выпускник",
			where: "Экономическая школа-лицей",
			began: "~2001",
			ended: "~2013",
			description: "Школа. Окончил с серебряной медалью.",
			proof_url: "too lazy to add",
			photo_urls: ["diploma_side_1"]
		}]},
		skills:{
			programming:{
				description: "Сводка языков программирования, которыми я владею.",
				skill_sets: [{
					general_name: "C#",
					level: 30,
					date_started: new Date(2016),
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
					general_name: "C++",
					level: 40,
					date_started: new Date(2013),
					subskills: [{
						name: "stdlib",
						level: 30
					}]
				},
				{
					general_name: "Java",
					level: 50,
					date_started: new Date(2014),
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
					general_name: "Javascript",
					level: 10,
					date_started: new Date(2014),
					subskills: [{
						name: "Vue.js",
						level: 30
					},
					{
						name: "Ненависть",
						level: 60
					}]
				}]
			},
			design:[],
			general:[],
			other:[]
		}
	}
}