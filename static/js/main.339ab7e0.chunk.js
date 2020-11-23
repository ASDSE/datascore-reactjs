/*! For license information please see main.339ab7e0.chunk.js.LICENSE.txt */
(this["webpackJsonpdatascore-reactjs"]=this["webpackJsonpdatascore-reactjs"]||[]).push([[0],{148:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},272:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(41),o=t.n(l),c=t(23),s=t(56);function i(){var e=Object(s.a)(["\n    query person($orcid: ID!) {\n        person(id: $orcid) {\n          id\n          name\n          datasets {\n            nodes {\n              id\n              downloadCount\n              viewCount\n              citations {\n                totalCount\n              }\n            }\n          }\n        }\n\n\n    }\n  "]);return i=function(){return e},e}function m(){var e=Object(s.a)(["\n  query Dog ($breed: String!) {\n    dog(breed: $breed) {\n      id\n      displayImage\n    }\n  }\n"]);return m=function(){return e},e}var u=new c.ApolloClient({uri:"https://api.datacite.org/graphql",cache:new c.InMemoryCache}),d=(Object(c.gql)(m()),Object(c.gql)(i()));var p=t(34),h=t(42),b=(t(148),t(149),t(150),t(15)),f=t(16),E=t(18),g=t(17),y=(t.p,t(151),t(285)),v=t(277),w=t(286),x=t(275),N=t(276),k=t(278),j=t(279),O=t(280),C=t(293),D=t(281);function T(e){return r.a.createElement(x.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(N.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(k.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},e.fullName)),r.a.createElement(j.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-yellow text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-users"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fab fa-orcid"}))," ",r.a.createElement("a",{href:e.orcid,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"text-nowrap"},e.orcid)))))}function S(e){return r.a.createElement(x.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(N.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(k.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title)),r.a.createElement(j.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-danger text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-chart-bar"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("a",{href:e.orcid,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"text-nowrap"},e.orcid))),r.a.createElement("div",null,r.a.createElement(O.a,{className:"align-items-center",responsive:!0},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Dataset"),r.a.createElement("th",{scope:"col"},"Views"),r.a.createElement("th",{scope:"col"},"Downloads"),r.a.createElement("th",{scope:"col"},"Citations")),r.a.createElement("tbody",null,e.datasets.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{key:e.id},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fas fa-database"})),r.a.createElement("a",{href:e.id,target:"_blank",rel:"noreferrer"},e.id)),r.a.createElement("td",{key:e.id},e.viewCount),r.a.createElement("td",{key:e.id},e.downloadCount),r.a.createElement("td",{key:e.id},e.citations.totalCount))})))))))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].downloadCount;return a}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].viewCount;return a}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;for(var t in e)a+=e[t].citations.totalCount;return a}function W(e){return r.a.createElement(x.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(N.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(k.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},e.fullName)),r.a.createElement(j.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape bg-primary text-white rounded-circle shadow"},r.a.createElement("i",{className:"fas fa-chart-pie"})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("span",{id:"ViewToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"far fa-eye"})),r.a.createElement("span",{className:"text-nowrap"},I(e.datasets))),r.a.createElement(C.a,{placement:"top",target:"ViewToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},I(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Views"))),r.a.createElement("span",{id:"DownloadToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-warning mr-2"},r.a.createElement("i",{className:"fas fa-download"})),r.a.createElement("span",{className:"text-nowrap"},_(e.datasets))),r.a.createElement(C.a,{placement:"top",target:"DownloadToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},_(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Downloads"))),r.a.createElement("span",{id:"CitationToolTip",className:"cursor-pointer pr-3"},r.a.createElement("span",{className:"text-primary mr-2"},r.a.createElement("i",{className:"fas fa-quote-right"})),r.a.createElement("span",{className:"text-nowrap"},A(e.datasets))),r.a.createElement(C.a,{placement:"top",target:"CitationToolTip"},r.a.createElement(D.a,null,r.a.createElement("span",{className:"text-nowrap"},A(e.datasets)),r.a.createElement("span",{className:"pr-3 pl-2"},"Citations"))))))}t.p;var F=t(282),L=t(283),P=t(284),M=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{style:{maxWidth:this.props.maxWidth}},r.a.createElement(F.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"100%",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(N.a,{className:"flex-column d-flex"},r.a.createElement(k.a,null,this.props.title),r.a.createElement(L.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(p.b,{to:this.props.link,className:"mt-auto"},r.a.createElement(P.a,{className:"mt-auto",color:this.props.buttonColor,target:"_blank"},this.props.buttonTitle))))}}]),t}(r.a.Component),q=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{style:{maxWidth:this.props.maxWidth}},r.a.createElement(F.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"100%",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(N.a,{className:"flex-column d-flex"},r.a.createElement(k.a,null,this.props.title),r.a.createElement(L.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(P.a,{className:"mt-auto",color:this.props.buttonColor,href:this.props.link,target:"_blank"},this.props.buttonTitle)))}}]),t}(r.a.Component),R=M,H=t.p+"static/media/jupyter.9882b1f8.png",J=t.p+"static/media/dashboard_16x9.ea412c63.png",z=t.p+"static/media/semantic_4x3.2fde47bc.png",B=t.p+"static/media/datacite_4x3.d8543b54.png",$=t.p+"static/media/edu-1_4x3.33c4ba46.png";var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(v.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(w.a,{className:"col-10 justify-content-md-center"},r.a.createElement(R,{title:"Dashboard",link:"/dashboard",cardImage:J,text:"The DataScore dashboard showcases metrics for scientific dataset management.",buttonTitle:"DataScore Dashboard",maxWidth:"30rem",buttonColor:"success"}),r.a.createElement(R,{title:"Collaborative Scientometry",link:"/jupyterhub",cardImage:H,buttonTitle:"JupyterHub",text:"Scientometric analysis based on DataCites GraphQL API",maxWidth:"30rem",buttonColor:"success"}))),r.a.createElement(v.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(w.a,{className:"col-10 justify-content-md-center"},r.a.createElement(R,{title:"Semantic Web",cardImage:z,text:"Implementation of RDF Layers on a PostgreSQL database",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(R,{title:"Data Aggregation",cardImage:B,text:"DataCite's Dataset Schema as showcase implementation including SUSHI based DatasetReports",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(R,{title:"Education and Training",cardImage:$,text:"Recommendations and best practice guides for academia and repository operators.",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"})))))))},K=(t.p,t.p,t.p+"static/media/stephan.eeacbea2.png"),Q=t.p+"static/media/frank.25e34019.png",V=t.p+"static/media/michael.22bf46d3.png",U=t.p+"static/media/tobias.71889429.png",Y=t.p+"static/media/axel_loewe.8af4fa3c.jpg",Z=t.p+"static/media/manuael.75ccd5a6.jpeg";var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(v.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(w.a,{className:"col-10 justify-content-md-center"},r.a.createElement(q,{title:"Dr. Stephan Sinn",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_4854.php#",maxWidth:"20rem",cardImage:K,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Frank Biedermann",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_2034.php#",maxWidth:"20rem",cardImage:Q,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Tobias K\xe4fer",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Tobias_K%C3%A4fer/en",maxWidth:"20rem",cardImage:U,imgClass:"black_white_img",buttonColor:"primary"})),r.a.createElement(w.a,{className:"col-10 justify-content-md-center"},r.a.createElement(q,{title:"Dr. Michael F\xe4rber",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Michael_F%C3%A4rber",maxWidth:"20rem",cardImage:V,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr.-Ing. Axel Loewe",buttonTitle:"Institute IBT",link:"https://www.ibt.kit.edu/loewe.php",maxWidth:"20rem",cardImage:Y,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(q,{title:"Dr. Manuel Tsotsalas ",buttonTitle:"Institute IFG",link:"https://www.ifg.kit.edu/english/21_1420.php",maxWidth:"20rem",cardImage:Z,imgClass:"black_white_img",buttonColor:"primary"})))))))},ee=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Supporters")}}]),t}(r.a.Component),ae=t(287),te=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement(ae.a,{color:"danger"},"This is not yet the final version of the project website, everything is constantly changing! No content here is yet a valid expression of our opinion or any scientific result."),r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-chart-pie"}),"  Projects  "),r.a.createElement(G,null),r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-users"}),"  Team "),r.a.createElement(X,null),r.a.createElement("h1",null," ",r.a.createElement("i",{className:"fas fa-globe"}),"  Supporters"),r.a.createElement(ee,null))}}]),t}(r.a.Component),ne=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Error 404 Page not found")}}]),t}(r.a.Component),re=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,"DataScore Project Description"),r.a.createElement("p",null,"The DataScore as a project of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403896",target:"_blank"},"Research Data Management (RDM)")," engagement pursues the realizations of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://sfdora.org/",target:"_blank"},"San Francisco Declaration of Research Assessment")," (DORA)."),r.a.createElement("p",null,"DataScore aims on the analysis of the additional effort necessary for decent reasech data management. Therefore, Datasets stored with ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403989",target:"_blank"},"meta data"),' on online repository are the central pivot of DataScore\'s metrics. In order to aquire analysable dataset metrics, DataScore strives to provide "How to" and "Best Practice" guides for repository operators.'),r.a.createElement("p",null,"As a project of the Karlsruhe Institute of Technology being the University of the Helmholtz Research Society, DataScore aspires to provide also recommendations for education and graduation processes. Please view the project's site for details."))}}]),t}(r.a.Component),le=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"We are very happy for any contribution to the DataScore project."),r.a.createElement("p",null,"You very welcome to contribute to any of our application ",r.a.createElement("emphasize",null,"via")," GitHub ",r.a.createElement("a",{href:"https://github.com/ASDSE"},"ASDSE"),"."),r.a.createElement("p",null,"Also please feel free to contact us ",r.a.createElement("emphasize",null,"via")," the E-Mail Adresses of our team members. Quick contact: ",r.a.createElement("a",{href:"mailto: stephan.sinn@kit.edu"}," Send E-Mail ")))}}]),t}(r.a.Component),oe=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h2",null,"Website Disclaimer of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Thank you for visiting the ",r.a.createElement("span",{className:"website_name"},"DataScore"),". Our Website Disclaimer was created by ",r.a.createElement("a",{href:"https://www.disclaimer-template.com"},"Disclaimer Template ")," for ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Please note that the information provided on ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and other related web properties are for informational purposes only."),r.a.createElement("p",null,"The information is provided by ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and whilst we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk."),r.a.createElement("p",null,"In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website."),r.a.createElement("p",null,"Through this website you are able to link to other websites which are not under the control of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu"),". We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them."),r.a.createElement("p",null,"Every effort is made to keep the website up and running smoothly. However, ",r.a.createElement("span",{className:"website_name"},"DataScore")," takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond our control."),r.a.createElement("p",null,"Our Website is provided by ",r.a.createElement("span",{className:"website_name"},"DataScore"),' on an "AS IS" basis. Our Privacy Policy was created by ',r.a.createElement("a",{href:"https://www.generateprivacypolicy.com/"},"the Privacy Policy Generator"),"."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," makes no representations or warranties of any kind, express or implied as to the operation of the site, the information, content, materials or products included on the site."),r.a.createElement("p",null,"To the full extent permissible by applicable law, ",r.a.createElement("span",{className:"website_name"},"DataScore")," disclaims all warranties, express or implied, including, but not limited to, the implied warranties and/or conditions of merchantability or satisfactory quality and fitness for a particular purpose and non-infringement."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," will not be liable for any damages of any kind arising from the use of the site, including, but not limited to direct, indirect, incidental, punitive and consequential damages."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," does not warrant that the site, or the server that makes it available, is free of viruses or other harmful components."))}}]),t}(r.a.Component),ce=t(49),se=(t(8),t(33)),ie=t.n(se);var me=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(y.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(v.a,{className:"pt-3"},r.a.createElement(j.a,{lg:"0",xl:"2"}),r.a.createElement(j.a,{lg:"6",xl:"4"},r.a.createElement(T,{title:"Scientist",fullName:e.Name,orcid:e.Orcid})),r.a.createElement(j.a,{lg:"6",xl:"4"},r.a.createElement(W,{title:"Total Numbers",fullName:"Datasets",datasets:e.Datasets}))),r.a.createElement(v.a,{className:"pt-3"},r.a.createElement(j.a,null,r.a.createElement(S,{title:"Summary",fullName:"Datasets",datasets:e.Datasets})))))))},ue=t(73),de=t(36),pe=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"componentWillMount",value:function(){window.Chart&&Object(de.parseOptions)(ie.a,Object(de.chartOptions)())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"chart"},r.a.createElement(ue.a,{data:de.chartExample2.data,options:de.chartExample2.options})))))}}]),t}(r.a.Component),he=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"componentWillMount",value:function(){window.Chart&&Object(de.parseOptions)(ie.a,Object(de.chartOptions)())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"bg-default"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"chart"},r.a.createElement(ue.b,{data:de.chartExample1.data1,options:de.chartExample1.options,getDatasetAtEvent:function(e){return console.log(e)}})))))}}]),t}(r.a.Component),be=t(288),fe=t(289);var Ee=function(e){var a=Object(n.useState)("https://orcid.org/0000-0002-2906-2577"),t=Object(ce.a)(a,2),l=t[0],o=t[1],s=Object(c.useLazyQuery)(d,{errorPolicy:"all"}),i=Object(ce.a)(s,2),m=i[0],u=i[1],p=u.loading,h=u.error,b=u.data;return u.client,r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,"Dashboard"),h&&r.a.createElement("p",null,h.message),p&&r.a.createElement("p",null,"Loading..."),r.a.createElement(j.a,{md:"4"},r.a.createElement(be.a,null,r.a.createElement(fe.a,{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"Enter your ORCID URL e.g. https://orcid.org/0000-0002-2906-2577"}),r.a.createElement(P.a,{onClick:function(){return m({variables:{orcid:l}})}},"Load Datasets"),r.a.createElement("p",null,"Missing input will load a representative example."))),r.a.createElement(me,{Name:b?b.person.name:"Nobody",Orcid:b?b.person.id:"0000",Datasets:b?b.person.datasets.nodes:[]}),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(pe,null)),r.a.createElement(j.a,null,r.a.createElement(he,null))))},ge=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{fluid:!0},r.a.createElement("h1",null,"DataScore's Jupyter Hub"),r.a.createElement("p",null,"The JupyterHub as a collaborative Jupyter Notebooks server is our development platform of different analysis of datasets metrics."),r.a.createElement("p",null,"The python programming lanuage as the core language of Jupyter Lab features versatile data science packages such as numpy and pandas. These packages alongside ",r.a.createElement("a",{className:"font-weight-bold",href:"https://support.datacite.org/docs/datacite-graphql-api-guide",target:"_blank"},"DataCite's GraphQL API")," allows us to process real dataset metrics with theoretical models"),r.a.createElement("p",null,"The resluting Jupyter Notebooks will be shared with the scientific comunity ",r.a.createElement("em",null,"via")," ",r.a.createElement("a",{className:"font-weight-bold",href:"https://github.com/ASDSE/datascore_public_jupnbs",target:"_blank"},"GitHub")," and ",r.a.createElement("a",{className:"font-weight-bold",href:"https://mybinder.org/v2/gh/ASDSE/datascore_public_jupnbs/master?filepath=DataCite_Researcher.ipynb",target:"_blank"},"Binder"),"."),r.a.createElement("p",null,"You are very welcome to use our JupyterHub. Please follow the ReadMe on our GitHub repository."),r.a.createElement("p",null," For any questions and access request, please contact ",r.a.createElement("a",{href:"mailto: stephan.sinn@kit.edu",className:"font-weight-bold"},"Dr. Stephan Sinn")," "),r.a.createElement(P.a,{className:"mt-auto",color:"default",href:"https://datascore-jupyterhub.int.kit.edu/hub/login",target:"_blank"},"JupyterHub"))}}]),t}(r.a.Component),ye=t.p+"static/media/DataScore-Logo-Web-WhiteText.35b5d6cb.png",ve=t(290),we=t(291),xe=t(294),Ne=t(292);function ke(e){return r.a.createElement(ve.a,null,r.a.createElement(p.b,{className:"nav-link-icon",to:e.route},e.text))}var je=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a,{className:"navbar-horizontal navbar-dark bg-default",expand:"lg"},r.a.createElement(y.a,{fluid:!0},r.a.createElement(p.b,{className:"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block",to:"/"},r.a.createElement("img",{alt:"...",src:ye,width:"120",height:"120"})),r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(xe.a,{navbar:!0,toggler:"#navbar-default"},r.a.createElement("div",{className:"navbar-collapse-header"},r.a.createElement(v.a,null,r.a.createElement(j.a,{className:"collapse-brand",xs:"6"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{alt:"...",src:ye}))),r.a.createElement(j.a,{className:"collapse-close",xs:"6"},r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(Ne.a,{className:"ml-lg-auto",navbar:!0},r.a.createElement(ke,{text:"Home",route:"/"}),r.a.createElement(ke,{text:"About",route:"/about"}),r.a.createElement(ke,{text:"Projects",route:"/projects"}),r.a.createElement(ke,{text:"Dashboard",route:"/dashboard"}),r.a.createElement(ke,{text:"JupyterHub",route:"/jupyterhub"}),r.a.createElement(ke,{text:"Team",route:"/team"}),r.a.createElement(ke,{text:"Contact",route:"/contact"}))))))}}]),t}(r.a.Component),Oe=t.p+"static/media/LogoKIT.6d64b848.svg",Ce=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(y.a,{fluid:!0},r.a.createElement(v.a,{className:"align-items-center justify-content-xl-between"},r.a.createElement(j.a,{xl:"6"},r.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"\xa9 2020"," ",r.a.createElement("a",{className:"font-weight-bold ml-1",href:"https://kit.edu",rel:"noopener noreferrer",target:"_blank"},"Karlsruhe Institute of Technology"))),r.a.createElement(j.a,{xl:"6"},r.a.createElement(Ne.a,{className:"nav-footer justify-content-center justify-content-xl-end"},r.a.createElement(ve.a,{className:"pl-2 pt-1"},r.a.createElement(p.b,{to:"/disclaimer"},"Disclaimer")),r.a.createElement(ve.a,{className:"pl-2 pt-1"},r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement(ve.a,{className:"pl-2"},r.a.createElement("img",{alt:"...",src:Oe,height:"50"})))))))}}]),t}(r.a.Component);function De(){var e=Object(s.a)(["\n  query Dog ($orcid: String!) {\n    dog(breed: $orcid) {\n      id\n      displayImage\n    }\n  }\n"]);return De=function(){return e},e}new c.ApolloClient({uri:"https://71z1g.sse.codesandbox.io/",cache:new c.InMemoryCache}),Object(c.gql)(De());var Te=r.a.createElement("div",null,r.a.createElement(c.ApolloProvider,{client:u},r.a.createElement(p.a,null,r.a.createElement(je,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:te}),r.a.createElement(h.a,{exact:!0,path:"/projects",component:G}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:le}),r.a.createElement(h.a,{exact:!0,path:"/team",component:X}),r.a.createElement(h.a,{exact:!0,path:"/about",component:re}),r.a.createElement(h.a,{exact:!0,path:"/disclaimer",component:oe}),r.a.createElement(h.a,{exact:!0,path:"/dashboard",component:Ee}),r.a.createElement(h.a,{exact:!0,path:"/jupyterhub",component:ge}),r.a.createElement(h.a,{component:ne})),r.a.createElement(Ce,null))));o.a.render(Te,document.getElementById("root"))},36:function(e,a,t){var n=t(33);n.elements.Rectangle.prototype.draw=function(){var e,a,t,n,r,l,o,c=this._chart.ctx,s=this._view,i=s.borderWidth;if(s.horizontal?(e=s.base,a=s.x,t=s.y-s.height/2,n=s.y+s.height/2,r=a>e?1:-1,l=1,o=s.borderSkipped||"left"):(e=s.x-s.width/2,a=s.x+s.width/2,t=s.y,r=1,l=(n=s.base)>t?1:-1,o=s.borderSkipped||"bottom"),i){var m=Math.min(Math.abs(e-a),Math.abs(t-n)),u=(i=i>m?m:i)/2,d=e+("left"!==o?u*r:0),p=a+("right"!==o?-u*r:0),h=t+("top"!==o?u*l:0),b=n+("bottom"!==o?-u*l:0);d!==p&&(t=h,n=b),h!==b&&(e=d,a=p)}c.beginPath(),c.fillStyle=s.backgroundColor,c.strokeStyle=s.borderColor,c.lineWidth=i;var f=[[e,n],[e,t],[a,t],[a,n]],E=["bottom","left","top","right"].indexOf(o,0);function g(e){return f[(E+e)%4]}-1===E&&(E=0);var y=g(0);c.moveTo(y[0],y[1]);for(var v=1;v<4;v++){y=g(v);var w=v+1;4===w&&(w=0);var x,N=f[2][0]-f[1][0],k=f[0][1]-f[1][1],j=f[1][0],O=f[1][1];(x=6)>k/2&&(x=k/2),x>N/2&&(x=N/2),c.moveTo(j+x,O),c.lineTo(j+N-x,O),c.quadraticCurveTo(j+N,O,j+N,O+x),c.lineTo(j+N,O+k-x),c.quadraticCurveTo(j+N,O+k,j+N-x,O+k),c.lineTo(j+x,O+k),c.quadraticCurveTo(j,O+k,j,O+k-x),c.lineTo(j,O+x),c.quadraticCurveTo(j,O,j+x,O)}c.fill(),i&&c.stroke()};var r="Open Sans",l={100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},o={default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},c="#FFFFFF",s="transparent";var i={options:{scales:{yAxes:[{gridLines:{color:l[900],zeroLineColor:l[900]},ticks:{callback:function(e){if(!(e%10))return"$"+e+"k"}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return a.datasets.length>1&&(r+=t),r+="$"+n+"k"}}}},data1:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]}},data2:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,5,25,10,30,15,40,40]}]}}};e.exports={chartOptions:function(){var e={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:l[600],defaultFontColor:l[600],defaultFontFamily:r,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:o.primary},line:{tension:.4,borderWidth:4,borderColor:o.primary,backgroundColor:s,borderCapStyle:"rounded"},rectangle:{backgroundColor:o.warning},arc:{backgroundColor:o.primary,borderColor:c,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},doughnut:{cutoutPercentage:83,legendCallback:function(e){var a=e.data,t="";return a.labels.forEach((function(e,n){var r=a.datasets[0].backgroundColor[n];t+='<span class="chart-legend-item">',t+='<i class="chart-legend-indicator" style="background-color: '+r+'"></i>',t+=e,t+="</span>"})),t}}}};return n.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:l[300],drawBorder:!1,drawTicks:!1,lineWidth:0,zeroLineWidth:0,zeroLineColor:l[300],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(e){if(!(e%10))return e}}}),n.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20}}),e},parseOptions:function e(a,t){for(var n in t)"object"!==typeof t[n]?a[n]=t[n]:e(a[n],t[n])},chartExample1:i,chartExample2:{options:{scales:{yAxes:[{ticks:{callback:function(e){if(!(e%10))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return a.datasets.length>1&&(r+=t),r+=n}}}},data:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29],maxBarThickness:10}]}}}}},[[272,1,2]]]);
//# sourceMappingURL=main.339ab7e0.chunk.js.map