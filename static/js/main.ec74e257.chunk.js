/*! For license information please see main.ec74e257.chunk.js.LICENSE.txt */
(this["webpackJsonpdatascore-reactjs"]=this["webpackJsonpdatascore-reactjs"]||[]).push([[0],{174:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){},331:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(41),o=t.n(l),s=t(24),c=t(59);function i(){var e=Object(c.a)(["\n    query person($orcid: ID!) {\n        person(id: $orcid) {\n          id: id\n          name: name\n          datasets {\n            nodes {\n              id: id\n              downloadCount: downloadCount\n              viewCount\n              citations {\n                totalCount\n              }\n            }\n          }\n        }\n\n\n    }\n  "]);return i=function(){return e},e}function m(){var e=Object(c.a)(["\n  query Dog ($breed: String!) {\n    dog(breed: $breed) {\n      id\n      displayImage\n    }\n  }\n"]);return m=function(){return e},e}var d=new s.ApolloClient({uri:"https://api.datacite.org/graphql",cache:new s.InMemoryCache}),u=(Object(s.gql)(m()),Object(s.gql)(i()));var p=t(34),h=t(42),b=(t(174),t(175),t(176),t(10)),f=t(11),E=t(13),g=t(12),y=(t.p,t(177),t(344)),w=t(336),v=t(345),k=t(334),x=t(335),N=t(337),C=t(338),j=t(339),S=t(352),D=t(340);function O(e){return r.a.createElement(k.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(x.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(N.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},e.fullName)),r.a.createElement(C.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-yellow text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-users"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fab fa-orcid"}))," ",r.a.createElement("a",{href:e.orcid,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"text-nowrap"},e.orcid)))))}function T(e){return r.a.createElement(k.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(x.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(N.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title)),r.a.createElement(C.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-danger text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-chart-bar"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("a",{href:e.orcid,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"text-nowrap"},e.orcid))),r.a.createElement("div",null,r.a.createElement(j.a,{className:"align-items-center",responsive:!0},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Dataset"),r.a.createElement("th",{scope:"col"},"Views"),r.a.createElement("th",{scope:"col"},"Downloads"),r.a.createElement("th",{scope:"col"},"Citations")),r.a.createElement("tbody",null,e.datasets.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{key:e.id},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fas fa-database"})),r.a.createElement("a",{href:e.id,target:"_blank",rel:"noreferrer"},e.id)),r.a.createElement("td",{key:e.id},e.viewCount),r.a.createElement("td",{key:e.id},e.downloadCount),r.a.createElement("td",{key:e.id},e.citations.totalCount))})))))))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].downloadCount;return a}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].viewCount;return a}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].citations.totalCount;return a}function W(e){return r.a.createElement(k.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(x.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(N.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},e.fullName)),r.a.createElement(C.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-primary text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-chart-pie"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("span",{id:"ViewToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"far fa-eye"})),r.a.createElement("span",{className:"text-nowrap"},I(e.datasets))),r.a.createElement(S.a,{placement:"top",target:"ViewToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},I(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Views"))),r.a.createElement("span",{id:"DownloadToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-warning mr-2"},r.a.createElement("i",{className:"fas fa-download"})),r.a.createElement("span",{className:"text-nowrap"},_(e.datasets))),r.a.createElement(S.a,{placement:"top",target:"DownloadToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},_(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Downloads"))),r.a.createElement("span",{id:"CitationToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-primary mr-2"},r.a.createElement("i",{className:"fas fa-quote-right"})),r.a.createElement("span",{className:"text-nowrap"},A(e.datasets))),r.a.createElement(S.a,{placement:"top",target:"CitationToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},A(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Citations"))))))}t.p;var F=t(341),P=t(342),L=t(343),R=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{style:{maxWidth:this.props.maxWidth}},r.a.createElement(F.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"100%",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(x.a,{className:"flex-column d-flex"},r.a.createElement(N.a,null,this.props.title),r.a.createElement(P.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(p.b,{to:this.props.link,className:"mt-auto"},r.a.createElement(L.a,{className:"mt-auto",color:this.props.buttonColor,target:"_blank"},this.props.buttonTitle))))}}]),t}(r.a.Component),q=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{style:{maxWidth:this.props.maxWidth}},r.a.createElement(F.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"100%",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(x.a,{className:"flex-column d-flex"},r.a.createElement(N.a,null,this.props.title),r.a.createElement(P.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(L.a,{className:"mt-auto",color:this.props.buttonColor,href:this.props.link,target:"_blank"},this.props.buttonTitle)))}}]),t}(r.a.Component),M=R,z=t.p+"static/media/jupyter.9882b1f8.png",B=t.p+"static/media/dashboard_16x9.ea412c63.png",H=t.p+"static/media/semantic_4x3.2fde47bc.png",J=t.p+"static/media/datacite_4x3.d8543b54.png",G=t.p+"static/media/edu-1_4x3.33c4ba46.png";var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-chart-pie"}),"  Projects  "),r.a.createElement("div",{className:"header-body"},r.a.createElement(w.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(v.a,{className:"col-10 justify-content-md-center"},r.a.createElement(M,{title:"Dashboard",link:"/dashboard",cardImage:B,text:"The DataScore dashboard showcases metrics for scientific dataset management.",buttonTitle:"DataScore Dashboard",maxWidth:"30rem",buttonColor:"success"}),r.a.createElement(M,{title:"Collaborative Scientometry",link:"/jupyterhub",cardImage:z,buttonTitle:"JupyterHub",text:"Scientometric analysis based on DataCites GraphQL API",maxWidth:"30rem",buttonColor:"success"}))),r.a.createElement(w.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(v.a,{className:"col-10 justify-content-md-center"},r.a.createElement(M,{title:"Semantic Web",link:"/semantic",cardImage:H,text:"Implementation of RDF Layers on a PostgreSQL database",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(M,{title:"Data Aggregation",link:"/schema",cardImage:J,text:"DataCite's Dataset Schema as showcase implementation including SUSHI based DatasetReports",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(M,{title:"Education and Training",link:"/education",cardImage:G,text:"Recommendations and best practice guides for academia and repository operators.",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"})))))))},U=(t.p,t.p,t.p+"static/media/stephan.eeacbea2.png"),$=t.p+"static/media/frank.25e34019.png",K=t.p+"static/media/michael.22bf46d3.png",V=t.p+"static/media/tobias.71889429.png",Z=t.p+"static/media/axel_loewe.8af4fa3c.jpg",Y=t.p+"static/media/manuael.75ccd5a6.jpeg";var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-users"}),"  Team "),r.a.createElement("div",{className:"header-body"},r.a.createElement(w.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(v.a,{className:"col-10 justify-content-md-center"},r.a.createElement(q,{title:"Dr. Stephan Sinn",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_4854.php#",maxWidth:"20rem",cardImage:U,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Frank Biedermann",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_2034.php#",maxWidth:"20rem",cardImage:$,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Tobias K\xe4fer",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Tobias_K%C3%A4fer/en",maxWidth:"20rem",cardImage:V,imgClass:"black_white_img",buttonColor:"primary"})),r.a.createElement(v.a,{className:"col-10 justify-content-md-center"},r.a.createElement(q,{title:"Dr. Michael F\xe4rber",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Michael_F%C3%A4rber",maxWidth:"20rem",cardImage:K,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr.-Ing. Axel Loewe",buttonTitle:"Institute IBT",link:"https://www.ibt.kit.edu/loewe.php",maxWidth:"20rem",cardImage:Z,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Manuel Tsotsalas ",buttonTitle:"Institute IFG",link:"https://www.ifg.kit.edu/english/21_1420.php",maxWidth:"20rem",cardImage:Y,imgClass:"black_white_img",buttonColor:"primary"})))))))},ee=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null," ",r.a.createElement("i",{className:"fas fa-globe"}),"  Supporters"),r.a.createElement("div",{className:"header-body"}))))}}]),t}(r.a.Component),ae=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement(Q,null),r.a.createElement(X,null),r.a.createElement(ee,null))}}]),t}(r.a.Component),te=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Error 404 Page not found")}}]),t}(r.a.Component),ne=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null," ",r.a.createElement("i",{className:"fas fa-project-diagram"})," DataScore Project Description"),r.a.createElement("p",null,"The DataScore as a project of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403896",target:"_blank"},"Research Data Management (RDM)")," engagement pursues the realizations of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://sfdora.org/",target:"_blank"},"San Francisco Declaration of Research Assessment")," (DORA)."),r.a.createElement("p",null,"DataScore aims on the analysis of the additional effort necessary for decent reasech data management. Therefore, Datasets stored with ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403989",target:"_blank"},"meta data"),' on online repository are the central pivot of DataScore\'s metrics. In order to aquire analysable dataset metrics, DataScore strives to provide "How to" and "Best Practice" guides for repository operators.'),r.a.createElement("p",null,"As a project of the Karlsruhe Institute of Technology being the University of the Helmholtz Research Society, DataScore aspires to provide also recommendations for education and graduation processes. Please view the project's site for details."))}}]),t}(r.a.Component),re=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"far fa-envelope"})," Contact"),r.a.createElement("p",null,"We are very happy for any contribution to the DataScore project."),r.a.createElement("p",null,"You very welcome to contribute to any of our application ",r.a.createElement("emphasize",null,"via")," GitHub ",r.a.createElement("a",{href:"https://github.com/ASDSE"},"ASDSE"),"."),r.a.createElement("p",null,"Also please feel free to contact us ",r.a.createElement("emphasize",null,"via")," E-Mail: ",r.a.createElement("a",{href:"mailto:frank.biedermann@kit.edu",className:"font-weight-bold"}," Dr. Frank Biedermann ")))}}]),t}(r.a.Component),le=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h2",null,"Website Disclaimer of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Thank you for visiting the ",r.a.createElement("span",{className:"website_name"},"DataScore"),". Our Website Disclaimer was created by ",r.a.createElement("a",{href:"https://www.disclaimer-template.com"},"Disclaimer Template ")," for ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Please note that the information provided on ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and other related web properties are for informational purposes only."),r.a.createElement("p",null,"The information is provided by ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and whilst we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk."),r.a.createElement("p",null,"In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website."),r.a.createElement("p",null,"Through this website you are able to link to other websites which are not under the control of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu"),". We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them."),r.a.createElement("p",null,"Every effort is made to keep the website up and running smoothly. However, ",r.a.createElement("span",{className:"website_name"},"DataScore")," takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond our control."),r.a.createElement("p",null,"Our Website is provided by ",r.a.createElement("span",{className:"website_name"},"DataScore"),' on an "AS IS" basis. Our Privacy Policy was created by ',r.a.createElement("a",{href:"https://www.generateprivacypolicy.com/"},"the Privacy Policy Generator"),"."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," makes no representations or warranties of any kind, express or implied as to the operation of the site, the information, content, materials or products included on the site."),r.a.createElement("p",null,"To the full extent permissible by applicable law, ",r.a.createElement("span",{className:"website_name"},"DataScore")," disclaims all warranties, express or implied, including, but not limited to, the implied warranties and/or conditions of merchantability or satisfactory quality and fitness for a particular purpose and non-infringement."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," will not be liable for any damages of any kind arising from the use of the site, including, but not limited to direct, indirect, incidental, punitive and consequential damages."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," does not warrant that the site, or the server that makes it available, is free of viruses or other harmful components."))}}]),t}(r.a.Component),oe=t(51),se=(t(8),t(33)),ce=t.n(se);var ie=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(w.a,{className:"pt-3"},r.a.createElement(C.a,{lg:"0",xl:"2"}),r.a.createElement(C.a,{lg:"6",xl:"4"},r.a.createElement(O,{title:"Scientist",fullName:e.Name,orcid:e.Orcid})),r.a.createElement(C.a,{lg:"6",xl:"4"},r.a.createElement(W,{title:"Total Numbers",fullName:"Datasets",datasets:e.Datasets})))))))},me=t(61),de=t(36),ue=(r.a.Component,r.a.Component,t(298),t(346)),pe=t(347),he=t(348),be={options:{hover:{mode:null},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:10,min:0,major:{enabled:!0}},display:!0,scaleLabel:{display:!0,labelString:"Counts",fontStyle:"bold",fontSize:18}}],xAxes:[{barPercentage:1,categoryPercentage:.5,ticks:{beginAtZero:!1,display:!0,mirror:!0,autoSkip:!1,maxRotation:90,minRotation:90,fontStyle:"normal",fontSize:12},display:!0,labelPlacement:"inside",scaleLabel:{display:!0,labelString:"Datasets",fontStyle:"bold",fontSize:18}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||" ",n=Math.floor(e.yLabel),r=" ";return a.datasets.length>1&&(r+=t),r=n+" "+r,""==a.datasets[e.datasetIndex].label&&(r=null),r}}}},data:{labels:[""],datasets:[{label:"",data:[.99],maxBarThickness:20,backgroundColor:["#f8f9fe"]},{label:"Views",data:[0],maxBarThickness:20,backgroundColor:["#2dce89"]},{label:"Downloads",data:[0],maxBarThickness:20,backgroundColor:["#fb6340"]},{label:"Citations",data:[0],maxBarThickness:20,backgroundColor:["#5e72e4"]}]}};function fe(e){var a=Object.assign(be);return a.data.labels=e.person.datasets.nodes.map((function(e){return e.id})),a.data.datasets[1].data=e.person.datasets.nodes.map((function(e){return 0==e.viewCount?.2:e.viewCount})),a.data.datasets[1].backgroundColor=e.person.datasets.nodes.map((function(e){return"#2dce89"})),a.data.datasets[2].data=e.person.datasets.nodes.map((function(e){return 0==e.downloadCount?.2:e.downloadCount})),a.data.datasets[2].backgroundColor=e.person.datasets.nodes.map((function(e){return"#fb6340"})),a.data.datasets[3].data=e.person.datasets.nodes.map((function(e){return 0==e.citations.totalCount?.2:e.citations.totalCount})),a.data.datasets[3].backgroundColor=e.person.datasets.nodes.map((function(e){return"#5e72e4"})),a}var Ee=function(e){var a=Object(n.useState)("https://orcid.org/0000-0002-2906-2577"),t=Object(oe.a)(a,2),l=t[0],o=t[1],c=Object(s.useLazyQuery)(u,{errorPolicy:"all"}),i=Object(oe.a)(c,2),m=i[0],d=i[1],p=d.loading,h=d.error,b=d.data;return d.client,r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-chart-line"})," Dashboard"),h&&r.a.createElement("p",null,h.message),p&&r.a.createElement("p",null,"Loading..."),r.a.createElement(ue.a,null,r.a.createElement(w.a,null,r.a.createElement(C.a,{md:"9"},r.a.createElement(pe.a,{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"Enter your ORCID URL e.g. https://orcid.org/0000-0002-2906-2577"})),r.a.createElement(C.a,{md:"3"},r.a.createElement(L.a,{onClick:function(){return m({variables:{orcid:l}})}},"Load Datasets"))),r.a.createElement("p",null,"Missing input will load a representative example. For any question please contact",r.a.createElement("a",{href:"mailto: stephan.sinn@kit.edu"}," Dr. Stephan Sinn "))),r.a.createElement(w.a,null,r.a.createElement(C.a,{md:"12"},r.a.createElement(he.a,{color:"notice"},r.a.createElement("i",{className:"fas fa-exclamation-circle"})," This dashboard is retrieving datasets information via DataCite's GraphQL API. Some metrics might not yet been reported to DataCite and thus presented results may vary from the actual repository."))),r.a.createElement(ie,{Name:b?b.person.name:"Nobody",Orcid:b?b.person.id:"0000",Datasets:b?b.person.datasets.nodes:[]}),r.a.createElement(w.a,null,r.a.createElement(C.a,{className:"barchart-dashboard"},r.a.createElement(me.a,{data:b?fe(b).data:be.data,options:be.options}))),r.a.createElement(w.a,{className:"pt-3"},r.a.createElement(C.a,null,r.a.createElement(T,{title:"Summary",fullName:"Datasets",datasets:b?b.person.datasets.nodes:[]}))))},ge=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-globe-europe"})," DataScore's Jupyter Hub"),r.a.createElement("p",null,"The JupyterHub as a collaborative Jupyter Notebooks server is our development platform of different analysis of datasets metrics."),r.a.createElement("p",null,"The python programming lanuage as the core language of Jupyter Lab features versatile data science packages such as numpy and pandas. These packages alongside ",r.a.createElement("a",{className:"font-weight-bold",href:"https://support.datacite.org/docs/datacite-graphql-api-guide",target:"_blank",rel:"noreferrer"},"DataCite's GraphQL API")," allows us to process real dataset metrics with theoretical models"),r.a.createElement("p",null,"The resluting Jupyter Notebooks will be shared with the scientific comunity ",r.a.createElement("em",null,"via")," ",r.a.createElement("a",{className:"font-weight-bold",href:"https://github.com/ASDSE/datascore_public_jupnbs",target:"_blank",rel:"noreferrer"},"GitHub")," and ",r.a.createElement("a",{className:"font-weight-bold",href:"https://mybinder.org/v2/gh/ASDSE/datascore_public_jupnbs/master?filepath=DataCite_Researcher.ipynb",target:"_blank",rel:"noreferrer"},"Binder"),"."),r.a.createElement("p",null,"You are very welcome to use our JupyterHub. Please follow the ReadMe on our GitHub repository."),r.a.createElement("p",null," For any questions and access request, please contact ",r.a.createElement("a",{href:"mailto: stephan.sinn@kit.edu"},"Dr. Stephan Sinn")," "),r.a.createElement(L.a,{className:"mt-auto",color:"default",href:"https://datascore-jupyterhub.int.kit.edu/hub/login",target:"_blank"},"JupyterHub"))}}]),t}(r.a.Component),ye=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-graduation-cap"})," Education and Training"),r.a.createElement("p",null,"The DataScore Project offers training for educating students at all stages. Furthermore, we offer education guidelines and recommendations for repository operators. There is more to come soon."),r.a.createElement("p",null,"For any questions please contact: ",r.a.createElement("a",{href:"mailto:manuel.tsotsalas@kit.edu"},"Dr. Manuel Tsotsalas")," or",r.a.createElement("a",{href:"mailto:axel.loewe@kit.edu"}," Dr. Axel Loewe"),"."))}}]),t}(r.a.Component),we=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-database"})," Schema and SUSHI"),r.a.createElement("h2",null,"DataCite's Schema Implementation"),r.a.createElement("p",null,"In order to provide meaningful datasets on a database or repository appropriate meta data is needed and thus a decent schema is necessary. An implementation of DataCite's Schema is conducted as an example on the ",r.a.createElement("a",{href:"https://suprabank.org",target:"_blank",rel:"noreferrer",className:"font-weight-bold"},"SupraBank")," repository. This example is based on the Ruby on Rails framework and resulting guide will be presented here."),r.a.createElement("p",null,"For any questions please contact: ",r.a.createElement("a",{href:"mailto:stephan.sinn@kit.edu"},"Dr. Stephan Sinn")),r.a.createElement("h2",null,"SUSHI Reports"),r.a.createElement("p",null,"Metrics on datasets need certain numbers such as download, view and citation counts. The latter is realized by persient identifiers (e.g. DOI) registered at DAtaCite ",r.a.createElement("em",null,"via")," the above mentioned schema. Download and view counts should be reported regularly by the repository following the ",r.a.createElement("a",{href:"https://www.projectcounter.org/",target:"_blank",rel:"noreferrer",className:"font-weight-bold"},"COUNTER Code of Practice for Research Data")," in the",r.a.createElement("a",{href:"https://github.com/datacite/sashimi/blob/master/lib/sushi_schema/sushi_usage_schema.json",target:"_blank",rel:"noreferrer",className:"font-weight-bold"}," SUSHI standard ")," ",r.a.createElement("em",null,"via"),r.a.createElement("a",{href:"https://support.datacite.org/docs/usage-reports-api-guide",target:"_blank",rel:"noreferrer",className:"font-weight-bold"}," the DataCite Usage Reports API"),". We will describe a way for a generic implementation by analyzing log files."),r.a.createElement("p",null,"For any questions please contact: ",r.a.createElement("a",{href:"mailto:michael.faerber@kit.edu"},"Dr. Michael F\xe4rber")," or",r.a.createElement("a",{href:"mailto:stephan.sinn@kit.edu"}," Dr. Stephan Sinn"),"."))}}]),t}(r.a.Component),ve=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-code-branch"})," Semantic Web and SPARQL"),r.a.createElement("p",null,"We demonstrate the implemenetation of an additional RDF layer following the ODB standard onto a PostgreSQL database in order to enable access with a SPARQL interface."),r.a.createElement("p",null,"For any questions please contact: ",r.a.createElement("a",{href:"mailto:tobias.kaefer@kit.edu"},"Dr. Tobias K\xe4fer")))}}]),t}(r.a.Component),ke=t.p+"static/media/DataScore-Logo-Web-WhiteText.35b5d6cb.png",xe=t(349),Ne=t(350),Ce=t(353),je=t(351);function Se(e){return r.a.createElement(xe.a,null,r.a.createElement(p.b,{className:"nav-link-icon",to:e.route},e.text))}var De=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.a,{className:"navbar-horizontal navbar-dark bg-default",expand:"lg"},r.a.createElement(y.a,{fluid:!0},r.a.createElement(p.b,{className:"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block",to:"/"},r.a.createElement("img",{alt:"...",src:ke,width:"120",height:"120"})),r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(Ce.a,{navbar:!0,toggler:"#navbar-default"},r.a.createElement("div",{className:"navbar-collapse-header"},r.a.createElement(w.a,null,r.a.createElement(C.a,{className:"collapse-brand",xs:"6"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{alt:"...",src:ke}))),r.a.createElement(C.a,{className:"collapse-close",xs:"6"},r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(je.a,{className:"ml-lg-auto",navbar:!0},r.a.createElement(Se,{text:"Home",route:"/"}),r.a.createElement(Se,{text:"About",route:"/about"}),r.a.createElement(Se,{text:"Projects",route:"/projects"}),r.a.createElement(Se,{text:"Dashboard",route:"/dashboard"}),r.a.createElement(Se,{text:"JupyterHub",route:"/jupyterhub"}),r.a.createElement(Se,{text:"Team",route:"/team"}),r.a.createElement(Se,{text:"Contact",route:"/contact"}))))))}}]),t}(r.a.Component),Oe=t.p+"static/media/LogoKIT.6d64b848.svg",Te=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(y.a,{fluid:!0},r.a.createElement(w.a,{className:"align-items-center justify-content-xl-between"},r.a.createElement(C.a,{xl:"6"},r.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"\xa9 2020"," ",r.a.createElement("a",{className:"font-weight-bold ml-1",href:"https://kit.edu",rel:"noopener noreferrer",target:"_blank"},"Karlsruhe Institute of Technology"))),r.a.createElement(C.a,{xl:"6"},r.a.createElement(je.a,{className:"nav-footer justify-content-center justify-content-xl-end"},r.a.createElement(xe.a,{className:"pl-2 pt-1"},r.a.createElement(p.b,{to:"/disclaimer"},"Disclaimer")),r.a.createElement(xe.a,{className:"pl-2 pt-1"},r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement(xe.a,{className:"pl-2"},r.a.createElement("img",{alt:"...",src:Oe,height:"50"})))))))}}]),t}(r.a.Component);function _e(){var e=Object(c.a)(["\n  query Dog ($orcid: String!) {\n    dog(breed: $orcid) {\n      id\n      displayImage\n    }\n  }\n"]);return _e=function(){return e},e}new s.ApolloClient({uri:"https://71z1g.sse.codesandbox.io/",cache:new s.InMemoryCache}),Object(s.gql)(_e());var Ie=r.a.createElement("div",null,r.a.createElement(s.ApolloProvider,{client:d},r.a.createElement(p.a,null,r.a.createElement(De,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:ae}),r.a.createElement(h.a,{exact:!0,path:"/projects",component:Q}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:re}),r.a.createElement(h.a,{exact:!0,path:"/team",component:X}),r.a.createElement(h.a,{exact:!0,path:"/about",component:ne}),r.a.createElement(h.a,{exact:!0,path:"/disclaimer",component:le}),r.a.createElement(h.a,{exact:!0,path:"/dashboard",component:Ee}),r.a.createElement(h.a,{exact:!0,path:"/jupyterhub",component:ge}),r.a.createElement(h.a,{exact:!0,path:"/education",component:ye}),r.a.createElement(h.a,{exact:!0,path:"/semantic",component:ve}),r.a.createElement(h.a,{exact:!0,path:"/schema",component:we}),r.a.createElement(h.a,{component:te})),r.a.createElement(Te,null))));o.a.render(Ie,document.getElementById("root"))},36:function(e,a,t){var n=t(33);n.elements.Rectangle.prototype.draw=function(){var e,a,t,n,r,l,o,s=this._chart.ctx,c=this._view,i=c.borderWidth;if(c.horizontal?(e=c.base,a=c.x,t=c.y-c.height/2,n=c.y+c.height/2,r=a>e?1:-1,l=1,o=c.borderSkipped||"left"):(e=c.x-c.width/2,a=c.x+c.width/2,t=c.y,r=1,l=(n=c.base)>t?1:-1,o=c.borderSkipped||"bottom"),i){var m=Math.min(Math.abs(e-a),Math.abs(t-n)),d=(i=i>m?m:i)/2,u=e+("left"!==o?d*r:0),p=a+("right"!==o?-d*r:0),h=t+("top"!==o?d*l:0),b=n+("bottom"!==o?-d*l:0);u!==p&&(t=h,n=b),h!==b&&(e=u,a=p)}s.beginPath(),s.fillStyle=c.backgroundColor,s.strokeStyle=c.borderColor,s.lineWidth=i;var f=[[e,n],[e,t],[a,t],[a,n]],E=["bottom","left","top","right"].indexOf(o,0);function g(e){return f[(E+e)%4]}-1===E&&(E=0);var y=g(0);s.moveTo(y[0],y[1]);for(var w=1;w<4;w++){y=g(w);var v=w+1;4===v&&(v=0);var k,x=f[2][0]-f[1][0],N=f[0][1]-f[1][1],C=f[1][0],j=f[1][1];(k=6)>N/2&&(k=N/2),k>x/2&&(k=x/2),s.moveTo(C+k,j),s.lineTo(C+x-k,j),s.quadraticCurveTo(C+x,j,C+x,j+k),s.lineTo(C+x,j+N-k),s.quadraticCurveTo(C+x,j+N,C+x-k,j+N),s.lineTo(C+k,j+N),s.quadraticCurveTo(C,j+N,C,j+N-k),s.lineTo(C,j+k),s.quadraticCurveTo(C,j,C+k,j)}s.fill(),i&&s.stroke()};var r="Open Sans",l={100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},o={default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},s="#FFFFFF",c="transparent";var i={options:{scales:{yAxes:[{gridLines:{color:l[900],zeroLineColor:l[900]},ticks:{callback:function(e){if(!(e%10))return"$"+e+"k"}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return a.datasets.length>1&&(r+=t),r+="$"+n+"k"}}}},data1:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]}},data2:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,5,25,10,30,15,40,40]}]}}};e.exports={chartOptions:function(){var e={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:l[600],defaultFontColor:l[600],defaultFontFamily:r,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:o.primary},line:{tension:.4,borderWidth:4,borderColor:o.primary,backgroundColor:c,borderCapStyle:"rounded"},rectangle:{backgroundColor:o.warning},arc:{backgroundColor:o.primary,borderColor:s,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},doughnut:{cutoutPercentage:83,legendCallback:function(e){var a=e.data,t="";return a.labels.forEach((function(e,n){var r=a.datasets[0].backgroundColor[n];t+='<span class="chart-legend-item">',t+='<i class="chart-legend-indicator" style="background-color: '+r+'"></i>',t+=e,t+="</span>"})),t}}}};return n.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:l[300],drawBorder:!1,drawTicks:!1,lineWidth:0,zeroLineWidth:0,zeroLineColor:l[300],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(e){if(!(e%10))return e}}}),n.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20}}),e},parseOptions:function e(a,t){for(var n in t)"object"!==typeof t[n]?a[n]=t[n]:e(a[n],t[n])},chartExample1:i,chartExample2:{options:{scales:{yAxes:[{ticks:{callback:function(e){if(!(e%10))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return a.datasets.length>1&&(r+=t),r+=n}}}},data:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29],maxBarThickness:10}]}}}}},[[331,1,2]]]);
//# sourceMappingURL=main.ec74e257.chunk.js.map