(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"102a":function(t,e,n){"use strict";n("cf92")},"200e":function(t,e,n){"use strict";n("d2e2")},"27ce":function(t,e,n){"use strict";n("655a")},"4a80":function(t,e,n){},"4ca4":function(t,e,n){"use strict";n("8cbe")},5040:function(t,e,n){"use strict";n("7427")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticStyle:{"background-color":"#263238"}},[n("navigation-drawer",{attrs:{"tag-object":t.organizedNotes},on:{change:function(e){t.currentTab=e},create:function(e){t.defaultEditTag=e}},model:{value:t.drawerValue,callback:function(e){t.drawerValue=e},expression:"drawerValue"}}),n("app-bar",{attrs:{"editor-object":t.editor,"view-edit-tools":t.editMode,"remove-tab":t.removeTab,"all-notes":t.organizedNotes},on:{"update:viewEditTools":function(e){t.editMode=e},"update:view-edit-tools":function(e){t.editMode=e},"update:removeTab":function(e){t.removeTab=e},"update:remove-tab":function(e){t.removeTab=e}},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),n("v-main",{staticClass:"h-100 overflow-auto"},[n("v-progress-linear",{attrs:{color:"teal accent-3",value:t.progress.value,active:t.progress.active,absolute:""}}),n("work-environment",{attrs:{"edit-mode":t.editMode,"default-edit-tag":t.defaultEditTag,tags:t.tags},on:{"update:editMode":function(e){t.editMode=e},"update:edit-mode":function(e){t.editMode=e},"update:defaultEditTag":function(e){t.defaultEditTag=e},"update:default-edit-tag":function(e){t.defaultEditTag=e},modify:t.modifyNote,"remove-note":t.removeNote},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),t.desktopBreakpoint?t._e():n("v-btn",{staticClass:"rounded-r-circle green accent-3 my-4 ml-n2",staticStyle:{bottom:"0",position:"fixed"},attrs:{color:"black",elevation:"2",icon:"",small:"",tile:""},on:{click:function(e){t.drawerValue=!0}}},[n("v-icon",{staticStyle:{position:"relative",right:"-2px"}},[t._v(" mdi-chevron-right ")])],1)],1)],1)},o=[],r=n("1da1"),s=(n("96cf"),n("7db0"),n("0481"),n("07ac"),n("caad"),n("2532"),n("99af"),n("c740"),n("4de4"),n("b64b"),n("cd42")),c=n("f23d"),l=n("e013"),u=n.n(l),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{color:"blue-grey darken-3",app:"",dark:"",dense:"","hide-on-scroll":""}},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInDown position-absolute pr-8","leave-active-class":"animate__animated animate__fadeOutUp position-absolute pr-8"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.viewEditTools,expression:"!viewEditTools"}],staticClass:"app-bar"},[n("v-tabs",{staticClass:"tabs",attrs:{"background-color":"blue-grey darken-3",height:"1.5rem","active-class":"accent-3 text--darken-4","hide-slider":"","fixed-tabs":"","show-arrows":""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabs,(function(e){return n("transition",{key:e.id,attrs:{name:"tab",appear:"","appear-active-class":"tab-appear-active"}},[n("v-tab",{staticClass:"\n\t\t\t\t\t\ttab rounded green lighten-2 ml-1\n\t\t\t\t\t\tgrey--text text--darken-2 px-0\n\t\t\t\t\t\ttext-none justify-space-between",attrs:{ripple:!1},on:{click:function(n){return t.$emit("change",e.value)}}},[n("div",{staticClass:"tab-content"},[n("v-icon",{attrs:{color:"blue-grey darken-4",small:""}},[t._v(" "+t._s(e.icon)+" ")]),n("span",{staticClass:"text-truncate tab-text"},[t._v(" "+t._s(e.text)+" ")])],1),n("v-btn",{attrs:{color:"grey darken-4 mr-2",icon:"","x-small":""},on:{click:function(n){t.tabs={value:e.value,rm:!0}}}},[n("v-icon",{attrs:{"x-small":""}},[t._v(" mdi-close ")])],1)],1)],1)})),1),n("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(e){t.tabs={value:"home",rm:!1}}}},[n("v-icon",{attrs:{dense:""}},[t._v(" mdi-home-outline ")])],1)],1)]),n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInDown position-absolute pr-8","leave-active-class":"animate__animated animate__fadeOutUp position-absolute pr-8"}},[t.viewEditTools?n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"toolbar"},[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("update:viewEditTools",!1)}}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-arrow-left ")])],1),n("div",{staticClass:"toolbar-content"},[t._l(t.buttonGroupsInToolbar,(function(e,i){return n("v-btn-toggle",{key:i,attrs:{value:t.buttonGroupsValue[i],multiple:0===i,dense:"",rounded:""}},t._l(t.buttonGroups[i],(function(e){return n("v-btn",{key:e.name,ref:"link"===e.name?"linkMenuActivator":null,refInFor:!0,attrs:{title:t._f("capitalize")(e.name),name:t._f("capitalize")(e.name),small:""},on:{click:function(n){return t.changeFormat(e.name)}}},[n("v-icon",{attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1)})),n("v-menu",{attrs:{transition:"slide-y-transition","close-on-content-click":!1,"position-x":t.linkMeunPositionX,"position-y":50,absolute:""},model:{value:t.viewLinkMenu,callback:function(e){t.viewLinkMenu=e},expression:"viewLinkMenu"}},[n("v-card",{staticClass:"px-2 py-4",attrs:{width:"25em",elevation:"3",rounded:"",dark:""}},[n("v-row",{staticClass:"mx-0"},[n("v-col",{staticClass:"py-2",attrs:{cols:"8",md:"10"}},[n("v-text-field",{attrs:{rules:[t.urlValidity],label:"URL",placeholder:"https://",autofocus:"",clearable:"",outlined:"","hide-details":"",dense:""},model:{value:t.urlInputValue,callback:function(e){t.urlInputValue=e},expression:"urlInputValue"}})],1),n("v-col",{staticClass:"py-2 px-md-1 d-flex justify-center align-center",attrs:{cols:"2",md:"1"}},[n("v-btn",{attrs:{color:"green",disabled:!t.urlValidity,fab:"","x-small":""},on:{click:function(e){return t.changeFormat("link",t.urlInputValue)}}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-link-variant-plus ")])],1)],1),n("v-col",{staticClass:"py-2 px-md-1 d-flex justify-center align-center",attrs:{cols:"2",md:"1"}},[n("v-btn",{attrs:{disabled:!t.buttonGroups[0][4].isActive,color:"red",fab:"","x-small":""},on:{click:function(e){return t.changeFormat("link","")}}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-link-variant-minus ")])],1)],1)],1)],1)],1)],2),n("v-menu",{attrs:{transition:"slide-x-reverse-transition","content-class":"rounded-0 rounded-bl menu-position",dark:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",small:""}},"v-btn",a,!1),i),[n("v-icon",{attrs:{small:""}},[t._v(" mdi-menu ")])],1)]}}],null,!1,985734924)},[n("v-list",{attrs:{dense:""}},t._l(t.remainingButtonGroupIndexes,(function(e){return n("div",{key:e},[e!==t.buttonGroupsInToolbar?n("v-divider"):t._e(),t._l(t.buttonGroups[e],(function(e){return n("v-list-item",{key:e.name,class:{"v-list-item--active":e.isActive},on:{click:function(n){return t.changeFormat(e.name)}}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",[n("span",[t._v(t._s(t._f("capitalize")(e.name)))])])],1)}))],2)})),0)],1)],1):t._e()])],1)},m=[],h=(n("ac1f"),n("466d"),n("5319"),n("c5d0"),n("2315"),n("9911"),n("fb6a"),n("d81d"),n("cb29"),n("159b"),n("b0c0"),{filters:{capitalize:function(t){var e=String(t),n=e.match(/[A-Z]|\d+/)||[];return n.reduce((function(t,e){return t.replace(e," ".concat(e.toLowerCase()))}),e).replace(e.at(0),"_"===e.at(0)?"":e.at(0).toUpperCase()).replaceAll("_"," ")}},model:{prop:"currentTab",event:"change"},props:{viewEditTools:Boolean,currentTab:{type:[Object,String],default:"home"},editorObject:{type:Object,required:!0},removeTab:{type:Object,default:null},allNotes:{type:Object,required:!0,validator:function(t){return Object.values(t).every((function(t){return Array.isArray(t)&&t.every((function(t){return t.constructor===Object}))}))}}},data:function(){return{selectedTab:0,tabClasses:"tab rounded blue-grey ml-1 grey--text text--darken-3 px-0 text-none justify-space-between",tabsData:["home"],buttonGroupsInToolbar:1,buttonGroups:[[{name:"bold",icon:"mdi-format-bold",isActive:null},{name:"italic",icon:"mdi-format-italic",isActive:this.editorObject.isActive.italic()},{name:"strike",icon:"mdi-format-strikethrough",isActive:this.editorObject.isActive.strike()},{name:"underline",icon:"mdi-format-underline",isActive:this.editorObject.isActive.underline()},{name:"link",icon:"mdi-link",isActive:this.editorObject.isActive.link()}],[{name:"paragraph",icon:"mdi-format-paragraph",isActive:this.editorObject.isActive.paragraph()},{name:"heading1",icon:"mdi-format-header-1",isActive:this.editorObject.isActive.heading({level:1})},{name:"heading2",icon:"mdi-format-header-2",isActive:this.editorObject.isActive.heading({level:2})},{name:"heading3",icon:"mdi-format-header-3",isActive:this.editorObject.isActive.heading({level:3})}],[{name:"bullet_list",icon:"mdi-format-list-bulleted",isActive:this.editorObject.isActive.bullet_list()},{name:"ordered_list",icon:"mdi-order-numeric-ascending",isActive:this.editorObject.isActive.ordered_list()},{name:"horizontal_rule",icon:"mdi-minus",isActive:this.editorObject.isActive.horizontal_rule()}],[{name:"code",icon:"mdi-code-braces",isActive:this.editorObject.isActive.code()},{name:"code_block",icon:"mdi-code-braces-box",isActive:this.editorObject.isActive.code_block()},{name:"blockquote",icon:"mdi-comment-quote",isActive:this.editorObject.isActive.blockquote()}],[{name:"hard_break",icon:"mdi-subdirectory-arrow-left"},{name:"undo",icon:"mdi-undo"},{name:"redo",icon:"mdi-redo"}]],viewLinkMenu:!1,urlInputValue:""}},computed:{tabs:{set:function(t){var e=t.value,n=Object.values(this.tabsData).findIndex((function(t){return t._id===e._id}));if(t.rm)-1!==n&&(this.tabsData=this.tabsData.filter((function(t){return t._id!==e._id})),this.tabsData.length||(this.tabsData=this.tabsData.concat("home")),this.$emit("change",this.tabsData[n]||this.tabsData[n-1]));else if(e instanceof Object)1===this.tabsData.length&&"home"===this.tabsData[0]?this.tabsData=this.tabsData.slice(1).concat(e):-1===n?(this.tabsData=this.tabsData.concat(e),this.selectedTab=this.tabsData.length-1):(this.$set(this.tabsData,n,e),this.selectedTab=n);else{var i=this.tabsData.findIndex((function(t){return"home"===t}));-1!==i?this.selectedTab=i:(this.tabsData=this.tabsData.concat("home"),this.selectedTab=this.tabsData.length-1),this.$emit("change","home")}},get:function(){return this.tabsData.map((function(t){switch(t){case"home":return{text:"Home",icon:"mdi-home-outline",id:"home",value:t};default:return{text:t.subject,icon:"mdi-notebook-outline",id:t._id,value:t}}}))}},urlValidity:function(){var t=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;return t.test(this.urlInputValue)},remainingButtonGroupIndexes:function(){var t=this;return Array(5-this.buttonGroupsInToolbar).fill(null).map((function(e,n){return t.buttonGroupsInToolbar+n}))},buttonGroupsValue:function(){return this.buttonGroups.slice(0,this.buttonGroups.length-1).map((function(t,e){return 0===e?t.map((function(t,e){return t.isActive?e:null})).filter((function(t){return"number"===typeof t})):t.findIndex((function(t){return t.isActive}))}))},linkMeunPositionX:function(){return(document.body.scrollWidth-256)/2}},watch:{currentTab:function(t){this.tabs={value:t,rm:!1}},"editorObject.isActive":function(t){var e=this,n=["doc","text","redo","undo","hard_break","list_item"];Object.keys(t).forEach((function(i){if(!n.includes(i))if("heading"===i)[1,2,3].forEach((function(n){var a=e.buttonGroups.find((function(t){return t.find((function(t){return t.name==="heading".concat(n)}))})).find((function(t){return t.name==="heading".concat(n)}));e.$set(a,"isActive",t[i]({level:n}))}));else{var a=e.buttonGroups.find((function(t){return t.find((function(t){return t.name===i}))})).find((function(t){return t.name===i}));e.$set(a,"isActive",t[i]())}}))},viewLinkMenu:function(t){t&&(this.urlInputValue=this.editorObject.activeMarkAttrs.link.href)},removeTab:function(t){t&&t.constructor===Object&&(this.tabs={value:t,rm:!0},this.$emit("update:removeTab",null))}},methods:{onResize:function(){switch(!0){case matchMedia("(min-width: 1264px)").matches:this.buttonGroupsInToolbar=4;break;case matchMedia("(min-width: 960px)").matches:this.buttonGroupsInToolbar=3;break;case matchMedia("(min-width: 768px)").matches:this.buttonGroupsInToolbar=1;break;case matchMedia("(min-width: 600px)").matches:this.buttonGroupsInToolbar=2;break;default:this.buttonGroupsInToolbar=1}},changeFormat:function(t,e){switch(t){case"heading1":this.editorObject.commands.heading({level:1});break;case"heading2":this.editorObject.commands.heading({level:2});break;case"heading3":this.editorObject.commands.heading({level:3});break;case"link":"string"===typeof e?this.urlValidity&&this.editorObject.commands.link({href:e}):this.viewLinkMenu=!this.viewLinkMenu;break;default:this.editorObject.commands[t]()}}}}),v=h,f=(n("102a"),n("2877")),p=n("6544"),b=n.n(p),g=n("40dc"),_=n("8336"),y=n("a609"),w=n("b0af"),k=n("62ad"),x=n("ce7e"),T=n("132d"),C=n("8860"),j=n("da13"),V=n("5d23"),O=n("34c3"),$=n("e449"),I=n("0fd9"),N=n("71a3"),A=n("fe57"),M=n("8654"),S=n("269a"),z=n.n(S),E=n("dc22"),L=Object(f["a"])(v,d,m,!1,null,"448c3ca2",null),D=L.exports;b()(L,{VAppBar:g["a"],VBtn:_["a"],VBtnToggle:y["a"],VCard:w["a"],VCol:k["a"],VDivider:x["a"],VIcon:T["a"],VList:C["a"],VListItem:j["a"],VListItemContent:V["a"],VListItemIcon:O["a"],VMenu:$["a"],VRow:I["a"],VTab:N["a"],VTabs:A["a"],VTextField:M["a"]}),z()(L,{Resize:E["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"h-100 pa-0",attrs:{fluid:""}},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeIn animate__fast","leave-active-class":"animate__animated animate__fadeOut animate__fast",mode:"out-in"}},[n(t.currentComponent.name,t._g(t._b({tag:"component"},"component",t.currentComponent.props,!1),t.currentComponent.events))],1)],1)},G=[],H=n("53ca"),B=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"px-6 py-5",attrs:{color:"blue-grey darken-4",dark:"",tile:""}},[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("h1",{staticClass:"subject"},[t._v(" "+t._s(t.note.subject)+" ")]),n("div",[n("v-btn",{staticClass:"orange mx-1",attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("edit")}}},[n("v-icon",{attrs:{color:"black",small:""}},[t._v(" mdi-pencil-outline ")])],1),n("v-dialog",{attrs:{"max-width":"25rem"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.attrs,a=e.on;return[n("v-btn",t._g(t._b({staticClass:"red mx-1",attrs:{icon:"",depressed:"",small:""}},"v-btn",i,!1),a),[n("v-icon",{attrs:{color:"black",small:""}},[t._v(" mdi-trash-can-outline ")])],1)]}}]),model:{value:t.deleteMessage,callback:function(e){t.deleteMessage=e},expression:"deleteMessage"}},[n("v-card",{attrs:{color:"red accent-4"}},[n("v-card-title",[n("h3",[t._v("WARNING!")])]),n("v-card-text",{staticClass:"d-flex justify-center"},[n("span",{staticClass:"text-h6"},[t._v("Are you sure to want delete this note?")])]),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(e){t.deleteMessage=!1}}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-cancel ")]),n("span",[t._v("Cancel")])],1),n("v-btn",{attrs:{color:"black",dark:"",small:""},on:{click:t.removeNote}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-trash-can-outline ")]),n("span",[t._v("Delete")])],1)],1)],1)],1)],1)]),n("v-divider",{staticClass:"my-5"}),n("div",{staticClass:"mb-5"},[n("v-icon",{staticClass:"mirror-y",attrs:{small:""}},[t._v(" mdi-tag-outline ")]),n("v-chip",{staticClass:"mx-1",attrs:{small:""}},[t._v(" "+t._s(t.note.tag)+" ")])],1),n("div",{staticClass:"note-content",domProps:{innerHTML:t._s(t.noteContent)}})],1)}),P=[],q={props:{note:{validator:function(t){return"string"===typeof t.tag&&"object"===Object(H["a"])(t.content)},required:!0}},data:function(){return{deleteMessage:!1}},computed:{noteContent:function(){return this.$root.$children[0].editor.setContent(this.note.content),this.$root.$children[0].editor.getHTML()}},beforeDestroy:function(){this.$root.$children[0].editor.clearContent()},methods:{removeNote:function(){this.$emit("remove",this.note,!0),this.deleteMessage=!1}}},F=q,J=(n("dbcc"),n("5040"),n("99d9")),W=n("cc20"),U=n("169a"),K=n("8dd9"),X=Object(f["a"])(F,B,P,!1,null,"7f2f5e67",null),Z=X.exports;b()(X,{VBtn:_["a"],VCard:w["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VChip:W["a"],VDialog:U["a"],VDivider:x["a"],VIcon:T["a"],VSheet:K["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{directives:[{name:"resize",rawName:"v-resize",value:t.computedEditorHeight,expression:"computedEditorHeight"}],staticClass:"px-6 py-5 h-100",attrs:{color:"blue-grey darken-3",dark:"",tile:""}},[n("v-form",[n("v-text-field",{staticClass:"input-max-height-43 text-h4 font-weight-medium",attrs:{label:"Subject",outlined:"","hide-details":""},model:{value:t.newSubject,callback:function(e){t.newSubject=e},expression:"newSubject"}}),n("v-divider",{staticClass:"my-5"}),n("v-combobox",{class:t.tagInputClass,attrs:{items:t.computedTags,hint:t.tagInputMessage,"menu-props":{transition:"slide-y-transition",contentClass:"rounded-b"},label:"Tag","deletable-chips":"",dense:"",outlined:"","hide-selected":""},on:{focus:function(e){t.focusOnTagInput=!0},blur:function(e){t.focusOnTagInput=!1}},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.attrs,a=e.item,o=e.parent;return[n("v-chip",t._b({attrs:{color:"green accent-3",small:"",light:""}},"v-chip",i,!1),[n("span",{staticClass:"mr-2"},[t._v(" "+t._s(a)+" ")]),n("v-icon",{attrs:{small:""},on:{click:o.deleteCurrentItem}},[t._v(" $delete ")])],1)]}}]),model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}}),n("v-input",{ref:"editorInput",staticClass:"v-textarea v-text-field v-text-field--is-booted\n\t\t\tv-text-field--enclosed v-text-field--outlined h-100",class:{"v-input--is-label-active":!!t.$root.$children[0].editor.state.doc.textContent,"v-input--is-dirty":!!t.$root.$children[0].editor.state.doc.textContent,"v-input--is-focused":t.$root.$children[0].editor.focused},attrs:{color:"blue","hide-details":""}},[n("fieldset",{attrs:{"area-hidden":"true"}},[n("legend",{style:{width:t.$root.$children[0].editor.state.doc.textContent||t.$root.$children[0].editor.focused?"38.25px":0}},[n("span",{staticClass:"notranslate"},[t._v("​")])])]),n("div",{staticClass:"v-text-field__slot"},[n("label",{staticClass:"v-label theme--dark",class:{"v-label--active":!!t.$root.$children[0].editor.state.doc.textContent||t.$root.$children[0].editor.focused},staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{for:"editor-input"}},[t._v(" Content ")]),n("editor-content",{style:{height:t.editorInputHeight+"px"},attrs:{id:"editor-input",editor:t.$root.$children[0].editor,spellcheck:"false"}})],1)])],1)],1)},Y=[],tt={components:{EditorContent:s["b"]},props:{note:{type:void 0,default:function(){return{}}},tags:{required:!0,type:Array,validator:function(t){return t.every((function(t){return"string"===typeof t}))}},defaultTag:{type:String,default:null}},data:function(){return{newSubject:null,selectedTag:null,editorInputHeight:null,focusOnTagInput:null}},computed:{tagInputClass:function(){return!this.tagInputMessage&&this.focusOnTagInput?"rounded-b-0":null},computedTags:function(){return this.tags.includes("Other")?this.tags:this.tags.concat("Other")},tagInputMessage:function(){return 1===this.computedTags.length&&this.selectedTag?"No tag! Type to create one.":null}},mounted:function(){"string"===typeof this.defaultTag?this.selectedTag=this.defaultTag:(this.$root.$children[0].editor.setContent(this.note.content),this.newSubject=this.note.subject,this.selectedTag=this.note.tag)},beforeDestroy:function(){var t=this.checkMutate(),e=t?{object:Object.assign("string"!==typeof this.defaultTag?this.note:{},t),new:"string"===typeof this.defaultTag}:null;this.$emit("exit",e),this.$root.$children[0].editor.clearContent()},methods:{computedEditorHeight:function(){var t=this.$el.scrollHeight-60,e=163;this.editorInputHeight=t-e},checkMutate:function(){var t={};if(("string"===typeof this.defaultTag&&this.newSubject||this.newSubject&&this.newSubject!==this.note.subject)&&Object.defineProperty(t,"subject",{value:this.newSubject,enumerable:!0}),("string"===typeof this.defaultTag&&this.selectedTag||this.selectedTag&&this.selectedTag!==this.note.tag)&&Object.defineProperty(t,"tag",{value:this.selectedTag||"Other",enumerable:!0}),"string"!==typeof this.defaultTag){var e=this.$root.$children[0].editor.getHTML();this.$root.$children[0].editor.setContent(this.note.content);var n=this.$root.$children[0].editor.getHTML();this.$root.$children[0].editor.setContent(e),e!==n&&Object.defineProperty(t,"content",{value:this.$root.$children[0].editor.getJSON(),enumerable:!0})}else this.newSubject&&this.selectedTag&&Object.defineProperty(t,"content",{value:this.$root.$children[0].editor.getJSON(),enumerable:!0});var i=Object.keys(t).length;return"string"===typeof this.defaultTag&&3!==i||0===i?null:t}}},et=tt,nt=(n("4ca4"),n("2b5d")),it=n("4bd4"),at=n("b675"),ot=Object(f["a"])(et,Q,Y,!1,null,null,null),rt=ot.exports;b()(ot,{VChip:W["a"],VCombobox:nt["a"],VDivider:x["a"],VForm:it["a"],VIcon:T["a"],VInput:at["a"],VSheet:K["a"],VTextField:M["a"]}),z()(ot,{Resize:E["a"]});var st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"pa-4",class:[t.history.length?null:"h-100 d-flex flex-column"]},[t.history.length?i("h2",{staticClass:"my-4"},[t._v(" Recent notes ")]):t._e(),i("v-row",[t.history.length?t._e():i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[i("v-img",{staticClass:"mx-auto",staticStyle:{opacity:"0.2"},attrs:{alt:"Vute image",src:n("9b19"),"max-width":"30rem"}})],1),t._l(t.gridItemList,(function(e,n){return i("v-col",{key:n,attrs:{cols:12/t.columnsInView}},t._l(e,(function(e){return i("transition",{key:e.id,attrs:{"appear-active-class":"animate__animated animate__bounceIn delay_"+200*e.order+"ms",appear:""}},[i("v-card",{staticClass:"mb-5 preview-card",attrs:{color:e.color,title:e.note.subject,elevation:"3"},on:{click:function(n){return t.openNote(e.note)}}},[i("v-card-title",[i("span",{staticClass:"text-truncate"},[t._v(t._s(e.note.subject))])]),i("v-card-text",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}}),i("v-card-actions",[i("v-icon",{staticClass:"mr-1 mirror-y",attrs:{small:""}},[t._v(" mdi-tag-outline ")]),i("v-chip",{attrs:{color:e.color+" accent-2",small:""}},[t._v(" "+t._s(e.note.tag)+" ")])],1)],1)],1)})),1)}))],2)],1)},ct=[],lt={props:{history:{type:Array,required:!0,validator:function(t){return t.every((function(t){return"string"===typeof t.subject&&"string"===typeof t.tag&&"object"===Object(H["a"])(t.content)&&"number"===typeof t._id}))}}},data:function(){return{usedColors:[],colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","lime","yellow","amber","orange","deep-orange"],columnsInView:0}},computed:{gridItemList:function(){var t=this;if(!this.columnsInView||!this.history.length)return[];var e=Array(this.columnsInView).fill(0).map((function(){return[]}));return this.history.reduce((function(e,n,i){var a={note:n,content:t.generateContent(n.content),id:n._id,order:i,color:t.cardsColor[i]};return e[i%t.columnsInView].push(a),e}),e).filter((function(t){return 0!==t.length}))},cardsColor:function(){var t=this;return this.history.reduce((function(e){var n=t.colors.filter((function(t){return!e.includes(t)})),i=Math.floor(Math.random()*(n.length-1));return e.concat(n[i])}),[])}},beforeDestroy:function(){this.$root.$children[0].editor.clearContent()},methods:{generateContent:function(t){return this.$root.$children[0].editor.setContent(t),this.$root.$children[0].editor.getHTML()},onResize:function(){switch(!0){case matchMedia("(min-width: 960px)").matches:this.columnsInView=4;break;case matchMedia("(min-width: 600px)").matches:this.columnsInView=3;break;default:this.columnsInView=2}},openNote:function(t){this.$emit("change",t)}}},ut=lt,dt=(n("27ce"),n("d5bb"),n("adda")),mt=Object(f["a"])(ut,st,ct,!1,null,"2190aeca",null),ht=mt.exports;b()(mt,{VCard:w["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VChip:W["a"],VCol:k["a"],VIcon:T["a"],VImg:dt["a"],VRow:I["a"]}),z()(mt,{Resize:E["a"]});var vt={components:{WorkEnvironmentNoteViewer:Z,WorkEnvironmentNoteEditor:rt,WorkEnvironmentHomeView:ht},model:{prop:"currentView",event:"change"},props:{editMode:Boolean,tags:{type:Array,validator:function(t){return t.every((function(t){return"string"===typeof t}))},default:function(){return[]}},currentView:{validator:function(t){return"home"===t||"string"===typeof t.subject&&"string"===typeof t.tag&&"object"===Object(H["a"])(t.content)},default:"home",required:!0},defaultEditTag:{type:String,default:null}},data:function(){return{previousTab:"home"}},computed:{currentComponent:function(){switch(!0){case this.editMode:return{name:"work-environment-note-editor",props:{tags:this.tags,note:this.currentView,defaultTag:this.defaultEditTag},events:{exit:this.exitFromEditor}};case"home"!==this.currentView:return{name:"work-environment-note-viewer",props:{note:this.currentView,key:this.currentView._id},events:{edit:this.editNote,remove:this.changeView}};default:return{name:"work-environment-home-view",props:{history:this.history()},events:{change:this.changeView}}}}},watch:{defaultEditTag:function(t){"string"===typeof t&&(this.tags.includes(t)||this.$emit("update:defaultEditTag",""),this.$emit("update:editMode",!0))},currentView:function(t,e){this.history(t),this.previousTab=e}},methods:{editNote:function(){this.$emit("update:editMode",!0)},history:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=JSON.parse(localStorage.getItem("history"));if(!this.validateHistoryValue(t)){if(i instanceof Array){var a=i.filter((function(t){return e.validateHistoryValue(t)})),o=a.length-8;return localStorage.setItem("history",JSON.stringify(o>0?a.slice(o):a)),o>0?a.slice(o).reverse():a.reverse()}return localStorage.setItem("history",JSON.stringify([])),[]}if(n)if(i&&Array.isArray(i))if(i.every((function(e){return e._id!==t._id})))localStorage.setItem("history",JSON.stringify(i.concat(t)));else{var r=i.sort((function(e){return e._id===t._id?1:-1}));r.splice(r.length-1,1,t),localStorage.setItem("history",JSON.stringify(r))}else localStorage.setItem("history",JSON.stringify([t]));else localStorage.setItem("history",JSON.stringify(i.filter((function(e){return e._id!==t._id}))))},changeView:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&this.$emit("remove-note",this.currentView),this.history(t,!e),this.$emit("change",e?this.previousTab:t)},validateHistoryValue:function(t){return!!t&&("string"===typeof t.subject&&"string"===typeof t.tag&&"object"===Object(H["a"])(t.content))},exitFromEditor:function(t){t&&!t.new&&this.history(t.object),this.$emit("update:defaultEditTag",null),this.$emit("update:editMode",!1),this.$emit("modify",t)}}},ft=vt,pt=n("a523"),bt=Object(f["a"])(ft,R,G,!1,null,null,null),gt=bt.exports;b()(bt,{VContainer:pt["a"]});var _t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{permanent:t.desktopBreakpoint,value:t.drawerValue,color:"blue-grey darken-4",app:"",dark:""},on:{input:function(e){return t.$emit("shift",e)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-img",{staticClass:"mt-1 mx-4",attrs:{src:n("9b19"),width:"60",height:"40",alt:"Vute logo",contain:""}}),i("v-list-item",{staticClass:"mt-2",attrs:{dense:""}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("v-btn",{staticClass:"text-decoration-none",attrs:{color:n?"blue":null,href:"https://github.com/KhashayarKhm/vute",target:"blank",icon:""}},[i("v-icon",[t._v(" mdi-github ")])],1)]}}])}),i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("v-btn",{staticClass:"text-decoration-none",attrs:{color:n?"orange":null,href:"mailto:khashayar.khm@protonmail.com",icon:""}},[i("v-icon",[t._v(" mdi-email ")])],1)]}}])})],1)]},proxy:!0},{key:"append",fn:function(){return[i("v-btn",{attrs:{color:"blue-grey darken-3",tile:"",block:""},on:{click:function(e){return t.newNote("")}}},[i("v-icon",{staticClass:"mx-1",attrs:{color:"green accent-3",small:""}},[t._v(" mdi-notebook-plus-outline ")]),i("span",{staticClass:"green--text text--accent-3"},[t._v("New note")])],1)]},proxy:!0}])},[i("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInLeft position-absolute animate__faster","leave-active-class":"animate__animated animate__fadeOutLeft position-absolute animate__faster"}},[i("v-list",{directives:[{name:"show",rawName:"v-show",value:!t.viewNoteList,expression:"!viewNoteList"}],staticStyle:{width:"100%"},attrs:{dense:"",nav:""}},[i("v-subheader",[t._v("Tags")]),i("transition",{attrs:{"leave-active-class":"animate__animated animate__zoomOut"}},[!t.tags.length&&t.tipMessage?i("div",{staticClass:"tip-message green accent-3 rounded blue-grey--text text--darken-4"},[i("span",{staticClass:"mb-1"},[t._v("Take your first note")]),i("v-btn",{staticStyle:{"justify-self":"end"},attrs:{color:"blue-grey darken-4","x-small":"",plain:"",icon:""},on:{click:function(e){t.tipMessage=!1}}},[i("v-icon",[t._v("mdi-close-circle-outline")])],1),i("span",[t._v('Click on "New note" to create a note and browse it here')])],1):t._e()]),t._l(t.tags,(function(e){return i("v-list-item",{key:e,staticClass:"min-height-min-content",on:{click:function(n){return t.selectTag(e)}}},[i("v-list-item-icon",{staticClass:"my-1 mr-1"},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-tag ")])],1),i("v-list-item-content",{staticClass:"py-1"},[i("span",[t._v(t._s(e))])])],1)}))],2)],1),i("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight position-absolute animate__faster","leave-active-class":"animate__animated animate__fadeOutRight position-absolute animate__faster"}},[i("v-list",{directives:[{name:"show",rawName:"v-show",value:t.viewNoteList,expression:"viewNoteList"}],staticStyle:{width:"100%"},attrs:{dense:"",nav:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-tag ")])],1),i("v-list-item-content",[i("span",{staticStyle:{"font-size":"1.2em"}},[t._v(t._s(t.selectedTag))])]),i("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){t.viewNoteList=!1}}},[i("v-icon",{attrs:{dense:""}},[t._v(" mdi-close ")])],1)],1),t._l(t.tagObject[t.selectedTag],(function(e){return i("v-list-item",{key:e._id,staticClass:"min-height-min-content",on:{click:function(n){return t.selectNote(e)}}},[i("v-list-item-icon",{staticClass:"my-1 mr-1"},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-notebook-outline ")])],1),i("v-list-item-content",{staticClass:"py-1"},[i("span",[t._v(t._s(e.subject))])])],1)})),i("v-list-item",{staticClass:"min-height-min-content",on:{click:function(e){return t.newNote(t.selectedTag)}}},[i("v-list-item-icon",{staticClass:"my-1 mr-1"},[i("v-icon",{attrs:{color:"green accent-3",small:""}},[t._v(" mdi-notebook-plus-outline ")])],1),i("v-list-item-content",{staticClass:"py-1"},[i("span",{staticClass:"green--text text--accent-3"},[t._v("New note")])])],1)],2)],1)],1)},yt=[],wt={model:{prop:"value",event:"shift"},props:{tagObject:{type:Object,required:!0,validator:function(t){return Object.values(t).every((function(t){return t.constructor===Array&&t.every((function(t){return"number"===typeof t._id}))}))}},value:Boolean},data:function(){return{tipMessage:!0,desktopBreakpoint:null,drawerValue:!1,selectedTag:null,viewNoteList:!1}},computed:{tags:function(){return Object.keys(this.tagObject)}},watch:{value:function(t){this.drawerValue=t}},methods:{newNote:function(t){t&&(this.viewNoteList=!1),this.drawerValue=!1,this.$emit("create",t),this.$emit("shift",!1)},selectTag:function(t){this.selectedTag=t,this.viewNoteList=!0},selectNote:function(t){this.viewNoteList=!1,this.$emit("change",t),this.$emit("shift",!1)},onResize:function(){this.desktopBreakpoint=matchMedia("(min-width: 768px)").matches}}},kt=wt,xt=(n("200e"),n("ce87")),Tt=n("f774"),Ct=n("e0c7"),jt=Object(f["a"])(kt,_t,yt,!1,null,"c8d66d58",null),Vt=jt.exports;b()(jt,{VBtn:_["a"],VHover:xt["a"],VIcon:T["a"],VImg:dt["a"],VList:C["a"],VListItem:j["a"],VListItemContent:V["a"],VListItemIcon:O["a"],VNavigationDrawer:Tt["a"],VSubheader:Ct["a"]}),z()(jt,{Resize:E["a"]});var Ot={name:"App",components:{AppBar:D,NavigationDrawer:Vt,WorkEnvironment:gt},data:function(){return{tags:[],organizedNotes:{},database:new u.a.Db("v_note",{notes:["subject","tag","content"]}),drawerValue:!1,currentTabValue:"home",editMode:!1,desktopBreakpoint:null,progress:{active:!1,value:0},removeTab:null,defaultEditTag:null,editor:new s["a"]({extensions:[new c["a"],new c["b"],new c["c"],new c["d"],new c["e"],new c["f"],new c["g"]({levels:[1,2,3]}),new c["h"],new c["i"],new c["j"],new c["k"],new c["l"],new c["m"],new c["n"],new c["o"]]})}},computed:{currentTab:{set:function(t){"home"===t?this.currentTabValue=t:t instanceof Object&&(this.currentTabValue=Object.values(this.organizedNotes).flat().find((function(e){return e._id===t._id})))},get:function(){return this.currentTabValue}}},mounted:function(){this.getNotes()},methods:{onResize:function(){this.desktopBreakpoint=matchMedia("(min-width: 768px)").matches},getNotes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.progress.active=!0,n=t.database.collection("notes"),e.next=4,n.find().toArray();case 4:i=e.sent,a=80/i.length,t.progress.value=10,t.tags=[],t.$set(t,"organizedNotes",i.reduce((function(e,n){return t.tags.includes(n.tag)||(t.tags=t.tags.concat(n.tag),Object.defineProperty(e,n.tag,{enumerable:!0,writable:!0,value:[]})),-1===e[n.tag].findIndex((function(t){return t._id===n._id}))&&e[n.tag].push(n),t.progress.value+=a,e}),{})),t.tags=t.tags.sort((function(t){return"Other"===t})),t.progress.value=100,t.progress.active=!1,t.progress.value=0;case 13:case"end":return e.stop()}}),e)})))()},modifyNote:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:if(i=e.database.collection("notes"),!t.new){n.next=8;break}return n.next=6,i.insert(t.object);case 6:n.next=11;break;case 8:return n.next=10,i.update({_id:{$eq:t.object._id}},t.object);case 10:e.currentTab=t.object;case 11:e.getNotes();case 12:case"end":return n.stop()}}),n)})))()},removeNote:function(t){var e=this,n=this.database.collection("notes");n.remove({_id:t._id}),this.removeTab=t,this.$set(this.organizedNotes,t.tag,this.organizedNotes[t.tag].filter((function(e){return e._id!==t._id}))),this.tags=this.tags.filter((function(e){return e!==t.tag})),this.organizedNotes[t.tag].length||(this.organizedNotes=Object.keys(this.organizedNotes).reduce((function(t,n){if(e.organizedNotes[n].length){var i=t;i[n]=e.organizedNotes[n]}return t}),{}))}}},$t=Ot,It=(n("034f"),n("7496")),Nt=n("f6c4"),At=n("8e36"),Mt=Object(f["a"])($t,a,o,!1,null,null,null),St=Mt.exports;b()(Mt,{VApp:It["a"],VBtn:_["a"],VIcon:T["a"],VMain:Nt["a"],VProgressLinear:At["a"]}),z()(Mt,{Resize:E["a"]});n("77ed");var zt=n("f309");n("5363");i["a"].use(zt["a"]);var Et=new zt["a"]({icons:{iconfont:"mdi"}});i["a"].config.productionTip=!1,new i["a"]({vuetify:Et,render:function(t){return t(St)}}).$mount("#app")},"655a":function(t,e,n){},7427:function(t,e,n){},"85ec":function(t,e,n){},"8cbe":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.8b67af13.svg"},cf92:function(t,e,n){},cfd0:function(t,e,n){},d2e2:function(t,e,n){},d5bb:function(t,e,n){"use strict";n("cfd0")},dbcc:function(t,e,n){"use strict";n("4a80")}});
//# sourceMappingURL=app.e2410396.js.map