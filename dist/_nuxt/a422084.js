(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{284:function(e,t,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(111).default)("ba0abc98",content,!0,{sourceMap:!1})},285:function(e,t,r){"use strict";(function(e){var n=r(10),o=(r(63),r(79)),c=r.n(o);t.a={methods:{apiRequest:function(t,r,data){return Object(n.a)(regeneratorRuntime.mark((function n(){var o,l,m,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={"Content-Type":"application/json",Authorization:"Bearer ".concat(e.env.SECRET_API_KEY)},l="https://api.openai.com/v1/engines/text-curie-001/"+r,m={prompt:"",temperature:.5,max_tokens:64,top_p:1,frequency_penalty:0,presence_penalty:0},"post"===t&&(m.prompt=data),n.prev=4,n.next=7,c.a.post(l,m,{headers:o});case 7:return f=n.sent,n.abrupt("return",f.data.choices[0].text);case 11:n.prev=11,n.t0=n.catch(4),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[4,11]])})))()},apiPost:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.apiRequest("post",e,data);case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})))()},apiGet:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.apiRequest("get",e);case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})))()}}}}).call(this,r(137))},286:function(e,t,r){"use strict";r(284)},287:function(e,t,r){var n=r(110)(!1);n.push([e.i,".title[data-v-0b425558]{margin-top:1em}.container[data-v-0b425558]{margin:1em 0;background-color:#e2e8d9;padding:1em;border-radius:10px;box-shadow:0 0 11px rgba(135,132,132,.2)}",""]),e.exports=n},288:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(63),{mixins:[r(285).a],data:function(){return{messageArea:"",robotResponse:"",allMessageStore:[]}},mounted:function(){localStorage.allMessageStore&&(this.allMessageStore=JSON.parse(localStorage.allMessageStore))},watch:{allMessageStore:function(e){localStorage.allMessageStore=JSON.stringify(e)}},methods:{sendMessage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.apiPost("completions/",e.messageArea);case 2:r=t.sent,e.robotResponse=r,e.allMessageStore.push({prompt:e.messageArea,reply:e.robotResponse}),e.messageArea="",localStorage.setItem("allMessage",JSON.stringify(e.allMessageStore)),console.log(r);case 8:case"end":return t.stop()}}),t)})))()},clearStorage:function(){localStorage.clear()}}}),c=(r(286),r(46)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-field",{attrs:{label:"Enter Prompt"}},[r("b-input",{attrs:{maxlength:"100",type:"textarea"},model:{value:e.messageArea,callback:function(t){e.messageArea=t},expression:"messageArea"}})],1),e._v(" "),r("b-button",{attrs:{type:"is-success"},on:{click:e.sendMessage}},[e._v("submit message")]),e._v(" "),r("b-button",{attrs:{type:"is-primary"},on:{click:e.clearStorage}},[e._v("clear local storage")]),e._v(" "),r("h3",{staticClass:"title is-5"},[e._v("Responses")]),e._v(" "),e._l(e.allMessageStore,(function(t){return r("div",{key:t},[r("div",{staticClass:"container"},[r("p",[r("b",[e._v("Prompt:")]),e._v(" "+e._s(t.prompt))]),e._v(" "),r("p",[r("b",[e._v("Reply:")]),e._v(" "+e._s(t.reply))])])])}))],2)}),[],!1,null,"0b425558",null);t.default=component.exports},289:function(e,t,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(111).default)("64fbc5aa",content,!0,{sourceMap:!1})},291:function(e,t,r){"use strict";r(289)},292:function(e,t,r){var n=r(110)(!1);n.push([e.i,".container[data-v-30b8755c]{margin-top:3em;max-width:50%}",""]),e.exports=n},295:function(e,t,r){"use strict";r.r(t);var n={name:"IndexPage",components:{RequestForm:r(288).default}},o=(r(291),r(46)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title is-3"},[e._v("Fun With AI")]),e._v(" "),r("RequestForm")],1)}),[],!1,null,"30b8755c",null);t.default=component.exports;installComponents(component,{RequestForm:r(288).default})}}]);