var bb = {
	init:function(){
		$('.bbcode-area').markItUp({
			nameSpace:"textile", // Useful to prevent multi-instances CSS conflict
			onShiftEnter:{keepDefault:false, replaceWith:'\n\n'},
			markupSet:[
				{name:'Link', key:'L', openWith:'[url="[![Url]!]"]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
				{name:'Email', key:'E', openWith:'[email="[![Email]!]"]', closeWith:'[/email]', placeHolder:'Your text to link here...'},
				{name:'Italic',key:'I',closeWith:'[/i]',openWith:'[i]'},
				{name:'Bold',key:'B',closeWith:'[/b]',openWith:'[b]'},
				{name:'H3',key:'3',closeWith:'[/h3]',openWith:'[h3]',placeHolder:'Your title here...' },
				{name:'H2',key:'2',closeWith:'[/h2]',openWith:'[h2]',placeHolder:'Your title here...' },
				{name:'table',key:'tb',closeWith:'[/h2]',openWith:'[h2]',placeHolder:'Your title here...' },
			]
		});
		$('.markItUpButton1 a').html('<i class="icon-link"></i>');
		$('.markItUpButton2 a').html('<i class="icon-envelope"></i>');
		$('.markItUpButton3 a').html('<i class="icon-italic"></i>');
		$('.markItUpButton4 a').html('<i class="icon-bold"></i>');
		$('.markItUpButton5 a').html('<i class="icon-table"></i>');
	},
}
$(bb.init());