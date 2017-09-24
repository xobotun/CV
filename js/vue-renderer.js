﻿Vue.component('about-developer', {
	props: [
		'name',
		'race',
		'gender',
		'birthday',
		'age',
		'professions',
		'alignment',
		'location',
		'photo_url'
	],
	template: 	'<div>\
					{{name}}\
					<br/>\
					{{race}}, {{gender}}, {{age}}, {{alignment}}, <span v-for="profession in professions">{{profession.name}}({{profession.level}})/</span>\
					<br/>\
					{{photo_url}}\
					<br/>\
					{{location}}\
				</div>'
})

Vue.component('work-place', {
	props: [
		'name',
		'where',
		'began',
		'ended',
		'experience',
		'workplace_description',
		'job_description',
		'related_skills'
	],
	template: 	'<div>\
					{{name}}@{{where}}\
					<br/>\
					From {{began}} till {{ended}}: {{experience}}\
					<br/>\
					{{workplace_description}}\
					<br/>\
					{{job_description}}\
					<br/>\
					<span v-for="skill in related_skills">{{skill}} </span>\
				</div>'
})

Vue.component('education-place', {
	props: [
		'name',
		'where',
		'began',
		'ended',
		'length',
		'description',
		'proof_url',
		'photo_urls'
	],
	template: 	'<div>\
					{{name}}@{{where}}\
					<br/>\
					From {{began}} till {{ended}}: {{length}}\
					<br/>\
					{{description}}\
					<span v-if="proof_url"><br/>{{proof_url}}</span>\
					<br/>\
					<span v-for="url in photo_urls">{{url}} </span>\
				</div>'
})

Vue.component('skill', {
	props: [
		'name',
		'level',
		'max_skill_level' // Even though it is constant, I have to declare it. Nevermind.
	],
	template: 	'<div>\
					{{name}}\
					<br/>\
					{{level}}/{{max_skill_level}}\
				</div>'
})

Vue.component('skillset', {
	props: [
		'name',
		'level',
		'began',
		'subskills',
		'max_skill_level'
	],
	template: 	'<div>\
					{{name}}\
					<br/>\
					From {{began}}\
					<br/>\
					{{level}}/{{max_skill_level}}\
					<br/>\
					<skill v-for="subskill in subskills" v-bind="subskill"></skill>\
				</div>'
})

Vue.component('skill-family', {
	props: [
		'name',
		'description',
		'skillsets',
	],
	template: 	'<div>\
					{{name}}\
					<br/>\
					{{description}}\
					<br/>\
					<skillset v-for="skillset in skillsets" v-bind="skillset"></skillset>\
				</div>'
})

var view_model = new Vue({
	el: '#wrapper',
	/*data: {
		message: 
			'<div class="section">'+
				'<section>' +
					'<div class="section__header">' +
						'<header>' +
							'SectionName' +
						'</header>' +
					'</div>' +
					'<div class="section__contents">' +
						'Section contents are long enough. There should be spoilers and simply lots of text.' +
						'<br/>' +
						'Nevertheless, it should display correctly, otherwise I will be hated.' +
						'<br/>' +
						'So, even if I were to use &lt;br&gt; tags, it will be weird.' +
						'<br/>' +
						'<br/>' +
						'I suppose I\'d better use table design. Or table-design-over-CSS if possible. Da cause it\'s modern. Probably.' +
					'</div>' +
				'</section>' +
			'</div>'
	}*/
	data: preprocessed_data
})