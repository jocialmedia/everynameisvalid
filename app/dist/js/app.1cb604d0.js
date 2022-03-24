(function(){"use strict";var n={5350:function(n,e,t){var a=t(9242),l=t(3396);function r(n,e,t,a,r,o){const s=(0,l.up)("NavBar"),i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s),(0,l.Wm)(i)],64)}const o={id:"nav"},s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container"},u=(0,l.Uk)("How to validate Names"),c=(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},_={class:"navbar-nav ms-auto"},p={class:"nav-item"},g=(0,l.Uk)("Languages"),m={class:"nav-item"},f=(0,l.Uk)("Test Cases"),h={class:"nav-item"},v=(0,l.Uk)("About"),b=(0,l._)("div",{class:"alert alert-danger"},[(0,l._)("strong",null,"Please beware:"),(0,l.Uk)(" This is a prototype and work in progress. More information and content are in the "),(0,l._)("a",{href:"https://github.com/jocialmedia/how-to-validate-names"},"repository on Github")],-1);function w(n,e,t,a,r,w){const y=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("nav",s,[(0,l._)("div",i,[(0,l.Wm)(y,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[u])),_:1}),c,(0,l._)("div",d,[(0,l._)("ul",_,[(0,l._)("li",p,[(0,l.Wm)(y,{class:"nav-link",to:"/languages"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l._)("li",m,[(0,l.Wm)(y,{class:"nav-link",to:"/test-cases"},{default:(0,l.w5)((()=>[f])),_:1})]),(0,l._)("li",h,[(0,l.Wm)(y,{class:"nav-link",to:"/about"},{default:(0,l.w5)((()=>[v])),_:1})])])])])]),b])}var y={name:"NavBar",components:{}},k=t(89);const D=(0,k.Z)(y,[["render",w]]);var T=D,O={name:"App",components:{NavBar:T}};const z=(0,k.Z)(O,[["render",r]]);var L=z,H=t(678);const x={class:"container"},E={class:"row"};function P(n,e,t,a,r,o){const s=(0,l.up)("PlayWithNames");return(0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",E,[(0,l.Wm)(s)])])}const j={class:"hello"},I=(0,l._)("h2",null,"Play With Names",-1),N=(0,l.uE)('<div class="panel-body"><ul><li> Input: <span id="input"></span></li><li> Number of characters: <span id="number_of_chars"></span></li><li> Number of individual characters: <span id="number_of_individual_chars"></span></li><li> Individual Characters: <span id="characters"></span></li></ul></div>',1);function W(n,e,t,r,o,s){return(0,l.wg)(),(0,l.iD)("div",j,[I,(0,l._)("form",null,[(0,l.wy)((0,l._)("input",{class:"form-control input-lg","onUpdate:modelValue":e[0]||(e[0]=e=>n.input_full_name=e),id:"input_full_name",placeholder:"Full name",type:"text"},null,512),[[a.nr,n.input_full_name]])]),N])}var C={name:"PlayWithNames",props:{msg:String},data(){return{original_input:"",number_of_chars:0,number_of_individual_chars:0,input:""}},mounted(){document.getElementById("input_full_name").addEventListener("keyup",this.analyze)},methods:{analyze:function(n){console.log(n),console.log(this);let e="",t="",a=0,l=0;function r(n,e){return n.localeCompare(e)}e=document.getElementById("input_full_name").value,t=e,e=e.trim(),e=e.replace(/\s/g,""),e=e.toLowerCase(),a=e.length,e=Array.from(new Set(e)),l=e.length,e=e.sort(r),document.getElementById("input").innerHTML=t,document.getElementById("number_of_chars").innerHTML=a,document.getElementById("number_of_individual_chars").innerHTML=l,document.getElementById("characters").innerHTML=e}}};const S=(0,k.Z)(C,[["render",W]]);var U=S,A={name:"HomePage",components:{PlayWithNames:U}};const M=(0,k.Z)(A,[["render",P]]);var B=M,Z=t(7139);const Y={class:"container"},K={class:"row"},F=(0,l._)("h1",null,"Languages and Alphabets",-1),V=(0,l._)("h2",null,"Languages",-1),G={class:"table table-bordered table-striped"},J=(0,l._)("thead",null,[(0,l._)("th",null,"ID"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Local Name"),(0,l._)("th",null,[(0,l.Uk)("ISO"),(0,l._)("span",{class:"nowrap"},"639-2")]),(0,l._)("th",null,"On national level"),(0,l._)("th",null,"On subnational level"),(0,l._)("th",null,[(0,l._)("span",{class:"nowrap"},"EU language"),(0,l.Uk)(),(0,l._)("br"),(0,l.Uk)("since")])],-1),q=["href"],Q=(0,l._)("h2",null,"Alphabets",-1),R={class:"table table-bordered table-striped"},X=(0,l._)("thead",null,[(0,l._)("th",null,"ID"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Alphabet")],-1);function $(n,e,t,a,r,o){return(0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("div",K,[F,V,(0,l._)("table",G,[J,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filteredLanguages,((n,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:n.id},[(0,l._)("td",null,(0,Z.zw)(e+1),1),(0,l._)("td",null,[(0,l._)("a",{href:n.wikipedia_en},(0,Z.zw)(n.language),9,q)]),(0,l._)("td",null,(0,Z.zw)(n.local_name),1),(0,l._)("td",null,(0,Z.zw)(n.iso_639_2),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.spoken_national_level,(n=>((0,l.wg)(),(0,l.iD)("span",{key:n.id},(0,Z.zw)(n)+", ",1)))),128))]),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.spoken_subnational_level,(n=>((0,l.wg)(),(0,l.iD)("span",{key:n.id},(0,Z.zw)(n)+", ",1)))),128))]),(0,l._)("td",null,(0,Z.zw)(n.eu_language_since),1)])))),128))])]),Q,(0,l._)("table",R,[X,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filteredLanguages,((n,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:n.id},[(0,l._)("td",null,(0,Z.zw)(e+1),1),(0,l._)("td",null,(0,Z.zw)(n.language),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.alphabet_chars,(n=>((0,l.wg)(),(0,l.iD)("span",{key:n.id,class:"letter"},(0,Z.zw)(n),1)))),128))])])))),128))])])])])}var nn=t(6265),en=t.n(nn),tn={name:"LanguagesPage",data(){return{languages:[],filteredLanguages:[]}},components:{},mounted(){en().get("data/languages.json").then((n=>{const e=n.data;this.filteredLanguages=e.filter((n=>n.category.includes("eu")))}))}};const an=(0,k.Z)(tn,[["render",$]]);var ln=an;const rn={class:"container"},on={class:"row"},sn=(0,l._)("h1",null,"Test Cases",-1),un=(0,l._)("p",null,"WIP.",-1),cn={class:"table table-bordered table-striped"},dn=(0,l._)("thead",null,[(0,l._)("th"),(0,l._)("th"),(0,l._)("th")],-1);function _n(n,e,t,a,r,o){return(0,l.wg)(),(0,l.iD)("div",rn,[(0,l._)("div",on,[sn,un,(0,l._)("table",cn,[dn,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filteredTestCases,((n,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:n.id},[(0,l._)("td",null,(0,Z.zw)(e+1),1),(0,l._)("td",null,(0,Z.zw)(n.language),1),(0,l._)("td",null,(0,Z.zw)(n.use_case),1),(0,l._)("td",null,(0,Z.zw)(n.example_first_name),1),(0,l._)("td",null,(0,Z.zw)(n.example_last_name),1)])))),128))])])])])}var pn={name:"TestCases",data(){return{test_cases:[],filteredTestCases:[]}},components:{},mounted(){en().get("data/test-data.json").then((n=>{const e=n.data;this.filteredTestCases=e}))}};const gn=(0,k.Z)(pn,[["render",_n]]);var mn=gn;const fn={class:"container"},hn=(0,l._)("div",{class:"row"},[(0,l._)("h1",null,"About"),(0,l._)("h2",null,"Impressum"),(0,l._)("p",null,"Verantwortlich: J. Leistikow, Eidelstedter Weg 103, 20255 Hamburg")],-1),vn=[hn];function bn(n,e,t,a,r,o){return(0,l.wg)(),(0,l.iD)("div",fn,vn)}var wn={name:"AboutPage",components:{}};const yn=(0,k.Z)(wn,[["render",bn]]);var kn=yn;const Dn=(0,l._)("h1",null,"404",-1),Tn=(0,l._)("p",null,"Sorry but it looks like the page you are looking for does not exist.",-1);function On(n,e){return(0,l.wg)(),(0,l.iD)(l.HY,null,[Dn,Tn],64)}const zn={},Ln=(0,k.Z)(zn,[["render",On]]);var Hn=Ln;const xn=[{path:"/",name:"Home",component:B},{path:"/languages",name:"Languages",component:ln},{path:"/test-cases",name:"Test Cases",component:mn},{path:"/about",name:"About",component:kn},{path:"/:catchAll(.*)",component:Hn}],En=(0,H.p7)({history:(0,H.r5)(),routes:xn});var Pn=En,jn=(t(8937),t(6423));const In=(0,a.ri)(L);In.use(jn.Z,en()),In.use(Pn),In.mount("#app")}},e={};function t(a){var l=e[a];if(void 0!==l)return l.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return n[a](r,r.exports,t),r.loaded=!0,r.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(e,a,l,r){if(!a){var o=1/0;for(c=0;c<n.length;c++){a=n[c][0],l=n[c][1],r=n[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&r||o>=r)&&Object.keys(t.O).every((function(n){return t.O[n](a[i])}))?a.splice(i--,1):(s=!1,r<o&&(o=r));if(s){n.splice(c--,1);var u=l();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[a,l,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var l,r,o=a[0],s=a[1],i=a[2],u=0;if(o.some((function(e){return 0!==n[e]}))){for(l in s)t.o(s,l)&&(t.m[l]=s[l]);if(i)var c=i(t)}for(e&&e(a);u<o.length;u++)r=o[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(c)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(5350)}));a=t.O(a)})();
//# sourceMappingURL=app.1cb604d0.js.map