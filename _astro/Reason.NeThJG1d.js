import{S as c,i as u,s as d,e as m,c as f,h as p,j as h,k as x,B as b,o as i,g as v,Q as _}from"./index.0uMnPv3V.js";import{i as C}from"./infoBarStore.DwXF0biA.js";import{w as R}from"./index.BjCZTZ1B.js";/* empty css                                                      */const l=R({currentReasonIndex:0});function S(o){let t,r="Reason",s,a;return{c(){t=m("button"),t.textContent=r,this.h()},l(n){t=f(n,"BUTTON",{class:!0,"data-svelte-h":!0}),p(t)!=="svelte-10k62ps"&&(t.textContent=r),this.h()},h(){h(t,"class","svelte-17wmwhy")},m(n,e){x(n,t,e),s||(a=b(t,"click",o[0]),s=!0)},p:i,i,o:i,d(n){n&&v(t),s=!1,a()}}}function k(o,t,r){let s;_(o,l,e=>r(1,s=e));let a=s.currentReasonIndex;l.update(e=>(e.currentReasonIndex++,e));function n(){C.update(e=>(e.visible?e.reasonToShowIndex==a&&(e.visible=!1):e.visible=!0,e.reasonToShowIndex=a,e))}return[n]}class $ extends c{constructor(t){super(),u(this,t,k,S,d,{})}}export{$ as default};
