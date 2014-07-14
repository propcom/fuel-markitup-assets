var bb={
	init:function(){
		$('.bbcode-area').markItUp({
			nameSpace:"textile", // Useful to prevent multi-instances CSS conflict
			onShiftEnter:{keepDefault:false, replaceWith:'\n\n'},
			markupSet:[
				{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
				{name:'Italic',key:'I',closeWith:'[/i]',openWith:'[i]'},
				{name:'Bold',key:'B',closeWith:'[/b]',openWith:'[b]'},
// 				{name:'Heading 6',key:'6',closeWith:'[h6]',openWith:'[h6]',placeHolder:'Your title here...' },
// 				{name:'Heading 5',key:'5',closeWith:'[h5]',openWith:'[h5]',placeHolder:'Your title here...' },
// 				{name:'Heading 4',key:'4',closeWith:'[h4]',openWith:'[h4]',placeHolder:'Your title here...' },
				{name:'H3',key:'3',closeWith:'[h3]',openWith:'[h3]',placeHolder:'Your title here...' },
				{name:'H2',key:'2',closeWith:'[h2]',openWith:'[h2]',placeHolder:'Your title here...' },
// 				{name:'Heading 1',key:'1',closeWith:'[h1]',openWith:'[h1]',placeHolder:'Your title here...' },
// 				{separator:'---------------' },
// 				{separator:'---------------' },
// 				{name:'Bulleted list', openWith:'(!(* |!|*)!)'},
// 				{name:'Numeric list', openWith:'(!(# |!|#)!)'},
// 				{separator:'---------------' },
			]
		});

		$('.markItUpButton1 a').html('<i class="icon-link"></i>');
		$('.markItUpButton2 a').html('<i class="icon-italic"></i>');
		$('.markItUpButton3 a').html('<i class="icon-bold"></i>');
// 		$('.markItUpButton4 a').html('<i class="icon-thumbs-down"></i>');
// 		$('.markItUpButton5 a').html('<i class="icon-thumbs-down"></i>');
	},
}

$(bb.init());
