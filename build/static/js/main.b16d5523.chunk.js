(this["webpackJsonpchemistry-anime"]=this["webpackJsonpchemistry-anime"]||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},102:function(e,t,i){},103:function(e,t,i){},179:function(e,t,i){},180:function(e,t,i){"use strict";i.r(t);var n={};i.r(n),i.d(n,"default",(function(){return Be}));var s,c,o=i(5),r=i.n(o),a=i(14),l=i.n(a),u=(i(66),i(10)),d=(i(67),i(43),i(184)),h=i(12),j=(i(73),i(1)),p=function(e){var t=e.title,i=e.description,n=e.children,s=e.isFlex,c=e.shake,o=e.mode;return Object(j.jsxs)("div",{className:"Block ".concat(c?"Shake":""," ").concat(o?"Toxic":"Fire"),style:s?{display:"flex"}:{},children:[t&&Object(j.jsx)("h1",{children:t}),i&&Object(j.jsx)("p",{children:i}),n]})},m=(i(75),function(e){var t=e.style,i=e.children;return Object(j.jsx)("div",{className:"GridWrapper",style:t,children:i})}),b=function(e){var t=e.style,i=e.children;return Object(j.jsx)("div",{className:"GridCell",style:t,children:i})},g=(i(76),function(e){var t=e.image,i=e.style;return Object(j.jsx)("img",{className:"Image",style:i,src:t})}),O=(i(77),function(e){var t=e.title,i=e.handler,n=e.level,s=e.size,c=void 0===s?"lg":s;return Object(j.jsx)("div",{onClick:i,className:"Button ".concat(n),children:Object(j.jsx)("div",{className:"Title ".concat(c),children:t})})}),f=i.p+"static/media/kurisu_smile.4879e1b6.svg",v={kurisu_sad:i.p+"static/media/kurisu_sad.ca0b9b80.svg",kurisu_smile:f,kurisu_finger:i.p+"static/media/kurisu_finger.3e616d0f.svg"},x=function(e){return v[e]},y=(i(78),function(e){var t=e.placeholder,i=e.state,n=e.setState,s=e.size;return Object(j.jsx)("input",{className:"TextInput ".concat(s),placeholder:t,value:i,onChange:function(e){return n(e.target.value)}})}),S=Symbol("SET_CLIENT_NAME"),C=Symbol("SET_NEXT_STAGE"),N=Symbol("SET_PREV_STAGE"),w=Symbol("SET_STATUS"),k=Symbol("SET_LEVEL"),E=Symbol("SET_STATISTIC"),T=Symbol("SET_ANSWER"),I=Symbol("SET_MODE"),z=Symbol("SET_GAME_END"),_=Symbol("SET_STAGE"),M=function(){return{type:z}},F=function(e,t,i){return{type:I,mode:e,time:t,taskNum:i}},R=function(e,t){return{type:k,level:e,level_num:t}},L=function(e){return{type:w,status:e}},D=function(e){return localStorage.setItem("statistic",JSON.stringify(e)),{type:E,statistic:e}},A=function(e){return{type:_,stage:e}},H={gridTemplateColumns:"30% 70%",gridTemplateRows:"80% 20%"},q=function(e){var t=e.next,i=e.setFlag,n=Object(o.useState)(""),s=Object(u.a)(n,2),c=s[0],r=s[1],a=Object(h.c)();return Object(j.jsxs)(m,{style:H,children:[Object(j.jsx)(b,{style:{gridRowStart:1,gridRowEnd:3},children:Object(j.jsx)(p,{children:Object(j.jsx)(g,{image:x("kurisu_smile")})})}),Object(j.jsx)(p,{title:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0442\u044b \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439?",description:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u043d\u0430\u0441 \u0443\u0440\u043e\u043a \u0445\u0438\u043c\u0438\u0438 \u0438 \u043c\u044b \u043f\u0435\u0440\u0445\u043e\u0434\u0438\u043c \u0432 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044e. \u0411\u0443\u0434\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e! \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u0437\u0430\u043d\u044f\u0442\u0438\u044e.",children:Object(j.jsx)(y,{placeholder:"\u041a\u0430\u043a \u0442\u0435\u0431\u044f \u0437\u043e\u0432\u0443\u0442?",size:"md",state:c,setState:r})}),Object(j.jsx)(O,{handler:function(){i(!1),setTimeout((function(){a(function(e){var t,i=localStorage.getItem("clientName");return localStorage.setItem("clientName",null!==e&&void 0!==e?e:""),{type:S,clientName:null!==(t=null===i||void 0===i?void 0:i.clientName)&&void 0!==t?t:e}}(c)),t()}),1e3)},title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})},B=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.clientName},P=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.status},V=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.level},Z=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.statistic},G=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.answer},J=function(e){var t;return null===e||void 0===e||null===(t=e.default)||void 0===t?void 0:t.gameEnd},U=(i(79),function(e){var t=e.isSelected;return Object(j.jsx)("div",{className:"RadioDecoratorOuter",children:Object(j.jsx)("div",{className:"RadioDecorator RadioDecorator".concat(t?"Selected":"NonSelected")})})}),W=(i(80),function(e){e.value;var t=e.children;return Object(j.jsx)("div",{className:"RadioValue",children:t})}),X=(i(81),function(e){var t=e.value,i=e.isSelected,n=e.selectOption,s=e.option;return Object(j.jsxs)("div",{className:"Radio",onClick:function(){return n(t)},children:[Object(j.jsx)(U,{isSelected:i}),Object(j.jsx)(W,{children:s})]})}),K=function(e){var t=e.options,i=e.selectedOption,n=e.setSelectedOption,s=Object(o.useCallback)((function(e){n(e)}),[]);return Object(j.jsx)("div",{className:"RadioSelect",children:t.map((function(e,t){return Object(j.jsx)(X,{value:t,isSelected:t===i,selectOption:s,option:e},t)}))})},Y=(i(82),function(e){var t=e.value,i=e.size,n=void 0===i?"sm":i,s=e.level;return Object(j.jsx)("div",{className:"Title ".concat(n," ").concat(s),children:t})}),Q=(i(83),function(e){var t=e.placeholder,i=e.state,n=e.setState,s=e.size;return Object(j.jsx)("input",{type:"number",className:"NumberInput ".concat(s),placeholder:t,value:i,onChange:function(e){return n(e.target.value)}})}),$=(i(84),function(e){var t=e.children,i=e.direction;return Object(j.jsx)("div",{className:"FlexWrapper".concat(null!==i&&void 0!==i?i:"Horizontal"),children:t})}),ee=(i(85),function(e){var t=e.placeholder,i=e.state,n=e.setState,s=e.size;return Object(j.jsx)("input",{className:"TimeInput ".concat(s),placeholder:t,step:60,type:"time",value:i,onChange:function(e){return n(e.target.value)}})}),te=(i(86),{gridTemplateColumns:"30% 70%",gridTemplateRows:"80% 20%"}),ie=function(e){var t=e.next,i=e.setFlag,n=Object(h.c)(),s=Object(h.d)(B),c=Object(o.useState)(0),a=Object(u.a)(c,2),l=a[0],d=a[1],f=Object(o.useState)("00:10"),v=Object(u.a)(f,2),y=v[0],S=v[1],C=Object(o.useState)(10),N=Object(u.a)(C,2),w=N[0],k=N[1],E=[[Object(j.jsx)("div",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(j.jsx)(ee,{state:y,setState:S})],[Object(j.jsx)("div",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u0439"}),Object(j.jsx)(Q,{state:w,setState:k})],Object(j.jsx)("div",{children:"\u0411\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0438\u0433\u0440\u044b"})];return Object(j.jsx)(r.a.Fragment,{children:Object(j.jsxs)(m,{style:te,children:[Object(j.jsx)(b,{style:{gridRowStart:1,gridRowEnd:3},children:Object(j.jsx)(p,{children:Object(j.jsx)(g,{image:x("kurisu_smile")})})}),Object(j.jsxs)(p,{title:"\u0410 \u0432\u043e\u0442 \u0438 \u043b\u0430\u0431\u0440\u0430\u0442\u043e\u0440\u0438\u044f, ".concat(s,"!"),description:"\u041d\u0443 \u0447\u0442\u043e \u0436\u0435, \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0443 \u043d\u0430\u0441 \u0443\u0440\u043e\u043a \u043f\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0441 \u043d\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0445\u0438\u043c\u0438\u0435\u0439! \u0412\u044b \u0435\u0435 \u0432\u0441\u0435 \u0443\u0436\u0435 \u0437\u043d\u0430\u0435\u0442\u0435, \u0442\u0430\u043a \u0447\u0442\u043e \u043d\u0430\u0434\u0435\u044e\u0441\u044c, \u0432\u044b \u043d\u0435 \u0441\u043f\u0430\u043b\u0438\u0442\u0435 \u0448\u043a\u043e\u043b\u0443:)\n             \u041a\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u043c \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043f\u0440\u043e\u0442\u0435\u043a\u0430\u044e\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0434\u043e\u0441\u043a\u0435? \u041e \u043c\u043e\u0436\u0435\u0442 ".concat(s," \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u043e\u043a\u0430\u0436\u0435\u0442?"),children:[Object(j.jsx)(Y,{value:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0438\u0433\u0440\u044b:",size:"lg"}),Object(j.jsx)(K,{selectedOption:l,setSelectedOption:d,options:E})]}),Object(j.jsx)(O,{title:"\u041d\u0430\u0447\u0430\u0442\u044c",handler:function(){i(!1);var e=3600*Number(y.substr(0,2))+60*Number(y.substr(3,2));console.log(l,e,w),n(F(l,e,Number(w))),n(D({score:0,success:0,error:0,last:0})),setTimeout((function(){t()}),1e3)}})]})})},ne=(i(87),function(e){e.stage;var t=e.children;return Object(j.jsx)("div",{className:"MainContainer",children:t})}),se=(i(88),function(e){var t=e.theme,i=e.children;return Object(j.jsx)("div",{className:"Background ".concat(t),children:i})}),ce=(i(89),i(90),{arrow:i.p+"static/media/arrow.87f695ec.svg",checkmark:i.p+"static/media/checkmark.21ebb7ec.svg",recycle:i.p+"static/media/recycle.234b1bb4.svg",cross:i.p+"static/media/cross.4127f50e.svg"}),oe=function(e){var t=e.icon,i=e.size,n=void 0===i?"sm":i;return Object(j.jsx)("img",{className:"Icon".concat(n),src:ce[t]})},re={marginLeft:"12px"},ae=function(e){var t=e.level,i=e.title;return Object(j.jsxs)("div",{className:"StatusTitle",children:[Object(j.jsx)(oe,{size:"md",icon:"error"==t?"cross":"checkmark"}),Object(j.jsx)("h1",{style:re,className:"error"==t?"Error":"Success",children:i})]})},le={gridTemplateColumns:"50% 50%",gridTemplateRows:"20% 35% 15% 15% 15%"},ue=function(e){e.score;var t=e.prev,i=e.setFlag,n=Object(h.c)(),s=Object(h.d)(P),c=Object(h.d)(Z),o=Object(h.d)(B),r=Object(h.d)(J),a=Object(h.d)(V),l=Object(h.d)(G);return Object(j.jsxs)(m,{style:le,children:[Object(j.jsx)(b,{style:{gridColumnStart:1,gridColumnEnd:3},children:Object(j.jsx)(p,{isFlex:!0,children:Object(j.jsx)(ae,{title:"error"===s?"\u042d\u0442\u0430\u043f \u043f\u0440\u043e\u0432\u0430\u043b\u0435\u043d":"\u042d\u0442\u0430\u043f \u043f\u0440\u043e\u0439\u0434\u0435\u043d!",level:"error"===s?"error":"success"})})}),Object(j.jsx)(b,{style:{gridRowStart:2,gridRowEnd:5},children:Object(j.jsxs)(p,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430. ".concat(o),children:[Object(j.jsxs)($,{children:[Object(j.jsx)(Y,{size:"lg",value:"\u0412\u0430\u0448 \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"}),Object(j.jsx)(Y,{size:"lg",value:c.score})]}),Object(j.jsxs)($,{children:[Object(j.jsx)(Y,{size:"lg",level:"Success",value:"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(j.jsx)(Y,{level:"Success",size:"lg",value:c.success})]}),Object(j.jsxs)($,{children:[Object(j.jsx)(Y,{size:"lg",level:"Error",value:"\u041f\u0440\u043e\u0432\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(j.jsx)(Y,{level:"Error",size:"lg",value:c.error})]}),Object(j.jsxs)($,{direction:"Vertical",children:[Object(j.jsx)(Y,{size:"giga",value:c.last,level:c.last>0?"Success":"Error"}),Object(j.jsx)(Y,{size:"lg",value:"\u041d\u0430 \u044d\u0442\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438"})]})]})}),Object(j.jsx)(b,{style:{gridRowStart:2,gridRowEnd:4},children:Object(j.jsx)(p,{title:"error"===s?"\u041d\u0435 \u043e\u0442\u0447\u0430\u0438\u0432\u0430\u0439\u0441\u044f!":"\u041e\u0442\u043b\u0438\u0447\u043d\u043e!",description:"error"===s?"\u041e\u0442\u043a\u0440\u043e\u0439 \u0443\u0447\u0435\u0431\u043d\u0438\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435... ".concat(o,", \u0434\u0430 \u0442\u044b \u0438\u0442\u0430\u043a \u0432\u0441\u0435 \u0437\u043d\u0430\u0435\u0448\u044c. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437. \u042d\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0441\u0442\u044c."):"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430, ".concat(o,". \u0420\u0435\u0448\u0438\u0448\u044c \u0435\u0449\u0435 \u043f\u0430\u0440\u0443 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432?"),children:Object(j.jsx)($,{direction:"Vertical",children:Object(j.jsx)(g,{style:{width:"130px"},image:x("kurisu_finger")})})})}),Object(j.jsx)(b,{style:{gridRowStart:4,gridRowEnd:5},children:Object(j.jsx)(p,{isFlex:!0,children:Object(j.jsxs)($,{direction:"Center",children:[Object(j.jsx)(Y,{value:"\u041e\u0442\u0432\u0435\u0442:",size:"lg"}),a.success.map((function(e,t){return Object(j.jsx)(Y,{size:"lg",value:String(a.components[e].title)+(t===a.success.length-1?" ":" +")})}))]})})}),Object(j.jsx)(b,{style:{gridRowStart:5,gridRowEnd:6,gridColumnStart:2,gridColumnEnd:3},children:Object(j.jsx)(p,{isFlex:!0,children:Object(j.jsxs)($,{direction:"Center",children:[Object(j.jsx)(Y,{value:"\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442:",size:"lg"}),Object.entries(l).map((function(e,t){return Object(j.jsx)(Y,{size:"lg",level:"".concat(a.success.find((function(t){return t===Number(e[0])}))?"Success":"Error"),value:e[1].title+(t===Object.keys(l).length-1?"":" +")})}))]})})}),r?Object(j.jsx)(O,{title:"\u0412 \u043c\u0435\u043d\u044e",handler:function(){i(!1),n(M()),setTimeout((function(){n(A(1))}),1e3)}}):Object(j.jsx)(O,{title:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u0442\u0430\u043f",handler:function(){i(!1),setTimeout((function(){t()}),1e3)}})]})},de=i(8),he=i(9),je=i(0),pe=i(2),me=i(11),be=i(3),ge=i(4),Oe=i(7),fe=i(24),ve=i(15),xe=i.n(ve),ye={fov:75,cameraZ:75,xyCoef:50,zCoef:10,lightIntensity:.9,ambientColor:0,light1Color:920028,light2Color:1888737,light3Color:1622060,light4Color:15612879},Se=function(e){Object(be.a)(i,e);var t=Object(ge.a)(i);function i(e){var n;return Object(je.a)(this,i),(n=t.call(this,e)).initScene=n.initScene.bind(Object(me.a)(n)),n.initLights=n.initLights.bind(Object(me.a)(n)),n.animatePlane=n.animatePlane.bind(Object(me.a)(n)),n.animateLights=n.animateLights.bind(Object(me.a)(n)),n.updateLightsColors=n.updateLightsColors.bind(Object(me.a)(n)),n.renderer=new Oe.l({antialias:!0,alpha:!0}),n.renderer.setSize(300,300),n.camera=new Oe.i(ye.fov),n.camera.position.z=ye.cameraZ,n.camera.aspect=1,n.simplex=new fe.a,n.animate=n.animate.bind(Object(me.a)(n)),n}return Object(pe.a)(i,[{key:"initScene",value:function(){var e=this;this.scene=new Oe.k,this.initLights(),this.group=new Oe.e;var t=new Oe.d(15,15,30,32);this.waters=[];var i=new Oe.h({metalness:1,roughness:.2,refractionRatio:.95,transparent:!0,opacity:.1,transmission:.1,side:Oe.a,clearcoat:1,clearcoatRoughness:1});this.middle=new Oe.f(t,i),this.group.add(this.middle),this.scene.add(this.group),this.props.props.layers.forEach((function(t,i){return e.createLayer(t,i)})),this.group.position.y=-20,this.group.position.z=40,console.log(this.props),this.camera.position.z=90,this.camera.position.y=-9,this.level_=0,this.mount.appendChild(this.renderer.domElement)}},{key:"createLayer",value:function(e,t){var i=new Oe.g({color:e.properties.color,transparent:!0,opacity:e.properties.opacity}),n=new Oe.c(14.9-.01*t,14.9-.01*t,5+2*t,115);this.waters.push(new Oe.f(n,i)),this.waters[t].position.y=-12,this.group.add(this.waters[t])}},{key:"componentDidUpdate",value:function(e){cancelAnimationFrame(this.frameId),this.initScene(),this.animate()}},{key:"componentDidMount",value:function(){this.initScene(),this.animate()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId),this.mount.removeChild(this.renderer.domElement)}},{key:"animatePlane",value:function(){var e=this;this.waters.forEach((function(t,i){var n=e.waters[i].geometry.attributes.position.array,s=2e-4*Date.now();if(0===i){for(var c=n.length/2;c<n.length;c+=3)n[c+1]=3*e.simplex.noise4D(n[c]/50,n[c+1]/50,s,4.34)+5;for(var o=0;o<n.length/8+3;o+=3)n[o+1]=n[n.length/2+o+1];for(var r=261;r<347;r+=3)n[r+1]=n[n.length/2+r+1]}else{for(var a=e.waters[i-1].geometry.attributes.position.array,l=0;l<n.length/4+3;l+=3)n[l+1]=a[n.length/2+l+1];for(var u=0;u<a.length;u+=3)n[u+1]=a[u+1]+5}e.waters[i].geometry.attributes.position.needsUpdate=!0,e.waters[i].geometry.computeBoundingSphere()}))}},{key:"initLights",value:function(){var e=-20,t=500;this.light1=new Oe.j(ye.light1Color,ye.lightIntensity,t),this.light1.position.set(0,e,90),this.scene.add(this.light1),this.light2=new Oe.j(ye.light2Color,ye.lightIntensity,t),this.light2.position.set(0,20,-90),this.scene.add(this.light2),this.light3=new Oe.j(ye.light3Color,ye.lightIntensity,t),this.light3.position.set(90,e,0),this.scene.add(this.light3),this.light4=new Oe.j(ye.light4Color,ye.lightIntensity,t),this.light4.position.set(-90,e,0),this.scene.add(this.light4)}},{key:"animateLights",value:function(){var e=.001*Date.now(),t=50;this.light1.position.x=Math.sin(.1*e)*t,this.light1.position.z=Math.cos(.2*e)*t,this.light2.position.x=Math.cos(.3*e)*t,this.light2.position.z=Math.sin(.4*e)*t,this.light3.position.x=Math.sin(.5*e)*t,this.light3.position.z=Math.sin(.6*e)*t,this.light4.position.x=Math.sin(.7*e)*t,this.light4.position.z=Math.cos(.8*e)*t}},{key:"updateLightsColors",value:function(){ye.light1Color=xe.a.random().hex(),ye.light2Color=xe.a.random().hex(),ye.light3Color=xe.a.random().hex(),ye.light4Color=xe.a.random().hex(),this.light1.color=new Oe.b(ye.light1Color),this.light2.color=new Oe.b(ye.light2Color),this.light3.color=new Oe.b(ye.light3Color),this.light4.color=new Oe.b(ye.light4Color)}},{key:"animate",value:function(){this.frameId=requestAnimationFrame(this.animate),this.animatePlane(),this.animateLights(),this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{style:{width:"300px",height:"300px"},ref:function(t){e.mount=t}})}}]),i}(o.Component),Ce=i(57),Ne=i.n(Ce),we=(i(96),{fov:75,cameraZ:75,xyCoef:50,zCoef:10,lightIntensity:.9,ambientColor:0,light1Color:920028,light2Color:1888737,light3Color:1622060,light4Color:15612879}),ke=function(e){Object(be.a)(i,e);var t=Object(ge.a)(i);function i(e){var n;return Object(je.a)(this,i),(n=t.call(this,e)).props=e.props,n.initScene=n.initScene.bind(Object(me.a)(n)),n.initLights=n.initLights.bind(Object(me.a)(n)),n.animatePlane=n.animatePlane.bind(Object(me.a)(n)),n.animateLights=n.animateLights.bind(Object(me.a)(n)),n.updateLightsColors=n.updateLightsColors.bind(Object(me.a)(n)),n.renderer=new Oe.l({antialias:!0,alpha:!0}),n.renderer.setSize(100,100),n.camera=new Oe.i(we.fov),n.camera.position.z=we.cameraZ,n.camera.aspect=1,n.simplex=new fe.a,n.animate=n.animate.bind(Object(me.a)(n)),n}return Object(pe.a)(i,[{key:"initScene",value:function(){var e,t;this.scene=new Oe.k,this.initLights(),this.group=new Oe.e;var i=new Oe.d(10,15,30,32),n=new Oe.h({metalness:1,roughness:.2,refractionRatio:.95,transparent:!0,opacity:.1,transmission:.1,side:Oe.a,clearcoat:1,clearcoatRoughness:1}),s=new Oe.h({color:this.props.props.color});console.log(null===(e=this.props)||void 0===e?void 0:e.color);var c=new Oe.g({color:this.props.props.color,transparent:!0,opacity:null===(t=this.props)||void 0===t?void 0:t.props.opacity});this.middle=new Oe.f(i,n),this.group.add(this.middle),this.scene.add(this.group);var o=new Oe.c(12.9,14.9,10,115);this.thing=new Oe.f(o,"liquid"===this.props.props.type_?c:s),this.group.add(this.thing),this.thing.position.y=-10,this.group.position.y=-20,this.group.position.z=40,console.log(this.props),this.camera.position.z=90,this.camera.position.y=-9,this.mount.appendChild(this.renderer.domElement)}},{key:"componentDidMount",value:function(){this.simplex=new fe.a,this.initScene(),this.animate()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId),this.mount.removeChild(this.renderer.domElement)}},{key:"animatePlane",value:function(){for(var e=this.thing.geometry.attributes.position.array,t=2e-4*Date.now(),i=e.length/2;i<e.length;i+=3)e[i+1]="liquid"===this.props.props.type_?3*this.simplex.noise4D(e[i]/50,e[i+1]/50,t,4.34)+5:3*this.simplex.noise3D(e[i]/50,e[i+1]/50,e[i+2]/50)+5;for(var n=0;n<e.length/8+3;n+=3)e[n+1]=e[e.length/2+n+1];for(var s=261;s<347;s+=3)e[s+1]=e[e.length/2+s+1];this.thing.geometry.attributes.position.needsUpdate=!0,this.thing.geometry.computeBoundingSphere()}},{key:"initLights",value:function(){var e=-20,t=500;this.light1=new Oe.j(we.light1Color,we.lightIntensity,t),this.light1.position.set(0,e,90),this.scene.add(this.light1),this.light2=new Oe.j(we.light2Color,we.lightIntensity,t),this.light2.position.set(0,20,-90),this.scene.add(this.light2),this.light3=new Oe.j(we.light3Color,we.lightIntensity,t),this.light3.position.set(90,e,0),this.scene.add(this.light3),this.light4=new Oe.j(we.light4Color,we.lightIntensity,t),this.light4.position.set(-90,e,0),this.scene.add(this.light4)}},{key:"animateLights",value:function(){var e=.001*Date.now(),t=50;this.light1.position.x=Math.sin(.1*e)*t,this.light1.position.z=Math.cos(.2*e)*t,this.light2.position.x=Math.cos(.3*e)*t,this.light2.position.z=Math.sin(.4*e)*t,this.light3.position.x=Math.sin(.5*e)*t,this.light3.position.z=Math.sin(.6*e)*t,this.light4.position.x=Math.sin(.7*e)*t,this.light4.position.z=Math.cos(.8*e)*t}},{key:"updateLightsColors",value:function(){we.light1Color=xe.a.random().hex(),we.light2Color=xe.a.random().hex(),we.light3Color=xe.a.random().hex(),we.light4Color=xe.a.random().hex(),this.light1.color=new Oe.b(we.light1Color),this.light2.color=new Oe.b(we.light2Color),this.light3.color=new Oe.b(we.light3Color),this.light4.color=new Oe.b(we.light4Color)}},{key:"animate",value:function(){this.frameId=requestAnimationFrame(this.animate),this.animatePlane(),this.animateLights(),this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{style:{width:"100px",height:"100px"},ref:function(t){e.mount=t}})}}]),i}(o.Component),Ee=function(e){var t=e.id,i=e.title,n=e.type,s=e.properties,c=e.select,r=(e.deselect,e.setMouse),a=e.setDragValue,l=e.drag,d=e.isSelected,h=Object(o.useState)(!0),p=Object(u.a)(h,2),m=p[0],b=p[1];return d&&m&&b(!1),d||m||b(!0),console.log(s),Object(j.jsx)(Ne.a,{onStart:function(){c(!0),a(t),b(!0)},onStop:function(){c(!1),b(!1)},children:Object(j.jsxs)("div",{className:"DragItem Block",onTouchMove:function(e){console.log(e),l===t&&r(e.changedTouches[0].clientX,e.changedTouches[0].clientY)},onMouseMove:function(e){console.log(e),l===t&&r(e.clientX,e.clientY)},children:[Object(j.jsx)("div",{className:"DragItemTitle",children:i}),m&&Object(j.jsx)(ke,{props:{type_:n,color:s.color,opacity:s.opacity}})]})})},Te=(i(97),function(e){var t=e.items,i=e.select,n=e.deselect,s=e.setMouse,c=e.setDragValue,o=e.drag,r=e.bottle;return console.log(t),Object(j.jsx)("div",{className:"DragField",children:Object.entries(t).map((function(e){return Object(j.jsx)(Ee,{drag:o,id:e[0],isSelected:r[e[0]],setDragValue:c,setMouse:s,select:i,deselect:n,title:e[1].title,type:e[1].type,properties:e[1].properties})}))})}),Ie=(i(98),function(e){var t=e.mouse,i=e.setHoverFlag,n=e.drag,s=e.children,c=Object(o.useRef)(),r=Object(o.useState)(),a=Object(u.a)(r,2),l=a[0],d=a[1],h=Object(o.useState)(!1),p=Object(u.a)(h,2),m=(p[0],p[1]);Object(o.useEffect)((function(){d(c.current.getBoundingClientRect())}),[n]);return Object(o.useEffect)((function(){n&&((null===t||void 0===t?void 0:t.x)<(null===l||void 0===l?void 0:l.right)&&(null===t||void 0===t?void 0:t.x)>(null===l||void 0===l?void 0:l.left)&&(null===t||void 0===t?void 0:t.y)>(null===l||void 0===l?void 0:l.top)&&(null===t||void 0===t?void 0:t.y)<(null===l||void 0===l?void 0:l.bottom)?(console.log(33333),i(!0),m(!0)):(i(!1),m(!1),console.log(22222222)))}),[n,t]),Object(j.jsx)("div",{className:"DropField",ref:c,children:s})}),ze=(i(99),function(e){var t=e.title,i=e.items;return Object(j.jsxs)("div",{className:"Task",children:[Object(j.jsx)(Y,{value:t,size:"lg"}),i.map((function(e){return Object(j.jsx)("div",{className:"TaskItem",children:Object(j.jsx)(Y,{value:e,size:"lg"})})}))]})}),_e=(i(100),{gridTemplateColumns:"60% 40%",gridTemplateRows:"15% 70% 15%"}),Me=Object(h.b)((function(e,t){return console.log(e),{level:V(e),statistic:Z(e)}}))((function(e){e.status,e.score;var t=e.level,i=e.setFlag,n=e.next,s=e.statistic,c=Object(h.c)(),r=Object(o.useState)({}),a=Object(u.a)(r,2),l=a[0],d=a[1],g=Object(o.useState)(!1),f=Object(u.a)(g,2),v=f[0],x=f[1],y=Object(o.useState)(!1),S=Object(u.a)(y,2),C=S[0],N=S[1],w=Object(o.useState)(!1),k=Object(u.a)(w,2),E=k[0],I=k[1],z=Object(o.useState)(!1),_=Object(u.a)(z,2),M=_[0],F=_[1],R=Object(o.useState)({x:0,y:0}),A=Object(u.a)(R,2),H=A[0],q=A[1],B=Object(o.useCallback)((function(e,t){q({x:e,y:t})}),[]);console.log(l);var P=function(){i(!1),setTimeout((function(){c(L("error")),s.error++,s.score+=t.pointsFail,s.last=t.pointsFail,localStorage.setItem("statistic",JSON.stringify(s)),c(D(s)),n()}),1e3)};Object(o.useEffect)((function(){t.errors.forEach((function(e){for(var t=!0,i=0;i<e.length;i++)if(!l[e[i]]){t=!1;break}t&&(x(!0),setTimeout((function(){P()}),3e3))}))}),[l]),Object(o.useEffect)((function(){if(console.log(C,M),!E)if(C)M&&!l[M]&&(d(Object(he.a)(Object(he.a)({},l),{},Object(de.a)({},M,t.components[M]))),F(!1));else if(!E&&M){var e=Object.assign({},l);delete e[M],d(e),F(!1)}}),[E]);var V=Object(o.useCallback)((function(){I(!1)}),[]);return Object(j.jsxs)(m,{style:_e,children:[Object(j.jsx)(b,{style:{gridColumnStart:1,gridColumnEnd:3},children:Object(j.jsx)(p,{isFlex:!0,children:Object(j.jsx)(ze,{title:t.task.title,items:t.task.items})})}),Object(j.jsx)(p,{title:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",children:Object(j.jsx)(Te,{bottle:l,setMouse:B,select:I,setDragValue:F,deselect:V,drag:M,items:t.components})}),Object(j.jsx)(b,{style:{gridRowStart:2,gridRowEnd:4,gridColumnStart:2},children:Object(j.jsx)(p,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",shake:v,children:Object(j.jsx)(Ie,{mouse:H,drag:E,setHoverFlag:N,children:Object(j.jsx)(Se,{props:{layers:Object.values(l)}})})})}),Object(j.jsx)(O,{title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c",handler:function(){c({type:T,answer:l});var e=!0;t.success.length===Object.keys(l).length?t.success.forEach((function(t){l[t]||(e=!1)})):e=!1,e?(i(!1),setTimeout((function(){c(L("success")),localStorage.setItem("statistic",JSON.stringify(s)),s.success++,s.last=t.pointsSuccess,s.score+=t.pointsSuccess,c(D(s)),n()}),1e3)):P()}})]})})),Fe=(i(101),function(e){var t=e.text,i=e.mode,n=e.setAlert;return Object(o.useEffect)((function(){setTimeout((function(){n(-1)}),5e3)}),[]),Object(j.jsxs)("div",{className:"Notification",children:[Object(j.jsx)("div",{className:"Notification".concat(i)}),Object(j.jsx)("div",{className:"NotificationText",children:t})]})}),Re=[{components:{1:{title:"Ca(OH)2",type:"solid",properties:{color:13757784,opacity:1}},2:{title:"HNO3",type:"liquid",properties:{color:8907501,opacity:.4}},3:{title:"H2SO4",type:"liquid",properties:{color:12015853,opacity:.5}},4:{title:"Ca",type:"solid",properties:{color:15571300,opacity:1}}},task:{title:"\u0427\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0435\u0448\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c: ",items:["CaSO4 +","H2O"]},pointsSuccess:50,pointsFail:-25,success:[1,3],errors:[[2,3]]},{components:{1:{title:"Zn",type:"solid",properties:{color:13757784,opacity:1}},2:{title:"HCl",type:"liquid",properties:{color:8907501,opacity:.4}},3:{title:"Cl",type:"liquid",properties:{color:12015853,opacity:.5}},4:{title:"ZnCl",type:"solid",properties:{color:15571300,opacity:1}}},task:{title:"\u0427\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0435\u0448\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c: ",items:["ZnCl2 +","H2"]},pointsSuccess:50,pointsFail:-25,success:[1,2],errors:[[2,3]]},{components:{1:{title:"Fe",type:"solid",properties:{color:13757784,opacity:1}},3:{title:"FeCl",type:"liquid",properties:{color:12015853,opacity:.5}},4:{title:"CuSO3",type:"solid",properties:{color:15571300,opacity:1}},5:{title:"Zn",type:"solid",properties:{color:8907501,opacity:.4}},7:{title:"CuSO4",type:"solid",properties:{color:8907501,opacity:.4}}},task:{title:"\u0427\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0435\u0448\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c: ",items:["FeSO4 +","Cu"]},pointsSuccess:50,pointsFail:-25,success:[1,7],errors:[]},{components:{1:{title:"Na2O",type:"solid",properties:{color:16772440,opacity:1}},2:{title:"H20",type:"liquid",properties:{color:13757951,opacity:.1}},3:{title:"HNO3",type:"liquid",properties:{color:13762392,opacity:.4}},4:{title:"H2SO4",type:"liquid",properties:{color:16777215,opacity:.2}}},task:{title:"\u0427\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0435\u0448\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c: ",items:["NaOH"]},pointsSuccess:50,pointsFail:-25,success:[1,2],errors:[]},{components:{1:{title:"Al4C3",type:"solid",properties:{color:16777215,opacity:1}},2:{title:"H20",type:"liquid",properties:{color:13757951,opacity:.1}},3:{title:"Al(NO3)2",type:"solid",properties:{color:16777215,opacity:1}},4:{title:"H3PO4",type:"liquid",properties:{color:16711935,opacity:.3}}},task:{title:"\u0427\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0435\u0448\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c: ",items:["Al(OH)3 +","CH4"]},pointsSuccess:50,pointsFail:-25,success:[1,2],errors:[]}],Le=function(e){for(var t=e;t===e;)t=Math.floor(100*Math.random())%Re.length;return{level:Re[t],level_num:t}},De=(i(102),function(e){var t=e.time,i=e.setTime,n=e.interval,s=void 0===n?1e3:n,c=e.handler,r=void 0===c?function(){}:c,a=Object(o.useRef)(null);return Object(o.useEffect)((function(){a.current=setInterval((function(){i((function(e){return e-1}))}),s)}),[]),Object(o.useEffect)((function(){-1===t&&(clearInterval(a.current),r())}),[t]),Object(j.jsx)("div",{className:"Timer",children:"".concat(Math.floor(t/3600%60)," : ").concat(Math.floor(t/60%60)," : ").concat(Math.floor(t%60))})}),Ae=(i(103),function(e){var t=e.current,i=e.total;return Object(j.jsx)("div",{className:"TaskCounter",children:"".concat(t," / ").concat(i)})}),He=Object(h.b)((function(e,t){var i,n;return{clientId:null===(i=e.default)||void 0===i?void 0:i.clientId,clientName:null===(n=e.default)||void 0===n?void 0:n.clientName,stage:e.default.stage,status:e.default.status,time_:e.default.time,taskNum_:e.default.taskNum,level_prev:e.default.level_num,mode:e.default.mode,gameEnd:e.default.gameEnd}}),(function(e){return{next:function(){return e({type:C})},prev:function(){return e({type:N})}}}))((function(e){var t=e.stage,i=e.prev,n=e.next,s=e.status,c=e.level_prev,r=e.mode,a=e.time_,l=e.taskNum_,p=e.gameEnd,m=Object(o.useState)(!1),b=Object(u.a)(m,2),g=b[0],O=b[1],f=Object(o.useState)("Intro"),v=Object(u.a)(f,2),x=v[0],y=v[1],S=Object(o.useState)(!1),C=Object(u.a)(S,2),N=C[0],w=C[1],k=Object(o.useState)(0),E=Object(u.a)(k,2),T=E[0],I=E[1],z=Object(o.useState)(0),_=Object(u.a)(z,2),L=_[0],D=_[1],H=Object(h.c)(),B=[Object(j.jsx)(q,{next:n,setFlag:O}),Object(j.jsx)(ie,{next:n,setFlag:O}),Object(j.jsx)(Me,{setFlag:O,next:n}),Object(j.jsx)(ue,{prev:i,setFlag:O})];return Object(o.useEffect)((function(){var e=Le(c),t=e.level,i=e.level_num;H(R(t,i))}),[]),Object(o.useEffect)((function(){if(2===t){var e=Le(c),i=e.level,n=e.level_num;H(R(i,n))}O(!0),1===t&&y("Work"),1===r&&3===t&&D((function(e){return e+1})),w(t)}),[t]),Object(o.useEffect)((function(){0===r&&I(a)}),[r]),Object(o.useEffect)((function(){p||(D(0),I(0),H(F(-1,0,0)))}),[p]),Object(o.useEffect)((function(){1===r&&L===l?H(M()):0===r&&0===T&&(H(M()),O(!1),setTimeout((function(){H(A(3))}),1e3))}),[T,L]),Object(j.jsxs)(se,{theme:x,children:[Object(j.jsx)(d.a,{in:g,unmountOnExit:!0,timeout:1e3,classNames:"MainContainer",children:Object(j.jsx)(ne,{children:B[t]})}),Object(j.jsx)(d.a,{in:2===N,unmountOnExit:!0,timeout:1e3,classNames:"Notification",children:Object(j.jsx)(Fe,{mode:"Info",text:'\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043f\u0440\u043e\u0431\u0438\u0440\u043a\u0430\u0445 \u0432 \u043f\u043e\u043b\u0435 "\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442". \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c".',setAlert:w})}),Object(j.jsx)(d.a,{in:3===N&&"error"===s,unmountOnExit:!0,timeout:1e3,classNames:"Notification",children:Object(j.jsx)(Fe,{mode:"Question",text:"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043d\u0435 \u0442\u043e\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0438\u043b\u0438 \u0441\u043c\u0435\u0448\u0430\u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442 \u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0440\u0435\u0430\u043a\u0446\u0438\u044e",setAlert:w})}),Object(j.jsx)(d.a,{in:3===N&&"error"!==s,unmountOnExit:!0,timeout:1e3,classNames:"Notification",children:Object(j.jsx)(Fe,{mode:"Info",text:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e! \u0422\u044b \u043c\u043e\u043b\u043e\u0434\u0435\u0446!",setAlert:w})}),0===r&&(2===t||3===t)&&!p&&Object(j.jsx)(De,{time:T,setTime:I}),1===r&&(2===t||3===t)&&!p&&Object(j.jsx)(Ae,{current:L,total:l})]})})),qe={stage:localStorage.getItem("clientName")?1:0,clientName:null!==(s=localStorage.getItem("clientName"))&&void 0!==s?s:"",level_num:1,gameEnd:!1,mode:-1,time:0,taskNum:0,level:{},answer:{},statistic:null!==(c=JSON.parse(localStorage.getItem("statistic")))&&void 0!==c?c:{score:0,success:0,error:0,last:0}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(he.a)(Object(he.a)({},e),{},{clientName:t.clientName});case T:return Object(he.a)(Object(he.a)({},e),{},{answer:t.answer});case z:return Object(he.a)(Object(he.a)({},e),{},{gameEnd:!e.gameEnd});case _:return Object(he.a)(Object(he.a)({},e),{},{stage:t.stage});case I:return Object(he.a)(Object(he.a)({},e),{},{mode:t.mode,time:t.time,taskNum:t.taskNum});case E:return Object(he.a)(Object(he.a)({},e),{},{statistic:t.statistic});case k:return Object(he.a)(Object(he.a)({},e),{},{level:t.level,level_num:t.level_num});case N:return Object(he.a)(Object(he.a)({},e),{},{stage:e.stage-1});case C:return Object(he.a)(Object(he.a)({},e),{},{stage:e.stage+1});case w:return Object(he.a)(Object(he.a)({},e),{},{status:t.status});default:return e}},Pe=i(26),Ve=i(183),Ze=i(60),Ge=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Pe.b)(Object(he.a)(Object(he.a)({form:Ve.a},e),n))}(),t=Object(Pe.c)(Object(Pe.a)(Ze.a));return Object(Pe.d)(e,t)}(),Je=i(13),Ue=i.n(Je),We=i(18),Xe=(i(179),function(){var e=150*Math.random();return e<50?10:e}),Ke=function(){var e="made by konstantikkov",t=Object(o.useState)(""),i=Object(u.a)(t,2),n=i[0],s=i[1];return Object(o.useEffect)(Object(We.a)(Ue.a.mark((function t(){return Ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.length<e.length)){t.next=3;break}return t.next=3,setTimeout((function(){return s((function(t){return t+e[t.length]}))}),Xe());case 3:case"end":return t.stop()}}),t)}))),[n]),Object(j.jsx)("div",{className:"InitialScreen",children:Object(j.jsxs)("div",{className:"KurisuGroup",children:[Object(j.jsx)("div",{className:"Kurisu"}),Object(j.jsx)("div",{className:"CodeBack",children:Object(j.jsxs)("div",{className:"MyName",children:[Object(j.jsx)("span",{className:"Cursor",children:"> "}),n,Object(j.jsx)("span",{className:"BlinkingCursor",children:"_"})]})})]})})};var Ye=function(){var e=Object(o.useState)(!0),t=Object(u.a)(e,2),i=t[0],n=t[1];return Object(o.useEffect)((function(){setTimeout((function(){return n(!1)}),5200)}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{store:Ge,children:[i&&Object(j.jsx)(Ke,{}),!i&&Object(j.jsx)(He,{})]})})};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Ye,{})}),document.getElementById("root"))},43:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){},73:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){}},[[180,1,2]]]);
//# sourceMappingURL=main.b16d5523.chunk.js.map