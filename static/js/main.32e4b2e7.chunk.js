(this["webpackJsonpsimple-frontend-test"]=this["webpackJsonpsimple-frontend-test"]||[]).push([[0],{114:function(e,n,t){},143:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,l,u,d=t(0),b=t.n(d),p=t(26),m=t(15),f=t.n(m),j=(t(114),t(21)),g=t(62),h=t(6),O=t(7),x=O.c.header(a||(a=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(r||(r=Object(h.a)(["\n    background: linear-gradient(\n      323deg,\n      #0fb4e5 0.3184713375796178%,\n      #143752 80.44585987261146%\n    );\n\n    margin-bottom: ",";\n  "])),n.spacings.xlarge)})),v=O.c.div(c||(c=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(i||(i=Object(h.a)(["\n    max-width: ",";\n\n    margin-left: auto;\n    margin-right: auto;\n\n    padding: "," ",";\n\n    ","\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  "])),n.gridLayout.container,n.spacings.xsmall,n.spacings.xxsmall,n.media.greaterThan("xsmall")(o||(o=Object(h.a)(["\n        padding: ",";\n    \n    "])),n.spacings.xsmall))})),y=O.c.h2(s||(s=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(l||(l=Object(h.a)(["\n    color: ",";\n    display: none;\n\n    ","\n  "])),n.palette.white.main,n.media.greaterThan("xsmall")(u||(u=Object(h.a)(["\n        display: initial;\n    \n    "]))))})),U=t(3);var w,S,k,F=function(){return Object(U.jsx)(x,{children:Object(U.jsxs)(v,{children:[Object(U.jsx)(y,{children:"Rocketbank"}),Object(U.jsx)("a",{href:"https://www.rocketbank.com.br/#home",target:"_blank",rel:"noreferrer",children:Object(U.jsx)("img",{src:"https://res.cloudinary.com/dppr8dksd/image/upload/v1632167204/logo-rocket_vzvlqb.webp",alt:"rocketbank logo"})})]})})},E=O.c.footer(w||(w=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(S||(S=Object(h.a)(["\n    text-align: center;\n    margin-top: calc("," + 5rem); \n    margin-bottom: ",";\n  \n    \n\n    ","\n  "])),n.spacings.large,n.spacings.large,n.media.greaterThan("medium")(k||(k=Object(h.a)(["\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n    "]))))}));var C,T,P,R,D,A,z,B,N,_,M,I,q,L,W,G,Q,V,H,J,X,K,Y,Z,$,ee,ne,te,ae,re,ce,ie,oe,se,le,ue,de,be,pe,me=function(){return Object(U.jsx)(E,{children:Object(U.jsxs)("p",{children:["Desenvolvido com \u2665\xa0\xa0",Object(U.jsx)("a",{href:"https://github.com/EduSouza-programmer",target:"_blank",rel:"noreferrer",children:"Edu Souza"})]})})},fe=t(11),je=t(27),ge=t(174),he=t(175),Oe=t(176),xe=t(178),ve=t(179),ye=t(170),Ue=t(177),we=["REQUEST","SUCCESS","FAILURE"],Se=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},t={};return we.forEach((function(a){var r="".concat(e,"_").concat(a),c=function(e){return{type:r,payload:n(e)}};return"REQUEST"===a?(t.REQUEST=r,t.request=c):"SUCCESS"===a?(t.SUCCESS=r,t.success=c):"FAILURE"===a&&(t.FAILURE=r,t.failure=c),c})),t},ke=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(fe.a)({type:e,payload:n},t)},Fe="@@routes/home",Ee="@@routes/user",Ce=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ke(e,n)},Te={loadUsers:Se("@users/LOAD"),updateUsers:Se("@users/UPDATE"),updateUsersMock:Se("@users/UPDATE"),deleteUsers:Se("@users/DELETE")},Pe=t(17),Re=function(e){var n=e.items,t=e.config,a=void 0===t?{key:"dataNascimento",direction:"ascending"}:t,r=Object(d.useState)(a),c=Object(je.a)(r,2),i=c[0],o=c[1];return{items:Object(d.useMemo)((function(){var e=Object(Pe.a)(n);return null!==i&&e.sort((function(e,n){var t=i.key,a=i.key;return e[t]<n[a]?"ascending"===i.direction?-1:1:e[t]>n[a]?"ascending"===i.direction?1:-1:0})),e}),[n,i]),requestSort:function(e){var n="ascending";i&&"ascending"===i.direction&&(n="descending"),o({key:e,direction:n})},sortConfig:i,setClassNamesFor:function(e){if(i)return i.key===e?i.direction:void 0}}},De=O.c.div(C||(C=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(T||(T=Object(h.a)(["\n    border-radius: ",";\n    max-width: ",";\n    margin-left: auto;\n    margin-right: auto;\n\n    background: rgb(252, 252, 252);\n    background: linear-gradient(\n      180deg,\n      rgba(252, 252, 252, 1) 0%,\n      rgba(246, 246, 246, 1) 30%,\n      rgba(240, 240, 240, 1) 100%\n    );\n    padding: "," 0;\n\n    ","\n  "])),n.border.radius,n.gridLayout.container,n.spacings.large,n.media.greaterThan("small")(P||(P=Object(h.a)(["\n  padding: "," 0 calc("," + 5rem);\n\n"])),n.spacings.large,n.spacings.large))})),Ae=O.c.h3(R||(R=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(D||(D=Object(h.a)(["\n    font-size: calc("," + 4px);\n    padding-left: ",";\n    margin-bottom: ",";\n\n    ","\n\n    ","\n  "])),n.typography.fontSizes.xlarge,n.spacings.xxsmall,n.spacings.small,n.media.greaterThan("xxsmall")(A||(A=Object(h.a)(["\n      padding-left: ",";\n    \n    "])),n.spacings.xsmall),n.media.greaterThan("small")(z||(z=Object(h.a)(["\n       padding-left: ",";\n       font-size: ",";\n    \n    "])),n.spacings.medium,n.typography.fontSizes.xxlarge))})),ze=O.c.img.attrs((function(e){var n=e.src,t=void 0===n?"https://res.cloudinary.com/dppr8dksd/image/upload/v1632167245/dots_boegex.svg":n,a=e.alt;return{src:t,alt:void 0===a?"loading...":a}}))(B||(B=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(N||(N=Object(h.a)(["\n    display: block;\n    margin: 0 auto;\n    padding: calc("," + 20rem) 0;\n    transform: scale(0.6);\n  "])),n.spacings.large)})),Be=O.c.table(_||(_=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(M||(M=Object(h.a)(["\n    width: 100%;\n\n    ","\n  "])),n.media.greaterThan("small")(I||(I=Object(h.a)(["\n      padding: 0 ","\n    \n    "])),n.spacings.medium))})),Ne=O.c.thead(q||(q=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(L||(L=Object(h.a)(["\n    display: none;\n\n    ","\n  "])),n.media.greaterThan("small")(W||(W=Object(h.a)(["\n      display: table-header-group;\n      text-align: left;\n    "]))))})),_e=O.c.th(G||(G=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme,t=e.classIcon;return Object(O.b)(Q||(Q=Object(h.a)(["\n    padding-bottom: ",";\n    font-weight: ",";\n\n    ."," {\n      opacity: 0;\n      transition: opacity 0.15s ease-in-out;\n    }\n\n    .descending {\n      transform: rotate(180deg);\n    }\n    .ascending {\n      transform: rotate(0);\n    }\n\n    &:hover {\n      ."," {\n        opacity: 1;\n      }\n    }\n  "])),n.spacings.xsmall,n.typography.fontWeightMedium,t,t)})),Me=O.c.tr(V||(V=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(H||(H=Object(h.a)(["\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    &:nth-child(2n) {\n      background-color: rgba(185, 209, 241, 1);\n    }\n\n    ","\n\n    &:not(:last-child) {\n      margin-bottom: ",";\n    }\n\n    ","\n  "])),n.spacings.xxsmall,n.media.greaterThan("xxsmall")(J||(J=Object(h.a)(["\n      padding: "," ",";\n    \n    "])),n.spacings.xxsmall,n.spacings.xsmall),n.spacings.xxsmall,n.media.greaterThan("small")(X||(X=Object(h.a)(["\n      display: table-row;\n    \n    "]))))})),Ie=O.c.td(K||(K=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(Y||(Y=Object(h.a)(["\n    display: block;\n    text-align: right;\n    position: relative;\n    padding: "," 0;\n    font-weight: ",";\n\n    &::before {\n      content: attr(data-title);\n      position: absolute;\n      left: 0;\n      display: block;\n      font-weight: ",";\n    }\n\n    ","\n\n    ","  \n\n\n    ","\n  "])),n.spacings.xxsmall,n.typography.fontWeightLight,n.typography.fontWeightMedium,n.media.greaterThan("small")(Z||(Z=Object(h.a)(["\n      display: table-cell;\n      text-align: left;\n      padding: "," ",";\n\n      &:last-child {\n        text-align: center;\n        padding: "," 0;\n      }\n\n        &::before {\n          display: none;\n        }\n    "])),n.spacings.xxsmall,n.spacings.xxsmall,n.spacings.xxsmall),n.media.greaterThan("medium")($||($=Object(h.a)(["\n        padding: "," ",";\n    "])),n.spacings.xxsmall,n.spacings.xsmall),n.media.greaterThan("large")(ee||(ee=Object(h.a)(["\n        padding: "," ",";\n\n       &:nth-child(1) {\n        width: 50%;\n      }\n      &:nth-child(2) {\n        width: 20%;\n      }\n      &:nth-child(3) {\n        width: 20%;\n      }\n      &:nth-child(4) {\n        width: 10%;\n      }\n     \n    "])),n.spacings.xxsmall,n.spacings.xsmall))})),qe=Object(O.c)(ye.a)(ne||(ne=Object(h.a)([""]))),Le=function(){return Object(O.b)(te||(te=Object(h.a)(["\n    opacity: 1;\n  "])))},We=function(){return Object(O.b)(ae||(ae=Object(h.a)(["\n    opacity: 0;\n    pointer-events: none;\n  "])))},Ge=O.c.div(re||(re=Object(h.a)(["\n  ","\n"])),(function(e){e.theme;var n=e.isOpen;return Object(O.b)(ce||(ce=Object(h.a)(["\n    position: fixed;\n    inset: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: opacity 0.2s ease-in-out;\n    ","\n    ","\n  "])),n&&Le(),!n&&We())})),Qe=O.c.div(ie||(ie=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(oe||(oe=Object(h.a)(["\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    inset: 0;\n    z-index: ",";\n  "])),n.zIndex.overlay)})),Ve=O.c.div(se||(se=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(le||(le=Object(h.a)(["\n    background-color: #fff;\n    border-radius: ",";\n    width: 70rem;\n    height: 20rem;\n    position: relative;\n    z-index: ",";\n    padding: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);\n  "])),n.border.radius,n.zIndex.modal,n.spacings.large)})),He=O.c.p(ue||(ue=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(de||(de=Object(h.a)(["\n    font-size: ",";\n  "])),n.typography.fontSizes.large)})),Je=O.c.div(be||(be=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(pe||(pe=Object(h.a)(["\n    width: 27rem;\n    display: flex;\n    justify-content: space-between;\n    align-self: flex-end;\n\n    button {\n      font-size: ",";\n    }\n\n    div button {\n      margin-left: 2rem;\n    }\n  "])),n.typography.fontSizes.medium)}));var Xe,Ke,Ye,Ze,$e,en,nn,tn,an=function(e){var n=e.rows,t=e.columns,a=e.title,r=e.loading,c=Object(d.useState)(!1),i=Object(je.a)(c,2),o=i[0],s=i[1],l=Object(d.useState)({id:""}),u=Object(je.a)(l,2),b=u[0],m=u[1],f=Object(p.b)(),j=Re({items:n}),g=j.items,h=j.requestSort,O=j.setClassNamesFor;return Object(U.jsxs)(De,{children:[Object(U.jsx)(Ae,{children:a}),r?Object(U.jsx)(ze,{}):Object(U.jsxs)(Be,{children:[Object(U.jsx)(Ne,{children:Object(U.jsx)("tr",{children:t.map((function(e,n,t){var a=n===t.length-1;return Object(U.jsxs)(_e,{classIcon:e.field,scope:"col",children:[e.field,!a&&Object(U.jsx)("span",{className:String(e.field),children:Object(U.jsx)(qe,{onClick:function(){return h(e.sortData)},"aria-label":"Sort",className:O(e.sortData),children:Object(U.jsx)(ge.a,{})})})]},"".concat(e.field,"_").concat(e.id))}))})}),Object(U.jsx)("tbody",{children:g.map((function(e){return Object(U.jsxs)(Me,{children:[Object(U.jsx)(Ie,{"data-title":"Nome",children:e.nome}),Object(U.jsx)(Ie,{"data-title":"Idade",children:new Intl.DateTimeFormat("pt-BR",{day:"numeric",month:"short",year:"numeric"}).format(new Date(e.dataNascimento))}),Object(U.jsxs)(Ie,{"data-title":"Cidade",children:[e.cidade,"/",e.uf]}),Object(U.jsxs)(Ie,{children:[Object(U.jsx)(ye.a,{"aria-label":"Edit",color:"primary",onClick:function(){return f(Ce(Ee,{id:e.id}))},children:Object(U.jsx)(he.a,{fontSize:"large"})}),Object(U.jsx)(ye.a,{onClick:function(){s(!o),m((function(n){return Object(fe.a)(Object(fe.a)({},n),{},{id:e.id})}))},"aria-label":"delete",color:"primary",children:Object(U.jsx)(Oe.a,{color:"error",fontSize:"large"})})]})]},e.id)}))})]}),Object(U.jsxs)(Ge,{isOpen:o,"aria-hidden":!o,"aria-label":"modal",children:[Object(U.jsx)(Qe,{onClick:function(){return s(!o)}}),Object(U.jsxs)(Ve,{children:[Object(U.jsx)(He,{children:"Tem certeza que deseja excluir?"}),Object(U.jsxs)(Je,{children:[Object(U.jsx)(Ue.a,{size:"large",color:"primary",variant:"contained",startIcon:Object(U.jsx)(xe.a,{color:"inherit",fontSize:"medium"}),onClick:function(){s(!o),f(Te.deleteUsers.request(b))},children:"Delete"}),Object(U.jsx)(Ue.a,{size:"large",color:"primary",variant:"outlined",startIcon:Object(U.jsx)(ve.a,{color:"secondary",fontSize:"medium"}),onClick:function(){return s(!o)},children:"Cancel"})]})]})]})]})},rn=[{field:"Nome",id:"1",sortData:"nome"},{field:"Idade",id:"2",sortData:"dataNascimento"},{field:"Cidade",id:"3",sortData:"cidade"},{field:"A\xe7\xf5es",id:"4"}],cn=function(){var e=Object(p.c)((function(e){return e.home})),n=e.loading,t=e.data;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(F,{}),Object(U.jsx)(an,{rows:t,columns:rn,title:"Usu\xe1rios",loading:n}),Object(U.jsx)(me,{})]})},on=t(180),sn=t(61),ln={loadUser:Se("@user/LOAD"),saveUser:Se("@user/SAVE")},un=t(33),dn=(t(60),t(183)),bn=["formProps","name"],pn=b.a.forwardRef((function(e,n){var t=e.formProps,a=e.name,r=Object(un.a)(e,bn),c=t.control,i=t.errors,o=t.rules,s=t.initialValues,l=void 0!==i[a];return Object(U.jsx)(sn.a,{name:a,control:c,rules:o[a],defaultValue:s[a],render:function(e){var t,c=e.onChange,o=e.onBlur,s=e.value;return Object(U.jsx)(dn.a,Object(fe.a)(Object(fe.a)({},r),{},{value:s,error:l,variant:"outlined",inputRef:n,helperText:null===(t=i[a])||void 0===t?void 0:t.message,onChange:function(e){c(e),r.onChange&&r.onChange(e)},onBlur:function(){o(),r.onBlur&&r.onBlur(s)}}))}})})),mn=O.c.div(Xe||(Xe=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)(Ke||(Ke=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 55rem;\n    padding: 0 ",";\n    margin: 0 auto;\n\n    h2 {\n      margin-bottom: ",";\n    }\n\n    form {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n    }\n\n    div {\n      margin-bottom: ",";\n    }\n    div:first-child {\n      grid-column: 1 / -1;\n    }\n\n    button {\n      align-self: flex-end;\n      width: 100%;\n      ","\n\n      font-size: ",";\n    }\n  "])),n.spacings.xsmall,n.spacings.medium,n.spacings.xsmall,n.media.greaterThan("xsmall")(Ye||(Ye=Object(h.a)(["\n        width: initial;\n    "]))),n.typography.fontSizes.small)})),fn=O.c.div(Ze||(Ze=Object(h.a)(["\n  ","\n"])),(function(e){var n=e.theme;return Object(O.b)($e||($e=Object(h.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n\n    ","\n\n    column-gap: 1rem;\n    width: 100%;\n  "])),n.media.greaterThan("xsmall")(en||(en=Object(h.a)(["\n        grid-template-columns: 1fr  1fr  1fr;\n    "]))))})),jn=function(){var e=Object(d.createRef)(),n=Object(p.b)(),t=Object(p.c)((function(e){return e.user})),a=t.loading,r=t.data,c=t.id,i=Object(fe.a)({nome:"",dataNascimento:"",cep:"",cidade:"",uf:""},r),o=Object(fe.a)(Object(fe.a)({},Object(sn.b)()),{},{rules:{},initialValues:i});return a?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(F,{}),Object(U.jsx)(mn,{children:Object(U.jsx)(ze,{})}),Object(U.jsx)(me,{})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(F,{}),Object(U.jsxs)(mn,{children:[Object(U.jsxs)("h2",{children:["Usu\xe1rio #",c]}),Object(U.jsxs)("form",{onSubmit:o.handleSubmit((function(e){n(ln.saveUser.request(e)),n(Te.updateUsersMock.request(Object(fe.a)({id:c},e)))})),children:[Object(U.jsxs)(fn,{children:[Object(U.jsx)(pn,{label:"Nome",name:"nome",formProps:o}),Object(U.jsx)(pn,{label:"CEP",name:"cep",formProps:o,onBlur:function(){var t;return n(Te.updateUsers.request({id:c,cep:null===(t=e.current)||void 0===t?void 0:t.value}))},ref:e}),Object(U.jsx)(pn,{label:"Cidade",name:"cidade",formProps:o}),Object(U.jsx)(pn,{label:"UF",name:"uf",formProps:o})]}),Object(U.jsx)(Ue.a,{size:"large",variant:"contained",color:"primary",type:"submit",startIcon:Object(U.jsx)(on.a,{}),children:"GRAVAR"})]})]}),Object(U.jsx)(me,{})]})},gn=(nn={},Object(j.a)(nn,Fe,cn),Object(j.a)(nn,Ee,jn),Object(j.a)(nn,g.b,cn),nn),hn=(tn={},Object(j.a)(tn,Fe,"/simple-frontend-test"),Object(j.a)(tn,Ee,"/user/:id"),tn),On=Object(g.c)(hn,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/simple-frontend-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_CONTEXT}),xn=On.reducer,vn=On.middleware,yn=On.enhancer,Un=function(){var e,n=Object(p.c)((function(e){return e.location.type})),t=null!==(e=gn[n])&&void 0!==e?e:gn[g.b];return Object(U.jsx)(t,{})},wn=function(){return Object(U.jsx)(Un,{})},Sn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,186)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))},kn=t(36),Fn=t(96),En=t(92),Cn=t.n(En),Tn={data:[],loading:!1},Pn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Te.loadUsers.REQUEST:case Te.loadUsers.SUCCESS:case Te.loadUsers.FAILURE:return Object(fe.a)(Object(fe.a)({},e),{},{loading:n.type===Te.loadUsers.REQUEST,data:n.type===Te.loadUsers.SUCCESS?n.payload.response.data:[]});default:return e}},Rn={id:null,data:null,loading:!1},Dn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ee:return Object(fe.a)(Object(fe.a)({},Rn),{},{id:n.payload.id});case ln.loadUser.REQUEST:case ln.loadUser.SUCCESS:case ln.loadUser.FAILURE:return Object(fe.a)(Object(fe.a)({},e),{},{loading:n.type===ln.loadUser.REQUEST,data:n.type===ln.loadUser.SUCCESS?n.payload.response.data:null});default:return e}},An=Object(kn.b)({location:xn,home:Pn,user:Dn}),zn=t(5),Bn=t.n(zn),Nn=t(19),_n=Bn.a.mark(Mn);function Mn(e,n){return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Nn.d)((function(e){return e.location.type}));case 2:if(t.sent!==e){t.next=6;break}return t.next=6,Object(Nn.e)(n);case 6:return t.next=8,Object(Nn.f)(e,n);case 8:case"end":return t.stop()}}),_n)}var In=t(28),qn=function(e){return new Promise((function(n){setTimeout((function(){return n({data:e})}),450)}))},Ln=["isMock","url","destiny","method","headers","queryParams","body"],Wn=t(124).create({timeout:12e4,withCredentials:!1}),Gn=function(){var e=Object(In.a)(Bn.a.mark((function e(n){var t,a,r,c,i,o,s,l,u;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.isMock,a=n.url,n.destiny,r=n.method,c=n.headers,i=void 0===c?void 0:c,o=n.queryParams,s=void 0===o?{}:o,l=n.body,u=Object(un.a)(n,Ln),Object.keys(s).forEach((function(e){return s.hasOwnProperty(e)&&!s[e]&&!1!==s[e]&&delete s[e]})),!t){e.next=7;break}return console.log({url:a,method:r,queryParams:s,body:l,headers:i}),e.abrupt("return",qn(u.mockResult));case 7:return e.abrupt("return",Wn.request(Object(fe.a)(Object(fe.a)({url:a,method:r,headers:i},u),{},{params:s,data:l})));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Qn=function(e){return e},Vn=function(e,n){return e.map((function(e){return e.id===n.id?Object(fe.a)(Object(fe.a)({},e),n):e}))},Hn=function(e){return e.then(Qn).catch((function(e){throw e}))},Jn=function(e){var n=e.error;console.log({error:n})},Xn=function(e){var n=e.actionGenerator,t=e.transform,a=void 0===t?function(e){return e}:t,r=e.api,c=e.preSuccess,i=void 0===c?function(){}:c,o=e.postSuccess,s=void 0===o?function(){}:o,l=e.preFailure,u=void 0===l?function(){}:l,d=e.postFailure,b=void 0===d?Jn:d;return{handler:Bn.a.mark((function e(t){var c,o;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(t.payload);case 3:return c=e.sent,e.next=6,Object(Nn.b)(Hn,r(c));case 6:return o=e.sent,e.next=9,i({original:t.payload,values:c,response:o});case 9:return e.next=11,Object(Nn.c)(n.success({original:t.payload,values:c,response:o}));case 11:return e.next=13,s({original:t.payload,values:c,response:o});case 13:e.next=26;break;case 15:return e.prev=15,e.t0=e.catch(0),e.next=19,u({original:t.payload,values:c,response:o,error:e.t0});case 19:if(!0!==e.sent){e.next=22;break}return e.abrupt("return");case 22:return e.next=24,Object(Nn.c)(n.failure({original:t.payload,values:c,response:o,error:e.t0}));case 24:return e.next=26,b({original:t.payload,values:c,response:o,error:e.t0});case 26:case"end":return e.stop()}}),e,null,[[0,15]])})),watcher:Bn.a.mark((function e(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.f)(n.REQUEST,this.handler);case 2:case"end":return e.stop()}}),e,this)}))}},Kn=[{id:"1",nome:"Jos\xe9 da Silva",dataNascimento:new Date(1990,1,1),cep:"05311-000",cidade:"S\xe3o Paulo",uf:"SP"},{id:"2",nome:"Marco Antonio Alves",dataNascimento:new Date(2007,5,3),cep:"05311-000",cidade:"Ubutuba",uf:"SP"},{id:"3",nome:"Maria Joaquina",dataNascimento:new Date(2e3,7,22),cep:"05311-000",cidade:"Bras\xedlia",uf:"SP"},{id:"4",nome:"Mauricio de Souza",dataNascimento:new Date(1991,1,1),cep:"05311-000",cidade:"Niter\xf3i",uf:"SP"},{id:"5",nome:"Andr\xe9 Silv\xe9rio Pinto",dataNascimento:new Date(1990,11,30),cep:"05311-000",cidade:"Guarulhos",uf:"SP"},{id:"6",nome:"Eduardo Urbano",dataNascimento:new Date(1977,5,8),cep:"05311-000",cidade:"S\xe3o Paulo",uf:"SP"},{id:"7",nome:"Vanessa Alvares Cabral",dataNascimento:new Date(1980,6,20),cep:"05311-000",cidade:"Barueri",uf:"SP"}],Yn=Bn.a.mark($n),Zn=Kn;function $n(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Mn(Fe,Bn.a.mark((function e(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.c)(Te.loadUsers.request());case 2:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),Yn)}var et=Xn({actionGenerator:Te.loadUsers,transform:Bn.a.mark((function e(){var n;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.d)((function(e){return e.home.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),api:function(e){return Gn({url:"/usuarios",method:"get",isMock:!0,mockResult:Zn})},postSuccess:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.response,e.next=3,console.log({users:t.data});case 3:case"end":return e.stop()}}),e)}))}),nt=Xn({actionGenerator:Te.updateUsersMock,api:function(e){return Zn=Vn(Zn,e),Gn({url:"/usuarios",method:"post",isMock:!0,body:e,mockResult:e})},postSuccess:Bn.a.mark((function e(n){var t,a;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.response,a=n.values,e.next=3,Object(Nn.c)(ln.loadUser.request({id:a.id}));case 3:return e.next=5,console.log({users:t.data});case 5:case"end":return e.stop()}}),e)}))}),tt=Xn({actionGenerator:Te.updateUsers,transform:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.d)((function(e){return e.user.data}));case 2:return t=e.sent,e.abrupt("return",Object(fe.a)(Object(fe.a)({},t),n));case 4:case"end":return e.stop()}}),e)})),api:function(e){return Gn({url:"https://viacep.com.br/ws/".concat(e.cep,"/json"),method:"get",isMock:!1})},postSuccess:Bn.a.mark((function e(n){var t,a,r;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.response,a=n.values,r=t.data.localidade,e.next=4,Zn=Vn(Zn,Object(fe.a)(Object(fe.a)(Object(fe.a)({},a),t.data),{},{cidade:r}));case 4:return e.next=6,Object(Nn.c)(ln.loadUser.request({id:a.id}));case 6:case"end":return e.stop()}}),e)}))}),at=Xn({actionGenerator:Te.deleteUsers,api:function(e){var n,t;return n=Zn,t=e.id,Zn=n.filter((function(e){return e.id!==t})),Gn({url:"/usuarios",method:"post",isMock:!0,body:e,mockResult:e})},postSuccess:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.response,e.next=3,console.log({users:t.data});case 3:return e.next=5,Object(Nn.c)(Te.loadUsers.request());case 5:case"end":return e.stop()}}),e)}))}),rt=[$n(),et.watcher(),nt.watcher(),at.watcher(),tt.watcher()],ct=Bn.a.mark(it);function it(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Mn(Ee,Bn.a.mark((function e(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.c)(ln.loadUser.request());case 2:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),ct)}var ot=Xn({actionGenerator:ln.loadUser,transform:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.d)((function(e){return e.user.id}));case 2:return t=e.sent,e.abrupt("return",Object(fe.a)({id:t},n||{}));case 4:case"end":return e.stop()}}),e)})),api:function(e){var n;return Gn({url:"/usuario/".concat(e.id),method:"get",isMock:!0,mockResult:null!==(n=Zn.find((function(n){return n.id===e.id})))&&void 0!==n?n:null})},postSuccess:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.response,e.next=3,console.log({user:t.data});case 3:case"end":return e.stop()}}),e)}))}),st=Xn({actionGenerator:ln.saveUser,transform:Bn.a.mark((function e(n){var t;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.d)((function(e){return e.user.id}));case 2:return t=e.sent,e.abrupt("return",Object(fe.a)({id:t},n));case 4:case"end":return e.stop()}}),e)})),api:function(e){return Gn({url:"/usuario/".concat(e.id),method:"put",body:e,isMock:!0,mockResult:e})},postSuccess:Bn.a.mark((function e(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.c)(Ce(Fe));case 2:case"end":return e.stop()}}),e)}))}),lt=[it(),ot.watcher(),st.watcher()],ut=Bn.a.mark((function e(){return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.a)([].concat(Object(Pe.a)(rt),Object(Pe.a)(lt)));case 2:case"end":return e.stop()}}),e)})),dt=Object(Fn.a)(),bt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||kn.c,pt=Object(kn.d)(An,{},bt(yn,Object(kn.a)(dt,vn,Cn.a)));dt.run(ut);var mt=pt,ft=t(182),jt=t(184),gt=t(181),ht=t(185),Ot=t(94),xt=t(93),vt=t(95),yt=Object(ht.a)(Object(Ot.a)({gridLayout:{container:"130rem",gutter:"3.2rem"},typography:{fontFamily:'"Poppins","Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"',fontWeightLight:300,fontWeightMedium:400,fontWeightBold:600,fontSizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},palette:{type:"light",primary:{main:"#334BC8"},secondary:{main:"#FF5B58"},mainBg:{main:"##F5F3F3"},lightBg:{main:"#F2F2F2"},white:{main:"#FAFAFA"},black:{main:"#030517"},lightGray:{main:"#EAEAEA"},gray:{main:"#8F8F8F"},darkGray:{main:"#2E2F42"},red:{main:"#FF5F5F"}},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},zIndex:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},breakpoints:{values:{xs:0,sm:450,md:769,lg:1170,xl:1920}},media:Object(xt.a)({xhuge:"1920px",huge:"1440px",large:"1170px",medium:"769px",small:"710px",xsmall:"450px",xxsmall:"350px"}),polished:vt,border:{radius:"0.4rem"},overrides:{MuiCssBaseline:{"@global":{html:{fontSize:"62.5%"},button:{cursor:"pointer"},"@font-face":[{fontFamily:"Poppins",fontStyle:"normal",fontDisplay:"swap",fontWeight:300,src:"\n    local('Poppins'),\n    local('Poppins-Regular'),\n    url('/fonts/poppins-v15-latin-300.woff2') format('woff2')\n  ",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},{fontFamily:"Poppins",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n    local('Poppins'),\n    local('Poppins-Regular'),\n    url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')\n  ",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},{fontFamily:"Poppins",fontStyle:"normal",fontDisplay:"swap",fontWeight:600,src:"\n    local('Poppins'),\n    local('Poppins-Regular'),\n    url('/fonts/poppins-v15-latin-600.woff2') format('woff2')\n  ",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"}],body:{fontFamily:'"Poppins","Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"',fontSize:"1.6rem",backgroundColor:"#fff"},"*":{margin:0,padding:0,boxSizing:"border-box",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}}}}));var Ut=function(e){var n=e.children;return Object(U.jsx)(jt.b,{injectFirst:!0,children:Object(U.jsx)(gt.a,{theme:yt,children:Object(U.jsxs)(O.a,{theme:yt,children:[Object(U.jsx)(ft.a,{}),n]})})})};f.a.render(Object(U.jsx)(p.a,{store:mt,children:Object(U.jsx)(Ut,{children:Object(U.jsx)(wn,{})})}),document.getElementById("root")),Sn(console.log)}},[[143,1,2]]]);
//# sourceMappingURL=main.32e4b2e7.chunk.js.map