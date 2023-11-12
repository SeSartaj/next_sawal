(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{2480:function(){},3405:function(e,t,s){Promise.resolve().then(s.bind(s,6540))},5707:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthProvider:function(){return v},default:function(){return p}});var a=s(7437),r=s(2265),n=s(9687),l=s(8688),i=s(3014),o=s(4033),c=s(4177);let d="auth_token",m="user",u=()=>{try{return c.Z.getItem(d)}catch(e){console.log("Error getting the Auth Token",e)}},x=()=>{try{return c.Z.getItem(m)}catch(e){console.log("Error getting the Auth Token",e)}};var h={getToken:()=>{let e=u();return e||null},storeToken:e=>{try{c.Z.setItem(d,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeToken:()=>{try{c.Z.removeItem(d)}catch(e){console.log("Error removing the auth token",e)}},getUser:()=>{let e=x();return e||null},storeUser:e=>{try{c.Z.setItem(m,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeUser:()=>{try{c.Z.removeItem(m)}catch(e){console.log("Error removing the auth token",e)}}};let f=(0,r.createContext)(void 0),v=e=>{let{children:t}=e,s=(0,o.useRouter)(),c=h.getUser(),d=h.getToken(),[m,u]=(0,r.useState)(c||null),[x,v]=(0,r.useState)(d||null),p=async(e,t)=>{await n.Z.auth.signin({username:e,password:t}).then(e=>{h.storeToken(e.data),v(e.data),n.Z.users.retrieve(e.data.id).then(e=>{h.storeUser(e.data),u(e.data),e.data.lang?s.push("/".concat(e.data.lang)):s.push("/")}).catch(e=>{console.error((0,l.e)(e)),(0,i.toast)((0,l.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})}).catch(e=>{console.error((0,l.e)(e)),(0,i.toast)((0,l.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})};return(0,a.jsx)(f.Provider,{value:{user:m,jwt:x,login:p,logout:()=>{h.removeToken(),h.removeUser(),v(null),u(null)},updateUser:e=>{h.removeUser(),h.storeUser(e),u(e)}},children:t})};var p=f},9006:function(e,t,s){"use strict";var a=s(7437),r=s(2265),n=s(6230),l=s(5691),i=s(2563),o=s(6554),c=s(9911),d=s(9687);let m=l.Ry({content:l.Z_()});t.Z=e=>{let{setState:t,model:s,lang:l,dictionary:u}=e,[x,h]=(0,r.useState)(!1),f=e=>{"discussions"===s?d.Z.discussions.querySearch("title=".concat(e)).then(e=>{t(e.data)}):"moderators"===s?d.Z.users.querySearchModerators("name=".concat(e)).then(e=>{t(e.data)}):"members"===s?d.Z.users.querySearchMembers("name=".concat(e)).then(e=>{t(e.data)}):"tags"===s?d.Z.tags.querySearch("name=".concat(e)).then(e=>{t(e.data)}):"reportTypes"===s?d.Z.reportTypes.querySearch("name=".concat(e)).then(e=>{t(e.data)}):"reports"===s&&d.Z.reports.querySearch("content=".concat(e)).then(e=>{t(e.data)})},v=e=>{e(),h(!1),f("")};return(0,a.jsx)("div",{children:(0,a.jsx)(n.J9,{initialValues:{content:""},validationSchema:m,onSubmit:(e,t)=>{let{setSubmitting:s}=t;f("".concat(e.content))},children:e=>{let{resetForm:t}=e;return(0,a.jsxs)(n.l0,{className:"flex w-full justify-end",children:[x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"p-3 flex-col w-full px-3 mt-3",children:(0,a.jsxs)("div",{className:"relative flex-auto",children:[(0,a.jsx)(n.gN,{as:i.Z,name:"content",placeholder:u.main.search_here,clearIcon:!0,cleanStateToggle:()=>v(t),lang:l}),(0,a.jsx)(n.Bc,{name:"content",component:"div",className:"text-red-500 text-xs"})]})}),(0,a.jsx)("div",{className:"flex p-2",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)(o.z,{type:"submit",className:"bg-blue-600",children:(0,a.jsx)(c.Z.Search,{})})})})]}),!x&&(0,a.jsx)("div",{className:"flex p-2",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)(o.z,{type:"submit",variant:"ghost",onClick:()=>h(!0),children:(0,a.jsx)(c.Z.Search,{})})})})]})}})})}},6540:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var a=s(7437),r=s(2265),n=s(9619),l=s(9911),i=s(9239),o=s(7523),c=s(6691),d=s.n(c),m=s(1396),u=s.n(m),x=s(3928),h=e=>{let{moderator:t,lang:s,dictionary:r}=e;return(0,a.jsxs)("div",{className:"flex rounded overflow-hidden shadow-md",children:[(0,a.jsx)("div",{children:t.file?(0,a.jsx)("img",{className:"rounded-md w-20 h-20 mb-1",src:"".concat("https://online.tveta.gov.af:8080/api","/files/").concat(t.file.fileName),alt:"jane avatar"}):(0,a.jsx)(d(),{src:o.Z,alt:"Picture of the author",className:"rounded-md w-20 h-20 mb-1"})}),(0,a.jsxs)("div",{className:"flex justify-between flex-col w-[65%] pl-5 truncate",children:[(0,a.jsx)("div",{className:"text-xl text-blue-500 mb-2",children:(0,a.jsx)(u(),{href:"/".concat(s,"/profile/").concat(t.id),children:(0,a.jsxs)(x.Z,{size:"xs",className:"text-left text-blue-500",children:[null==t?void 0:t.firstName," ",null==t?void 0:t.lastName]})})}),t.createdAt&&(0,a.jsxs)("div",{className:"flex justify-end pb-2 space-x-1 items-center",children:[(0,a.jsx)(l.Z.Clock9,{size:14,color:"grey"}),(0,a.jsx)(i.Z,{timestamp:t.createdAt,lang:s,dictionary:r})]})]})]})},f=s(9687),v=s(2498),p=s(5630),j=s(9006),g=s(6554),N=s(6230),y=s(5691),w=s(2563),Z=s(8688),A=s(3014),b=s(5707),_=s(4033),k=e=>{let{lang:t,dictionary:s,toggleModal:l,setModeratorState:i}=e,o=y.Ry({firstName:y.Z_(),lastName:y.Z_().required(s.validation.last_name_required),username:y.Z_().required(s.validation.username_required),password:y.Z_().required(s.validation.password_required),confirmPassword:y.Z_().oneOf([y.iH("password"),""],s.validation.password_match).required(s.validation.confirm_password_required),email:y.Z_().email().required(s.validation.email_required)}),c=(0,_.useRouter)(),d=(0,r.useContext)(b.default);return(0,a.jsx)(N.J9,{initialValues:{firstName:"",lastName:"",email:"",username:"",password:""},validationSchema:o,onSubmit:(e,a)=>{var r;let{setSubmitting:n}=a;if(!(null==d?void 0:d.jwt))return(0,A.toast)(s.notify.sign_in_first,{hideProgressBar:!0,autoClose:2e3,type:"info"}),c.push("/".concat(t,"/sign_in"));let{firstName:o,lastName:m,email:u,username:x,password:h}=e,v=null==d?void 0:null===(r=d.jwt)||void 0===r?void 0:r.accessToken;f.Z.users.createModerator({firstName:o,lastName:m,email:u,username:x,password:h,lang:t},v).then(()=>{f.Z.users.querySearchModerators("").then(e=>{i(e.data)}),l()}).catch(e=>{console.error((0,Z.e)(e)),(0,A.toast)((0,Z.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})}),console.log(e,"Here"),n(!1)},children:(0,a.jsx)(N.l0,{children:(0,a.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",children:(0,a.jsx)("div",{className:"relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",children:(0,a.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,a.jsx)("div",{className:"flex items-start justify-between p-5 rounded-t",children:(0,a.jsx)(n.Z,{title:s.main.register_moderator,size:"xs",className:"text-gray-600 "})}),(0,a.jsxs)("div",{className:"relative p-6 flex",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"firstName",placeholder:s.main.first_name,label:s.main.first_name}),(0,a.jsx)(N.Bc,{name:"firstName",component:"div",className:"text-red-500 text-xs"})]}),(0,a.jsxs)("div",{className:"flex-col flex-1 px-2",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"lastName",placeholder:s.main.last_name,label:s.main.last_name}),(0,a.jsx)(N.Bc,{name:"lastName",component:"div",className:"text-red-500 text-xs"})]})]}),(0,a.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"email",placeholder:s.main.email,label:s.main.email}),(0,a.jsx)(N.Bc,{name:"email",component:"div",className:"text-red-500 text-xs"})]}),(0,a.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"username",placeholder:s.main.username,label:s.main.username}),(0,a.jsx)(N.Bc,{name:"username",component:"div",className:"text-red-500 text-xs"})]}),(0,a.jsxs)("div",{className:"relative p-6 flex",children:[(0,a.jsxs)("div",{className:"flex-1 flex-col",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"password",type:"password",placeholder:s.main.password,label:s.main.password}),(0,a.jsx)(N.Bc,{name:"password",component:"div",className:"text-red-500 text-xs"})]}),(0,a.jsxs)("div",{className:"flex-1 flex-col px-2",children:[(0,a.jsx)(N.gN,{as:w.Z,name:"confirmPassword",type:"password",placeholder:s.main.confirm_password,label:s.main.confirm_password}),(0,a.jsx)(N.Bc,{name:"confirmPassword",component:"div",className:"text-red-500 text-xs"})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-center mt-3 p-6 rounded-b space-x-2",children:[(0,a.jsx)(g.z,{type:"submit",children:s.main.register}),(0,a.jsx)(g.z,{onClick:l,variant:"link",children:s.main.close})]})]})})})})})},S=e=>{let t=(0,r.useContext)(b.default),[s,l]=(0,r.useState)(),[i,o]=(0,r.useState)(e.moderators),[c,d]=(0,r.useState)(1),[m,u]=(0,r.useState)(!1),x=()=>{u(!m)};return(0,r.useEffect)(()=>{(null==t?void 0:t.user)?l(null==t?void 0:t.user):l(null)},[]),(0,r.useEffect)(()=>{c>=1&&f.Z.users.querySearchModerators("page=".concat(c-1)).then(e=>{o(e.data)})},[c]),(0,a.jsxs)("div",{className:"flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"px-4 py-3 md:justify-start",children:[(0,a.jsxs)("div",{className:"flex justify-between pr-5",children:[(0,a.jsx)(n.Z,{title:e.dictionary.headers.moderators,numberCount:i.totalElements,size:"sm"}),s&&(null==s?void 0:s.isAdmin)&&(0,a.jsx)(g.z,{className:"bg-blue-500",onClick:x,children:e.dictionary.main.create})]}),(0,a.jsx)(j.Z,{setState:o,model:"moderators",lang:e.lang,dictionary:e.dictionary})]}),(0,a.jsx)("div",{className:"px-4 flex flex-wrap",children:i.content.map(t=>(0,a.jsx)("div",{className:"lg:w-1/3 md:w-1/2 w-full px-2 mb-4",children:(0,a.jsx)(h,{moderator:t,lang:e.lang,dictionary:e.dictionary})},t.id))}),(0,a.jsx)("div",{className:"flex py-4 items-center justify-center",children:(0,a.jsx)(v.Z,{spacing:2,children:(0,a.jsx)(p.Z,{count:i.totalPages,showFirstButton:!0,showLastButton:!0,onChange:(e,t)=>d(t)})})})]}),m&&(0,a.jsx)("div",{className:"modal-background",children:(0,a.jsx)(k,{toggleModal:x,setModeratorState:o,lang:e.lang,dictionary:e.dictionary})})]})}},3928:function(e,t,s){"use strict";var a=s(7437),r=s(2265),n=s(6061),l=s(306);let i=(0,n.j)("max-w-prose text-slate-700 dark:text-slate-300 text-center",{variants:{size:{default:"text-base sm:text-lg",sm:"text-sm, sm: text-base",xs:"text-xs, sm: text-xs"}},defaultVariants:{size:"default"}}),o=(0,r.forwardRef)((e,t)=>{let{className:s,size:r,children:n,...o}=e;return(0,a.jsx)("p",{ref:t,...o,className:(0,l.cn)(i({size:r,className:s})),children:n})});o.displayName="Paragraph",t.Z=o},8688:function(e,t,s){"use strict";s.d(t,{e:function(){return a}});let a=e=>{var t,s;let a=null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message;return a[0].message&&(a=a[0].message),a||(a="Something went wrong, Please try again."),a}},9239:function(e,t,s){"use strict";var a=s(7437);s(2265);var r=s(541),n=s(6983),l=s(5825),i=s(6753);t.Z=e=>{let{timestamp:t,lang:s,dictionary:o}=e,c=()=>"da"===s?n.Z:l.Z,d={0:"۰",1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹"},m=(e=>{let t=c();return(0,r.Z)(e,new Date,{locale:t})})(1e3*t),u={result:"",number:""};return"en"!==s&&(u=(e=>{let t=e,a="";if("pa"===s){let e={years:o.timestamp.year,months:o.timestamp.month,weeks:o.timestamp.week,days:o.timestamp.day,hours:o.timestamp.hour,minutes:o.timestamp.minute,seconds:o.timestamp.second,about:o.timestamp.about,over:o.timestamp.over};for(let s in e)t=t.replace(s,e[s])}let r=t.match(/\d+/);return r&&r.length>0&&(a=r[0],t=t.replace(a,"")),{result:t,number:a=a.replace(/[0-9]/g,e=>d[parseInt(e)]||e)}})(m)),"en"!==s?(0,a.jsxs)("div",{className:"flex flex-row-reverse space-x-1",children:[(0,a.jsx)("div",{className:"px-1",children:(0,a.jsx)(i.Z,{children:u.number})}),(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{children:u.result})}),(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{children:o.timestamp.ago})})]}):(0,a.jsx)("div",{children:(0,a.jsxs)(i.Z,{children:[m," ",o.timestamp.ago]})})}},7523:function(e,t){"use strict";t.Z={src:"/_next/static/media/default.9cb0d944.png",height:225,width:225,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEX8/Pzb29vg4ODp6enz8/OOVfylAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nEWLQQoAMAyDjOn/3zzWHeZBhBCgWgBjIjR9MgMTfzTOuPt9rB4HDbIAWN9FvBEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[150,5,616,697,775,396,691,267,540,901,478,596,744],function(){return e(e.s=3405)}),_N_E=e.O()}]);