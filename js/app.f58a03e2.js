(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/final/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"1dee":function(t,e,s){"use strict";var a=s("5ae1"),i=s.n(a);i.a},"431e":function(t,e,s){"use strict";var a=s("b093"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NoteList",{attrs:{addSheet:t.addSheet}}),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("shoppingCart",{attrs:{sheet:t.sheet},on:{cost:t.setCost}})],1),s("div",{staticClass:"col-4"},[s("ordersummary",{attrs:{sheet:t.sheet,cost:t.cost}})],1)])])],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid blue"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},t._l(t.sheetGroups,(function(e){return s("div",{key:e.name,staticClass:"group"},[s("p",{staticClass:"mt-2 p-1"},[t._v(t._s(e.name))]),t._l(t.sheets,(function(a){return s("div",{key:a.sheetGroups.id,staticClass:"note-card"},[a.sheetGroups.includes(e.id)?s("div",{staticClass:"show"},[s("img",{attrs:{src:a.preview,alt:""}}),s("div",{staticClass:"sheet-info"},[s("p",{staticClass:"sheet-title"},[t._v(t._s(a.title))]),s("p",{staticClass:"sheet-artist"},[t._v(t._s(a.artist))]),t._l(t.sheetCategories,(function(e){return s("div",{key:e.id,staticClass:"sheet-categories"},[a.sheetCategories.includes(e.id)?s("p",{staticClass:"sheet-categories"},[t._v(t._s(e.name))]):t._e()])})),s("button",{staticClass:"add",on:{click:function(e){return t.cardClick(a)}}},[t._v("Add to card")])],2)]):t._e()])}))],2)})),0)])])},o=[],c=(s("4de4"),s("caad"),s("d3b7"),s("2532"),{name:"NoteList",props:["addSheet"],data:function(){return{sheetCategories:[],sheetGroups:[],sheets:[]}},computed:{sheetsSheetGroupOne:function(){return this.sheets.filter((function(t){return t.sheetGroups.includes(1)}))},sheetsSheetGroupTwo:function(){return this.sheets.filter((function(t){return t.sheetGroups.includes(2)}))}},methods:{cardClick:function(t){this.addSheet(t)}},created:function(){var t=this;fetch("https://raw.githubusercontent.com/brightestsirius/musicnotes/master/sheets.json").then((function(t){return t.json()})).then((function(e){t.sheetCategories=e.sheetCategories,t.sheetGroups=e.sheetGroups,t.sheets=e.sheets}))}}),l=c,u=(s("be81"),s("2877")),p=Object(u["a"])(l,r,o,!1,null,null,null),d=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._m(1),t._l(t.sheet,(function(e,a){return s("div",{key:e.id},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"row"},[s("img",{staticClass:"img-responsive col-4 pt-5",attrs:{src:e.preview,alt:"note"}}),s("div",{staticClass:"col-8"},[s("h5",{staticClass:"blue-text pt-5"},[t._v(t._s(e.title))]),s("h6",[t._v(t._s(e.artist))])])])]),s("div",{staticClass:"col-2 pt-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputvalue[a],expression:"inputvalue[index]"}],attrs:{type:"number",value:"1",min:"1",max:"1000",step:"1"},domProps:{value:t.inputvalue[a]},on:{input:function(e){e.target.composing||t.$set(t.inputvalue,a,e.target.value)}}}),s("div",[s("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.removeItem(a)}}},[t._v("Remove Item")])],1)]),s("div",{staticClass:"col-2 pt-5"},[s("h4",[s("strong",[t._v(t._s(e.price))])])]),s("div",{staticClass:"col-2 pt-5"},[s("h4",{ref:"price",refInFor:!0},[s("strong",[t._v(t._s(t.inputvalue[a]*e.price))])])])])])}))],2)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[t._v("My Shopping Cart")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 text-white bg-dark"},[t._v("Item Description")]),s("div",{staticClass:"col-2 text-white bg-dark"},[t._v("Quantit")]),s("div",{staticClass:"col-2 text-white bg-dark"},[t._v("Price")]),s("div",{staticClass:"col-2 text-white bg-dark"},[t._v("Total")])])}],f=(s("a434"),{name:"shoppingCard",props:["sheet"],data:function(){return{inputvalue:[1,1,1,1,1,1,1,1,1,1,1,1],price:{}}},updated:function(){var t=this.$refs["price"],e=this;function s(t){for(var s=0,a=0;a<t.length;a++)s+=+t[a].outerText;e.$set(e.price,"cost",s)}s(t),this.$emit("cost",{price:this.price.cost})},methods:{addFromNoteList:function(t){console.log(t)},removeItem:function(t){this.sheet.splice(t,1)}}}),_=f,C=(s("431e"),Object(u["a"])(_,v,h,!1,null,null,null)),m=C.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container color"},[s("h4",{staticClass:"pt-8"},[t._v("MY ORDER SUMMARY:")]),s("hr"),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Subtotal:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v(t._s(t.cost.price))])]),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Shipping & Handling:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("$"+t._s(t.user.shipping.value))])]),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Discount:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("($"+t._s(t.user.discount.value)+")")])]),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Coupon:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("($"+t._s(t.user.coupon.value)+")")])]),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Tax:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("$"+t._s(t.user.tax.value))])]),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("Gift Card:")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("($"+t._s(t.user.giftCard.value)+")")])]),s("hr"),s("div",{staticClass:"row"},[s("span",{staticClass:"col-6 text-nowrap text-left"},[t._v("ORDER TOTAL")]),t._v(" "),s("span",{staticClass:"col-6 text-right"},[t._v("$"+t._s(t.total)+"(USD)")])]),s("button",{staticClass:"btn btn-success",on:{click:t.post}},[t._v("COMPLETE ORDER")])])},b=[],x=(s("b0c0"),{props:["sheet","cost"],data:function(){return{user:[],total:"",order:{sheet:[]}}},methods:{post:function(){}},created:function(){var t=this;fetch("https://raw.githubusercontent.com/brightestsirius/musicnotes/master/user.json").then((function(t){return t.json()})).then((function(e){t.user=e.user}))},updated:function(){var t=this;function e(){t.total=+t.cost.price+ +t.user.shipping.value-+t.user.discount.value-+t.user.coupon.value+ +t.user.tax.value-t.user.giftCard.value}e(),t.$set(t.order,"id",t.user.id),t.$set(t.order,"name",t.user.name),t.$set(t.order,"price",t.total)}}),w=x,y=(s("1dee"),Object(u["a"])(w,g,b,!1,null,null,null)),O=y.exports,$=s("5f5b"),j=s("b1e0");s("f9e3"),s("2dd8");a["default"].use($["a"]),a["default"].use(j["a"]);var k={data:function(){return{sheet:[],cost:{}}},name:"App",components:{NoteList:d,shoppingCart:m,ordersummary:O},methods:{addSheet:function(t){this.sheet.push(t),console.log(this.sheet)},setCost:function(t){this.cost=t,console.log(this.cost)}}},S=k,E=(s("034f"),Object(u["a"])(S,i,n,!1,null,null,null)),G=E.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(G)}}).$mount("#app")},"5ae1":function(t,e,s){},"85ec":function(t,e,s){},b093:function(t,e,s){},be81:function(t,e,s){"use strict";var a=s("d58e"),i=s.n(a);i.a},d58e:function(t,e,s){}});
//# sourceMappingURL=app.f58a03e2.js.map