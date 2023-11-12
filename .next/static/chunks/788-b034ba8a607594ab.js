(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{2480:function(){},31:function(e,t,r){"use strict";var s=r(7437),n=r(6753),l=r(8652);t.Z=e=>{let{id:t,name:r,Icon:o,RemoveIconAlert:a,handleRemoveTag:i,openTagRemoveAlert:c,setOpenTagRemoveAlert:d,RemoveIconNoAlert:u,highLightTagId:m}=e;return(0,s.jsxs)("div",{className:"flex rounded overflow-hidden shadow-md bg-neutral-200 px-1 ".concat(m&&t===m?"bg-yellow-200":""),children:[o&&(0,s.jsx)("div",{className:"flex items-center",children:o}),(0,s.jsx)("div",{className:"flex px-1 justify-start items-center",children:(0,s.jsx)("div",{children:(0,s.jsx)(n.Z,{className:"font-bold",children:r})})}),u&&(0,s.jsx)("div",{className:"flex items-center justify-top flex-grow",children:(0,s.jsx)("button",{children:u})}),a&&(0,s.jsxs)("div",{className:"flex items-center justify-top flex-grow",children:[(0,s.jsx)("button",{onClick:()=>d(!0),children:a}),(0,s.jsx)(l.Z,{alertTitle:"Remove Tag?",alertMessage:"Are you sure you want to remove this ".concat(r," Tag?"),open:c,setOpen:d,handleYes:i})]})]})}},5707:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthProvider:function(){return v},default:function(){return g}});var s=r(7437),n=r(2265),l=r(9687),o=r(8688),a=r(3014),i=r(4033),c=r(4177);let d="auth_token",u="user",m=()=>{try{return c.Z.getItem(d)}catch(e){console.log("Error getting the Auth Token",e)}},h=()=>{try{return c.Z.getItem(u)}catch(e){console.log("Error getting the Auth Token",e)}};var x={getToken:()=>{let e=m();return e||null},storeToken:e=>{try{c.Z.setItem(d,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeToken:()=>{try{c.Z.removeItem(d)}catch(e){console.log("Error removing the auth token",e)}},getUser:()=>{let e=h();return e||null},storeUser:e=>{try{c.Z.setItem(u,e)}catch(e){console.log("Error storing the Auth Token",e)}},removeUser:()=>{try{c.Z.removeItem(u)}catch(e){console.log("Error removing the auth token",e)}}};let p=(0,n.createContext)(void 0),v=e=>{let{children:t}=e,r=(0,i.useRouter)(),c=x.getUser(),d=x.getToken(),[u,m]=(0,n.useState)(c||null),[h,v]=(0,n.useState)(d||null),g=async(e,t)=>{await l.Z.auth.signin({username:e,password:t}).then(e=>{x.storeToken(e.data),v(e.data),l.Z.users.retrieve(e.data.id).then(e=>{x.storeUser(e.data),m(e.data),e.data.lang?r.push("/".concat(e.data.lang)):r.push("/")}).catch(e=>{console.error((0,o.e)(e)),(0,a.toast)((0,o.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})}).catch(e=>{console.error((0,o.e)(e)),(0,a.toast)((0,o.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})})};return(0,s.jsx)(p.Provider,{value:{user:u,jwt:h,login:g,logout:()=>{x.removeToken(),x.removeUser(),v(null),m(null)},updateUser:e=>{x.removeUser(),x.storeUser(e),m(e)}},children:t})};var g=p},8652:function(e,t,r){"use strict";var s=r(7437),n=r(2265),l=r(9050),o=r(213),a=r(2834),i=r(6337),c=r(4173),d=r(1797),u=r(8088);let m=n.forwardRef(function(e,t){return(0,s.jsx)(u.Z,{direction:"up",ref:t,...e})});t.Z=e=>{let{open:t,alertTitle:r,alertMessage:n,setOpen:u,handleYes:h}=e,x=()=>{u(!1)};return(0,s.jsx)("div",{children:(0,s.jsxs)(o.Z,{open:t,TransitionComponent:m,keepMounted:!0,onClose:x,"aria-describedby":"alert-dialog-slide-description",children:[(0,s.jsx)(d.Z,{children:r}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(c.Z,{id:"alert-dialog-slide-description",children:n})}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{onClick:h,children:"Yes"}),(0,s.jsx)(l.Z,{onClick:x,children:"No"})]})]})})}},3928:function(e,t,r){"use strict";var s=r(7437),n=r(2265),l=r(6061),o=r(306);let a=(0,l.j)("max-w-prose text-slate-700 dark:text-slate-300 text-center",{variants:{size:{default:"text-base sm:text-lg",sm:"text-sm, sm: text-base",xs:"text-xs, sm: text-xs"}},defaultVariants:{size:"default"}}),i=(0,n.forwardRef)((e,t)=>{let{className:r,size:n,children:l,...i}=e;return(0,s.jsx)("p",{ref:t,...i,className:(0,o.cn)(a({size:n,className:r})),children:l})});i.displayName="Paragraph",t.Z=i},5816:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var s=r(7437),n=r(2265),l=r(6230),o=r(5691),a=r(9687),i=r(9619),c=r(6554),d=r(6061),u=r(306);let m=(0,d.j)("block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"),h=n.forwardRef((e,t)=>{let{className:r,children:n,isLoading:l,options:o,placeholderLabel:a,dir:i,...c}=e;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("select",{className:(0,u.cn)(m({className:r})),ref:t,disabled:l,...c,children:[(0,s.jsx)("option",{value:"",children:a}),o.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.id))]}),(0,s.jsx)("div",{className:"absolute inset-y-0 ".concat("ltr"==i?"right-0":"left-0"," flex items-center pr-2 pointer-events-none"),children:(0,s.jsx)("svg",{className:"w-4 h-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z",clipRule:"evenodd"})})})]})});h.displayName="DropdownSelect";var x=r(6753),p=r(2563),v=r(5707),g=r(3014),f=r(8688),j=r(4033),y=e=>{let{toggleModal:t,reportOption:r,discussionId:d,lang:u,dictionary:m,reportedUserId:y,dir:b}=e,A=o.Ry({reportTypeId:o.Z_().required(m.validation.atleast_one_type),content:o.Z_()}),w=(0,n.useContext)(v.default),Z=(0,j.useRouter)();return(0,s.jsx)(l.J9,{initialValues:{reportTypeId:"",content:""},validationSchema:A,onSubmit:(e,r)=>{var s,n;let{setSubmitting:l}=r;if(!(null==w?void 0:w.jwt))return(0,g.toast)(m.notify.sign_in_first,{hideProgressBar:!0,autoClose:2e3,type:"info"}),Z.push("/".concat(u,"/sign_in"));let o=null==w?void 0:null===(s=w.jwt)||void 0===s?void 0:s.id,{content:i,reportTypeId:c}=e,h=null==w?void 0:null===(n=w.jwt)||void 0===n?void 0:n.accessToken,x=d?{content:i,reportTypeId:c,userId:o,discussionId:d}:{content:i,reportTypeId:c,userId:o,reportedUserId:y};a.Z.reports.create(x,h).then(e=>{t(),(0,g.toast)(m.notify.report_submit_ok,{hideProgressBar:!0,autoClose:2e3,type:"success"})}).catch(e=>{console.error((0,f.e)(e)),(0,g.toast)((0,f.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})}),l(!1)},children:(0,s.jsx)(l.l0,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",dir:b,children:(0,s.jsx)("div",{className:"relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",children:(0,s.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,s.jsx)("div",{className:"flex items-start justify-between p-5 rounded-t",children:(0,s.jsx)(i.Z,{title:m.main.report_problem,size:"xs",className:"text-gray-600 "})}),(0,s.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,s.jsx)(x.Z,{htmlFor:"reportTypeId",children:m.main.report_type}),(0,s.jsx)(l.gN,{as:h,name:"reportTypeId",options:r,placeholderLabel:m.main.select_option,dir:b}),(0,s.jsx)(l.Bc,{name:"reportTypeId",component:"div",className:"text-red-500 text-xs"})]}),(0,s.jsxs)("div",{className:"relative p-6 flex-auto",children:[(0,s.jsx)(l.gN,{as:p.Z,name:"content",placeholder:m.main.describe_wrong}),(0,s.jsx)(l.Bc,{name:"content",component:"div",className:"text-red-500 text-xs"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",children:[(0,s.jsx)(c.z,{type:"submit",children:m.main.submit}),(0,s.jsx)(c.z,{onClick:t,variant:"link",children:m.main.close})]})]})})}),(0,s.jsx)("div",{className:"fixed inset-0 z-40 bg-black opacity-25"})]})})})}},8688:function(e,t,r){"use strict";r.d(t,{e:function(){return s}});let s=e=>{var t,r;let s=null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message;return s[0].message&&(s=s[0].message),s||(s="Something went wrong, Please try again."),s}},9239:function(e,t,r){"use strict";var s=r(7437);r(2265);var n=r(541),l=r(6983),o=r(5825),a=r(6753);t.Z=e=>{let{timestamp:t,lang:r,dictionary:i}=e,c=()=>"da"===r?l.Z:o.Z,d={0:"۰",1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹"},u=(e=>{let t=c();return(0,n.Z)(e,new Date,{locale:t})})(1e3*t),m={result:"",number:""};return"en"!==r&&(m=(e=>{let t=e,s="";if("pa"===r){let e={years:i.timestamp.year,months:i.timestamp.month,weeks:i.timestamp.week,days:i.timestamp.day,hours:i.timestamp.hour,minutes:i.timestamp.minute,seconds:i.timestamp.second,about:i.timestamp.about,over:i.timestamp.over};for(let r in e)t=t.replace(r,e[r])}let n=t.match(/\d+/);return n&&n.length>0&&(s=n[0],t=t.replace(s,"")),{result:t,number:s=s.replace(/[0-9]/g,e=>d[parseInt(e)]||e)}})(u)),"en"!==r?(0,s.jsxs)("div",{className:"flex flex-row-reverse space-x-1",children:[(0,s.jsx)("div",{className:"px-1",children:(0,s.jsx)(a.Z,{children:m.number})}),(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{children:m.result})}),(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{children:i.timestamp.ago})})]}):(0,s.jsx)("div",{children:(0,s.jsxs)(a.Z,{children:[u," ",i.timestamp.ago]})})}},7523:function(e,t){"use strict";t.Z={src:"/_next/static/media/default.9cb0d944.png",height:225,width:225,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEX8/Pzb29vg4ODp6enz8/OOVfylAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nEWLQQoAMAyDjOn/3zzWHeZBhBCgWgBjIjR9MgMTfzTOuPt9rB4HDbIAWN9FvBEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}}]);