Vue.component('about-developer', {
	props: [
		'name',
		'race',
		'gender',
		'birthday',
		'age',
		'professions_list',
		'alignment',
		'location',
		'photo_url'
	],
	template: 	'<div>\
					<img class="bio__photo_self" v-bind:src="photo_url"></img>\
					<div class="bio">\
						<span class="bio__name">{{name}}</span>\
						<br/>\
						<span class="bio__description">\
							{{race}}, {{gender}}, {{age}}, {{alignment}}<br/>\
							{{professions_list}}\
							<br/>\
							{{location}}\
						</span>\
					</div>\
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
					<header class="entry__header">\
						<span class="entry__header_qualification">{{name}}</span><span class="entry__header_location anything__that_has_title_attribute" v-bind:title="workplace_description">{{where}}</span>\
						<br v-if="experience"><time class="anything__that_has_title_attribute" v-if="experience" v-bind:title="\'С \' + began + \' по \' + ended">{{experience}}</time>\
					</header>\
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
					<header class="entry__header">\
						<span class="entry__header_qualification">{{name}}</span><span class="entry__header_location">{{where}}</span>\
						<br v-if="length"><time class="anything__that_has_title_attribute" v-if="length" v-bind:title="\'С \' + began + \' по \' + ended">{{length}}</time>\
					</header>\
					{{description}}\
					<span v-if="proof_url"><br/>{{proof_url}}</span>\
					<br/>\
					<span v-for="url in photo_urls">{{url}} </span>\
				</div>'
})

Vue.component('percentage-bar', {
	props: [
		'level',
		'max_skill_level'
	],
	template: '<div class="percentage_bar"><div class="percentage_bar__filling" v-bind:style="\'width:\' + level + \'%\'"></div></div>'
})

Vue.component('skill', {
	props: [
		'name',
		'level',
		'max_skill_level' // Even though it is constant, I have to declare it. Nevermind.
	],
	template: 	'<div class="skill_list__subskills_list_item">\
					<span>{{name}}</span>\
					<percentage-bar v-bind:level="level"></percentage-bar>\
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
	template: 	'<div class="skill_list__item">\
					<span>{{name}}</span>\
					<percentage-bar v-bind:level="level"></percentage-bar>\
					<br><time class="anything__that_has_title_attribute" v-bind:title="\'С \' + began">{{began}}</time>\
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
	data: preprocessed_data
})