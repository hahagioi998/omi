import{W as o,h as r,t as e,s as t,b as i}from"./vendor.645fedc0.js";var d=Object.defineProperty,a=Object.getOwnPropertyDescriptor;let n=class extends o{installed(){const o=new bytemd.Editor({target:this.shadowRoot.querySelector("#md"),props:{value:"## Markdown Basic Syntax\r\n\r\nI just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type `nano`.\r\n\r\nMy favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).\r\n\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n\r\n> Dorothy followed her through many of the beautiful rooms in her castle.\r\n\r\n```js\r\nimport { Editor, Viewer } from 'bytemd';\r\nimport gfm from '@bytemd/plugin-gfm';\r\n\r\nconst plugins = [\r\n  gfm(),\r\n  // Add more plugins here\r\n];\r\n\r\nconst editor = new Editor({\r\n  target: document.body, // DOM to render\r\n  props: {\r\n    value: '',\r\n    plugins,\r\n  },\r\n});\r\n\r\neditor.on('change', (e) => {\r\n  editor.$set({ value: e.detail.value });\r\n});\r\n```\r\n\r\n## GFM Extended Syntax\r\n\r\nAutomatic URL Linking: https://github.com/bytedance/bytemd\r\n\r\n~~The world is flat.~~ We now know that the world is round.\r\n\r\n- [x] Write the press release\r\n- [ ] Update the website\r\n- [ ] Contact the media\r\n\r\n| Syntax    | Description |\r\n| --------- | ----------- |\r\n| Header    | Title       |\r\n| Paragraph | Text        |\r\n\r\n## Footnotes\r\n\r\nHere's a simple footnote,[^1] and here's a longer one.[^bignote]\r\n\r\n[^1]: This is the first footnote.\r\n[^bignote]: Here's one with multiple paragraphs and code.\r\n\r\n    Indent paragraphs to include them in the footnote.\r\n\r\n    `{ my code }`\r\n\r\n    Add as many paragraphs as you like.\r\n",plugins:[]}});o.$on("change",(r=>{o.$set({value:r.detail.value})}))}render(){return r("div",{class:e``},r("div",{id:"md"}))}};n.css=[t.target,'.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:transparent}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}.cm-animate-fat-cursor,.cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}.CodeMirror-lint-markers{width:16px}.CodeMirror-lint-tooltip{background-color:#ffd;border:1px solid #000;border-radius:4px 4px 4px 4px;color:#000;font-family:monospace;font-size:10pt;overflow:hidden;padding:2px 5px;position:fixed;white-space:pre;white-space:pre-wrap;z-index:100;max-width:600px;opacity:0;transition:opacity .4s;-moz-transition:opacity .4s;-webkit-transition:opacity .4s;-o-transition:opacity .4s;-ms-transition:opacity .4s}.CodeMirror-lint-mark{background-position:0 100%;background-repeat:repeat-x}.CodeMirror-lint-mark-warning{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=")}.CodeMirror-lint-mark-error{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==")}.CodeMirror-lint-marker{background-position:50%;background-repeat:no-repeat;cursor:pointer;display:inline-block;height:16px;width:16px;vertical-align:middle;position:relative}.CodeMirror-lint-message{padding-left:18px;background-position:0 0;background-repeat:no-repeat}.CodeMirror-lint-marker-warning,.CodeMirror-lint-message-warning{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=")}.CodeMirror-lint-marker-error,.CodeMirror-lint-message-error{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=")}.CodeMirror-lint-marker-multiple{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-position:100% 100%;width:100%;height:100%}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,8,16,.15);color:#333;box-shadow:0 4px 14px -2px rgba(0,8,16,.08)}.tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.tippy-box[data-theme~=light-border]>.tippy-arrow:after,.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0,8,16,.2);border-width:7px 7px 0;top:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0,8,16,.2);border-width:0 7px 7px;bottom:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0,8,16,.2);border-width:7px 0 7px 7px;left:17px;top:1px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0,8,16,.2)}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.bytemd{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#24292e;border:1px solid #e1e4e8;background-color:#fff;height:300px}.bytemd,.bytemd *{box-sizing:border-box}.bytemd-hidden{display:none!important}.bytemd .CodeMirror-gutter,.bytemd .CodeMirror-gutters,.bytemd .CodeMirror-linenumber,.bytemd .CodeMirror-scroll,.bytemd .CodeMirror-sizer{box-sizing:content-box}.bytemd .CodeMirror,.bytemd code,.bytemd kbd{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.bytemd-toolbar{padding:4px 12px;border-bottom:1px solid #e1e4e8;background-color:#fafbfc;user-select:none;overflow:hidden}.bytemd-toolbar-left{float:left}.bytemd-toolbar-right{float:right}.bytemd-toolbar-tab{display:inline-block;cursor:pointer;padding-left:8px;padding-right:8px;line-height:24px;font-size:14px}.bytemd-toolbar-tab-active{color:#0366d6}.bytemd-toolbar-icon{display:inline-block;vertical-align:top;cursor:pointer;border-radius:4px;margin-left:6px;margin-right:6px}.bytemd-toolbar-icon img,.bytemd-toolbar-icon svg{display:block;padding:4px;width:24px;height:24px}.bytemd-toolbar-icon:hover{background-color:#e1e4e8}.bytemd-toolbar-icon-active{color:#0366d6}.bytemd-toolbar .tippy-content{padding-left:0;padding-right:0}.bytemd-dropdown{max-height:300px;overflow:auto;font-size:14px}.bytemd-dropdown-title{margin:0 12px;font-weight:500;border-bottom:1px solid #e1e4e8;line-height:32px;color:#444d56}.bytemd-dropdown-item{padding:4px 12px;height:32px;cursor:pointer}.bytemd-dropdown-item:hover{background-color:#f6f8fa}.bytemd-dropdown-item-icon{display:inline-block}.bytemd-dropdown-item-icon svg{display:block;padding:4px;width:24px;height:24px}.bytemd-dropdown-item-title{display:inline-block;line-height:24px;vertical-align:top}.bytemd-body{height:calc(100% - 58px);overflow:auto}.bytemd-editor{display:inline-block;vertical-align:top;height:100%;overflow:hidden}.bytemd-editor .CodeMirror{height:100%;font-size:14px;line-height:1.5}.bytemd-editor .CodeMirror pre.CodeMirror-placeholder{color:#959da5}.bytemd-editor .CodeMirror .CodeMirror-lines{max-width:800px;margin:0 auto;padding:16px 0}.bytemd-editor .CodeMirror pre.CodeMirror-line,.bytemd-editor .CodeMirror pre.CodeMirror-line-like{padding:0 4%}.bytemd-preview{display:inline-block;vertical-align:top;height:100%;overflow:auto}.bytemd-preview .markdown-body{max-width:800px;margin:0 auto;padding:16px 4%}.bytemd-sidebar{display:inline-block;vertical-align:top;height:100%;overflow:auto;font-size:16px;border-left:1px solid #e1e4e8;width:280px;position:relative;padding:0 16px}.bytemd-sidebar-close{position:absolute;padding:16px;top:0;right:0;cursor:pointer}.bytemd-sidebar-close:hover{color:#0366d6}.bytemd-sidebar h2{font-size:16px;font-weight:600;margin:32px 0 16px}.bytemd-sidebar ul{padding-left:0;color:#959da5}.bytemd-help{font-size:13px}.bytemd-help ul{line-height:20px}.bytemd-help ul svg{width:16px;height:16px;display:block}.bytemd-help ul div{display:inline-block;vertical-align:top}.bytemd-help li{list-style:none;margin-bottom:12px}.bytemd-help-icon{padding:2px 0}.bytemd-help-title{padding-left:8px}.bytemd-help-content{float:right;font-size:12px}.bytemd-toc li{list-style:none;margin-bottom:4px;font-size:14px;line-height:2;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bytemd-toc-active{color:#0366d6;background-color:#f6f8fa}.bytemd-toc-first{font-weight:500}.bytemd-status{font-size:12px;line-height:24px;border-top:1px solid #e1e4e8;user-select:none}.bytemd-status-left{float:left}.bytemd-status-left span{padding-left:16px}.bytemd-status-left strong{font-weight:600}.bytemd-status-right{float:right}.bytemd-status-right label,.bytemd-status-right span{margin-right:16px;cursor:pointer}.bytemd-status-right span:hover{color:#0366d6}.bytemd-status-right input{vertical-align:middle;margin-right:3px}.bytemd-status-error{color:#d73a49}.bytemd-fullscreen.bytemd{position:fixed;left:0;right:0;top:0;bottom:0;border:none;height:100vh!important}.bytemd-split .bytemd-preview{border-left:1px solid #e1e4e8}.tippy-box{font-size:12px}','\n  .bytemd {\n    height: calc(100vh - 88px);\n  }\n\n  .bytemd-fullscreen.bytemd {\n    z-index: 100;\n}\n\n  .markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}\n  '],n=((o,r,e,t)=>{for(var i,n=t>1?void 0:t?a(r,e):r,l=o.length-1;l>=0;l--)(i=o[l])&&(n=(t?i(r,e,n):i(n))||n);return t&&n&&d(r,e,n),n})([i("md-editor")],n);export default n;
