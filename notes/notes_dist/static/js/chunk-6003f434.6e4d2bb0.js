(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6003f434"],{4024:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"note-container"},[i("div",{staticClass:"tab"},[i("div",{staticClass:"add",on:{click:t.add_note}},[t._v("新增")]),i("div",{staticClass:"fav",on:{click:t.fav_note}},[t._v("收藏")]),i("div",{staticClass:"del",on:{click:t.del_note}},[t._v("删除")])]),i("div",{directives:[{name:"touch",rawName:"v-touch:right",value:t.onSwipeRight,expression:"onSwipeRight",arg:"right"},{name:"touch",rawName:"v-touch:left",value:t.onSwipeLeft,expression:"onSwipeLeft",arg:"left"}],staticClass:"list"},[i("div",{staticClass:"switch"},[i("button",{staticClass:"all",on:{click:function(e){return t.get_switch_note("all")}}},[t._v("全部")]),i("button",{staticClass:"fav",on:{click:function(e){return t.get_switch_note("fav")}}},[t._v("已收藏")])]),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"在这里搜索"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),i("div",{staticClass:"noteList"},t._l(t.search_filteredNote,(function(e,s){return i("div",{key:s,staticClass:"note",class:{favColor:!0===e.fav,active:e.id===t.activeNote.id},on:{click:function(i){return t.get_select_note(e)}}},[i("div",{staticClass:"title"},[i("p",[t._v(t._s(e.title))])]),i("div",{staticClass:"content"},[i("p",[t._v(t._s(e.content))])])])})),0)])])},a=[],n=i("2f62"),o={name:"list",data:function(){return{search:""}},computed:{...Object(n["d"])(["notes","activeNote"]),...Object(n["c"])(["filteredNote"]),search_filteredNote(){return this.search.length>0?this.filteredNote.filter(t=>{if(t.title.indexOf(this.search)>0)return t}):this.filteredNote}},methods:{...Object(n["b"])(["select_note","switch_note","add_note","del_note","fav_note"]),get_select_note(t){this.select_note(t)},onSwipeRight(){console.log("向右"),this.$router.push({path:"/note/noteDetail",query:{data:"right"}})},onSwipeLeft(){console.log("向左"),this.$router.push({path:"/note/noteDetail",query:{data:"left"}})},get_switch_note(t){this.switch_note(t)}}},c=o,l=(i("68e5"),i("2877")),r=Object(l["a"])(c,s,a,!1,null,"3955db74",null);e["default"]=r.exports},"68e5":function(t,e,i){"use strict";i("7f86")},"7f86":function(t,e,i){}}]);
//# sourceMappingURL=chunk-6003f434.6e4d2bb0.js.map