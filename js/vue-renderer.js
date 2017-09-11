﻿Vue.component('education-place', {
	props: [
		'name',
		'where',
		'began',
		'ended',
		'description'
	],
	template: 	'<div class="section__contents">\
					{{name}}@{{where}}\
					<br/>\
					From {{began}} till {{ended}}\
					<br/>\
					{{description}}\
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
	data: data
})