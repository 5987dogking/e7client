function _defineProperties(l,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nX7e:function(l,n,e){"use strict";e.r(n);var a,o=e("8Y7J"),u=function l(){_classCallCheck(this,l)},t=e("pMnS"),i=e("s7LF"),r=e("dJrM"),c=e("HsOI"),b=e("Xd0L"),s=e("IP0z"),d=e("/HVE"),f=e("omvX"),h=e("ZwOa"),p=e("oapL"),m=e("bujt"),g=e("Fwaw"),A=e("5GAg"),_=e("Mr+X"),v=e("Gi4r"),y=e("SVse"),C=function(){function l(n,e,a){_classCallCheck(this,l),this.liffService=n,this.userService=e,this.snackBar=a,this.showCount=0,this.pattern_StudentId=/^5\d{7}$/,this.pattern_Phone=/^09\d{8}$/}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.JOBinit(),setTimeout((function(){alert("setTime JOBinit2000"),l.getUserDataAndInit()}),2e3)}},{key:"getUserDataAndInit",value:function(){var l=this;console.log("getUserDataAndInit"),alert("getUserDataAndInit init"),this.liffService.LIFFinit().then((function(n){console.log("LIFFinit ok"),l.userService.userDataGet()})).catch((function(n){console.log("LIFFinit GG",n),setTimeout((function(){console.log("his.userService.schoolUserProfile",l.userService.schoolUserProfile),void 0===l.userService.schoolUserProfile&&l.getUserDataAndInit()}),1500)}))}},{key:"showVConsole",value:function(){this.showCount++,5===this.showCount&&new VConsole,this.showCount>7&&this.getUserDataAndInit()}},{key:"JOBinit",value:function(){var l=this;JOB.Init(),JOB.SetImageCallback((function(n){console.log("SetImageCallback",n),1===n.length&&l.pattern_StudentId.test(n[0].Value)?l.userService.schoolUserProfile.studentId=n[0].Value:l.snackBar.open("\u89e3\u6790\u5931\u6557\u8acb\u91cd\u65b0\u62cd\u651d\u6216\u662f\u9078\u53d6\u7167\u7247\uff01","",{duration:2e3})}))}},{key:"imgSelect",value:function(l){var n=l.target.files;if(n&&n.length>0){var e=new FileReader;e.onload=function(l){JOB.DecodeImage(e.result)},e.readAsDataURL(n[0])}}}]),l}(),k=e("roDk"),S=e("mrSG"),I=e("Xr7G"),w=e("dFDH"),q=e("IheW"),F=((a=function(){function l(n,e,a,o){_classCallCheck(this,l),this.db=n,this.liffService=e,this.snackBar=a,this.http=o}return _createClass(l,[{key:"userDataGet",value:function(){var l=this,n=this.liffService.profile,e=this.liffService.channelID;return console.log("/linebot/".concat(e,"/users"),e,n),this.userDoc=this.db.collection("/linebot/".concat(e,"/users")).doc(n.userId),new Promise((function(e,a){l.userDoc.get().subscribe((function(a){if(!1===a.exists)l.schoolUserProfile=Object.assign({},n,{phone:"",studentId:"",name:n.displayName}),l.userDoc.set(l.schoolUserProfile),e(l.schoolUserProfile);else{var o=a.data();l.schoolUserProfile=o,e(l.schoolUserProfile)}}))}))}},{key:"notifyDataGet",value:function(){return S.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n="https://us-central1-review-clean02.cloudfunctions.net/app/notify/"+this.liffService.channelID,l.next=3,this.http.get(n).toPromise();case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}}),l,this)})))}},{key:"userDataSave",value:function(){var l=this,n=this.liffService.channelID,e=this.schoolUserProfile.studentId;Number(e)<50801001||Number(e)>50812057?this.snackBar.open("\u5b78\u865f\u8d85\u51fa\u7bc4\u570d(50801001~50812057)","",{duration:2e3}):this.db.collection("/linebot/".concat(n,"/users"),(function(l){return l.where("studentId","==",e)})).get().subscribe((function(n){n.docs.length>1?l.snackBar.open("\u8a72\u5b78\u865f\u5df2\u7d93\u5b58\u5728!","",{duration:2e3}):l.userDoc.set(l.schoolUserProfile).then((function(n){l.snackBar.open("\u66f4\u65b0\u6210\u529f","",{duration:2e3})})).catch((function(l){}))}))}}]),l}()).ngInjectableDef=o.Mb({factory:function(){return new a(o.Qb(I.a),o.Qb(k.a),o.Qb(w.b),o.Qb(q.c))},token:a,providedIn:"root"}),a),P=o.ob({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}"]],data:{}});function D(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,81,"div",[],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,80,"form",[["name","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var a=!0;return"submit"===n&&(a=!1!==o.Ab(l,3).onSubmit(e)&&a),"reset"===n&&(a=!1!==o.Ab(l,3).onReset()&&a),a}),null,null)),o.pb(2,16384,null,0,i.q,[],null,null),o.pb(3,4210688,[["f_input",4]],0,i.k,[[8,null],[8,null]],null,null),o.Fb(2048,null,i.b,null,[i.k]),o.pb(5,16384,null,0,i.j,[[4,i.b]],null,null),(l()(),o.qb(6,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),o.pb(7,7520256,null,9,c.b,[o.k,o.h,[2,b.f],[2,s.b],[2,c.a],d.a,o.y,[2,f.a]],null,null),o.Gb(603979776,1,{_controlNonStatic:0}),o.Gb(335544320,2,{_controlStatic:0}),o.Gb(603979776,3,{_labelChildNonStatic:0}),o.Gb(335544320,4,{_labelChildStatic:0}),o.Gb(603979776,5,{_placeholderChild:0}),o.Gb(603979776,6,{_errorChildren:1}),o.Gb(603979776,7,{_hintChildren:1}),o.Gb(603979776,8,{_prefixChildren:1}),o.Gb(603979776,9,{_suffixChildren:1}),(l()(),o.qb(17,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","name"],["placeholder","\u59d3\u540d"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var a=!0,u=l.component;return"input"===n&&(a=!1!==o.Ab(l,18)._handleInput(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,18).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.Ab(l,18)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.Ab(l,18)._compositionEnd(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,25)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==o.Ab(l,25)._focusChanged(!0)&&a),"input"===n&&(a=!1!==o.Ab(l,25)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(u.userService.schoolUserProfile.name=e)&&a),a}),null,null)),o.pb(18,16384,null,0,i.c,[o.D,o.k,[2,i.a]],null,null),o.pb(19,16384,null,0,i.n,[],{required:[0,"required"]},null),o.Fb(1024,null,i.f,(function(l){return[l]}),[i.n]),o.Fb(1024,null,i.g,(function(l){return[l]}),[i.c]),o.pb(22,671744,null,0,i.l,[[2,i.b],[6,i.f],[8,null],[6,i.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,i.h,null,[i.l]),o.pb(24,16384,null,0,i.i,[[4,i.h]],null,null),o.pb(25,999424,null,0,h.a,[o.k,d.a,[6,i.h],[2,i.k],[2,i.d],b.b,[8,null],p.a,o.y],{placeholder:[0,"placeholder"],required:[1,"required"]},null),o.Fb(2048,[[1,4],[2,4]],c.c,null,[h.a]),(l()(),o.qb(27,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),o.pb(28,7520256,null,9,c.b,[o.k,o.h,[2,b.f],[2,s.b],[2,c.a],d.a,o.y,[2,f.a]],null,null),o.Gb(603979776,10,{_controlNonStatic:0}),o.Gb(335544320,11,{_controlStatic:0}),o.Gb(603979776,12,{_labelChildNonStatic:0}),o.Gb(335544320,13,{_labelChildStatic:0}),o.Gb(603979776,14,{_placeholderChild:0}),o.Gb(603979776,15,{_errorChildren:1}),o.Gb(603979776,16,{_hintChildren:1}),o.Gb(603979776,17,{_prefixChildren:1}),o.Gb(603979776,18,{_suffixChildren:1}),(l()(),o.qb(38,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","phone"],["placeholder","\u96fb\u8a71"],["required",""]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var a=!0,u=l.component;return"input"===n&&(a=!1!==o.Ab(l,39)._handleInput(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,39).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.Ab(l,39)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.Ab(l,39)._compositionEnd(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,47)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==o.Ab(l,47)._focusChanged(!0)&&a),"input"===n&&(a=!1!==o.Ab(l,47)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(u.userService.schoolUserProfile.phone=e)&&a),a}),null,null)),o.pb(39,16384,null,0,i.c,[o.D,o.k,[2,i.a]],null,null),o.pb(40,16384,null,0,i.n,[],{required:[0,"required"]},null),o.pb(41,540672,null,0,i.m,[],{pattern:[0,"pattern"]},null),o.Fb(1024,null,i.f,(function(l,n){return[l,n]}),[i.n,i.m]),o.Fb(1024,null,i.g,(function(l){return[l]}),[i.c]),o.pb(44,671744,null,0,i.l,[[2,i.b],[6,i.f],[8,null],[6,i.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,i.h,null,[i.l]),o.pb(46,16384,null,0,i.i,[[4,i.h]],null,null),o.pb(47,999424,null,0,h.a,[o.k,d.a,[6,i.h],[2,i.k],[2,i.d],b.b,[8,null],p.a,o.y],{placeholder:[0,"placeholder"],required:[1,"required"]},null),o.Fb(2048,[[10,4],[11,4]],c.c,null,[h.a]),(l()(),o.qb(49,0,null,null,5,"button",[["class","right"],["color","primary"],["mat-raised-button",""],["required",""],["style","z-index: 5;margin-bottom: -30px;"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==o.Ab(l.parent,7).click()&&a),a}),m.d,m.b)),o.pb(50,180224,null,0,g.b,[o.k,A.e,[2,f.a]],{color:[0,"color"]},null),(l()(),o.qb(51,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,_.b,_.a)),o.pb(52,9158656,null,0,v.b,[o.k,v.d,[8,null],[2,v.a],[2,o.l]],null,null),(l()(),o.Ib(-1,0,["camera_alt"])),(l()(),o.Ib(-1,0,["\xa0\u6383\u63cf\u5b78\u751f\u8b49 "])),(l()(),o.qb(55,0,null,null,18,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),o.pb(56,7520256,null,9,c.b,[o.k,o.h,[2,b.f],[2,s.b],[2,c.a],d.a,o.y,[2,f.a]],null,null),o.Gb(603979776,19,{_controlNonStatic:0}),o.Gb(335544320,20,{_controlStatic:0}),o.Gb(603979776,21,{_labelChildNonStatic:0}),o.Gb(335544320,22,{_labelChildStatic:0}),o.Gb(603979776,23,{_placeholderChild:0}),o.Gb(603979776,24,{_errorChildren:1}),o.Gb(603979776,25,{_hintChildren:1}),o.Gb(603979776,26,{_prefixChildren:1}),o.Gb(603979776,27,{_suffixChildren:1}),(l()(),o.qb(66,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["disabled",""],["matInput",""],["name","studentId"],["placeholder","\u5b78\u865f(\u8acb\u9ede\u64ca\u6309\u9215)"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var a=!0,u=l.component;return"input"===n&&(a=!1!==o.Ab(l,67)._handleInput(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,67).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.Ab(l,67)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.Ab(l,67)._compositionEnd(e.target.value)&&a),"blur"===n&&(a=!1!==o.Ab(l,72)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==o.Ab(l,72)._focusChanged(!0)&&a),"input"===n&&(a=!1!==o.Ab(l,72)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(u.userService.schoolUserProfile.studentId=e)&&a),a}),null,null)),o.pb(67,16384,null,0,i.c,[o.D,o.k,[2,i.a]],null,null),o.Fb(1024,null,i.g,(function(l){return[l]}),[i.c]),o.pb(69,671744,null,0,i.l,[[2,i.b],[8,null],[8,null],[6,i.g]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,i.h,null,[i.l]),o.pb(71,16384,null,0,i.i,[[4,i.h]],null,null),o.pb(72,999424,null,0,h.a,[o.k,d.a,[6,i.h],[2,i.k],[2,i.d],b.b,[8,null],p.a,o.y],{disabled:[0,"disabled"],placeholder:[1,"placeholder"]},null),o.Fb(2048,[[19,4],[20,4]],c.c,null,[h.a]),(l()(),o.qb(74,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.qb(75,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.qb(76,0,null,null,5,"button",[["class","btn-block mtop"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.userService.userDataSave()&&a),a}),m.d,m.b)),o.pb(77,180224,null,0,g.b,[o.k,A.e,[2,f.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),o.Ib(-1,0,[" \u5b58\u6a94\xa0"])),(l()(),o.qb(79,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,_.b,_.a)),o.pb(80,9158656,null,0,v.b,[o.k,v.d,[8,null],[2,v.a],[2,o.l]],null,null),(l()(),o.Ib(-1,0,["save"]))],(function(l,n){var e=n.component;l(n,19,0,""),l(n,22,0,"name",e.userService.schoolUserProfile.name),l(n,25,0,"\u59d3\u540d",""),l(n,40,0,""),l(n,41,0,e.pattern_Phone),l(n,44,0,"phone",e.userService.schoolUserProfile.phone),l(n,47,0,"\u96fb\u8a71",""),l(n,50,0,"primary"),l(n,52,0),l(n,69,0,"studentId","",e.userService.schoolUserProfile.studentId),l(n,72,0,"","\u5b78\u865f(\u8acb\u9ede\u64ca\u6309\u9215)"),l(n,77,0,!o.Ab(n,3).valid,"primary"),l(n,80,0)}),(function(l,n){l(n,1,0,o.Ab(n,5).ngClassUntouched,o.Ab(n,5).ngClassTouched,o.Ab(n,5).ngClassPristine,o.Ab(n,5).ngClassDirty,o.Ab(n,5).ngClassValid,o.Ab(n,5).ngClassInvalid,o.Ab(n,5).ngClassPending),l(n,6,1,["standard"==o.Ab(n,7).appearance,"fill"==o.Ab(n,7).appearance,"outline"==o.Ab(n,7).appearance,"legacy"==o.Ab(n,7).appearance,o.Ab(n,7)._control.errorState,o.Ab(n,7)._canLabelFloat,o.Ab(n,7)._shouldLabelFloat(),o.Ab(n,7)._hasFloatingLabel(),o.Ab(n,7)._hideControlPlaceholder(),o.Ab(n,7)._control.disabled,o.Ab(n,7)._control.autofilled,o.Ab(n,7)._control.focused,"accent"==o.Ab(n,7).color,"warn"==o.Ab(n,7).color,o.Ab(n,7)._shouldForward("untouched"),o.Ab(n,7)._shouldForward("touched"),o.Ab(n,7)._shouldForward("pristine"),o.Ab(n,7)._shouldForward("dirty"),o.Ab(n,7)._shouldForward("valid"),o.Ab(n,7)._shouldForward("invalid"),o.Ab(n,7)._shouldForward("pending"),!o.Ab(n,7)._animationsEnabled]),l(n,17,1,[o.Ab(n,19).required?"":null,o.Ab(n,24).ngClassUntouched,o.Ab(n,24).ngClassTouched,o.Ab(n,24).ngClassPristine,o.Ab(n,24).ngClassDirty,o.Ab(n,24).ngClassValid,o.Ab(n,24).ngClassInvalid,o.Ab(n,24).ngClassPending,o.Ab(n,25)._isServer,o.Ab(n,25).id,o.Ab(n,25).placeholder,o.Ab(n,25).disabled,o.Ab(n,25).required,o.Ab(n,25).readonly&&!o.Ab(n,25)._isNativeSelect||null,o.Ab(n,25)._ariaDescribedby||null,o.Ab(n,25).errorState,o.Ab(n,25).required.toString()]),l(n,27,1,["standard"==o.Ab(n,28).appearance,"fill"==o.Ab(n,28).appearance,"outline"==o.Ab(n,28).appearance,"legacy"==o.Ab(n,28).appearance,o.Ab(n,28)._control.errorState,o.Ab(n,28)._canLabelFloat,o.Ab(n,28)._shouldLabelFloat(),o.Ab(n,28)._hasFloatingLabel(),o.Ab(n,28)._hideControlPlaceholder(),o.Ab(n,28)._control.disabled,o.Ab(n,28)._control.autofilled,o.Ab(n,28)._control.focused,"accent"==o.Ab(n,28).color,"warn"==o.Ab(n,28).color,o.Ab(n,28)._shouldForward("untouched"),o.Ab(n,28)._shouldForward("touched"),o.Ab(n,28)._shouldForward("pristine"),o.Ab(n,28)._shouldForward("dirty"),o.Ab(n,28)._shouldForward("valid"),o.Ab(n,28)._shouldForward("invalid"),o.Ab(n,28)._shouldForward("pending"),!o.Ab(n,28)._animationsEnabled]),l(n,38,1,[o.Ab(n,40).required?"":null,o.Ab(n,41).pattern?o.Ab(n,41).pattern:null,o.Ab(n,46).ngClassUntouched,o.Ab(n,46).ngClassTouched,o.Ab(n,46).ngClassPristine,o.Ab(n,46).ngClassDirty,o.Ab(n,46).ngClassValid,o.Ab(n,46).ngClassInvalid,o.Ab(n,46).ngClassPending,o.Ab(n,47)._isServer,o.Ab(n,47).id,o.Ab(n,47).placeholder,o.Ab(n,47).disabled,o.Ab(n,47).required,o.Ab(n,47).readonly&&!o.Ab(n,47)._isNativeSelect||null,o.Ab(n,47)._ariaDescribedby||null,o.Ab(n,47).errorState,o.Ab(n,47).required.toString()]),l(n,49,0,o.Ab(n,50).disabled||null,"NoopAnimations"===o.Ab(n,50)._animationMode),l(n,51,0,o.Ab(n,52).inline,"primary"!==o.Ab(n,52).color&&"accent"!==o.Ab(n,52).color&&"warn"!==o.Ab(n,52).color),l(n,55,1,["standard"==o.Ab(n,56).appearance,"fill"==o.Ab(n,56).appearance,"outline"==o.Ab(n,56).appearance,"legacy"==o.Ab(n,56).appearance,o.Ab(n,56)._control.errorState,o.Ab(n,56)._canLabelFloat,o.Ab(n,56)._shouldLabelFloat(),o.Ab(n,56)._hasFloatingLabel(),o.Ab(n,56)._hideControlPlaceholder(),o.Ab(n,56)._control.disabled,o.Ab(n,56)._control.autofilled,o.Ab(n,56)._control.focused,"accent"==o.Ab(n,56).color,"warn"==o.Ab(n,56).color,o.Ab(n,56)._shouldForward("untouched"),o.Ab(n,56)._shouldForward("touched"),o.Ab(n,56)._shouldForward("pristine"),o.Ab(n,56)._shouldForward("dirty"),o.Ab(n,56)._shouldForward("valid"),o.Ab(n,56)._shouldForward("invalid"),o.Ab(n,56)._shouldForward("pending"),!o.Ab(n,56)._animationsEnabled]),l(n,66,1,[o.Ab(n,71).ngClassUntouched,o.Ab(n,71).ngClassTouched,o.Ab(n,71).ngClassPristine,o.Ab(n,71).ngClassDirty,o.Ab(n,71).ngClassValid,o.Ab(n,71).ngClassInvalid,o.Ab(n,71).ngClassPending,o.Ab(n,72)._isServer,o.Ab(n,72).id,o.Ab(n,72).placeholder,o.Ab(n,72).disabled,o.Ab(n,72).required,o.Ab(n,72).readonly&&!o.Ab(n,72)._isNativeSelect||null,o.Ab(n,72)._ariaDescribedby||null,o.Ab(n,72).errorState,o.Ab(n,72).required.toString()]),l(n,76,0,o.Ab(n,77).disabled||null,"NoopAnimations"===o.Ab(n,77)._animationMode),l(n,79,0,o.Ab(n,80).inline,"primary"!==o.Ab(n,80).color&&"accent"!==o.Ab(n,80).color&&"warn"!==o.Ab(n,80).color)}))}function G(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,1,"p",[["class","blockquote"]],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.showVConsole()&&a),a}),null,null)),(l()(),o.Ib(-1,null,["\u60e1\u610f\u8f38\u5165\u5047\u8cc7\u6599\u5c07\u81ea\u884c\u627f\u64d4\u6cd5\u5f8b\u8cac\u4efb\u3002"])),(l()(),o.fb(16777216,null,null,1,null,D)),o.pb(4,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(5,0,null,null,3,"div",[["id","container"]],[[8,"hidden",0]],null,null,null,null)),(l()(),o.qb(6,0,null,null,0,"canvas",[["height","240"],["id","picture"],["width","320"]],null,null,null,null,null)),(l()(),o.qb(7,0,[["file",1]],null,0,"input",[["accept","image/*"],["id","Take-Picture"],["type","file"]],null,[[null,"change"]],(function(l,n,e){var a=!0;return"change"===n&&(a=!1!==l.component.imgSelect(e)&&a),a}),null,null)),(l()(),o.qb(8,0,null,null,0,"p",[["id","textbit"]],null,null,null,null,null))],(function(l,n){l(n,4,0,void 0!==n.component.userService.schoolUserProfile)}),(function(l,n){l(n,5,0,!0)}))}var U=o.mb("app-user-data",C,(function(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"app-user-data",[],null,null,null,G,P)),o.pb(1,114688,null,0,C,[k.a,F,w.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),L=function(){function l(n,e,a){_classCallCheck(this,l),this.userService=n,this.liffService=e,this.http=a,this.notifyLink=""}return _createClass(l,[{key:"ngOnInit",value:function(){return S.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("userService.schoolUserProfile",this.userService.schoolUserProfile),l.next=3,this.liffService.LIFFinit();case 3:this.userService.userDataGet().then((function(l){return S.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==l.access_token){n.next=11;break}if(null===(e=new URLSearchParams(window.location.search).get("code"))){n.next=6;break}this.notifyToken(e),n.next=11;break;case 6:return console.log("no code"),n.next=9,this.userService.notifyDataGet();case 9:a=n.sent,console.log("notifyData",a),this.notifyLink="https://notify-bot.line.me/oauth/authorize?response_type=code&scope=notify",this.notifyLink+="&client_id=".concat(a.client_id),this.notifyLink+="&redirect_uri=".concat(location.origin),this.notifyLink+="&state=page=user/userLineNotify,channelID=".concat(this.liffService.channelID);case 11:case"end":return n.stop()}}),n,this)})))}));case 4:case"end":return l.stop()}}),l,this)})))}},{key:"notifyToken",value:function(l){var n=this;this.http.post("https://us-central1-review-clean02.cloudfunctions.net/app/webhook/1604598759",{action:"notifyToken",source:this.userService.schoolUserProfile,channelID:this.liffService.channelID,code:l}).subscribe((function(l){console.log("notifyToken v",l),n.userService.schoolUserProfile.access_token=l.access_token}),(function(l){console.log("notifyToken e",l)}))}},{key:"notifyTest",value:function(l){this.http.post("https://us-central1-review-clean02.cloudfunctions.net/app/notifyTest",{action:"notifyTest",source:this.userService.schoolUserProfile,channelID:this.liffService.channelID,message:l}).subscribe((function(l){console.log("notifyToken v",l)}),(function(l){console.log("notifyToken e",l)}))}}]),l}(),x=o.ob({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}"]],data:{}});function T(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\u5df2\u958b\u555f"]))],null,null)}function N(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\u672a\u958b\u555f"]))],null,null)}function O(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,2,"a",[["class","btn-block"],["color","primary"],["mat-raised-button",""]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==o.Ab(l,2)._haltDisabledEvents(e)&&a),a}),m.c,m.a)),o.pb(2,180224,null,0,g.a,[A.e,o.k,[2,f.a]],{color:[0,"color"]},null),(l()(),o.Ib(-1,0,["\u524d\u5f80\u699c\u5b9a"]))],(function(l,n){l(n,2,0,"primary")}),(function(l,n){l(n,1,0,n.component.notifyLink,o.Ab(n,2).disabled?-1:o.Ab(n,2).tabIndex||0,o.Ab(n,2).disabled||null,o.Ab(n,2).disabled.toString(),"NoopAnimations"===o.Ab(n,2)._animationMode)}))}function M(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,20,"div",[],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,16,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),o.pb(2,7520256,null,9,c.b,[o.k,o.h,[2,b.f],[2,s.b],[2,c.a],d.a,o.y,[2,f.a]],{appearance:[0,"appearance"]},null),o.Gb(603979776,1,{_controlNonStatic:0}),o.Gb(335544320,2,{_controlStatic:0}),o.Gb(603979776,3,{_labelChildNonStatic:0}),o.Gb(335544320,4,{_labelChildStatic:0}),o.Gb(603979776,5,{_placeholderChild:0}),o.Gb(603979776,6,{_errorChildren:1}),o.Gb(603979776,7,{_hintChildren:1}),o.Gb(603979776,8,{_prefixChildren:1}),o.Gb(603979776,9,{_suffixChildren:1}),(l()(),o.qb(12,0,null,3,2,"mat-label",[],null,null,null,null,null)),o.pb(13,16384,[[3,4],[4,4]],0,c.e,[],null,null),(l()(),o.Ib(-1,null,["\u6e2c\u8a66\u8a0a\u606f"])),(l()(),o.qb(15,0,[["msg",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","\u6e2c\u8a66\u8a0a\u606f"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],(function(l,n,e){var a=!0;return"blur"===n&&(a=!1!==o.Ab(l,16)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==o.Ab(l,16)._focusChanged(!0)&&a),"input"===n&&(a=!1!==o.Ab(l,16)._onInput()&&a),a}),null,null)),o.pb(16,999424,null,0,h.a,[o.k,d.a,[8,null],[2,i.k],[2,i.d],b.b,[8,null],p.a,o.y],{placeholder:[0,"placeholder"]},null),o.Fb(2048,[[1,4],[2,4]],c.c,null,[h.a]),(l()(),o.qb(18,0,null,null,2,"a",[["color","primary"],["mat-raised-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0,u=l.component;return"click"===n&&(a=!1!==o.Ab(l,19)._haltDisabledEvents(e)&&a),"click"===n&&(a=!1!==u.notifyTest(o.Ab(l,15).value)&&a),a}),m.c,m.a)),o.pb(19,180224,null,0,g.a,[A.e,o.k,[2,f.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),o.Ib(-1,0,["\u9001\u51fa"]))],(function(l,n){l(n,2,0,"outline"),l(n,16,0,"\u6e2c\u8a66\u8a0a\u606f"),l(n,19,0,""==o.Ab(n,15).value,"primary")}),(function(l,n){l(n,1,1,["standard"==o.Ab(n,2).appearance,"fill"==o.Ab(n,2).appearance,"outline"==o.Ab(n,2).appearance,"legacy"==o.Ab(n,2).appearance,o.Ab(n,2)._control.errorState,o.Ab(n,2)._canLabelFloat,o.Ab(n,2)._shouldLabelFloat(),o.Ab(n,2)._hasFloatingLabel(),o.Ab(n,2)._hideControlPlaceholder(),o.Ab(n,2)._control.disabled,o.Ab(n,2)._control.autofilled,o.Ab(n,2)._control.focused,"accent"==o.Ab(n,2).color,"warn"==o.Ab(n,2).color,o.Ab(n,2)._shouldForward("untouched"),o.Ab(n,2)._shouldForward("touched"),o.Ab(n,2)._shouldForward("pristine"),o.Ab(n,2)._shouldForward("dirty"),o.Ab(n,2)._shouldForward("valid"),o.Ab(n,2)._shouldForward("invalid"),o.Ab(n,2)._shouldForward("pending"),!o.Ab(n,2)._animationsEnabled]),l(n,15,0,o.Ab(n,16)._isServer,o.Ab(n,16).id,o.Ab(n,16).placeholder,o.Ab(n,16).disabled,o.Ab(n,16).required,o.Ab(n,16).readonly&&!o.Ab(n,16)._isNativeSelect||null,o.Ab(n,16)._ariaDescribedby||null,o.Ab(n,16).errorState,o.Ab(n,16).required.toString()),l(n,18,0,o.Ab(n,19).disabled?-1:o.Ab(n,19).tabIndex||0,o.Ab(n,19).disabled||null,o.Ab(n,19).disabled.toString(),"NoopAnimations"===o.Ab(n,19)._animationMode)}))}function j(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\u901a\u77e5\u72c0\u614b\uff1a "])),(l()(),o.fb(16777216,null,null,1,null,T)),o.pb(5,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,null,1,null,N)),o.pb(7,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,null,1,null,O)),o.pb(9,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,null,1,null,M)),o.pb(11,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,5,0,e.userService.schoolUserProfile.access_token),l(n,7,0,!e.userService.schoolUserProfile.access_token),l(n,9,0,!e.userService.schoolUserProfile.access_token),l(n,11,0,e.userService.schoolUserProfile.access_token)}),null)}function B(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\u8f09\u5165\u4e2d..."]))],null,null)}function J(l){return o.Kb(0,[(l()(),o.fb(16777216,null,null,1,null,j)),o.pb(1,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,null,1,null,B)),o.pb(3,16384,null,0,y.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,void 0!==e.userService.schoolUserProfile),l(n,3,0,void 0===e.userService.schoolUserProfile)}),null)}var K=o.mb("app-user-line-notify",L,(function(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"app-user-line-notify",[],null,null,null,J,x)),o.pb(1,114688,null,0,L,[F,k.a,q.c],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),E=e("t68o"),R=e("xYTU"),V=e("POq0"),X=e("QQfA"),Q=e("s6ns"),z=e("gavF"),H=e("JjoW"),W=e("qJ5m"),Z=e("iInd"),Y=function l(){_classCallCheck(this,l)},$=e("cUpR"),ll=e("BzsH"),nl=e("igqZ"),el=e("5Bek"),al=e("zMNK"),ol=e("c9fC"),ul=e("hOhj"),tl=e("BV1i"),il=e("02hT"),rl=e("Q+lL"),cl=e("kNGD"),bl=e("rWV4"),sl=e("qJ50"),dl=e("elxJ"),fl=e("JrGH"),hl=e("dvZr");e.d(n,"UserModuleNgFactory",(function(){return pl}));var pl=o.nb(u,[],(function(l){return o.xb([o.yb(512,o.j,o.ab,[[8,[t.a,U,K,E.a,R.a,R.b]],[3,o.j],o.w]),o.yb(4608,y.o,y.n,[o.t,[2,y.B]]),o.yb(4608,i.p,i.p,[]),o.yb(4608,V.c,V.c,[]),o.yb(4608,b.b,b.b,[]),o.yb(4608,X.c,X.c,[X.i,X.e,o.j,X.h,X.f,o.q,o.y,y.d,s.b,[2,y.i]]),o.yb(5120,X.j,X.k,[X.c]),o.yb(5120,Q.c,Q.d,[X.c]),o.yb(135680,Q.e,Q.e,[X.c,o.q,[2,y.i],[2,Q.b],Q.c,[3,Q.e],X.e]),o.yb(5120,z.a,z.d,[X.c]),o.yb(5120,H.a,H.b,[X.c]),o.yb(5120,W.g,W.a,[[3,W.g]]),o.yb(4608,q.h,q.n,[y.d,o.A,q.l]),o.yb(4608,q.o,q.o,[q.h,q.m]),o.yb(5120,q.a,(function(l){return[l]}),[q.o]),o.yb(4608,q.k,q.k,[]),o.yb(6144,q.i,null,[q.k]),o.yb(4608,q.g,q.g,[q.i]),o.yb(6144,q.b,null,[q.g]),o.yb(4608,q.f,q.j,[q.b,o.q]),o.yb(4608,q.c,q.c,[q.f]),o.yb(1073742336,y.c,y.c,[]),o.yb(1073742336,Z.m,Z.m,[[2,Z.r],[2,Z.k]]),o.yb(1073742336,Y,Y,[]),o.yb(1073742336,i.o,i.o,[]),o.yb(1073742336,i.e,i.e,[]),o.yb(1073742336,s.a,s.a,[]),o.yb(1073742336,b.j,b.j,[[2,b.c],[2,$.f]]),o.yb(1073742336,d.b,d.b,[]),o.yb(1073742336,b.t,b.t,[]),o.yb(1073742336,g.c,g.c,[]),o.yb(1073742336,p.c,p.c,[]),o.yb(1073742336,V.d,V.d,[]),o.yb(1073742336,c.d,c.d,[]),o.yb(1073742336,h.b,h.b,[]),o.yb(1073742336,v.c,v.c,[]),o.yb(1073742336,ll.b,ll.b,[]),o.yb(1073742336,nl.a,nl.a,[]),o.yb(1073742336,el.c,el.c,[]),o.yb(1073742336,al.g,al.g,[]),o.yb(1073742336,ol.a,ol.a,[]),o.yb(1073742336,ul.c,ul.c,[]),o.yb(1073742336,X.g,X.g,[]),o.yb(1073742336,Q.h,Q.h,[]),o.yb(1073742336,z.c,z.c,[]),o.yb(1073742336,z.b,z.b,[]),o.yb(1073742336,tl.h,tl.h,[]),o.yb(1073742336,b.l,b.l,[]),o.yb(1073742336,b.r,b.r,[]),o.yb(1073742336,il.b,il.b,[]),o.yb(1073742336,rl.c,rl.c,[]),o.yb(1073742336,w.e,w.e,[]),o.yb(1073742336,b.p,b.p,[]),o.yb(1073742336,H.d,H.d,[]),o.yb(1073742336,cl.b,cl.b,[]),o.yb(1073742336,A.a,A.a,[]),o.yb(1073742336,bl.j,bl.j,[]),o.yb(1073742336,sl.e,sl.e,[]),o.yb(1073742336,W.h,W.h,[]),o.yb(1073742336,dl.d,dl.d,[]),o.yb(1073742336,q.e,q.e,[]),o.yb(1073742336,q.d,q.d,[]),o.yb(1073742336,fl.a,fl.a,[]),o.yb(1073742336,u,u,[]),o.yb(1024,Z.i,(function(){return[[{path:"userData",component:C},{path:"userLineNotify",component:L}]]}),[]),o.yb(256,cl.a,{separatorKeyCodes:[hl.f]},[]),o.yb(256,q.l,"XSRF-TOKEN",[]),o.yb(256,q.m,"X-XSRF-TOKEN",[])])}))}}]);