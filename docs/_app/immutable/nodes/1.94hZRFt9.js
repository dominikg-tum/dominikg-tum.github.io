import{s as E,n as b,f as S}from"../chunks/scheduler.8fdumybZ.js";import{S as x,i as y,g as f,m as _,s as j,h as d,j as g,n as h,f as p,c as q,a as l,y as v,o as $}from"../chunks/index.9jcULZQe.js";import{d as C}from"../chunks/singletons.85uZfjvl.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function k(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=f("h1"),o=_(r),n=j(),i=f("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=q(e),i=d(e,"P",{});var m=g(i);u=h(m,c),m.forEach(p)},m(e,a){l(e,t,a),v(t,o),l(e,n,a),l(e,i,a),v(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(u,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return S(s,P,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),y(this,t,w,k,E,{})}};export{D as component};
