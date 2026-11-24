(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]);function n(n,r){let i=e(r),a=new URLSearchParams(n.startsWith(`?`)?n.slice(1):n);for(let e of Object.keys(r)){if(t.has(String(e))||!a.has(String(e)))continue;let n=a.get(String(e));if(n===null)continue;let o=r[e];if(typeof o==`string`)i[e]=n;else if(typeof o==`number`&&n.trim()!==``){let t=Number(n);Number.isFinite(t)&&(i[e]=t)}}return i}function r(e,t,n,r){return r*(e-t)*Math.tan(n)}var i=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function a(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...i[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function o(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function s(e,t,n){let r=o(e),i=o(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function c(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,light:{dir:a(e.lightAzimuth),elevation:e.elevation},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:{},shadow:{color:`#17221f`,alpha:e.shadowAlpha},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:s(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:s(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function l(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var u=Math.PI/2,d=Math.PI/2,f=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),p=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),m=12,h=2e-14,g=new Float64Array(2),_=1e8,v=.001;function y(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);g[0]+=o*p,s&&p>0&&(g[1]+=o*((t*c*r*l+n*l*l)/p))}var b=new Float64Array(16),x=new Float64Array(16);for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)b[2*e+n]=.5*(1+t*f[e]),x[2*e+n]=p[e]*.5;var S=new Float64Array(16),C=new Float64Array(16),w=1e-4;function T(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(v,s/(c*r));if(!(l<_))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*f[e]);S[2*e+n]=o+l*Math.sinh(r),C[2*e+n]=p[e]*.5*l*d*Math.cosh(r)}return!0}function E(e,t,n,r,i,a,o,s,c){g[0]=0,g[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)y(e,t,n,r,i,o[c],s[c],a)}function D(e,t,n){return E(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,b,x,n),g[0]}function O(e,t){return D(e,t)}function k(e,t,n,r,i){let a=4*t.H/3;if(n===0)return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?D(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=T(o,s,u,r,i),f=!1;for(let e=0;e<m;e++){E(o,s,u,r,i,!0,d?S:b,d?C:x,t.work),t.work&&(t.work.newton+=1);let e=g[0]-l;if(!f&&Math.abs(e)<=w*l)f=!0,d=T(o,s,u,r,i);else if(Math.abs(e)<=h*l)break;let n=u-e/g[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function A(e,t){let n=e===0?0:Math.min(d,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(d,n):Math.min(d,Math.max(0,n+t.tau))}function j(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=A(n,t),i=Math.sin(r),a=Math.cos(r),o=k(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function M(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=A(i,t),o=Math.sin(a),s=Math.cos(a),c=k(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var N=.45,P=.0025,F=.3,I=.1,ee=1e-12,L={alpha:Math.PI/2,beta:0},R=12,z=2e-13,B=1e-10,V=16384,H=16384,U=1024,W={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},G=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],te=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],K=G.length*2,q=new Float64Array(K),J=new Float64Array(K),ne=new Float64Array(K),re=new Float64Array(K);for(let e=0,t=0;e<G.length;e++)for(let n of[-1,1]){let r=.5*(1+n*G[e]);q[t]=te[e]*.5,J[t]=6*r*(1-r),ne[t]=3*(1-2*r),re[t]=32*r*(1-r)*(1-2*r),t+=1}var ie=new Float64Array(33),ae=new Float64Array(33),oe=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;ie[e]=3*n-2*n*t,ae[e]=3*t*(1-t),oe[e]=16*n*(1-t)*(1-t)}var Y=new Float64Array(K),se=new Float64Array(K),ce=new Float64Array(K),le=new Float64Array(K),ue=new Float64Array(K),de=new Float64Array(K),fe=new Float64Array(K),pe=new Float64Array(K),me=0,he=0;function ge(){return{clamps:me,unconverged:he}}function _e(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ve(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function ye(e){let{a:t,b:n}=_e(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function be(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var xe=e=>e*e*e*(e*(e*6-15)+10);function Se(e,t){let n=Math.floor(e),r=Math.floor(t),i=xe(e-n),a=xe(t-r),o=be(n,r),s=be(n+1,r),c=be(n,r+1),l=be(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function Ce(e,t){let n=ye(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=Se(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var we=e=>Number.isFinite(e)&&e>0?e:0,X=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function Te(e,t){let n=we(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*Ce(e,t)}var Ee=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function De(e,t,n,r){M(e,Ee(t),n,r);let i=Te(e,t);if(i===0)return;let a=_e(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function Oe(e){let t=_e(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function ke(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function Ae(e,t){for(let n=0;n<K;n++){let r=t.ux*ne[n]+t.c*t.gx*re[n],i=t.uy*ne[n]+t.c*t.gy*re[n],a=t.uz*ne[n]+t.c*t.gz*re[n],o=e.dx*J[n],s=e.dy*J[n];le[n]=o,ue[n]=s,de[n]=r,fe[n]=i,pe[n]=a,Y[n]=o*o+s*s,se[n]=o*r+s*i,ce[n]=r*r+i*i+a*a}}function je(e,t,n=!1){let r=0,i=0;for(let t=0;t<K;t++){let a=le[t]+e*de[t],o=ue[t]+e*fe[t],s=e*pe[t],c=n?Math.sqrt(Y[t]+2*e*se[t]+e*e*ce[t]):Math.hypot(a,o,s);r+=q[t]*c,i+=q[t]*(n?se[t]+e*ce[t]:a*de[t]+o*fe[t]+s*pe[t])/c}return t&&(t.quad+=16),[r,i]}function Me(e,t,n){return 4/3*j(e,{...Ee(t),e:n,n:3})[1].z}function Ne(e,t,n,r){let i=0,a=0;for(let t=0;t<K;t++){let o=r.ux*ne[t]+r.c*r.gx*re[t],s=r.uy*ne[t]+r.c*r.gy*re[t],c=r.uz*ne[t]+r.c*r.gz*re[t],l=e.dx*J[t],u=e.dy*J[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=q[t]*m,a+=q[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Pe(e,t,n,r,i,a=n,o=!1){Ae(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<R;e++){let[e,n]=je(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?B:z)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return he+=1,c}var Fe=new Map;function Ie(e,t,n,r){let i=_e(e),a=t.gravity??L;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function Le(e,t){let n=we(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Ie(e,t,n,r):void 0;if(i!==void 0){let e=Fe.get(i);if(e!==void 0)return e}let a=Oe(e),o=(t.L0??O(e,t.H))*(1+n),s=Te(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??L,u=Math.min(1,Math.max(-1,Ce(e,t)/I)),d=ke(a,s,c,l.alpha,l.beta,u),f=Me(e,t,n),p={frame:a,radius:Pe(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Fe.size>=V){let e=Fe.keys().next().value;e!==void 0&&Fe.delete(e)}Fe.set(i,p)}return p}function Re(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ve(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function ze(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Xe(e,t,X(t),W),s=t.n-1,c=ve(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(me+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(me+=1),l[t]={x:v,y,z:b}}return l}function Be(e,t,n,r){let i=Xe(e,t,X(t),W);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(me+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function Ve(e,t,n){let r=Xe(e,t,X(t),W);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(me+=1),e.x=t,e.y=n,e.z=i}}function He(e,t){let n=Le(e,t);if(!n){let n=j(e,Ee(t)),r=Te(e,t);if(r!==0){let t=Oe(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return Ve(e,t,n),n}return ze(e,t,n)}function Ue(e,t,n,r){let i=Le(e,t);i?Re(e,t,n,r,i):De(e,t,n,r),Be(e,t,n,r)}function We(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function Ge(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var Ke=new Map,qe=new Map;function Je(e,t,n){let r=Oe(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??L).alpha,t.lref??80].join(`|`)}function Ye(e,t,n,r){let i=qe.get(r);if(i!==void 0)return i;let a=Oe(e),o=O(e,t.H)*(1+n),s=Me(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*u,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),d=(t.gravity??L).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,ke(a,t,0,d,0,1)),l!==0){let e=ke(a,t,l,d,0,1);S(Ne(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=ke(a,t,l,d,e*p,n);S(Ne(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(qe.size>=U){let e=qe.keys().next().value;e!==void 0&&qe.delete(e)}return qe.set(r,C),C}function Xe(e,t,n,r){let i=we(n),a=Je(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=Ke.get(o);if(s)return s;let c=Oe(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=Ye(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+ee*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=ie[e],n=ae[e],i=oe[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);We(E,a-s,o-s,S),We(E,a+s,o+s,S),We(E,a-s-w*s,o-s-T*s,S),We(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),F=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),F>k&&(k=F);let[I,ee]=Ge(c.nx,-r.light.dir.x/C,d),[L,R]=Ge(c.ny,-r.light.dir.y/C,d),z=a+A*I,B=o+A*L,V=a+A*ee,H=o+A*R;z<l&&(l=z),B<D&&(D=B),V>O&&(O=V),H>k&&(k=H),We(x,l,D,S),We(x,O,k,S)}let D=f===0?0:P*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),Ke.size>=H){let e=Ke.keys().next().value;e!==void 0&&Ke.delete(e)}return Ke.set(o,x),x}function Ze(e,t,n,r,i){let a=Xe(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}function Qe(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function $e(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}var et=7,tt=Float32Array.BYTES_PER_ELEMENT,nt=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;

uniform mat4 uView;
uniform mat4 uProj;

out vec3 vNormal;
out float vAcross;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,rt=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;
layout(location = 4) in vec3 aTangent;

uniform mat4 uView;
uniform mat4 uProj;

out vec3 vNormal;
out float vAcross;
out vec3 vTangent;
out vec3 vWorld;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vTangent = aTangent;
  vWorld = aPosition;
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,it=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vTangent;
in vec3 vWorld;

uniform vec4 uFront;
uniform vec4 uBack;
uniform vec3 uLight;
uniform vec4 uEye;
uniform float uAmbient;
uniform float uDiffuse;
uniform vec4 uSilk;
uniform float uStreak;

out vec4 outColor;

void main() {
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  if (coverage <= 0.0) discard;
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
  float eyeLength = length(toEye);
  vec3 V = eyeLength > 1e-6 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
  float normalLength = length(vNormal);
  vec3 N = normalLength > 1e-9 ? vNormal / normalLength : vec3(0.0, 0.0, 1.0);
  vec4 surface = uFront;
  if (dot(N, V) < 0.0) {
    N = -N;
    surface = uBack;
  }
  float tangentLength = length(vTangent);
  vec3 T = tangentLength > 1e-9 ? vTangent / tangentLength : vec3(1.0, 0.0, 0.0);
  float lit = dot(N, uLight);
  float brightness = uAmbient + uDiffuse * max(0.0, lit);
  vec3 shifted = T + uSilk.z * N;
  float shiftedLength = length(shifted);
  shifted = shiftedLength > 1e-6 ? shifted / shiftedLength : T;
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-6 ? halfway / halfwayLength : V;
  float th = dot(shifted, halfway);
  float sine = sqrt(max(0.0, 1.0 - th * th));
  vec3 normalAcross = N - dot(N, T) * T;
  vec3 halfwayAcross = halfway - dot(halfway, T) * T;
  float normalAcrossLength = length(normalAcross);
  float halfwayAcrossLength = length(halfwayAcross);
  float streakWindow = 1.0;
  if (normalAcrossLength > 1e-6 && halfwayAcrossLength > 1e-6) {
    float angle = acos(clamp(dot(normalAcross / normalAcrossLength, halfwayAcross / halfwayAcrossLength), -1.0, 1.0));
    float ratio = angle / max(uStreak, 1e-6);
    streakWindow = exp(-0.69314718056 * ratio * ratio);
  }
  float highlight = uSilk.x * pow(max(sine, 1e-6), uSilk.y) * smoothstep(-0.2, 0.2, lit) * streakWindow;
  vec3 shaded = clamp(surface.rgb * brightness * (1.0 - uSilk.w * highlight) + vec3(highlight), 0.0, 1.0);
  float opacity = coverage * surface.a;
  outColor = vec4(shaded * opacity, opacity);
}`,at=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;

uniform mat4 uView;
uniform mat4 uProj;

out vec3 vNormal;
out float vAcross;
out vec3 vWorld;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vWorld = aPosition;
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,ot=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vWorld;

uniform vec4 uFront;
uniform vec4 uBack;
uniform vec3 uLight;
uniform vec4 uEye;
uniform float uAmbient;
uniform float uDiffuse;
uniform vec3 uRubber;

out vec4 outColor;

void main() {
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  if (coverage <= 0.0) discard;
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
  float eyeLength = length(toEye);
  vec3 V = eyeLength > 1e-6 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
  float normalLength = length(vNormal);
  vec3 N = normalLength > 1e-9 ? vNormal / normalLength : vec3(0.0, 0.0, 1.0);
  vec4 surface = uFront;
  if (dot(N, V) < 0.0) {
    N = -N;
    surface = uBack;
  }
  float base = uAmbient + uDiffuse * max(0.0, dot(N, uLight));
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-6 ? halfway / halfwayLength : V;
  float highlight = uRubber.x * pow(max(dot(N, halfway), 1e-6), uRubber.y);
  float facing = clamp(abs(dot(N, V)), 0.0, 1.0);
  float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
  float rim = uRubber.z * fresnel * base;
  vec3 shaded = clamp(surface.rgb * base + vec3(highlight + rim), 0.0, 1.0);
  float opacity = coverage * surface.a;
  outColor = vec4(shaded * opacity, opacity);
}`,st=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;

uniform int uShadow;
uniform vec4 uShadowColor;
uniform float uShadowAlpha;
uniform vec4 uFront;
/** P73: 裏の色(dot(N, 視線) < 0 の面)。 */
uniform vec4 uBack;
uniform vec3 uLight;
/** P52: 見る人の向き(世界の座標、V の 3 行目)。真上は (0, 0, 1)。 */
uniform vec3 uViewDir;
uniform float uAmbient;
uniform float uDiffuse;
uniform float uSpecular;
uniform float uShininess;

out vec4 outColor;

void main() {
  // 縁の anti-aliasing: 幅の向きの座標 across(縁で ±1)の 1 画素あたりの変化で縁をぼかす。
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  if (coverage <= 0.0) discard;
  if (uShadow == 1) {
    float shadowOpacity = coverage * uShadowColor.a * uShadowAlpha;
    outColor = vec4(uShadowColor.rgb * shadowOpacity, shadowOpacity);
    return;
  }
  float normalLength = length(vNormal);
  vec3 normal = normalLength > 1e-9 ? vNormal / normalLength : vec3(0.0, 0.0, 1.0);
  // P52: 見る人に見える面の向き(裏が見える所では N を視線の側へ返す。真上では視線 = +z で今の normal.z < 0 と同じ)。
  // P73: 裏が見える所は裏の色で塗る。
  vec4 surface = uFront;
  if (dot(normal, uViewDir) < 0.0) {
    normal = -normal;
    surface = uBack;
  }
  float diffuse = max(0.0, dot(normal, uLight));
  // 丸い線の円柱の陰影と同じ形の明るさ(拡散 + 艶の鋭さの鏡面の照り)。
  float brightness = uAmbient + uDiffuse * diffuse + uSpecular * pow(diffuse, uShininess);
  float opacity = coverage * surface.a;
  outColor = vec4(surface.rgb * brightness * opacity, opacity);
}`;function ct(e,t=nt,n=st){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw e.deleteShader(i),e.deleteShader(a),Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var lt=1e6,ut=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,dt=4,ft=Math.PI/4,pt=-Math.SQRT1_2,mt=-Math.SQRT1_2;function ht(e){let t=ct(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i={program:t,view:r(`uView`),proj:r(`uProj`),shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),specular:r(`uSpecular`),shininess:r(`uShininess`)},a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer(),c=e.createBuffer();if(!a||!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s);for(let t=0;t<4;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let l=new Float32Array,u=new Float32Array,d=new Float32Array(16),f=new Float32Array(16),p=0,m=-1,h=-1,g,_=t=>{let n=et*tt,r=t*n;e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*tt),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*tt),e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(3,1,e.FLOAT,!1,tt,t*tt)},v,y=!1,b=new Float32Array,x=()=>{if(v||y)return v;let t;try{t=ct(e,rt,it)}catch{y=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),y=!0;return}let i=e=>n(t,e);return v={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},v},S,C=!1,w=()=>{if(S||C)return S;let t;try{t=ct(e,at,ot)}catch{C=!0;return}let r=e=>n(t,e);return S={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},S},T=(e,t)=>{if(e.count!==m||t!==h||!g)return!1;if(g===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(g[t]!==e.start[t])return!1;return!0},E=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),p=a,m=t.count,h=n,g=Uint32Array.from(t.start.subarray(0,t.count+1))},D=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>y,rubberUnavailable:()=>C,draw(t,n,r,s,m,h){let g=t.band,v=t.bandNormal;if(!g||!v||!n.band)return;let y=t.start[t.count],S=Math.max(0,n.band.width)/2,C=n.light?.dir.x??pt,O=n.light?.dir.y??mt,k=n.light?.elevation??ft,A=Math.tan(k);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o);let j=y*4*et;l.length<j&&(l=new Float32Array(j),e.bufferData(e.ARRAY_BUFFER,l.byteLength,e.DYNAMIC_DRAW)),T(t,y)||E(t,y);let M=m.view,N=n.view,P=$e(N)||N===void 0;u.length<y*4&&(u=new Float32Array(y*4));let F=0;for(let e=0;e<y;e+=1){let n=t.center[e*3+2]+S;n>F&&(F=n)}let I=1/(t.count+1),ee=y*2*et,L=1/0,R=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*I;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=g[r*3]*S,s=g[r*3+1]*S,c=g[r*3+2]*S;for(let t=0;t<2;t+=1){let d=t===0?1:-1,f=e+d*o,p=i+d*s,m=Math.max(0,a+d*c),h=(r*2+t)*et,g=ee+h,_=m===0?0:m/A;l[h]=f,l[h+1]=p,l[h+2]=m;let b=r*2+t;if(P)u[b]=n+I*(.5-.45*(F>0?m/F:0));else{let e=M[2]*f+M[6]*p+M[10]*m+M[14];u[b]=e,e<L&&(L=e),e>R&&(R=e)}u[y*2+b]=n+I*.5,l[g]=f-C*_,l[g+1]=p-O*_,l[h+3]=v[r*3],l[h+4]=v[r*3+1],l[h+5]=v[r*3+2],l[h+6]=d,l[g+2]=0,l[g+3]=0,l[g+4]=0,l[g+5]=1,l[g+6]=d}}}if(!P&&y>0){let e=R-L,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<y*2;e+=1)u[e]=t===0?.5:.01+(R-u[e])*t}j>0&&e.bufferSubData(e.ARRAY_BUFFER,0,l,0,j),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,u.subarray(0,y*4),e.DYNAMIC_DRAW);let z=h?.name===`silk`?x():void 0,B=h?.name===`rubber`?w():void 0;if(z){b.length<y*6&&(b=new Float32Array(y*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;b[n]=o,b[n+1]=s,b[n+2]=c}}}}e.useProgram(i.program);for(let e=0;e<16;e+=1)d[e]=m.view[e],f[e]=m.proj[e];e.uniformMatrix4fv(i.view,!1,d),e.uniformMatrix4fv(i.proj,!1,f);let V=r(n.shadow.color);e.uniform4f(i.shadowColor,V[0],V[1],V[2],V[3]),e.uniform1f(i.shadowAlpha,n.shadow.alpha);let H=r(n.band.front);e.uniform4f(i.front,H[0],H[1],H[2],H[3]);let U=n.band.back===void 0?H:r(n.band.back);e.uniform4f(i.back,U[0],U[1],U[2],U[3]);let W=Math.cos(k);e.uniform3f(i.light,C*W,O*W,Math.sin(k)),e.uniform3f(i.viewDir,M[2],M[6],M[10]),e.uniform1f(i.ambient,s.ambient),e.uniform1f(i.diffuse,s.diffuse),e.uniform1f(i.specular,s.specular),e.uniform1f(i.shininess,s.shininess),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),p>0&&(e.depthFunc(e.NOTEQUAL),e.uniform1i(i.shadow,1),_(y*2),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS),z&&h?(e.useProgram(z.program),e.uniformMatrix4fv(z.view,!1,d),e.uniformMatrix4fv(z.proj,!1,f),e.uniform4f(z.front,H[0],H[1],H[2],H[3]),e.uniform4f(z.back,U[0],U[1],U[2],U[3]),e.uniform3f(z.light,C*W,O*W,Math.sin(k)),D(z.eye,m,M),e.uniform1f(z.ambient,s.ambient),e.uniform1f(z.diffuse,s.diffuse),e.uniform4f(z.silk,ut(h.gloss,0),Math.max(0,ut(h.sharpness,0)),ut(h.shift,0),Math.min(1,Math.max(0,ut(h.dim,0)))),e.uniform1f(z.streak,Math.max(0,ut(h.streak,lt))),_(0),e.bindBuffer(e.ARRAY_BUFFER,z.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,b.subarray(0,y*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(dt,3,e.FLOAT,!1,3*tt,0),e.enableVertexAttribArray(dt),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.disableVertexAttribArray(dt)):B&&h?(e.useProgram(B.program),e.uniformMatrix4fv(B.view,!1,d),e.uniformMatrix4fv(B.proj,!1,f),e.uniform4f(B.front,H[0],H[1],H[2],H[3]),e.uniform4f(B.back,U[0],U[1],U[2],U[3]),e.uniform3f(B.light,C*W,O*W,Math.sin(k)),D(B.eye,m,M),e.uniform1f(B.ambient,s.ambient),e.uniform1f(B.diffuse,s.diffuse),e.uniform3f(B.rubber,ut(h.gloss,0),Math.max(0,ut(h.sharpness,0)),ut(h.rim,0)),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0)):(e.uniform1i(i.shadow,0),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0))),e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var gt=12,_t=.2;function vt(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function yt(e,t){let n=vt(e.shade,0,1,.8),r=vt(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=.9-.7*n,a.diffuse=.9*n,a.specular=.125*n,a.shininess=vt(e.shininess,1,256,gt),a.ply=vt(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=vt(e.plyContrast,0,1,_t),a.plySlope=vt(e.plySlope,-1,1,.35),a}var bt=`この端末では素材の描き方を作れなかったので、標準で描いている`,xt=Math.PI/180,St=16,Ct=8;function wt(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+St}function Tt(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+St+Ct;return Math.min(60,2*Math.atan(r/(r+i+a+o))/xt)}function Et(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function Dt(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=Qe(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=Tt(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=wt(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*xt/2),a=Math.max(Ct,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var Ot=1e-12;function kt(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var At=new Float64Array,jt=new Uint8Array;function Mt(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);At.length<s*3&&(At=new Float64Array(s*3),jt=new Uint8Array(s));let c=At,l=jt,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>Ot?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){kt(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):kt(a,l,u,i,t)}}function Nt(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var Pt=new Float64Array,Ft=new Float64Array,It=new Float64Array;function Lt(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);It.length<n&&(Pt=new Float64Array(n*3),Ft=new Float64Array(n*3),It=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;Mt(i,n,o,Pt,Ft,It,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=It[e],r[s+4]=Pt[e*3],r[s+5]=Pt[e*3+1],r[s+6]=Pt[e*3+2],r[s+7]=t,r[s+8]=Ft[e*3],r[s+9]=Ft[e*3+1],r[s+10]=Ft[e*3+2];let c=0;o>=2&&e===n?c=-(1+Nt(-Pt[e*3+2])):o>=2&&e===a-1&&(c=1+Nt(Pt[e*3+2])),r[s+11]=c}}return r}function Rt(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function zt(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var Bt=.7,Vt=1e6,Ht=4294967295,Ut=1024,Wt=4,Gt=1.5,Kt=0,qt=1,Jt=2,Yt=3,Xt=4,Zt=5,Qt=7,$t=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D uPoints;
uniform sampler2D uShadowPoints;
uniform int uTexWidth;
uniform int uSides;
uniform int uMode;
// P104: proj × view を 1 つにした行列(頂点ごとの掛け算を減らす)。
uniform mat4 uViewProj;
// 1 世界単位あたりの device px × clip.w(正射影は w = 1、遠近は zoom·D·dpr / w)。
uniform float uPixelScale;
uniform float uRadius;
uniform float uWiden;
uniform float uMinRadius;
uniform vec3 uPlane;
uniform vec4 uEye;
// P87: 縁の帯・影の帯を、半径の外へ広げる幅(device px)。FS が被覆を面積で求める(見た目の太さは変えない)。
uniform float uFringe;
// P104: 描く面の大きさ(device px)。管の軸の点を画面の画素の座標(gl_FragCoord と同じ、左下が原点)へ写す。
uniform vec2 uViewport;

out vec3 vNormal;
out vec3 vTangent;
out vec3 vWorld;
out float vArc;
// P87: 画素の中心の、管の軸からの画面の上の符号付きの距離(device px)と、管の画面の半径(device px)。
out float vAcrossPx;
out float vRadiusPx;
// P104: 縁の帯の、管の半径(世界の単位)と、帯の区間の軸の両端(世界。前の点・その点。三角形の最後の頂点の値を使う)。
out float vRadiusWorld;
flat out vec3 vSegment0;
flat out vec3 vSegment1;
// P104: 帯の区間の両端の環の面の向き(点の接線)。区間の管は、この 2 つの面の間にある(管の三角形と同じ切り分け)。
flat out vec3 vSegmentTangent0;
flat out vec3 vSegmentTangent1;
// P104: 管・蓋の三角形の区間の 2 点の画面の画素の座標と、きつく曲がる印。三角形の最後の頂点(provoking)の値を使う。
flat out vec2 vAxis1;
flat out vec2 vAxis2;
// P106: 2 × 線の番号 + きつく曲がる印(点の texel 1 の w)。線の頭・尾の画面の位置は、FS が内の外の画素でだけ線の表から読む
// (頂点ごとに flat で出すと、細かい三角形の多い管で 1 frame の GPU の時間が増え、再生の頭でコマが落ちた)。
flat out int vLineCode;
flat out float vReach;

vec4 fetchPoint(int texel) {
  return texelFetch(uPoints, ivec2(texel % uTexWidth, texel / uTexWidth), 0);
}

vec4 clipOf(vec3 world) {
  return uViewProj * vec4(world, 1.0);
}

// 1 世界単位あたりの device px(その点で)。
float pixelsAt(vec3 at) {
  // clip の w だけを求める(行列の 4 行目)。
  float w = uViewProj[0][3] * at.x + uViewProj[1][3] * at.y + uViewProj[2][3] * at.z + uViewProj[3][3];
  return uPixelScale / max(w, 1e-6);
}

// 実効の半径(世界の単位): 画面の半径(device px)= max(r·px + 上乗せ, 下限)。
float effectiveRadius(vec3 at) {
  float px = pixelsAt(at);
  if (!(px > 0.0)) return uRadius;
  return max(uRadius * px + uWiden, uMinRadius) / px;
}

// P104: 点 q の軸の点(端は外へ向く接線の向きに沈めた点。main の center と同じ式)。
vec3 axisAt(int q) {
  vec3 at = fetchPoint(q * 3).xyz;
  vec3 tq = fetchPoint(q * 3 + 1).xyz;
  float mq = fetchPoint(q * 3 + 2).w;
  if (mq != 0.0) at += (mq < 0.0 ? -1.0 : 1.0) * (abs(mq) - 1.0) * effectiveRadius(at) * tq;
  return at;
}

// P104: 世界の点の、画面の画素の座標(gl_FragCoord.xy と同じ)。
vec2 screenOf(vec3 world) {
  vec4 clip = clipOf(world);
  return (clip.xy / max(clip.w, 1e-6) * 0.5 + 0.5) * uViewport;
}

void main() {
  vNormal = vec3(0.0, 0.0, 1.0);
  vTangent = vec3(1.0, 0.0, 0.0);
  vWorld = vec3(0.0);
  vArc = 0.0;
  vAcrossPx = 0.0;
  vRadiusPx = 1e6;
  vRadiusWorld = 0.0;
  vSegment0 = vec3(0.0);
  vSegment1 = vec3(0.0);
  vSegmentTangent0 = vec3(0.0);
  vSegmentTangent1 = vec3(0.0);
  vAxis1 = vec2(0.0);
  vAxis2 = vec2(0.0);
  vLineCode = 0;
  vReach = 0.0;
  if (uMode == ${qt}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${Jt} || uMode == ${Qt}) {
    int p = gl_VertexID >> 1;
    float side = (gl_VertexID & 1) == 0 ? 1.0 : -1.0;
    vec4 s = texelFetch(uShadowPoints, ivec2(p % uTexWidth, p / uTexWidth), 0);
    float r = effectiveRadius(vec3(s.xy, 0.0));
    // P87: 影の帯も被覆の帯の分だけ広げ、帯の軸からの距離(device px)を渡す(平たい帯なので線形の補間で正しい)。
    float px = pixelsAt(vec3(s.xy, 0.0));
    float fringe = px > 0.0 ? uFringe / px : 0.0;
    gl_Position = clipOf(vec3(s.xy + side * (r + fringe) * s.zw, 0.0));
    vAcrossPx = side * (r + fringe) * px;
    vRadiusPx = px > 0.0 ? r * px : 1e6;
    return;
  }
  if (uMode == ${Zt}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${Xt};
  // 管・蓋は (点, 角) = (id / N, id % N)。P87 の縁の帯は (点, 側) = (id / 2, id % 2)(影と同じ index)。
  int p = ribbon ? gl_VertexID >> 1 : gl_VertexID / uSides;
  int j = ribbon ? gl_VertexID & 1 : gl_VertexID - p * uSides;
  vec4 c = fetchPoint(p * 3);
  vec3 t = fetchPoint(p * 3 + 1).xyz;
  vec4 uu = fetchPoint(p * 3 + 2);
  vec3 u = uu.xyz;
  float mark = uu.w;
  vec3 center = c.xyz;
  float r = effectiveRadius(center);
  float outward = mark < 0.0 ? -1.0 : 1.0;
  float arc = c.w;
  if (mark != 0.0) {
    // 端の沈め: 外へ向く接線の向きに k·r_eff(k = |印| − 1 ≤ 2)。
    float sink = (abs(mark) - 1.0) * r;
    center += outward * sink * t;
    // P95: 弧長も沈めた分だけ延ばす(端の区間の中で弧長が縮まず、撚りの縞が始点からの弧長に貼り付く)。
    arc += outward * sink;
  }
  float px = pixelsAt(center);
  vRadiusPx = px > 0.0 ? r * px : 1e6;
  vTangent = t;
  vArc = arc;
  if (ribbon) {
    // P87: 縁の帯。軸から画面の横(cross(V, T))へ ±(r + 帯の幅)、目の向きへ r + 帯の幅 だけ寄せる(管の手前の面より手前)。
    vec3 toEye = uEye.w > 0.5 ? uEye.xyz - center : uEye.xyz;
    float eyeLength = length(toEye);
    vec3 eyeDir = eyeLength > 1e-9 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
    vec3 across = cross(eyeDir, t);
    float acrossLength = length(across);
    across = acrossLength > 1e-9 ? across / acrossLength : u;
    float side = j == 0 ? 1.0 : -1.0;
    float fringe = px > 0.0 ? uFringe / px : 0.0;
    vec3 world = center + side * (r + fringe) * across + (r + fringe) * eyeDir;
    gl_Position = clipOf(world);
    vAcrossPx = side * (r + fringe) * px;
    vNormal = across;
    vWorld = world;
    vRadiusWorld = r;
    // 帯の三角形(線ごとの strip)の最後の頂点は、どちらも区間の後の点。区間 (p − 1, p) の軸の両端と環の面の向きを渡す。
    vSegment0 = mark < 0.0 ? center : axisAt(p - 1);
    vSegment1 = center;
    vSegmentTangent0 = mark < 0.0 ? t : fetchPoint((p - 1) * 3 + 1).xyz;
    vSegmentTangent1 = t;
    return;
  }
  // P104: 縁の帯が覆い切らない所の印(FS は、そこでは内の外も捨てずに不透明に描く)。管の三角形の最後の頂点は、
  // 区間 (p, p + 1) の前の環 p にある(描き手が index を回して揃える)ので、区間の 2 枚の三角形は同じ値で判定する。
  // きつく曲がる印と線の頭・尾の画面の位置は、描き手が点ごと・線ごとに 1 度だけ求めて渡す(頂点ごとに求めると重い):
  //   点の texel 1 の w = 2 × 線の番号 + きつく曲がる印、線の表の 2 texel = (頭, 頭の隣)・(尾, 尾の隣) の画面の位置。
  vLineCode = int(fetchPoint(p * 3 + 1).w + 0.5);
  vAxis1 = screenOf(center);
  vAxis2 = screenOf(mark > 0.0 ? center : axisAt(p + 1));
  vReach = vRadiusPx + uFringe;
  vec3 b = cross(t, u);
  float phi = 6.28318530718 * float(j) / float(uSides);
  vec3 n = cos(phi) * u + sin(phi) * b;
  vec3 world = center + r * n;
  // P87: 画素の中心の、軸からの画面の上の距離 = 環の点の、画面の横(cross(V, T))への成分。
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - world : uEye.xyz;
  vec3 across = cross(toEye, t);
  float acrossLength = length(across);
  vAcrossPx = acrossLength > 1e-9 ? dot(r * n, across / acrossLength) * px : 0.0;
  gl_Position = clipOf(world);
  vNormal = uMode == ${Yt} ? outward * t : n;
  vWorld = world;
}`,en=(e,t=!1)=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
${t?`#define RIBBON_DEPTH 1`:``}
uniform int uMode;
uniform vec3 uLight;
uniform vec3 uColor;
uniform vec4 uShading;
uniform vec4 uShadowColor;
// P87: 影を混ぜた後の alpha(布の色の alpha)。
uniform float uFillAlpha;
// P104: 布の色(影の帯は、この上での自分の混ぜを出す)。
uniform vec3 uCloth;
// 撚り: (濃さ, 間隔 × 太さ, 波の強さ, 傾き)。
uniform vec4 uPly;
uniform vec4 uEye;
uniform int uSides;
// P104・P106: 線ごとの 2 texel((頭, 頭の隣)・(尾, 尾の隣) の画面の位置。xy = 端、zw = 隣)。
uniform sampler2D uLines;
uniform int uTexWidth;

in vec3 vNormal;
in vec3 vTangent;
in vec3 vWorld;
in float vArc;
in float vAcrossPx;
in float vRadiusPx;
in float vRadiusWorld;
flat in vec3 vSegment0;
flat in vec3 vSegment1;
flat in vec3 vSegmentTangent0;
flat in vec3 vSegmentTangent1;
flat in vec2 vAxis1;
flat in vec2 vAxis2;
flat in int vLineCode;
flat in float vReach;
out vec4 outColor;
#ifdef RIBBON_DEPTH
uniform mat4 uViewProj;
// P104: 帯の組。0: 被覆 1 の帯(深さも書く)。3: 被覆 1 未満の帯(色だけ)。
uniform int uRibbonPass;
#endif

${e}
// P87: ∫₀ˢ √(1 − x²) dx(断面の円の、目の側の成分の積分)。
float circleArea(float x) {
  return 0.5 * (x * sqrt(max(0.0, 1.0 - x * x)) + asin(clamp(x, -1.0, 1.0)));
}

// P104: 点 q が、端 end.xy から隣 end.zw への向きの逆へ、端より外にあり、端から reach の内にあるか(端の外は縁の帯が覆わない)。
bool beyondEnd(vec2 q, vec4 end, float reach) {
  vec2 inward = end.zw - end.xy;
  return dot(inward, inward) > 1e-12 && dot(q - end.xy, inward) < 0.0 && length(q - end.xy) <= reach;
}

// P104: 点 q の、画面の区間 a → b の上への写しが、区間の外にあるか。管の三角形の区間がそうなる画素(軸に沿って縮んで写る
// 区間の環の張り出し)は、その区間の縁の帯の四角形が覆わない。
bool outsideSegment(vec2 q, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float l = dot(ab, ab);
  if (l < 1e-12) return true;
  // 継ぎ目の画素(隣の区間の帯が覆う。点の横の向きは両側の区間の向きの和に垂直)の 0.5 px は外と見なさない。
  float along = dot(q - a, ab) / sqrt(l);
  return along < -0.5 || along > sqrt(l) + 0.5;
}

// P87: 画素(1×1 の箱)のうち、画面の向き (a, b)(|n.x|, |n.y|、a ≥ b)の座標が t より小さい部分の面積(台形の分布の累積)。
float pixelBelow(float t, float a, float b) {
  float lo = 0.5 * (a + b);
  float mid = 0.5 * (a - b);
  if (t <= -lo) return 0.0;
  if (t >= lo) return 1.0;
  if (b < 1e-4) return clamp(0.5 + t / a, 0.0, 1.0);
  if (t < -mid) return (t + lo) * (t + lo) / (2.0 * a * b);
  if (t > mid) return 1.0 - (lo - t) * (lo - t) / (2.0 * a * b);
  return 0.5 + t / a;
}

// P87: 縁の被覆 = 画素(1×1 の箱)のうち、幅 2·半径 の帯に入る面積。
// 帯の向き(画面の上の、軸に垂直な向き)は vAcrossPx の画面の勾配から取る。
float edgeCoverage() {
  vec2 grad = vec2(dFdx(vAcrossPx), dFdy(vAcrossPx));
  float gradLength = length(grad);
  vec2 axis = gradLength > 1e-6 ? abs(grad / gradLength) : vec2(1.0, 0.0);
  float wide = max(axis.x, axis.y);
  float thin = min(axis.x, axis.y);
  return pixelBelow(vRadiusPx - vAcrossPx, wide, thin) - pixelBelow(-vRadiusPx - vAcrossPx, wide, thin);
}

void main() {
#ifdef RIBBON_DEPTH
  gl_FragDepth = gl_FragCoord.z;
#endif
  if (uMode == ${qt}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${Jt}) {
    float coverage = edgeCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${Qt}) {
    float coverage = edgeCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${Zt}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${Xt};
  // 管の内: 環(内接の N 角形)が画素を丸ごと覆う所(軸からの距離 ≤ 半径·cos(π/N) − 画素の半対角線)。
  // 管・蓋は内だけを不透明に描いて深さを書く。縁の帯は内の外を被覆で混ぜる(P104: 帯の深さは帯の program が書く)。
  // P104: 管は、縁の帯が覆い切らない所(きつく曲がる所・線の端の外・軸に沿って縮んで写る区間の環の張り出し)では、
  // 内の外も捨てずに不透明に描く(穴を空けない。そこでは縁は MSAA の被覆になる)。
  float inner = vRadiusPx * cos(3.14159265359 / float(max(uSides, 3))) - 0.7072;
  // 帯は内の縁から 1 px 内側まで重ねる(管と帯で d の見積もりがわずかに違っても、間に穴を空けない)。
#ifdef RIBBON_DEPTH
  // 帯の program は帯だけを描く(管の印は読まない)。
  float coverage = edgeCoverage();
  if (abs(vAcrossPx) <= inner - 1.0 || coverage <= 0.0) discard;
  float alpha = coverage;
#else
  // P104: 管・蓋は discard しない(深さの検査を後回しにしない)。内の外は alpha 0 で出し、描き手が alpha-to-coverage で
  // 標本を書かせない(色も深さも書かない。discard と同じ形)。帯が覆い切らない所は内の外も不透明。
  // P106: 内の画素は線の表を読まない。内の外の画素だけが読む(判定は P104 と同じ)。
  bool core = abs(vAcrossPx) <= inner;
  if (!core && !ribbon) {
    int line = vLineCode >> 1;
    vec4 head = texelFetch(uLines, ivec2((2 * line) % uTexWidth, (2 * line) / uTexWidth), 0);
    vec4 tail = texelFetch(uLines, ivec2((2 * line + 1) % uTexWidth, (2 * line + 1) / uTexWidth), 0);
    core = (vLineCode & 1) == 1 || beyondEnd(gl_FragCoord.xy, head, vReach) || beyondEnd(gl_FragCoord.xy, tail, vReach)
      || outsideSegment(gl_FragCoord.xy, vAxis1, vAxis2);
  }
  float alpha = core ? 1.0 : 0.0;
#endif
#ifdef RIBBON_DEPTH
  if (ribbon) {
    // P104: 縁の帯の深さ = 画素の視線と、帯の区間の軸のまわりの半径の円柱との、目に近い方の交点の深さ。
    // 視線が円柱に当たらない画素(半径の外の帯の幅)は、軸に最も近づく点から、外れた分だけ奥へ下げる
    // (被覆の大きい帯ほど手前。2 本の帯の前後が items の順によらず決まる)。
    vec3 rayToEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
    float rayLength = length(rayToEye);
    vec3 ray = rayLength > 1e-6 ? rayToEye / rayLength : vec3(0.0, 0.0, 1.0);
    vec3 axis = vSegment1 - vSegment0;
    float axisLength = length(axis);
    vec3 tangentAxis = axisLength > 1e-6 ? axis / axisLength : (length(vTangent) > 1e-6 ? normalize(vTangent) : vec3(1.0, 0.0, 0.0));
    vec3 offset = vWorld - vSegment0;
    vec3 offsetAcross = offset - dot(offset, tangentAxis) * tangentAxis;
    vec3 rayAcross = ray - dot(ray, tangentAxis) * tangentAxis;
    float qa = dot(rayAcross, rayAcross);
    float qb = dot(offsetAcross, rayAcross);
    float qc = dot(offsetAcross, offsetAcross) - vRadiusWorld * vRadiusWorld;
    float along = 0.0;
    bool hit = true;
    if (qa > 1e-8) {
      float disc = qb * qb - qa * qc;
      hit = disc >= 0.0;
      along = hit
        ? (-qb + sqrt(disc)) / qa
        : -qb / qa - (sqrt(max(0.0, qc + vRadiusWorld * vRadiusWorld - qb * qb / qa)) - vRadiusWorld) / sqrt(qa);
    }
    // 当たりは、画素の中心が軸から半径の内にあること(被覆と同じ物差し。無限の円柱だけで決めると、区間の外で円柱に当たる
    // 薄い被覆の帯が手前に入り、奥の面を締め出す)。
    hit = hit && abs(vAcrossPx) <= vRadiusPx;
    vec3 surface = vWorld + along * ray;
    if (!hit && qa > 1e-8) {
      // 当たらない帯: 軸に最も近づく点が布の面より下なら描かない(布の下へ沈めた端など)。上なら、奥へ下げた点が布の面より
      // 下へ出ないように、視線に沿って布の面の少し上へ戻す(布に寝た線の縁が、布の深さに隠れない)。
      vec3 closest = vWorld - (qb / qa) * ray;
      if (closest.z < 0.0) discard;
      float floorZ = 1e-3 * vRadiusWorld;
      if (surface.z < floorZ && ray.z > 1e-6) surface += ((floorZ - surface.z) / ray.z) * ray;
    }
    // 帯の組(uRibbonPass): 0 は被覆 1 の帯だけ、3 は被覆 1 未満の帯だけ。
    if ((uRibbonPass == 3) != (coverage < 1.0)) discard;
    // 交点は、区間の両端の環の面から半径の内(帯の四角形は画面で切るので、継ぎ目の画素の交点は隣の区間へ少しはみ出す)に限る。
    // 曲がる線では、区間を延ばした円柱が本当の面より手前で視線に当たり、別の区間の帯が手前の面を覆う。外の帯は捨てる。
    if (dot(surface - vSegment0, vSegmentTangent0) < -vRadiusWorld || dot(surface - vSegment1, vSegmentTangent1) > vRadiusWorld) discard;
    // 布の面(世界の z = 0)より下は描かない。
    if (surface.z < 0.0) discard;
    vec4 surfaceClip = uViewProj * vec4(surface, 1.0);
    gl_FragDepth = clamp(0.5 + 0.5 * surfaceClip.z / surfaceClip.w, 0.0, 1.0);
  }
#endif
  float tangentLength = length(vTangent);
  vec3 T = tangentLength > 1e-6 ? vTangent / tangentLength : vec3(1.0, 0.0, 0.0);
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
  float eyeLength = length(toEye);
  vec3 V = eyeLength > 1e-6 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
  vec3 N = normalize(vNormal);
  if (ribbon) {
    // 縁の帯の法線(手 3): 断面の円の、画面の横の位置 s = d / 半径 の点の法線は (横 s、目の側 √(1 − s²))。
    // 画素が覆う s の区間 [s0, s1] で平均する(細い管では 1 画素が断面の大きな割合を覆い、点の法線では明暗が跳ぶ)。
    vec3 front = V - dot(V, T) * T;
    float frontLength = length(front);
    front = frontLength > 1e-6 ? front / frontLength : V;
    float inv = 1.0 / max(vRadiusPx, 1e-6);
    float s0 = clamp((vAcrossPx - 0.5) * inv, -1.0, 1.0);
    float s1 = clamp((vAcrossPx + 0.5) * inv, -1.0, 1.0);
    float sMean = 0.5 * (s0 + s1);
    float frontMean = s1 - s0 > 1e-4
      ? (circleArea(s1) - circleArea(s0)) / (s1 - s0)
      : sqrt(max(0.0, 1.0 - sMean * sMean));
    N = normalize(sMean * N + frontMean * front);
  }
  // 撚り(D6): 位相 = 3D の弧長 / (間隔 × 太さ) + 傾き × (N · 画面の横)、画面の横 = normalize(cross(V, T))。
  vec3 side = cross(V, T);
  float sideLength = length(side);
  float acrossN = sideLength > 1e-6 ? dot(N, side / sideLength) : 0.0;
  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);
}`,tn=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse + uShading.z * pow(diffuse, uShading.w);
  return uColor * brightness * ply;
}`,nn=`uniform vec4 uSilk;
uniform float uStreak;

vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float lit = dot(N, uLight);
  float brightness = (uShading.x + uShading.y * max(0.0, lit)) * ply;
  vec3 shifted = T + uSilk.z * N;
  float shiftedLength = length(shifted);
  shifted = shiftedLength > 1e-6 ? shifted / shiftedLength : T;
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-6 ? halfway / halfwayLength : V;
  float th = dot(shifted, halfway);
  float sine = sqrt(max(0.0, 1.0 - th * th));
  vec3 normalAcross = N - dot(N, T) * T;
  vec3 halfwayAcross = halfway - dot(halfway, T) * T;
  float normalAcrossLength = length(normalAcross);
  float halfwayAcrossLength = length(halfwayAcross);
  float streakWindow = 1.0;
  if (normalAcrossLength > 1e-6 && halfwayAcrossLength > 1e-6) {
    float angle = acos(clamp(dot(normalAcross / normalAcrossLength, halfwayAcross / halfwayAcrossLength), -1.0, 1.0));
    float ratio = angle / max(uStreak, 1e-6);
    streakWindow = exp(-0.69314718056 * ratio * ratio);
  }
  float highlight = uSilk.x * pow(max(sine, 1e-6), uSilk.y) * smoothstep(-0.2, 0.2, lit) * streakWindow;
  return clamp(uColor * brightness * (1.0 - uSilk.w * highlight) + vec3(highlight), 0.0, 1.0);
}`,rn=`uniform vec3 uRubber;

vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float base = uShading.x + uShading.y * max(0.0, dot(N, uLight));
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-6 ? halfway / halfwayLength : V;
  float highlight = uRubber.x * pow(max(dot(N, halfway), 1e-6), uRubber.y);
  float facing = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
  float rim = uRubber.z * fresnel * base;
  return clamp(uColor * base * ply + vec3(highlight + rim), 0.0, 1.0);
}`,an=en(tn),on=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,sn=en(nn),cn=en(tn,!0),ln=en(nn,!0),un=en(rn),dn=en(rn,!0),fn=new Map;function pn(e){let t=fn.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=pn(r))}}}let i=n??[0,0,0,1];return fn.set(e,i),i}function mn(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function hn(e,t,n){let r=e.createProgram();if(!r)throw Error(`Unable to create a WebGL program`);let i=[];try{if(i.push(mn(e,e.VERTEX_SHADER,$t)),e.attachShader(r,i[0]),i.push(mn(e,e.FRAGMENT_SHADER,t)),e.attachShader(r,i[1]),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(r)??``}`);n?.push(...i)}catch(t){for(let t of i)e.deleteShader(t);throw e.deleteProgram(r),t}return r}function gn(e,t){let n=[],r=[];try{for(let i of t)n.push(hn(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var _n={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`};function vn(e,t){let n={};for(let r of Object.keys(_n))n[r]=e.getUniformLocation(t,_n[r]);return{program:t,u:n}}function Z(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function yn(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var bn=new Float64Array;function xn(e,t,n){let r=e.center;bn.length<e.count&&(bn=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];bn[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=bn[e]-bn[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}var Sn=new Float64Array,Cn=new Float64Array,wn=new Float64Array(16);function Tn(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function En(e,t,n,r,i){let a=e.start[e.count]??0;Cn.length<a&&(Sn=new Float64Array(a*2),Cn=new Float64Array(a));let o=r.view,s=r.proj,c=wn;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=s[r*4+t]*o[e*4+r];c[e*4+t]=n}let l=c[0],u=c[1],d=c[3],f=c[4],p=c[5],m=c[7],h=c[8],g=c[9],_=c[11],v=c[12],y=c[13],b=c[15],x=i.pixelScale,S=i.radius,C=i.widen,w=i.minRadius,T=i.fringe,E=.5*i.viewportW,D=.5*i.viewportH,O=Sn,k=Cn;for(let e=0,n=0;e<a;e+=1,n+=12){let r=t[n],i=t[n+1],a=t[n+2],o=d*r+m*i+_*a+b,s=x/(o>1e-6?o:1e-6),c=s>0?Math.max(S*s+C,w)/s:S,A=t[n+11];if(A!==0){let e=(A<0?1-Math.abs(A):Math.abs(A)-1)*c;r+=e*t[n+4],i+=e*t[n+5],a+=e*t[n+6]}let j=d*r+m*i+_*a+b,M=j>1e-6?j:1e-6;O[e*2]=((l*r+f*i+h*a+v)/M+1)*E,O[e*2+1]=((u*r+p*i+g*a+y)/M+1)*D,k[e]=x/M*c+T}for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let n=e===i,s=e===a-1,c=n?e:e-1,l=s?e:e+1,u=o&&Tn(O[c*2],O[c*2+1],O[e*2],O[e*2+1],O[l*2],O[l*2+1],k[e],n,s);if(!u&&!s){let t=l===a-1,n=t?l:l+1;u=Tn(O[e*2],O[e*2+1],O[l*2],O[l*2+1],O[n*2],O[n*2+1],k[e],!1,t)}t[e*12+7]=2*r+ +!!u}let s=r*8;o?(n[s]=O[i*2],n[s+1]=O[i*2+1],n[s+2]=O[(i+1)*2],n[s+3]=O[(i+1)*2+1],n[s+4]=O[(a-1)*2],n[s+5]=O[(a-1)*2+1],n[s+6]=O[(a-2)*2],n[s+7]=O[(a-2)*2+1]):n.fill(0,s,s+8)}}function Dn(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=vn(n,hn(n,an)),i=vn(n,hn(n,cn)),a=vn(n,hn(n,on)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=gn(n,[un,dn]);if(!e)p=!0;else return d={...vn(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...vn(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=()=>{if(o||c)return o;let e=gn(n,[sn,ln]);if(!e)c=!0;else return o=vn(n,e[0]),s=vn(n,e[1]),o},_=n.createVertexArray(),v=n.createBuffer(),y=n.createTexture(),b=n.createTexture(),x=n.createTexture();if(!_||!v||!y||!b||!x)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bindVertexArray(null);for(let e of[y,b,x])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let S,C=new Float32Array,w=0,T=new Float32Array,E=0,D=new Float32Array,O=0,k,A=0,j=0,M=0,N=0,P=0,F=new Int32Array,I=new Int32Array,ee=0,L=new Uint32Array,R=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=Ht);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},z,B={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},V=new Float32Array(16),H=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;S&&S.bitmapW===r&&S.bitmapH===i&&S.cssW===a&&S.cssH===o&&S.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,S={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},U=(e,t,r)=>{let i=e.count;if(k&&A===t&&k.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(k[n]!==e.start[n]){t=!1;break}if(t)return}let a=Rt(e.start,i,t);j=a.tubeCount,M=a.capCount,N=a.shadowCount,P=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(P+=+(P>0)+2*n)}let o=new Uint32Array(a.index.length+P);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}F.length<i&&(F=new Int32Array(i),I=new Int32Array(i)),xn(e,r,F),ee=a.index.length,R(e,F,o,ee),L=new Uint32Array(P),n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),k=e.start.slice(0,i+1),A=t},W=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*Wt;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},G=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,Ut,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,r,n.RGBA,n.FLOAT,t)},te=(e,t=!1)=>{let r=pn(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},K=(e,t,n,r)=>{let i=Z((t.mesh??{}).cameraFov,45),a=t.view,o=Z(a?.tilt,0),s=Z(a?.turn,0),c=Z(a?.zoom,1)>0?Z(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,Z(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:Dt({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:Et(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},q=(e,t)=>{z??=ht(n),te(t);let r=S?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=K(e,t,i,a);z.draw(e,t,pn,yt(t,B),o,t.material)},J=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,u=!0,q(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){te(t);return}let d=t.shadow.alpha>0,p=pn(t.background),k=pn(t.shadow.color),A=[0,1,2].every(e=>k[e]<=p[e]),z=[0,1,2].every(e=>k[e]>=p[e]),H=p[3]>=1&&(A||z);te(t,d&&!H);let J=S?.transform??1,ne=n.drawingBufferWidth/J,re=n.drawingBufferHeight/J,ie=t.mesh??{},ae=Z(ie.threadWiden,0),oe=Z(ie.threadMinRadius,Bt),{camera:Y,zoom:se,center:ce,width:le}=K(e,t,ne,re),ue=se*(Y.fov>0?Y.eye:1)*J,de=Y.fov>0?Y.eye/Y.near:1,fe=zt(Math.max(le/2*se*de*J+ae,oe)),pe=Math.max(1,Math.ceil(c*3/Ut)),me=pe>w;me&&(w=pe,C=new Float32Array(Ut*pe*4)),Lt(e,C);let he=Math.max(1,Math.ceil(c/Ut)),ge=he>E;ge&&(E=he,T=new Float32Array(Ut*he*Wt)),W(e,T);let _e=Math.max(1,Math.ceil(2*e.count/Ut)),ve=_e>O;ve&&(O=_e,D=new Float32Array(Ut*_e*4)),En(e,C,D,Y,{pixelScale:ue,radius:le/2,widen:ae,minRadius:oe,fringe:Gt,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight}),U(e,fe,Y.view),xn(e,Y.view,I);let ye=!1;for(let t=0;t<e.count;t+=1)if(I[t]!==F[t]){ye=!0;break}ye&&(F.set(I.subarray(0,e.count)),R(e,F,L,0),n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,ee*Uint32Array.BYTES_PER_ELEMENT,L),n.bindVertexArray(null));let be=l?g():void 0,xe=be?void 0:m?h():void 0,Se=be??xe??r,Ce=(be?s:xe?f:void 0)??i;n.bindVertexArray(_),n.activeTexture(n.TEXTURE0),G(y,C,w,me),n.activeTexture(n.TEXTURE1),G(b,T,E,ge),n.activeTexture(n.TEXTURE2),G(x,D,O,ve),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=Y.proj[r*4+t]*Y.view[e*4+r];V[e*4+t]=n}let we=2*Y.depthExtent,X=yt(t,B),Te=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},Ee=t.light?.elevation??Math.PI/4,De=pn(t.layers[0]?.color??`#ffffff`),Oe=Y.view,ke=pn(t.shadow.color),Ae=({program:e,u:r,rubber:i})=>(n.useProgram(e),n.uniform1i(r.points,0),n.uniform1i(r.shadowPoints,1),n.uniform1i(r.lines,2),n.uniform1i(r.texWidth,Ut),n.uniform1i(r.sides,fe),n.uniformMatrix4fv(r.viewProj,!1,V),n.uniform1f(r.pixelScale,ue),n.uniform1f(r.radius,le/2),n.uniform1f(r.widen,ae),n.uniform1f(r.minRadius,oe),n.uniform3f(r.plane,ce.x,ce.y,we),n.uniform4f(r.shading,X.ambient,X.diffuse,X.specular,X.shininess),n.uniform3f(r.light,Te.x*Math.cos(Ee),Te.y*Math.cos(Ee),Math.sin(Ee)),n.uniform3f(r.color,De[0],De[1],De[2]),n.uniform4f(r.ply,X.ply,X.plyPitch,X.plyContrast,X.plySlope),Y.fov>0?n.uniform4f(r.eye,ce.x+Oe[2]*Y.eye,ce.y+Oe[6]*Y.eye,Oe[10]*Y.eye,1):n.uniform4f(r.eye,Oe[2],Oe[6],Oe[10],0),be&&o&&(n.uniform4f(r.silk,Z(o.gloss,0),Math.max(0,Z(o.sharpness,0)),Z(o.shift,0),Math.min(1,Math.max(0,Z(o.dim,0)))),n.uniform1f(r.streak,Math.max(0,Z(o.streak,Vt)))),xe&&o&&i&&n.uniform3f(i,Z(o.gloss,0),Math.max(0,Z(o.sharpness,0)),Z(o.rim,0)),n.uniform4f(r.shadowColor,ke[0],ke[1],ke[2],ke[3]*t.shadow.alpha),n.uniform1f(r.fringe,Gt),n.uniform3f(r.cloth,p[0],p[1],p[2]),n.uniform2f(r.viewport,n.drawingBufferWidth,n.drawingBufferHeight),r),je=Ae(Ce),Me=Ae(Se);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let Ne=Uint32Array.BYTES_PER_ELEMENT,Pe=(j+M+N)*Ne;d&&H?(n.disable(n.DEPTH_TEST),n.blendEquation(A?n.MIN:n.MAX),n.uniform1i(Me.mode,Qt),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Pe),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST)):d&&(n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(Me.mode,Jt),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Pe),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(Me.fillAlpha,p[3]),n.uniform1i(Me.mode,Zt),n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST)),n.useProgram(a.program),n.uniform1i(a.u.mode,qt),n.uniformMatrix4fv(a.u.viewProj,!1,V),n.uniform3f(a.u.plane,ce.x,ce.y,we),n.depthMask(!0),n.depthFunc(n.LESS),n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),n.useProgram(Se.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(Me.mode,Kt),n.drawElements(n.TRIANGLES,j,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),M>0&&(n.uniform1i(Me.mode,Yt),n.drawElements(n.TRIANGLES,M,n.UNSIGNED_INT,j*Ne)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.useProgram(Ce.program),n.uniform1i(je.mode,Xt),n.uniform1i(je.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Pe),n.uniform1i(je.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Pe)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null)};return H(t),{draw(e,t){J(yn(e),t)},drawTyped:J,resize:H,materialNote:()=>l&&(u?z?.silkUnavailable()??!1:c)||m&&(u?z?.rubberUnavailable()??!1:p)?bt:null}}var On=1.1868238913561442,kn=1.2566370614359172,Q={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:kn,elevation:On,p:.4,k:.07,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowAlpha:.05,shade:.2,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:Bt,light:{dir:a(kn),elevation:On}},{width:An,...jn}=c(Q),Mn=3e3;function Nn(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function Pn(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:Mn},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=Nn(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var Fn=4,In=2**-53;function Ln(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=Fn)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<In&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function Rn(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return Bn(s,e,t,n,r,i,a,o);if(c&&a>0)return zn(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=Nn(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function zn(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function Bn(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return Ln(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function Vn(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Hn(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=Rn(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,Vn(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<Vn(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var Un=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},Wn=e=>Number.isFinite(e)&&e>0?e:Q.stretchSmoothAccel,Gn=e=>e>0&&e<1?e:Q.stretchSmoothDecay,Kn=e=>Number.isFinite(e)&&e>0?e:Q.stretchSmoothSnap;function qn(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Jn(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}function Yn(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;if(a.last!==null&&(a.driver.step(n-a.last),a.driver.idle)){r(a.from.length,a.to);return}a.last=n;let o=Jn(a.seq,a.from,a.to,a.ex,a.L0-a.driver.value);a.current=o,e.draw(o,qn(o),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<qn(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=new Un(Wn(e.accel()),Gn(e.decay()),Kn(e.snap()),{value:Number.isFinite(d)?d:0});f.to(0);let p=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:f,last:null,frame:null,current:c},p||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Xn(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function Zn(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var Qn=e=>Math.min(1,Math.max(0,e)),$n=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function er(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=Zn(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=$n(i,n,a>0?Qn(l/a):1)}return c}let u=o>0;if(u&&s>0)return tr(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?Qn((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=$n(s,n,g),f=g,d+=m,p+=1}return c}function tr(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return Ln(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=$n(n[a],r,i)}),e}function nr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function rr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=er(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,nr(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<nr(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=Xn(c,n,o,e.speed()),m=Zn(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function ir(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var ar=Math.PI/4,or=.8,sr=-Math.SQRT1_2,cr=-Math.SQRT1_2;function lr(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}var ur=256,dr=1.25;function fr(e,t){if(t&&t.front===e)return t;let n=lr(e)??[255,255,255],r=[];for(let e=0;e<ur;e+=1){let t=e/255*dr,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function pr(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function mr(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function hr(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function gr(e,t,n,r,i,a,o){return pr(e,t,n,a,o)-r*hr(e,t,n,i,a,o)}function _r(e,t,n,r,i,a,o){return mr(e,t,n,a,o)-r*hr(e,t,n,i,a,o)}function vr(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??sr,u=n.light?.dir.y??cr,d=n.light?.elevation??ar,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*or,v=.9*or;e.globalAlpha=n.shadow.alpha,e.fillStyle=n.shadow.color;for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(gr(s,a,c,l,f,t,1),_r(s,a,c,u,f,t,1)),e.lineTo(gr(s,a,c,l,f,t,-1),_r(s,a,c,u,f,t,-1)),e.lineTo(gr(s,a,c,l,f,t+1,-1),_r(s,a,c,u,f,t+1,-1)),e.lineTo(gr(s,a,c,l,f,t+1,1),_r(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/dr*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(pr(s,a,c,t,1),mr(s,a,c,t,1)),e.lineTo(pr(s,a,c,t,-1),mr(s,a,c,t,-1)),e.lineTo(pr(s,a,c,t+1,-1),mr(s,a,c,t+1,-1)),e.lineTo(pr(s,a,c,t+1,1),mr(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function yr(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=fr(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:fr(e,i),vr(n,t,a,r,i)}else{n.globalAlpha=a.shadow.alpha,n.strokeStyle=a.shadow.color,n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(ir(e),t)},drawTyped:s,resize:o}}var br=127;function xr(){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0}}}function Sr(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return xr();let i=e.getImageData(0,0,n,r).data,a=n,o=r,s=-1,c=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=br||(a=Math.min(a,t),o=Math.min(o,e),s=Math.max(s,t),c=Math.max(c,e));let l=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>br};return s<a||c<o?{inside:l,bounds:{x:0,y:0,w:0,h:0}}:{inside:l,bounds:{x:a/t,y:o/t,w:(s-a+1)/t,h:(c-o+1)/t}}}async function Cr(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?xr():(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),Sr(i,n))}function wr(e,t,n,r=`machine`){let i=e.length,a=()=>Int32Array.from({length:i},(e,t)=>t);if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=Tr(i,v,y),O=new Int32Array(i),k=0;for(let{c:e}of E)for(let t of Er(e.members,D,h,v,y)){let e=t.length;if(r===`hand`){let n=Math.floor((e-1)/2);for(let e=n;e>=0;--e)O[k++]=t[e];for(let r=n+1;r<e;r+=1)O[k++]=t[r]}else for(let e of t)O[k++]=e}return O}function Tr(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function Er(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function Dr(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function Or(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=Dr(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var kr=2,Ar=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,jr=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/kr),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),Mr=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Nr(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=jr(a);if(n=o,r&&Ar(r.key,o))return Mr(r.result);let s=i.find(e=>Ar(e.key,o));if(s)return Mr(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,kr);return{stitches:Or(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&Ar(n,o)&&(r={key:o,result:e}),Mr(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function Pr(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function Fr(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*Pr(o,r)}})}function Ir(e,t,n){return Math.min(t,n*e)}var Lr=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),Rr=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),zr=12,Br=2e-14;function Vr(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<Lr.length;r++){let s=Lr[r],c=Rr[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function Hr(e,t,n){if(n===0)return e;let[r,i]=Vr(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<zr;n++){let[n,r]=Vr(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=Br*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function Ur(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<zr;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=Br*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function Wr(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=Hr(a,t,n),s=t.n-1,c=Array(t.n);if(n===0){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*Pr(a,t.p)}}return Kr(e,c,t.tau)}let l=Math.abs(r);if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*Pr(a,t.p)}}return Kr(e,c,t.tau)}let u=Math.sqrt(Math.max(0,o*o-i*i)),d=Ur(u/l,t.work),f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*Pr(u,t.p)}}return Kr(e,c,t.tau)}function Gr(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function Kr(e,t,n){return Gr(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function qr(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=Hr(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{Gr(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)};if(i===0){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*Pr(r,t.p))}d();return}let f=Math.abs(a);if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*Pr(a,t.p))}d();return}let p=Math.sqrt(Math.max(0,c*c-o*o)),m=Ur(p/f,t.work),h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*Pr(c,t.p))}d()}var Jr=64,Yr=256,Xr=4,Zr=16,Qr=Math.sin(Math.PI/18),$r=new Float64Array(Jr),ei=new Float64Array(Jr);function ti(){let e=Jr/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=Jr;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=Jr*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);$r[t]=(1-e)*.5,$r[63-t]=(1+e)*.5,ei[t]=r,ei[63-t]=r}}ti();function ni(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<Jr;n++){let o=$r[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*ei[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=Jr),[r,i]}var ri=new Map;function ii(e){let t=ri.get(e);if(t)return t;let n=new Float64Array(Yr),r=new Float64Array(Yr);for(let t=0;t<Yr;t++){let i=t/255;n[t]=Xr*i*i,r[t]=ni(n[t],e)[0]}let i={p:e,r:n,length:r};return ri.set(e,i),i}function ai(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function oi(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?ni(s,r,t.work)[0]:t.L0/o)*(1+n),l=ai(ii(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,Zr);e++){let[e,n]=ni(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function si(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/Qr),a=Math.min(d,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(d,a):Math.min(d,Math.max(0,a+o))}function ci(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return Fr(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=oi(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return Fr(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=si(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*Pr(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function li(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:oi(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=si(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*Pr(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var ui={shape:j,shapeInto:M},di=[[`bezier`,ui],[`catenary`,{shape:Wr,shapeInto:qr}],[`arch`,{shape:ci,shapeInto:li}],[`wire`,{shape:He,shapeInto:Ue,boundInto:Ze}]],fi=new Map(di);function pi(){return di.map(([,e])=>e)}function mi(e){return fi.get(e)??ui}function hi(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var gi=1e-12;function _i(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>gi*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var vi=33,yi=[0,.25,.5,.75,1].map(e=>e*2),bi=[-u,0,u],xi=8,Si=Nr(Cr),Ci=null,wi=0;function Ti(e){return Q}function Ei(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var Di=new WeakMap;function Oi(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var ki=0,Ai,ji;function Mi(e){ji=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Ni=(e,t,n)=>({x:e.x+t,y:e.y+n});function Pi(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function Fi(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function $(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function Ii(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function Li(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function Ri(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function zi(e){return{smax:Ri(e.wireSmax,1,N),lref:Li(e.wireLref,80),alignScale:Li(e.alignScale,60)}}var Bi=/^#[0-9a-f]{6}$/i;function Vi(e){return Li(e.bandWidth,Q.bandWidth)}function Hi(e){return e.section===`band`}function Ui(e){return Hi(e)?Vi(e)/2:e.width/2}function Wi(e){return Hi(e)?0:e.width}function Gi(e){return Hi(e)?Vi(e):e.width}function Ki(e){return e.stretchMode!==`absolute`}function qi(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:Q.stretchUnit}function Ji(e,t,n,r){if(Ki(r)||e===0)return e;let i=O(t,n),a=e*qi(r)/i;return Number.isFinite(a)&&a>0?a:0}function Yi(e,t,n){return Math.max(2,Ji(2,e,t,n))}function Xi(e,t){let n=new Float64Array(e.length);if(!Ki(t)){let e=qi(t);return n.fill(e>0?e:0)}let i=r(t.pitch,Wi(t),t.elevation,t.shadowRatio);for(let r=0;r<e.length;r+=1){let a=e[r],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[r]=O(a,Ir(o,i,t.k))}return n}function Zi(e){let t=mi(e.model)===mi(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:Q.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:Q.gravityBeta,i=2*Math.PI,o=zi(e);return{...e,stretch:$(e.stretch,2),stretchMode:Ki(e)?`ratio`:`absolute`,stretchUnit:qi(e),twist:$(e.twist,u),cameraTilt:$(e.cameraTilt,u),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:Q.cameraTurn,cameraZoom:Li(e.cameraZoom,Q.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:Q.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:Q.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:Q.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:Q.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:Q.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:Q.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:Q.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:Q.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:$(e.align,1),phiMax:$(e.phiMax,d),phiRef:Ii(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:Q.lightAzimuth,stretchDuration:Li(e.stretchDuration,Q.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,stretchSpeed:Li(e.stretchSpeed,Q.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:Q.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:Q.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:Q.stretchSmoothSnap,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:Li(e.stretchLineDuration,Q.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:Q.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:Q.stretchPullDelay,wireSmax:o.smax,wireLref:o.lref,alignScale:o.alignScale,section:Hi(e)?`band`:`round`,bandWidth:Vi(e),bandFront:Bi.test(e.bandFront)?e.bandFront:Q.bandFront,bandBack:Bi.test(e.bandBack)?e.bandBack:Q.bandBack,material:e.material===`silk`||e.material===`rubber`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:Q.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:Q.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:Q.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):Q.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):Q.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:Q.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:Q.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:Q.rubberRim,light:{dir:a(e.lightAzimuth),elevation:e.elevation}}}function Qi(e,t,n,i,a,o,s){let c={dir:n.light.dir,elevation:n.elevation},l=r(n.pitch,Wi(n),c.elevation,n.shadowRatio),f=$(n.phiMax,d),p=$(n.twist,u),m=$(n.align,1),h=zi(n),g=2*Math.PI,_={alpha:(n.gravityAlpha%g+g)%g,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let r=0;r<t.length;r+=1){let u=t[r],d=$(a===void 0?n.stretch:a[r],2);if(s){let e=r*4;if(s.valid[r]===1&&Object.is(s.e[r],d)&&Object.is(s.ends[e],u.a.x)&&Object.is(s.ends[e+1],u.a.y)&&Object.is(s.ends[e+2],u.b.x)&&Object.is(s.ends[e+3],u.b.y))continue;s.valid[r]=1,s.e[r]=d,s.ends[e]=u.a.x,s.ends[e+1]=u.a.y,s.ends[e+2]=u.b.x,s.ends[e+3]=u.b.y}let g=Math.hypot(u.b.x-u.a.x,u.b.y-u.a.y),v=e.start[r],y=Ir(g,l,n.k),b=Ji(d,u,y,n),x=Ki(n)?void 0:Yi(u,y,n);i.shapeInto(u,{e:b,H:y,p:n.p,n:vi,phiMax:f,eRef:Ii(n.phiRef),tau:o===void 0?p*hi(u):o,twist:p,gravity:_,align:m,...h,...x===void 0?{}:{eMax:x}},e.center,v*3);let S=e.start[r+1]-v,C=Math.tan(c.elevation);for(let t=0;t<S;t+=1){let n=v+t,r=v+(t===0?0:t-1),i=v+(t===S-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],s=Math.hypot(a,o),l=-o/s,u=a/s;e.normal[n*2]=l,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/C;e.shadow[n*2]=d-c.dir.x*t,e.shadow[n*2+1]=f-c.dir.y*t}e.lightSide[n]=c.dir.x*l+c.dir.y*u}e.band&&e.bandNormal&&_i(e.center,v,S,u,e.band,e.bandNormal)}}function $i(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function ea(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,Wi(e),e.shadowRatio,e.k,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function ta(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function na(){let e,t,n,r,i=0,a=e=>{let t=e*vi;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(o,s,c){e&&t&&n&&e.count===o.length||(e=a(o.length),t=a(o.length),n={e:new Float64Array(o.length),ends:new Float64Array(o.length*4),valid:new Uint8Array(o.length)},r=void 0);let l=ea(s);ta(r,l)||n.valid.fill(0),r=l,Hi(s)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=o.length;t+=1)e.start[t]=t*vi;return Qi(e,o,s,mi(s.model),c,void 0,n),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal)),t},get allocations(){return i}}}function ra(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function ia(e,t,n,r,i){let a=e.length*vi,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*vi;return Qi(o,e,t,n,r,i),ra(o)}function aa(e){let t=zi(e);return JSON.stringify([e.text,e.font,e.angle,e.pitch,Math.min(e.step,.5),e.mergeGap,e.minLen,Wi(e),e.shadowRatio,e.elevation,e.light.dir.x,e.light.dir.y,e.p,e.k,e.phiMax,Ii(e.phiRef),(e.gravityAlpha%(2*Math.PI)+2*Math.PI)%(2*Math.PI),t.smax,t.lref,Ui(e),Ki(e)?`ratio`:[`absolute`,qi(e)]])}var oa=[0,d/2,d],sa=[0,d];function ca(e){let t=e.start[e.count];return{count:e.count,start:e.start,center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}}function la(e,t,n,r,i){let a=Math.tan(n.elevation),o=n.light.dir.x/a,s=n.light.dir.y/a,c=e[0],l=e[e.length-1],u=t.map(e=>e===d?1:Math.sin(e)),f=t.map(e=>e===d?0:Math.cos(e)),p=new Float64Array(t.length),m=u.map(e=>e*e);for(let n=0;n<c.count;n+=1){let a=c.start[n],h=c.start[n+1],g=a+(h-a-1>>1),_=c.center[g*3+2];for(let t=0;t<e.length;t+=1){let n=e[t],r=Math.hypot(n.center[g*3]-c.center[g*3],n.center[g*3+1]-c.center[g*3+1],n.center[g*3+2]);p[t]=t===0||!(_>0)||!(r>0)?1:r/_}let v=p[e.length-1],y=e=>{let n=Math.sin(e)**2,r=0;for(let e=0;e<t.length;e+=1){let i=p[e];for(let r=0;r<t.length;r+=1)r!==e&&(i*=(n-m[r])/(m[e]-m[r]));r+=i}return r};for(let e=a;e<h;e+=1){let n=c.center[e*3],a=c.center[e*3+1],m=c.center[e*3+2],h=(l.center[e*3]-n)/v,g=(l.center[e*3+1]-a)/v;for(let e=0;e<4;e+=1){let c=e%2==0?n:a,l=e%2==0?h:g,_=e<2?0:-(e%2==0?o:s)*m,v=-1/0,b=1/0;for(let e=0;e<t.length;e+=1){let t=p[e]*(l*u[e]+_*f[e]);v=Math.max(v,c+t),b=Math.min(b,c+t)}let x=Math.hypot(l,_),S=Math.atan2(l,_);S>0&&S<d&&(v=Math.max(v,c+y(S)*x));let C=Math.atan2(-l,-_);C>0&&C<d&&(b=Math.min(b,c-y(C)*x)),e%2==0?(i.minX=Math.min(i.minX,b-r),i.maxX=Math.max(i.maxX,v+r)):(i.minY=Math.min(i.minY,b-r),i.maxY=Math.max(i.maxY,v+r))}}}}function ua(e,t){let n=aa(t);if(Ai?.key===n)return Ai.extent;ki+=1;let i={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},a=Ui(t),o=e.length*vi,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*vi;let c=[];for(let n of pi()){if(!n.boundInto){let r=n===mi(`bezier`)?oa:n===mi(`arch`)?sa:void 0;if(r){for(;c.length<r.length;)c.push(ca(s));let o=c.slice(0,r.length);for(let s of yi)r.forEach((r,i)=>Qi(o[i],e,{...t,stretch:s,phiMax:0},n,void 0,r)),la(o,r,t,a,i);continue}let l=bi;for(let r of yi)for(let c of l){Qi(s,e,{...t,stretch:r},n,void 0,c);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1],r=s.shadow[e*2],o=s.shadow[e*2+1];i.minX=Math.min(i.minX,t-a,r-a),i.minY=Math.min(i.minY,n-a,o-a),i.maxX=Math.max(i.maxX,t+a,r+a),i.maxY=Math.max(i.maxY,n+a,o+a)}}}if(n.boundInto){let o=zi(t),s=r(t.pitch,Wi(t),t.elevation,t.shadowRatio),c={light:{dir:t.light.dir,elevation:t.elevation},width:2*a};for(let r of e){let e=Ir(Math.hypot(r.b.x-r.a.x,r.b.y-r.a.y),s,t.k);n.boundInto(r,{e:0,H:e,p:t.p,n:vi,phiMax:0,eRef:1,gravity:{alpha:t.gravityAlpha,beta:0},smax:o.smax,lref:o.lref},Yi(r,e,t),i,c)}}}return Number.isFinite(i.minX+i.minY+i.maxX+i.maxY)||(i.minX=0,i.minY=0,i.maxX=0,i.maxY=0),Ai={key:n,extent:i},i}async function da(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=Zi(e),{light:a,...o}=i,{stitches:s,bounds:l}=await Si.get(i);Ci?.builds!==Si.builds&&(Ci={builds:Si.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=Ci.orders[u];d||(d=wr(s,i.angle,i.pitch,u),Ci.orders[u]=d,wi+=1);let f=Di.get(r),p=f?.itemsStage??na(),m=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>$(e,2)):void 0,h=p.build(s,i,m),g=ia(s,i,mi(i.model),s.map(()=>0),0),_=ua(s,i),v=_.maxX-_.minX,y=_.maxY-_.minY,b=Math.max(1,Math.ceil(v+16)),x=Math.max(1,Math.ceil(y+16)),S=xi-_.minX+b-(v+16),C=xi-_.minY+x-(y+16),w=Pi(window.devicePixelRatio),T=window.innerWidth,E=window.innerHeight,D={cssW:T,cssH:E,dpr:w,scale:1},O=b<=T&&x<=E,k=O?{cssW:b,cssH:x,dpr:w,scale:1}:D,A=i.cameraTilt,j=i.cameraTurn,M=i.cameraZoom,N=f;if(!N){let e,t=!0,n=!1;try{e=Dn(r,D),n=!0}catch{e=yr(r,k),t=!1}N={renderer:e,webgl:t,viewportWidth:T,viewportHeight:E,dpr:w,rendererBuilds:1,itemsStage:p,localStitches:s,resolved:i,typedItems:h,offsetX:S,offsetY:C,...n?{mesh:!0}:{}},Di.set(r,N)}let P=N.webgl?A:0,F=N.webgl?j:0,I=N.webgl?M:1,ee=P!==0||F!==0||I!==1,L=N.mesh!==void 0,R=L||ee||!O;N.renderer.resize(R?D:k),f&&(N.viewportWidth=T,N.viewportHeight=E,N.dpr=w);let z=Oi(g,Gi(i)),B=z?z.x+S:b/2,V=z?z.y+C:x/2,H=Fi(T/2+i.cameraPanX-B,window.devicePixelRatio),U=Fi(E/2+i.cameraPanY-V,window.devicePixelRatio),W={x:H+B,y:U+V},G=R?W.x-B:0,te=R?W.y-V:0,K=S+G,q=C+te,J={x:B+G,y:V+te},ne=ee||L?{tilt:P,turn:F,zoom:I,center:J}:void 0,re={x:l.x+K,y:l.y+q,w:l.w,h:l.h},ie=s.map(({a:e,b:t})=>({a:Ni(e,K,q),b:Ni(t,K,q)}));$i(h,K,q);let ae=ra(h);r.style.position=`fixed`,r.style.left=`${R?0:H}px`,r.style.top=`${R?0:U}px`,r.style.transform=`none`;let oe={bounds:re,params:o,stitches:ie,items:ae,display:{scale:1,dpr:w,cssW:b,cssH:x},view:{tilt:P,turn:F,zoom:I,center:W},stitchBuilds:Si.builds,stitchOrder:d,stitchOrderBuilds:wi,extentBuilds:ki,rendererBuilds:N.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:p.allocations,wireClamps:ge().clamps,wireUnconverged:ge().unconverged,peek:()=>ra(h),stretches:()=>ha(N),...ji?{setCamera:ji}:{}};return N.stretches=m,N.localStitches=s,N.resolved=i,N.typedItems=h,N.offsetX=K,N.offsetY=q,N.view=ne,N.snapshot=oe,N.renderer.drawTyped(h,Ei(N,c(i))),window.__textweaving=oe,oe}function fa(e){let t=e??document.querySelector(`canvas`);if(t)return Di.get(t)?.webgl}function pa(e){let t=e??document.querySelector(`canvas`);return t?Di.get(t)?.renderer.materialNote?.()??null:null}function ma(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=Di.get(n);r?.snapshot&&(r.snapshot.playing=e)}function ha(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function ga(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=Di.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:$(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>$(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches),$i(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,Ei(a,c(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.peek=()=>ra(a.typedItems),t&&(o.items=ra(a.typedItems)),o}var _a=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowAlpha.shadowRatio.k.shade.ply.plyPitch.plySlope.shininess.plyContrast.step.mergeGap.minLen.alignScale.section.bandWidth.bandFront.bandBack.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),va=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],ya=[[`together`,`同時`],[`sequence`,`順番`]],ba=[[`absolute`,`絶対値`],[`ratio`,`割合`]],xa=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`]],Sa=[[`machine`,`機械`],[`hand`,`手`]],Ca=[[`round`,`丸い線`],[`band`,`帯`]],wa=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`]],Ta=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`]),Ea=e=>Number.isFinite(e)&&e>0;function Da(e){let t=mi(e.model);return va.find(([e])=>mi(e)===t)?.[0]??`bezier`}var Oa=({params:e})=>Da(e)===`wire`&&Ea(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,ka=e=>Oa(e)??(Ea(e.params.twist)||Ea(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),Aa=e=>Oa(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),ja=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,Ma=e=>e.section===`band`,Na=e=>e.material===`silk`,Pa=e=>e.material===`rubber`,Fa=e=>Na(e)?`silk`:Pa(e)?`rubber`:`standard`,Ia=e=>e.stretchOrder!==`together`,La=e=>Number.isFinite(e.stretchPull)?e.stretchPull:Q.stretchPull,Ra=e=>e.stretchMode!==`absolute`,za=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,Ba=e=>za(e)===`speed`,Va=e=>za(e)===`smooth`,Ha=`時間の決め方をなめらか以外にすると効く`,Ua=({params:e})=>Va(e)?null:`時間の決め方をなめらかにすると効く`,Wa={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},Ga=(e,t)=>{let n=Wa[e];return n===void 0||n===(Ma(t)?`band`:`round`)},Ka=e=>ja(e)??(Ea(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),qa=e=>ja(e)??(Pa(e.params)?null:`素材をゴムにすると効く`),Ja=e=>ja(e)??(Na(e.params)?null:`素材をシルク・サテンにすると効く`),Ya=ja,Xa=2*Math.PI,Za=5,Qa=1e3,$a=e=>Math.min(Math.PI/2,Math.max(0,e)),eo=e=>{let t=(e%Xa+Xa)%Xa;return t<Xa?t:0},to={gravityBeta:Oa,twist:({params:e})=>Da(e)!==`wire`||Ea(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:ka,gravityAlpha:Aa,wireSmax:Oa,wireLref:Oa,alignScale:e=>ka(e)??(Ea(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=Da(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:Ea(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=Da(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},shade:ja,ply:ja,plyPitch:Ka,plySlope:Ka,plyContrast:Ka,shininess:e=>ja(e)??(Na(e.params)||Pa(e.params)?`素材を標準にすると効く`:Ea(e.params.shade)?null:`陰影を 0 より大きくすると効く`),material:ja,silkGloss:Ja,silkSharpness:Ja,silkShift:Ja,silkStreak:Ja,silkDim:Ja,rubberGloss:qa,rubberSharpness:qa,rubberRim:qa,cameraDragTilt:Ya,cameraDragTurn:Ya,cameraWheelZoom:Ya,cameraFov:ja,threadWiden:ja,threadMinRadius:ja,stretchDuration:({params:e})=>za(e)===`duration`?Ia(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>za(e)===`duration`?Ia(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>Ba(e)?null:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>Va(e)||Ia(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>Va(e)?Ha:null,stretchPull:({params:e})=>Va(e)?Ha:Ia(e)?null:`伸びの順を順番にすると効く`,stretchPullDelay:({params:e})=>Va(e)?Ha:Ia(e)?La(e)>0?null:`引かれの強さを 0 より大きくすると効く`:`伸びの順を順番にすると効く`,stretchSmoothAccel:Ua,stretchSmoothDecay:Ua,stretchSmoothSnap:Ua,stretchUnit:({params:e})=>Ra(e)?`伸びの測り方を絶対値にすると効く`:null},no={material:e=>Na(e.params)||Pa(e.params)?e.materialNote??null:null};function ro(e,t){return Ta.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function io(e,t){if(typeof Q[e]!=`number`)return t;let n=Number(t);return Ta.has(e)?n*Math.PI/180:n}function ao(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function oo(e,t=e.value){return Number(t).toFixed(ao(e.step))}function so(e,t){let n=Math.max(oo(e,e.min).length,oo(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function co(e,t,n=e.value){t&&(t.textContent=oo(e,n))}function lo(){return n(``,Ti(window.location.search))}function uo(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function fo(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function po(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function mo(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function ho(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 36e5b5f 2026-11-24 20:28`}async function go(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),mo(),ho();let r=e??document.querySelector(`canvas`)??void 0,i=Ti(window.location.search),a=n(window.location.search,i),o=null,s=!1,c=!1,u=document.querySelector(`select[data-param="model"]`);if(!u)throw Error(`Missing control for model`);let d=mi(``);for(let[e,t]of va)(e===`bezier`||mi(e)!==d)&&u.add(new Option(t,e));let f=document.querySelector(`select[data-param="section"]`);if(!f)throw Error(`Missing control for section`);for(let[e,t]of Ca)f.add(new Option(t,e));let p=document.querySelector(`select[data-param="material"]`);if(!p)throw Error(`Missing control for material`);for(let[e,t]of wa)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="stretchOrder"]`);if(!m)throw Error(`Missing control for stretchOrder`);for(let[e,t]of ya)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="stretchMode"]`);if(!h)throw Error(`Missing control for stretchMode`);for(let[e,t]of ba)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="stretchTiming"]`);if(!g)throw Error(`Missing control for stretchTiming`);for(let[e,t]of xa)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="stitchStyle"]`);if(!_)throw Error(`Missing control for stitchStyle`);for(let[e,t]of Sa)_.add(new Option(t,e));let v=document.querySelector(`input[data-param="stretch"]`);if(!v)throw Error(`Missing control for stretch`);v.max=`2`;let y=document.querySelector(`input[data-param="cameraFov"]`);if(!y)throw Error(`Missing control for cameraFov`);y.max=`60`;let b=new Map,x=new Map;for(let e of _a){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);b.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(x.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&so(t,n))}let S=new Map;for(let e of _a){if(!to[e]&&!no[e])continue;let t=b.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),S.set(e,n)}let C=new Map;for(let e of Object.keys(Wa)){let t=b.get(e);C.set(e,t.closest(`.control`)??t.parentElement)}let w=new Set([...C.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),T=()=>{for(let[e,t]of C)t.hidden=!Ga(e,a);for(let e of w){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},E=()=>{T();let e={params:a,webgl:fa(r),materialNote:pa(r)};for(let[t,n]of S){let r=to[t]?.(e)??null,i=b.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??no[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},D=()=>{for(let e of _a){let t=e===`stretchOrder`?Ia(a)?`sequence`:`together`:e===`stretchMode`?Ra(a)?`ratio`:`absolute`:e===`stretchTiming`?za(a):e===`material`?Fa(a):ro(e,a[e]),n=b.get(e);n.value=t;let r=x.get(e);n instanceof HTMLInputElement&&n.type===`range`?co(n,r):r&&(r.textContent=n.value)}},O=null,k=[],A=null,j=()=>{let e=l(a,i),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===A)return;let n=performance.now(),r=k.length<Za?n:k[0]+Qa;if(r>n)O===null&&(O=setTimeout(()=>{O=null,j()},r-n));else{O!==null&&(clearTimeout(O),O=null),k.push(n),k.length>Za&&k.shift();try{history.replaceState(null,``,t),A=t}catch{}}},M=e=>{v.value=String(e),co(v,x.get(`stretch`),e)},N=null,P=Pn({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>ma(e,r),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},M(e),E(),ga(e,t,r)},finish:e=>{a={...a,stretch:e},j()}}),F=Hn({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:Q.stretchLineDuration,pull:()=>La(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:Q.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(N=null),ma(e,r)},draw:(e,t,n)=>{N=n?null:e,a={...a,stretch:t},M(t),E(),ga(t,n,r,n?void 0:e)},finish:e=>{N=null,a={...a,stretch:e},j()}}),I=rr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?Xi(e,Zi(a)):[]},speed:()=>Zi(a).stretchSpeed,together:()=>!Ia(a),pull:()=>La(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:Q.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(N=null),ma(e,r)},draw:(e,t,n)=>{N=n?null:e,a={...a,stretch:t},M(t),E(),ga(t,n,r,n?void 0:e)},finish:e=>{N=null,a={...a,stretch:e},j()}}),ee=Yn({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?Xi(e,Zi(a)):[]},accel:()=>Zi(a).stretchSmoothAccel,decay:()=>Zi(a).stretchSmoothDecay,snap:()=>Zi(a).stretchSmoothSnap,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(N=null),ma(e,r)},draw:(e,t,n)=>{N=n?null:e,a={...a,stretch:t},M(t),E(),ga(t,n,r,n?void 0:e)},finish:e=>{N=null,a={...a,stretch:e},j()}}),L={play(e){Va(a)?ee.play(e):Ba(a)?I.play(e):Ia(a)?F.play(e):P.play(e)},stop(){P.stop(),F.stop(),I.stop(),ee.stop(),N=null}},R=e=>{L.stop(),a={...a,...e},G(!1)},z=[];Mi(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);z.push(t),R(n)}));let B=()=>{let e=fa(r);return e===!0&&Ya({params:a,webgl:e})===null},V=e=>{Number.isFinite(e)&&e>0&&R({cameraZoom:e})},H=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&B())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=B()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){R({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!B())return;R({cameraTilt:$a(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:eo(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(B()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}R(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!B())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;V(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},U=!1,W=async e=>{c=!1,U=!1,s=!0;let t=a,n=z;z=[];try{e&&j(),await da(t,r,N??void 0),r?.setAttribute(`aria-label`,uo(t.text)),E()}finally{s=!1;for(let e of n)e();c&&G(U)}},G=(e=!0)=>{c=!0,e&&(U=!0),o!==null||s||(o=requestAnimationFrame(async()=>{o=null,await W(U)}))};for(let e of _a)b.get(e).addEventListener(`input`,t=>{L.stop();let n=t.currentTarget;a={...a,[e]:io(e,n.value)},e===`background`&&fo(a.background);let r=x.get(e);n instanceof HTMLInputElement&&n.type===`range`?co(n,r):r&&(r.textContent=n.value),E(),G()}),b.get(e).addEventListener(`change`,j);let te=document.querySelector(`[data-stretch-to="max"]`),K=document.querySelector(`[data-stretch-to="min"]`);if(!te||!K)throw Error(`Missing stretch animation buttons`);te.addEventListener(`click`,()=>L.play(2)),K.addEventListener(`click`,()=>L.play(0));let q=document.querySelector(`[data-reset]`);if(!q)throw Error(`Missing reset button`);q.addEventListener(`click`,()=>{L.stop(),a=lo(),fo(a.background),D(),E(),G()}),r&&H(r),window.addEventListener(`resize`,()=>G()),po(window,()=>G()),fo(a.background),D(),E(),await W(!1)}await go();