import{S as k,i as E,s as L,a as b,e as g,d as v,c as h,b as q,g as m,j as o,k as n,B as y,o as d,K as S,q as _}from"./index.0uMnPv3V.js";import{g as B}from"./globals.D0QH3NT1.js";/* empty css                         */const{document:I}=B;function P(c){let e,t,a;return{c(){e=g("img"),this.h()},l(i){e=h(i,"IMG",{itemprop:!0,src:!0,alt:!0,id:!0,style:!0,class:!0}),this.h()},h(){o(e,"itemprop","image"),_(e.src,t=c[0].path)||o(e,"src",t),o(e,"alt",a=c[0].alt),o(e,"id","background"),o(e,"style",c[1]),o(e,"class","svelte-9qk3u8")},m(i,l){n(i,e,l)},p(i,l){l&1&&!_(e.src,t=i[0].path)&&o(e,"src",t),l&1&&a!==(a=i[0].alt)&&o(e,"alt",a),l&2&&o(e,"style",i[1])},d(i){i&&m(e)}}}function V(c){let e,t,a,i,l=c[2]&&P(c);return{c(){e=b(),t=g("div"),l&&l.c(),this.h()},l(s){e=v(s),t=h(s,"DIV",{id:!0,style:!0,class:!0});var r=q(t);l&&l.l(r),r.forEach(m),this.h()},h(){o(t,"id","background-stick-limit"),o(t,"style",c[3]),o(t,"class","svelte-9qk3u8")},m(s,r){n(s,e,r),n(s,t,r),l&&l.m(t,null),a||(i=y(I,"scroll",c[4]),a=!0)},p(s,[r]){s[2]&&l.p(s,r)},i:d,o:d,d(s){s&&(m(e),m(t)),l&&l.d(),a=!1,i()}}}function M(c,e,t){let a,{img:i}=e,l=i!==void 0,s=0,{scrollEffectLimit:r}=e,p=`--scroll-effect-limit: ${r}px;`;function u(){const f=document.documentElement.scrollTop;if(f>r){t(6,s=1);return}t(6,s=f/r)}return S(()=>{u()}),c.$$set=f=>{"img"in f&&t(0,i=f.img),"scrollEffectLimit"in f&&t(5,r=f.scrollEffectLimit)},c.$$.update=()=>{c.$$.dirty&64&&t(1,a=`--scrolled-perc: ${s};`)},[i,a,l,p,u,r,s]}class G extends k{constructor(e){super(),E(this,e,M,V,L,{img:0,scrollEffectLimit:5})}}export{G as default};