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
					<img class="bio__photo_self" v-bind:src="photo_url"\
					/><div class="bio">\
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
		'began_text',
		'ended_text',
		'experience',
		'workplace_description',
		'job_description',
		'related_skills'
	],
	template: 	'<div>\
					<header class="entry__header">\
						<span class="entry__header_qualification">{{name}}</span><span class="entry__header_location anything__that_has_title_attribute" v-bind:title="workplace_description">{{where}}</span>\
						<br v-if="experience"><time class="anything__that_has_title_attribute" v-if="experience" v-bind:title="\'С \' + began_text + \' по \' + ended_text">{{experience}}</time>\
					</header>\
					{{job_description}}\
					<br/>\
					<span class="entry__skills_list">Навыки:<span v-for="skill in related_skills" class="entry__skills_list__item">{{skill}} </span></span>\
				</div>'
})

Vue.component('education-place', {
	props: [
		'name',
		'where',
		'began_text',
		'ended_text',
		'length',
		'description',
		'proof_url',
		'photo_urls'
	],
	template: 	'<div>\
					<header class="entry__header">\
						<span class="entry__header_qualification">{{name}}</span><span class="entry__header_location">{{where}}</span>\
						<br v-if="length"><time class="anything__that_has_title_attribute entry__header_undertext" v-if="length" v-bind:title="\'С \' + began_text + \' по \' + ended_text">{{length}}</time>\
						<a v-if="proof_url" v-bind:href="proof_url" class="entry__header_undertext">Подтверждение</a>\
					</header>\
					{{description}}\
					<br/>\
					<img v-for="url in photo_urls" v-bind:src="url" class="section__photo"/>\
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
					<span class="subskill__name">{{name}}</span>\
					<percentage-bar v-bind:level="level" class="percentage_bar_subskill"></percentage-bar>\
				</div>'
})

Vue.component('skillset', {
	props: [
		'name',
		'level',
		'experience',
		'subskills',
		'max_skill_level',
		'is_spoiler_open'
	],
	template: 	'<div class="skill_list__item">\
					<span>{{name}}</span>\
					<percentage-bar v-bind:level="level"></percentage-bar>\
					<br><time class="entry__header_undertext">{{experience}}</time>\
					<a href="javascript:;" class="entry__header_undertext link_that_leads_to_the_same_page" v-on:click="is_spoiler_open = !is_spoiler_open" v-if="subskills.length > 0">Подробности</a>\
					<transition name="spoiler">\
						<div v-show="is_spoiler_open" class="spoiler" v-if="subskills.length > 0">\
							<skill v-for="subskill in subskills" v-bind="subskill"></skill>\
						</div>\
					</transition>\
				</div>'
})

Vue.component('skill-family', {
	props: [
		'name',
		'description',
		'skillsets',
	],
	template: 	'<div>\
					<header class="entry__header">\
						<span class="entry__header_qualification anything__that_has_title_attribute" v-bind:title="description">{{name}}</span>\
					</header>\
					<skillset v-for="skillset in skillsets" v-bind="skillset"></skillset>\
				</div>'
})

Vue.component('book-read', {
	props: [
		'name',
		'author',
		'description',
		'photo_urls'
	],
	template: 	'<div>\
					<header class="entry__header">\
						<span class="entry__header_qualification">{{name}}</span><br/><span class="entry__header_location entry__header_undertext">{{author}}</span>\
					</header>\
					{{description}}\
					<br/>\
					<span v-for="url in photo_urls">{{url}} </span>\
				</div>'
})

var view_model = new Vue({
	el: '#wrapper',
	data: preprocessed_data,
	methods: {
		hide_photo_enlarger: function() {
			this.is_photo_enlarger_active = false;
		},
		show_photo_enlarger: function() {
			this.is_photo_enlarger_active = true;
		}
	}
})