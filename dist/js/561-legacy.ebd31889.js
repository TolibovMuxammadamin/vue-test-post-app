"use strict";(self["webpackChunkvue_post_app"]=self["webpackChunkvue_post_app"]||[]).push([[561],{5561:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex mb-3"},[n("h1",[t._v("Post view")]),n("v-spacer"),n("v-btn",{staticClass:"mr-3",attrs:{color:"info",outlined:""},on:{click:function(e){t.formModal=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Edit ")],1),n("v-btn",{attrs:{color:"error",outlined:""},on:{click:function(e){t.deleteModal=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),t._v(" Detele ")],1)],1),n("v-slide-y-transition",[t.postLoading?t._e():n("PostItem",{attrs:{post:t.post,"hide-actions":""}})],1),t.postLoading?n("PostLoader"):t._e(),n("h3",{staticClass:"mb-3"},[t._v("Comments")]),t.commentsLoading?n("v-progress-linear",{attrs:{indeterminate:""}}):t._e(),t.comments.length>0?[n("v-slide-y-transition",{attrs:{group:""}},t._l(t.comments,(function(t){return n("CommentItem",{key:t.id,attrs:{comment:t}})})),1)]:t._e(),n("v-snackbar",{attrs:{color:"error",timeout:"2000"},model:{value:t.errSnackbar,callback:function(e){t.errSnackbar=e},expression:"errSnackbar"}},[t._v(" "+t._s(t.err)+" ")]),n("UIModal",{attrs:{title:"Post Form"},model:{value:t.formModal,callback:function(e){t.formModal=e},expression:"formModal"}},[t.formModal?n("PostForm",{attrs:{"form-object":t.post},on:{"close-modal":function(e){t.formModal=!1},submited:t.updatePost}}):t._e()],1),n("UIModal",{attrs:{title:"Are you sure delete this item?",width:"500"},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}},[n("ConfirmDelete",{on:{yes:t.deletePost,no:function(e){t.deleteModal=!1}}})],1)],2)},o=[],i=n(6198),r=(n(5666),n(2018)),a=n(917),c=n(6489),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mb-4"},[n("v-card-title",[n("span",{staticClass:"overline"},[t._v(t._s(t.comment.name))]),n("v-spacer"),n("span",{staticClass:"caption"},[t._v(t._s(t.comment.email))])],1),n("v-card-text",{staticClass:"subtitle-2"},[t._v(t._s(t.comment.body))])],1)},u=[],m={name:"CommentItem",props:{comment:Object}},d=m,h=n(1001),p=n(3453),v=n.n(p),f=n(3237),g=n(7118),k=n(9762),b=(0,h.Z)(d,l,u,!1,null,"77304ddb",null),_=b.exports;v()(b,{VCard:f.Z,VCardText:g.ZB,VCardTitle:g.EB,VSpacer:k.Z});var w=n(4722),Z=n(7957),C=n(9843),x={name:"PostView",components:{ConfirmDelete:C.Z,PostForm:Z.Z,UIModal:w.Z,CommentItem:_,PostLoader:c.Z,PostItem:r.Z},data:function(){return{post:new a.Z,postLoading:!0,comments:[],commentsLoading:!1,err:"",errSnackbar:!1,formModal:!1,deleteModal:!1}},methods:{fetchPost:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.postLoading=!0,e.t0=a.Z,e.next=5,a.Z.fetchById(t.$route.params.id);case 5:e.t1=e.sent,t.post=new e.t0(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e["catch"](0),t.showErr("Oops!! Something went wrong");case 12:return e.prev=12,t.postLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},fetchComments:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commentsLoading=!0,e.next=3,a.Z.fetchPostComments(t.$route.params.id);case 3:t.comments=e.sent,t.commentsLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},updatePost:function(t){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=a.Z,n.next=3,t.update();case 3:n.t1=n.sent,e.post=new n.t0(n.t1),e.formModal=!1;case 6:case"end":return n.stop()}}),n)})))()},deletePost:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.remove(t.post.id);case 2:t.deleteModal=!1,t.showErr("Post deleted!!!");case 4:case"end":return e.stop()}}),e)})))()},showErr:function(t){var e=this;this.err=t,this.errSnackbar=!0,setTimeout((function(){e.$router.push("/")}),2500)}},mounted:function(){this.fetchPost(),this.fetchComments()}},T=x,P=n(4345),y=n(6428),M=n(3142),B=n(5827),L=n(3796),S=(n(9653),n(6699),n(5477)),E=n(6952),V=n(8085),$=n(2936),I=n(3536),R=n(3325),A=n(4589),D=n(1824),F=(0,R.Z)(S.Z,E.Z,$.Z,(0,I.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:V.Z.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,s=t.footer,o=t.insetFooter,i=t.left,r=t.right,a=t.top;return{paddingBottom:(0,A.kb)(n+s+o),paddingLeft:(0,A.kb)(i),paddingRight:(0,A.kb)(r),paddingTop:(0,A.kb)(e+a)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&(0,D.Jk)("auto-height",this),0==this.timeout&&(0,D.Rn)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,A.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:(0,L.Z)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[(0,A.z9)(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,n=e(this.color,{staticClass:"v-snack__wrapper",class:S.Z.options.computed.classes.call(this),style:S.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",n,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),O=(0,h.Z)(T,s,o,!1,null,"50038649",null),U=O.exports;v()(O,{VBtn:P.Z,VIcon:y.Z,VProgressLinear:M.Z,VSlideYTransition:B.cu,VSnackbar:F,VSpacer:k.Z})}}]);
//# sourceMappingURL=561-legacy.ebd31889.js.map