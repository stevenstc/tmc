(this["webpackJsonpusdt-forsage"]=this["webpackJsonpusdt-forsage"]||[]).push([[0],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(57),s=a.n(l),c=a(2),i=a.n(c),o=a(3),m=a(8),d=a(9),u=a(11),p=a(10),v=a(58),E=a.n(v),f={tronWeb:!1,contract:!1,setTronWeb:function(e){this.tronWeb=e},setContract:function(e,t){var a=this;return Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},b=a(6),h="TDL7ZoYdhNa5DZzyHkggSQ4wv5PvJXdkCA",g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={texto:"Loading...",sponsor:"",level:"Loading...",levelPrice:0,balanceUSDT:"Loading...",aprovedUSDT:0,contractUSDT:{}},n.deposit=n.deposit.bind(Object(b.a)(n)),n.estado=n.estado.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.setContract(window.tronWeb,h);case 2:this.estado(),setInterval((function(){return t.estado()}),1e3);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"estado",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,l,s,c,o,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=window.tronWeb.defaultAddress.base58,a=0,n=15;case 3:if(!(n>=0)){e.next=11;break}return e.next=6,f.contract.usersActiveX3Levels(t,n).call();case 6:if(!e.sent){e.next=8;break}a++;case 8:n--,e.next=3;break;case 11:return e.next=13,f.contract.levelPrice(a+1).call();case 13:return r=e.sent,e.next=16,f.contract.tokenUSDT().call();case 16:return l=e.sent,e.next=19,window.tronWeb.contract().at(l);case 19:return s=e.sent,e.next=22,s.balanceOf(t).call();case 22:return c=e.sent,c=parseInt(c._hex)/Math.pow(10,6),e.next=26,s.allowance(t,h).call();case 26:o=(o=e.sent).remaining?parseInt(o.remaining._hex)/Math.pow(10,6):parseInt(o._hex)/Math.pow(10,6),m=o>0?0===a?"Register and buy the first level":"Buy next level":"Link Wallet",this.setState({level:a,levelPrice:parseInt(r._hex)/Math.pow(10,6),balanceUSDT:c,texto:m,aprovedUSDT:o,contractUSDT:s});case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deposit",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,l,s,c,o,m,d,u,p,v,E,b,g,w,x,N,y,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.level,n=t.levelPrice,r=t.balanceUSDT,l=t.aprovedUSDT,s=t.contractUSDT,c=n,c=parseFloat(c),o=window.tronWeb.defaultAddress.base58,e.next=6,window.tronWeb.trx.getBalance();case 6:return m=e.sent,m/=Math.pow(10,6),console.log(m),console.log(c),e.next=12,f.contract.owner().call();case 12:if(d=e.sent,u=window.tronWeb.address.fromHex(d),!((p=l)<=0)){e.next=19;break}return e.next=18,s.approve(h,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send();case 18:return e.abrupt("return");case 19:return e.next=21,f.contract.LAST_LEVEL().call();case 21:if(v=e.sent,!(m>=50&&p>=c&&r>=c&&a<v)){e.next=50;break}if(!((E=document.location.href).indexOf("?")>0)){e.next=38;break}for(b=E.split("?")[1],g=b.split("&"),w={},x=0,N=g.length;x<N;x++)y=g[x].split("="),w[y[0]]=unescape(decodeURI(y[1]));if(!w.ref){e.next=38;break}return y=w.ref.split("#"),e.next=33,f.contract.idToAddress(y[0]).call();case 33:return k=e.sent,e.next=36,f.contract.isUserExists(k).call();case 36:if(!e.sent){e.next=38;break}u=window.tronWeb.address.fromHex(k);case 38:return this.setState({sponsor:u}),e.next=41,f.contract.isUserExists(o).call();case 41:if(!e.sent){e.next=46;break}return e.next=44,f.contract.buyNewLevel(a+1,c*Math.pow(10,6)).send();case 44:e.next=48;break;case 46:return e.next=48,f.contract.registrationExt(u,c*Math.pow(10,6)).send();case 48:e.next=51;break;case 50:c>200&&m>250?c>m?m<=50?window.alert("You do not have enough funds in your account you place at least 250 TRX"):(document.getElementById("amount").value=m-50,window.alert("You must leave 50 TRX free in your account to make the transaction")):(document.getElementById("amount").value=c-50,window.alert("You must leave 50 TRX free in your account to make the transaction")):window.alert("You do not have enough funds in your account you place at least 250 TRX");case 51:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:"/images/TMC-blanco-verde.svg",width:"100%",alt:"TMC"}),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{style:{fontSize:"18px"}},"Balance"),r.a.createElement("p",{style:{fontSize:"18px"}},"Level")),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement("p",{style:{fontSize:"18px"}},this.state.balanceUSDT," ",r.a.createElement("strong",null,"USDT")),r.a.createElement("p",{style:{fontSize:"18px"}},this.state.level)))))),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{style:{fontSize:"16px"}},r.a.createElement("button",{onClick:function(){return e.deposit()},type:"submit",className:"auth-btn btn btn-success btn-sm",style:{color:"white",width:"100%"}},this.state.texto)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{style:{fontSize:"16px"}},"Price ",this.state.levelPrice," USDT"),r.a.createElement("p",{style:{fontSize:"16px"}},"You must have ~ 50 TRX to make the transaction")))))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:"N/A",link:"Haz una inversi\xf3n para obtener el LINK de referido"},n.Link=n.Link.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.setContract(window.tronWeb,h);case 2:setInterval((function(){return t.Link()}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"Link",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,t=window.tronWeb.address.fromHex(t.address),e.next=6,f.contract.users(t).call();case 6:return a=e.sent,e.next=9,f.contract.isUserExists(t).call();case 9:if(!e.sent){e.next=16;break}(n=document.location.href).indexOf("?")>0&&(n=n.split("?")[0]),t=n+"?ref="+parseInt(a.id._hex),this.setState({id:parseInt(a.id._hex),link:t}),e.next=17;break;case 16:this.setState({id:"N/A",link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"Sidebar_root__3k9LL"},r.a.createElement("main",{className:"Sidebar_content__1DsCZ"},r.a.createElement(g,null),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{style:{fontSize:"16px"}},"My id"),r.a.createElement("p",{style:{fontSize:"16px"}},"Wallet")),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement("p",{style:{fontWeight:"bold",fontSize:"16px"}},this.state.id),r.a.createElement("p",{style:{textAlign:"right",fontSize:"16px",wordBreak:"break-all"}},window.tronWeb.defaultAddress.base58," ",r.a.createElement("i",{className:"fa fa-clipboard text-white"})))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null))))),r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"widget Widget_widget__32uL4"},r.a.createElement("header",{className:"Widget_title__1U9X_"},r.a.createElement("div",{className:"mt-0",style:{padding:"10px"}},"My affiliate link")),r.a.createElement("div",{"aria-hidden":"false",className:"rah-static rah-static--height-auto",style:{height:"auto",overflow:"visible"}},r.a.createElement("div",null,r.a.createElement("div",{className:"Widget_widgetBody__34soD widget-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"mt form-group"},r.a.createElement("div",{className:"input-group input-group"},r.a.createElement("input",{id:"link",required:"",name:"link",placeholder:"Link",value:this.state.link,type:"text",className:"input-transparent pl-3 form-control",disabled:!0}),r.a.createElement("div",{className:"bg-transparent input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-clipboard text-white"}))))),r.a.createElement("div",{className:"mt form-group"},r.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){navigator.clipboard.writeText(e.state.link),window.alert("link copied!")},style:{color:"white",width:"90%"}},"Copy referal link"))))))),r.a.createElement("div",{className:"Widget_widgetBackground__1F6dp",style:{display:"none"}}))))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invertido:0,ganado:0,my:0,withdrawn:0,canastas:[r.a.createElement("div",{className:"col-lg-3",key:"level1"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 1 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level2"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 2 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level3"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 3 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level4"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 4 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level5"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 5 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level6"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 6 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level7"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 7 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level8"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 8 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level9"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 9 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level10"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 10 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level11"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 11 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level12"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 12 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level13"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 13 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level14"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 14 (Inactive) ")))),r.a.createElement("div",{className:"col-lg-3",key:"level15"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("span",{style:{fontSize:"22px"}},r.a.createElement("br",null),r.a.createElement("strong",null,"Level 15 (Inactive) "))))]},n.Investors=n.Investors.bind(Object(b.a)(n)),n.Link=n.Link.bind(Object(b.a)(n)),n.withdraw=n.withdraw.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.setContract(window.tronWeb,h);case 2:setInterval((function(){return t.Link()}),3e3),setInterval((function(){return t.Investors()}),7e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"Link",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,console.log(t),t=window.tronWeb.address.fromHex(t.address),e.next=7,f.contract.users(t).call();case 7:return a=e.sent,e.next=10,f.contract.isUserExists(t).call();case 10:if(!e.sent){e.next=17;break}(n=document.location.href).indexOf("?")>0&&(n=n.split("?")[0]),t=n+"?ref="+parseInt(a.id._hex),this.setState({link:t}),e.next=18;break;case 17:this.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Investors",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,l,s,c,o,m,d,u,p,v,E,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:for(t=e.sent,t=window.tronWeb.address.fromHex(t.address),a=15,n=this.state.canastas,l=0,s=0,c=0,m=[],(o=[])[1]=20,m[1]=0,m[4]=4,d=2;d<=a;d++)o[d]=2*o[d-1],d>=5?m[d]=2*m[d-1]:4!==d&&(m[d]=0);d=1;case 16:if(!(d<=a)){e.next=53;break}return e.next=19,f.contract.usersActiveX3Levels(t,d).call();case 19:if(!e.sent){e.next=48;break}return l+=o[d],e.next=23,f.contract.usersX3Matrix(t,d).call();case 23:(u=e.sent)[3]=parseInt(u[3]._hex),s+=u[1].length+3*u[3],c+=(u[1].length+3*u[3])*m[d],p=u[1].length+3*u[3]%3,e.t0=p,e.next=1===e.t0?31:2===e.t0?35:0===e.t0?39:43;break;case 31:return v="badge-on",E="",b="",e.abrupt("break",44);case 35:return v="badge-on",E="badge-on",b="",e.abrupt("break",44);case 39:return v="badge-on",E="badge-on",b="badge-on",e.abrupt("break",44);case 43:return e.abrupt("break",44);case 44:n[d-1]=r.a.createElement("div",{className:"col-lg-4",key:"level"+d},r.a.createElement("section",{className:"widget Widget_widget__32uL4 widget-auth mx-auto pack pack-enable"},r.a.createElement("header",{className:"Widget_title__1U9X_"},r.a.createElement("div",{className:"pack-header pack-header-enable"},r.a.createElement("div",{className:"pack-ind"},r.a.createElement("span",{className:"badge badge-dark-no-border"},d)),r.a.createElement("div",{className:"text-center mb-sm",style:{padding:"5px"}},r.a.createElement("h6",null,"       ",o[d])))),r.a.createElement("div",{"aria-hidden":"false",className:"rah-static rah-static--height-auto",style:{height:"auto",overflow:"visible"}},r.a.createElement("div",null,r.a.createElement("div",{className:"Widget_widgetBody__34soD widget-body"},r.a.createElement("div",{className:"pack-body"},r.a.createElement("div",{className:"mt row"},r.a.createElement("span",{className:"badge-left badge "+v},r.a.createElement("i",{className:"fa fa-users"})),r.a.createElement("span",{className:"badge-center badge "+E},r.a.createElement("i",{className:"fa fa-users"})),r.a.createElement("span",{className:"badge-right badge  "+b},r.a.createElement("i",{className:"fa fa-users"}))),r.a.createElement("div",{className:"mt row"}),r.a.createElement("div",{className:"mt row"}),r.a.createElement("div",{className:"mt row"},r.a.createElement("div",{className:"text-center mb-sm",style:{position:"relative",left:"20%"}},r.a.createElement("button",{type:"submit",className:"auth-btn btn btn-success",style:{color:"white",width:"100%"}},"Buyed")))),r.a.createElement("footer",null,r.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-parthers-btn"},r.a.createElement("i",{className:"fa fa-users"})," ",u[1].length+3*u[3]),r.a.createElement("div",{color:"transparent",className:"btn-xs float-right py-0",id:"load-notifications-btn"},r.a.createElement("i",{className:"fa fa-refresh"})," ",u[3])))))),r.a.createElement("div",{className:"Widget_widgetBackground__1F6dp",style:{display:"none"}})),e.next=49;break;case 48:n[d-1]=r.a.createElement("div",{className:"col-lg-4",key:"level"+d},r.a.createElement("section",{className:"widget Widget_widget__32uL4 widget-auth mx-auto pack pack-enable"},r.a.createElement("header",{className:"Widget_title__1U9X_"},r.a.createElement("div",{className:"pack-header pack-header-enable"},r.a.createElement("div",{className:"pack-ind"},r.a.createElement("span",{className:"badge badge-dark-no-border"},d)),r.a.createElement("div",{className:"text-center mb-sm",style:{padding:"5px"}},r.a.createElement("h6",null,o[d])))),r.a.createElement("div",{"aria-hidden":"false",className:"rah-static rah-static--height-auto",style:{height:"auto",overflow:"visible"}},r.a.createElement("div",null,r.a.createElement("div",{className:"Widget_widgetBody__34soD widget-body"},r.a.createElement("div",{className:"pack-body"},r.a.createElement("div",{className:"mt row"},r.a.createElement("span",{className:"badge-left badge badge-gray"+v},r.a.createElement("i",{className:"fa fa-users"})),r.a.createElement("span",{className:"badge-center badge badge-gray"+E},r.a.createElement("i",{className:"fa fa-users"})),r.a.createElement("span",{className:"badge-right badge badge-gray"+b},r.a.createElement("i",{className:"fa fa-users"}))),r.a.createElement("div",{className:"mt row"}),r.a.createElement("div",{className:"mt row"}),r.a.createElement("div",{className:"mt row"},r.a.createElement("div",{className:"text-center mb-sm",style:{position:"relative",left:"20%"}},r.a.createElement("button",{type:"submit",className:"auth-btn btn btn-success",style:{color:"white",width:"100%"}},"Buy level")))),r.a.createElement("footer",null,r.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-parthers-btn"},r.a.createElement("i",{className:"fa fa-users"})," 0"),r.a.createElement("div",{color:"transparent",className:"btn-xs float-right py-0",id:"load-notifications-btn"},r.a.createElement("i",{className:"fa fa-refresh"})," 0")))))),r.a.createElement("div",{className:"Widget_widgetBackground__1F6dp",style:{display:"none"}}));case 49:this.setState({canastas:n});case 50:d++,e.next=16;break;case 53:this.setState({invertido:l,ganado:c,personas:s});case 54:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"withdraw",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.contract.withdraw().send();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("main",{className:"Layout_content__3Ygen"},r.a.createElement("section",{className:"widget Widget_widget__32uL4"},r.a.createElement("header",{className:"Widget_title__1U9X_",style:{marginLeft:"30px",padding:"10px"}},r.a.createElement("header",{className:"dashboard-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("h2",null,"Earned:"),r.a.createElement("p",null,this.state.ganado," USDT"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("h2",null,"My invested:"),r.a.createElement("p",null,this.state.invertido," USDT"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"choose__item"},r.a.createElement("h2",null,"People:"),r.a.createElement("p",null,0|this.state.personas)))))),r.a.createElement("div",{"aria-hidden":"false",className:"rah-static rah-static--height-auto",style:{height:"auto",overflow:"visible"}},r.a.createElement("div",{className:"Widget_widgetBody__34soD widget-body"},r.a.createElement("div",{className:"row"},this.state.canastas),r.a.createElement("footer",{className:"text-sm card-footer",style:{height:"50px",maxHeight:"50px"}},r.a.createElement("div",{className:"mt row"},r.a.createElement("div",{className:"col-12 col-md-3"},r.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},r.a.createElement("i",{className:"fa fa-refresh"})," Recycle count")),r.a.createElement("div",{className:"col-12 col-md-3"},r.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},r.a.createElement("i",{className:"fa fa-users"})," Number partners in the slot"))))))),r.a.createElement("div",{className:"Widget_widgetBackground__1F6dp",style:{display:"none"}}))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Layout_root__tsDUs"},r.a.createElement("div",{className:"Layout_wrap__3suIr"},r.a.createElement(w,null),r.a.createElement(x,null)))}}]),a}(n.Component),y=a(59),k=a.n(y),_="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",W=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:k.a,className:"img-fluid",alt:"TronLink logo"})),S=function(){window.open(_,"_blank")},L=function(e){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tronLink row",onClick:S,style:{padding:"3em"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously created wallet.")),W)):r.a.createElement("div",{className:"row",onClick:S},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:_,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),W)},I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={tronWeb:{installed:!1,loggedIn:!1}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return t.setState({tronWeb:a}),e();var n=0,r=setInterval((function(){if(n>=10){console.log("intento "+n);return window.tronWeb=new E.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),t.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;t.setState({tronWeb:a}),e()}),3e3)}));case 2:this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",(function(){t.state.tronWeb.loggedIn||t.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),f.setTronWeb(window.tronWeb);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/",t=document.location.href,a="";if(t.indexOf("?")>0&&(e=(e=t.split("?")[1]).split("#")[0],a="?"),!this.state.tronWeb.installed)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(L,null)));if(!this.state.tronWeb.loggedIn)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(L,{installed:!0})));switch(e){case"BackOffice":case"backOffice":case"backoffice":return r.a.createElement(N,{url:a+e});case"ViewOffice":case"viewOffice":case"viewoffice":default:return r.a.createElement(N,{url:a+e})}}}]),a}(n.Component),O=document.getElementById("root");s.a.render(r.a.createElement(I,null),O)},59:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},60:function(e,t,a){e.exports=a(194)},89:function(e,t){},90:function(e,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.dee1cad6.chunk.js.map