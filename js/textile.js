// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------

$table_open = "|_.  heading 1 |_.  heading 2 |_. heading 3|\n ";
$table_close = "| row 1 | row 1| row 1 | \n | row 2 | row 2 | row 2 |";
myTextileSettings = {
    nameSpace:           "textile", // Useful to prevent multi-instances CSS conflict
    previewParserPath:   "~/sets/textile/preview.php",
    onShiftEnter:        {keepDefault:false, replaceWith:'\n\n'},
    markupSet: [
        {name:'Link', openWith:'"', closeWith:'":[![Link:!:http://]!]', placeHolder:'Your text to link here...' },
        {name:'Italic', key:'I', closeWith:'_', openWith:'_'},
        {name:'Bold', key:'B', closeWith:'*', openWith:'*'},
        {name:'Strikethrough', key:'S', closeWith:'-', openWith:'-'},
        /*{name:'Heading 1', key:'1', openWith:'h1(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {name:'Heading 2', key:'2', openWith:'h2(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {name:'Heading 3', key:'3', openWith:'h3(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {name:'Heading 4', key:'4', openWith:'h4(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {name:'Heading 5', key:'5', openWith:'h5(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {name:'Heading 6', key:'6', openWith:'h6(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
        {separator:'---------------' },*/
        /*{separator:'---------------' },
        {name:'Bulleted list', openWith:'(!(* |!|*)!)'},
        {name:'Numeric list', openWith:'(!(# |!|#)!)'},
        {separator:'---------------' },*/
        {table:'table',openWith:$table_open,closeWith:$table_close},
    ]
}
