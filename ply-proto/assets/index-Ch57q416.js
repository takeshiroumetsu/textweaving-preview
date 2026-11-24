(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]);function n(n,r){let i=e(r),a=new URLSearchParams(n.startsWith(`?`)?n.slice(1):n);for(let e of Object.keys(r)){if(t.has(String(e))||!a.has(String(e)))continue;let n=a.get(String(e));if(n===null)continue;let o=r[e];if(typeof o==`string`)i[e]=n;else if(typeof o==`number`&&n.trim()!==``){let t=Number(n);Number.isFinite(t)&&(i[e]=t)}}return i}function r(e,t,n,r){return r*(e-t)*Math.tan(n)}var i=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function a(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...i[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function o(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function s(e,t,n){let r=o(e),i=o(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function c(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,light:{dir:a(e.lightAzimuth),elevation:e.elevation},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:{},shadow:{color:`#17221f`,alpha:e.shadowAlpha},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:s(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:s(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function l(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var u=Math.PI/2,d=Math.PI/2,f=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),p=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),m=12,h=2e-14,g=new Float64Array(2),_=1e8,v=.001;function y(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);g[0]+=o*p,s&&p>0&&(g[1]+=o*((t*c*r*l+n*l*l)/p))}var b=new Float64Array(16),x=new Float64Array(16);for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)b[2*e+n]=.5*(1+t*f[e]),x[2*e+n]=p[e]*.5;var S=new Float64Array(16),C=new Float64Array(16),w=1e-4;function T(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(v,s/(c*r));if(!(l<_))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*f[e]);S[2*e+n]=o+l*Math.sinh(r),C[2*e+n]=p[e]*.5*l*d*Math.cosh(r)}return!0}function E(e,t,n,r,i,a,o,s,c){g[0]=0,g[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)y(e,t,n,r,i,o[c],s[c],a)}function D(e,t,n){return E(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,b,x,n),g[0]}function O(e,t){return D(e,t)}function k(e,t,n,r,i){let a=4*t.H/3;if(n===0)return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?D(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=T(o,s,u,r,i),f=!1;for(let e=0;e<m;e++){E(o,s,u,r,i,!0,d?S:b,d?C:x,t.work),t.work&&(t.work.newton+=1);let e=g[0]-l;if(!f&&Math.abs(e)<=w*l)f=!0,d=T(o,s,u,r,i);else if(Math.abs(e)<=h*l)break;let n=u-e/g[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function A(e,t){let n=e===0?0:Math.min(d,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(d,n):Math.min(d,Math.max(0,n+t.tau))}function j(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=A(n,t),i=Math.sin(r),a=Math.cos(r),o=k(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function M(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=A(i,t),o=Math.sin(a),s=Math.cos(a),c=k(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var N=.45,P=.0025,F=.3,ee=.1,te=1e-12,I={alpha:Math.PI/2,beta:0},L=12,R=2e-13,ne=1e-10,z=16384,B=16384,re=1024,V={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},ie=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],H=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],U=ie.length*2,ae=new Float64Array(U),oe=new Float64Array(U),W=new Float64Array(U),se=new Float64Array(U);for(let e=0,t=0;e<ie.length;e++)for(let n of[-1,1]){let r=.5*(1+n*ie[e]);ae[t]=H[e]*.5,oe[t]=6*r*(1-r),W[t]=3*(1-2*r),se[t]=32*r*(1-r)*(1-2*r),t+=1}var G=new Float64Array(33),K=new Float64Array(33),ce=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;G[e]=3*n-2*n*t,K[e]=3*t*(1-t),ce[e]=16*n*(1-t)*(1-t)}var q=new Float64Array(U),J=new Float64Array(U),Y=new Float64Array(U),X=new Float64Array(U),Z=new Float64Array(U),le=new Float64Array(U),ue=new Float64Array(U),de=new Float64Array(U),fe=0,pe=0;function me(){return{clamps:fe,unconverged:pe}}function he(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ge(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function _e(e){let{a:t,b:n}=he(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function ve(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var ye=e=>e*e*e*(e*(e*6-15)+10);function be(e,t){let n=Math.floor(e),r=Math.floor(t),i=ye(e-n),a=ye(t-r),o=ve(n,r),s=ve(n+1,r),c=ve(n,r+1),l=ve(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function xe(e,t){let n=_e(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=be(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var Q=e=>Number.isFinite(e)&&e>0?e:0,Se=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function Ce(e,t){let n=Q(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*xe(e,t)}var we=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function Te(e,t,n,r){M(e,we(t),n,r);let i=Ce(e,t);if(i===0)return;let a=he(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function Ee(e){let t=he(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function De(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function Oe(e,t){for(let n=0;n<U;n++){let r=t.ux*W[n]+t.c*t.gx*se[n],i=t.uy*W[n]+t.c*t.gy*se[n],a=t.uz*W[n]+t.c*t.gz*se[n],o=e.dx*oe[n],s=e.dy*oe[n];X[n]=o,Z[n]=s,le[n]=r,ue[n]=i,de[n]=a,q[n]=o*o+s*s,J[n]=o*r+s*i,Y[n]=r*r+i*i+a*a}}function ke(e,t,n=!1){let r=0,i=0;for(let t=0;t<U;t++){let a=X[t]+e*le[t],o=Z[t]+e*ue[t],s=e*de[t],c=n?Math.sqrt(q[t]+2*e*J[t]+e*e*Y[t]):Math.hypot(a,o,s);r+=ae[t]*c,i+=ae[t]*(n?J[t]+e*Y[t]:a*le[t]+o*ue[t]+s*de[t])/c}return t&&(t.quad+=16),[r,i]}function Ae(e,t,n){return 4/3*j(e,{...we(t),e:n,n:3})[1].z}function je(e,t,n,r){let i=0,a=0;for(let t=0;t<U;t++){let o=r.ux*W[t]+r.c*r.gx*se[t],s=r.uy*W[t]+r.c*r.gy*se[t],c=r.uz*W[t]+r.c*r.gz*se[t],l=e.dx*oe[t],u=e.dy*oe[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=ae[t]*m,a+=ae[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Me(e,t,n,r,i,a=n,o=!1){Oe(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<L;e++){let[e,n]=ke(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?ne:R)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return pe+=1,c}var Ne=new Map;function Pe(e,t,n,r){let i=he(e),a=t.gravity??I;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function Fe(e,t){let n=Q(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Pe(e,t,n,r):void 0;if(i!==void 0){let e=Ne.get(i);if(e!==void 0)return e}let a=Ee(e),o=(t.L0??O(e,t.H))*(1+n),s=Ce(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??I,u=Math.min(1,Math.max(-1,xe(e,t)/ee)),d=De(a,s,c,l.alpha,l.beta,u),f=Ae(e,t,n),p={frame:a,radius:Me(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Ne.size>=z){let e=Ne.keys().next().value;e!==void 0&&Ne.delete(e)}Ne.set(i,p)}return p}function Ie(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ge(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function Le(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Je(e,t,Se(t),V),s=t.n-1,c=ge(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(fe+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(fe+=1),l[t]={x:v,y,z:b}}return l}function Re(e,t,n,r){let i=Je(e,t,Se(t),V);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(fe+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function ze(e,t,n){let r=Je(e,t,Se(t),V);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(fe+=1),e.x=t,e.y=n,e.z=i}}function Be(e,t){let n=Fe(e,t);if(!n){let n=j(e,we(t)),r=Ce(e,t);if(r!==0){let t=Ee(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return ze(e,t,n),n}return Le(e,t,n)}function Ve(e,t,n,r){let i=Fe(e,t);i?Ie(e,t,n,r,i):Te(e,t,n,r),Re(e,t,n,r)}function He(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function Ue(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var We=new Map,Ge=new Map;function Ke(e,t,n){let r=Ee(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??I).alpha,t.lref??80].join(`|`)}function qe(e,t,n,r){let i=Ge.get(r);if(i!==void 0)return i;let a=Ee(e),o=O(e,t.H)*(1+n),s=Ae(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*u,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),d=(t.gravity??I).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,De(a,t,0,d,0,1)),l!==0){let e=De(a,t,l,d,0,1);S(je(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=De(a,t,l,d,e*p,n);S(je(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(Ge.size>=re){let e=Ge.keys().next().value;e!==void 0&&Ge.delete(e)}return Ge.set(r,C),C}function Je(e,t,n,r){let i=Q(n),a=Ke(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=We.get(o);if(s)return s;let c=Ee(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=qe(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+te*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=G[e],n=K[e],i=ce[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);He(E,a-s,o-s,S),He(E,a+s,o+s,S),He(E,a-s-w*s,o-s-T*s,S),He(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),F=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),F>k&&(k=F);let[ee,te]=Ue(c.nx,-r.light.dir.x/C,d),[I,L]=Ue(c.ny,-r.light.dir.y/C,d),R=a+A*ee,ne=o+A*I,z=a+A*te,B=o+A*L;R<l&&(l=R),ne<D&&(D=ne),z>O&&(O=z),B>k&&(k=B),He(x,l,D,S),He(x,O,k,S)}let D=f===0?0:P*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),We.size>=B){let e=We.keys().next().value;e!==void 0&&We.delete(e)}return We.set(o,x),x}function Ye(e,t,n,r,i){let a=Je(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}var Xe=0;function Ze(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function Qe(e,t,n,r,i,a,o){let s=r-t,c=i-n;return o[0]=t+e[0]*s+e[1]*c+e[2]*a,o[1]=n+e[3]*s+e[4]*c+e[5]*a,o[2]=e[6]*s+e[7]*c+e[8]*a,Xe+=1,o}function $e(e,t,n,r,i,a){let o=r-t,s=i-n;return a[0]=t+e[0]*o+e[1]*s,a[1]=n+e[3]*o+e[4]*s,Xe+=1,a}function et(e,t,n,r){let i=r??new Float64Array(3),a=Math.cos(n),o=t.x*a,s=t.y*a,c=Math.sin(n);return e[0]===1&&e[1]===0&&e[2]===0&&e[3]===0&&e[4]===1&&e[5]===0&&e[6]===0&&e[7]===0&&e[8]===1?(i[0]=o,i[1]=s,i[2]=c,i):(i[0]=e[0]*o+e[1]*s+e[2]*c,i[1]=e[3]*o+e[4]*s+e[5]*c,i[2]=e[6]*o+e[7]*s+e[8]*c,i)}function tt(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}var nt=7,rt=Float32Array.BYTES_PER_ELEMENT,it=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;

uniform vec2 uNaturalSize;

out vec3 vNormal;
out float vAcross;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vec2 clip = aPosition.xy / uNaturalSize * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, aPosition.z * 2.0 - 1.0, 1.0);
}`,at=`#version 300 es
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
}`,ot=`#version 300 es
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
}`,st=`#version 300 es
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
}`,ct=`#version 300 es
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
}`,lt=`#version 300 es
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
}`,ut=`#version 300 es
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
}`;function dt(e,t=it,n=ut){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var ft=1e6,pt=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,mt=4,ht=Math.PI/4,gt=-Math.SQRT1_2,_t=-Math.SQRT1_2;function vt(e){let t=dt(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i=r(`uNaturalSize`),a={program:t,shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),specular:r(`uSpecular`),shininess:r(`uShininess`)},o=e.createVertexArray(),s=e.createBuffer(),c=e.createBuffer();if(!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(o),e.bindBuffer(e.ARRAY_BUFFER,s),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c);for(let t=0;t<3;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let l=new Float32Array,u,d=new Float32Array,f=!1,p=new Float32Array(16),m=new Float32Array(16),h=new Float64Array(3),g=new Float64Array(2),_=0,v=-1,y=-1,b,x=t=>{let n=nt*rt,r=t*n;e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*rt),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*rt)},S=()=>{if(u)return u;let t=dt(e,at),r=e=>n(t,e),i=e.createBuffer();if(!i)throw Error(`Unable to create WebGL band depth buffer`);return u={program:t,shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),specular:r(`uSpecular`),shininess:r(`uShininess`),view:r(`uView`),proj:r(`uProj`),depthBuffer:i},u},C,w=!1,T=new Float32Array,E=()=>{if(C||w)return C;let t;try{t=dt(e,ot,st)}catch{w=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),w=!0;return}let i=e=>n(t,e);return C={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},C},D,O=!1,k=()=>{if(D||O)return D;let t;try{t=dt(e,ct,lt)}catch{O=!0;return}let r=e=>n(t,e);return D={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},D},A=(t,n)=>{e.bindBuffer(e.ARRAY_BUFFER,s),x(n),e.bindBuffer(e.ARRAY_BUFFER,t.depthBuffer),e.vertexAttribPointer(3,1,e.FLOAT,!1,rt,n*rt)},j=(e,t)=>{if(e.count!==v||t!==y||!b)return!1;if(b===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(b[t]!==e.start[t])return!1;return!0},M=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),_=a,v=t.count,y=n,b=Uint32Array.from(t.start.subarray(0,t.count+1))},N=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>w,rubberUnavailable:()=>O,draw(t,n,r,c,u,v,y,b){let C=t.band,w=t.bandNormal;if(!C||!w||!n.band)return;let D=t.start[t.count],O=Math.max(0,n.band.width)/2,P=n.light?.dir.x??gt,F=n.light?.dir.y??_t,ee=n.light?.elevation??ht,te=Math.tan(ee);e.bindVertexArray(o),e.bindBuffer(e.ARRAY_BUFFER,s);let I=D*4*nt;l.length<I&&(l=new Float32Array(I),e.bufferData(e.ARRAY_BUFFER,l.byteLength,e.DYNAMIC_DRAW)),j(t,D)||M(t,D);let L=n.view,R=y?.view,ne=R===void 0&&!tt(L)&&L!==void 0,z=tt(L)||L===void 0;R&&d.length<D*4&&(d=new Float32Array(D*4));let B=ne?Ze(L.tilt,L.turn):void 0,re=L?.zoom??1,V=Number.isFinite(re)&&re>0?re:1,ie=L?.center.x??0,H=L?.center.y??0,U=0;for(let e=0;e<D;e+=1){let n=t.center[e*3+2]+O;n>U&&(U=n)}let ae=1/(t.count+1),oe=D*2*nt,W=1/0,se=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*ae;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=C[r*3]*O,s=C[r*3+1]*O,c=C[r*3+2]*O;for(let t=0;t<2;t+=1){let u=t===0?1:-1,f=e+u*o,p=i+u*s,m=Math.max(0,a+u*c),_=(r*2+t)*nt,v=oe+_,y=m===0?0:m/te;if(R){l[_]=f,l[_+1]=p,l[_+2]=m;let e=r*2+t;if(z)d[e]=n+ae*(.5-.45*(U>0?m/U:0));else{let t=R[2]*f+R[6]*p+R[10]*m+R[14];d[e]=t,t<W&&(W=t),t>se&&(se=t)}d[D*2+e]=n+ae*.5,l[v]=f-P*y,l[v+1]=p-F*y}else if(B){Qe(B,ie,H,f,p,m,h),l[_]=ie+V*(h[0]-ie),l[_+1]=H+V*(h[1]-H);let e=V*h[2];l[_+2]=e,e<W&&(W=e),e>se&&(se=e),$e(B,ie,H,f-P*y,p-F*y,g),l[v]=ie+V*(g[0]-ie),l[v+1]=H+V*(g[1]-H)}else l[_]=f,l[_+1]=p,l[_+2]=n+ae*(.5-.45*(U>0?m/U:0)),l[v]=f-P*y,l[v+1]=p-F*y;l[_+3]=w[r*3],l[_+4]=w[r*3+1],l[_+5]=w[r*3+2],l[_+6]=u,l[v+2]=n+ae*.5,l[v+3]=0,l[v+4]=0,l[v+5]=1,l[v+6]=u,R&&(l[v+2]=0)}}}if(R&&!z&&D>0){let e=se-W,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<D*2;e+=1)d[e]=t===0?.5:.01+(se-d[e])*t}if(B&&D>0){let e=se-W,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<D*2;e+=1){let n=e*nt+2;l[n]=t===0?.5:.01+(se-l[n])*t}}I>0&&e.bufferSubData(e.ARRAY_BUFFER,0,l,0,I);let G=y&&R?S():void 0;G?(e.bindBuffer(e.ARRAY_BUFFER,G.depthBuffer),e.bufferData(e.ARRAY_BUFFER,d.subarray(0,D*4),e.DYNAMIC_DRAW),f||=(e.enableVertexAttribArray(3),!0)):f&&=(e.disableVertexAttribArray(3),!1);let K=G??a,ce=G&&b?.name===`silk`?E():void 0,q=G&&b?.name===`rubber`?k():void 0;if(ce){T.length<D*6&&(T=new Float32Array(D*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;T[n]=o,T[n+1]=s,T[n+2]=c}}}}if(e.useProgram(K.program),G&&y){for(let e=0;e<16;e+=1)p[e]=y.view[e],m[e]=y.proj[e];e.uniformMatrix4fv(G.view,!1,p),e.uniformMatrix4fv(G.proj,!1,m)}else e.uniform2f(i,r,c);let J=u(n.shadow.color);e.uniform4f(K.shadowColor,J[0],J[1],J[2],J[3]),e.uniform1f(K.shadowAlpha,n.shadow.alpha);let Y=u(n.band.front);e.uniform4f(K.front,Y[0],Y[1],Y[2],Y[3]);let X=n.band.back===void 0?Y:u(n.band.back);e.uniform4f(K.back,X[0],X[1],X[2],X[3]);let Z=Math.cos(ee);e.uniform3f(K.light,P*Z,F*Z,Math.sin(ee)),R?e.uniform3f(K.viewDir,R[2],R[6],R[10]):B?e.uniform3f(K.viewDir,B[6],B[7],B[8]):e.uniform3f(K.viewDir,0,0,1),e.uniform1f(K.ambient,v.ambient),e.uniform1f(K.diffuse,v.diffuse),e.uniform1f(K.specular,v.specular),e.uniform1f(K.shininess,v.shininess),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),_>0&&(e.depthFunc(e.NOTEQUAL),e.uniform1i(K.shadow,1),G?A(G,D*2):x(D*2),e.drawElements(e.TRIANGLES,_,e.UNSIGNED_INT,0),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS),ce&&G&&y&&R&&b?(e.useProgram(ce.program),e.uniformMatrix4fv(ce.view,!1,p),e.uniformMatrix4fv(ce.proj,!1,m),e.uniform4f(ce.front,Y[0],Y[1],Y[2],Y[3]),e.uniform4f(ce.back,X[0],X[1],X[2],X[3]),e.uniform3f(ce.light,P*Z,F*Z,Math.sin(ee)),N(ce.eye,y,R),e.uniform1f(ce.ambient,v.ambient),e.uniform1f(ce.diffuse,v.diffuse),e.uniform4f(ce.silk,pt(b.gloss,0),Math.max(0,pt(b.sharpness,0)),pt(b.shift,0),Math.min(1,Math.max(0,pt(b.dim,0)))),e.uniform1f(ce.streak,Math.max(0,pt(b.streak,ft))),A(G,0),e.bindBuffer(e.ARRAY_BUFFER,ce.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,T.subarray(0,D*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(mt,3,e.FLOAT,!1,3*rt,0),e.enableVertexAttribArray(mt),e.drawElements(e.TRIANGLES,_,e.UNSIGNED_INT,0),e.disableVertexAttribArray(mt)):q&&G&&y&&R&&b?(e.useProgram(q.program),e.uniformMatrix4fv(q.view,!1,p),e.uniformMatrix4fv(q.proj,!1,m),e.uniform4f(q.front,Y[0],Y[1],Y[2],Y[3]),e.uniform4f(q.back,X[0],X[1],X[2],X[3]),e.uniform3f(q.light,P*Z,F*Z,Math.sin(ee)),N(q.eye,y,R),e.uniform1f(q.ambient,v.ambient),e.uniform1f(q.diffuse,v.diffuse),e.uniform3f(q.rubber,pt(b.gloss,0),Math.max(0,pt(b.sharpness,0)),pt(b.rim,0)),A(G,0),e.drawElements(e.TRIANGLES,_,e.UNSIGNED_INT,0)):(e.uniform1i(K.shadow,0),G?A(G,0):x(0),e.drawElements(e.TRIANGLES,_,e.UNSIGNED_INT,0))),e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var yt=12,bt=.2,xt=Math.PI/4,St=-Math.SQRT1_2,Ct=-Math.SQRT1_2,wt=12,Tt=.001,Et=Float32Array.BYTES_PER_ELEMENT;function Dt(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function Ot(e,t){let n=Dt(e.shade,0,1,.8),r=Dt(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=.9-.7*n,a.diffuse=.9*n,a.specular=.125*n,a.shininess=Dt(e.shininess,1,256,yt),a.ply=Dt(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=Dt(e.plyContrast,0,1,bt),a.plySlope=Dt(e.plySlope,-1,1,.35),a}var kt=`#version 300 es
layout(location = 0) in vec4 aSegment;
layout(location = 1) in vec4 aInfo;
layout(location = 2) in vec4 aDepth;

uniform vec2 uNaturalSize;
uniform float uPixelsPerUnit;
uniform float uDepthBias;
// P49: the shadow pass off the top view lays its capsules in cloth coordinates and maps only the
// position on screen through the cloth-to-screen affine (screen = uClothCenter + uClothAffine * (p - c)).
uniform highp int uClothShadow;
uniform mat2 uClothAffine;
uniform vec2 uClothCenter;

out vec2 vPosition;
flat out vec4 vSegment;
flat out float vHalfWidth;
flat out vec2 vArc;

void main() {
  vec2 p0 = aSegment.xy;
  vec2 p1 = aSegment.zw;
  vec2 delta = p1 - p0;
  float lengthOfSegment = length(delta);
  vec2 along = lengthOfSegment > 1e-6 ? delta / lengthOfSegment : vec2(1.0, 0.0);
  vec2 across = vec2(-along.y, along.x);
  float extent = aInfo.x + 1.0 / uPixelsPerUnit;
  float extentAlong = extent;
  float extentAcross = extent;
  if (uClothShadow == 1) {
    // Pad by 2 screen pixels past the capsule on screen (the 1 px edge ramp plus a pixel of slack for the
    // derivative estimate), measured across each edge of the quad.
    float area = max(abs(determinant(uClothAffine)), 1e-6);
    extentAlong = aInfo.x + 2.0 * length(uClothAffine * across) / (uPixelsPerUnit * area);
    extentAcross = aInfo.x + 2.0 * length(uClothAffine * along) / (uPixelsPerUnit * area);
  }
  int vertex = gl_VertexID;
  vec2 position = (vertex < 2 ? p0 - along * extentAlong : p1 + along * extentAlong)
    + across * extentAcross * ((vertex == 0 || vertex == 2) ? 1.0 : -1.0);

  vPosition = position;
  vSegment = aSegment;
  vHalfWidth = aInfo.x;
  vArc = aInfo.yw;
  // P50: window depth is affine on screen: aInfo.z at p0 plus aDepth.xy (the gradient) times the offset.
  // Shadows and the item-order path pass a zero gradient (constant depth per line).
  float depth = clamp(aInfo.z + dot(aDepth.xy, position - p0) + uDepthBias, 0.0, 1.0);
  vec2 screen = uClothShadow == 1 ? uClothCenter + uClothAffine * (position - uClothCenter) : position;
  vec2 clip = screen / uNaturalSize * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, depth * 2.0 - 1.0, 1.0);
}`,At=`#version 300 es
precision highp float;

in vec2 vPosition;
flat in vec4 vSegment;
flat in float vHalfWidth;
flat in vec2 vArc;

uniform float uPixelsPerUnit;
uniform int uShadow;
// Shared with the vertex stage, so the precision must match (the vertex default is highp).
uniform highp int uClothShadow;
uniform float uShadowAlpha;
uniform float uPly;
uniform float uAmbient;
uniform float uDiffuse;
uniform float uSpecular;
uniform float uShininess;
uniform float uPlyPitch;
uniform float uPlyContrast;
uniform float uPlySlope;
uniform vec2 uLightDirection;
uniform float uLightElevation;
uniform vec3 uLightView;
uniform int uUseViewLight;
uniform vec4 uColor;

out vec4 outColor;

void main() {
  vec2 fromStart = vPosition - vSegment.xy;
  vec2 segment = vSegment.zw - vSegment.xy;
  float along = clamp(dot(fromStart, segment) / max(dot(segment, segment), 1e-12), 0.0, 1.0);
  vec2 fromSegment = fromStart - segment * along;
  float signedDistance = (vHalfWidth * vHalfWidth - dot(fromSegment, fromSegment))
    / max(2.0 * vHalfWidth, 1e-6);
  // P49: the cloth-space shadow converts its edge to screen pixels by the screen gradient of the linear cloth
  // distance (its length, not the L1 fwidth, so a slanted edge is not widened). The quadratic distance keeps the
  // top view's ramp shape, and the top view keeps the fixed scale.
  vec2 distanceGradient = vec2(dFdx(length(fromSegment)), dFdy(length(fromSegment)));
  float edge = max(length(distanceGradient), 1e-6);
  float coverage = clamp(
    (uClothShadow == 1 ? signedDistance / edge : signedDistance * uPixelsPerUnit) + 1.0, 0.0, 1.0);
  if (coverage <= 0.0) discard;

  float opacity = coverage * uColor.a * (uShadow == 1 ? uShadowAlpha : 1.0);
  vec3 color = uColor.rgb;
  if (uShadow == 0) {
    float segmentLength = length(segment);
    vec2 tangent = segmentLength > 1e-6 ? segment / segmentLength : vec2(1.0, 0.0);
    vec2 across = vec2(-tangent.y, tangent.x);
    float crossSection = clamp(dot(fromSegment, across) / max(vHalfWidth, 1e-6), -1.0, 1.0);
    float surfaceHeight = sqrt(max(0.0, 1.0 - crossSection * crossSection));
    float lightAcross = uUseViewLight == 1
      ? dot(uLightView.xy, across)
      : dot(uLightDirection, across) * cos(uLightElevation);
    float lightHeight = uUseViewLight == 1 ? uLightView.z : sin(uLightElevation);
    float diffuse = max(0.0, crossSection * lightAcross + surfaceHeight * lightHeight);
    float specular = pow(diffuse, uShininess);
    float brightness = uAmbient + uDiffuse * diffuse + uSpecular * specular;
    float arc = mix(vArc.x, vArc.y, along);
    float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (arc / uPlyPitch + crossSection * uPlySlope));
    brightness *= 1.0 - uPly * uPlyContrast * plyWave;
    color *= brightness;
  }
  outColor = vec4(color * opacity, opacity);
}`,jt=`1e-3`,Mt=`uniform float uDepthScale;
uniform int uDepthPass;
uniform float uDepthBack;
uniform int uEdgePass;
flat in float vDepth0;
// P82(issue #144): 布の面(世界の高さ z = 0)で管を切る。窓の深さの原点 uDepthOrigin(= nearest + 0.005 / uDepthScale)から、
// 窓の深さ w の点の奥行き d = uDepthOrigin − w / uDepthScale。uClothPlane は画面の点 (x', y') と奥行き d から世界の高さを出す一次式
// z = uClothPlane.x·x' + uClothPlane.y·y' + uClothPlane.z·d + uClothPlane.w(視点の行列の第 3 列 ÷ 拡大。真上では z = d)。
uniform float uDepthOrigin;
uniform vec4 uClothPlane;
// P84(issue #148): 検査の口(window.__twDepthJitter)。窓の深さに、画素と draw の通し番号 uDepthDraw から決まる揺らぎ
// n ∈ [−uDepthJitter, +uDepthJitter] を足し、実機の GPU で同じ画素の深さの計算が draw の間でわずかに食い違うことを真似る。
// 既定は 0(揺らぎの項が 0 になり、描画は画素まで変わらない)。
uniform float uDepthJitter;
uniform float uDepthDraw;
float depthJitter() {
  vec2 seed = gl_FragCoord.xy + vec2(7.0, 3.0) * uDepthDraw;
  return uDepthJitter * (2.0 * fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453) - 1.0);
}

// q は区間の始め p0 からの画面の位置、s は画面の区間、dz は区間の d の差、r は半径。戻りは表面の d − d(p0)。
float tubeFront(vec2 q, vec2 s, float dz, float r) {
  float r2 = r * r;
  float L2 = dot(s, s);
  if (L2 < 1e-12) {
    return max(dz, 0.0) + sqrt(max(0.0, r2 - dot(q, q)));
  }
  float L = sqrt(L2);
  float a = dot(q, s) / L;
  float side = (q.x * s.y - q.y * s.x) / L;
  float R2 = max(0.0, r2 - side * side);
  float R = sqrt(R2);
  float g = dz / L;
  float xStar = -g * R / sqrt(1.0 + g * g);
  float lo = max(0.0, (a - R) / L);
  float hi = max(lo, min(1.0, (a + R) / L));
  float t = clamp((a - xStar) / L, lo, hi);
  float x = a - t * L;
  return dz * t + sqrt(max(0.0, R2 - x * x));
}

// P82: 布の面で切る判定に使う表面の d − d(p0)。tubeFront と同じだが、区間の終わりの端の外(a − R > L。端の球の外の縁のぼかしの
// 画素で、tubeFront の t は 1 を越えて区間の外へ外挿される)では、区間の終わりの軸の点(t = 1、d の差 = dz)に留める。表面の無い縁の
// 画素を外挿の高さで切らない(降りて布に着く線の端の縁が、真上でも欠けていた)。tubeFront(深さ)の値は変えない。
float tubeCutFront(vec2 q, vec2 s, float dz, float r, float front) {
  float L2 = dot(s, s);
  if (L2 < 1e-12) return front;
  float L = sqrt(L2);
  float a = dot(q, s) / L;
  float side = (q.x * s.y - q.y * s.x) / L;
  float R = sqrt(max(0.0, r * r - side * side));
  return a - R > L ? dz : front;
}

// 奥へ寄せる量: back × (1 + 1/|a_xy|)(上限 8 × back)。急な区間(画面に対して立った区間)の円柱の膨らみ r/|a_xy| は、継ぎ目で
// 隣の区間の面より r を越えて手前に出るので、その分も逃がす。
float tubeBack(vec2 s, float dz, float back) {
  float L = length(s);
  float steep = L > 1e-6 ? sqrt(L * L + dz * dz) / L : 7.0;
  return back * (1.0 + min(steep, 7.0));
}
`,Nt=`  float surfaceFront = tubeFront(fromStart, segment, vDz, vHalfWidth);
  float surfaceD = uDepthOrigin - vDepth0 / uDepthScale
    + tubeCutFront(fromStart, segment, vDz, vHalfWidth, surfaceFront);
  if (dot(uClothPlane.xy, vPosition) + uClothPlane.z * surfaceD + uClothPlane.w < -${jt}) discard;
  if (uDepthPass == 1 && coverage < 0.5) discard;
  gl_FragDepth = clamp(
    vDepth0 - (surfaceFront - tubeBack(segment, vDz, uDepthBack)) * uDepthScale + depthJitter(),
    0.0, 1.0);
`,Pt=`  if (coverage <= 0.0) discard;
`,Ft=kt.replace(`flat out vec2 vArc;
`,`flat out vec2 vArc;
flat out float vDepth0;
flat out float vDz;
`).replace(`  vArc = aInfo.yw;
`,`  vArc = aInfo.yw;
  vDepth0 = aInfo.z;
  vDz = aDepth.z;
`),It=`vec3 tubeNormal(vec2 q, vec2 s, float dz, float r) {
  float r2 = r * r;
  float L2 = dot(s, s);
  vec2 offset = q;
  float height;
  if (L2 < 1e-12) {
    height = sqrt(max(0.0, r2 - dot(q, q)));
  } else {
    float L = sqrt(L2);
    float a = dot(q, s) / L;
    float side = (q.x * s.y - q.y * s.x) / L;
    float R2 = max(0.0, r2 - side * side);
    float R = sqrt(R2);
    float g = dz / L;
    float xStar = -g * R / sqrt(1.0 + g * g);
    float lo = max(0.0, (a - R) / L);
    float hi = max(lo, min(1.0, (a + R) / L));
    float t = clamp((a - xStar) / L, lo, hi);
    float x = a - t * L;
    offset = q - s * t;
    height = sqrt(max(0.0, R2 - x * x));
  }
  vec3 normal = vec3(offset, height);
  float size = length(normal);
  return size > 1e-6 ? normal / size : vec3(0.0, 0.0, 1.0);
}
`,Lt=`  if (uDepthPass == 2 && coverage < 1.0) discard;
  if (uEdgePass == 1 && coverage < 1.0) discard;
  if (uEdgePass == 2 && coverage >= 1.0) discard;
`,Rt=At.replace(`flat in vec2 vArc;
`,`flat in vec2 vArc;\nflat in float vDz;\n${Mt}${It}`).replace(Pt,Pt+Lt+Nt).replace(`    float diffuse = max(0.0, crossSection * lightAcross + surfaceHeight * lightHeight);
`,`    vec3 tubeLight = vec3(uUseViewLight == 1 ? uLightView.xy : uLightDirection * cos(uLightElevation), lightHeight);
    float diffuse = uTubeShading == 1
      ? max(0.0, dot(tubeNormal(fromStart, segment, vDz, vHalfWidth), tubeLight))
      : max(0.0, crossSection * lightAcross + surfaceHeight * lightHeight);
`).replace(`uniform float uDepthScale;
`,`uniform float uDepthScale;
uniform int uTubeShading;
`),zt=kt.replace(`layout(location = 2) in vec4 aDepth;
`,`layout(location = 2) in vec4 aDepth;
layout(location = 3) in vec3 aTangent0;
layout(location = 4) in vec3 aTangent1;
`).replace(`flat out vec2 vArc;
`,`flat out vec2 vArc;
flat out float vDz;
flat out vec3 vTangent0;
flat out vec3 vTangent1;
flat out float vDepth0;
`).replace(`  vArc = aInfo.yw;
`,`  vArc = aInfo.yw;
  vDz = aDepth.z;
  vTangent0 = aTangent0;
  vTangent1 = aTangent1;
  vDepth0 = aInfo.z;
`),Bt=`#version 300 es
#define MATERIAL_SILK 1
precision highp float;

in vec2 vPosition;
flat in vec4 vSegment;
flat in float vHalfWidth;
flat in vec2 vArc;
flat in float vDz;
flat in vec3 vTangent0;
flat in vec3 vTangent1;

uniform float uPixelsPerUnit;
uniform float uPly;
uniform float uAmbient;
uniform float uDiffuse;
uniform float uPlyPitch;
uniform float uPlyContrast;
uniform float uPlySlope;
uniform vec2 uLightDirection;
uniform float uLightElevation;
uniform vec3 uLightView;
uniform int uUseViewLight;
uniform vec4 uColor;
uniform float uGloss;
uniform float uSharpness;
uniform float uShift;
uniform float uDim;
uniform float uStreak;
// P80(issue #139): 傾けた線(θ > 0)の印。1 のとき、陰影の法線を管の表面の 3 次元の法線(tubeNormal)にし、接線を管の上の区間の
// 位置 t(tubeFront と同じ t)で補間する。真上(0)は前のとおりの 2 次元の円柱の陰影と alongRaw の補間。
uniform int uTubeShading;
${Mt}${It}
// P80: 画素 q に見える管の表面の点を生む軸の上の位置 t(0〜1。tubeFront・tubeNormal と同じ t)。継ぎ目の球の上の同じ点は、
// 前の区間では t = 1、後の区間では t = 0 になり、どちらも継ぎ目の接線(両側の区間の向きの和)を指す。
float tubeAxisT(vec2 q, vec2 s, float dz, float r) {
  float L2 = dot(s, s);
  if (L2 < 1e-12) return 0.0;
  float L = sqrt(L2);
  float a = dot(q, s) / L;
  float side = (q.x * s.y - q.y * s.x) / L;
  float R = sqrt(max(0.0, r * r - side * side));
  float g = dz / L;
  float xStar = -g * R / sqrt(1.0 + g * g);
  float lo = max(0.0, (a - R) / L);
  float hi = max(lo, min(1.0, (a + R) / L));
  return clamp((a - xStar) / L, lo, hi);
}

out vec4 outColor;

void main() {
  vec2 fromStart = vPosition - vSegment.xy;
  vec2 segment = vSegment.zw - vSegment.xy;
  float alongRaw = dot(fromStart, segment) / max(dot(segment, segment), 1e-12);
  float along = clamp(alongRaw, 0.0, 1.0);
  vec2 fromSegment = fromStart - segment * along;
  float signedDistance = (vHalfWidth * vHalfWidth - dot(fromSegment, fromSegment))
    / max(2.0 * vHalfWidth, 1e-6);
  float coverage = clamp(signedDistance * uPixelsPerUnit + 1.0, 0.0, 1.0);
  if (coverage <= 0.0) discard;
${Lt}${Nt}

  float opacity = coverage * uColor.a;
  float segmentLength = length(segment);
  vec2 segmentTangent = segmentLength > 1e-6 ? segment / segmentLength : vec2(1.0, 0.0);
  vec3 spatial = vec3(segment, vDz);
  float spatialLength = length(spatial);
  vec3 segmentTangent3 = spatialLength > 1e-6 ? spatial / spatialLength : vec3(segmentTangent, 0.0);
  vec3 blended = mix(vTangent0, vTangent1, alongRaw);
  float blendedLength = length(blended);
  vec3 tangent3 = blendedLength > 1e-6 ? blended / blendedLength : segmentTangent3;
  float flatLength = length(tangent3.xy);
  vec2 tangent = flatLength > 1e-6 ? tangent3.xy / flatLength : segmentTangent;
  vec2 across = vec2(-tangent.y, tangent.x);
  float crossSection = clamp(dot(fromSegment, across) / max(vHalfWidth, 1e-6), -1.0, 1.0);
  float surfaceHeight = sqrt(max(0.0, 1.0 - crossSection * crossSection));
  vec3 normal = vec3(across * crossSection, surfaceHeight);
  if (uTubeShading == 1) {
    // P80: 本当の 3 次元の法線と、同じ表面の点で区間に依らない接線(T は N へ射影しない。端の球の上で T·H が 0 になり照りが飛ぶ)。
    normal = tubeNormal(fromStart, segment, vDz, vHalfWidth);
    vec3 onTube = mix(vTangent0, vTangent1, tubeAxisT(fromStart, segment, vDz, vHalfWidth));
    float onTubeLength = length(onTube);
    if (onTubeLength > 1e-6) tangent3 = onTube / onTubeLength;
  }
  vec3 light = uUseViewLight == 1
    ? uLightView
    : vec3(uLightDirection * cos(uLightElevation), sin(uLightElevation));
  float lit = dot(normal, light);
  float brightness = uAmbient + uDiffuse * max(0.0, lit);
  float arc = mix(vArc.x, vArc.y, along);
  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (arc / uPlyPitch + crossSection * uPlySlope));
  brightness *= 1.0 - uPly * uPlyContrast * plyWave;

  vec3 shifted = tangent3 + uShift * normal;
  float shiftedLength = length(shifted);
  shifted = shiftedLength > 1e-6 ? shifted / shiftedLength : tangent3;
  vec3 halfway = light + vec3(0.0, 0.0, 1.0);
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-6 ? halfway / halfwayLength : vec3(0.0, 0.0, 1.0);
  float th = dot(shifted, halfway);
  float sine = sqrt(max(0.0, 1.0 - th * th));
  vec3 normalAcross = normal - dot(normal, tangent3) * tangent3;
  vec3 halfwayAcross = halfway - dot(halfway, tangent3) * tangent3;
  float normalAcrossLength = length(normalAcross);
  float halfwayAcrossLength = length(halfwayAcross);
  float streakWindow = 1.0;
  if (normalAcrossLength > 1e-6 && halfwayAcrossLength > 1e-6) {
    float angle = acos(clamp(dot(normalAcross / normalAcrossLength, halfwayAcross / halfwayAcrossLength), -1.0, 1.0));
    float ratio = angle / max(uStreak, 1e-6);
    streakWindow = exp(-0.69314718056 * ratio * ratio);
  }
  float highlight = uGloss * pow(max(sine, 1e-6), uSharpness) * smoothstep(-0.2, 0.2, lit) * streakWindow;
  vec3 color = clamp(uColor.rgb * brightness * (1.0 - uDim * highlight) + vec3(highlight), 0.0, 1.0);
  outColor = vec4(color * opacity, opacity);
}`;function Vt(e,t,n){let r=(t,n)=>{let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null},i=r(e.VERTEX_SHADER,t);if(!i)return null;let a=r(e.FRAGMENT_SHADER,n);if(!a)return e.deleteShader(i),null;let o=e.createProgram();return o?(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),e.getProgramParameter(o,e.LINK_STATUS)?o:(e.deleteProgram(o),null)):(e.deleteShader(i),e.deleteShader(a),null)}var Ht=`この端末では素材の描き方を作れなかったので、標準で描いている`,Ut=(e,t)=>Number.isFinite(e)?e:t,Wt=()=>typeof window>`u`?void 0:window;function Gt(){let e=Wt()?.__twDepthJitter;return typeof e==`number`&&Number.isFinite(e)?e:0}function Kt(e){let t=Wt();t&&(t.__twDepthJitterUsed=e)}var qt=1e6,Jt=6,Yt=Jt*Float32Array.BYTES_PER_ELEMENT;function Xt(e){let t=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},n=t(e.VERTEX_SHADER,kt),r=t(e.FRAGMENT_SHADER,At),i=e.createProgram();if(!i)throw Error(`Unable to create WebGL program`);if(e.attachShader(i,n),e.attachShader(i,r),e.linkProgram(i),e.deleteShader(n),e.deleteShader(r),!e.getProgramParameter(i,e.LINK_STATUS)){let t=e.getProgramInfoLog(i)??`WebGL program link failed`;throw e.deleteProgram(i),Error(t)}return i}var Zt=new Map,Qt;function $t(e){let t=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(e);if(t)return[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,1];if(/^#[0-9a-f]{6}$/i.test(e))return[Number.parseInt(e.slice(1,3),16)/255,Number.parseInt(e.slice(3,5),16)/255,Number.parseInt(e.slice(5,7),16)/255,1];let n=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(n)return[Number(n[1])/255,Number(n[2])/255,Number(n[3])/255,n[4]===void 0?1:Number(n[4])]}function en(e){let t=Zt.get(e);if(t)return t;let n=$t(e);if(!n){if(Qt??=document.createElement(`canvas`).getContext(`2d`)??void 0,!Qt)throw Error(`Canvas 2D color parser is unavailable`);if(Qt.fillStyle=`#000000`,Qt.fillStyle=e,n=$t(String(Qt.fillStyle)),!n)throw Error(`Unable to normalize canvas color: ${e}`)}return Zt.set(e,n),n}function tn(e,t){let n=0;for(let t of e)n+=t.center.length;let r=t&&t.start.length>=e.length+1&&t.center.length>=n*3&&t.shadow.length>=n*2&&t.normal.length>=n*2&&t.lightSide.length>=n?t:{count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(n*3),shadow:new Float64Array(n*2),normal:new Float64Array(n*2),lightSide:new Float64Array(n)};r.count=e.length,r.start[0]=0;for(let t=0;t<e.length;t+=1){let n=e[t],i=r.start[t];r.start[t+1]=i+n.center.length;for(let e=0;e<n.center.length;e+=1){let t=i+e;r.center[t*3]=n.center[e].x,r.center[t*3+1]=n.center[e].y,r.center[t*3+2]=n.center[e].z,r.shadow[t*2]=n.shadow[e].x,r.shadow[t*2+1]=n.shadow[e].y,r.normal[t*2]=n.normal[e].x,r.normal[t*2+1]=n.normal[e].y,r.lightSide[t]=n.lightSide[e]}}return r}var nn=new Uint8Array,rn=new Int32Array,an=new Int32Array;function on(e,t,n,r,i){let a=t-e;if(a<=2)return a===2?(an.length<2&&(an=new Int32Array(2)),an[0]=e,an[1]=e+1,2):0;nn.length<a&&(nn=new Uint8Array(a)),an.length<a&&(an=new Int32Array(a)),rn.length<2*a+2&&(rn=new Int32Array(2*a+2));let o=nn;o.fill(0,0,a),o[0]=1,o[a-1]=1;let s=rn,c=0;s[c++]=e,s[c++]=t-1;let l=n*n;for(;c>0;){let t=s[--c],n=s[--c],a=r[n*i],u=r[n*i+1],d=r[t*i]-a,f=r[t*i+1]-u,p=d*d+f*f,m=-1,h=l;for(let e=n+1;e<t;e+=1){let t=r[e*i]-a,n=r[e*i+1]-u,o=p>0?Math.min(1,Math.max(0,(t*d+n*f)/p)):0,s=t-o*d,c=n-o*f,l=s*s+c*c;l>h&&(h=l,m=e)}m>=0&&(o[m-e]=1,s[c++]=n,s[c++]=m,s[c++]=m,s[c++]=t)}let u=0;for(let n=e;n<t;n+=1)o[n-e]&&(an[u++]=n);return u}function sn(e,t,n,r){let i=t-e;if(i<=2)return i===2?(an.length<2&&(an=new Int32Array(2)),an[0]=e,an[1]=e+1,2):0;nn.length<i&&(nn=new Uint8Array(i)),an.length<i&&(an=new Int32Array(i)),rn.length<2*i+2&&(rn=new Int32Array(2*i+2));let a=nn;a.fill(0,0,i),a[0]=1,a[i-1]=1;let o=rn,s=0;o[s++]=e,o[s++]=t-1;let c=n*n;for(;s>0;){let t=o[--s],n=o[--s],i=r[n*3],l=r[n*3+1],u=r[n*3+2],d=r[t*3]-i,f=r[t*3+1]-l,p=r[t*3+2]-u,m=d*d+f*f+p*p,h=-1,g=c;for(let e=n+1;e<t;e+=1){let t=r[e*3]-i,n=r[e*3+1]-l,a=r[e*3+2]-u,o=m>0?Math.min(1,Math.max(0,(t*d+n*f+a*p)/m)):0,s=t-o*d,c=n-o*f,_=a-o*p,v=s*s+c*c+_*_;v>g&&(g=v,h=e)}h>=0&&(a[h-e]=1,o[s++]=n,o[s++]=h,o[s++]=h,o[s++]=t)}let l=0;for(let n=e;n<t;n+=1)a[n-e]&&(an[l++]=n);return l}function cn(e,t){let n=e.getContext(`webgl2`,{antialias:!1,depth:!0,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=Xt(n),i=e=>{let t=n.getUniformLocation(r,e);if(t===null)throw Error(`WebGL uniform ${e} is unavailable`);return t},a=i(`uNaturalSize`),o=i(`uPixelsPerUnit`),s=i(`uShadow`),c=i(`uShadowAlpha`),l=i(`uPly`),u=i(`uAmbient`),d=i(`uDiffuse`),f=i(`uSpecular`),p=i(`uShininess`),m=i(`uPlyPitch`),h=i(`uPlyContrast`),g=i(`uPlySlope`),_=i(`uLightDirection`),v=i(`uLightElevation`),y=i(`uLightView`),b=i(`uUseViewLight`),x=i(`uColor`),S=i(`uDepthBias`),C=i(`uClothShadow`),w=i(`uClothAffine`),T=i(`uClothCenter`),E=n.createVertexArray(),D=n.createBuffer();if(!E||!D)throw Error(`Unable to create WebGL geometry buffers`);n.bindVertexArray(E),n.bindBuffer(n.ARRAY_BUFFER,D);for(let e=0;e<3;e+=1)n.enableVertexAttribArray(e),n.vertexAttribDivisor(e,1);let O,k=new Float32Array,A=new Float64Array,j=new Float64Array,M=new Float64Array,N=new Float64Array(3),P=new Float64Array(2),F=new Uint32Array,ee=new Float64Array,te=new Uint32Array,I=new Uint32Array,L,R,ne,z=!1,B=new Float32Array,re=0,V=new Float64Array,ie=()=>{if(ne||z)return ne;let e=Vt(n,zt,Bt);if(!e){z=!0;return}let t=t=>n.getUniformLocation(e,t);return ne={program:e,naturalSize:t(`uNaturalSize`),pixelsPerUnit:t(`uPixelsPerUnit`),ply:t(`uPly`),ambient:t(`uAmbient`),diffuse:t(`uDiffuse`),plyPitch:t(`uPlyPitch`),plyContrast:t(`uPlyContrast`),plySlope:t(`uPlySlope`),lightDirection:t(`uLightDirection`),lightElevation:t(`uLightElevation`),lightView:t(`uLightView`),useViewLight:t(`uUseViewLight`),color:t(`uColor`),depthBias:t(`uDepthBias`),clothShadow:t(`uClothShadow`),gloss:t(`uGloss`),sharpness:t(`uSharpness`),shift:t(`uShift`),dim:t(`uDim`),streak:t(`uStreak`),depthScale:t(`uDepthScale`),depthPass:t(`uDepthPass`),edgePass:t(`uEdgePass`),depthBack:t(`uDepthBack`),depthOrigin:t(`uDepthOrigin`),clothPlane:t(`uClothPlane`),depthJitter:t(`uDepthJitter`),depthDraw:t(`uDepthDraw`),tubeShading:t(`uTubeShading`)},ne},H,U=new Map,ae=!1,oe=()=>{if(H||ae)return H;let e=Vt(n,Ft,Rt);if(!e){ae=!0;return}let t=t=>n.getUniformLocation(e,t);return H={program:e,naturalSize:t(`uNaturalSize`),pixelsPerUnit:t(`uPixelsPerUnit`),shadow:t(`uShadow`),clothShadow:t(`uClothShadow`),ply:t(`uPly`),ambient:t(`uAmbient`),diffuse:t(`uDiffuse`),specular:t(`uSpecular`),shininess:t(`uShininess`),plyPitch:t(`uPlyPitch`),plyContrast:t(`uPlyContrast`),plySlope:t(`uPlySlope`),lightDirection:t(`uLightDirection`),lightElevation:t(`uLightElevation`),lightView:t(`uLightView`),useViewLight:t(`uUseViewLight`),color:t(`uColor`),depthBias:t(`uDepthBias`),depthScale:t(`uDepthScale`),depthPass:t(`uDepthPass`),edgePass:t(`uEdgePass`),depthBack:t(`uDepthBack`),depthOrigin:t(`uDepthOrigin`),clothPlane:t(`uClothPlane`),depthJitter:t(`uDepthJitter`),depthDraw:t(`uDepthDraw`),tubeShading:t(`uTubeShading`)},H},W=new Float64Array(4),se={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},G=e=>{let t=e*wt*Et;n.vertexAttribPointer(0,4,n.FLOAT,!1,wt*Et,t),n.vertexAttribPointer(1,4,n.FLOAT,!1,wt*Et,t+4*Et),n.vertexAttribPointer(2,4,n.FLOAT,!1,wt*Et,t+8*Et)},K=t=>{let i=t.scale??1,s=Math.round(t.cssW*i*t.dpr),c=Math.round(t.cssH*i*t.dpr),l=t.cssW*i,u=t.cssH*i,d=t.dpr*i;O&&O.bitmapW===s&&O.bitmapH===c&&O.cssW===l&&O.cssH===u&&O.transform===d&&e.width===s&&e.height===c&&e.style.width===O.styleW&&e.style.height===O.styleH&&n.drawingBufferWidth===s&&n.drawingBufferHeight===c||(e.width=s,e.height=c,e.style.width=`${l}px`,e.style.height=`${u}px`,n.useProgram(r),n.uniform2f(a,s/d,c/d),n.uniform1f(o,d),O={bitmapW:s,bitmapH:c,cssW:l,cssH:u,styleW:e.style.width,styleH:e.style.height,transform:d})},ce=(e,t)=>{R??=vt(n);let r=en(t.background);n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(r[0],r[1],r[2],r[3]),n.clearDepth(1),n.depthMask(!0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT);let i=Ot(t,se),a=O?.transform??1;R.draw(e,t,n.drawingBufferWidth/a,n.drawingBufferHeight/a,en,i)},q=(e,t,n,r,i,a,o)=>{let s=a,c=sn(e,t,n,r),l=an;for(let e=0;e+1<c;e+=1){let t=l[e],n=l[e+1];k[s]=r[t*3],k[s+1]=r[t*3+1],k[s+2]=r[n*3],k[s+3]=r[n*3+1],k[s+4]=o/2,k[s+5]=A[t],k[s+6]=i(r[t*3+2]),k[s+7]=A[n],k[s+8]=0,k[s+9]=0,k[s+10]=r[n*3+2]-r[t*3+2],k[s+11]=0,s+=wt}let u=Math.max(0,c-1);V.length<u*3&&(V=new Float64Array(u*3));for(let e=0;e<u;e+=1){let t=l[e],n=l[e+1],i=r[n*3]-r[t*3],a=r[n*3+1]-r[t*3+1],o=r[n*3+2]-r[t*3+2],s=Math.hypot(i,a,o);V[e*3]=s>0?i/s:1,V[e*3+1]=s>0?a/s:0,V[e*3+2]=s>0?o/s:0}let d=(re+u)*Jt;if(B.length<d){let e=new Float32Array(Math.max(d,B.length*2));e.set(B.subarray(0,re*Jt)),B=e}let f=(e,t)=>{let n=Math.max(0,e-1),r=Math.min(u-1,e),i=V[n*3]+V[r*3],a=V[n*3+1]+V[r*3+1],o=V[n*3+2]+V[r*3+2],s=Math.hypot(i,a,o);s<1e-9&&(i=V[r*3],a=V[r*3+1],o=V[r*3+2],s=1),B[t]=i/s,B[t+1]=a/s,B[t+2]=o/s};for(let e=0;e<u;e+=1){let t=(re+e)*Jt;f(e,t),f(e+1,t+3)}return re+=u,s},J=(e,t)=>{if(t.band&&e.band&&e.bandNormal){ce(e,t);return}let i=t.material,a=i?.name===`silk`?ie():void 0,o=t.view?.zoom??1,L=o!==1&&Number.isFinite(o)&&o>0,R=t.width;L&&(t={...t,width:t.width*o});let ne=en(t.shadow.color),z=en(t.layers[0]?.color??`#ffffff`),V=0;for(let t=0;t<e.count;t+=1)V+=Math.max(0,e.start[t+1]-e.start[t]-1);let ae=a?V*30:V*2*wt;re=0,n.bindVertexArray(E),n.bindBuffer(n.ARRAY_BUFFER,D),k.length<ae&&(k=new Float32Array(ae),n.bufferData(n.ARRAY_BUFFER,k.byteLength,n.DYNAMIC_DRAW)),A.length<e.center.length/3&&(A=new Float64Array(e.center.length/3));let K=tt(t.view),J=e.center,Y=e.shadow,X;if(!K&&t.view){let n=e.center.length/3;j.length<e.center.length&&(j=new Float64Array(e.center.length)),M.length<e.shadow.length&&(M=new Float64Array(e.shadow.length)),X=Ze(t.view.tilt,t.view.turn);for(let r=0;r<n;r+=1)Qe(X,t.view.center.x,t.view.center.y,e.center[r*3],e.center[r*3+1],e.center[r*3+2],N),L&&(N[0]=t.view.center.x+o*(N[0]-t.view.center.x),N[1]=t.view.center.y+o*(N[1]-t.view.center.y),N[2]*=o),j.set(N,r*3),$e(X,t.view.center.x,t.view.center.y,e.shadow[r*2],e.shadow[r*2+1],P),L&&(P[0]=t.view.center.x+o*(P[0]-t.view.center.x),P[1]=t.view.center.y+o*(P[1]-t.view.center.y)),M.set(P,r*2);J=j,Y=M}let Z=0,le=.5/(O?.transform??1),ue=X!==void 0,de=ue?e.shadow:Y,fe=(ue?R:t.width)/2;for(let t=0;t<e.count;t+=1){let n=(t+1)/(e.count+1),r=on(e.start[t],e.start[t+1],le,Y,2),i=an;for(let e=0;e+1<r;e+=1){let t=i[e],r=i[e+1];k[Z]=de[t*2],k[Z+1]=de[t*2+1],k[Z+2]=de[r*2],k[Z+3]=de[r*2+1],k[Z+4]=fe,k[Z+5]=0,k[Z+6]=n,k[Z+7]=0,k[Z+8]=0,k[Z+9]=0,k[Z+10]=0,k[Z+11]=0,Z+=wt}}let pe=Z/wt,me=X!==void 0&&t.view!==void 0&&t.view.tilt!==0;F.length<e.count&&(F=new Uint32Array(e.count),ee=new Float64Array(e.count),te=new Uint32Array(e.count),I=new Uint32Array(e.count));let he=0,ge=0;{let n=1/0,r=-1/0;for(let t=0;t<e.count;t+=1){let i=e.start[t],a=e.start[t+1],o=0;for(let e=i;e<a;e+=1){let t=J[e*3+2];o+=t,t<n&&(n=t),t>r&&(r=t)}let s=a>i?o/(a-i):0;ee[t]=Math.round(s/Tt)*e.count+t}let i=ee.subarray(0,e.count);i.sort();for(let t=0;t<e.count;t+=1)F[t]=(i[t]%e.count+e.count)%e.count;let a=Math.max(t.width,0),o=Number.isFinite(r-n)?r-n:0,s=4*(a+1);he=(Number.isFinite(r)?r:0)+s,ge=.99/Math.max(o+a+2*s,1e-6)}let _e=e=>.005+(he-e)*ge,ve=he+.005/Math.max(ge,1e-12);if(X&&t.view){let e=L?1/o:1;W[0]=X[2]*e,W[1]=X[5]*e,W[2]=X[8]*e,W[3]=-(X[2]*t.view.center.x+X[5]*t.view.center.y)*e}else W[0]=0,W[1]=0,W[2]=1,W[3]=0;for(let n=0;n<e.count;n+=1){let r=F[n],i=e.start[r],s=e.start[r+1];if(te[n]=Z/wt,I[n]=0,s-i<2)continue;A[i]=0;for(let t=i+1;t<s;t+=1){let n=e.center[t*3]-e.center[(t-1)*3],r=e.center[t*3+1]-e.center[(t-1)*3+1];A[t]=A[t-1]+(L?o*Math.hypot(n,r):Math.hypot(n,r))}if(a){Z=q(i,s,le,J,_e,Z,t.width),I[n]=Z/wt-te[n];continue}let c=sn(i,s,le,J),l=an;for(let e=0;e+1<c;e+=1){let n=l[e],r=l[e+1];k[Z]=J[n*3],k[Z+1]=J[n*3+1],k[Z+2]=J[r*3],k[Z+3]=J[r*3+1],k[Z+4]=t.width/2,k[Z+5]=A[n],k[Z+6]=_e(J[n*3+2]),k[Z+7]=A[r],k[Z+8]=0,k[Z+9]=0,k[Z+10]=J[r*3+2]-J[n*3+2],k[Z+11]=0,Z+=wt}I[n]=Z/wt-te[n]}let ye=Z,be=Z;a&&re>0&&(k.set(B.subarray(0,re*Jt),ye),be+=re*Jt),be>0&&n.bufferSubData(n.ARRAY_BUFFER,0,k,0,be);let xe=en(t.background);if(n.useProgram(r),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.clearColor(xe[0],xe[1],xe[2],xe[3]),n.clearDepth(1),n.depthMask(!0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.BLEND),n.uniform1i(s,1),n.uniform1f(c,t.shadow.alpha),n.uniform4f(x,ne[0],ne[1],ne[2],ne[3]),n.uniform1f(S,0),ue&&X&&t.view){let e=L?o:1;n.uniformMatrix2fv(w,!1,[e*X[0],e*X[3],e*X[1],e*X[4]]),n.uniform2f(T,t.view.center.x,t.view.center.y),n.uniform1i(C,1)}else n.uniform1i(C,0);let Q=Ot(t,se);n.uniform1f(l,Q.ply),n.uniform1f(u,Q.ambient),n.uniform1f(d,Q.diffuse),n.uniform1f(f,Q.specular),n.uniform1f(p,Q.shininess),n.uniform1f(m,Q.plyPitch),n.uniform1f(h,Q.plyContrast),n.uniform1f(g,Q.plySlope);let Se=t.light?.dir??{x:St,y:Ct},Ce=t.light?.elevation??xt,we=!K&&X?et(X,Se,Ce):void 0;we?(n.uniform3f(y,we[0],we[1],we[2]),n.uniform1i(b,1)):(n.uniform2f(_,Se.x,Se.y),n.uniform1f(v,Ce),n.uniform1i(b,0)),n.enable(n.DEPTH_TEST),n.depthFunc(n.NOTEQUAL),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),pe>0&&(G(0),n.drawArraysInstanced(n.TRIANGLE_STRIP,0,4,pe));let Te=null,Ee=null,De=null,Oe=!1,ke=null,Ae=null,je=null;if(a&&i){n.useProgram(a.program);let e=O?.transform??1;n.uniform2f(a.naturalSize,(O?.bitmapW??n.drawingBufferWidth)/e,(O?.bitmapH??n.drawingBufferHeight)/e),n.uniform1f(a.pixelsPerUnit,e),n.uniform1i(a.clothShadow,0),n.uniform1f(a.depthBias,0),n.uniform1f(a.ply,Q.ply),n.uniform1f(a.ambient,Q.ambient),n.uniform1f(a.diffuse,Q.diffuse),n.uniform1f(a.plyPitch,Q.plyPitch),n.uniform1f(a.plyContrast,Q.plyContrast),n.uniform1f(a.plySlope,Q.plySlope),we?(n.uniform3f(a.lightView,we[0],we[1],we[2]),n.uniform1i(a.useViewLight,1)):(n.uniform2f(a.lightDirection,Se.x,Se.y),n.uniform1f(a.lightElevation,Ce),n.uniform1i(a.useViewLight,0)),n.uniform4f(a.color,z[0],z[1],z[2],z[3]),n.uniform1f(a.gloss,Ut(i.gloss,0)),n.uniform1f(a.sharpness,Math.max(0,Ut(i.sharpness,0))),n.uniform1f(a.shift,Ut(i.shift,0)),n.uniform1f(a.dim,Math.min(1,Math.max(0,Ut(i.dim,0)))),n.uniform1f(a.streak,Math.max(0,Ut(i.streak,qt))),n.uniform1f(a.depthScale,ge),n.uniform1i(a.depthPass,0),n.uniform1f(a.depthOrigin,ve),n.uniform4f(a.clothPlane,W[0],W[1],W[2],W[3]),Te=a.depthPass,De=a.edgePass,Ee=a.depthBack,ke=a.depthJitter,Ae=a.depthDraw,je=a.program,n.uniform1i(a.tubeShading,+!!me),Oe=me}else if(oe()){let e=H;n.useProgram(e.program);let t=O?.transform??1;n.uniform2f(e.naturalSize,(O?.bitmapW??n.drawingBufferWidth)/t,(O?.bitmapH??n.drawingBufferHeight)/t),n.uniform1f(e.pixelsPerUnit,t),n.uniform1i(e.shadow,0),n.uniform1i(e.clothShadow,0),n.uniform1f(e.depthBias,0),n.uniform1f(e.ply,Q.ply),n.uniform1f(e.ambient,Q.ambient),n.uniform1f(e.diffuse,Q.diffuse),n.uniform1f(e.specular,Q.specular),n.uniform1f(e.shininess,Q.shininess),n.uniform1f(e.plyPitch,Q.plyPitch),n.uniform1f(e.plyContrast,Q.plyContrast),n.uniform1f(e.plySlope,Q.plySlope),we?(n.uniform3f(e.lightView,we[0],we[1],we[2]),n.uniform1i(e.useViewLight,1)):(n.uniform2f(e.lightDirection,Se.x,Se.y),n.uniform1f(e.lightElevation,Ce),n.uniform1i(e.useViewLight,0)),n.uniform4f(e.color,z[0],z[1],z[2],z[3]),n.uniform1f(e.depthScale,ge),n.uniform1i(e.depthPass,0),n.uniform1f(e.depthOrigin,ve),n.uniform4f(e.clothPlane,W[0],W[1],W[2],W[3]),n.uniform1i(e.tubeShading,+!!me),Te=e.depthPass,De=e.edgePass,Ee=e.depthBack,ke=e.depthJitter,Ae=e.depthDraw,je=e.program,Oe=me}else n.uniform1i(s,0),n.uniform1i(C,0),n.uniform4f(x,z[0],z[1],z[2],z[3]);n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let Me=e=>{let t=(ye+(e-pe)*Jt)*Et;n.vertexAttribPointer(3,3,n.FLOAT,!1,Yt,t),n.vertexAttribPointer(4,3,n.FLOAT,!1,Yt,t+3*Et)};if(a)for(let e of[3,4])n.enableVertexAttribArray(e),n.vertexAttribDivisor(e,1);let Ne=()=>{a&&(n.disableVertexAttribArray(3),n.disableVertexAttribArray(4))},Pe=De!==null,Fe=Pe&&Oe;n.uniform1i(De,+!!Pe),n.clear(n.DEPTH_BUFFER_BIT),n.depthFunc(n.LEQUAL);let Ie=Math.max(t.width,0)/2,Le=Te===null?0:Gt();je!==null&&(U.get(je)??0)!==Le&&(n.uniform1f(ke,Le),U.set(je,Le));let Re=0,ze=e=>{Re+=1,Le!==0&&n.uniform1f(Ae,Re),n.drawArraysInstanced(n.TRIANGLE_STRIP,0,4,e)};Fe&&(n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.uniform1i(Te,0),n.uniform1f(Ee,0));for(let t=0;t<e.count;t+=1){let e=I[t];e!==0&&(G(te[t]),a&&Me(te[t]),Fe||(n.colorMask(!1,!1,!1,!1),n.depthMask(!0),n.uniform1i(Te,Oe?2:1),n.uniform1f(Ee,Oe?0:Ie),ze(e),n.colorMask(!0,!0,!0,!0),n.depthMask(!1),n.uniform1i(Te,0),n.uniform1f(Ee,0),ze(e),n.colorMask(!1,!1,!1,!1),n.depthMask(!0),n.uniform1i(Te,1)),ze(e))}if(Pe){n.colorMask(!0,!0,!0,!0),n.depthMask(!1),n.uniform1i(Te,0),n.uniform1f(Ee,0),n.uniform1i(De,2);for(let t=0;t<e.count;t+=1){let e=I[t];e!==0&&(G(te[t]),a&&Me(te[t]),ze(e))}n.uniform1i(De,0)}Te!==null&&Kt(Le),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.DEPTH_TEST),Ne()};return K(t),{draw(e,t){L=tn(e,L),J(L,t)},drawTyped:J,resize:K,materialNote:()=>z?Ht:null}}var ln=Math.PI/180,un=16,dn=8;function fn(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+un}function pn(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+un+dn;return Math.min(60,2*Math.atan(r/(r+i+a+o))/ln)}function mn(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function hn(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=Ze(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=pn(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=fn(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*ln/2),a=Math.max(dn,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var gn=1e-12;function _n(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var vn=new Float64Array,yn=new Uint8Array;function bn(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);vn.length<s*3&&(vn=new Float64Array(s*3),yn=new Uint8Array(s));let c=vn,l=yn,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>gn?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){_n(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):_n(a,l,u,i,t)}}function xn(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var Sn=new Float64Array,Cn=new Float64Array,wn=new Float64Array;function Tn(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);wn.length<n&&(Sn=new Float64Array(n*3),Cn=new Float64Array(n*3),wn=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;bn(i,n,o,Sn,Cn,wn,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=wn[e],r[s+4]=Sn[e*3],r[s+5]=Sn[e*3+1],r[s+6]=Sn[e*3+2],r[s+7]=t,r[s+8]=Cn[e*3],r[s+9]=Cn[e*3+1],r[s+10]=Cn[e*3+2];let c=0;o>=2&&e===n?c=-(1+xn(-Sn[e*3+2])):o>=2&&e===a-1&&(c=1+xn(Sn[e*3+2])),r[s+11]=c}}return r}function En(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function Dn(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var On=.7,kn=1e6,An=4294967295,jn=1024,Mn=4,Nn=1.5,Pn=0,Fn=1,In=2,Ln=3,Rn=4,zn=5,Bn=7,Vn=`#version 300 es
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
  if (uMode == ${Fn}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${In} || uMode == ${Bn}) {
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
  if (uMode == ${zn}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${Rn};
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
  vNormal = uMode == ${Ln} ? outward * t : n;
  vWorld = world;
}`;function Hn(){let e=typeof globalThis.location==`object`&&globalThis.location?globalThis.location.search:``,t=new URLSearchParams(e);if(t.get(`plyMode`)!==`normal`)return;let n=(e,n,r,i)=>{let a=t.get(e)?.trim()??``,o=Number(a);return a!==``&&Number.isFinite(o)?Math.min(i,Math.max(r,o)):n},r=t.get(`plyProfile`),i=r===`notch`||r===`scallop`?r:`wave`;return{gain:n(`plyGain`,10,0,1e3),profile:i,notch:n(`plyNotch`,.15,.01,1)}}var Un=2;function Wn(e){if(e.profile===`wave`)return`  float plySlopeH = -0.5 * cos(plyPhase);`;let t=`  float plyU = fract(plyPhase / 6.28318530718 - 0.25);`;if(e.profile===`notch`){let n=(e.notch/2).toFixed(5);return`${t}
  float plyD = min(plyU, 1.0 - plyU);
  float plySlopeH = plyD < ${n} ? (plyU < 0.5 ? 1.0 : -1.0) / (${n} * 6.28318530718) : 0.0;`}return`${t}
  float plyX = 2.0 * plyU - 1.0;
  float plySlopeH = -plyX / (3.14159265359 * sqrt(max(1.0 - plyX * plyX, 1e-6)));`}function Gn(){let e=Hn();return e===void 0?`  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);`:`  // P108 試作: 高さ A·h(φ)、N′ = normalize(N − ∇(A·h)) = normalize(N − clamp(A · dh/dφ) · grooveDir)。
  // grooveDir は面の上の位相の勾配の向き: 軸の向き T に 1 / (間隔 × 太さ)、周の向き(画面の横を N に垂直へ射影)に
  // 傾き × d(N·横)/d(周の弧長) = 傾き × cosθ / 半径(cosθ = √(1 − (N·横)²))。勾配は単位の長さへ正規化し、強さは A だけで決める。
  float plyPhase = 6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN);
${Wn(e)}
  vec3 sideUnit = sideLength > 1e-6 ? side / sideLength : vec3(0.0);
  vec3 aroundDir = sideUnit - dot(sideUnit, N) * N;
  float aroundLength = length(aroundDir);
  aroundDir = aroundLength > 1e-6 ? aroundDir / aroundLength : vec3(0.0);
  float cosAround = sqrt(max(0.0, 1.0 - acrossN * acrossN));
  vec3 phaseGrad = T / max(uPly.y, 1e-6) + aroundDir * (uPly.w * cosAround / max(vRadiusWorld, 1e-6));
  float phaseGradLength = length(phaseGrad);
  vec3 grooveDir = phaseGradLength > 1e-9 ? phaseGrad / phaseGradLength : vec3(0.0);
  float plyAmp = uPly.x * uPly.z * ${e.gain.toFixed(4)};
  float plyTilt = clamp(plyAmp * plySlopeH, -${Un.toFixed(4)}, ${Un.toFixed(4)});
  N = normalize(N - plyTilt * grooveDir);
  outColor = vec4(shadeThread(N, T, V, 1.0) * alpha, alpha);`}var Kn=(e,t=!1)=>`#version 300 es
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
  if (uMode == ${Fn}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${In}) {
    float coverage = edgeCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${Bn}) {
    float coverage = edgeCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${zn}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${Rn};
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
${Gn()}
}`,qn=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse + uShading.z * pow(diffuse, uShading.w);
  return uColor * brightness * ply;
}`,Jn=`uniform vec4 uSilk;
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
}`,Yn=`uniform vec3 uRubber;

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
}`,Xn=Kn(qn),Zn=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,Qn=Kn(Jn),$n=Kn(qn,!0),er=Kn(Jn,!0),tr=Kn(Yn),nr=Kn(Yn,!0),rr=new Map;function ir(e){let t=rr.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=ir(r))}}}let i=n??[0,0,0,1];return rr.set(e,i),i}function ar(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function or(e,t,n){let r=e.createProgram();if(!r)throw Error(`Unable to create a WebGL program`);let i=[];try{if(i.push(ar(e,e.VERTEX_SHADER,Vn)),e.attachShader(r,i[0]),i.push(ar(e,e.FRAGMENT_SHADER,t)),e.attachShader(r,i[1]),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(r)??``}`);n?.push(...i)}catch(t){for(let t of i)e.deleteShader(t);throw e.deleteProgram(r),t}return r}function sr(e,t){let n=[],r=[];try{for(let i of t)n.push(or(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var cr={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`};function lr(e,t){let n={};for(let r of Object.keys(cr))n[r]=e.getUniformLocation(t,cr[r]);return{program:t,u:n}}function ur(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function dr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var fr=new Float64Array;function pr(e,t,n){let r=e.center;fr.length<e.count&&(fr=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];fr[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=fr[e]-fr[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}var mr=new Float64Array,hr=new Float64Array,gr=new Float64Array(16);function _r(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function vr(e,t,n,r,i){let a=e.start[e.count]??0;hr.length<a&&(mr=new Float64Array(a*2),hr=new Float64Array(a));let o=r.view,s=r.proj,c=gr;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=s[r*4+t]*o[e*4+r];c[e*4+t]=n}let l=c[0],u=c[1],d=c[3],f=c[4],p=c[5],m=c[7],h=c[8],g=c[9],_=c[11],v=c[12],y=c[13],b=c[15],x=i.pixelScale,S=i.radius,C=i.widen,w=i.minRadius,T=i.fringe,E=.5*i.viewportW,D=.5*i.viewportH,O=mr,k=hr;for(let e=0,n=0;e<a;e+=1,n+=12){let r=t[n],i=t[n+1],a=t[n+2],o=d*r+m*i+_*a+b,s=x/(o>1e-6?o:1e-6),c=s>0?Math.max(S*s+C,w)/s:S,A=t[n+11];if(A!==0){let e=(A<0?1-Math.abs(A):Math.abs(A)-1)*c;r+=e*t[n+4],i+=e*t[n+5],a+=e*t[n+6]}let j=d*r+m*i+_*a+b,M=j>1e-6?j:1e-6;O[e*2]=((l*r+f*i+h*a+v)/M+1)*E,O[e*2+1]=((u*r+p*i+g*a+y)/M+1)*D,k[e]=x/M*c+T}for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let n=e===i,s=e===a-1,c=n?e:e-1,l=s?e:e+1,u=o&&_r(O[c*2],O[c*2+1],O[e*2],O[e*2+1],O[l*2],O[l*2+1],k[e],n,s);if(!u&&!s){let t=l===a-1,n=t?l:l+1;u=_r(O[e*2],O[e*2+1],O[l*2],O[l*2+1],O[n*2],O[n*2+1],k[e],!1,t)}t[e*12+7]=2*r+ +!!u}let s=r*8;o?(n[s]=O[i*2],n[s+1]=O[i*2+1],n[s+2]=O[(i+1)*2],n[s+3]=O[(i+1)*2+1],n[s+4]=O[(a-1)*2],n[s+5]=O[(a-1)*2+1],n[s+6]=O[(a-2)*2],n[s+7]=O[(a-2)*2+1]):n.fill(0,s,s+8)}}function yr(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=lr(n,or(n,Xn)),i=lr(n,or(n,$n)),a=lr(n,or(n,Zn)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=sr(n,[tr,nr]);if(!e)p=!0;else return d={...lr(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...lr(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=()=>{if(o||c)return o;let e=sr(n,[Qn,er]);if(!e)c=!0;else return o=lr(n,e[0]),s=lr(n,e[1]),o},_=n.createVertexArray(),v=n.createBuffer(),y=n.createTexture(),b=n.createTexture(),x=n.createTexture();if(!_||!v||!y||!b||!x)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bindVertexArray(null);for(let e of[y,b,x])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let S,C=new Float32Array,w=0,T=new Float32Array,E=0,D=new Float32Array,O=0,k,A=0,j=0,M=0,N=0,P=0,F=new Int32Array,ee=new Int32Array,te=0,I=new Uint32Array,L=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=An);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},R,ne={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},z=new Float32Array(16),B=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;S&&S.bitmapW===r&&S.bitmapH===i&&S.cssW===a&&S.cssH===o&&S.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,S={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},re=(e,t,r)=>{let i=e.count;if(k&&A===t&&k.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(k[n]!==e.start[n]){t=!1;break}if(t)return}let a=En(e.start,i,t);j=a.tubeCount,M=a.capCount,N=a.shadowCount,P=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(P+=+(P>0)+2*n)}let o=new Uint32Array(a.index.length+P);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}F.length<i&&(F=new Int32Array(i),ee=new Int32Array(i)),pr(e,r,F),te=a.index.length,L(e,F,o,te),I=new Uint32Array(P),n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),k=e.start.slice(0,i+1),A=t},V=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*Mn;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},ie=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,jn,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,jn,r,n.RGBA,n.FLOAT,t)},H=(e,t=!1)=>{let r=ir(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},U=(e,t,n,r)=>{let i=ur((t.mesh??{}).cameraFov,45),a=t.view,o=ur(a?.tilt,0),s=ur(a?.turn,0),c=ur(a?.zoom,1)>0?ur(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,ur(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:hn({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:mn(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},ae=(e,t)=>{R??=vt(n),H(t);let r=S?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=U(e,t,i,a);R.draw(e,t,i,a,ir,Ot(t,ne),o,t.material)},oe=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,u=!0,ae(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){H(t);return}let d=t.shadow.alpha>0,p=ir(t.background),k=ir(t.shadow.color),A=[0,1,2].every(e=>k[e]<=p[e]),R=[0,1,2].every(e=>k[e]>=p[e]),B=p[3]>=1&&(A||R);H(t,d&&!B);let oe=S?.transform??1,W=n.drawingBufferWidth/oe,se=n.drawingBufferHeight/oe,G=t.mesh??{},K=ur(G.threadWiden,0),ce=ur(G.threadMinRadius,On),{camera:q,zoom:J,center:Y,width:X}=U(e,t,W,se),Z=J*(q.fov>0?q.eye:1)*oe,le=q.fov>0?q.eye/q.near:1,ue=Dn(Math.max(X/2*J*le*oe+K,ce)),de=Math.max(1,Math.ceil(c*3/jn)),fe=de>w;fe&&(w=de,C=new Float32Array(jn*de*4)),Tn(e,C);let pe=Math.max(1,Math.ceil(c/jn)),me=pe>E;me&&(E=pe,T=new Float32Array(jn*pe*Mn)),V(e,T);let he=Math.max(1,Math.ceil(2*e.count/jn)),ge=he>O;ge&&(O=he,D=new Float32Array(jn*he*4)),vr(e,C,D,q,{pixelScale:Z,radius:X/2,widen:K,minRadius:ce,fringe:Nn,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight}),re(e,ue,q.view),pr(e,q.view,ee);let _e=!1;for(let t=0;t<e.count;t+=1)if(ee[t]!==F[t]){_e=!0;break}_e&&(F.set(ee.subarray(0,e.count)),L(e,F,I,0),n.bindVertexArray(_),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,v),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,te*Uint32Array.BYTES_PER_ELEMENT,I),n.bindVertexArray(null));let ve=l?g():void 0,ye=ve?void 0:m?h():void 0,be=ve??ye??r,xe=(ve?s:ye?f:void 0)??i;n.bindVertexArray(_),n.activeTexture(n.TEXTURE0),ie(y,C,w,fe),n.activeTexture(n.TEXTURE1),ie(b,T,E,me),n.activeTexture(n.TEXTURE2),ie(x,D,O,ge),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=q.proj[r*4+t]*q.view[e*4+r];z[e*4+t]=n}let Q=2*q.depthExtent,Se=Ot(t,ne),Ce=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},we=t.light?.elevation??Math.PI/4,Te=ir(t.layers[0]?.color??`#ffffff`),Ee=q.view,De=ir(t.shadow.color),Oe=({program:e,u:r,rubber:i})=>(n.useProgram(e),n.uniform1i(r.points,0),n.uniform1i(r.shadowPoints,1),n.uniform1i(r.lines,2),n.uniform1i(r.texWidth,jn),n.uniform1i(r.sides,ue),n.uniformMatrix4fv(r.viewProj,!1,z),n.uniform1f(r.pixelScale,Z),n.uniform1f(r.radius,X/2),n.uniform1f(r.widen,K),n.uniform1f(r.minRadius,ce),n.uniform3f(r.plane,Y.x,Y.y,Q),n.uniform4f(r.shading,Se.ambient,Se.diffuse,Se.specular,Se.shininess),n.uniform3f(r.light,Ce.x*Math.cos(we),Ce.y*Math.cos(we),Math.sin(we)),n.uniform3f(r.color,Te[0],Te[1],Te[2]),n.uniform4f(r.ply,Se.ply,Se.plyPitch,Se.plyContrast,Se.plySlope),q.fov>0?n.uniform4f(r.eye,Y.x+Ee[2]*q.eye,Y.y+Ee[6]*q.eye,Ee[10]*q.eye,1):n.uniform4f(r.eye,Ee[2],Ee[6],Ee[10],0),ve&&o&&(n.uniform4f(r.silk,ur(o.gloss,0),Math.max(0,ur(o.sharpness,0)),ur(o.shift,0),Math.min(1,Math.max(0,ur(o.dim,0)))),n.uniform1f(r.streak,Math.max(0,ur(o.streak,kn)))),ye&&o&&i&&n.uniform3f(i,ur(o.gloss,0),Math.max(0,ur(o.sharpness,0)),ur(o.rim,0)),n.uniform4f(r.shadowColor,De[0],De[1],De[2],De[3]*t.shadow.alpha),n.uniform1f(r.fringe,Nn),n.uniform3f(r.cloth,p[0],p[1],p[2]),n.uniform2f(r.viewport,n.drawingBufferWidth,n.drawingBufferHeight),r),ke=Oe(xe),Ae=Oe(be);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let je=Uint32Array.BYTES_PER_ELEMENT,Me=(j+M+N)*je;d&&B?(n.disable(n.DEPTH_TEST),n.blendEquation(A?n.MIN:n.MAX),n.uniform1i(Ae.mode,Bn),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Me),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST)):d&&(n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(Ae.mode,In),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Me),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(Ae.fillAlpha,p[3]),n.uniform1i(Ae.mode,zn),n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST)),n.useProgram(a.program),n.uniform1i(a.u.mode,Fn),n.uniformMatrix4fv(a.u.viewProj,!1,z),n.uniform3f(a.u.plane,Y.x,Y.y,Q),n.depthMask(!0),n.depthFunc(n.LESS),n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),n.useProgram(be.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(Ae.mode,Pn),n.drawElements(n.TRIANGLES,j,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),M>0&&(n.uniform1i(Ae.mode,Ln),n.drawElements(n.TRIANGLES,M,n.UNSIGNED_INT,j*je)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.useProgram(xe.program),n.uniform1i(ke.mode,Rn),n.uniform1i(ke.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Me),n.uniform1i(ke.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),n.drawElements(n.TRIANGLE_STRIP,P,n.UNSIGNED_INT,Me)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null)};return B(t),{draw(e,t){oe(dr(e),t)},drawTyped:oe,resize:B,materialNote:()=>l&&(u?R?.silkUnavailable()??!1:c)||m&&(u?R?.rubberUnavailable()??!1:p)?Ht:null}}var br=1.1868238913561442,xr=1.2566370614359172,$={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:xr,elevation:br,p:.4,k:.07,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,liftMargin:1,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowAlpha:.05,shade:.2,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:On,light:{dir:a(xr),elevation:br}},{width:Sr,...Cr}=c($),wr=3e3;function Tr(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function Er(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:wr},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=Tr(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var Dr=4,Or=2**-53;function kr(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=Dr)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<Or&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function Ar(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return Mr(s,e,t,n,r,i,a,o);if(c&&a>0)return jr(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=Tr(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function jr(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function Mr(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return kr(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function Nr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Pr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=Ar(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,Nr(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<Nr(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var Fr=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},Ir=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,Lr=e=>e>0&&e<1?e:$.stretchSmoothDecay,Rr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap;function zr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Br(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}function Vr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;if(a.last!==null&&(a.driver.step(n-a.last),a.driver.idle)){r(a.from.length,a.to);return}a.last=n;let o=Br(a.seq,a.from,a.to,a.ex,a.L0-a.driver.value);a.current=o,e.draw(o,zr(o),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<zr(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=new Fr(Ir(e.accel()),Lr(e.decay()),Rr(e.snap()),{value:Number.isFinite(d)?d:0});f.to(0);let p=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:f,last:null,frame:null,current:c},p||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Hr(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function Ur(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var Wr=e=>Math.min(1,Math.max(0,e)),Gr=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function Kr(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=Ur(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=Gr(i,n,a>0?Wr(l/a):1)}return c}let u=o>0;if(u&&s>0)return qr(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?Wr((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=Gr(s,n,g),f=g,d+=m,p+=1}return c}function qr(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return kr(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=Gr(n[a],r,i)}),e}function Jr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Yr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=Kr(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,Jr(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<Jr(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=Hr(c,n,o,e.speed()),m=Ur(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Xr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var Zr=Math.PI/4,Qr=.8,$r=-Math.SQRT1_2,ei=-Math.SQRT1_2;function ti(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}var ni=256,ri=1.25;function ii(e,t){if(t&&t.front===e)return t;let n=ti(e)??[255,255,255],r=[];for(let e=0;e<ni;e+=1){let t=e/255*ri,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function ai(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function oi(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function si(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function ci(e,t,n,r,i,a,o){return ai(e,t,n,a,o)-r*si(e,t,n,i,a,o)}function li(e,t,n,r,i,a,o){return oi(e,t,n,a,o)-r*si(e,t,n,i,a,o)}function ui(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??$r,u=n.light?.dir.y??ei,d=n.light?.elevation??Zr,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*Qr,v=.9*Qr;e.globalAlpha=n.shadow.alpha,e.fillStyle=n.shadow.color;for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(ci(s,a,c,l,f,t,1),li(s,a,c,u,f,t,1)),e.lineTo(ci(s,a,c,l,f,t,-1),li(s,a,c,u,f,t,-1)),e.lineTo(ci(s,a,c,l,f,t+1,-1),li(s,a,c,u,f,t+1,-1)),e.lineTo(ci(s,a,c,l,f,t+1,1),li(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/ri*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(ai(s,a,c,t,1),oi(s,a,c,t,1)),e.lineTo(ai(s,a,c,t,-1),oi(s,a,c,t,-1)),e.lineTo(ai(s,a,c,t+1,-1),oi(s,a,c,t+1,-1)),e.lineTo(ai(s,a,c,t+1,1),oi(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function di(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=ii(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:ii(e,i),ui(n,t,a,r,i)}else{n.globalAlpha=a.shadow.alpha,n.strokeStyle=a.shadow.color,n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(Xr(e),t)},drawTyped:s,resize:o}}var fi=127;function pi(){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0}}}function mi(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return pi();let i=e.getImageData(0,0,n,r).data,a=n,o=r,s=-1,c=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=fi||(a=Math.min(a,t),o=Math.min(o,e),s=Math.max(s,t),c=Math.max(c,e));let l=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>fi};return s<a||c<o?{inside:l,bounds:{x:0,y:0,w:0,h:0}}:{inside:l,bounds:{x:a/t,y:o/t,w:(s-a+1)/t,h:(c-o+1)/t}}}async function hi(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?pi():(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),mi(i,n))}function gi(e,t,n,r=`machine`){let i=e.length,a=()=>Int32Array.from({length:i},(e,t)=>t);if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=_i(i,v,y),O=new Int32Array(i),k=0;for(let{c:e}of E)for(let t of vi(e.members,D,h,v,y)){let e=t.length;if(r===`hand`){let n=Math.floor((e-1)/2);for(let e=n;e>=0;--e)O[k++]=t[e];for(let r=n+1;r<e;r+=1)O[k++]=t[r]}else for(let e of t)O[k++]=e}return O}function _i(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function vi(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function yi(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function bi(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=yi(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var xi=2,Si=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,Ci=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/xi),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),wi=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Ti(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=Ci(a);if(n=o,r&&Si(r.key,o))return wi(r.result);let s=i.find(e=>Si(e.key,o));if(s)return wi(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,xi);return{stitches:bi(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&Si(n,o)&&(r={key:o,result:e}),wi(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function Ei(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function Di(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*Ei(o,r)}})}function Oi(e,t,n){return Math.min(t,n*e)}var ki=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),Ai=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),ji=12,Mi=2e-14;function Ni(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<ki.length;r++){let s=ki[r],c=Ai[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function Pi(e,t,n){if(n===0)return e;let[r,i]=Ni(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<ji;n++){let[n,r]=Ni(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=Mi*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function Fi(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<ji;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=Mi*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function Ii(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=Pi(a,t,n),s=t.n-1,c=Array(t.n);if(n===0){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*Ei(a,t.p)}}return Ri(e,c,t.tau)}let l=Math.abs(r);if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*Ei(a,t.p)}}return Ri(e,c,t.tau)}let u=Math.sqrt(Math.max(0,o*o-i*i)),d=Fi(u/l,t.work),f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*Ei(u,t.p)}}return Ri(e,c,t.tau)}function Li(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function Ri(e,t,n){return Li(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function zi(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=Pi(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{Li(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)};if(i===0){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*Ei(r,t.p))}d();return}let f=Math.abs(a);if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*Ei(a,t.p))}d();return}let p=Math.sqrt(Math.max(0,c*c-o*o)),m=Fi(p/f,t.work),h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*Ei(c,t.p))}d()}var Bi=64,Vi=256,Hi=4,Ui=16,Wi=Math.sin(Math.PI/18),Gi=new Float64Array(Bi),Ki=new Float64Array(Bi);function qi(){let e=Bi/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=Bi;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=Bi*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);Gi[t]=(1-e)*.5,Gi[63-t]=(1+e)*.5,Ki[t]=r,Ki[63-t]=r}}qi();function Ji(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<Bi;n++){let o=Gi[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*Ki[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=Bi),[r,i]}var Yi=new Map;function Xi(e){let t=Yi.get(e);if(t)return t;let n=new Float64Array(Vi),r=new Float64Array(Vi);for(let t=0;t<Vi;t++){let i=t/255;n[t]=Hi*i*i,r[t]=Ji(n[t],e)[0]}let i={p:e,r:n,length:r};return Yi.set(e,i),i}function Zi(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function Qi(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?Ji(s,r,t.work)[0]:t.L0/o)*(1+n),l=Zi(Xi(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,Ui);e++){let[e,n]=Ji(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function $i(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/Wi),a=Math.min(d,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(d,a):Math.min(d,Math.max(0,a+o))}function ea(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return Di(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=Qi(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return Di(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=$i(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*Ei(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function ta(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:Qi(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=$i(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*Ei(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var na={shape:j,shapeInto:M},ra=[[`bezier`,na],[`catenary`,{shape:Ii,shapeInto:zi}],[`arch`,{shape:ea,shapeInto:ta}],[`wire`,{shape:Be,shapeInto:Ve,boundInto:Ye}]],ia=new Map(ra);function aa(){return ra.map(([,e])=>e)}function oa(e){return ia.get(e)??na}function sa(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var ca=1e-12;function la(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>ca*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var ua=.004,da=.002,fa=1,pa=80,ma=16,ha=8,ga=5e6;function _a(e,t,n,r,i,a,o,s,c){let l=o-r,u=s-i,d=c-a,f=l*l+u*u+d*d,p=0;f>0&&(p=((e-r)*l+(t-i)*u+(n-a)*d)/f,p=p<0?0:p>1?1:p);let m=r+l*p-e,h=i+u*p-t,g=a+d*p-n;return m*m+h*h+g*g}function va(e,t,n,r,i,a,o,s,c){let l=a-n,u=o-r,d=Math.hypot(l,u);if(!(d>1e-12)){let a=(e-n)**2+(t-r)**2,o=c*c-a;return o>0?Math.max(i,s)+Math.sqrt(o):-1/0}let f=l/d,p=u/d,m=(e-n)*f+(t-r)*p,h=e-(n+f*m),g=t-(r+p*m),_=c*c-(h*h+g*g);if(!(_>0))return-1/0;let v=Math.sqrt(_),y=(s-i)/d,b=Math.max(-m,-v),x=Math.min(d-m,v);if(b>x)return-1/0;let S=i+y*m,C=y*v/Math.sqrt(1+y*y);return C<b&&(C=b),C>x&&(C=x),S+y*C+Math.sqrt(Math.max(0,_-C*C))}var ya=(e,t,n)=>!(e.maxX+n<t.minX||t.maxX+n<e.minX||e.maxY+n<t.minY||t.maxY+n<e.minY),ba=(e,t)=>{if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(e[n]!==t[n])return!1;return!0};function xa(e,t,n,r,i){let a=1/0;for(let o=r;o<i;o+=1){let r=n[o*3],s=n[o*3+1],c=(e-r)**2+(t-s)**2;if(o+1<i){let i=n[o*3+3]-r,a=n[o*3+4]-s,l=i*i+a*a;if(l>0){let n=((e-r)*i+(t-s)*a)/l;n=n<0?0:n>1?1:n,c=Math.min(c,(e-r-i*n)**2+(t-s-a*n)**2)}}c<a&&(a=c)}return a}function Sa(e,t,n,r,i,a){let o=a*a;for(let s=t;s+1<n;s+=ha){let t=Math.min(n-1,s+ha),c=1/0,l=1/0,u=-1/0,d=-1/0;for(let n=s;n<=t;n+=1){let t=e[n*3],r=e[n*3+1];t<c&&(c=t),t>u&&(u=t),r<l&&(l=r),r>d&&(d=r)}for(let n=r;n+1<i;n+=ha){let r=Math.min(i-1,n+ha),f=1/0,p=1/0,m=-1/0,h=-1/0;for(let t=n;t<=r;t+=1){let n=e[t*3],r=e[t*3+1];n<f&&(f=n),n>m&&(m=n),r<p&&(p=r),r>h&&(h=r)}if(!(u+a<f||m+a<c||d+a<p||h+a<l)){for(let i=s;i<=t;i+=1)if(xa(e[i*3],e[i*3+1],e,n,r+1)<o)return!0;for(let i=n;i<=r;i+=1)if(xa(e[i*3],e[i*3+1],e,s,t+1)<o)return!0}}}return!1}function Ca(e,t,n,r,i,a){for(let[o,s,c,l]of[[t,n,r,i],[r,i,t,n]])for(let t=o;t<s;t+=1)for(let n=c;n+1<l;n+=1)if(_a(e[t*3],e[t*3+1],e[t*3+2],e[n*3],e[n*3+1],e[n*3+2],e[n*3+3],e[n*3+4],e[n*3+5])<a)return!0;return!1}function wa(e,t,n,r){let i=e.center,a=1/0;for(let[o,s]of[[n,r],[r,n]])for(let n=e.start[o];n<e.start[o+1];n+=1)for(let r=e.start[s];r+1<e.start[s+1];r+=1){let e=_a(i[n*3],i[n*3+1],t[n],i[r*3],i[r*3+1],t[r],i[r*3+3],i[r*3+4],t[r+1]);e<a&&(a=e)}return Math.sqrt(a)}function Ta(e,t,n,r,i,a){let o=e.center,s=new Float64Array(t.length);for(let t of r)for(let n=e.start[t];n<e.start[t+1];n+=1)s[n]=o[n*3+2];let c=t=>{let r=0;for(let i=e.start[t];i<e.start[t+1];i+=1)r=Math.max(r,n[i]);return r},l=new Map;for(let u=0;u<=r.length;u+=1){let u=!1;for(let d of r)for(let r of i[d]){if(r<d)continue;let i=c(d),f=c(r);if(!(i>0)&&!(f>0))continue;let p=wa(e,t,d,r);if(p>=a-.005)continue;let m=`${d},${r}`,h=l.get(m);if(h===void 0&&(h=wa(e,s,d,r),l.set(m,h)),p>=Math.min(h,a)-.005)continue;let g=i>=f?d:r;for(let r=e.start[g];r<e.start[g+1];r+=1)n[r]=0,t[r]=o[r*3+2];u=!0}if(!u)break}}function Ea(e,t,n,r,i){let a=(n,r)=>{let i=t[n],a=t[n+1]-1,[o,s]=r===0?[i,i+1]:[a,a-1];return Math.hypot(e[s*3]-e[o*3],e[s*3+1]-e[o*3+1])},o=(n,r)=>{let o=t[n],s=t[n+1]-o,c=t[r],l=t[r+1],u=(t,r)=>{let s=o+t,u=i+a(n,r);return xa(e[s*3],e[s*3+1],e,c,l)<u*u},d=-1;for(;d+1<s&&u(d+1,0);)d+=1;let f=s;for(;f-1>=0&&u(f-1,1);)--f;let p=[];for(let e=0;e<=d;e+=1)p.push(o+e);for(let e=Math.max(f,d+1);e<s;e+=1)p.push(o+e);return p},s=o(n,r);if(s.length===0)return!1;let c=o(r,n);if(c.length===0)return!1;let l=i+Math.max(a(n,0),a(n,1),a(r,0),a(r,1)),u=l*l;for(let t of s)for(let n of c)if((e[t*3]-e[n*3])**2+(e[t*3+1]-e[n*3+1])**2<u)return!0;return!1}function Da(e,t,n,r,i,a,o,s){let c=n-e,l=r-t,u=o-i,d=s-a,f=c*d-l*u;if(Math.abs(f)<1e-12)return!1;let p=i-e,m=a-t,h=(p*d-m*u)/f,g=(p*l-m*c)/f;return h>=0&&h<=1&&g>=0&&g<=1}function Oa(e,t,n,r,i){let a=t[n],o=t[n+1],s=t[r],c=t[r+1]-s,l=o-a,u=i*i,d=t=>{let n=s+t;return xa(e[n*3],e[n*3+1],e,a,o)<u},f=-1;for(;f+1<c&&d(f+1);)f+=1;let p=c;for(;p-1>=0&&d(p-1);)--p;let m=new Uint8Array(c),h=new Uint8Array(l);for(let e=0;e<c;e+=1)m[e]=e<=f||e>=p?0:1;if(f>=0||p<c)for(let t=0;t<l;t+=1){let n=a+t,r=e[n*3],i=e[n*3+1],o=1/0,l=0;for(let t=0;t+1<c;t+=1){let n=s+t,a=e[n*3],c=e[n*3+1],u=e[n*3+3]-a,d=e[n*3+4]-c,f=u*u+d*d,p=f>0?((r-a)*u+(i-c)*d)/f:0;p=p<0?0:p>1?1:p;let m=(r-a-u*p)**2+(i-c-d*p)**2;m<o&&(o=m,l=t+p)}(l<=f||l>=p)&&(h[t]=1)}return[h,m]}function ka(){let e=new Float64Array,t=new Uint8Array,n=[],r=NaN,i,a=new Uint8Array,o=NaN;return{reset:()=>{a.fill(0),t.fill(0),n=[],i=void 0,r=NaN},get budgetHits(){let e=0;for(let t=0;t<a.length;t+=1)e+=a[t];return e},apply({base:s,out:c,stitches:l,order:u,reach:d,width:f,rebuilt:p,lightDir:m,elevation:h,zLimit:g=1/0}){let _=s.count,v=s.start[_],y=s.center;(e.length!==v||t.length!==_)&&(e=new Float64Array(v),t=new Uint8Array(_),n=[],i=void 0);let b=i!==void 0&&i.length===u.length;if(b&&i){for(let e=0;e<u.length;e+=1)if(i[e]!==u[e]){b=!1;break}}a.length!==_&&(a=new Uint8Array(_)),b&&Object.is(r,d)&&Object.is(o,g)||(o=g,t.fill(0),i=Int32Array.from(u),r=d);let x=new Int32Array(_);for(let e=0;e<u.length;e+=1)x[u[e]]=e;let S=d+ua;(d+da)**2;let C=Array(_),w=0;for(let e=0;e<_;e+=1){let t={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let n=s.start[e];n<s.start[e+1];n+=1){let e=y[n*3],r=y[n*3+1];e<t.minX&&(t.minX=e),e>t.maxX&&(t.maxX=e),r<t.minY&&(t.minY=r),r>t.maxY&&(t.maxY=r)}C[e]=t,Number.isFinite(t.minX)&&(w=Math.max(w,t.maxX-t.minX,t.maxY-t.minY))}let T=Math.max(4*S,w/2,1),E=new Map,D=(e,t)=>e*1048576+t,O=e=>[Math.floor((e.minX-S)/T),Math.floor((e.minY-S)/T),Math.floor((e.maxX+S)/T),Math.floor((e.maxY+S)/T)];for(let e=0;e<_;e+=1){if(!Number.isFinite(C[e].minX))continue;let[t,n,r,i]=O(C[e]);for(let a=t;a<=r;a+=1)for(let t=n;t<=i;t+=1){let n=D(a,t),r=E.get(n);r?r.push(e):E.set(n,[e])}}let k=Array(_);for(let e=0;e<_;e+=1)k[e]=[];for(let e=0;e<_;e+=1){if(!Number.isFinite(C[e].minX))continue;let t=new Set,[n,r,i,a]=O(C[e]);for(let o=n;o<=i;o+=1)for(let n=r;n<=a;n+=1)for(let r of E.get(D(o,n))??[])r<=e||t.has(r)||(t.add(r),ya(C[e],C[r],S)&&Sa(y,s.start[e],s.start[e+1],s.start[r],s.start[r+1],S)&&(k[e].push(r),k[r].push(e)))}for(let e of k)e.sort((e,t)=>e-t);let A=new Uint8Array(_);for(let e=0;e<_;e+=1)if(!(t[e]===1&&p[e]!==1&&ba(n[e],k[e]))){A[e]=1;for(let t of k[e])A[t]=1;for(let t of n[e]??[])t<_&&(A[t]=1)}n=k;let j=new Uint8Array(_),M=new Float64Array(v);for(let t=0;t<v;t+=1)M[t]=y[t*3+2]+e[t];for(let n=0;n<_;n+=1){if(j[n]===1)continue;let r=[],i=[n];j[n]=1;let o=!1;for(;i.length>0;){let e=i.pop();r.push(e),A[e]===1&&(o=!0);for(let t of k[e])j[t]!==1&&(j[t]=1,i.push(t))}if(!o)continue;for(let n of r){t[n]=1,a[n]=0;for(let t=s.start[n];t<s.start[n+1];t+=1)e[t]=0,M[t]=y[t*3+2]}if(r.length<2)continue;r.sort((e,t)=>x[e]-x[t]);let c=(t=>{let n=t+ua,i=new Map;for(let e of r)i.set(e,[]);for(let e of r)for(let r of k[e]){if(r<e)continue;let[a,o]=x[e]<x[r]?[e,r]:[r,e],[c,l]=Oa(y,s.start,a,o,t),u=Ea(y,s.start,a,o,t),d=u?Math.min(n,f+ua):n,p=!u&&Ca(y,s.start[a],s.start[a+1],s.start[o],s.start[o+1],t*t);i.get(a).push({v:o,mask:c,other:l,close:p,D:d}),i.get(o).push({v:a,mask:l,other:c,close:p,D:d})}let a=(t+da)**2,o=Math.sqrt(a),c=new Map,l=e=>{let t=0;for(let n=s.start[e];n<s.start[e+1];n+=1)t=Math.max(t,y[n*3+2]);return t};for(let e of r){let t=l(e);for(let{v:n}of i.get(e))t=Math.max(t,l(n));c.set(e,Math.min(g,t+(i.get(e).length+1)*2*n))}let u=new Map;for(let e of r)u.set(e,ja(s,e,i.get(e),n,o));let d={left:ga},p=new Map,m=new Map,h=0;for(let t=0;t<ma;t+=1){let t=!1;for(let o of r){let r=s.start[o],l=s.start[o+1]-r;if(l<8)continue;let f=p.get(o);if(f!==void 0){let e=(m.get(o)??-1)>f;if(!e){for(let{v:t}of i.get(o))if((m.get(t)??-1)>f){e=!0;break}}if(!e)continue}if(h+=1,p.set(o,h),d.left<=0)break;let g=Ma(s,M,e,u.get(o),n,a,c.get(o),d);if(!g)continue;let _=!1;for(let t=0;t<l;t+=1)g[t]>e[r+t]+1e-12&&(e[r+t]=g[t],M[r+t]=y[(r+t)*3+2]+g[t],_=!0);_&&(h+=1,m.set(o,h),t=!0)}if(!t||d.left<=0)break}return d.left<=0})(d);Ta(s,M,e,r,k,d),c&&(a[n]=1)}let N=Math.tan(h);for(let t=0;t<_;t+=1){let n=s.start[t],r=s.start[t+1],i=!1;for(let t=n;t<r;t+=1){let n=e[t];if(!(n>0))continue;i=!0;let r=c.center[t*3],a=c.center[t*3+1],o=y[t*3+2]+n;c.center[t*3+2]=o;let s=o/N;c.shadow[t*2]=r-m.x*s,c.shadow[t*2+1]=a-m.y*s}i&&c.band&&c.bandNormal&&la(c.center,n,r-n,l[t],c.band,c.bandNormal)}}}}function Aa(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?((e-n)*o+(t-r)*s)/c:0;return l=l<0?0:l>1?1:l,(e-n-o*l)**2+(t-r-s*l)**2}function ja(e,t,n,r,i){let a=e.start[t],o=e.start[t+1]-a,s=e.center,c=new Float64Array(o),l=new Float64Array(o),u=new Float64Array(o),d=new Float64Array(o);for(let e=0;e<o;e+=1){let t=a+e;if(c[e]=s[t*3],l[e]=s[t*3+1],u[e]=s[t*3+2],e>0){let t=Math.hypot(c[e]-c[e-1],l[e]-l[e-1],u[e]-u[e-1]);d[e]=d[e-1]+t}}let f=[],p=new Int32Array(o+1),m=[],h=[];for(let t=0;t<o;t+=1)if(p[t]=m.length,!(t<fa||t>o-1-fa))for(let{v:r,mask:i,other:a,close:o,D:u}of n){if(i[t]!==1)continue;let n=e.start[r],d=e.start[r+1];for(let e=n;e+1<d;e+=1){if(a[e-n]===1&&a[e+1-n]===1)continue;let r=s[e*3],i=s[e*3+1],d=s[e*3+3],p=s[e*3+4];if(Aa(c[t],l[t],r,i,d,p)>=u*u)continue;let g=Da(c[t-1],l[t-1],c[t],l[t],r,i,d,p)||Da(c[t],l[t],c[t+1],l[t+1],r,i,d,p);m.push(e),f.push(u),h.push(g?o?1:2:0)}}p[o]=m.length;let g=[],_=[],v=[],y=[],b=[];for(let{v:t,mask:r,other:i,D:a}of n){let n=e.start[t],u=a-ua+da,d=u*u;for(let u=n;u<e.start[t+1];u+=1){if(i[u-n]===1)continue;let e=s[u*3],t=s[u*3+1];for(let n=1;n+1<o-1;n+=1)r[n]!==1&&r[n+1]!==1||Aa(e,t,c[n],l[n],c[n+1],l[n+1])>=d||(g.push(u),_.push(n),b.push(a),v.push(r[n]),y.push(r[n+1]))}}return{first:a,n:o,px:c,py:l,z0:u,arc:d,segAt:p,segM:Int32Array.from(m),segD:Float64Array.from(f),segKind:Uint8Array.from(h),nearM:Int32Array.from(g),nearD:Float64Array.from(b),nearJ:Int32Array.from(_),nearMaskJ:Uint8Array.from(v),nearMaskJ1:Uint8Array.from(y)}}function Ma(e,t,n,r,i,a,o,s){let{first:c,n:l,px:u,py:d,z0:f,arc:p,segAt:m,segM:h,segD:g,segKind:_,nearM:v,nearD:y,nearJ:b,nearMaskJ:x,nearMaskJ1:S}=r;if(h.length===0&&v.length===0)return null;let C=e.center,w=p[l-1],T=new Float64Array(l);for(let e=0;e<l;e+=1)T[e]=w>0?Math.sin(Math.PI*p[e]/w):0;T[0]=0,T[l-1]=0;let E=w/Math.PI,D=0;for(let e=0;e<l;e+=1)D=Math.max(D,n[c+e]);let O=new Float64Array(l);for(let e=0;e<l;e+=1)O[e]=D*T[e];let k=new Float64Array(l),A=[],j=[],M=new Float64Array(l),N=!1;for(let e=0;e<pa&&s.left>0;e+=1){s.left-=h.length+v.length+l;for(let e=0;e<l;e+=1)k[e]=f[e]+O[e];M.fill(-1/0);for(let e=0;e<v.length;e+=1){let n=v[e],r=b[e],i=_a(C[n*3],C[n*3+1],t[n],u[r],d[r],k[r],u[r+1],d[r+1],k[r+1]),a=y[e];if(!(i<(a-ua+da)**2))continue;let o=a-Math.sqrt(i)+1e-4;x[e]===1&&k[r]+o>M[r]&&(M[r]=k[r]+o),S[e]===1&&k[r+1]+o>M[r+1]&&(M[r+1]=k[r+1]+o)}let e=D;for(let n=fa;n<=l-1-fa;n+=1){A.length=0,j.length=0;let r=M[n]>k[n];for(let e=m[n];e<m[n+1];e+=1){let i=h[e],a=C[i*3],o=C[i*3+1],s=C[i*3+3],c=C[i*3+4],l=t[i],f=t[i+1],p=g[e],m=va(u[n],d[n],a,o,l,s,c,f,p);if(m===-1/0)continue;let v=-va(u[n],d[n],a,o,-l,s,c,-f,p),y=_[e];(y===1||y===2&&k[n]>v)&&(v=-1/0),A.push(v),j.push(m),k[n]>v&&k[n]<m&&(r=!0)}if(!r)continue;let i=Math.max(k[n],M[n]);for(let e=!0;e;){e=!1;for(let t=0;t<A.length;t+=1)i>A[t]&&i<j[t]&&(i=j[t],e=!0)}let a=Math.min(i,o)-f[n];if(!(T[n]>1e-6))continue;let s=a/T[n];s>e&&(e=s)}if(e>E&&(e=E),!(e>D+1e-9))break;D=e,N=!0;for(let e=0;e<l;e+=1)O[e]=D*T[e]}return N?O:null}var Na=33,Pa=[0,.25,.5,.75,1].map(e=>e*2),Fa=[-u,0,u],Ia=8,La=Ti(hi),Ra=null,za=0;function Ba(e){let t=new URLSearchParams(e.startsWith(`?`)?e.slice(1):e);if(t.get(`renderer`)!==`mesh`)return;let n={};for(let e of[`cameraFov`,`threadWiden`,`threadMinRadius`]){let r=t.get(e);if(r===null||r.trim()===``)continue;let i=Number(r);Number.isFinite(i)&&(n[e]=i)}return n}function Va(e){return Ba(e)?{...$,liftMargin:0}:$}function Ha(e){if(!e)return``;let t=new URLSearchParams;t.set(`renderer`,`mesh`);let n={cameraFov:45,threadWiden:0,threadMinRadius:On};for(let r of[`cameraFov`,`threadWiden`,`threadMinRadius`]){let i=e[r];i!==void 0&&i!==n[r]&&t.set(r,String(i))}return t.toString()}function Ua(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var Wa=new WeakMap;function Ga(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var Ka=0,qa,Ja;function Ya(e){Ja=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Xa=(e,t,n)=>({x:e.x+t,y:e.y+n});function Za(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function Qa(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function $a(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function eo(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function to(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function no(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function ro(e){return{smax:no(e.wireSmax,1,N),lref:to(e.wireLref,80),alignScale:to(e.alignScale,60)}}var io=/^#[0-9a-f]{6}$/i;function ao(e){return to(e.bandWidth,$.bandWidth)}function oo(e){return e.section===`band`}function so(e){return oo(e)?ao(e)/2:e.width/2}function co(e){return oo(e)?0:e.width}function lo(e){return oo(e)?ao(e):e.width}function uo(e){return e.stretchMode!==`absolute`}function fo(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:$.stretchUnit}function po(e,t,n,r){if(uo(r)||e===0)return e;let i=O(t,n),a=e*fo(r)/i;return Number.isFinite(a)&&a>0?a:0}function mo(e,t,n){return Math.max(2,po(2,e,t,n))}function ho(e,t){let n=new Float64Array(e.length);if(!uo(t)){let e=fo(t);return n.fill(e>0?e:0)}let i=r(t.pitch,co(t),t.elevation,t.shadowRatio);for(let r=0;r<e.length;r+=1){let a=e[r],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[r]=O(a,Oi(o,i,t.k))}return n}function go(e){let t=oa(e.model)===oa(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:$.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:$.gravityBeta,i=2*Math.PI,o=ro(e);return{...e,stretch:$a(e.stretch,2),stretchMode:uo(e)?`ratio`:`absolute`,stretchUnit:fo(e),twist:$a(e.twist,u),cameraTilt:$a(e.cameraTilt,u),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:$.cameraTurn,cameraZoom:to(e.cameraZoom,$.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:$.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:$.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:$.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:$.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:$.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:$.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:$.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:$.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:$a(e.align,1),phiMax:$a(e.phiMax,d),phiRef:eo(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:$.lightAzimuth,stretchDuration:to(e.stretchDuration,$.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,stretchSpeed:to(e.stretchSpeed,$.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:$.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:$.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:$.stretchSmoothSnap,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:to(e.stretchLineDuration,$.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,wireSmax:o.smax,wireLref:o.lref,alignScale:o.alignScale,liftMargin:Number.isFinite(e.liftMargin)?Math.max(0,e.liftMargin):$.liftMargin,section:oo(e)?`band`:`round`,bandWidth:ao(e),bandFront:io.test(e.bandFront)?e.bandFront:$.bandFront,bandBack:io.test(e.bandBack)?e.bandBack:$.bandBack,material:e.material===`silk`||e.material===`rubber`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:$.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:$.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:$.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):$.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):$.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:$.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:$.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:$.rubberRim,light:{dir:a(e.lightAzimuth),elevation:e.elevation}}}function _o(e,t,n,i,a,o,s,c){let l={dir:n.light.dir,elevation:n.elevation},f=r(n.pitch,co(n),l.elevation,n.shadowRatio),p=$a(n.phiMax,d),m=$a(n.twist,u),h=$a(n.align,1),g=ro(n),_=2*Math.PI,v={alpha:(n.gravityAlpha%_+_)%_,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let r=0;r<t.length;r+=1){let u=t[r],d=$a(a===void 0?n.stretch:a[r],2);if(s){let e=r*4;if(s.valid[r]===1&&Object.is(s.e[r],d)&&Object.is(s.ends[e],u.a.x)&&Object.is(s.ends[e+1],u.a.y)&&Object.is(s.ends[e+2],u.b.x)&&Object.is(s.ends[e+3],u.b.y))continue;s.valid[r]=1,s.e[r]=d,s.ends[e]=u.a.x,s.ends[e+1]=u.a.y,s.ends[e+2]=u.b.x,s.ends[e+3]=u.b.y}c&&(c[r]=1);let _=Math.hypot(u.b.x-u.a.x,u.b.y-u.a.y),y=e.start[r],b=Oi(_,f,n.k),x=po(d,u,b,n),S=uo(n)?void 0:mo(u,b,n);i.shapeInto(u,{e:x,H:b,p:n.p,n:Na,phiMax:p,eRef:eo(n.phiRef),tau:o===void 0?m*sa(u):o,twist:m,gravity:v,align:h,...g,...S===void 0?{}:{eMax:S}},e.center,y*3);let C=e.start[r+1]-y,w=Math.tan(l.elevation);for(let t=0;t<C;t+=1){let n=y+t,r=y+(t===0?0:t-1),i=y+(t===C-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],s=Math.hypot(a,o),c=-o/s,u=a/s;e.normal[n*2]=c,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/w;e.shadow[n*2]=d-l.dir.x*t,e.shadow[n*2+1]=f-l.dir.y*t}e.lightSide[n]=l.dir.x*c+l.dir.y*u}e.band&&e.bandNormal&&la(e.center,y,C,u,e.band,e.bandNormal)}}function vo(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function yo(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,co(e),e.shadowRatio,e.k,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function bo(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function xo(e,t){if(e&&e.length===t){let n=new Uint8Array(t),r=!0;for(let i=0;i<t;i+=1){let a=e[i];if(!Number.isInteger(a)||a<0||a>=t||n[a]===1){r=!1;break}n[a]=1}if(r)return e}return Int32Array.from({length:t},(e,t)=>t)}function So(){let e,t,n,r,i=0,a=ka(),o=new Uint8Array,s=e=>{let t=e*Na;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(c,l,u,d,f){e&&t&&n&&e.count===c.length||(e=s(c.length),t=s(c.length),n={e:new Float64Array(c.length),ends:new Float64Array(c.length*4),valid:new Uint8Array(c.length)},r=void 0);let p=yo(l);bo(r,p)||n.valid.fill(0),r=p,oo(l)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=c.length;t+=1)e.start[t]=t*Na;o.length!==c.length&&(o=new Uint8Array(c.length)),o.fill(0),_o(e,c,l,oa(l.model),u,void 0,n,o),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal));let m=Number.isFinite(l.liftMargin)&&l.liftMargin>0?l.liftMargin:0;return m>0&&c.length>1?a.apply({base:e,out:t,stitches:c,order:xo(d,c.length),reach:co(l)+m,width:co(l),rebuilt:o,lightDir:l.light.dir,elevation:l.elevation,...f===void 0?{}:{zLimit:f}}):a.reset(),t},get allocations(){return i},get liftBudgetHits(){return a.budgetHits}}}function Co(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function wo(e,t,n,r,i){let a=e.length*Na,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*Na;return _o(o,e,t,n,r,i),Co(o)}function To(e){let t=ro(e);return JSON.stringify([e.text,e.font,e.angle,e.pitch,Math.min(e.step,.5),e.mergeGap,e.minLen,co(e),e.shadowRatio,e.elevation,e.light.dir.x,e.light.dir.y,e.p,e.k,e.phiMax,eo(e.phiRef),(e.gravityAlpha%(2*Math.PI)+2*Math.PI)%(2*Math.PI),t.smax,t.lref,so(e),uo(e)?`ratio`:[`absolute`,fo(e)]])}var Eo=[0,d/2,d],Do=[0,d];function Oo(e){let t=e.start[e.count];return{count:e.count,start:e.start,center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}}function ko(e,t,n,r,i){let a=Math.tan(n.elevation),o=n.light.dir.x/a,s=n.light.dir.y/a,c=e[0],l=e[e.length-1],u=t.map(e=>e===d?1:Math.sin(e)),f=t.map(e=>e===d?0:Math.cos(e)),p=new Float64Array(t.length),m=u.map(e=>e*e);for(let n=0;n<c.count;n+=1){let a=c.start[n],h=c.start[n+1],g=a+(h-a-1>>1),_=c.center[g*3+2];for(let t=0;t<e.length;t+=1){let n=e[t],r=Math.hypot(n.center[g*3]-c.center[g*3],n.center[g*3+1]-c.center[g*3+1],n.center[g*3+2]);p[t]=t===0||!(_>0)||!(r>0)?1:r/_}let v=p[e.length-1],y=e=>{let n=Math.sin(e)**2,r=0;for(let e=0;e<t.length;e+=1){let i=p[e];for(let r=0;r<t.length;r+=1)r!==e&&(i*=(n-m[r])/(m[e]-m[r]));r+=i}return r};for(let e=a;e<h;e+=1){let n=c.center[e*3],a=c.center[e*3+1],m=c.center[e*3+2],h=(l.center[e*3]-n)/v,g=(l.center[e*3+1]-a)/v;for(let e=0;e<4;e+=1){let c=e%2==0?n:a,l=e%2==0?h:g,_=e<2?0:-(e%2==0?o:s)*m,v=-1/0,b=1/0;for(let e=0;e<t.length;e+=1){let t=p[e]*(l*u[e]+_*f[e]);v=Math.max(v,c+t),b=Math.min(b,c+t)}let x=Math.hypot(l,_),S=Math.atan2(l,_);S>0&&S<d&&(v=Math.max(v,c+y(S)*x));let C=Math.atan2(-l,-_);C>0&&C<d&&(b=Math.min(b,c-y(C)*x)),e%2==0?(i.minX=Math.min(i.minX,b-r),i.maxX=Math.max(i.maxX,v+r)):(i.minY=Math.min(i.minY,b-r),i.maxY=Math.max(i.maxY,v+r))}}}}function Ao(e,t){let n=To(t);if(qa?.key===n)return qa.extent;Ka+=1;let i={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},a=so(t),o=e.length*Na,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*Na;let c=[];for(let n of aa()){if(!n.boundInto){let r=n===oa(`bezier`)?Eo:n===oa(`arch`)?Do:void 0;if(r){for(;c.length<r.length;)c.push(Oo(s));let o=c.slice(0,r.length);for(let s of Pa)r.forEach((r,i)=>_o(o[i],e,{...t,stretch:s,phiMax:0},n,void 0,r)),ko(o,r,t,a,i);continue}let l=Fa;for(let r of Pa)for(let c of l){_o(s,e,{...t,stretch:r},n,void 0,c);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1],r=s.shadow[e*2],o=s.shadow[e*2+1];i.minX=Math.min(i.minX,t-a,r-a),i.minY=Math.min(i.minY,n-a,o-a),i.maxX=Math.max(i.maxX,t+a,r+a),i.maxY=Math.max(i.maxY,n+a,o+a)}}}if(n.boundInto){let o=ro(t),s=r(t.pitch,co(t),t.elevation,t.shadowRatio),c={light:{dir:t.light.dir,elevation:t.elevation},width:2*a};for(let r of e){let e=Oi(Math.hypot(r.b.x-r.a.x,r.b.y-r.a.y),s,t.k);n.boundInto(r,{e:0,H:e,p:t.p,n:Na,phiMax:0,eRef:1,gravity:{alpha:t.gravityAlpha,beta:0},smax:o.smax,lref:o.lref},mo(r,e,t),i,c)}}}return Number.isFinite(i.minX+i.minY+i.maxX+i.maxY)||(i.minX=0,i.minY=0,i.maxX=0,i.maxY=0),qa={key:n,extent:i},i}var jo;function Mo(e,t){if(!(t.liftMargin>0))return;let n=JSON.stringify([To(t),t.liftMargin,t.section]);if(jo?.key===n)return jo.bound;let r=0,i=so(t),a={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},o=e.length*Na,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*Na;for(let n of aa())for(let c of Pa)for(let l of Fa){_o(s,e,{...t,stretch:c},n,void 0,l);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1];r=Math.max(r,s.center[e*3+2]),a.minX=Math.min(a.minX,t-i),a.minY=Math.min(a.minY,n-i),a.maxX=Math.max(a.maxX,t+i),a.maxY=Math.max(a.maxY,n+i)}}let c={limit:r+8*(co(t)+t.liftMargin),centers:a};return jo={key:n,bound:c},c}function No(e,t,n){if(n===void 0||!Number.isFinite(n.centers.minX))return e;let r=n.limit/Math.tan(t.elevation),i=-t.light.dir.x*r,a=-t.light.dir.y*r,{centers:o}=n;return{minX:Math.min(e.minX,o.minX+Math.min(0,i)),minY:Math.min(e.minY,o.minY+Math.min(0,a)),maxX:Math.max(e.maxX,o.maxX+Math.max(0,i)),maxY:Math.max(e.maxY,o.maxY+Math.max(0,a))}}async function Po(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=go(e),{light:a,...o}=i,{stitches:s,bounds:l}=await La.get(i);Ra?.builds!==La.builds&&(Ra={builds:La.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=Ra.orders[u];d||(d=gi(s,i.angle,i.pitch,u),Ra.orders[u]=d,za+=1);let f=Wa.get(r),p=f?.itemsStage??So(),m=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>$a(e,2)):void 0,h=Mo(s,i),g=h?.limit,_=p.build(s,i,m,d,g),v=wo(s,i,oa(i.model),s.map(()=>0),0),y=No(Ao(s,i),i,h),b=y.maxX-y.minX,x=y.maxY-y.minY,S=Math.max(1,Math.ceil(b+16)),C=Math.max(1,Math.ceil(x+16)),w=Ia-y.minX+S-(b+16),T=Ia-y.minY+C-(x+16),E=Za(window.devicePixelRatio),D=window.innerWidth,O=window.innerHeight,k={cssW:D,cssH:O,dpr:E,scale:1},A=S<=D&&C<=O,j=A?{cssW:S,cssH:C,dpr:E,scale:1}:k,M=i.cameraTilt,N=i.cameraTurn,P=i.cameraZoom,F=f;if(!F){let e,t=!0,n=Ba(window.location.search),a=!1;try{n?(e=yr(r,k),a=!0):e=cn(r,M===0&&N===0&&P===1?j:k)}catch{e=di(r,j),t=!1}F={renderer:e,webgl:t,viewportWidth:D,viewportHeight:O,dpr:E,rendererBuilds:1,itemsStage:p,localStitches:s,resolved:i,typedItems:_,offsetX:w,offsetY:T,...a?{mesh:!0}:{}},Wa.set(r,F)}let ee=F.webgl?M:0,te=F.webgl?N:0,I=F.webgl?P:1,L=ee!==0||te!==0||I!==1,R=F.mesh!==void 0,ne=R||L||!A;F.renderer.resize(ne?k:j),f&&(F.viewportWidth=D,F.viewportHeight=O,F.dpr=E);let z=Ga(v,lo(i)),B=z?z.x+w:S/2,re=z?z.y+T:C/2,V=Qa(D/2+i.cameraPanX-B,window.devicePixelRatio),ie=Qa(O/2+i.cameraPanY-re,window.devicePixelRatio),H={x:V+B,y:ie+re},U=ne?H.x-B:0,ae=ne?H.y-re:0,oe=w+U,W=T+ae,se={x:B+U,y:re+ae},G=L||R?{tilt:ee,turn:te,zoom:I,center:se}:void 0,K={x:l.x+oe,y:l.y+W,w:l.w,h:l.h},ce=s.map(({a:e,b:t})=>({a:Xa(e,oe,W),b:Xa(t,oe,W)}));vo(_,oe,W);let q=Co(_);r.style.position=`fixed`,r.style.left=`${ne?0:V}px`,r.style.top=`${ne?0:ie}px`,r.style.transform=`none`;let J={bounds:K,params:o,stitches:ce,items:q,display:{scale:1,dpr:E,cssW:S,cssH:C},view:{tilt:ee,turn:te,zoom:I,center:H},stitchBuilds:La.builds,stitchOrder:d,stitchOrderBuilds:za,extentBuilds:Ka,rendererBuilds:F.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:p.allocations,liftBudgetHits:p.liftBudgetHits,wireClamps:me().clamps,wireUnconverged:me().unconverged,peek:()=>Co(_),stretches:()=>zo(F),...Ja?{setCamera:Ja}:{}};return F.stretches=m,F.order=d,F.liftLimit=g,F.localStitches=s,F.resolved=i,F.typedItems=_,F.offsetX=oe,F.offsetY=W,F.view=G,F.snapshot=J,F.renderer.drawTyped(_,Ua(F,c(i))),window.__textweaving=J,J}function Fo(e){let t=e??document.querySelector(`canvas`);if(t)return Wa.get(t)?.webgl}function Io(e){let t=e??document.querySelector(`canvas`);if(!t)return;let n=Wa.get(t);return n?n.mesh===!0:void 0}function Lo(e){let t=e??document.querySelector(`canvas`);return t?Wa.get(t)?.renderer.materialNote?.()??null:null}function Ro(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=Wa.get(n);r?.snapshot&&(r.snapshot.playing=e)}function zo(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function Bo(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=Wa.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:$a(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>$a(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches,a.order,a.liftLimit),vo(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,Ua(a,c(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.liftBudgetHits=a.itemsStage.liftBudgetHits,o.peek=()=>Co(a.typedItems),t&&(o.items=Co(a.typedItems)),o}var Vo=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowAlpha.shadowRatio.k.shade.ply.plyPitch.plySlope.shininess.plyContrast.step.mergeGap.minLen.alignScale.liftMargin.section.bandWidth.bandFront.bandBack.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),Ho=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],Uo=[[`together`,`同時`],[`sequence`,`順番`]],Wo=[[`absolute`,`絶対値`],[`ratio`,`割合`]],Go=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`]],Ko=[[`machine`,`機械`],[`hand`,`手`]],qo=[[`round`,`丸い線`],[`band`,`帯`]],Jo=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`]],Yo=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`]),Xo=e=>Number.isFinite(e)&&e>0;function Zo(e){let t=oa(e.model);return Ho.find(([e])=>oa(e)===t)?.[0]??`bezier`}var Qo=({params:e})=>Zo(e)===`wire`&&Xo(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,$o=e=>Qo(e)??(Xo(e.params.twist)||Xo(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),es=e=>Qo(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),ts=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,ns=e=>ts(e)??(e.mesh===!1?`?renderer=mesh の描き手で描くときだけ効く`:null),rs=e=>e.section===`band`,is=e=>e.material===`silk`,as=e=>e.material===`rubber`,os=e=>is(e)?`silk`:as(e)?`rubber`:`standard`,ss=e=>e.stretchOrder!==`together`,cs=e=>Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,ls=e=>e.stretchMode!==`absolute`,us=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,ds=e=>us(e)===`speed`,fs=e=>us(e)===`smooth`,ps=`時間の決め方をなめらか以外にすると効く`,ms=({params:e})=>fs(e)?null:`時間の決め方をなめらかにすると効く`,hs={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},gs=(e,t)=>{let n=hs[e];return n===void 0||n===(rs(t)?`band`:`round`)},_s=e=>ts(e)??(Xo(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),vs=e=>rs(e.params)&&e.mesh===!1?`帯の素材は ?renderer=mesh の描き手で描くときだけ効く`:null,ys=`ゴムは ?renderer=mesh の描き手で描くときだけ効く`,bs=e=>e.mesh===!1?ys:null,xs=e=>ts(e)===null&&vs(e)===null&&(!as(e.params)||bs(e)===null),Ss=e=>ts(e)??bs(e)??(as(e.params)?null:`素材をゴムにすると効く`),Cs=e=>ts(e)??vs(e)??(is(e.params)?null:`素材をシルク・サテンにすると効く`),ws=ts,Ts=2*Math.PI,Es=5,Ds=1e3,Os=e=>Math.min(Math.PI/2,Math.max(0,e)),ks=e=>{let t=(e%Ts+Ts)%Ts;return t<Ts?t:0},As={gravityBeta:Qo,twist:({params:e})=>Zo(e)!==`wire`||Xo(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:$o,gravityAlpha:es,wireSmax:Qo,wireLref:Qo,alignScale:e=>$o(e)??(Xo(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=Zo(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:Xo(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=Zo(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},shade:ts,ply:ts,plyPitch:_s,plySlope:_s,plyContrast:_s,shininess:e=>ts(e)??((is(e.params)||as(e.params))&&xs(e)?`素材を標準にすると効く`:Xo(e.params.shade)?null:`陰影を 0 より大きくすると効く`),material:e=>ts(e)??vs(e),silkGloss:Cs,silkSharpness:Cs,silkShift:Cs,silkStreak:Cs,silkDim:Cs,rubberGloss:Ss,rubberSharpness:Ss,rubberRim:Ss,cameraDragTilt:ws,cameraDragTurn:ws,cameraWheelZoom:ws,cameraFov:ns,threadWiden:ns,threadMinRadius:ns,stretchDuration:({params:e})=>us(e)===`duration`?ss(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>us(e)===`duration`?ss(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>ds(e)?null:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>fs(e)||ss(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>fs(e)?ps:null,stretchPull:({params:e})=>fs(e)?ps:ss(e)?null:`伸びの順を順番にすると効く`,stretchPullDelay:({params:e})=>fs(e)?ps:ss(e)?cs(e)>0?null:`引かれの強さを 0 より大きくすると効く`:`伸びの順を順番にすると効く`,stretchSmoothAccel:ms,stretchSmoothDecay:ms,stretchSmoothSnap:ms,stretchUnit:({params:e})=>ls(e)?`伸びの測り方を絶対値にすると効く`:null},js={material:e=>as(e.params)&&ts(e)===null&&bs(e)!==null?ys:is(e.params)||as(e.params)?e.materialNote??null:null};function Ms(e,t){return Yo.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function Ns(e,t){if(typeof $[e]!=`number`)return t;let n=Number(t);return Yo.has(e)?n*Math.PI/180:n}function Ps(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function Fs(e,t=e.value){return Number(t).toFixed(Ps(e.step))}function Is(e,t){let n=Math.max(Fs(e,e.min).length,Fs(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function Ls(e,t,n=e.value){t&&(t.textContent=Fs(e,n))}function Rs(){return n(``,Va(window.location.search))}function zs(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function Bs(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function Vs(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function Hs(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function Us(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 8db51e1 2026-11-24 15:53`}async function Ws(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),Hs(),Us();let r=e??document.querySelector(`canvas`)??void 0,i=Va(window.location.search),a=n(window.location.search,i),o=[Ha(Ba(window.location.search)?{}:void 0),(()=>{let e=new URLSearchParams(window.location.search),t=new URLSearchParams;for(let n of[`plyMode`,`plyGain`,`plyProfile`,`plyNotch`]){let r=e.get(n);r!==null&&t.set(n,r)}return t.toString()})()].filter(e=>e!==``).join(`&`),s=null,c=!1,u=!1,d=document.querySelector(`select[data-param="model"]`);if(!d)throw Error(`Missing control for model`);let f=oa(``);for(let[e,t]of Ho)(e===`bezier`||oa(e)!==f)&&d.add(new Option(t,e));let p=document.querySelector(`select[data-param="section"]`);if(!p)throw Error(`Missing control for section`);for(let[e,t]of qo)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="material"]`);if(!m)throw Error(`Missing control for material`);for(let[e,t]of Jo)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="stretchOrder"]`);if(!h)throw Error(`Missing control for stretchOrder`);for(let[e,t]of Uo)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="stretchMode"]`);if(!g)throw Error(`Missing control for stretchMode`);for(let[e,t]of Wo)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="stretchTiming"]`);if(!_)throw Error(`Missing control for stretchTiming`);for(let[e,t]of Go)_.add(new Option(t,e));let v=document.querySelector(`select[data-param="stitchStyle"]`);if(!v)throw Error(`Missing control for stitchStyle`);for(let[e,t]of Ko)v.add(new Option(t,e));let y=document.querySelector(`input[data-param="stretch"]`);if(!y)throw Error(`Missing control for stretch`);y.max=`2`;let b=document.querySelector(`input[data-param="cameraFov"]`);if(!b)throw Error(`Missing control for cameraFov`);b.max=`60`;let x=new Map,S=new Map;for(let e of Vo){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);x.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(S.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&Is(t,n))}let C=new Map;for(let e of Vo){if(!As[e]&&!js[e])continue;let t=x.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),C.set(e,n)}let w=new Map;for(let e of Object.keys(hs)){let t=x.get(e);w.set(e,t.closest(`.control`)??t.parentElement)}let T=new Set([...w.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),E=()=>{for(let[e,t]of w)t.hidden=!gs(e,a);for(let e of T){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},D=()=>{E();let e={params:a,webgl:Fo(r),materialNote:Lo(r),mesh:Io(r)};for(let t of m.options)t.value===`rubber`&&(t.disabled=bs(e)!==null);for(let[t,n]of C){let r=As[t]?.(e)??null,i=x.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??js[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},O=()=>{for(let e of Vo){let t=e===`stretchOrder`?ss(a)?`sequence`:`together`:e===`stretchMode`?ls(a)?`ratio`:`absolute`:e===`stretchTiming`?us(a):e===`material`?os(a):Ms(e,a[e]),n=x.get(e);n.value=t;let r=S.get(e);n instanceof HTMLInputElement&&n.type===`range`?Ls(n,r):r&&(r.textContent=n.value)}},k=null,A=[],j=null,M=()=>{let e=[l(a,i),o].filter(e=>e!==``).join(`&`),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===j)return;let n=performance.now(),r=A.length<Es?n:A[0]+Ds;if(r>n)k===null&&(k=setTimeout(()=>{k=null,M()},r-n));else{k!==null&&(clearTimeout(k),k=null),A.push(n),A.length>Es&&A.shift();try{history.replaceState(null,``,t),j=t}catch{}}},N=e=>{y.value=String(e),Ls(y,S.get(`stretch`),e)},P=null,F=Er({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>Ro(e,r),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},N(e),D(),Bo(e,t,r)},finish:e=>{a={...a,stretch:e},M()}}),ee=Pr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:$.stretchLineDuration,pull:()=>cs(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(P=null),Ro(e,r)},draw:(e,t,n)=>{P=n?null:e,a={...a,stretch:t},N(t),D(),Bo(t,n,r,n?void 0:e)},finish:e=>{P=null,a={...a,stretch:e},M()}}),te=Yr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ho(e,go(a)):[]},speed:()=>go(a).stretchSpeed,together:()=>!ss(a),pull:()=>cs(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(P=null),Ro(e,r)},draw:(e,t,n)=>{P=n?null:e,a={...a,stretch:t},N(t),D(),Bo(t,n,r,n?void 0:e)},finish:e=>{P=null,a={...a,stretch:e},M()}}),I=Vr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ho(e,go(a)):[]},accel:()=>go(a).stretchSmoothAccel,decay:()=>go(a).stretchSmoothDecay,snap:()=>go(a).stretchSmoothSnap,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(P=null),Ro(e,r)},draw:(e,t,n)=>{P=n?null:e,a={...a,stretch:t},N(t),D(),Bo(t,n,r,n?void 0:e)},finish:e=>{P=null,a={...a,stretch:e},M()}}),L={play(e){fs(a)?I.play(e):ds(a)?te.play(e):ss(a)?ee.play(e):F.play(e)},stop(){F.stop(),ee.stop(),te.stop(),I.stop(),P=null}},R=e=>{L.stop(),a={...a,...e},H(!1)},ne=[];Ya(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);ne.push(t),R(n)}));let z=()=>{let e=Fo(r);return e===!0&&ws({params:a,webgl:e})===null},B=e=>{Number.isFinite(e)&&e>0&&R({cameraZoom:e})},re=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&z())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=z()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){R({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!z())return;R({cameraTilt:Os(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:ks(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(z()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}R(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!z())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;B(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},V=!1,ie=async e=>{u=!1,V=!1,c=!0;let t=a,n=ne;ne=[];try{e&&M(),await Po(t,r,P??void 0),r?.setAttribute(`aria-label`,zs(t.text)),D()}finally{c=!1;for(let e of n)e();u&&H(V)}},H=(e=!0)=>{u=!0,e&&(V=!0),s!==null||c||(s=requestAnimationFrame(async()=>{s=null,await ie(V)}))};for(let e of Vo)x.get(e).addEventListener(`input`,t=>{L.stop();let n=t.currentTarget;a={...a,[e]:Ns(e,n.value)},e===`background`&&Bs(a.background);let r=S.get(e);n instanceof HTMLInputElement&&n.type===`range`?Ls(n,r):r&&(r.textContent=n.value),D(),H()}),x.get(e).addEventListener(`change`,M);let U=document.querySelector(`[data-stretch-to="max"]`),ae=document.querySelector(`[data-stretch-to="min"]`);if(!U||!ae)throw Error(`Missing stretch animation buttons`);U.addEventListener(`click`,()=>L.play(2)),ae.addEventListener(`click`,()=>L.play(0));let oe=document.querySelector(`[data-reset]`);if(!oe)throw Error(`Missing reset button`);oe.addEventListener(`click`,()=>{L.stop(),a=Rs(),Bs(a.background),O(),D(),H()}),r&&re(r),window.addEventListener(`resize`,()=>H()),Vs(window,()=>H()),Bs(a.background),O(),D(),await ie(!1)}await Ws();