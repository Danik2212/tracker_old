(function(e){function t(t){for(var n,a,r=t[0],c=t[1],d=t[2],u=0,l=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),A()}function A(){for(var e,t=0;t<i.length;t++){for(var A=i[t],n=!0,r=1;r<A.length;r++){var c=A[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=A[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var A=n[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,a),A.l=!0,A.exports}a.m=e,a.c=n,a.d=function(e,t,A){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(a.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(A,n,function(t){return e[t]}.bind(null,n));return A},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tracker_old/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var s=c;i.push([0,"chunk-vendors"]),A()})({0:function(e,t,A){e.exports=A("56d7")},"0115":function(e,t,A){"use strict";var n=A("56c3"),o=A.n(n);o.a},"02f2":function(e,t,A){e.exports=A.p+"img/bad.c0e173de.png"},"034f":function(e,t,A){"use strict";var n=A("85ec"),o=A.n(n);o.a},1771:function(e,t,A){var n={"./bad.png":"de02","./copy.png":"78a3","./download.png":"f6f5","./edit.png":"aa93","./good.png":"8312","./new.png":"2596","./old/add.png":"325a","./old/bad.png":"02f2","./old/delete.png":"8a85","./old/edit.png":"ac98","./old/good.png":"586a","./remove.png":"546a","./reset.png":"ffc4"};function o(e){var t=i(e);return A(t)}function i(e){if(!A.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="1771"},"197c":function(e,t,A){"use strict";var n=A("3687"),o=A.n(n);o.a},2596:function(e,t){e.exports="data:image/png;base64,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"},"26b4":function(e,t,A){"use strict";var n=A("76b2"),o=A.n(n);o.a},"2c0d":function(e,t,A){"use strict";var n=A("8e2b"),o=A.n(n);o.a},"325a":function(e,t,A){e.exports=A.p+"img/add.c8d0cb63.png"},3687:function(e,t,A){},"3dae":function(e,t,A){},"546a":function(e,t,A){e.exports=A.p+"img/remove.88ae9bf8.png"},"56c3":function(e,t,A){},"56d7":function(e,t,A){"use strict";A.r(t);A("e260"),A("e6cf"),A("cca6"),A("a79d");var n=A("2b0e"),o=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{attrs:{id:"app"}},[A("Header"),A("Tracker")],1)},i=[],a=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-div"},[A("div",[A("TrackerNewCat",{on:{"add-new-cat":e.handleNewCategory}})],1),e._l(e.categories,(function(t){return A("div",{key:t.id},[A("h3",[A("TrackerCategory",{attrs:{category:t},on:{"cat-remove":e.handleRemoveCategory,"cat-title-changed":e.handleCatTitleChanged,"item-remove":e.handleRemoveItem,"item-add-good":e.handleAddGood,"item-add-bad":e.handleAddBad,"item-reset":e.handleResetCount,"item-new-item":e.handleNewItem,"item-title-changed":e.handleItemTitleChanged}})],1)])}))],2)},r=[],c=(A("99af"),A("4de4"),A("7db0"),A("2909")),d=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",[A("div",{staticClass:"tracker-category"},[A("TrackerCatName",{staticClass:"cat-name",attrs:{category:e.category},on:{"title-changed":e.handleCatTitleChanged}}),A("div",{staticClass:"tracker-right-column"},[A("CopyButton",{staticClass:"picture-button",on:{copy:e.handleCopy}}),A("RemoveButton",{staticClass:"picture-button",on:{remove:e.handleRemoveCategory}})],1)],1),e._l(e.category.items,(function(t){return A("div",{key:t.id},[A("h3",[A("TrackerItem",{attrs:{item:t},on:{remove:e.handleRemoveItem,"add-good":e.handleAddGood,"add-bad":e.handleAddBad,reset:e.handleResetCount,"item-title-changed":e.handleItemTitleChanged}})],1)])})),A("div",[A("TrackerNewItem",{on:{"add-new-item":e.handleNewItem}})],1)],2)},s=[],u=(A("4160"),A("159b"),function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-cat-name"},[A("span",{staticClass:"catTitle",class:{hidden:e.editMode},on:{click:e.handleTextClick}},[A("h2",[e._v(" "+e._s(e.category.title))])]),A("input",{directives:[{name:"model",rawName:"v-model",value:e.category.title,expression:"category.title"}],ref:"textEdit",class:{hidden:!e.editMode},attrs:{type:"text",id:"textInput"},domProps:{value:e.category.title},on:{blur:e.handleBlur,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnterPressed(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEscPressed(t)}],input:function(t){t.target.composing||e.$set(e.category,"title",t.target.value)}}})])}),l=[],g={name:"TrackerCatName",components:{},props:["category"],data:function(){return{editMode:!1}},methods:{handleTextClick:function(){this.activateEditMode()},handleBlur:function(){this.deactivateEditMode(),this.$emit("title-changed")},handleEscPressed:function(){this.deactivateEditMode()},handleEnterPressed:function(){this.deactivateEditMode()},activateEditMode:function(){var e=this;this.editMode=!0,this.$nextTick((function(){return e.$refs.textEdit.focus()})),this.$emit("edit-mode-activated")},deactivateEditMode:function(){this.editMode=!1}}},m=g,C=(A("197c"),A("2877")),f=Object(C["a"])(m,u,l,!1,null,"0b3ab9fa",null),h=f.exports,B=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-item",attrs:{id:"itemdiv"}},[A("div",{staticClass:"tracker-left-column"},[A("GoodButton",{staticClass:"picture-button",on:{"add-good":e.handleAddGood}}),A("BadButton",{staticClass:"picture-button",on:{"add-bad":e.handleAddBad}}),A("TrackerItemScore",{staticClass:"item-score",attrs:{item:e.item}})],1),A("TrackerItemName",{staticClass:"item-name",attrs:{item:e.item},on:{"title-changed":e.handleTitleChanged}}),A("div",{staticClass:"tracker-right-column"},[A("CopyButton",{staticClass:"picture-button",on:{copy:e.handleCopy}}),A("ResetButton",{staticClass:"picture-button",on:{reset:e.handleReset}}),A("RemoveButton",{staticClass:"picture-button",on:{remove:e.handleRemoveItem}})],1)],1)},p=[],Q=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-item-name"},[A("span",{staticClass:"itemTitle",class:{hidden:e.editMode},on:{click:e.handleTextClick}},[e._v(" "+e._s(e.item.title))]),A("input",{directives:[{name:"model",rawName:"v-model",value:e.item.title,expression:"item.title"}],ref:"textEdit",class:{hidden:!e.editMode},attrs:{type:"text",id:"textInput"},domProps:{value:e.item.title},on:{blur:e.handleBlur,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnterPressed(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEscPressed(t)}],input:function(t){t.target.composing||e.$set(e.item,"title",t.target.value)}}})])},E=[],I={name:"TrackerItemName",components:{},props:["item"],data:function(){return{editMode:!1}},methods:{handleTextClick:function(){this.activateEditMode()},handleBlur:function(){this.deactivateEditMode(),this.$emit("title-changed")},handleEscPressed:function(){this.deactivateEditMode()},handleEnterPressed:function(){this.deactivateEditMode()},activateEditMode:function(){var e=this;this.editMode=!0,this.$nextTick((function(){return e.$refs.textEdit.focus()})),this.$emit("edit-mode-activated")},deactivateEditMode:function(){this.editMode=!1}}},k=I,v=(A("2c0d"),Object(C["a"])(k,Q,E,!1,null,"481d5fb6",null)),y=v.exports,b=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("span",{staticClass:"tracker-item"},[A("span",{staticClass:"item-score"},[e._v(" "+e._s(e.item.goodCount)+" / "+e._s(e.item.goodCount+e.item.badCount)+" ("+e._s(e._f("percentage")(e.item.goodCount/(e.item.goodCount+e.item.badCount)))+"%) ")])])},w=[],x=(A("b680"),{name:"TrackerItemScore",components:{},props:["item"],filters:{percentage:function(e){return e?(e=(100*e).toFixed(0),e):0}}}),O=x,J=(A("e9f3"),Object(C["a"])(O,b,w,!1,null,"2f7c33e0",null)),S=J.exports,T=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},F=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{attrs:{src:A("1771")("./"+e.img)},on:{click:e.handleClick}})},U=[],N={name:"EditButton",props:["img"],methods:{handleClick:function(){this.$emit("click")}}},j=N,M=(A("8214"),Object(C["a"])(j,P,U,!1,null,"c647905e",null)),K=M.exports,_={name:"RemoveButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("remove")}},data:function(){return{img:"remove.png"}}},z=_,D=Object(C["a"])(z,T,F,!1,null,"27ad56d3",null),$=D.exports,L=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},Y=[],H={name:"GoodButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("add-good")}},data:function(){return{img:"good.png"}}},R=H,G=Object(C["a"])(R,L,Y,!1,null,"4c6accfc",null),X=G.exports,Z=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},V=[],W={name:"BadButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("add-bad")}},data:function(){return{img:"bad.png"}}},q=W,ee=Object(C["a"])(q,Z,V,!1,null,"034f8685",null),te=ee.exports,Ae=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},ne=[],oe={name:"ResetButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("reset")}},data:function(){return{img:"reset.png"}}},ie=oe,ae=Object(C["a"])(ie,Ae,ne,!1,null,"4be1071e",null),re=ae.exports,ce=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},de=[],se={name:"CopyButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("copy")}},data:function(){return{img:"copy.png"}}},ue=se,le=Object(C["a"])(ue,ce,de,!1,null,"2fd3a453",null),ge=le.exports;function me(e){var t=Ce(e),A=document.createElement("textarea");A.value=t,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}function Ce(e){return e.title+" "+fe(e)}function fe(e){if(e.goodCount+e.badCount==0)return"0%";var t=e.goodCount/(e.goodCount+e.badCount);return t=(100*t).toFixed(0),t+"%"}var he={name:"TrackerItem",components:{TrackerItemName:y,TrackerItemScore:S,RemoveButton:$,GoodButton:X,BadButton:te,ResetButton:re,CopyButton:ge},props:["item"],methods:{handleRemoveItem:function(){this.$emit("remove",this.item.id)},handleAddGood:function(){this.$emit("add-good",this.item.id)},handleAddBad:function(){this.$emit("add-bad",this.item.id)},handleTitleChanged:function(){this.$emit("title-changed")},handleReset:function(){this.$emit("reset",this.item.id)},handleCopy:function(){me(this.item)}}},Be=he,pe=(A("26b4"),Object(C["a"])(Be,B,p,!1,null,"65ffdef6",null)),Qe=pe.exports,Ee=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-new-item"},[A("span",[A("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.addNewItem(t)}}},[A("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],ref:"title",staticClass:"text-input",attrs:{type:"text",name:"title",placeholder:"Add new item..."},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnterPressed(t)},input:function(t){t.target.composing||(e.title=t.target.value)}}}),A("NewItemButton",{ref:"new-item-btn",on:{new:e.handleNew}})],1)])])},Ie=[],ke=A("ec26"),ve=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},ye=[],be={name:"NewItemButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("new")}},data:function(){return{img:"new.png"}}},we=be,xe=Object(C["a"])(we,ve,ye,!1,null,"2882e907",null),Oe=xe.exports,Je={name:"TrackerNewItem",components:{NewItemButton:Oe},data:function(){return{title:""}},methods:{handleNew:function(){this.$refs["form"].requestSubmit()},addNewItem:function(){var e={id:Object(ke["a"])(),title:this.title,goodCount:0,badCount:0};this.$refs.title.value="",this.$emit("add-new-item",e)},handleEnterPressed:function(){}}},Se=Je,Te=(A("d98a"),Object(C["a"])(Se,Ee,Ie,!1,null,"3584d0a2",null)),Fe=Te.exports,Pe={name:"Tracker",components:{TrackerCatName:h,TrackerItem:Qe,TrackerNewItem:Fe,CopyButton:ge,RemoveButton:$},props:["category"],methods:{handleRemoveItem:function(e){this.$emit("item-remove",this.category.id,e)},handleAddGood:function(e){this.$emit("item-add-good",this.category.id,e)},handleAddBad:function(e){this.$emit("item-add-bad",this.category.id,e)},handleResetCount:function(e){this.$emit("item-reset",this.category.id,e)},handleNewItem:function(e){this.$emit("item-new-item",this.category.id,e)},handleItemTitleChanged:function(){this.$emit("item-title-changed")},handleCatTitleChanged:function(){this.$emit("cat-title-changed")},handleRemoveCategory:function(){this.$emit("cat-remove",this.category.id)},handleCopy:function(){var e=this.category.title+"\r\n";this.category.items.forEach((function(t){return e+=Ce(t)+"\r\n"}));var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},Ue=Pe,Ne=(A("0115"),Object(C["a"])(Ue,d,s,!1,null,"f193adf0",null)),je=Ne.exports,Me=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"tracker-new-cat"},[A("span",[A("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.addNewCat(t)}}},[A("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],ref:"title",staticClass:"text-input",attrs:{type:"text",name:"title",placeholder:"Add new category..."},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnterPressed(t)},input:function(t){t.target.composing||(e.title=t.target.value)}}}),A("NewCatButton",{ref:"new-cat-btn",on:{new:e.handleNewCat}})],1)])])},Ke=[],_e=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("PictureButton",{attrs:{img:e.img},on:{click:e.handleClick}})},ze=[],De={name:"NewCatButton",components:{PictureButton:K},methods:{handleClick:function(){this.$emit("new")}},data:function(){return{img:"new.png"}}},$e=De,Le=Object(C["a"])($e,_e,ze,!1,null,"60f1c562",null),Ye=Le.exports,He={name:"TrackerNewCat",components:{NewCatButton:Ye},data:function(){return{title:""}},methods:{handleNewCat:function(){this.$refs["form"].requestSubmit()},addNewCat:function(){var e={id:Object(ke["a"])(),title:this.title,items:[]};this.$refs.title.value="",this.$emit("add-new-cat",e)},handleEnterPressed:function(){}}},Re=He,Ge=(A("e559"),Object(C["a"])(Re,Me,Ke,!1,null,"49087fe3",null)),Xe=Ge.exports,Ze={name:"Tracker",components:{TrackerCategory:je,TrackerNewCat:Xe},methods:{handleNewCategory:function(e){this.categories=[].concat(Object(c["a"])(this.categories),[e]),this.save()},handleRemoveCategory:function(e){this.categories=this.categories.filter((function(t){return t.id!==e})),this.save()},handleCatTitleChanged:function(){this.save()},handleNewItem:function(e,t){var A=this.getCategoryFromId(e);A.items=[].concat(Object(c["a"])(A.items),[t]),this.save()},handleRemoveItem:function(e,t){var A=this.getCategoryFromId(e);A.items=A.items.filter((function(e){return e.id!==t})),this.save()},handleAddGood:function(e,t){var A=this.getItemFromId(e,t);A.goodCount++,this.save()},handleAddBad:function(e,t){var A=this.getItemFromId(e,t);A.badCount++,this.save()},handleItemTitleChanged:function(){this.save()},handleResetCount:function(e,t){var A=this.getItemFromId(e,t);A.badCount=0,A.goodCount=0,this.save()},getCategoryFromId:function(e){return this.categories.find((function(t){return t.id===e}))},getItemFromId:function(e,t){var A=this.getCategoryFromId(e);return A.items.find((function(e){return e.id===t}))},save:function(){var e=JSON.stringify(this.categories);localStorage.setItem("categories",e)}},data:function(){return{categories:[{id:1,title:"Demo",items:[{id:2,title:"Demo",goodCount:0,badCount:0}]}]}},mounted:function(){if(localStorage.getItem("categories"))try{this.categories=JSON.parse(localStorage.getItem("categories"))}catch(e){localStorage.removeItem("categories")}},watch:{categories:function(){console.log(123),this.save()}}},Ve=Ze,We=(A("7cbb"),Object(C["a"])(Ve,a,r,!1,null,"5ab1add9",null)),qe=We.exports,et=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},tt=[function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("header",{staticClass:"header"},[A("h1",[e._v("Tracker")])])}],At={name:"Header"},nt=At,ot=(A("adaa"),Object(C["a"])(nt,et,tt,!1,null,"6154050c",null)),it=ot.exports,at={name:"App",components:{Tracker:qe,Header:it}},rt=at,ct=(A("034f"),Object(C["a"])(rt,o,i,!1,null,null,null)),dt=ct.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(dt)}}).$mount("#app")},"586a":function(e,t,A){e.exports=A.p+"img/good.3152b4c5.png"},"64e7":function(e,t,A){},"76b2":function(e,t,A){},"78a3":function(e,t,A){e.exports=A.p+"img/copy.901fdb64.png"},"7cbb":function(e,t,A){"use strict";var n=A("3dae"),o=A.n(n);o.a},8214:function(e,t,A){"use strict";var n=A("8e3f"),o=A.n(n);o.a},8312:function(e,t,A){e.exports=A.p+"img/good.2aa1fda7.png"},"85ec":function(e,t,A){},"8a85":function(e,t,A){e.exports=A.p+"img/delete.aa6c8ad8.png"},"8e2b":function(e,t,A){},"8e3f":function(e,t,A){},"99c2":function(e,t,A){},aa93:function(e,t,A){e.exports=A.p+"img/edit.08285c94.png"},ac98:function(e,t,A){e.exports=A.p+"img/edit.a91616f5.png"},ad08:function(e,t,A){},adaa:function(e,t,A){"use strict";var n=A("e046"),o=A.n(n);o.a},d98a:function(e,t,A){"use strict";var n=A("64e7"),o=A.n(n);o.a},de02:function(e,t,A){e.exports=A.p+"img/bad.56d5046c.png"},e046:function(e,t,A){},e559:function(e,t,A){"use strict";var n=A("ad08"),o=A.n(n);o.a},e9f3:function(e,t,A){"use strict";var n=A("99c2"),o=A.n(n);o.a},f6f5:function(e,t,A){e.exports=A.p+"img/download.e1d8c5a4.png"},ffc4:function(e,t,A){e.exports=A.p+"img/reset.54a721eb.png"}});
//# sourceMappingURL=app.ed6d474a.js.map