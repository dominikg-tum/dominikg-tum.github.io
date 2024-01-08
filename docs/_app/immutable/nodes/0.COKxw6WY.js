import{s as O,n as A,c as q,d as U,u as X,g as Y,e as J,r as K}from"../chunks/scheduler.8fdumybZ.js";import{S,i as C,g as y,s as T,h as x,j as H,x as D,c as k,f as $,k as _,a as I,y as g,z as Q,m as Z,n as ee,r as G,u as P,v as W,A as L,d as M,t as j,w as B}from"../chunks/index.9jcULZQe.js";function F(t){return t?.length!==void 0?t:Array.from(t)}const te=!0,fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));class ne extends S{constructor(e){super(),C(this,e,null,null,O,{})}}function N(t,e,s){const d=t.slice();return d[2]=e[s],d[4]=s,d}function R(t){let e,s,d=t[2].name+"",l,r;return{c(){e=y("a"),s=y("p"),l=Z(d),r=T(),this.h()},l(i){e=x(i,"A",{href:!0,class:!0});var u=H(e);s=x(u,"P",{});var v=H(s);l=ee(v,d),v.forEach($),r=k(u),u.forEach($),this.h()},h(){_(e,"href",t[2].link),_(e,"class","duration-200 hover:text-violet-400")},m(i,u){I(i,e,u),g(e,s),g(s,l),g(e,r)},p:A,d(i){i&&$(e)}}}function se(t){let e,s,d='<b class="font-bold poppins">Dominik</b> Garstenauer',l,r,i,u,v='<div class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-violet-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div> <h4 class="relative z-9">Get in touch</h4>',b,h=F(t[1]),c=[];for(let a=0;a<h.length;a+=1)c[a]=R(N(t,h,a));return{c(){e=y("header"),s=y("h1"),s.innerHTML=d,l=T(),r=y("div");for(let a=0;a<c.length;a+=1)c[a].c();i=T(),u=y("a"),u.innerHTML=v,this.h()},l(a){e=x(a,"HEADER",{class:!0});var f=H(e);s=x(f,"H1",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-29xoh9"&&(s.innerHTML=d),l=k(f),r=x(f,"DIV",{class:!0});var n=H(r);for(let w=0;w<c.length;w+=1)c[w].l(n);n.forEach($),i=k(f),u=x(f,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),D(u)!=="svelte-1fjxmcx"&&(u.innerHTML=v),f.forEach($),this.h()},h(){_(s,"class","font-medium"),_(r,"class","sm:flex items-center gap-4 hidden"),_(u,"href","https://www.linkedin.com/in/dominik-garstenauer/"),_(u,"target","_blank"),_(u,"class","blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"),_(e,"class",b="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(t[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))},m(a,f){I(a,e,f),g(e,s),g(e,l),g(e,r);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(r,null);g(e,i),g(e,u)},p(a,[f]){if(f&2){h=F(a[1]);let n;for(n=0;n<h.length;n+=1){const w=N(a,h,n);c[n]?c[n].p(w,f):(c[n]=R(w),c[n].c(),c[n].m(r,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=h.length}f&1&&b!==(b="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(a[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))&&_(e,"class",b)},i:A,o:A,d(a){a&&$(e),Q(c,a)}}}function le(t,e,s){let{y:d}=e,l=[];return t.$$set=r=>{"y"in r&&s(0,d=r.y)},[d,l]}class re extends S{constructor(e){super(),C(this,e,le,se,O,{y:0})}}function ae(t){let e=!1,s=()=>{e=!1},d,l,r,i,u='<i class="fa-solid fa-arrow-up grid place-items-center aspect-sqaure"></i>',v,b,h,c,a,f,n,w,V;q(t[5]),q(t[6]),h=new re({props:{y:t[0]}});const E=t[4].default,m=U(E,t,t[3],null);return f=new ne({}),{c(){l=y("div"),r=y("div"),i=y("button"),i.innerHTML=u,b=T(),G(h.$$.fragment),c=T(),m&&m.c(),a=T(),G(f.$$.fragment),this.h()},l(o){l=x(o,"DIV",{class:!0});var p=H(l);r=x(p,"DIV",{class:!0});var z=H(r);i=x(z,"BUTTON",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-53c7ob"&&(i.innerHTML=u),z.forEach($),b=k(p),P(h.$$.fragment,p),c=k(p),m&&m.l(p),a=k(p),P(f.$$.fragment,p),p.forEach($),this.h()},h(){_(i,"class","ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"),_(r,"class",v="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(t[0]>0?" opacity-full pointer-events-auto":" opacity-0 pointer-events-none")),_(l,"class","relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(o,p){I(o,l,p),g(l,r),g(r,i),g(l,b),W(h,l,null),g(l,c),m&&m.m(l,null),g(l,a),W(f,l,null),n=!0,w||(V=[L(window,"scroll",()=>{e=!0,clearTimeout(d),d=setTimeout(s,100),t[5]()}),L(window,"resize",t[6]),L(i,"click",oe)],w=!0)},p(o,[p]){p&1&&!e&&(e=!0,clearTimeout(d),scrollTo(window.pageXOffset,o[0]),d=setTimeout(s,100)),(!n||p&1&&v!==(v="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(o[0]>0?" opacity-full pointer-events-auto":" opacity-0 pointer-events-none")))&&_(r,"class",v);const z={};p&1&&(z.y=o[0]),h.$set(z),m&&m.p&&(!n||p&8)&&X(m,E,o,o[3],n?J(E,o[3],p,null):Y(o[3]),null)},i(o){n||(M(h.$$.fragment,o),M(m,o),M(f.$$.fragment,o),n=!0)},o(o){j(h.$$.fragment,o),j(m,o),j(f.$$.fragment,o),n=!1},d(o){o&&$(l),B(h),m&&m.d(o),B(f),w=!1,K(V)}}}function oe(){document.body.scrollIntoView()}function ie(t,e,s){let{$$slots:d={},$$scope:l}=e,r,i=0,u=0;function v(){s(0,r=window.pageYOffset)}function b(){s(1,i=window.innerHeight),s(2,u=window.innerWidth)}return t.$$set=h=>{"$$scope"in h&&s(3,l=h.$$scope)},[r,i,u,l,d,v,b]}class de extends S{constructor(e){super(),C(this,e,ie,ae,O,{})}}export{de as component,fe as universal};