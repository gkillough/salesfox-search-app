(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),o=n.n(i),r=(n(64),n(65),n(39)),s=n(14),l=n(103),j=n(106),d=n(108),b=n(117),u=n(2),h=Object(l.a)((function(e){return{appbar:Object(s.a)({padding:"0 5em"},e.breakpoints.down("sm"),{padding:"0"}),logoContainer:{padding:0,"&:hover":{backgroundColor:"transparent"}},logo:Object(s.a)({height:"4em"},e.breakpoints.down("sm"),{height:"3em"}),button:Object(r.a)(Object(r.a)({},e.actionButton),{},Object(s.a)({marginLeft:"auto",marginRight:e.spacing(2),"&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{padding:"0"})),loginButton:{marginRight:e.spacing(2)}}})),p=function(){var e=h();return Object(u.jsx)(j.a,{color:"transparent",elevation:0,position:"static",className:e.appbar,children:Object(u.jsx)(d.a,{disableGutters:!0,children:Object(u.jsx)(b.a,{disableRipple:!0,className:e.logoContainer,children:Object(u.jsx)("img",{alt:"salesfox logo",className:e.logo,src:"https://assets.salesfox.ai/salesfox%20logo%20final.png"})})})})},x=n(7),m=n.n(x),O=n(12),f=n(15),g=n(114),v=n(113),y=n(74),w=n(115),k=n(109),N=n(112),R=n(110),S=n(111),C=Object(l.a)({root:{minWidth:325,width:"100%",margin:30,height:350,overflow:"auto",borderRadius:25},title:{color:"#3f51b5"},pos:{marginBottom:12},media:{height:150}});function I(e){var t=e.title,n=e.text,a=e.weather,c=(e.weatherIcon,C());return Object(u.jsx)(k.a,{className:c.root,children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(y.a,{variant:"h5",component:"h2",className:c.title,children:t}),a[4]?Object(u.jsx)(S.a,{className:c.media,image:a[4].conditions[0].iconUrl,title:a[4].conditions[0].summary}):Object(u.jsx)(y.a,{className:c.pos,color:"textSecondary",children:"No Data"}),Object(u.jsx)(y.a,{className:c.pos,color:"textSecondary",children:"Top Results:"}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:n[0]?n[0].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:n[0]&&n[0].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:n[1]?n[1].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:n[1]&&n[1].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:n[2]?n[2].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:n[2]&&n[2].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})})]})})}var z=n(116),W=n(51),F="#e14536",D=Object(l.a)((function(e){return{paper:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"space-between"},submit:{width:"100%",background:F,border:"1px solid ".concat("#3f3d56"),color:"#FAF8F8","&:hover":{background:F,"@media (hover: none)":{backgroundColor:F}}},title:{color:F},textInput:{marginBottom:10}}}));function B(e){var t=e.getNews,n=e.getIndustry,c=e.getCompany,i=e.getPersona,o=e.getWeather,r=e.setIsResultView,s=D(),l=Object(W.a)(),j=l.register,d=l.handleSubmit,h=(l.errors,Object(a.useState)(!1)),p=Object(f.a)(h,2),x=(p[0],p[1],function(){var e=Object(O.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a.interest||a.industry||"news",a.locationB||"75024");case 2:return e.next=4,n(a.industry||"Computer Software",a.locationB||"75024");case 4:return e.next=6,c(a.company||"Google");case 6:return e.next=8,i(a.persona||"Software Developer",a.locationB||"75024");case 8:return e.next=10,o(a.locationB||"75024");case 10:r(!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y.a,{variant:"h1",align:"center",className:s.title,children:"Salesfox Search"}),Object(u.jsx)(y.a,{variant:"body2",component:"p",align:"center",children:"Note: Results can take up to 15 seconds to retrieve."}),Object(u.jsxs)(v.a,{component:"form",spacing:1,container:!0,onSubmit:d(x),children:[Object(u.jsx)(v.a,{container:!0,xs:5,children:Object(u.jsxs)("div",{className:s.paper,children:[Object(u.jsx)(y.a,{variant:"subtitle1",children:"Account Based"}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{name:"name",variant:"outlined",fullWidth:!0,id:"name",label:"Name (Coming Soon)",placeholder:"John doe",autoFocus:!0,size:"small",disabled:!0,inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"title",label:"Title (Coming Soon)",placeholder:"CEO",name:"title",size:"small",disabled:!0,inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"url",label:"LinkedIn (Coming Soon)",placeholder:"www.linkedin.com/in",name:"url",size:"small",disabled:!0,inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"company",label:"Company",placeholder:"Google",name:"company",size:"small",inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"website",label:"Website (Coming Soon)",placeholder:"www.google.com",name:"website",size:"small",disabled:!0,inputRef:j,className:s.textInput})})]})}),Object(u.jsx)(v.a,{container:!0,xs:5,children:Object(u.jsxs)("div",{className:s.paper,children:[Object(u.jsx)(y.a,{variant:"subtitle1",children:"General"}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{name:"persona",variant:"outlined",fullWidth:!0,id:"persona",label:"Persona",placeholder:"Software Developer",autoFocus:!0,size:"small",inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"industry",label:"Industry",placeholder:"Computer Software",name:"industry",size:"small",inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"market",label:"Market (Coming Soon)",placeholder:"Corporate gifting tool",name:"market",size:"small",disabled:!0,inputRef:j,className:s.textInput})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"locationB",label:"Zip Code*",placeholder:"75244",name:"locationB",size:"small",inputRef:j({required:!0})})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(z.a,{variant:"outlined",fullWidth:!0,id:"interest",label:"Interest",placeholder:"Hockey",name:"interest",size:"small",inputRef:j,className:s.textInput})})]})}),Object(u.jsx)(v.a,{item:!0,xs:12,children:Object(u.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",className:s.submit,fullWidth:!0,disableElevation:!0,children:"Search"})})]})]})}var U=Object(l.a)({root:{minWidth:325,width:"100%",margin:20,height:350,overflow:"auto",borderRadius:25},pos:{marginBottom:12},title:{color:"#3f51b5"}});function L(e){var t=e.title,n=e.text,a=U(),c=n||{};return Object(u.jsx)(k.a,{className:a.root,children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(y.a,{variant:"h5",component:"h2",className:a.title,children:t}),Object(u.jsx)(y.a,{className:a.pos,color:"textSecondary",children:"Top Results:"}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:c[0]?c[0].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:c[0]&&c[0].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:c[1]?c[1].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:c[1]&&c[1].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"body2",component:"p",children:c[2]?c[2].title:"Unable to Retrieve Data"}),Object(u.jsx)(N.a,{children:Object(u.jsx)("a",{href:c[2]&&c[2].link,style:{textDecoration:"none"},children:Object(u.jsx)(b.a,{size:"small",children:"Learn More"})})})]})})}var M=Object(l.a)({root:{minWidth:325,width:"100%",margin:20,height:350,overflow:"auto",borderRadius:25},pos:{marginBottom:12},title:{color:"#3f51b5"}});function P(e){var t=e.title,n=e.data,a=M(),c=[];return n&&n.companies&&n.companies.forEach((function(e){c.push(Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Name: ",e.name?e.name:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Industry: ",e.industry?e.industry:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Size: ",e.size?e.size:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Website: ",e.website?e.website:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Year Founded: ",e.year_founded?e.year_founded:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Country: ",e.country?e.country:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Region: ",e.region?e.region:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["Locality: ",e.locality?e.locality:"Unknown"]}),Object(u.jsxs)(y.a,{variant:"body2",component:"p",children:["LinkedIn: ",e.linkedin_url?e.linkedin_url:"Unknown"]})]}))})),void 0!==c&&0!=c.length||c.push(Object(u.jsx)("div",{children:Object(u.jsx)(y.a,{variant:"body2",component:"p",children:"No results found."})})),Object(u.jsx)(k.a,{className:a.root,children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(y.a,{variant:"h5",component:"h2",className:a.title,children:t}),Object(u.jsx)(y.a,{className:a.pos,color:"textSecondary",children:"Top Results:"}),c]})})}var T="#e14536",_=Object(l.a)((function(e){return{submit:{width:"100%",background:T,border:"1px solid ".concat("#3f3d56"),color:"#FAF8F8","&:hover":{background:T,"@media (hover: none)":{backgroundColor:T}}},topRow:{display:"flex",justifyContent:"space-between"}}}));function A(){var e=_(),t=Object(a.useState)([]),n=Object(f.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)([]),r=Object(f.a)(o,2),s=r[0],l=r[1],j=Object(a.useState)([]),d=Object(f.a)(j,2),h=d[0],p=d[1],x=Object(a.useState)([]),k=Object(f.a)(x,2),N=k[0],R=k[1],S=Object(a.useState)([]),C=Object(f.a)(S,2),z=C[0],W=C[1],F=Object(a.useState)(!1),D=Object(f.a)(F,2),U=D[0],M=D[1];function T(e,t){return A.apply(this,arguments)}function A(){return(A=Object(O.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/news?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){i(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return q.apply(this,arguments)}function q(){return(q=Object(O.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/industry?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){l(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return J.apply(this,arguments)}function J(){return(J=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/companies?name=".concat(t)).then((function(e){return e.json()})).then((function(e){p(e)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return H.apply(this,arguments)}function H(){return(H=Object(O.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/persona?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){R(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return K.apply(this,arguments)}function K(){return(K=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/weather?zip_code=".concat(t)).then((function(e){return e.json()})).then((function(e){W(e.weather)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)(g.a,{maxWidth:"lg",children:[U?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:e.topRow,children:[Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(L,{title:"Prospect Results",text:"COMING SOON"})}),Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(P,{title:"Company Results",data:h})}),Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(I,{title:"Location Results",text:c,weather:z,weatherIcon:z})})]}),Object(u.jsxs)("div",{className:e.topRow,children:[Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(L,{title:"Persona Results",text:N})}),Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(L,{title:"Interest Results",text:"COMING SOON"})}),Object(u.jsx)(v.a,{xs:3,children:Object(u.jsx)(L,{title:"Market Results",text:s})})]}),Object(u.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disableElevation:!0,onClick:function(){return M(!1)},children:"Search Again"})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(B,{getNews:T,getIndustry:G,getCompany:E,getPersona:V,getWeather:Z,setIsResultView:M})}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"body2",component:"p",align:"center",children:Object(u.jsx)(w.a,{color:"inherit",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSf-0rkzp6h2vFz0hTKMT9jVnWNjZmoBGpPSsq-uauxb8SJI8A/viewform",children:"Click Here To Provide Feedback"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})}var G=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsx)(A,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),q()}},[[73,1,2]]]);
//# sourceMappingURL=main.ec6c91d2.chunk.js.map