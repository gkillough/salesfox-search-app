(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),i=n.n(o),r=(n(64),n(65),n(41)),s=n(15),l=n(103),d=n(106),j=n(108),u=n(117),b=n(2),h=Object(l.a)((function(e){return{appbar:Object(s.a)({padding:"0 5em"},e.breakpoints.down("sm"),{padding:"0"}),logoContainer:{padding:0,"&:hover":{backgroundColor:"transparent"}},logo:Object(s.a)({height:"4em"},e.breakpoints.down("sm"),{height:"3em"}),button:Object(r.a)(Object(r.a)({},e.actionButton),{},Object(s.a)({marginLeft:"auto",marginRight:e.spacing(2),"&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{padding:"0"})),loginButton:{marginRight:e.spacing(2)}}})),p=function(){var e=h();return Object(b.jsx)(d.a,{color:"transparent",elevation:0,position:"static",className:e.appbar,children:Object(b.jsx)(j.a,{disableGutters:!0,children:Object(b.jsx)(u.a,{disableRipple:!0,className:e.logoContainer,children:Object(b.jsx)("img",{alt:"salesfox logo",className:e.logo,src:"https://assets.salesfox.ai/salesfox%20logo%20final.png"})})})})},m=n(8),x=n.n(m),O=n(12),f=n(14),g=n(113),v=n(112),y=n(74),w=n(115),k=n(114),N=n(109),S=n(111),C=n(110),R=Object(l.a)({root:{minWidth:325,width:"100%",margin:30,height:350,overflow:"auto",borderRadius:25},title:{color:"#3f51b5"},pos:{marginBottom:12},media:{height:150}});function I(e){var t=e.title,n=e.text,a=e.weather,c=(e.weatherIcon,R());return Object(b.jsx)(N.a,{className:c.root,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(y.a,{variant:"h5",component:"h2",className:c.title,children:t}),a[4]?Object(b.jsx)(y.a,{className:c.pos,color:"textSecondary",children:a[4].conditions[0].summary}):Object(b.jsx)(y.a,{className:c.pos,color:"textSecondary",children:"No Data"}),Object(b.jsx)(y.a,{className:c.pos,color:"textSecondary",children:"Top Results:"}),n.length?n.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{variant:"body2",component:"p",children:e.title}),Object(b.jsx)(S.a,{children:Object(b.jsx)("a",{href:e.link,style:{textDecoration:"none"},children:Object(b.jsx)(u.a,{size:"small",variant:"outlined",children:"Learn More"})})}),Object(b.jsx)("br",{})]})})):Object(b.jsx)(y.a,{variant:"body2",component:"p",children:"No Data"})]})})}var W=n(116),z=n(51),F="#e14536",B=Object(l.a)((function(e){return{paper:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"space-between"},submit:{width:"100%",background:F,border:"1px solid ".concat("#3f3d56"),color:"#FAF8F8","&:hover":{background:F,"@media (hover: none)":{backgroundColor:F}}},title:{color:F},textInput:{marginBottom:10}}}));function L(e){var t=e.getNews,n=e.getIndustry,c=e.getCompany,o=e.getPersona,i=e.getWeather,r=e.setIsResultView,s=e.setIsDataLoading,l=B(),d=Object(z.a)(),j=d.register,h=d.handleSubmit,p=(d.errors,Object(a.useState)(!1)),m=Object(f.a)(p,2),g=(m[0],m[1],function(){var e=Object(O.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t(a.interest||a.industry,a.locationB);case 3:return e.next=5,n(a.industry,a.locationB);case 5:return e.next=7,c(a.company);case 7:return e.next=9,o(a.persona,a.locationB);case 9:return e.next=11,i(a.locationB);case 11:r(!0),s(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{variant:"h1",align:"center",className:l.title,children:"Salesfox Search"}),Object(b.jsxs)(v.a,{component:"form",spacing:1,container:!0,onSubmit:h(g),children:[Object(b.jsx)(v.a,{container:!0,xs:6,children:Object(b.jsxs)("div",{className:l.paper,children:[Object(b.jsx)(y.a,{variant:"subtitle1",children:"Account Based"}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{name:"name",variant:"outlined",fullWidth:!0,id:"name",label:"Name (Coming Soon)",placeholder:"John doe",autoFocus:!0,size:"small",disabled:!0,inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"title",label:"Title (Coming Soon)",placeholder:"CEO",name:"title",size:"small",disabled:!0,inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"url",label:"LinkedIn (Coming Soon)",placeholder:"www.linkedin.com/in",name:"url",size:"small",disabled:!0,inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"company",label:"Customer Company",placeholder:"eg. Google",name:"company",size:"small",inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"website",label:"Website (Coming Soon)",placeholder:"www.google.com",name:"website",size:"small",disabled:!0,inputRef:j,className:l.textInput})})]})}),Object(b.jsx)(v.a,{container:!0,xs:6,children:Object(b.jsxs)("div",{className:l.paper,children:[Object(b.jsx)(y.a,{variant:"subtitle1",children:"General"}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{name:"persona",variant:"outlined",fullWidth:!0,id:"persona",label:"Persona",placeholder:"eg Software Developer",autoFocus:!0,size:"small",inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"industry",label:" Customer Industry",placeholder:"eg Computer Software",name:"industry",size:"small",inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"market",label:"Market (Coming Soon)",placeholder:"Corporate gifting tool",name:"market",size:"small",disabled:!0,inputRef:j,className:l.textInput})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"locationB",label:"Customer Zip Code*",placeholder:"eg 75244",name:"locationB",size:"small",inputRef:j({required:!0})})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(W.a,{variant:"outlined",fullWidth:!0,id:"interest",label:"Customer Interest",placeholder:"eg Hockey",name:"interest",size:"small",inputRef:j,className:l.textInput})})]})}),Object(b.jsx)(v.a,{item:!0,xs:12,children:Object(b.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:l.submit,fullWidth:!0,disableElevation:!0,children:"Search"})})]})]})}var D=Object(l.a)({root:{minWidth:325,width:"100%",margin:20,height:350,overflow:"auto",borderRadius:25},pos:{marginBottom:12},title:{color:"#3f51b5"}});function P(e){var t=e.title,n=e.text,a=D(),c=n||[];return Object(b.jsx)(N.a,{className:a.root,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(y.a,{variant:"h5",component:"h2",className:a.title,children:t}),Object(b.jsx)(y.a,{className:a.pos,color:"textSecondary",children:"Top Results:"}),c.length?c.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{variant:"body2",component:"p",children:e.title}),Object(b.jsx)(S.a,{children:Object(b.jsx)("a",{href:e.link,style:{textDecoration:"none"},children:Object(b.jsx)(u.a,{size:"small",variant:"outlined",children:"Learn More"})})}),Object(b.jsx)("br",{})]})})):Object(b.jsx)(y.a,{variant:"body2",component:"p",children:"No Data"})]})})}var T=Object(l.a)({root:{minWidth:325,width:"100%",margin:20,height:350,overflow:"auto",borderRadius:25},pos:{marginBottom:12},title:{color:"#3f51b5"}});function U(e){var t=e.title,n=e.data,a=T(),c=[];return n&&n.companies&&n.companies.forEach((function(e){c.push(Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Name: ",e.name?e.name:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Industry: ",e.industry?e.industry:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Size: ",e.size?e.size:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Website: ",e.website?e.website:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Year Founded: ",e.year_founded?e.year_founded:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Country: ",e.country?e.country:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Region: ",e.region?e.region:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["Locality: ",e.locality?e.locality:"Unknown"]}),Object(b.jsxs)(y.a,{variant:"body2",component:"p",children:["LinkedIn: ",e.linkedin_url?e.linkedin_url:"Unknown"]})]}))})),void 0!==c&&0!=c.length||c.push(Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"body2",component:"p",children:"No results found."})})),Object(b.jsx)(N.a,{className:a.root,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(y.a,{variant:"h5",component:"h2",className:a.title,children:t}),Object(b.jsx)(y.a,{className:a.pos,color:"textSecondary",children:"Top Results:"}),c]})})}var _=Object(l.a)({root:{minWidth:325,width:"100%",margin:20,height:350,overflow:"auto",borderRadius:25},pos:{marginBottom:12},title:{color:"#3f51b5"}});function A(e){var t=e.title,n=_();return Object(b.jsx)(N.a,{className:n.root,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(y.a,{variant:"h5",component:"h2",className:n.title,children:t}),Object(b.jsx)(y.a,{className:n.pos,color:"textSecondary",children:"COMING SOON"})]})})}var M="#e14536",q=Object(l.a)((function(e){return{submit:{width:"100%",background:M,border:"1px solid ".concat("#3f3d56"),color:"#FAF8F8","&:hover":{background:M,"@media (hover: none)":{backgroundColor:M}}},topRow:{display:"flex",justifyContent:"space-between"}}}));function E(){var e=q(),t=Object(a.useState)([]),n=Object(f.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)([]),r=Object(f.a)(i,2),s=r[0],l=r[1],d=Object(a.useState)([]),j=Object(f.a)(d,2),h=j[0],p=j[1],m=Object(a.useState)([]),N=Object(f.a)(m,2),S=N[0],C=N[1],R=Object(a.useState)([]),W=Object(f.a)(R,2),z=W[0],F=W[1],B=Object(a.useState)(!1),D=Object(f.a)(B,2),T=D[0],_=D[1],M=Object(a.useState)(!1),E=Object(f.a)(M,2),G=E[0],J=E[1];function V(e,t){return H.apply(this,arguments)}function H(){return(H=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/news?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){o(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return K.apply(this,arguments)}function K(){return(K=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/industry?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){l(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/companies?name=".concat(t)).then((function(e){return e.json()})).then((function(e){p(e)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return $.apply(this,arguments)}function $(){return($=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/persona?q=".concat(t,"&zip_code=").concat(n)).then((function(e){return e.json()})).then((function(e){C(e.items)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://search-beta.salesfox.ai/api/weather?zip_code=".concat(t)).then((function(e){return e.json()})).then((function(e){F(e.weather)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(g.a,{maxWidth:"xl",children:Object(b.jsxs)(b.Fragment,{children:[G&&Object(b.jsx)(k.a,{}),T?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:e.topRow,children:[Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(A,{title:"Prospect Results"})}),Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(U,{title:"Company Results",data:h})}),Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(I,{title:"Location Results",text:c,weather:z,weatherIcon:z})})]}),Object(b.jsxs)("div",{className:e.topRow,children:[Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(P,{title:"Persona Results",text:S})}),Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(A,{title:"Interest Results"})}),Object(b.jsx)(v.a,{xs:3,children:Object(b.jsx)(P,{title:"Market Results",text:s})})]}),Object(b.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disableElevation:!0,onClick:function(){return _(!1)},children:"Search Again"})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(L,{getNews:V,getIndustry:Z,getCompany:Q,getPersona:X,getWeather:ee,setIsResultView:_,setIsDataLoading:J})}),Object(b.jsx)("br",{}),Object(b.jsx)(y.a,{variant:"body2",component:"p",align:"center",children:Object(b.jsx)(w.a,{color:"inherit",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSf-0rkzp6h2vFz0hTKMT9jVnWNjZmoBGpPSsq-uauxb8SJI8A/viewform",children:"Click Here To Provide Feedback"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})}var G=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(E,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),J()}},[[73,1,2]]]);
//# sourceMappingURL=main.0c51f481.chunk.js.map