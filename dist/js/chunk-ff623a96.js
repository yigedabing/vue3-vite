import{d as b,m as v,n as g,a as k,b as t,w as a,e as n,o as y,h as l,t as D,i as E}from"./app-73cde9c6.js";const x={class:"user-list"},F=l(" \u64CD\u4F5C "),T=l(" \u5220\u9664 "),B=l(" \u8BE6\u60C5 ");var w=b({__name:"UserList",props:{userInfo:null},setup(r){const i=r,s=v([]),c=E();g(()=>{for(let e=0;e<10;e++)s.value.push({id:Math.random().toString(16).substring(2),name:`\u738B\u5C0F\u660E${e}`,age:Math.floor(Math.random()*(e+10))})});const p=e=>{c.push({name:"UserDetail",params:{id:e.id},query:{...e}})},d=e=>{s.value.splice(e,1)};return(e,I)=>{const _=n("el-alert"),o=n("ElTableColumn"),u=n("el-link"),m=n("ElTable");return y(),k("div",x,[t(_,{type:"success"},{default:a(()=>[l(D(i.userInfo),1)]),_:1}),t(m,{data:s.value},{default:a(()=>[t(o,{label:"\u7F16\u53F7",width:"100",type:"index"}),t(o,{label:"\u7528\u6237ID",prop:"id"}),t(o,{label:"\u59D3\u540D",prop:"name"}),t(o,{label:"\u5E74\u9F84",prop:"age"}),t(o,null,{header:a(()=>[F]),default:a(({row:f,$index:h})=>[t(u,{type:"danger",onClick:C=>d(h),underline:!1},{default:a(()=>[T]),_:2},1032,["onClick"]),t(u,{style:{"margin-left":"10px"},type:"primary",onClick:C=>p(f),underline:!1},{default:a(()=>[B]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{w as default};