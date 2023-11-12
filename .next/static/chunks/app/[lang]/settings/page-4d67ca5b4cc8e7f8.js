(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{2480:function(){},5182:function(e,t,s){Promise.resolve().then(s.bind(s,6447))},5707:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthProvider:function(){return v},default:function(){return g}});var o=s(7437),n=s(2265),r=s(9687),i=s(8688),a=s(3014),l=s(4033),c=s(4177);let u="auth_token",d="user",h=()=>{try{return c.Z.getItem(u)}catch(e){console.log("Error getting the Auth Token",e)}},p=()=>{try{return c.Z.getItem(d)}catch(e){console.log("Error getting the Auth Token",e)}};var m={getToken:()=>{let e=h();return e||null},storeToken:e=>{try{c.Z.setItem(u,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeToken:()=>{try{c.Z.removeItem(u)}catch(e){console.log("Error removing the auth token",e)}},getUser:()=>{let e=p();return e||null},storeUser:e=>{try{c.Z.setItem(d,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeUser:()=>{try{c.Z.removeItem(d)}catch(e){console.log("Error removing the auth token",e)}}};let f=(0,n.createContext)(void 0),v=e=>{let{children:t}=e,s=(0,l.useRouter)(),c=m.getUser(),u=m.getToken(),[d,h]=(0,n.useState)(c||null),[p,v]=(0,n.useState)(u||null),g=async(e,t)=>{await r.Z.auth.signin({username:e,password:t}).then(e=>{m.storeToken(e.data),v(e.data),r.Z.users.retrieve(e.data.id).then(e=>{m.storeUser(e.data),h(e.data),e.data.lang?s.push("/".concat(e.data.lang)):s.push("/")}).catch(e=>{console.error((0,i.e)(e)),(0,a.toast)((0,i.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})}).catch(e=>{console.error((0,i.e)(e)),(0,a.toast)((0,i.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})};return(0,o.jsx)(f.Provider,{value:{user:d,jwt:p,login:g,logout:()=>{m.removeToken(),m.removeUser(),v(null),h(null)},updateUser:e=>{m.removeUser(),m.storeUser(e),h(e)}},children:t})};var g=f},6447:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var o=s(7437),n=s(2265),r=s(6230),i=s(5691),a=s(9619),l=s(6554),c=s(6753);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e}).apply(this,arguments)}var d=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),h=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function p(e){if(7===e.length)return e;for(var t="#",s=1;s<4;s+=1)t+=e[s]+e[s];return t}function m(e,t,s,o,n){return function(e,t,s,o,n){var r=(e-s)/(t-s);if(0===r)return o;if(1===r)return n;for(var i="#",a=1;a<6;a+=2){var l=Math.round((1-r)*parseInt(o.substr(a,2),16)+r*parseInt(n.substr(a,2),16)).toString(16);1===l.length&&(l="0"+l),i+=l}return i}(e,t,s,p(o),p(n))}var f=function(e){function t(t){e.call(this,t);var s=t.height,o=t.width,n=t.checked;this.t=t.handleDiameter||s-2,this.i=Math.max(o-s,o-(s+this.t)/2),this.o=Math.max(0,(s-this.t)/2),this.state={h:n?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,s=t.R,o=t.h,n=(this.props.checked?this.i:this.o)+e-s;t.N||e===s||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,n));r!==o&&this.setState({h:r})},t.prototype.U=function(e){var t=this.state,s=t.h,o=t.N,n=t.B,r=this.props.checked,i=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-n;(!o||a<250||r&&s<=i||!r&&s>=i)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.m=function(e){this.L(e.touches[0].clientX)},t.prototype.M=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,s=e.disabled,o=e.className,r=e.offColor,i=e.onColor,a=e.offHandleColor,l=e.onHandleColor,c=e.checkedIcon,d=e.uncheckedIcon,h=e.checkedHandleIcon,p=e.uncheckedHandleIcon,f=e.boxShadow,v=e.activeBoxShadow,g=e.height,x=e.width,y=e.borderRadius,b=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(s[o]=e[o]);return s}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,T=w.h,j=w.N,N=w.j,k={height:g,width:x,margin:Math.max(0,(this.t-g)/2),position:"relative",background:m(T,this.i,this.o,r,i),borderRadius:"number"==typeof y?y:g/2,cursor:s?"default":"pointer",WebkitTransition:j?null:"background 0.25s",MozTransition:j?null:"background 0.25s",transition:j?null:"background 0.25s"},E={height:g,width:Math.min(1.5*g,x-(this.t+g)/2+1),position:"relative",opacity:(T-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},S={height:g,width:Math.min(1.5*g,x-(this.t+g)/2+1),position:"absolute",opacity:1-(T-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},P={height:this.t,width:this.t,background:m(T,this.i,this.o,a,l),display:"inline-block",cursor:s?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+T+"px)",top:Math.max(0,(g-this.t)/2),outline:0,boxShadow:N?v:f,border:0,WebkitTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:j?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},C={height:this.t,width:this.t,opacity:Math.max(2*(1-(T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"},D={height:this.t,width:this.t,opacity:Math.max(2*((T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:j?null:"opacity 0.25s",MozTransition:j?null:"opacity 0.25s",transition:j?null:"opacity 0.25s"};return n.createElement("div",{className:o,style:{position:"relative",display:"inline-block",textAlign:"left",opacity:s?.5:1,direction:"ltr",borderRadius:g/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}},n.createElement("div",{className:"react-switch-bg",style:k,onClick:s?null:this.T,onMouseDown:function(e){return e.preventDefault()}},c&&n.createElement("div",{style:E},c),d&&n.createElement("div",{style:S},d)),n.createElement("div",{className:"react-switch-handle",style:P,onClick:function(e){return e.preventDefault()},onMouseDown:s?null:this.p,onTouchStart:s?null:this.k,onTouchMove:s?null:this.m,onTouchEnd:s?null:this.M,onTouchCancel:s?null:this.O},p&&n.createElement("div",{style:C},p),h&&n.createElement("div",{style:D},h)),n.createElement("input",u({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:s,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},b,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(n.Component);f.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:d,checkedIcon:h,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};var v=e=>{let{name:t}=e,[s,n,i]=(0,r.U$)({name:t});return(0,o.jsx)(f,{checked:s.value,onChange:e=>{i.setValue(e)},className:"mr-2"})},g=s(5707),x=s(9687),y=s(8688),b=s(3014),w=s(2563),T=e=>{let{toggleModal:t,jwt:s,lang:n,dictionary:c}=e,u=i.Ry({password:i.Z_().required(c.validation.password_required),confirmPassword:i.Z_().oneOf([i.iH("password"),""],c.validation.password_match).required(c.validation.confirm_password_required)});return(0,o.jsx)(r.J9,{initialValues:{password:""},validationSchema:u,onSubmit:(e,o)=>{let{setSubmitting:n}=o,{password:r}=e;x.Z.users.changePassword(null==s?void 0:s.id,{password:r},null==s?void 0:s.accessToken).then(e=>{(0,b.toast)(c.notify.pass_changed_ok,{hideProgressBar:!0,autoClose:2e3,type:"success"}),t()}).catch(e=>{console.error((0,y.e)(e)),(0,b.toast)((0,y.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})}),console.log(e,"Here"),n(!1)},children:(0,o.jsx)(r.l0,{children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",children:(0,o.jsx)("div",{className:"relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",children:(0,o.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,o.jsx)("div",{className:"flex items-start justify-between p-5 rounded-t",children:(0,o.jsx)(a.Z,{title:c.main.change_password,size:"xs",className:"text-gray-600 "})}),(0,o.jsxs)("div",{className:"relative p-6 flex",children:[(0,o.jsxs)("div",{className:"flex-1 flex-col",children:[(0,o.jsx)(r.gN,{as:w.Z,name:"password",type:"password",placeholder:c.main.password,label:c.main.password}),(0,o.jsx)(r.Bc,{name:"password",component:"div",className:"text-red-500 text-xs"})]}),(0,o.jsxs)("div",{className:"flex-1 flex-col px-4",children:[(0,o.jsx)(r.gN,{as:w.Z,name:"confirmPassword",type:"password",placeholder:c.main.confirm_password,label:c.main.confirm_password}),(0,o.jsx)(r.Bc,{name:"confirmPassword",component:"div",className:"text-red-500 text-xs"})]})]}),(0,o.jsxs)("div",{className:"flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",children:[(0,o.jsx)(l.z,{type:"submit",children:c.main.change}),(0,o.jsx)(l.z,{onClick:t,variant:"link",children:c.main.close})]})]})})})})})})};let j=i.Ry({postNewQuestionNotify:i.O7(),soAnsToDiscussionNotify:i.O7(),soComOnDiscussionNotify:i.O7()});var N=e=>{var t,s,i;let{lang:u,dictionary:d}=e,h=(0,n.useContext)(g.default),[p,m]=(0,n.useState)(),[f,w]=(0,n.useState)(!1),N=()=>{w(!f)},k={postNewQuestionNotify:null==h?void 0:null===(t=h.user)||void 0===t?void 0:t.setting.postNewQuestionNotify,soAnsToDiscussionNotify:null==h?void 0:null===(s=h.user)||void 0===s?void 0:s.setting.soAnsToDiscussionNotify,soComOnDiscussionNotify:null==h?void 0:null===(i=h.user)||void 0===i?void 0:i.setting.soComOnDiscussionNotify};return(0,n.useEffect)(()=>{(null==h?void 0:h.user)?m(null==h?void 0:h.user):m(null)},[]),(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(r.J9,{initialValues:k,validationSchema:j,onSubmit:(e,t)=>{var s,o;let{setSubmitting:n}=t,{postNewQuestionNotify:r,soAnsToDiscussionNotify:i,soComOnDiscussionNotify:a}=e,l=null==h?void 0:null===(s=h.user)||void 0===s?void 0:s.setting.id;x.Z.setting.update({id:l,postNewQuestionNotify:r,soAnsToDiscussionNotify:i,soComOnDiscussionNotify:a},null==h?void 0:null===(o=h.jwt)||void 0===o?void 0:o.accessToken).then(e=>{var t;x.Z.users.retrieve(null==h?void 0:null===(t=h.user)||void 0===t?void 0:t.id).then(e=>{null==h||h.updateUser(e.data)})}).catch(e=>{console.error((0,y.e)(e)),(0,b.toast)((0,y.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})}),console.log(e,"Here"),n(!1)},children:(0,o.jsx)(r.l0,{children:(0,o.jsxs)("div",{className:"justify-center",children:[(0,o.jsxs)("div",{className:"flex py-20 px-10 justify-between",children:[(0,o.jsx)(a.Z,{title:d.headers.settings,size:"sm",className:"text-gray-600"}),(0,o.jsx)(l.z,{onClick:N,children:d.main.change_password})]}),(0,o.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)(r.gN,{name:"postNewQuestionNotify",children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{name:"postNewQuestionNotify"}),(0,o.jsx)(c.Z,{className:"mr-2",children:d.main.postNewQuestionNotify})]})})}),(0,o.jsx)(r.Bc,{name:"postNewQuestionNotify",component:"div",className:"text-red-500 text-xs"})]}),(0,o.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)(r.gN,{name:"soAnsToDiscussionNotify",children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{name:"soAnsToDiscussionNotify"}),(0,o.jsx)(c.Z,{className:"mr-2",children:d.main.soAnsToDiscussionNotify})]})})}),(0,o.jsx)(r.Bc,{name:"soAnsToDiscussionNotify",component:"div",className:"text-red-500 text-xs"})]}),(0,o.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)(r.gN,{name:"soComOnDiscussionNotify",children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{name:"soComOnDiscussionNotify"}),(0,o.jsx)(c.Z,{className:"mr-2",children:d.main.soComOnDiscussionNotify})]})})}),(0,o.jsx)(r.Bc,{name:"soComOnDiscussionNotify",component:"div",className:"text-red-500 text-xs"})]}),(0,o.jsx)("div",{className:"flex items-start justify-start mt-3 p-6 rounded-b",children:(0,o.jsx)(l.z,{type:"submit",children:d.main.save})})]})})}),f&&(0,o.jsx)("div",{className:"modal-background",children:(0,o.jsx)(T,{toggleModal:N,jwt:null==h?void 0:h.jwt,lang:u,dictionary:d})})]})}},6554:function(e,t,s){"use strict";s.d(t,{d:function(){return l},z:function(){return c}});var o=s(7437),n=s(2265),r=s(306),i=s(6061),a=s(6264);let l=(0,i.j)("active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",{variants:{variant:{default:"bg-gray-800 text-white hover:bg-gray-700",destructive:"text-white hover:bg-red-600",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",subtle:"bg-slate-100 text-slate-900 hover:bg-slate-200",ghost:"bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent",ghostNonHover:"bg-transparent data-[state=open]:bg-transparent",link:"bg-transparent underline-offset-4 text-slate-900 hover:bg-transparent"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-2 rounded-md",lg:"h-11 px-8 rounded-md",xs:"h-8 px-1 rounded-sm"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:s,children:n,variant:i,isLoading:c,size:u,...d}=e;return(0,o.jsxs)("button",{className:(0,r.cn)(l({variant:i,size:u,className:s})),ref:t,disabled:c,...d,children:[c?(0,o.jsx)(a.Z,{className:"mr-2 h-4 w-4 animate-spin"}):null,n]})});c.displayName="Button"},2563:function(e,t,s){"use strict";var o=s(7437),n=s(2265),r=s(6061),i=s(306),a=s(6753);let l=(0,r.j)("block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer");t.Z=n.forwardRef((e,t)=>{let{className:s,children:n,value:r,onChange:c,label:u,disabled:d,clearIcon:h,cleanStateToggle:p,lang:m,...f}=e;return(0,o.jsxs)("div",{className:"w-full",children:[u&&r&&(0,o.jsx)(a.Z,{children:u}),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("input",{className:(0,i.cn)(l({className:s})),ref:t,value:r,onChange:c,disabled:d,...f}),h&&(0,o.jsx)("button",{className:"absolute ".concat(m?"en"==m?"right-0":"left-0":"right-0"," top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"),onClick:()=>p(),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 cursor-pointer",viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l3.536-3.536 1.414 1.414L11.414 10l3.536 3.536-1.414 1.414L10 11.414l-3.536 3.536-1.414-1.414L8.586 10 5.05 6.464l1.414-1.414L10 8.586l3.536-3.536 1.415 1.414z",clipRule:"evenodd"})})})]})]})})},6753:function(e,t,s){"use strict";var o=s(7437),n=s(2265),r=s(306);let i=n.forwardRef((e,t)=>{let{className:s,children:n,...i}=e;return(0,o.jsx)("label",{className:(0,r.cn)("text-sm text-gray-700",s),...i,children:n})});i.displayName="Label",t.Z=i},9619:function(e,t,s){"use strict";var o=s(7437);s(2265);var n=s(6061),r=s(306);let i=(0,n.j)("text-gray-800 text-center lg:text-left leading-tight tracking-tighter",{variants:{size:{default:"text-4xl md:text-5xl lg:text-6xl",lg:"text-5xl md:text-6xl lg:text-7xl",sm:"text-2xl md:text-3xl lg:text-4xl",xs:"text-1xl md:text-1xl lg:text-2xl",xxs:"text-sm md:text-sm lg:text-sm"}},defaultVariants:{size:"default"}});t.Z=e=>{let{title:t,numberCount:s,children:n,className:a,size:l,...c}=e;return(0,o.jsxs)("div",{className:"items-baseline flex",children:[(0,o.jsx)("h1",{...c,className:(0,r.cn)(i({size:l,className:a})),children:t}),s?(0,o.jsx)("h2",{className:"text-gray-500 text-2xl px-4",children:s}):null]})}},8688:function(e,t,s){"use strict";s.d(t,{e:function(){return o}});let o=e=>{var t,s;let o=null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message;return o[0].message&&(o=o[0].message),o||(o="Something went wrong, Please try again."),o}},306:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var o=s(7042),n=s(3986);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m)((0,o.W)(t))}},9687:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var o=s(2173);let n=o.Z.create({baseURL:"https://online.tveta.gov.af:8080/api"});function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r={method:e,withCredentials:!0,url:t,data:s,json:!0,headers:{}};return o&&(r.headers.Authorization="Bearer ".concat(o)),n(r)}var i={auth:{signin:e=>r("POST","/signin",e)},users:{createUser:e=>r("POST","/users",e),createModerator:(e,t)=>r("POST","/moderators",e,t),list:()=>r("GET","/users"),querySearchModerators(e){let t="/moderators?".concat(e);return r("GET",t)},querySearchMembers(e){let t="/members?".concat(e);return r("GET",t)},retrieve(e){let t="/users/".concat(e);return r("GET",t)},update(e,t){let s="/users/".concat(e);return r("POST",s,t)},delete(e){let t="/users/".concat(e);return r("DELETE",t)},userActivity(e){let t="/users/user-activity/".concat(e);return r("GET",t)},changePassword(e,t,s){let o="/users/change-pass/".concat(e);return r("POST",o,t,s)},addTagsToModerator(e,t,s){let o="/users/tags/".concat(e);return r("POST",o,t,s)},makeUserModerator(e,t){let s="/users/make-moderator/".concat(e);return r("PUT",s,t)},dismissModeratorUser(e,t){let s="/users/dismiss-moderator/".concat(e);return r("PUT",s,t)},removeTagsFromModerator(e,t,s){let o="/users/tags/remove/".concat(e);return r("POST",o,t,s)},emailSendForPasswordReset:e=>r("POST","/users/reset-password",e),resetPasswordByToken(e,t){let s="/users/reset-pass-token/".concat(e);return r("POST",s,t)},suspendUser(e,t,s){let o="/users/suspend/".concat(e);return r("PUT",o,t,s)},changeUserLang(e,t,s){let o="/users/change-lang/".concat(e);return r("PUT",o,t,s)}},tags:{create:(e,t)=>r("POST","/tags",e,t),list:()=>r("GET","/tags"),options(e){let t="/tag-options/".concat(e);return r("GET",t)},querySearch(e){let t="/query-tags?".concat(e);return r("GET",t)},retrieve(e){let t="/tags/".concat(e);return r("GET",t)},update:(e,t)=>r("PUT","/tags",e,t),delete(e){let t="/tags/".concat(e);return r("DELETE",t)}},reportTypes:{create:(e,t)=>r("POST","/report_types",e,t),options(e){let t="/report-type-options/".concat(e);return r("GET",t)},querySearch(e){let t="/query-report-types?".concat(e);return r("GET",t)},retrieve(e){let t="/report_types/".concat(e);return r("GET",t)},update:(e,t)=>r("PUT","/report_types",e,t),delete(e){let t="/report_types/".concat(e);return r("DELETE",t)}},reports:{create:(e,t)=>r("POST","/reports",e,t),querySearch(e){let t="/query-reports?".concat(e);return r("GET",t)},retrieve(e){let t="/reports/".concat(e);return r("GET",t)},update(e,t){let s="/reports/".concat(e);return r("POST",s,t)},delete(e,t){let s="/reports/".concat(e);return r("DELETE",s,{},t)},closeReport(e,t){let s="/reports/close/".concat(e);return r("PUT",s,{},t)}},discussions:{create:(e,t)=>(console.log(e,"data"),r("POST","/discussions",e,t)),list:()=>r("GET","/discussions"),querySearch(e){let t="/discussions?".concat(e);return r("GET",t)},retrieve(e){let t="/discussions/".concat(e);return r("GET",t)},update:(e,t)=>r("PUT","/discussions",e,t),delete(e,t){let s="/discussions/".concat(e);return r("DELETE",s,{},t)},lockDiscussion(e,t){let s="/discussions/lock/".concat(e);return r("PUT",s,{},t)},unlockDiscussion(e,t){let s="/discussions/unlock/".concat(e);return r("PUT",s,{},t)},fetchByTagId(e){let t="/discussions/tag/".concat(e);return r("GET",t)}},answers:{create:(e,t)=>r("POST","/answers",e,t),list:()=>r("GET","/answers"),retrieve(e){let t="/answers/".concat(e);return r("GET",t)},update:(e,t)=>r("PUT","/answers",e,t),delete(e,t){let s="/answers/".concat(e);return r("DELETE",s,{},t)},getVotes(e){let t="/answers/votes/".concat(e);return r("GET",t)}},comments:{create:(e,t)=>r("POST","/comments",e,t),list:()=>r("GET","/comments"),retrieve(e){let t="/comments/".concat(e);return r("GET",t)},update:(e,t)=>r("PUT","/comments",e,t),delete(e,t){let s="/comments/".concat(e);return r("DELETE",s,{},t)}},files:{uploadFiles:(e,t)=>r("POST","/upload",e,t),upload(e,t,s){let o="/upload/".concat(e);return r("POST",o,t,s)}},setting:{update:(e,t)=>r("PUT","/settings",e,t)},vote:{create:(e,t)=>r("POST","/votes",e,t),delete(e,t){let s="/votes/".concat(e);return r("DELETE",s,t)}}}}},function(e){e.O(0,[150,5,616,478,596,744],function(){return e(e.s=5182)}),_N_E=e.O()}]);