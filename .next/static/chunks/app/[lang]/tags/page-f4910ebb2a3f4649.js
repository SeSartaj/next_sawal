(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{4263:function(e,a,s){Promise.resolve().then(s.bind(s,206))},206:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return p}});var n=s(7437),t=s(2265),l=s(9687),i=s(9619),d=s(3621),r=s(9006),c=s(2498),o=s(5630),m=s(6554),x=s(5691),u=s(6230),h=s(2563),f=s(3014),j=s(8688),g=s(5707),v=e=>{let{toggleModal:a,setTagState:s,lang:d,dictionary:r}=e,c=x.Ry({name:x.Z_().required(r.validation.english_name_required),namePa:x.Z_().required(r.validation.pashtu_name_required),nameDa:x.Z_().required(r.validation.dari_name_required)}),o=(0,t.useContext)(g.default);return(0,n.jsx)(u.J9,{initialValues:{name:"",namePa:"",nameDa:""},validationSchema:c,onSubmit:(e,n)=>{var t;let{setSubmitting:i}=n,d=null==o?void 0:null===(t=o.jwt)||void 0===t?void 0:t.accessToken,{name:c,namePa:m,nameDa:x}=e;l.Z.tags.create({name:c,namePa:m,nameDa:x},d).then(e=>{l.Z.tags.querySearch("").then(e=>{s(e.data)}),(0,f.toast)(r.notify.tag_created_ok,{hideProgressBar:!0,autoClose:2e3,type:"success"}),a()}).catch(e=>{console.error((0,j.e)(e)),(0,f.toast)((0,j.e)(e),{hideProgressBar:!0,autoClose:2e3,type:"error"})}),console.log(e,"Here"),i(!1)},children:(0,n.jsx)(u.l0,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",children:(0,n.jsx)("div",{className:"relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:",children:(0,n.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,n.jsx)("div",{className:"flex items-start justify-between p-5 rounded-t",children:(0,n.jsx)(i.Z,{title:r.main.create_tag,size:"xs",className:"text-gray-600 "})}),(0,n.jsx)("div",{className:"relative p-6 flex space-x-10",children:(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)(u.gN,{as:h.Z,name:"name",placeholder:r.main.name,label:r.main.name}),(0,n.jsx)(u.Bc,{name:"name",component:"div",className:"text-red-500 text-xs"})]})}),(0,n.jsx)("div",{className:"relative p-6 flex space-x-10",children:(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)(u.gN,{as:h.Z,name:"namePa",placeholder:r.main.name_pa,label:r.main.name_pa}),(0,n.jsx)(u.Bc,{name:"namePa",component:"div",className:"text-red-500 text-xs"})]})}),(0,n.jsx)("div",{className:"relative p-6 flex space-x-10",children:(0,n.jsxs)("div",{className:"flex-1 flex-col",children:[(0,n.jsx)(u.gN,{as:h.Z,name:"nameDa",placeholder:r.main.name_da,label:r.main.name_da}),(0,n.jsx)(u.Bc,{name:"nameDa",component:"div",className:"text-red-500 text-xs"})]})}),(0,n.jsxs)("div",{className:"flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b",children:[(0,n.jsx)(m.z,{type:"submit",children:r.main.add}),(0,n.jsx)(m.z,{onClick:a,variant:"link",children:r.main.close})]})]})})})})})})},p=e=>{let a=(0,t.useContext)(g.default),[s,x]=(0,t.useState)(),[u,h]=(0,t.useState)(e.tags),[f,j]=(0,t.useState)(1),[p,y]=(0,t.useState)(!1),N=()=>{y(!p)};return(0,t.useEffect)(()=>{f>=1&&l.Z.tags.querySearch("page=".concat(f-1)).then(e=>{h(e.data)})},[f]),(0,t.useEffect)(()=>{(null==a?void 0:a.user)?x(null==a?void 0:a.user):x(null)},[]),(0,n.jsxs)("div",{className:"flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"px-4 py-3 md:justify-start",children:[(0,n.jsxs)("div",{className:"flex justify-between pr-5",children:[(0,n.jsx)(i.Z,{title:e.dictionary.headers.tags,numberCount:u.totalElements,size:"sm"}),s&&s.isAdmin&&(0,n.jsx)(m.z,{className:"bg-blue-500",onClick:N,children:e.dictionary.main.create})]}),(0,n.jsx)(r.Z,{setState:h,model:"tags",lang:e.lang,dictionary:e.dictionary})]})}),(0,n.jsx)("div",{className:"px-4 flex flex-wrap",children:u.content.map(a=>(0,n.jsx)("div",{className:"lg:w-1/4 md:w-1/3 w-1/2 px-2 mb-4",children:(0,n.jsx)(d.Z,{id:a.id,name:"pa"===e.lang?a.namePa:"da"===e.lang?a.nameDa:a.name,dictionary:e.dictionary,lang:e.lang,discussionsCount:a.discussionsCount,isTag:!0,isAdmin:null==s?void 0:s.isAdmin,setTags:h,tag:a},a.id)},a.id))}),(0,n.jsx)("div",{className:"flex py-4 items-center justify-center",children:(0,n.jsx)(c.Z,{spacing:2,children:(0,n.jsx)(o.Z,{count:u.totalPages,showFirstButton:!0,showLastButton:!0,onChange:(e,a)=>j(a)})})}),p&&(0,n.jsx)("div",{className:"modal-background",children:(0,n.jsx)(v,{toggleModal:N,setTagState:h,lang:e.lang,dictionary:e.dictionary})})]})}}},function(e){e.O(0,[150,5,616,697,775,396,540,901,943,478,596,744],function(){return e(e.s=4263)}),_N_E=e.O()}]);