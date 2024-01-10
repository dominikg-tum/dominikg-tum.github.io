import{s as O,n as A,c as q,d as U,u as X,g as Y,e as J,r as K}from"../chunks/scheduler.7XQgmEE1.js";import{S,i as C,g as y,s as k,h as $,j as H,x as D,c as T,f as x,k as _,a as I,y as g,z as Q,m as Z,n as ee,r as P,u as G,v as W,A as E,d as L,t as M,w as B}from"../chunks/index.P3tU8r6o.js";import{e as F}from"../chunks/each.-oqiv04n.js";const te=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));class se extends S{constructor(e){super(),C(this,e,null,null,O,{})}}function N(n,e,s){const d=n.slice();return d[2]=e[s],d[4]=s,d}function R(n){let e,s,d=n[2].name+"",l,r;return{c(){e=y("a"),s=y("p"),l=Z(d),r=k(),this.h()},l(i){e=$(i,"A",{href:!0,class:!0});var u=H(e);s=$(u,"P",{});var v=H(s);l=ee(v,d),v.forEach(x),r=T(u),u.forEach(x),this.h()},h(){_(e,"href",n[2].link),_(e,"class","duration-200 hover:text-violet-400")},m(i,u){I(i,e,u),g(e,s),g(s,l),g(e,r)},p:A,d(i){i&&x(e)}}}function le(n){let e,s,d='<b class="font-bold poppins">Dominik</b> Garstenauer',l,r,i,u,v='<div class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-violet-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div> <h4 class="relative z-9">Get in touch</h4>',b,h=F(n[1]),c=[];for(let a=0;a<h.length;a+=1)c[a]=R(N(n,h,a));return{c(){e=y("header"),s=y("h1"),s.innerHTML=d,l=k(),r=y("div");for(let a=0;a<c.length;a+=1)c[a].c();i=k(),u=y("a"),u.innerHTML=v,this.h()},l(a){e=$(a,"HEADER",{class:!0});var f=H(e);s=$(f,"H1",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-29xoh9"&&(s.innerHTML=d),l=T(f),r=$(f,"DIV",{class:!0});var t=H(r);for(let w=0;w<c.length;w+=1)c[w].l(t);t.forEach(x),i=T(f),u=$(f,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),D(u)!=="svelte-1fjxmcx"&&(u.innerHTML=v),f.forEach(x),this.h()},h(){_(s,"class","font-medium"),_(r,"class","sm:flex ml-auto pr-4 items-center gap-4 hidden"),_(u,"href","https://www.linkedin.com/in/dominik-garstenauer/"),_(u,"target","_blank"),_(u,"class","blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"),_(e,"class",b="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(n[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))},m(a,f){I(a,e,f),g(e,s),g(e,l),g(e,r);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(r,null);g(e,i),g(e,u)},p(a,[f]){if(f&2){h=F(a[1]);let t;for(t=0;t<h.length;t+=1){const w=N(a,h,t);c[t]?c[t].p(w,f):(c[t]=R(w),c[t].c(),c[t].m(r,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=h.length}f&1&&b!==(b="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(a[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))&&_(e,"class",b)},i:A,o:A,d(a){a&&x(e),Q(c,a)}}}function ne(n,e,s){let{y:d}=e,l=[{name:"Projects",link:"#projects"},{name:"About me",link:"#about"}];return n.$$set=r=>{"y"in r&&s(0,d=r.y)},[d,l]}class re extends S{constructor(e){super(),C(this,e,ne,le,O,{y:0})}}function ae(n){let e=!1,s=()=>{e=!1},d,l,r,i,u='<i class="fa-solid fa-arrow-up grid place-items-center aspect-sqaure"></i>',v,b,h,c,a,f,t,w,V;q(n[5]),q(n[6]),h=new re({props:{y:n[0]}});const j=n[4].default,m=U(j,n,n[3],null);return f=new se({}),{c(){l=y("div"),r=y("div"),i=y("button"),i.innerHTML=u,b=k(),P(h.$$.fragment),c=k(),m&&m.c(),a=k(),P(f.$$.fragment),this.h()},l(o){l=$(o,"DIV",{class:!0});var p=H(l);r=$(p,"DIV",{class:!0});var z=H(r);i=$(z,"BUTTON",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-1l6syvr"&&(i.innerHTML=u),z.forEach(x),b=T(p),G(h.$$.fragment,p),c=T(p),m&&m.l(p),a=T(p),G(f.$$.fragment,p),p.forEach(x),this.h()},h(){_(i,"class","ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"),_(r,"class",v="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(n[0]>0?" opacity-full pointer-events-auto":" opacity-0 pointer-events-none")),_(l,"class","relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen")},m(o,p){I(o,l,p),g(l,r),g(r,i),g(l,b),W(h,l,null),g(l,c),m&&m.m(l,null),g(l,a),W(f,l,null),t=!0,w||(V=[E(window,"scroll",()=>{e=!0,clearTimeout(d),d=setTimeout(s,100),n[5]()}),E(window,"resize",n[6]),E(i,"click",oe)],w=!0)},p(o,[p]){p&1&&!e&&(e=!0,clearTimeout(d),scrollTo(window.pageXOffset,o[0]),d=setTimeout(s,100)),(!t||p&1&&v!==(v="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(o[0]>0?" opacity-full pointer-events-auto":" opacity-0 pointer-events-none")))&&_(r,"class",v);const z={};p&1&&(z.y=o[0]),h.$set(z),m&&m.p&&(!t||p&8)&&X(m,j,o,o[3],t?J(j,o[3],p,null):Y(o[3]),null)},i(o){t||(L(h.$$.fragment,o),L(m,o),L(f.$$.fragment,o),t=!0)},o(o){M(h.$$.fragment,o),M(m,o),M(f.$$.fragment,o),t=!1},d(o){o&&x(l),B(h),m&&m.d(o),B(f),w=!1,K(V)}}}function oe(){document.body.scrollIntoView()}function ie(n,e,s){let{$$slots:d={},$$scope:l}=e,r,i=0,u=0;function v(){s(0,r=window.pageYOffset)}function b(){s(1,i=window.innerHeight),s(2,u=window.innerWidth)}return n.$$set=h=>{"$$scope"in h&&s(3,l=h.$$scope)},[r,i,u,l,d,v,b]}class he extends S{constructor(e){super(),C(this,e,ie,ae,O,{})}}export{he as component,de as universal};
