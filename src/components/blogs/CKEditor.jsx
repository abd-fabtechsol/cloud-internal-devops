import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiClient from "../../api/apiClient"
const API_URL = process.env.REACT_APP_BASE_URL+"BlogFile/";
const token=localStorage.getItem('token')
console.log(token,"dssfsf")
const MyCKEditor = ({ data, onChange }) => {
  
    function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file) => {
                body.append("file", file);
                // let headers = new Headers();
                // headers.append("Origin", "http://localhost:3000");
         apiClient.post("/BlogFile/",body)
                  .then((res) => {
                    resolve({
                      default: res.file
                    });
                  })
                  .catch((err) => {
                    reject(err);
                  });
              });
            });
          }
        };
      }
      function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return uploadAdapter(loader);
        };
      }
//  const config= {
// 	plugins: [
// 		Alignment,
// 		Autoformat,
// 		AutoImage,
// 		AutoLink,
// 		BlockQuote,
// 		Bold,
// 		/* You must provide a valid token URL in order to use the CKBox application.
// 		After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// 		https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
// 		// CKBox,
// 		CloudServices,
// 		Code,
// 		CodeBlock,
// 		Essentials,
// 		ExportPdf,
// 		ExportWord,
// 		FindAndReplace,
// 		Font,
// 		GeneralHtmlSupport,
// 		Heading,
// 		Highlight,
// 		HorizontalLine,
// 		Image,
// 		ImageCaption,
// 		ImageInsert,
// 		ImageResize,
// 		ImageStyle,
// 		ImageToolbar,
// 		ImageUpload,
// 		Base64UploadAdapter,
// 		ImportWord,
// 		Indent,
// 		IndentBlock,
// 		Italic,
// 		Link,
// 		LinkImage,
// 		List,
// 		ListProperties,
// 		MediaEmbed,
// 		Mention,
// 		PageBreak,
// 		Paragraph,
// 		PasteFromOffice,
// 		PictureEditing,
// 		RemoveFormat,
// 		SpecialCharacters,
// 		SpecialCharactersEmoji,
// 		SpecialCharactersEssentials,
// 		Strikethrough,
// 		Style,
// 		Subscript,
// 		Superscript,
// 		Table,
// 		TableCaption,
// 		TableCellProperties,
// 		TableColumnResize,
// 		TableProperties,
// 		TableToolbar,
// 		TextPartLanguage,
// 		TextTransformation,
// 		TodoList,
// 		Underline,
// 		UploadAdapter,
// 		WordCount,
// 		WProofreader
// 	],
// 	toolbar: {
// 		shouldNotGroupWhenFull: true,
// 		items: [
// 			// --- Document-wide tools ----------------------------------------------------------------------
// 			'undo',
// 			'redo',
// 			'|',
// 			'importWord',
// 			'exportWord',
// 			'exportPdf',
// 			'|',
// 			'findAndReplace',
// 			'selectAll',
// 			'wproofreader',
// 			'|',

// 			// --- "Insertables" ----------------------------------------------------------------------------

// 			'link',
// 			'insertImage',
// 			/* You must provide a valid token URL in order to use the CKBox application.
// 			After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// 			https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint*/
// 			// 'ckbox',
// 			'insertTable',
// 			'blockQuote',
// 			'mediaEmbed',
// 			'codeBlock',
// 			'pageBreak',
// 			'horizontalLine',
// 			'specialCharacters',
// 			'-',

// 			// --- Block-level formatting -------------------------------------------------------------------
// 			'heading',
// 			'style',
// 			'|',

// 			// --- Basic styles, font and inline formatting -------------------------------------------------------
// 			'bold',
// 			'italic',
// 			'underline',
// 			'strikethrough',
// 			{
// 				label: 'Basic styles',
// 				icon: 'text',
// 				items: [
// 					'fontSize',
// 					'fontFamily',
// 					'fontColor',
// 					'fontBackgroundColor',
// 					'highlight',
// 					'superscript',
// 					'subscript',
// 					'code',
// 					'|',
// 					'textPartLanguage',
// 					'|'
// 				]
// 			}, 'removeFormat',
// 			'|',

// 			// --- Text alignment ---------------------------------------------------------------------------
// 			'alignment',
// 			'|',

// 			// --- Lists and indentation --------------------------------------------------------------------
// 			'bulletedList',
// 			'numberedList',
// 			'todoList',
// 			'|',
// 			'outdent',
// 			'indent'
// 		]
// 	},
// 	exportPdf: {
// 		stylesheets: [
// 			'EDITOR_STYLES',
// 			'./content.css'
// 		],
// 		fileName: 'export-pdf-demo.pdf',
// 		appID: 'cke5-demos',
// 		converterOptions: {
// 			format: 'Tabloid',
// 			margin_top: '20mm',
// 			margin_bottom: '20mm',
// 			margin_right: '7mm',
// 			margin_left: '7mm',
// 			page_orientation: 'portrait'
// 		},
// 		tokenUrl: false
// 	},
// 	exportWord: {
// 		stylesheets: [
// 			'EDITOR_STYLES',
// 			'./content.css'
// 		],
// 		fileName: 'export-word-demo.docx',
// 		appID: 'cke5-demos',
// 		converterOptions: {
// 			format: 'A4',
// 			margin_top: '20mm',
// 			margin_bottom: '20mm',
// 			margin_right: '7mm',
// 			margin_left: '7mm'
// 		},
// 		tokenUrl: false
// 	},
// 	fontFamily: {
// 		supportAllValues: true
// 	},
// 	fontSize: {
// 		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
// 		supportAllValues: true
// 	},
// 	fontColor: {
// 		columns: 12,
// 		colors: REDUCED_MATERIAL_COLORS
// 	},
// 	fontBackgroundColor: {
// 		columns: 12,
// 		colors: REDUCED_MATERIAL_COLORS
// 	},
// 	heading: {
// 		options: [
// 			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
// 			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
// 			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
// 			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
// 			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
// 			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
// 			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
// 		]
// 	},
// 	htmlSupport: {
// 		allow: [
// 			// Enables all HTML features.
// 			{
// 				name: /.*/,
// 				attributes: true,
// 				classes: true,
// 				styles: true
// 			}
// 		],
// 		disallow: [
// 			{
// 				attributes: [
// 					{ key: /^on(.*)/i, value: true },
// 					{ key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
// 					{ key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
// 				]
// 			},
// 			{ name: 'script' }
// 		]
// 	},
// 	image: {
// 		styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
// 		resizeOptions: [
// 			{
// 				name: 'resizeImage:original',
// 				label: 'Default image width',
// 				value: null
// 			},
// 			{
// 				name: 'resizeImage:50',
// 				label: '50% page width',
// 				value: '50'
// 			},
// 			{
// 				name: 'resizeImage:75',
// 				label: '75% page width',
// 				value: '75'
// 			}
// 		],
// 		toolbar: [
// 			'imageTextAlternative', 'toggleImageCaption',
// 			'|',
// 			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side',
// 			'|',
// 			'resizeImage'
// 		],
// 		insert: {
// 			integrations: [ 'insertImageViaUrl' ]
// 		}
// 	},
// 	importWord: {
// 		tokenUrl: false,
// 		defaultStyles: true
// 	},
// 	list: {
// 		properties: {
// 			styles: true,
// 			startIndex: true,
// 			reversed: true
// 		}
// 	},
// 	link: {
// 		decorators: {
// 			toggleDownloadable: {
// 				mode: 'manual',
// 				label: 'Downloadable',
// 				attributes: {
// 					download: 'file'
// 				}
// 			}
// 		},
// 		addTargetToExternalLinks: true,
// 		defaultProtocol: 'https://'
// 	},
// 	mention: {
// 		feeds: [
// 			{
// 				marker: '@',
// 				feed: [
// 					{ id: '@cflores', avatar: 'm_1', name: 'Charles Flores' },
// 					{ id: '@gjackson', avatar: 'm_2', name: 'Gerald Jackson' },
// 					{ id: '@wreed', avatar: 'm_3', name: 'Wayne Reed' },
// 					{ id: '@lgarcia', avatar: 'm_4', name: 'Louis Garcia' },
// 					{ id: '@rwilson', avatar: 'm_5', name: 'Roy Wilson' },
// 					{ id: '@mnelson', avatar: 'm_6', name: 'Matthew Nelson' },
// 					{ id: '@rwilliams', avatar: 'm_7', name: 'Randy Williams' },
// 					{ id: '@ajohnson', avatar: 'm_8', name: 'Albert Johnson' },
// 					{ id: '@sroberts', avatar: 'm_9', name: 'Steve Roberts' },
// 					{ id: '@kevans', avatar: 'm_10', name: 'Kevin Evans' },
// 					{ id: '@vxiques', avatar: 'm_11', name: 'Vincent Xiques' },
// 					{ id: '@jzaldivar', avatar: 'm_12', name: 'Jack Zaldivar' },
// 					{ id: '@tfoxworth', avatar: 'm_13', name: 'Thomas Foxworth' },
// 					{ id: '@phendrix', avatar: 'm_14', name: 'Peter Hendrix' },
// 					{ id: '@pthaxton', avatar: 'm_15', name: 'Philip Thaxton' },
// 					{ id: '@mwilson', avatar: 'w_1', name: 'Mildred Wilson' },
// 					{ id: '@mnelson', avatar: 'w_2', name: 'Melissa Nelson' },
// 					{ id: '@kallen', avatar: 'w_3', name: 'Kathleen Allen' },
// 					{ id: '@myoung', avatar: 'w_4', name: 'Mary Young' },
// 					{ id: '@arogers', avatar: 'w_5', name: 'Ashley Rogers' },
// 					{ id: '@dgriffin', avatar: 'w_6', name: 'Debra Griffin' },
// 					{ id: '@dwilliams', avatar: 'w_7', name: 'Denise Williams' },
// 					{ id: '@ajames', avatar: 'w_8', name: 'Amy James' },
// 					{ id: '@randerson', avatar: 'w_9', name: 'Ruby Anderson' },
// 					{ id: '@wlee', avatar: 'w_10', name: 'Wanda Lee' },
// 					{ id: '@yquick', avatar: 'w_11', name: 'Yasmin Quick' },
// 					{ id: '@bzappaterra', avatar: 'w_12', name: 'Beatrice Zappaterra' },
// 					{ id: '@zquigley', avatar: 'w_13', name: 'Zoe Quigley' },
// 					{ id: '@pfabozzi', avatar: 'w_14', name: 'Patrizia Fabozzi' },
// 					{ id: '@vquimby', avatar: 'w_15', name: 'Victoria Quimby' },
// 				],
// 				minimumCharacters: 1,
// 				itemRenderer: customMentionUserItemRenderer
// 			},
// 			{
// 				marker: '#',
// 				feed: [
// 					'#american', '#asian', '#baking', '#breakfast', '#cake', '#caribbean',
// 					'#chinese', '#chocolate', '#cooking', '#dairy', '#delicious', '#delish',
// 					'#dessert', '#desserts', '#dinner', '#eat', '#eating', '#eggs', '#fish',
// 					'#food', '#foodie', '#foods', '#french', '#fresh',
// 					'#fusion', '#glutenfree', '#greek', '#grilling', '#halal', '#homemade',
// 					'#hot', '#hungry', '#icecream', '#indian', '#italian', '#japanese', '#keto',
// 					'#korean', '#lactosefree', '#lunch', '#meat', '#mediterranean', '#mexican',
// 					'#moroccan', '#nom', '#nomnom', '#paleo', '#poultry', '#snack', '#spanish',
// 					'#sugarfree', '#sweet', '#sweettooth', '#tasty', '#thai', '#vegan',
// 					'#vegetarian', '#vietnamese', '#yum', '#yummy'
// 				]
// 			}
// 		]
// 	},
// 	placeholder: 'Type or paste your content here!',
// 	style: {
// 		definitions: [
// 			{
// 				name: 'Title',
// 				element: 'h1',
// 				classes: [ 'document-title' ]
// 			},
// 			{
// 				name: 'Subtitle',
// 				element: 'h2',
// 				classes: [ 'document-subtitle' ]
// 			},
// 			{
// 				name: 'Callout',
// 				element: 'p',
// 				classes: [ 'callout' ]
// 			},
// 			{
// 				name: 'Side quote',
// 				element: 'blockquote',
// 				classes: [ 'side-quote' ]
// 			},
// 			{
// 				name: 'Needs clarification',
// 				element: 'span',
// 				classes: [ 'needs-clarification' ]
// 			},
// 			{
// 				name: 'Wide spacing',
// 				element: 'span',
// 				classes: [ 'wide-spacing' ]
// 			},
// 			{
// 				name: 'Small caps',
// 				element: 'span',
// 				classes: [ 'small-caps' ]
// 			},
// 			{
// 				name: 'Code (dark)',
// 				element: 'pre',
// 				classes: [ 'stylish-code', 'stylish-code-dark' ]
// 			},
// 			{
// 				name: 'Code (bright)',
// 				element: 'pre',
// 				classes: [ 'stylish-code', 'stylish-code-bright' ]
// 			}
// 		]
// 	},
// 	table: {
// 		contentToolbar: [
// 			'tableColumn',
// 			'tableRow',
// 			'mergeTableCells',
// 			'tableProperties',
// 			'tableCellProperties',
// 			'toggleTableCaption'
// 		]
// 	},
// 	wproofreader: {
// 		// serviceId: 'your-service-ID', // WProofreader: required for the Cloud version only.
// 		lang: 'auto',
// 		srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
// 		autoStartup: false
// 	},
// 	/* You must provide a valid token URL in order to use the CKBox application.
// 	After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// 	https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
// 	// ckbox: {
// 	// 	tokenUrl: 'https://your.token.url'
// 	// }
// }
    const editorConfig = {
        // You can include more customization here if needed
        // For the ClassicEditor build, most common features are already included
        // For advanced customizations, refer to CKEditor documentation
        // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html

        // toolbar: ['heading',
        //     '|',
        //     'bold',
        //     'italic',
        //     'underline',
        //     'strikethrough',
        //     'link',
        //     '|',
        //     "linkimage",
        //     "|",
        //     'bulletedList',
        //     'numberedList',
        //     '|',
        //     'undo',
        //     'redo'],
            extraPlugins: [uploadPlugin],
        height: "1000px"
    };
    return (
        <CKEditor
            config={editorConfig}
            editor={ClassicEditor}
            onReady={(editor) => {}}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
            data={data}
            onChange={onChange}
        />
    );
};


export default MyCKEditor;