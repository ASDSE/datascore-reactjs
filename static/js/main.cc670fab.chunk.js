/*! For license information please see main.cc670fab.chunk.js.LICENSE.txt */
(this["webpackJsonpdatascore-reactjs"]=this["webpackJsonpdatascore-reactjs"]||[]).push([[0],{17:function(e,t,a){var n=a(15);n.elements.Rectangle.prototype.draw=function(){var e,t,a,n,r,l,o,c=this._chart.ctx,i=this._view,s=i.borderWidth;if(i.horizontal?(e=i.base,t=i.x,a=i.y-i.height/2,n=i.y+i.height/2,r=t>e?1:-1,l=1,o=i.borderSkipped||"left"):(e=i.x-i.width/2,t=i.x+i.width/2,a=i.y,r=1,l=(n=i.base)>a?1:-1,o=i.borderSkipped||"bottom"),s){var m=Math.min(Math.abs(e-t),Math.abs(a-n)),u=(s=s>m?m:s)/2,d=e+("left"!==o?u*r:0),p=t+("right"!==o?-u*r:0),h=a+("top"!==o?u*l:0),b=n+("bottom"!==o?-u*l:0);d!==p&&(a=h,n=b),h!==b&&(e=d,t=p)}c.beginPath(),c.fillStyle=i.backgroundColor,c.strokeStyle=i.borderColor,c.lineWidth=s;var f=[[e,n],[e,a],[t,a],[t,n]],g=["bottom","left","top","right"].indexOf(o,0);function E(e){return f[(g+e)%4]}-1===g&&(g=0);var y=E(0);c.moveTo(y[0],y[1]);for(var v=1;v<4;v++){y=E(v);var w=v+1;4===w&&(w=0);var k,x=f[2][0]-f[1][0],j=f[0][1]-f[1][1],N=f[1][0],O=f[1][1];(k=6)>j/2&&(k=j/2),k>x/2&&(k=x/2),c.moveTo(N+k,O),c.lineTo(N+x-k,O),c.quadraticCurveTo(N+x,O,N+x,O+k),c.lineTo(N+x,O+j-k),c.quadraticCurveTo(N+x,O+j,N+x-k,O+j),c.lineTo(N+k,O+j),c.quadraticCurveTo(N,O+j,N,O+j-k),c.lineTo(N,O+k),c.quadraticCurveTo(N,O,N+k,O)}c.fill(),s&&c.stroke()};var r="Open Sans",l={100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},o={default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},c="#FFFFFF",i="transparent";var s={options:{scales:{yAxes:[{gridLines:{color:l[900],zeroLineColor:l[900]},ticks:{callback:function(e){if(!(e%10))return"$"+e+"k"}}}]},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return t.datasets.length>1&&(r+=a),r+="$"+n+"k"}}}},data1:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]}},data2:function(e){return{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,5,25,10,30,15,40,40]}]}}};e.exports={chartOptions:function(){var e={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:l[600],defaultFontColor:l[600],defaultFontFamily:r,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:o.primary},line:{tension:.4,borderWidth:4,borderColor:o.primary,backgroundColor:i,borderCapStyle:"rounded"},rectangle:{backgroundColor:o.warning},arc:{backgroundColor:o.primary,borderColor:c,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},doughnut:{cutoutPercentage:83,legendCallback:function(e){var t=e.data,a="";return t.labels.forEach((function(e,n){var r=t.datasets[0].backgroundColor[n];a+='<span class="chart-legend-item">',a+='<i class="chart-legend-indicator" style="background-color: '+r+'"></i>',a+=e,a+="</span>"})),a}}}};return n.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:l[300],drawBorder:!1,drawTicks:!1,lineWidth:0,zeroLineWidth:0,zeroLineColor:l[300],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(e){if(!(e%10))return e}}}),n.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20}}),e},parseOptions:function e(t,a){for(var n in a)"object"!==typeof a[n]?t[n]=a[n]:e(t[n],a[n])},chartExample1:s,chartExample2:{options:{scales:{yAxes:[{ticks:{callback:function(e){if(!(e%10))return e}}}]},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"",n=e.yLabel,r="";return t.datasets.length>1&&(r+=a),r+=n}}}},data:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29],maxBarThickness:10}]}}}},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),c=a(11),i=a(20),s=(a(75),a(76),a(77),a(6)),m=a(7),u=a(9),d=a(8),p=(a.p,a(78),a(191)),h=a(185),b=a(192),f=a(183),g=a(184),E=a(186),y=a(187);var v=function(e){return r.a.createElement(f.a,{className:"card-stats mb-4 mb-xl-0"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{className:"col"},r.a.createElement(E.a,{tag:"h5",className:"text-uppercase text-muted mb-0"},e.title),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},e.fullName)),r.a.createElement(y.a,{className:"col-auto"},r.a.createElement("div",{className:"icon icon-shape ".concat(e.iconbg," text-white rounded-circle shadow")},r.a.createElement("i",{className:e.icon})))),r.a.createElement("p",{className:"mt-3 mb-0 text-muted text-sm"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fa fa-arrow-up"})," ORCID")," ",r.a.createElement("span",{className:"text-nowrap"},"0000-0000-0000-0000"))))},w=(a.p,a(188)),k=a(189),x=a(190),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{maxHeight:"30rem",maxWidth:this.props.maxWidth}},r.a.createElement(w.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"inherit",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(g.a,{className:"flex-column d-flex"},r.a.createElement(E.a,null,this.props.title),r.a.createElement(k.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(c.b,{to:this.props.link,className:"mt-auto"},r.a.createElement(x.a,{className:"mt-auto",color:this.props.buttonColor,target:"_blank"},this.props.buttonTitle))))}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{maxHeight:"30rem",maxWidth:this.props.maxWidth}},r.a.createElement(w.a,{className:this.props.imgClass,alt:"...",src:this.props.cardImage,top:!0,style:{maxHeight:"20rem",maxWidth:"inherit",height:"auto",width:"auto",alignSelf:"center",padding:"1.5rem"}}),r.a.createElement(g.a,{className:"flex-column d-flex"},r.a.createElement(E.a,null,this.props.title),r.a.createElement(k.a,{style:{textAlign:"justify"}},this.props.text),r.a.createElement(x.a,{className:"mt-auto",color:this.props.buttonColor,href:this.props.link,target:"_blank"},this.props.buttonTitle)))}}]),a}(r.a.Component),O=j,C=a.p+"static/media/jupyterhub-logo.fcb79533.png",D=a.p+"static/media/dashboard.78bc6e94.png";var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(p.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(h.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(b.a,{className:"col-10 justify-content-md-center"},r.a.createElement(O,{title:"Dashboard",link:"/dashboard",cardImage:D,text:"The DataScore dashboard showcases metrics for scientific dataset management.",buttonTitle:"DataScore Dashboard",maxWidth:"30rem",buttonColor:"success"}),r.a.createElement(O,{title:"Collaborative Scientometry",link:"/jupyterhub",cardImage:C,buttonTitle:"JupyterHub",text:"Scientometric analysis based on DataCites GraphQL API",maxWidth:"30rem",buttonColor:"success"}))),r.a.createElement(h.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(b.a,{className:"col-10 justify-content-md-center"},r.a.createElement(O,{title:"Semantic Web",text:"Implementation of RDF Layers on a PostgreSQL database",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(O,{title:"Data Aggregation",text:"DataCite's Dataset Schema as showcase implementation including SUSHI based DatasetReports",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"}),r.a.createElement(O,{title:"Education and Training",text:"Recommendations and best practice guides for academia and repository operators.",maxWidth:"25rem",buttonTitle:"Read More",buttonColor:"info"})))))))},T=a.p+"static/media/stephan_sinn.4cb6b1bd.jpg",_=a.p+"static/media/frank_biedermann.d393f22c.jpg",A=a.p+"static/media/michael_faerber.869a16c6.png",I=a.p+"static/media/tobias_kaefer.0957c1ed.gif";var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(p.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(h.a,{className:"pt-3 justify-content-md-center"},r.a.createElement(b.a,{className:"col-10 justify-content-md-center"},r.a.createElement(N,{title:"Dr. Stephan Sinn",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_4854.php#",maxWidth:"20rem",cardImage:T,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(N,{title:"Dr. Frank Biedermann",buttonTitle:"Institute INT",link:"https://www.int.kit.edu/staff_2034.php#",maxWidth:"20rem",cardImage:_,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(N,{title:"Dr. Tobias K\xe4fer",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Tobias_K%C3%A4fer/en",maxWidth:"20rem",cardImage:I,imgClass:"black_white_img",buttonColor:"primary"}),r.a.createElement(N,{title:"Dr. Michael F\xe4rber",buttonTitle:"Institute AIFB",link:"https://www.aifb.kit.edu/web/Michael_F%C3%A4rber",maxWidth:"20rem",cardImage:A,imgClass:"black_white_img",buttonColor:"primary"})))))))},F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"AdvisoryBoard")}}]),a}(r.a.Component),P=a(196),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(P.a,{color:"danger"},"This is not yet the final version of the project website, everything is constantly changing! No content here is yet a valid expression of our opinion or any scientific result."),r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-chart-pie"}),"  Projects  "),r.a.createElement(S,null),r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-users"}),"  Team "),r.a.createElement(W,null),r.a.createElement("h1",null," ",r.a.createElement("i",{className:"fas fa-globe"}),"  Advisory Board"),r.a.createElement(F,null))}}]),a}(r.a.Component);var L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Error 404 Page not found")}}]),a}(r.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement("h1",null,"DataScore Project Description"),r.a.createElement("p",null,"The DataScore as a project of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403896",target:"_blank"},"Research Data Management (RDM)")," engagement pursues the realizations of the ",r.a.createElement("a",{className:"font-weight-bold",href:"https://sfdora.org/",target:"_blank"},"San Francisco Declaration of Research Assessment")," (DORA)."),r.a.createElement("p",null,"DataScore aims on the analysis of the additional effort necessary for decent reasech data management. Therefore, Datasets stored with ",r.a.createElement("a",{className:"font-weight-bold",href:"https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403989",target:"_blank"},"meta data"),' on online repository are the central pivot of DataScore\'s metrics. In order to aquire analysable dataset metrics, DataScore strives to provide "How to" and "Best Practice" guides for repository operators.'),r.a.createElement("p",null,"As a project of the Karlsruhe Institute of Technology being the University of the Helmholtz Research Society, DataScore aspires to provide also recommendations for education and graduation processes. Please view the project's site for details."))}}]),a}(r.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"We are very happy for any contribution to the DataScore project."),r.a.createElement("p",null,"You very welcome to contribute to any of our application via GitHub ",r.a.createElement("a",{href:"https://github.com/ASDSE"},"ASDSE"),"."),r.a.createElement("p",null,"Also please feel free to contact us via the E-Mail Adresses of our core team members."))}}]),a}(r.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement("h2",null,"Website Disclaimer of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Thank you for visiting the ",r.a.createElement("span",{className:"website_name"},"DataScore"),". Our Website Disclaimer was created by ",r.a.createElement("a",{href:"https://www.disclaimer-template.com"},"Disclaimer Template ")," for ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")),r.a.createElement("p",null,"Please note that the information provided on ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and other related web properties are for informational purposes only."),r.a.createElement("p",null,"The information is provided by ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu")," and whilst we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk."),r.a.createElement("p",null,"In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website."),r.a.createElement("p",null,"Through this website you are able to link to other websites which are not under the control of ",r.a.createElement("span",{className:"website_url"},"datascore.int.kit.edu"),". We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them."),r.a.createElement("p",null,"Every effort is made to keep the website up and running smoothly. However, ",r.a.createElement("span",{className:"website_name"},"DataScore")," takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond our control."),r.a.createElement("p",null,"Our Website is provided by ",r.a.createElement("span",{className:"website_name"},"DataScore"),' on an "AS IS" basis. Our Privacy Policy was created by ',r.a.createElement("a",{href:"https://www.generateprivacypolicy.com/"},"the Privacy Policy Generator"),"."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," makes no representations or warranties of any kind, express or implied as to the operation of the site, the information, content, materials or products included on the site."),r.a.createElement("p",null,"To the full extent permissible by applicable law, ",r.a.createElement("span",{className:"website_name"},"DataScore")," disclaims all warranties, express or implied, including, but not limited to, the implied warranties and/or conditions of merchantability or satisfactory quality and fitness for a particular purpose and non-infringement."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," will not be liable for any damages of any kind arising from the use of the site, including, but not limited to direct, indirect, incidental, punitive and consequential damages."),r.a.createElement("p",null,r.a.createElement("span",{className:"website_name"},"DataScore")," does not warrant that the site, or the server that makes it available, is free of viruses or other harmful components."))}}]),a}(r.a.Component),B=(a(5),a(15)),z=a.n(B);var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header pb-8 pt-5 pt-md-1"},r.a.createElement(p.a,{fluid:!0},r.a.createElement("div",{className:"header-body"},r.a.createElement(h.a,{className:"pt-3"},r.a.createElement(y.a,{lg:"0",xl:"2"}),r.a.createElement(y.a,{lg:"6",xl:"4"},r.a.createElement(v,{title:"Scientist",icon:"fas fa-users",iconbg:"bg-yellow",fullName:"Nicolas Deutscher"})),r.a.createElement(y.a,{lg:"6",xl:"4"},r.a.createElement(v,{title:"Total Numbers",icon:"fas fa-chart-bar",iconbg:"bg-danger",fullName:"Datasets"}))),r.a.createElement(h.a,{className:"pt-3"})))))},G=a(34),K=a(17),Q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentWillMount",value:function(){window.Chart&&Object(K.parseOptions)(z.a,Object(K.chartOptions)())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{className:"chart"},r.a.createElement(G.a,{data:K.chartExample2.data,options:K.chartExample2.options})))))}}]),a}(r.a.Component),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentWillMount",value:function(){window.Chart&&Object(K.parseOptions)(z.a,Object(K.chartOptions)())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"bg-default"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"chart"},r.a.createElement(G.b,{data:K.chartExample1.data1,options:K.chartExample1.options,getDatasetAtEvent:function(e){return console.log(e)}})))))}}]),a}(r.a.Component),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement("h1",null,"Dashboard"),r.a.createElement(q,null),r.a.createElement(h.a,null,r.a.createElement(y.a,null,r.a.createElement(Q,null)),r.a.createElement(y.a,null,r.a.createElement(U,null))))}}]),a}(r.a.Component),$=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement("h1",null,"DataScore's Jupyter Hub"),r.a.createElement("p",null,"The JupyterHub as a collaborative Jupyter Notebooks server is our development platform of different analysis of datasets metrics."),r.a.createElement("p",null,"The python programming lanuage as the core language of Jupyter Lab features versatile data science packages such as numpy and pandas. These packages alongside ",r.a.createElement("a",{className:"font-weight-bold",href:"https://support.datacite.org/docs/datacite-graphql-api-guide",target:"_blank"},"DataCite's GraphQL API")," allows us to process real dataset metrics with theoretical models"),r.a.createElement("p",null,"The resluting Jupyter Notebooks will be shared with the scientific comunity ",r.a.createElement("em",null,"via")," ",r.a.createElement("a",{className:"font-weight-bold",href:"https://github.com/ASDSE/datascore_public_jupnbs",target:"_blank"},"GitHub")," and ",r.a.createElement("a",{className:"font-weight-bold",href:"https://mybinder.org/v2/gh/ASDSE/datascore_public_jupnbs/master?filepath=DataCite_Researcher.ipynb",target:"_blank"},"Binder"),"."),r.a.createElement("p",null,"You are very welcome to use our JupyterHub. Please follow the ReadMe on our GitHub repository."),r.a.createElement(x.a,{className:"mt-auto",color:"default",href:"https://datascore-jupyterhub.int.kit.edu/hub/login",target:"_blank"},"JupyterHub"))}}]),a}(r.a.Component),Z=a.p+"static/media/DataScoreLogoWeb.f51617fc.png",V=a(193),X=a(194),ee=a(197),te=a(195);function ae(e){return r.a.createElement(V.a,null,r.a.createElement(c.b,{className:"nav-link-icon",to:e.route},e.text))}var ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{className:"navbar-horizontal navbar-dark bg-default",expand:"lg"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(c.b,{className:"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block",to:"/"},r.a.createElement("img",{alt:"...",src:Z,width:"120",height:"120"})),r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(ee.a,{navbar:!0,toggler:"#navbar-default"},r.a.createElement("div",{className:"navbar-collapse-header"},r.a.createElement(h.a,null,r.a.createElement(y.a,{className:"collapse-brand",xs:"6"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{alt:"...",src:Z}))),r.a.createElement(y.a,{className:"collapse-close",xs:"6"},r.a.createElement("button",{"aria-controls":"navbar-default","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-default","data-toggle":"collapse",id:"navbar-default",type:"button"},r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(te.a,{className:"ml-lg-auto",navbar:!0},r.a.createElement(ae,{text:"Home",route:"/"}),r.a.createElement(ae,{text:"About",route:"/about"}),r.a.createElement(ae,{text:"Projects",route:"/projects"}),r.a.createElement(ae,{text:"Dashboard",route:"/dashboard"}),r.a.createElement(ae,{text:"JupyterHub",route:"/jupyterhub"}),r.a.createElement(ae,{text:"Team",route:"/team"}),r.a.createElement(ae,{text:"Contact",route:"/contact"}))))))}}]),a}(r.a.Component),re=a.p+"static/media/LogoKIT.6d64b848.svg",le=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,{className:"align-items-center justify-content-xl-between"},r.a.createElement(y.a,{xl:"6"},r.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"\xa9 2020"," ",r.a.createElement("a",{className:"font-weight-bold ml-1",href:"https://kit.edu",rel:"noopener noreferrer",target:"_blank"},"Karlsruhe Institute of Technology"))),r.a.createElement(y.a,{xl:"6"},r.a.createElement(te.a,{className:"nav-footer justify-content-center justify-content-xl-end"},r.a.createElement(V.a,{className:"pl-2 pt-1"},r.a.createElement(c.b,{to:"/disclaimer"},"Disclaimer")),r.a.createElement(V.a,{className:"pl-2 pt-1"},r.a.createElement(c.b,{to:"/about"},"About")),r.a.createElement(V.a,{className:"pl-2"},r.a.createElement("img",{alt:"...",src:re,height:"50"})))))))}}]),a}(r.a.Component),oe=r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(ne,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:H}),r.a.createElement(i.a,{exact:!0,path:"/projects",component:S}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:M}),r.a.createElement(i.a,{exact:!0,path:"/team",component:W}),r.a.createElement(i.a,{exact:!0,path:"/about",component:J}),r.a.createElement(i.a,{exact:!0,path:"/disclaimer",component:R}),r.a.createElement(i.a,{exact:!0,path:"/dashboard",component:Y}),r.a.createElement(i.a,{exact:!0,path:"/jupyterhub",component:$}),r.a.createElement(i.a,{component:L})),r.a.createElement(le,null)));o.a.render(oe,document.getElementById("root"))},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[182,1,2]]]);
//# sourceMappingURL=main.cc670fab.chunk.js.map