(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]);function n(n,r){let i=e(r),a=new URLSearchParams(n.startsWith(`?`)?n.slice(1):n);for(let e of Object.keys(r)){if(t.has(String(e))||!a.has(String(e)))continue;let n=a.get(String(e));if(n===null)continue;let o=r[e];if(typeof o==`string`)i[e]=n;else if(typeof o==`number`&&n.trim()!==``){let t=Number(n);Number.isFinite(t)&&(i[e]=t)}}return i}function r(e,t,n,r){return r*(e-t)*Math.tan(n)}var i=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function a(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...i[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function o(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function s(e,t,n){let r=o(e),i=o(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function c(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,...e.plyMode===`normal`?{plyNormal:{profile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,gain:e.plyGain,notch:e.plyNotch}}:{},light:{dir:a(e.lightAzimuth),elevation:e.elevation},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:e.material===`glass`?{material:{name:`glass`,tint:e.glassTint,edge:e.glassEdge,mirror:e.glassMirror,gloss:e.glassGloss,sharpness:e.glassSharpness,eta:e.glassEta,dispersion:e.glassDispersion,secondGloss:e.glassSecondGloss,secondWidth:e.glassSecondWidth,dispersionMode:e.glassDispersionMode,secondShift:e.glassSecondShift}}:{},shadow:{color:`#17221f`,alpha:e.shadowAlpha},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:s(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:s(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function l(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var u=Math.PI/2,d=Math.PI/2,f=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),p=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),m=12,h=2e-14,g=new Float64Array(2),_=1e8,v=.001;function y(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);g[0]+=o*p,s&&p>0&&(g[1]+=o*((t*c*r*l+n*l*l)/p))}var b=new Float64Array(16),x=new Float64Array(16);for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)b[2*e+n]=.5*(1+t*f[e]),x[2*e+n]=p[e]*.5;var S=new Float64Array(16),C=new Float64Array(16),w=1e-4;function T(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(v,s/(c*r));if(!(l<_))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*f[e]);S[2*e+n]=o+l*Math.sinh(r),C[2*e+n]=p[e]*.5*l*d*Math.cosh(r)}return!0}function E(e,t,n,r,i,a,o,s,c){g[0]=0,g[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)y(e,t,n,r,i,o[c],s[c],a)}function D(e,t,n){return E(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,b,x,n),g[0]}function O(e,t){return D(e,t)}function k(e,t,n,r,i){let a=4*t.H/3;if(n===0&&!(r>0))return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?D(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=T(o,s,u,r,i),f=!1;for(let e=0;e<m;e++){E(o,s,u,r,i,!0,d?S:b,d?C:x,t.work),t.work&&(t.work.newton+=1);let e=g[0]-l;if(!f&&Math.abs(e)<=w*l)f=!0,d=T(o,s,u,r,i);else if(Math.abs(e)<=h*l)break;let n=u-e/g[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function A(e,t){let n=e===0?0:Math.min(d,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(d,n):Math.min(d,Math.max(0,n+t.tau))}function j(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=A(n,t),i=Math.sin(r),a=Math.cos(r),o=k(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function M(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=A(i,t),o=Math.sin(a),s=Math.cos(a),c=k(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var N=.45,P=.0025,F=.3,I=.1,ee=1e-12,te={alpha:Math.PI/2,beta:0},L=12,R=2e-13,z=1e-10,B=16384,V=16384,H=1024,U={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},W=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],G=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],K=W.length*2,q=new Float64Array(K),ne=new Float64Array(K),J=new Float64Array(K),re=new Float64Array(K);for(let e=0,t=0;e<W.length;e++)for(let n of[-1,1]){let r=.5*(1+n*W[e]);q[t]=G[e]*.5,ne[t]=6*r*(1-r),J[t]=3*(1-2*r),re[t]=32*r*(1-r)*(1-2*r),t+=1}var ie=new Float64Array(33),ae=new Float64Array(33),oe=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;ie[e]=3*n-2*n*t,ae[e]=3*t*(1-t),oe[e]=16*n*(1-t)*(1-t)}var se=new Float64Array(K),ce=new Float64Array(K),le=new Float64Array(K),ue=new Float64Array(K),de=new Float64Array(K),fe=new Float64Array(K),pe=new Float64Array(K),me=new Float64Array(K),he=0,ge=0;function _e(){return{clamps:he,unconverged:ge}}function ve(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ye(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function be(e){let{a:t,b:n}=ve(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function xe(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var Se=e=>e*e*e*(e*(e*6-15)+10);function Ce(e,t){let n=Math.floor(e),r=Math.floor(t),i=Se(e-n),a=Se(t-r),o=xe(n,r),s=xe(n+1,r),c=xe(n,r+1),l=xe(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function we(e,t){let n=be(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=Ce(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var Te=e=>Number.isFinite(e)&&e>0?e:0,Ee=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function De(e,t){let n=Te(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*we(e,t)}var Oe=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function ke(e,t,n,r){M(e,Oe(t),n,r);let i=De(e,t);if(i===0)return;let a=ve(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function Ae(e){let t=ve(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function je(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function Me(e,t){for(let n=0;n<K;n++){let r=t.ux*J[n]+t.c*t.gx*re[n],i=t.uy*J[n]+t.c*t.gy*re[n],a=t.uz*J[n]+t.c*t.gz*re[n],o=e.dx*ne[n],s=e.dy*ne[n];ue[n]=o,de[n]=s,fe[n]=r,pe[n]=i,me[n]=a,se[n]=o*o+s*s,ce[n]=o*r+s*i,le[n]=r*r+i*i+a*a}}function Ne(e,t,n=!1){let r=0,i=0;for(let t=0;t<K;t++){let a=ue[t]+e*fe[t],o=de[t]+e*pe[t],s=e*me[t],c=n?Math.sqrt(se[t]+2*e*ce[t]+e*e*le[t]):Math.hypot(a,o,s);r+=q[t]*c,i+=q[t]*(n?ce[t]+e*le[t]:a*fe[t]+o*pe[t]+s*me[t])/c}return t&&(t.quad+=16),[r,i]}function Pe(e,t,n){return 4/3*j(e,{...Oe(t),e:n,n:3})[1].z}function Fe(e,t,n,r){let i=0,a=0;for(let t=0;t<K;t++){let o=r.ux*J[t]+r.c*r.gx*re[t],s=r.uy*J[t]+r.c*r.gy*re[t],c=r.uz*J[t]+r.c*r.gz*re[t],l=e.dx*ne[t],u=e.dy*ne[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=q[t]*m,a+=q[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Ie(e,t,n,r,i,a=n,o=!1){Me(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<L;e++){let[e,n]=Ne(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?z:R)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return ge+=1,c}var Le=new Map;function Re(e,t,n,r){let i=ve(e),a=t.gravity??te;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function ze(e,t){let n=Te(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Re(e,t,n,r):void 0;if(i!==void 0){let e=Le.get(i);if(e!==void 0)return e}let a=Ae(e),o=(t.L0??O(e,t.H))*(1+n),s=De(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??te,u=Math.min(1,Math.max(-1,we(e,t)/I)),d=je(a,s,c,l.alpha,l.beta,u),f=Pe(e,t,n),p={frame:a,radius:Ie(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Le.size>=B){let e=Le.keys().next().value;e!==void 0&&Le.delete(e)}Le.set(i,p)}return p}function Be(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ye(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function Ve(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Qe(e,t,Ee(t),U),s=t.n-1,c=ye(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(he+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(he+=1),l[t]={x:v,y,z:b}}return l}function He(e,t,n,r){let i=Qe(e,t,Ee(t),U);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(he+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function Ue(e,t,n){let r=Qe(e,t,Ee(t),U);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(he+=1),e.x=t,e.y=n,e.z=i}}function We(e,t){let n=ze(e,t);if(!n){let n=j(e,Oe(t)),r=De(e,t);if(r!==0){let t=Ae(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return Ue(e,t,n),n}return Ve(e,t,n)}function Ge(e,t,n,r){let i=ze(e,t);i?Be(e,t,n,r,i):ke(e,t,n,r),He(e,t,n,r)}function Ke(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function qe(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var Je=new Map,Ye=new Map;function Xe(e,t,n){let r=Ae(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??te).alpha,t.lref??80].join(`|`)}function Ze(e,t,n,r){let i=Ye.get(r);if(i!==void 0)return i;let a=Ae(e),o=O(e,t.H)*(1+n),s=Pe(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*u,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),d=(t.gravity??te).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,je(a,t,0,d,0,1)),l!==0){let e=je(a,t,l,d,0,1);S(Fe(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=je(a,t,l,d,e*p,n);S(Fe(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(Ye.size>=H){let e=Ye.keys().next().value;e!==void 0&&Ye.delete(e)}return Ye.set(r,C),C}function Qe(e,t,n,r){let i=Te(n),a=Xe(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=Je.get(o);if(s)return s;let c=Ae(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=Ze(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+ee*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=ie[e],n=ae[e],i=oe[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);Ke(E,a-s,o-s,S),Ke(E,a+s,o+s,S),Ke(E,a-s-w*s,o-s-T*s,S),Ke(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),F=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),F>k&&(k=F);let[I,ee]=qe(c.nx,-r.light.dir.x/C,d),[te,L]=qe(c.ny,-r.light.dir.y/C,d),R=a+A*I,z=o+A*te,B=a+A*ee,V=o+A*L;R<l&&(l=R),z<D&&(D=z),B>O&&(O=B),V>k&&(k=V),Ke(x,l,D,S),Ke(x,O,k,S)}let D=f===0?0:P*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),Je.size>=V){let e=Je.keys().next().value;e!==void 0&&Je.delete(e)}return Je.set(o,x),x}function $e(e,t,n,r,i){let a=Qe(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}function et(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function tt(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}var nt=7,rt=Float32Array.BYTES_PER_ELEMENT,it=`#version 300 es
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
}`,at=`#version 300 es
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
}`,ot=`#version 300 es
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
}`,st=`#version 300 es
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
}`,ct=`#version 300 es
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
}`,lt=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vTangent;
in vec3 vWorld;

uniform int uPass;
uniform vec4 uFront;
uniform vec4 uBack;
uniform vec3 uLight;
uniform vec4 uEye;
// (色の濃さ tint, 縁の冪, 映り込み, 照りの強さ)。
uniform vec4 uGlass;
// (照りの鋭さ, 屈折率 η, 0, shift の形のずれの角 rad。trt では 0)。
uniform vec4 uGlassB;
// (Δη, 2 次の照りの強さ, 幅, 1 = shift の形・0 = trt の形)。
uniform vec4 uGlassC;

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
  float facing = clamp(abs(dot(N, V)), 0.0, 1.0);
  float eta = max(uGlassB.y, 1e-3);
  float sinI2 = 1.0 - facing * facing;
  float cosT = sqrt(clamp(1.0 - sinI2 / (eta * eta), 0.0, 1.0));
  float thick = 1.0 / max(cosT, 1e-3);
  vec3 color = max(surface.rgb, vec3(1e-3));
  float f0 = (eta - 1.0) * (eta - 1.0) / ((eta + 1.0) * (eta + 1.0));
  float fresnel = clamp(f0 + (1.0 - f0) * pow(max(1.0 - facing, 0.0), max(uGlass.y, 1e-3)), 0.0, 1.0);
  if (uPass == 0) {
    vec3 factor = clamp(pow(color, vec3(uGlass.x * thick)) * (1.0 - fresnel), 0.0, 1.0);
    outColor = vec4(mix(vec3(1.0), factor, coverage), 1.0);
    return;
  }
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-9 ? halfway / halfwayLength : V;
  float lit = dot(N, uLight);
  float window = smoothstep(-0.05, 0.05, lit);
  float nh = clamp(dot(N, halfway), -1.0, 1.0);
  float highlight = uGlass.w * pow(max(nh, 0.0), max(uGlassB.x, 1e-3)) * window;
  vec3 second = vec3(0.0);
  if (uGlassC.y != 0.0) {
    float width2 = max(uGlassC.z * uGlassC.z, 1e-8);
    vec3 weight = uGlassC.y * window * (1.0 - fresnel) * pow(color, vec3(2.0 * uGlass.x * thick));
    if (uGlassC.w > 0.5) {
      float tangentLength = length(vTangent);
      vec3 T = tangentLength > 1e-9 ? vTangent / tangentLength : vec3(1.0, 0.0, 0.0);
      vec3 sideRaw = cross(T, N);
      float sideLength = length(sideRaw);
      if (sideLength > 1e-6) {
        vec3 sideN = sideRaw / sideLength;
        vec3 offs = vec3(uGlassB.w) + uGlassC.x * vec3(-1.0, 0.0, 1.0);
        vec3 cosH = nh * cos(offs) + dot(sideN, halfway) * sin(offs);
        vec3 ang = acos(clamp(cosH, -1.0, 1.0));
        second = weight * exp(-ang * ang / width2);
      }
    } else {
      float sinI = sqrt(max(sinI2, 0.0));
      vec3 etaC = max(vec3(eta) + uGlassC.x * vec3(-1.0, 0.0, 1.0), vec3(1e-3));
      vec3 thetaC = asin(clamp(vec3(sinI) / etaC, 0.0, 1.0));
      float theta = asin(clamp(sinI / eta, 0.0, 1.0));
      vec3 shiftC = 2.0 * (thetaC - vec3(theta));
      vec3 ang = vec3(acos(nh)) - shiftC;
      second = weight * exp(-ang * ang / width2);
    }
  }
  outColor = vec4((vec3(highlight + fresnel * uGlass.z) + second) * coverage, 0.0);
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
  // 丸い線の標準と同じ形の明るさ(拡散だけ。P107 で照りを外した)。
  float brightness = uAmbient + uDiffuse * diffuse;
  float opacity = coverage * surface.a;
  outColor = vec4(surface.rgb * brightness * opacity, opacity);
}`;function dt(e,t=it,n=ut){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw e.deleteShader(i),e.deleteShader(a),Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var ft=1e6,Y=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,pt=4,mt=Math.PI/4,ht=-Math.SQRT1_2,gt=-Math.SQRT1_2;function _t(e){let t=dt(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i={program:t,view:r(`uView`),proj:r(`uProj`),shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`)},a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer(),c=e.createBuffer();if(!a||!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s);for(let t=0;t<4;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let l=new Float32Array,u=new Float32Array,d=new Float32Array(16),f=new Float32Array(16),p=0,m=-1,h=-1,g,_=t=>{let n=nt*rt,r=t*n;e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*rt),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*rt),e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(3,1,e.FLOAT,!1,rt,t*rt)},v,y=!1,b=new Float32Array,x=()=>{if(v||y)return v;let t;try{t=dt(e,at,ot)}catch{y=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),y=!0;return}let i=e=>n(t,e);return v={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},v},S,C=!1,w=()=>{if(S||C)return S;let t;try{t=dt(e,st,ct)}catch{C=!0;return}let r=e=>n(t,e);return S={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},S},T,E=!1,D=()=>{if(T||E)return T;let t;try{t=dt(e,at,lt)}catch{E=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),E=!0;return}let i=e=>n(t,e);return T={program:t,view:i(`uView`),proj:i(`uProj`),pass:i(`uPass`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),glass:i(`uGlass`),glassB:i(`uGlassB`),glassC:i(`uGlassC`),tangentBuffer:r},T},O=(e,t)=>{if(e.count!==m||t!==h||!g)return!1;if(g===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(g[t]!==e.start[t])return!1;return!0},k=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),p=a,m=t.count,h=n,g=Uint32Array.from(t.start.subarray(0,t.count+1))},A=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>y,rubberUnavailable:()=>C,glassUnavailable:()=>E,draw(t,n,r,s,m,h){let g=t.band,v=t.bandNormal;if(!g||!v||!n.band)return;let y=t.start[t.count],S=Math.max(0,n.band.width)/2,C=n.light?.dir.x??ht,T=n.light?.dir.y??gt,E=n.light?.elevation??mt,j=Math.tan(E);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o);let M=y*4*nt;l.length<M&&(l=new Float32Array(M),e.bufferData(e.ARRAY_BUFFER,l.byteLength,e.DYNAMIC_DRAW)),O(t,y)||k(t,y);let N=m.view,P=n.view,F=tt(P)||P===void 0;u.length<y*4&&(u=new Float32Array(y*4));let I=0;for(let e=0;e<y;e+=1){let n=t.center[e*3+2]+S;n>I&&(I=n)}let ee=1/(t.count+1),te=y*2*nt,L=1/0,R=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*ee;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=g[r*3]*S,s=g[r*3+1]*S,c=g[r*3+2]*S;for(let t=0;t<2;t+=1){let d=t===0?1:-1,f=e+d*o,p=i+d*s,m=Math.max(0,a+d*c),h=(r*2+t)*nt,g=te+h,_=m===0?0:m/j;l[h]=f,l[h+1]=p,l[h+2]=m;let b=r*2+t;if(F)u[b]=n+ee*(.5-.45*(I>0?m/I:0));else{let e=N[2]*f+N[6]*p+N[10]*m+N[14];u[b]=e,e<L&&(L=e),e>R&&(R=e)}u[y*2+b]=n+ee*.5,l[g]=f-C*_,l[g+1]=p-T*_,l[h+3]=v[r*3],l[h+4]=v[r*3+1],l[h+5]=v[r*3+2],l[h+6]=d,l[g+2]=0,l[g+3]=0,l[g+4]=0,l[g+5]=1,l[g+6]=d}}}if(!F&&y>0){let e=R-L,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<y*2;e+=1)u[e]=t===0?.5:.01+(R-u[e])*t}M>0&&e.bufferSubData(e.ARRAY_BUFFER,0,l,0,M),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,u.subarray(0,y*4),e.DYNAMIC_DRAW);let z=h?.name===`silk`?x():void 0,B=h?.name===`rubber`?w():void 0,V=h?.name===`glass`?D():void 0;if(z||V){b.length<y*6&&(b=new Float32Array(y*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;b[n]=o,b[n+1]=s,b[n+2]=c}}}}e.useProgram(i.program);for(let e=0;e<16;e+=1)d[e]=m.view[e],f[e]=m.proj[e];e.uniformMatrix4fv(i.view,!1,d),e.uniformMatrix4fv(i.proj,!1,f);let H=r(n.shadow.color);e.uniform4f(i.shadowColor,H[0],H[1],H[2],H[3]),e.uniform1f(i.shadowAlpha,n.shadow.alpha);let U=r(n.band.front);e.uniform4f(i.front,U[0],U[1],U[2],U[3]);let W=n.band.back===void 0?U:r(n.band.back);e.uniform4f(i.back,W[0],W[1],W[2],W[3]);let G=Math.cos(E);if(e.uniform3f(i.light,C*G,T*G,Math.sin(E)),e.uniform3f(i.viewDir,N[2],N[6],N[10]),e.uniform1f(i.ambient,s.ambient),e.uniform1f(i.diffuse,s.diffuse),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),p>0){if(e.depthFunc(e.NOTEQUAL),e.uniform1i(i.shadow,1),_(y*2),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS),z&&h)e.useProgram(z.program),e.uniformMatrix4fv(z.view,!1,d),e.uniformMatrix4fv(z.proj,!1,f),e.uniform4f(z.front,U[0],U[1],U[2],U[3]),e.uniform4f(z.back,W[0],W[1],W[2],W[3]),e.uniform3f(z.light,C*G,T*G,Math.sin(E)),A(z.eye,m,N),e.uniform1f(z.ambient,s.ambient),e.uniform1f(z.diffuse,s.diffuse),e.uniform4f(z.silk,Y(h.gloss,0),Math.max(0,Y(h.sharpness,0)),Y(h.shift,0),Math.min(1,Math.max(0,Y(h.dim,0)))),e.uniform1f(z.streak,Math.max(0,Y(h.streak,ft))),_(0),e.bindBuffer(e.ARRAY_BUFFER,z.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,b.subarray(0,y*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(pt,3,e.FLOAT,!1,3*rt,0),e.enableVertexAttribArray(pt),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.disableVertexAttribArray(pt);else if(B&&h)e.useProgram(B.program),e.uniformMatrix4fv(B.view,!1,d),e.uniformMatrix4fv(B.proj,!1,f),e.uniform4f(B.front,U[0],U[1],U[2],U[3]),e.uniform4f(B.back,W[0],W[1],W[2],W[3]),e.uniform3f(B.light,C*G,T*G,Math.sin(E)),A(B.eye,m,N),e.uniform1f(B.ambient,s.ambient),e.uniform1f(B.diffuse,s.diffuse),e.uniform3f(B.rubber,Y(h.gloss,0),Math.max(0,Y(h.sharpness,0)),Y(h.rim,0)),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0);else if(V&&h){e.useProgram(V.program),e.uniformMatrix4fv(V.view,!1,d),e.uniformMatrix4fv(V.proj,!1,f),e.uniform4f(V.front,U[0],U[1],U[2],U[3]),e.uniform4f(V.back,W[0],W[1],W[2],W[3]),e.uniform3f(V.light,C*G,T*G,Math.sin(E)),A(V.eye,m,N),e.uniform4f(V.glass,Y(h.tint,0),Y(h.edge,1),Y(h.mirror,0),Y(h.gloss,0));let t=h.dispersionMode===`shift`;e.uniform4f(V.glassB,Y(h.sharpness,1),Y(h.eta,1),0,t?Y(h.secondShift,0):0),e.uniform4f(V.glassC,Y(h.dispersion,0),Y(h.secondGloss,0),Y(h.secondWidth,0),+!!t),_(0),e.bindBuffer(e.ARRAY_BUFFER,V.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,b.subarray(0,y*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(pt,3,e.FLOAT,!1,3*rt,0),e.enableVertexAttribArray(pt),e.disable(e.DEPTH_TEST),e.uniform1i(V.pass,0),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.ONE),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.uniform1i(V.pass,1),e.blendFuncSeparate(e.ONE,e.ONE,e.ZERO,e.ONE),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.disableVertexAttribArray(pt),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE)}else e.uniform1i(i.shadow,0),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0)}e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var vt=12,yt=.2;function bt(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function xt(e,t){let n=bt(e.shade,0,1,.8),r=bt(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=.9-.7*n,a.diffuse=.9*n,a.specular=0,a.shininess=bt(e.shininess,1,256,vt),a.ply=bt(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=bt(e.plyContrast,0,1,yt),a.plySlope=bt(e.plySlope,-1,1,.35),a}var St=`この端末では素材の描き方を作れなかったので、標準で描いている`,Ct=Math.PI/180,wt=16,Tt=8;function Et(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+wt}function Dt(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+wt+Tt;return Math.min(60,2*Math.atan(r/(r+i+a+o))/Ct)}function Ot(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function kt(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=et(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=Dt(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=Et(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*Ct/2),a=Math.max(Tt,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var At=1e-12;function jt(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var Mt=new Float64Array,Nt=new Uint8Array;function Pt(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);Mt.length<s*3&&(Mt=new Float64Array(s*3),Nt=new Uint8Array(s));let c=Mt,l=Nt,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>At?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){jt(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):jt(a,l,u,i,t)}}function Ft(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var It=new Float64Array,Lt=new Float64Array,Rt=new Float64Array;function zt(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);Rt.length<n&&(It=new Float64Array(n*3),Lt=new Float64Array(n*3),Rt=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;Pt(i,n,o,It,Lt,Rt,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=Rt[e],r[s+4]=It[e*3],r[s+5]=It[e*3+1],r[s+6]=It[e*3+2],r[s+7]=t,r[s+8]=Lt[e*3],r[s+9]=Lt[e*3+1],r[s+10]=Lt[e*3+2];let c=0;o>=2&&e===n?c=-(1+Ft(-It[e*3+2])):o>=2&&e===a-1&&(c=1+Ft(It[e*3+2])),r[s+11]=c}}return r}var Bt=.71,Vt=new Float64Array,Ht=new Float64Array,Ut=new Float64Array;function Wt(e,t,n,r,i,a){if(r<=0)return;let o=n[r];Ut.length<o&&(Vt=new Float64Array(o),Ht=new Float64Array(o),Ut=new Float64Array(o));let s=Bt+i;for(let i=0;i<r;i+=1){let r=n[i],o=n[i+1];for(let n=r;n<o;n+=1){let r=n+1<o?n+1:n,i=e[2*n],c=e[2*n+1],l=e[2*r],u=e[2*r+1],d=l-i,f=u-c,p=t[n],m=t[r];Vt[n]=.5*(i+l),Ht[n]=.5*(c+u),Ut[n]=.5*Math.sqrt(d*d+f*f)+(p>m?p:m)+s,a[2*n]=n,a[2*n+1]=n}for(let e=r;e<o;e+=1){let t=Vt[e],n=Ht[e],r=Ut[e],i=a[2*e+1];for(let s=e+1;s<o;s+=1){let o=Vt[s]-t,c=Ht[s]-n,l=r+Ut[s];o*o+c*c<=l*l&&(i=s,e<a[2*s]&&(a[2*s]=e))}a[2*e+1]=i}}}function Gt(e,t,n,r){for(let i=0;i<t;i+=1){let t=e[i],a=e[i+1];for(let e=t;e<a;e+=1)r[e]=n?t+a-1-e:e}}function Kt(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function qt(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var Jt=.7,Yt=1e6,Xt=4294967295,X=1024,Zt=4,Qt=1.5,$t=0,en=1,tn=2,nn=3,rn=4,an=5,on=7,sn=`#version 300 es
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
  if (uMode == ${en}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${tn} || uMode == ${on}) {
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
  if (uMode == ${an}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${rn};
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
  vNormal = uMode == ${nn} ? outward * t : n;
  vWorld = world;
}`,cn=`  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);`,ln={wave:0,notch:1,scallop:2},un=`// P110: 法線の揺らぎ: (溝の深さ plyGain, 溝の形 0 なだらか・1 切れ込み・2 丸い膨らみ, 切れ込みの幅, 未使用)。
uniform vec4 uPlyNormal;
`,dn=`2.0`,fn=`  float plyPhase = 6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN);
  float plySlopeH;
  if (uPlyNormal.y < 0.5) {
    plySlopeH = -0.5 * cos(plyPhase);
  } else {
    float plyU = fract(plyPhase / 6.28318530718 - 0.25);
    if (uPlyNormal.y < 1.5) {
      float plyHalf = max(0.5 * uPlyNormal.z, 1e-6);
      float plyD = min(plyU, 1.0 - plyU);
      plySlopeH = plyD < plyHalf ? (plyU < 0.5 ? 1.0 : -1.0) / (plyHalf * 6.28318530718) : 0.0;
    } else {
      float plyX = 2.0 * plyU - 1.0;
      plySlopeH = -plyX / (3.14159265359 * sqrt(max(1.0 - plyX * plyX, 1e-6)));
    }
  }
  vec3 sideUnit = sideLength > 1e-6 ? side / sideLength : vec3(0.0);
  vec3 aroundDir = sideUnit - dot(sideUnit, N) * N;
  float aroundLength = length(aroundDir);
  aroundDir = aroundLength > 1e-6 ? aroundDir / aroundLength : vec3(0.0);
  float cosAround = sqrt(max(0.0, 1.0 - acrossN * acrossN));
  vec3 phaseGrad = T / max(uPly.y, 1e-6) + aroundDir * (uPly.w * cosAround / max(vRadiusWorld, 1e-6));
  float phaseGradLength = length(phaseGrad);
  vec3 grooveDir = phaseGradLength > 1e-9 ? phaseGrad / phaseGradLength : vec3(0.0);
  float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${dn}, ${dn});
  N = normalize(N - plyTilt * grooveDir);
  outColor = vec4(shadeThread(N, T, V, 1.0) * alpha, alpha);`,pn=(e,t=!1,n=!1)=>`#version 300 es
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
${n?un:``}uniform vec4 uEye;
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
  if (uMode == ${en}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${tn}) {
    float coverage = edgeCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${on}) {
    float coverage = edgeCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${an}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${rn};
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
${n?fn:cn}
}`,mn=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse;
  return uColor * brightness * ply;
}`,hn=`uniform vec4 uSilk;
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
}`,gn=`uniform vec3 uRubber;

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
}`,_n=pn(mn),vn=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,yn=pn(hn),bn=pn(mn,!0),xn=pn(hn,!0),Sn=pn(gn),Cn=pn(gn,!0),Z=3,wn=.25,Tn=1.42,En=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uWin;
uniform int uTexWidth;
uniform vec2 uViewport;
flat out int vSegment;

vec4 winAt(int i) {
  return texelFetch(uWin, ivec2(i % uTexWidth, i / uTexWidth), 0);
}

void main() {
  int slot = gl_VertexID / 6;
  int c = gl_VertexID - 6 * slot;
  int k = int(winAt(${Z} * slot + 1).z + 0.5);
  vec4 a0 = winAt(${Z} * k);
  vec4 a1 = (int(a0.w + 0.5) & 1) == 1 ? a0 : winAt(${Z} * k + ${Z});
  float h = max(a0.z, a1.z) + ${Tn.toFixed(2)};
  vec2 d = a1.xy - a0.xy;
  float l = length(d);
  vec2 u = l > 1e-6 ? d / l : vec2(1.0, 0.0);
  vec2 n = vec2(-u.y, u.x);
  float along = (c == 1 || c == 4 || c == 5) ? l + h : -h;
  float side = (c == 2 || c == 3 || c == 5) ? h : -h;
  vec2 at = a0.xy + along * u + side * n;
  gl_Position = vec4(at / uViewport * 2.0 - 1.0, 0.0, 1.0);
  vSegment = k;
}`,Dn=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uWin;
uniform sampler2D uPoints;
uniform int uTexWidth;
uniform vec2 uViewport;
uniform mat4 uInvViewProj;
uniform vec4 uEye;
uniform vec3 uLight;
uniform vec3 uColor;
// 撚り: (濃さ, 間隔 × 太さ, 波の強さ, 傾き)。
uniform vec4 uPly;
// 法線の揺らぎ: (溝の深さ, 溝の形, 切れ込みの幅, 1 = 法線の揺らぎ)。
uniform vec4 uPlyNormal;
// ガラス: (色の濃さ tint, 縁の冪, 映り込み, 照りの強さ)。
uniform vec4 uGlass;
// ガラス: (照りの鋭さ, 屈折率 η, 線の数, P120: shift の形のずれの角 rad。trt では 0)。
uniform vec4 uGlassB;
// P118(issue #213、計画 c9 の D6): 分光 (Δη, 2 次の照りの強さ, 幅, P120: 1 = shift の形・0 = trt の形)。
uniform vec4 uGlassC;
flat in int vSegment;
layout(location = 0) out vec4 outAbsorb;
layout(location = 1) out vec4 outReflect;

vec4 winAt(int i) {
  return texelFetch(uWin, ivec2(i % uTexWidth, i / uTexWidth), 0);
}

vec4 pointAt(int i) {
  return texelFetch(uPoints, ivec2(i % uTexWidth, i / uTexWidth), 0);
}

bool lastPoint(vec4 texel0) {
  return (int(texel0.w + 0.5) & 1) == 1;
}

float circleArea(float x) {
  return 0.5 * (x * sqrt(max(0.0, 1.0 - x * x)) + asin(clamp(x, -1.0, 1.0)));
}

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

void main() {
  vec2 q = gl_FragCoord.xy;
  int k = vSegment;
  vec4 k0 = winAt(${Z} * k);
  int code = int(k0.w + 0.5);
  gl_FragDepth = (float(code >> 1) + 1.0) / (uGlassB.z + 2.0);
  vec4 k1 = (code & 1) == 1 ? k0 : winAt(${Z} * k + ${Z});
  // 自分の区間で d > r(t) + 0.71 なら捨てる(布の下・被覆 0 も discard に統一)。
  vec2 kd = k1.xy - k0.xy;
  float kl = dot(kd, kd);
  float kt = kl > 1e-12 ? clamp(dot(q - k0.xy, kd) / kl, 0.0, 1.0) : 0.0;
  if (length(q - (k0.xy + kt * kd)) > mix(k0.z, k1.z, kt) + 0.71) discard;
  // 窓の中で d − r(和集合の符号つきの距離)が最小の区間 m。端の点は区間に依らず同じ値になるよう、clamp した所は点そのものを使う。
  vec4 range = winAt(${Z} * k + 1);
  int lo = int(range.x + 0.5);
  int hi = int(range.y + 0.5);
  int m = k;
  float tm = 0.0;
  float dm = 0.0;
  float rm = 1.0;
  vec2 off = vec2(1.0, 0.0);
  float best = 1e30;
  for (int j = lo; j <= hi; j++) {
    vec4 a = winAt(${Z} * j);
    vec4 b = lastPoint(a) ? a : winAt(${Z} * j + ${Z});
    vec2 e = b.xy - a.xy;
    float e2 = dot(e, e);
    float tj = e2 > 1e-12 ? clamp(dot(q - a.xy, e) / e2, 0.0, 1.0) : 0.0;
    vec2 c = tj <= 0.0 ? a.xy : tj >= 1.0 ? b.xy : a.xy + tj * e;
    float r = tj <= 0.0 ? a.z : tj >= 1.0 ? b.z : mix(a.z, b.z, tj);
    vec2 o = q - c;
    float d = length(o);
    if (d - r < best) {
      best = d - r;
      m = j;
      tm = tj;
      dm = d;
      rm = r;
      off = o;
    }
  }
  // 被覆(画素から m への最近点の向きで、台形の分布の面積。D2)。
  vec2 dir = dm > 1e-6 ? abs(off / dm) : vec2(1.0, 0.0);
  float coverage = pixelBelow(rm - dm, max(dir.x, dir.y), min(dir.x, dir.y));
  if (coverage <= 0.0) discard;
  vec4 m0 = winAt(${Z} * m);
  bool mLast = lastPoint(m0);
  int endPoint = (tm <= 0.0 || mLast) ? m : tm >= 1.0 ? m + 1 : -1;
  // 画素の視線(近い面の世界の点と、目への向き)。
  vec4 nearH = uInvViewProj * vec4(q / uViewport * 2.0 - 1.0, -1.0, 1.0);
  vec3 origin = nearH.xyz / nearH.w;
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - origin : uEye.xyz;
  float toEyeLength = length(toEye);
  vec3 ray = toEyeLength > 1e-9 ? toEye / toEyeLength : vec3(0.0, 0.0, 1.0);
  vec3 entry;
  vec3 axisPoint;
  vec3 T;
  float arc;
  float rw;
  if (endPoint >= 0) {
    // 端: 点を中心にした半径 r の球と視線の交点(目に近い方)。T・弧長・r はその点のもの。
    vec4 ae = winAt(${Z} * endPoint + 2);
    rw = ae.w;
    vec3 oc = origin - ae.xyz;
    float bq = dot(oc, ray);
    float dq = bq * bq - (dot(oc, oc) - rw * rw);
    entry = origin + (dq >= 0.0 ? -bq + sqrt(dq) : -bq) * ray;
    axisPoint = ae.xyz;
    T = pointAt(3 * endPoint + 1).xyz;
    arc = pointAt(3 * endPoint).w;
  } else {
    // 区間の内: 区間の軸のまわりの半径 r の円柱と視線の交点(目に近い方。当たらなければ軸に最も近づく点)。
    vec4 a0 = winAt(${Z} * m + 2);
    vec4 a1 = winAt(${Z} * m + ${Z} + 2);
    rw = mix(a0.w, a1.w, tm);
    vec3 axis = a1.xyz - a0.xyz;
    float axisLength = length(axis);
    vec3 tangentAxis = axisLength > 1e-9 ? axis / axisLength : vec3(1.0, 0.0, 0.0);
    vec3 offset = origin - a0.xyz;
    vec3 offsetAcross = offset - dot(offset, tangentAxis) * tangentAxis;
    vec3 rayAcross = ray - dot(ray, tangentAxis) * tangentAxis;
    float qa = dot(rayAcross, rayAcross);
    float qb = dot(offsetAcross, rayAcross);
    float qc = dot(offsetAcross, offsetAcross) - rw * rw;
    float along = 0.0;
    if (qa > 1e-12) {
      float disc = qb * qb - qa * qc;
      along = disc >= 0.0 ? (-qb + sqrt(disc)) / qa : -qb / qa;
    }
    entry = origin + along * ray;
    axisPoint = a0.xyz + dot(entry - a0.xyz, tangentAxis) * tangentAxis;
    T = mix(pointAt(3 * m + 1).xyz, pointAt(3 * m + 4).xyz, tm);
    arc = mix(pointAt(3 * m).w, pointAt(3 * m + 3).w, tm);
  }
  // 布の切り口: 交点が布の面(z = 0)より下なら書かない。
  if (entry.z < 0.0) discard;
  float tangentLength = length(T);
  T = tangentLength > 1e-9 ? T / tangentLength : vec3(1.0, 0.0, 0.0);
  vec3 eyeVec = uEye.w > 0.5 ? uEye.xyz - entry : uEye.xyz;
  float eyeLength = length(eyeVec);
  vec3 V = eyeLength > 1e-9 ? eyeVec / eyeLength : vec3(0.0, 0.0, 1.0);
  vec3 side = cross(V, T);
  float sideLength = length(side);
  vec3 across = sideLength > 1e-9 ? side / sideLength : vec3(0.0);
  // s = d_m / r_px,m(画素の中心)。符号は交点が軸のどちら側か(T の符号と打ち消し合い、法線に効かない)。
  float s = min(dm / max(rm, 1e-6), 1.0);
  float sSigned = dot(entry - axisPoint, across) < 0.0 ? -s : s;
  // 法線: 画素が覆う断面の区間 [s0, s1] で円の法線を平均する(縁の帯と同じ式)。
  vec3 front = V - dot(V, T) * T;
  float frontLength = length(front);
  front = frontLength > 1e-9 ? front / frontLength : V;
  float inv = 1.0 / max(rm, 1e-6);
  float s0 = clamp(sSigned - 0.5 * inv, -1.0, 1.0);
  float s1 = clamp(sSigned + 0.5 * inv, -1.0, 1.0);
  float sMean = 0.5 * (s0 + s1);
  float frontMean = s1 - s0 > 1e-4
    ? (circleArea(s1) - circleArea(s0)) / (s1 - s0)
    : sqrt(max(0.0, 1.0 - sMean * sMean));
  vec3 N = normalize(sMean * across + frontMean * front);
  float acrossN = dot(N, across);
  float ply = 1.0;
  if (uPlyNormal.w > 0.5) {
    float plyPhase = 6.28318530718 * (arc / max(uPly.y, 1e-6) + uPly.w * acrossN);
    float plySlopeH;
    if (uPlyNormal.y < 0.5) {
      plySlopeH = -0.5 * cos(plyPhase);
    } else {
      float plyU = fract(plyPhase / 6.28318530718 - 0.25);
      if (uPlyNormal.y < 1.5) {
        float plyHalf = max(0.5 * uPlyNormal.z, 1e-6);
        float plyD = min(plyU, 1.0 - plyU);
        plySlopeH = plyD < plyHalf ? (plyU < 0.5 ? 1.0 : -1.0) / (plyHalf * 6.28318530718) : 0.0;
      } else {
        float plyX = 2.0 * plyU - 1.0;
        plySlopeH = -plyX / (3.14159265359 * sqrt(max(1.0 - plyX * plyX, 1e-6)));
      }
    }
    vec3 aroundDir = across - dot(across, N) * N;
    float aroundLength = length(aroundDir);
    aroundDir = aroundLength > 1e-6 ? aroundDir / aroundLength : vec3(0.0);
    float cosAround = sqrt(max(0.0, 1.0 - acrossN * acrossN));
    vec3 phaseGrad = T / max(uPly.y, 1e-6) + aroundDir * (uPly.w * cosAround / max(rw, 1e-6));
    float phaseGradLength = length(phaseGrad);
    vec3 grooveDir = phaseGradLength > 1e-9 ? phaseGrad / phaseGradLength : vec3(0.0);
    float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${dn}, ${dn});
    N = normalize(N - plyTilt * grooveDir);
  } else {
    float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (arc / max(uPly.y, 1e-6) + uPly.w * acrossN));
    ply = 1.0 - uPly.x * uPly.z * plyWave;
  }
  // 透過(Beer–Lambert。厚み 2r√(1 − s²) / 2r)と縁(Schlick)。定義域の守り: η は max(·, 1e-3)。
  float thick = sqrt(max(0.0, 1.0 - s * s));
  vec3 transmit = pow(max(uColor, vec3(1e-3)), vec3(uGlass.x * thick)) * ply;
  float eta = max(uGlassB.y, 1e-3);
  float f0 = (eta - 1.0) * (eta - 1.0) / ((eta + 1.0) * (eta + 1.0));
  float facing = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = clamp(f0 + (1.0 - f0) * pow(max(1.0 - facing, 0.0), max(uGlass.y, 1e-3)), 0.0, 1.0);
  vec3 factor = transmit * (1.0 - fresnel);
  outAbsorb = vec4(-log(max(mix(vec3(1.0), factor, coverage), vec3(1e-6))), 0.0);
  vec3 halfway = uLight + V;
  float halfwayLength = length(halfway);
  halfway = halfwayLength > 1e-9 ? halfway / halfwayLength : V;
  float lit = dot(N, uLight);
  float highlight = uGlass.w * pow(max(dot(N, halfway), 0.0), max(uGlassB.x, 1e-3)) * smoothstep(-0.05, 0.05, lit);
  // P118(D6): 2 次の照り(TRT。円柱の中で 1 回反射して戻る光)。軸に垂直な面へ V・L・N を射影し、
  // 衝突係数 h = sin γi、光へ向かう方位 2γi − 4γt(sin γt = h / η_c)を channel ごとの η_c でずらす。1 次の照りは白のまま。
  vec3 second = vec3(0.0);
  if (uGlassC.y != 0.0 && uGlassC.w > 0.5) {
    // P120(issue #217、c7 の D6 の形): 2 次の照りの山を断面の向き(T × N)に角 shift だけずらし、R・G・B で
    // shift − Δ・shift・shift + Δ(Δ = 分光を rad として読む)。山は halfway との角の Gauss(幅 = 2 次の照りの幅)。
    vec3 sideRaw = cross(T, N);
    float sideLength = length(sideRaw);
    if (sideLength > 1e-6) {
      vec3 sideN = sideRaw / sideLength;
      vec3 offs = vec3(uGlassB.w) + uGlassC.x * vec3(-1.0, 0.0, 1.0);
      // channel ごとに nc = N cos(a) + sideN sin(a)(N ⊥ sideN なので単位)。dot(nc, halfway) を展開して書く。
      vec3 cosH = dot(N, halfway) * cos(offs) + dot(sideN, halfway) * sin(offs);
      vec3 ang = acos(clamp(cosH, -1.0, 1.0));
      float width2 = max(uGlassC.z * uGlassC.z, 1e-8);
      vec3 lobe = exp(-ang * ang / width2);
      second = uGlassC.y * lobe * smoothstep(-0.05, 0.05, lit) * (1.0 - fresnel) * pow(max(uColor, vec3(1e-3)), vec3(2.0 * uGlass.x));
    }
  } else if (uGlassC.y != 0.0) {
    vec3 vAcross = V - dot(V, T) * T;
    vec3 lAcross = uLight - dot(uLight, T) * T;
    vec3 nAcross = N - dot(N, T) * T;
    float vAcrossLength = length(vAcross);
    float lAcrossLength = length(lAcross);
    float nAcrossLength = length(nAcross);
    if (vAcrossLength > 1e-6 && lAcrossLength > 1e-6 && nAcrossLength > 1e-6) {
      vec3 vp = vAcross / vAcrossLength;
      vec3 lp = lAcross / lAcrossLength;
      vec3 sideP = cross(T, vp);
      float h = clamp(dot(nAcross / nAcrossLength, sideP), -1.0, 1.0);
      float gammaI = asin(h);
      // 光の方位(vp を 0、T × vp を +90° とする)。鏡の反射(p = 0)は 2γi に来る。
      float phiL = atan(dot(lp, sideP), dot(lp, vp));
      vec3 etaC = max(vec3(eta) + uGlassC.x * vec3(-1.0, 0.0, 1.0), vec3(1e-3));
      vec3 gammaT = asin(clamp(vec3(h) / etaC, -1.0, 1.0));
      vec3 diff = vec3(phiL) - (vec3(2.0 * gammaI) - 4.0 * gammaT);
      // 方位の差を [−π, π] へ畳む。
      diff = diff - 6.28318530718 * floor((diff + 3.14159265359) / 6.28318530718);
      float width2 = max(uGlassC.z * uGlassC.z, 1e-8);
      vec3 lobe = exp(-diff * diff / width2);
      float thetaV = asin(clamp(dot(V, T), -1.0, 1.0));
      float thetaL = asin(clamp(dot(uLight, T), -1.0, 1.0));
      float spread = 2.0 * uGlassC.z + 0.3;
      float spread2 = max(spread * spread, 1e-8);
      float sumTheta = thetaV + thetaL;
      float along = exp(-sumTheta * sumTheta / spread2);
      second = uGlassC.y * lobe * along * (1.0 - fresnel) * pow(max(uColor, vec3(1e-3)), vec3(2.0 * uGlass.x));
    }
  }
  outReflect = vec4((vec3(highlight + fresnel * uGlass.z) + second) * coverage, 0.0);
}`,On=`#version 300 es
void main() {
  int k = gl_VertexID;
  gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
}`,kn=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uAbsorb;
uniform sampler2D uReflect;
uniform int uWhich;
out vec4 outColor;
void main() {
  ivec2 at = ivec2(gl_FragCoord.xy);
  outColor = uWhich == 0
    ? vec4(exp(-texelFetch(uAbsorb, at, 0).rgb), 1.0)
    : vec4(texelFetch(uReflect, at, 0).rgb, 1.0);
}`,An=new Map;function jn(e){let t=An.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=jn(r))}}}let i=n??[0,0,0,1];return An.set(e,i),i}function Mn(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function Nn(e,t,n,r=sn){let i=e.createProgram();if(!i)throw Error(`Unable to create a WebGL program`);let a=[];try{if(a.push(Mn(e,e.VERTEX_SHADER,r)),e.attachShader(i,a[0]),a.push(Mn(e,e.FRAGMENT_SHADER,t)),e.attachShader(i,a[1]),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(i)??``}`);n?.push(...a)}catch(t){for(let t of a)e.deleteShader(t);throw e.deleteProgram(i),t}return i}function Pn(e,t){let n=[],r=[];try{for(let i of t)n.push(Nn(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var Fn={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`};function In(e,t){let n={};for(let r of Object.keys(Fn))n[r]=e.getUniformLocation(t,Fn[r]);return{program:t,u:n}}function Q(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function Ln(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var Rn=new Float64Array;function zn(e,t,n){let r=e.center;Rn.length<e.count&&(Rn=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];Rn[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=Rn[e]-Rn[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}function Bn(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;if(!Number.isFinite(A)||A===0){t.fill(0),t[0]=t[5]=t[10]=t[15]=1;return}let j=1/A;t[0]=(s*k-c*O+l*D)*j,t[1]=(i*O-r*k-a*D)*j,t[2]=(h*C-g*S+_*x)*j,t[3]=(f*S-d*C-p*x)*j,t[4]=(c*E-o*k-l*T)*j,t[5]=(n*k-i*E+a*T)*j,t[6]=(g*b-m*C-_*y)*j,t[7]=(u*C-f*b+p*y)*j,t[8]=(o*O-s*E+l*w)*j,t[9]=(r*E-n*O-a*w)*j,t[10]=(m*S-h*b+_*v)*j,t[11]=(d*b-u*S-p*v)*j,t[12]=(s*T-o*D-c*w)*j,t[13]=(n*D-r*T+i*w)*j,t[14]=(h*y-m*x-g*v)*j,t[15]=(u*x-d*y+f*v)*j}var Vn=new Float64Array,Hn=new Float64Array,Un=new Float64Array(16);function Wn(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function Gn(e,t,n,r,i,a){let o=e.start[e.count]??0;Hn.length<o&&(Vn=new Float64Array(o*2),Hn=new Float64Array(o));let s=r.view,c=r.proj,l=Un;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=c[r*4+t]*s[e*4+r];l[e*4+t]=n}let u=l[0],d=l[1],f=l[3],p=l[4],m=l[5],h=l[7],g=l[8],_=l[9],v=l[11],y=l[12],b=l[13],x=l[15],S=i.pixelScale,C=i.radius,w=i.widen,T=i.minRadius,E=i.fringe,D=.5*i.viewportW,O=.5*i.viewportH,k=Vn,A=Hn;for(let e=0,n=0;e<o;e+=1,n+=12){let r=t[n],i=t[n+1],o=t[n+2],s=f*r+h*i+v*o+x,c=S/(s>1e-6?s:1e-6),l=c>0?Math.max(C*c+w,T)/c:C,j=t[n+11];if(j!==0){let e=(j<0?1-Math.abs(j):Math.abs(j)-1)*l;r+=e*t[n+4],i+=e*t[n+5],o+=e*t[n+6]}a&&(a[e*4]=r,a[e*4+1]=i,a[e*4+2]=o,a[e*4+3]=l);let M=f*r+h*i+v*o+x,N=M>1e-6?M:1e-6;k[e*2]=((u*r+p*i+g*o+y)/N+1)*D,k[e*2+1]=((d*r+m*i+_*o+b)/N+1)*O,A[e]=S/N*l+E}for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let n=e===i,s=e===a-1,c=n?e:e-1,l=s?e:e+1,u=o&&Wn(k[c*2],k[c*2+1],k[e*2],k[e*2+1],k[l*2],k[l*2+1],A[e],n,s);if(!u&&!s){let t=l===a-1,n=t?l:l+1;u=Wn(k[e*2],k[e*2+1],k[l*2],k[l*2+1],k[n*2],k[n*2+1],A[e],!1,t)}t[e*12+7]=2*r+ +!!u}let s=r*8;o?(n[s]=k[i*2],n[s+1]=k[i*2+1],n[s+2]=k[(i+1)*2],n[s+3]=k[(i+1)*2+1],n[s+4]=k[(a-1)*2],n[s+5]=k[(a-1)*2+1],n[s+6]=k[(a-2)*2],n[s+7]=k[(a-2)*2+1]):n.fill(0,s,s+8)}}function Kn(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=In(n,Nn(n,_n)),i=In(n,Nn(n,bn)),a=In(n,Nn(n,vn)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=Pn(n,[Sn,Cn]);if(!e)p=!0;else return d={...In(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...In(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=new Map,_=e=>{let t=g.get(e);if(t!==void 0)return t;let r=e===`silk`?hn:e===`rubber`?gn:mn,i=Pn(n,[pn(r,!1,!0),pn(r,!0,!0)]),a=i?i.map(t=>({...In(n,t),rubber:e===`rubber`?n.getUniformLocation(t,`uRubber`):void 0,plyNormal:n.getUniformLocation(t,`uPlyNormal`)})):null;return g.set(e,a),a},v=()=>{if(o||c)return o;let e=Pn(n,[yn,xn]);if(!e)c=!0;else return o=In(n,e[0]),s=In(n,e[1]),o},y=t.glassReverse===!0,b=!1,x=!1,S,C=()=>{x=!0},w=e=>{let t=n.drawingBufferWidth,r=n.drawingBufferHeight;if(e.width===t&&e.height===r)return!0;e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.activeTexture(n.TEXTURE4);let i=[n.createTexture(),n.createTexture()];i.forEach((e,i)=>{n.bindTexture(n.TEXTURE_2D,e),n.texStorage2D(n.TEXTURE_2D,1,n.RGBA16F,t,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+i,n.TEXTURE_2D,e,0)}),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0);let a=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,t,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,a),n.bindRenderbuffer(n.RENDERBUFFER,null);let o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindFramebuffer(n.FRAMEBUFFER,null),e.absorb=i[0],e.reflect=i[1],e.depth=a,e.width=t,e.height=r,o},T=()=>{if(x)return;if(!S){let e=[],t=[];try{t.push(Nn(n,Dn,e,En)),t.push(Nn(n,kn,e,On))}catch{for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let r=n.getExtension(`EXT_color_buffer_float`),i=n.getExtension(`EXT_color_buffer_half_float`),a=r||i?n.createFramebuffer():null;if(!a){for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let[o,s]=t,c=e=>n.getUniformLocation(o,e);S={line:o,compose:s,framebuffer:a,absorb:null,reflect:null,depth:null,width:-1,height:-1,u:{texWidth:c(`uTexWidth`),viewport:c(`uViewport`),invViewProj:c(`uInvViewProj`),eye:c(`uEye`),light:c(`uLight`),color:c(`uColor`),ply:c(`uPly`),plyNormal:c(`uPlyNormal`),glass:c(`uGlass`),glassB:c(`uGlassB`),glassC:c(`uGlassC`)},which:n.getUniformLocation(s,`uWhich`)},n.useProgram(o),n.uniform1i(c(`uWin`),3),n.uniform1i(c(`uPoints`),0),n.useProgram(s),n.uniform1i(n.getUniformLocation(s,`uAbsorb`),4),n.uniform1i(n.getUniformLocation(s,`uReflect`),5),n.useProgram(null)}if(w(S))return S;let e=S;return e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.deleteFramebuffer(e.framebuffer),n.deleteProgram(e.line),n.deleteProgram(e.compose),S=void 0,C()},E=[null,null,null],D=[0,0,0],O=2,k=new Float32Array,A=new Float64Array,j=new Float64Array,M=new Int32Array,N=new Int32Array,P=new Float32Array(16),F=new Float64Array(16),I=n.createVertexArray(),ee=n.createBuffer(),te=n.createTexture(),L=n.createTexture(),R=n.createTexture();if(!I||!ee||!te||!L||!R)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bindVertexArray(null);for(let e of[te,L,R])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let z,B=new Float32Array,V=0,H=new Float32Array,U=0,W=new Float32Array,G=0,K,q=0,ne=0,J=0,re=0,ie=0,ae=new Int32Array,oe=new Int32Array,se=0,ce=new Uint32Array,le=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=Xt);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},ue,de={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},fe=new Float32Array(16),pe=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;z&&z.bitmapW===r&&z.bitmapH===i&&z.cssW===a&&z.cssH===o&&z.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,z={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},me=e=>{e.glassReverse!==void 0&&(y=e.glassReverse===!0),pe(e)},he=(e,t,r)=>{let i=e.count;if(K&&q===t&&K.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(K[n]!==e.start[n]){t=!1;break}if(t)return}let a=Kt(e.start,i,t);ne=a.tubeCount,J=a.capCount,re=a.shadowCount,ie=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(ie+=+(ie>0)+2*n)}let o=new Uint32Array(a.index.length+ie);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}ae.length<i&&(ae=new Int32Array(i),oe=new Int32Array(i)),zn(e,r,ae),se=a.index.length,le(e,ae,o,se),ce=new Uint32Array(ie),n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),K=e.start.slice(0,i+1),q=t},ge=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*Zt;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},_e=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,X,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,X,r,n.RGBA,n.FLOAT,t)},ve=(e,t=!1)=>{let r=jn(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},ye=(e,t,n,r)=>{let i=Q((t.mesh??{}).cameraFov,45),a=t.view,o=Q(a?.tilt,0),s=Q(a?.turn,0),c=Q(a?.zoom,1)>0?Q(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,Q(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:kt({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:Ot(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},be=(e,t)=>{ue??=_t(n),ve(t);let r=z?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=ye(e,t,i,a);ue.draw(e,t,jn,xt(t,de),o,t.material)},xe=(e,t,r,i,a,o,s)=>{let c=t.start[t.count],l=n.drawingBufferWidth,u=n.drawingBufferHeight;j.length<c&&(j=new Float64Array(c),M=new Int32Array(c*2),N=new Int32Array(c));let d=Vn,f=Hn;for(let e=0;e<c;e+=1)j[e]=f[e]-Qt;Wt(d,j,t.start,t.count,wn,M),Gt(t.start,t.count,y,N);let p=Math.max(1,Math.ceil(c*Z/X));k.length<X*p*4&&(k=new Float32Array(X*p*4));let m=k,h=1/0,g=1/0,_=-1/0,v=-1/0;for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1];for(let t=n;t<r;t+=1){let n=t===r-1,i=n?t:t+1,a=t*Z*4;m[a]=d[t*2],m[a+1]=d[t*2+1],m[a+2]=j[t],m[a+3]=2*e+ +!!n,m[a+4]=M[t*2],m[a+5]=M[t*2+1],m[a+6]=N[t],m[a+7]=0,m[a+8]=A[t*4],m[a+9]=A[t*4+1],m[a+10]=A[t*4+2],m[a+11]=A[t*4+3];let o=(Math.max(j[t],j[i])+Tn)*Math.SQRT2;for(let e of[t,i]){let t=d[e*2],n=d[e*2+1];t-o<h&&(h=t-o),t+o>_&&(_=t+o),n-o<g&&(g=n-o),n+o>v&&(v=n+o)}}}let b=Math.max(0,Math.floor(h)),x=Math.max(0,Math.floor(g)),S=Math.min(l,Math.ceil(_)),C=Math.min(u,Math.ceil(v));O=(O+1)%3,n.activeTexture(n.TEXTURE3);let w=E[O];if(w?n.bindTexture(n.TEXTURE_2D,w):(w=n.createTexture(),E[O]=w,n.bindTexture(n.TEXTURE_2D,w),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),p>D[O]&&(n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,X,p,0,n.RGBA,n.FLOAT,null),D[O]=p),n.texSubImage2D(n.TEXTURE_2D,0,0,0,X,p,n.RGBA,n.FLOAT,m),n.activeTexture(n.TEXTURE0),S>b&&C>x){let d=S-b,f=C-x;n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.viewport(0,0,l,u),n.enable(n.SCISSOR_TEST),n.scissor(b,x,d,f),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.clearColor(0,0,0,0),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(e.line);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=i.proj[r*4+t]*i.view[e*4+r];F[e*4+t]=n}Bn(F,P);let p=i.view,m=r.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},h=r.light?.elevation??Math.PI/4,g=r.material,_=r.plyNormal;n.uniform1i(e.u.texWidth,X),n.uniform2f(e.u.viewport,l,u),n.uniformMatrix4fv(e.u.invViewProj,!1,P),i.fov>0?n.uniform4f(e.u.eye,s.x+p[2]*i.eye,s.y+p[6]*i.eye,p[10]*i.eye,1):n.uniform4f(e.u.eye,p[2],p[6],p[10],0),n.uniform3f(e.u.light,m.x*Math.cos(h),m.y*Math.cos(h),Math.sin(h)),n.uniform3f(e.u.color,a[0],a[1],a[2]),n.uniform4f(e.u.ply,o.ply,o.plyPitch,o.plyContrast,o.plySlope),n.uniform4f(e.u.plyNormal,_?Q(_.gain,0):0,_?ln[_.profile]??ln.wave:0,_?Q(_.notch,0):0,+!!_),n.uniform4f(e.u.glass,Q(g?.tint,0),Q(g?.edge,1),Q(g?.mirror,0),Q(g?.gloss,0));let v=g?.dispersionMode===`shift`;n.uniform4f(e.u.glassB,Q(g?.sharpness,1),Q(g?.eta,1),t.count,v?Q(g?.secondShift,0):0),n.uniform4f(e.u.glassC,Q(g?.dispersion,0),Q(g?.secondGloss,0),Q(g?.secondWidth,0),+!!v),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,w),n.activeTexture(n.TEXTURE0),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.enable(n.DEPTH_TEST),n.depthFunc(n.NOTEQUAL),n.depthMask(!0),n.drawArrays(n.TRIANGLES,0,6*c),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.DEPTH_TEST),n.useProgram(e.compose),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,e.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,e.reflect),n.uniform1i(e.which,0),n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3),n.uniform1i(e.which,1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.SCISSOR_TEST),n.viewport(0,0,l,u);for(let e of[n.TEXTURE5,n.TEXTURE4,n.TEXTURE3])n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,null);n.activeTexture(n.TEXTURE0),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null)},Se=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,b=t.material?.name===`glass`,u=!0,be(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,b=o?.name===`glass`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){ve(t);return}let d=b?T():void 0,p=t.shadow.alpha>0,g=jn(t.background),y=jn(t.shadow.color),x=[0,1,2].every(e=>y[e]<=g[e]),S=[0,1,2].every(e=>y[e]>=g[e]),C=g[3]>=1&&(x||S);ve(t,p&&!C);let w=z?.transform??1,E=n.drawingBufferWidth/w,D=n.drawingBufferHeight/w,O=t.mesh??{},k=Q(O.threadWiden,0),j=Q(O.threadMinRadius,Jt),{camera:M,zoom:N,center:P,width:F}=ye(e,t,E,D),K=N*(M.fov>0?M.eye:1)*w,q=M.fov>0?M.eye/M.near:1,ue=qt(Math.max(F/2*N*q*w+k,j)),pe=Math.max(1,Math.ceil(c*3/X)),me=pe>V;me&&(V=pe,B=new Float32Array(X*pe*4)),zt(e,B);let Se=Math.max(1,Math.ceil(c/X)),Ce=Se>U;Ce&&(U=Se,H=new Float32Array(X*Se*Zt)),ge(e,H);let we=Math.max(1,Math.ceil(2*e.count/X)),Te=we>G;Te&&(G=we,W=new Float32Array(X*we*4)),d&&A.length<c*4&&(A=new Float64Array(c*4)),Gn(e,B,W,M,{pixelScale:K,radius:F/2,widen:k,minRadius:j,fringe:Qt,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight},d?A:void 0),he(e,ue,M.view),zn(e,M.view,oe);let Ee=!1;for(let t=0;t<e.count;t+=1)if(oe[t]!==ae[t]){Ee=!0;break}Ee&&(ae.set(oe.subarray(0,e.count)),le(e,ae,ce,0),n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,se*Uint32Array.BYTES_PER_ELEMENT,ce),n.bindVertexArray(null));let De=t.plyNormal,Oe=De?_(l?`silk`:m?`rubber`:`standard`):null,ke=Oe?void 0:l?v():void 0,Ae=Oe||ke?void 0:m?h():void 0,je=Oe?.[0]??ke??Ae??r,Me=Oe?.[1]??(ke?s:Ae?f:void 0)??i,Ne=Oe!==null&&l,Pe=Oe!==null&&m;n.bindVertexArray(I),n.activeTexture(n.TEXTURE0),_e(te,B,V,me),n.activeTexture(n.TEXTURE1),_e(L,H,U,Ce),n.activeTexture(n.TEXTURE2),_e(R,W,G,Te),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=M.proj[r*4+t]*M.view[e*4+r];fe[e*4+t]=n}let Fe=2*M.depthExtent,Ie=xt(t,de),Le=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},Re=t.light?.elevation??Math.PI/4,ze=jn(t.layers[0]?.color??`#ffffff`),Be=M.view,Ve=jn(t.shadow.color),He=({program:e,u:r,rubber:i,plyNormal:a})=>(n.useProgram(e),n.uniform1i(r.points,0),n.uniform1i(r.shadowPoints,1),n.uniform1i(r.lines,2),n.uniform1i(r.texWidth,X),n.uniform1i(r.sides,ue),n.uniformMatrix4fv(r.viewProj,!1,fe),n.uniform1f(r.pixelScale,K),n.uniform1f(r.radius,F/2),n.uniform1f(r.widen,k),n.uniform1f(r.minRadius,j),n.uniform3f(r.plane,P.x,P.y,Fe),n.uniform4f(r.shading,Ie.ambient,Ie.diffuse,Ie.specular,Ie.shininess),n.uniform3f(r.light,Le.x*Math.cos(Re),Le.y*Math.cos(Re),Math.sin(Re)),n.uniform3f(r.color,ze[0],ze[1],ze[2]),n.uniform4f(r.ply,Ie.ply,Ie.plyPitch,Ie.plyContrast,Ie.plySlope),M.fov>0?n.uniform4f(r.eye,P.x+Be[2]*M.eye,P.y+Be[6]*M.eye,Be[10]*M.eye,1):n.uniform4f(r.eye,Be[2],Be[6],Be[10],0),De&&a&&n.uniform4f(a,Q(De.gain,0),ln[De.profile]??ln.wave,Q(De.notch,0),0),(ke||Ne)&&o&&(n.uniform4f(r.silk,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.shift,0),Math.min(1,Math.max(0,Q(o.dim,0)))),n.uniform1f(r.streak,Math.max(0,Q(o.streak,Yt)))),(Ae||Pe)&&o&&i&&n.uniform3f(i,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.rim,0)),n.uniform4f(r.shadowColor,Ve[0],Ve[1],Ve[2],Ve[3]*t.shadow.alpha),n.uniform1f(r.fringe,Qt),n.uniform3f(r.cloth,g[0],g[1],g[2]),n.uniform2f(r.viewport,n.drawingBufferWidth,n.drawingBufferHeight),r),Ue=He(Me),We=He(je);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let Ge=Uint32Array.BYTES_PER_ELEMENT,Ke=(ne+J+re)*Ge;p&&C?(n.disable(n.DEPTH_TEST),n.blendEquation(x?n.MIN:n.MAX),n.uniform1i(We.mode,on),n.drawElements(n.TRIANGLE_STRIP,ie,n.UNSIGNED_INT,Ke),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST)):p&&(n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(We.mode,tn),n.drawElements(n.TRIANGLE_STRIP,ie,n.UNSIGNED_INT,Ke),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(We.fillAlpha,g[3]),n.uniform1i(We.mode,an),n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST)),d?xe(d,e,t,M,ze,Ie,P):(n.useProgram(a.program),n.uniform1i(a.u.mode,en),n.uniformMatrix4fv(a.u.viewProj,!1,fe),n.uniform3f(a.u.plane,P.x,P.y,Fe),n.depthMask(!0),n.depthFunc(n.LESS),n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),n.useProgram(je.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(We.mode,$t),n.drawElements(n.TRIANGLES,ne,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),J>0&&(n.uniform1i(We.mode,nn),n.drawElements(n.TRIANGLES,J,n.UNSIGNED_INT,ne*Ge)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.useProgram(Me.program),n.uniform1i(Ue.mode,rn),n.uniform1i(Ue.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),n.drawElements(n.TRIANGLE_STRIP,ie,n.UNSIGNED_INT,Ke),n.uniform1i(Ue.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),n.drawElements(n.TRIANGLE_STRIP,ie,n.UNSIGNED_INT,Ke)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null))};return pe(t),{draw(e,t){Se(Ln(e),t)},drawTyped:Se,resize:me,materialNote:()=>l&&(u?ue?.silkUnavailable()??!1:c)||m&&(u?ue?.rubberUnavailable()??!1:p)||b&&(u?ue?.glassUnavailable()??!1:x)?St:null}}var qn=1.1868238913561442,Jn=1.2566370614359172,$={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:Jn,elevation:qn,p:.4,k:.07,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowAlpha:.05,shade:.2,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,plyMode:`shade`,plyProfile:`wave`,plyGain:10,plyNotch:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,glassTint:.5,glassEdge:5,glassMirror:0,glassGloss:.5,glassSharpness:30,glassEta:1.5,glassDispersion:0,glassSecondGloss:.5,glassSecondWidth:.3,glassDispersionMode:`trt`,glassSecondShift:.35,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:Jt,light:{dir:a(Jn),elevation:qn}},{width:Yn,...Xn}=c($),Zn=3e3;function Qn(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function $n(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:Zn},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=Qn(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var er=4,tr=2**-53;function nr(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=er)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<tr&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function rr(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return ar(s,e,t,n,r,i,a,o);if(c&&a>0)return ir(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=Qn(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function ir(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function ar(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return nr(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function or(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function sr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=rr(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,or(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<or(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var cr=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},lr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,ur=e=>e>0&&e<1?e:$.stretchSmoothDecay,dr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap;function fr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function pr(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}function mr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;if(a.last!==null&&(a.driver.step(n-a.last),a.driver.idle)){r(a.from.length,a.to);return}a.last=n;let o=pr(a.seq,a.from,a.to,a.ex,a.L0-a.driver.value);a.current=o,e.draw(o,fr(o),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<fr(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=new cr(lr(e.accel()),ur(e.decay()),dr(e.snap()),{value:Number.isFinite(d)?d:0});f.to(0);let p=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:f,last:null,frame:null,current:c},p||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function hr(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function gr(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var _r=e=>Math.min(1,Math.max(0,e)),vr=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function yr(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=gr(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=vr(i,n,a>0?_r(l/a):1)}return c}let u=o>0;if(u&&s>0)return br(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?_r((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=vr(s,n,g),f=g,d+=m,p+=1}return c}function br(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return nr(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=vr(n[a],r,i)}),e}function xr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Sr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=yr(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,xr(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<xr(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=hr(c,n,o,e.speed()),m=gr(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Cr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var wr=Math.PI/4,Tr=.8,Er=-Math.SQRT1_2,Dr=-Math.SQRT1_2;function Or(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}var kr=256,Ar=1.25;function jr(e,t){if(t&&t.front===e)return t;let n=Or(e)??[255,255,255],r=[];for(let e=0;e<kr;e+=1){let t=e/255*Ar,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function Mr(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function Nr(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function Pr(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function Fr(e,t,n,r,i,a,o){return Mr(e,t,n,a,o)-r*Pr(e,t,n,i,a,o)}function Ir(e,t,n,r,i,a,o){return Nr(e,t,n,a,o)-r*Pr(e,t,n,i,a,o)}function Lr(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??Er,u=n.light?.dir.y??Dr,d=n.light?.elevation??wr,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*Tr,v=.9*Tr;e.globalAlpha=n.shadow.alpha,e.fillStyle=n.shadow.color;for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(Fr(s,a,c,l,f,t,1),Ir(s,a,c,u,f,t,1)),e.lineTo(Fr(s,a,c,l,f,t,-1),Ir(s,a,c,u,f,t,-1)),e.lineTo(Fr(s,a,c,l,f,t+1,-1),Ir(s,a,c,u,f,t+1,-1)),e.lineTo(Fr(s,a,c,l,f,t+1,1),Ir(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/Ar*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(Mr(s,a,c,t,1),Nr(s,a,c,t,1)),e.lineTo(Mr(s,a,c,t,-1),Nr(s,a,c,t,-1)),e.lineTo(Mr(s,a,c,t+1,-1),Nr(s,a,c,t+1,-1)),e.lineTo(Mr(s,a,c,t+1,1),Nr(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function Rr(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=jr(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:jr(e,i),Lr(n,t,a,r,i)}else{n.globalAlpha=a.shadow.alpha,n.strokeStyle=a.shadow.color,n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(Cr(e),t)},drawTyped:s,resize:o}}var zr=127;function Br(){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0}}}function Vr(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return Br();let i=e.getImageData(0,0,n,r).data,a=n,o=r,s=-1,c=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=zr||(a=Math.min(a,t),o=Math.min(o,e),s=Math.max(s,t),c=Math.max(c,e));let l=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>zr};return s<a||c<o?{inside:l,bounds:{x:0,y:0,w:0,h:0}}:{inside:l,bounds:{x:a/t,y:o/t,w:(s-a+1)/t,h:(c-o+1)/t}}}async function Hr(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?Br():(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),Vr(i,n))}function Ur(e,t,n,r=`machine`){let i=e.length,a=()=>Int32Array.from({length:i},(e,t)=>t);if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=Wr(i,v,y),O=new Int32Array(i),k=0;for(let{c:e}of E)for(let t of Gr(e.members,D,h,v,y)){let e=t.length;if(r===`hand`){let n=Math.floor((e-1)/2);for(let e=n;e>=0;--e)O[k++]=t[e];for(let r=n+1;r<e;r+=1)O[k++]=t[r]}else for(let e of t)O[k++]=e}return O}function Wr(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function Gr(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function Kr(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function qr(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=Kr(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var Jr=2,Yr=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,Xr=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/Jr),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),Zr=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Qr(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=Xr(a);if(n=o,r&&Yr(r.key,o))return Zr(r.result);let s=i.find(e=>Yr(e.key,o));if(s)return Zr(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,Jr);return{stitches:qr(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&Yr(n,o)&&(r={key:o,result:e}),Zr(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function $r(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function ei(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*$r(o,r)}})}function ti(e,t,n){return Math.min(t,n*e)}var ni=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),ri=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),ii=12,ai=2e-14;function oi(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<ni.length;r++){let s=ni[r],c=ri[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function si(e,t,n){if(n===0)return e;let[r,i]=oi(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<ii;n++){let[n,r]=oi(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=ai*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function ci(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<ii;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=ai*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function li(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=si(a,t,n),s=t.n-1,c=Array(t.n),l=Math.abs(r),u=n===0||l===0?0:Math.sqrt(Math.max(0,o*o-i*i)),d=n===0||l===0?0:ci(u/l,t.work);if(n===0||l!==0&&!(d>0)){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*$r(a,t.p)}}return di(e,c,t.tau)}if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*$r(a,t.p)}}return di(e,c,t.tau)}let f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*$r(u,t.p)}}return di(e,c,t.tau)}function ui(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function di(e,t,n){return ui(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function fi(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=si(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{ui(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)},f=Math.abs(a),p=i===0||f===0?0:Math.sqrt(Math.max(0,c*c-o*o)),m=i===0||f===0?0:ci(p/f,t.work);if(i===0||f!==0&&!(m>0)){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*$r(r,t.p))}d();return}if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*$r(a,t.p))}d();return}let h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*$r(c,t.p))}d()}var pi=64,mi=256,hi=4,gi=16,_i=Math.sin(Math.PI/18),vi=new Float64Array(pi),yi=new Float64Array(pi);function bi(){let e=pi/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=pi;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=pi*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);vi[t]=(1-e)*.5,vi[63-t]=(1+e)*.5,yi[t]=r,yi[63-t]=r}}bi();function xi(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<pi;n++){let o=vi[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*yi[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=pi),[r,i]}var Si=new Map;function Ci(e){let t=Si.get(e);if(t)return t;let n=new Float64Array(mi),r=new Float64Array(mi);for(let t=0;t<mi;t++){let i=t/255;n[t]=hi*i*i,r[t]=xi(n[t],e)[0]}let i={p:e,r:n,length:r};return Si.set(e,i),i}function wi(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function Ti(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?xi(s,r,t.work)[0]:t.L0/o)*(1+n),l=wi(Ci(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,gi);e++){let[e,n]=xi(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function Ei(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/_i),a=Math.min(d,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(d,a):Math.min(d,Math.max(0,a+o))}function Di(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return ei(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=Ti(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return ei(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=Ei(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*$r(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function Oi(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:Ti(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=Ei(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*$r(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var ki={shape:j,shapeInto:M},Ai=[[`bezier`,ki],[`catenary`,{shape:li,shapeInto:fi}],[`arch`,{shape:Di,shapeInto:Oi}],[`wire`,{shape:We,shapeInto:Ge,boundInto:$e}]],ji=new Map(Ai);function Mi(){return Ai.map(([,e])=>e)}function Ni(e){return ji.get(e)??ki}function Pi(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var Fi=1e-12;function Ii(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>Fi*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var Li=33,Ri=[0,.25,.5,.75,1].map(e=>e*2),zi=[-u,0,u],Bi=8,Vi=Qr(Hr),Hi=null,Ui=0;function Wi(e){return $}function Gi(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var Ki=new WeakMap;function qi(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var Ji=0,Yi,Xi;function Zi(e){Xi=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Qi=(e,t,n)=>({x:e.x+t,y:e.y+n});function $i(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function ea(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function ta(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function na(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function ra(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function ia(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function aa(e){return{smax:ia(e.wireSmax,1,N),lref:ra(e.wireLref,80),alignScale:ra(e.alignScale,60)}}var oa=/^#[0-9a-f]{6}$/i;function sa(e){return ra(e.bandWidth,$.bandWidth)}function ca(e){return e.section===`band`}function la(e){return ca(e)?sa(e)/2:e.width/2}function ua(e){return ca(e)?0:e.width}function da(e){return ca(e)?sa(e):e.width}function fa(e){return e.stretchMode!==`absolute`}function pa(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:$.stretchUnit}function ma(e,t,n,r){if(fa(r)||e===0)return e;let i=O(t,n),a=e*pa(r)/i;return Number.isFinite(a)&&a>0?a:0}function ha(e,t,n){return Math.max(2,ma(2,e,t,n))}function ga(e,t){let n=new Float64Array(e.length);if(!fa(t)){let e=pa(t);return n.fill(e>0?e:0)}let i=r(t.pitch,ua(t),t.elevation,t.shadowRatio);for(let r=0;r<e.length;r+=1){let a=e[r],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[r]=O(a,ti(o,i,t.k))}return n}function _a(e){let t=Ni(e.model)===Ni(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:$.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:$.gravityBeta,i=2*Math.PI,o=aa(e);return{...e,stretch:ta(e.stretch,2),stretchMode:fa(e)?`ratio`:`absolute`,stretchUnit:pa(e),twist:ta(e.twist,u),cameraTilt:ta(e.cameraTilt,u),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:$.cameraTurn,cameraZoom:ra(e.cameraZoom,$.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:$.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:$.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:$.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:$.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:$.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:$.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:$.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:$.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:ta(e.align,1),phiMax:ta(e.phiMax,d),phiRef:na(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:$.lightAzimuth,stretchDuration:ra(e.stretchDuration,$.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,stretchSpeed:ra(e.stretchSpeed,$.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:$.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:$.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:$.stretchSmoothSnap,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:ra(e.stretchLineDuration,$.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,wireSmax:o.smax,wireLref:o.lref,alignScale:o.alignScale,section:ca(e)?`band`:`round`,bandWidth:sa(e),bandFront:oa.test(e.bandFront)?e.bandFront:$.bandFront,bandBack:oa.test(e.bandBack)?e.bandBack:$.bandBack,material:e.material===`silk`||e.material===`rubber`||e.material===`glass`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:$.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:$.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:$.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):$.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):$.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:$.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:$.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:$.rubberRim,glassTint:Number.isFinite(e.glassTint)?e.glassTint:$.glassTint,glassEdge:Number.isFinite(e.glassEdge)?e.glassEdge:$.glassEdge,glassMirror:Number.isFinite(e.glassMirror)?e.glassMirror:$.glassMirror,glassGloss:Number.isFinite(e.glassGloss)?e.glassGloss:$.glassGloss,glassSharpness:Number.isFinite(e.glassSharpness)?e.glassSharpness:$.glassSharpness,glassEta:Number.isFinite(e.glassEta)?e.glassEta:$.glassEta,glassDispersion:Number.isFinite(e.glassDispersion)?e.glassDispersion:$.glassDispersion,glassSecondGloss:Number.isFinite(e.glassSecondGloss)?e.glassSecondGloss:$.glassSecondGloss,glassSecondWidth:Number.isFinite(e.glassSecondWidth)?e.glassSecondWidth:$.glassSecondWidth,glassDispersionMode:e.glassDispersionMode===`shift`?`shift`:`trt`,glassSecondShift:Number.isFinite(e.glassSecondShift)?e.glassSecondShift:$.glassSecondShift,plyMode:e.plyMode===`normal`?`normal`:`shade`,plyProfile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,plyGain:Number.isFinite(e.plyGain)?e.plyGain:$.plyGain,plyNotch:Number.isFinite(e.plyNotch)?e.plyNotch:$.plyNotch,light:{dir:a(e.lightAzimuth),elevation:e.elevation}}}function va(e,t,n,i,a,o,s){let c={dir:n.light.dir,elevation:n.elevation},l=r(n.pitch,ua(n),c.elevation,n.shadowRatio),f=ta(n.phiMax,d),p=ta(n.twist,u),m=ta(n.align,1),h=aa(n),g=2*Math.PI,_={alpha:(n.gravityAlpha%g+g)%g,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let r=0;r<t.length;r+=1){let u=t[r],d=ta(a===void 0?n.stretch:a[r],2);if(s){let e=r*4;if(s.valid[r]===1&&Object.is(s.e[r],d)&&Object.is(s.ends[e],u.a.x)&&Object.is(s.ends[e+1],u.a.y)&&Object.is(s.ends[e+2],u.b.x)&&Object.is(s.ends[e+3],u.b.y))continue;s.valid[r]=1,s.e[r]=d,s.ends[e]=u.a.x,s.ends[e+1]=u.a.y,s.ends[e+2]=u.b.x,s.ends[e+3]=u.b.y}let g=Math.hypot(u.b.x-u.a.x,u.b.y-u.a.y),v=e.start[r],y=ti(g,l,n.k),b=ma(d,u,y,n),x=fa(n)?void 0:ha(u,y,n);i.shapeInto(u,{e:b,H:y,p:n.p,n:Li,phiMax:f,eRef:na(n.phiRef),tau:o===void 0?p*Pi(u):o,twist:p,gravity:_,align:m,...h,...x===void 0?{}:{eMax:x}},e.center,v*3);let S=e.start[r+1]-v,C=Math.tan(c.elevation);for(let t=0;t<S;t+=1){let n=v+t,r=v+(t===0?0:t-1),i=v+(t===S-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],s=Math.hypot(a,o),l=-o/s,u=a/s;e.normal[n*2]=l,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/C;e.shadow[n*2]=d-c.dir.x*t,e.shadow[n*2+1]=f-c.dir.y*t}e.lightSide[n]=c.dir.x*l+c.dir.y*u}e.band&&e.bandNormal&&Ii(e.center,v,S,u,e.band,e.bandNormal)}}function ya(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function ba(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,ua(e),e.shadowRatio,e.k,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function xa(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function Sa(){let e,t,n,r,i=0,a=e=>{let t=e*Li;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(o,s,c){e&&t&&n&&e.count===o.length||(e=a(o.length),t=a(o.length),n={e:new Float64Array(o.length),ends:new Float64Array(o.length*4),valid:new Uint8Array(o.length)},r=void 0);let l=ba(s);xa(r,l)||n.valid.fill(0),r=l,ca(s)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=o.length;t+=1)e.start[t]=t*Li;return va(e,o,s,Ni(s.model),c,void 0,n),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal)),t},get allocations(){return i}}}function Ca(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function wa(e,t,n,r,i){let a=e.length*Li,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*Li;return va(o,e,t,n,r,i),Ca(o)}function Ta(e){let t=aa(e);return JSON.stringify([e.text,e.font,e.angle,e.pitch,Math.min(e.step,.5),e.mergeGap,e.minLen,ua(e),e.shadowRatio,e.elevation,e.light.dir.x,e.light.dir.y,e.p,e.k,e.phiMax,na(e.phiRef),(e.gravityAlpha%(2*Math.PI)+2*Math.PI)%(2*Math.PI),t.smax,t.lref,la(e),fa(e)?`ratio`:[`absolute`,pa(e)]])}var Ea=[0,d/2,d],Da=[0,d];function Oa(e){let t=e.start[e.count];return{count:e.count,start:e.start,center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}}function ka(e,t,n,r,i){let a=Math.tan(n.elevation),o=n.light.dir.x/a,s=n.light.dir.y/a,c=e[0],l=e[e.length-1],u=t.map(e=>e===d?1:Math.sin(e)),f=t.map(e=>e===d?0:Math.cos(e)),p=new Float64Array(t.length),m=u.map(e=>e*e);for(let n=0;n<c.count;n+=1){let a=c.start[n],h=c.start[n+1],g=a+(h-a-1>>1),_=c.center[g*3+2];for(let t=0;t<e.length;t+=1){let n=e[t],r=Math.hypot(n.center[g*3]-c.center[g*3],n.center[g*3+1]-c.center[g*3+1],n.center[g*3+2]);p[t]=t===0||!(_>0)||!(r>0)?1:r/_}let v=p[e.length-1],y=e=>{let n=Math.sin(e)**2,r=0;for(let e=0;e<t.length;e+=1){let i=p[e];for(let r=0;r<t.length;r+=1)r!==e&&(i*=(n-m[r])/(m[e]-m[r]));r+=i}return r};for(let e=a;e<h;e+=1){let n=c.center[e*3],a=c.center[e*3+1],m=c.center[e*3+2],h=(l.center[e*3]-n)/v,g=(l.center[e*3+1]-a)/v;for(let e=0;e<4;e+=1){let c=e%2==0?n:a,l=e%2==0?h:g,_=e<2?0:-(e%2==0?o:s)*m,v=-1/0,b=1/0;for(let e=0;e<t.length;e+=1){let t=p[e]*(l*u[e]+_*f[e]);v=Math.max(v,c+t),b=Math.min(b,c+t)}let x=Math.hypot(l,_),S=Math.atan2(l,_);S>0&&S<d&&(v=Math.max(v,c+y(S)*x));let C=Math.atan2(-l,-_);C>0&&C<d&&(b=Math.min(b,c-y(C)*x)),e%2==0?(i.minX=Math.min(i.minX,b-r),i.maxX=Math.max(i.maxX,v+r)):(i.minY=Math.min(i.minY,b-r),i.maxY=Math.max(i.maxY,v+r))}}}}function Aa(e,t){let n=Ta(t);if(Yi?.key===n)return Yi.extent;Ji+=1;let i={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},a=la(t),o=e.length*Li,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*Li;let c=[];for(let n of Mi()){if(!n.boundInto){let r=n===Ni(`bezier`)?Ea:n===Ni(`arch`)?Da:void 0;if(r){for(;c.length<r.length;)c.push(Oa(s));let o=c.slice(0,r.length);for(let s of Ri)r.forEach((r,i)=>va(o[i],e,{...t,stretch:s,phiMax:0},n,void 0,r)),ka(o,r,t,a,i);continue}let l=zi;for(let r of Ri)for(let c of l){va(s,e,{...t,stretch:r},n,void 0,c);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1],r=s.shadow[e*2],o=s.shadow[e*2+1];i.minX=Math.min(i.minX,t-a,r-a),i.minY=Math.min(i.minY,n-a,o-a),i.maxX=Math.max(i.maxX,t+a,r+a),i.maxY=Math.max(i.maxY,n+a,o+a)}}}if(n.boundInto){let o=aa(t),s=r(t.pitch,ua(t),t.elevation,t.shadowRatio),c={light:{dir:t.light.dir,elevation:t.elevation},width:2*a};for(let r of e){let e=ti(Math.hypot(r.b.x-r.a.x,r.b.y-r.a.y),s,t.k);n.boundInto(r,{e:0,H:e,p:t.p,n:Li,phiMax:0,eRef:1,gravity:{alpha:t.gravityAlpha,beta:0},smax:o.smax,lref:o.lref},ha(r,e,t),i,c)}}}return Number.isFinite(i.minX+i.minY+i.maxX+i.maxY)||(i.minX=0,i.minY=0,i.maxX=0,i.maxY=0),Yi={key:n,extent:i},i}async function ja(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=_a(e),{light:a,...o}=i,{stitches:s,bounds:l}=await Vi.get(i);Hi?.builds!==Vi.builds&&(Hi={builds:Vi.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=Hi.orders[u];d||(d=Ur(s,i.angle,i.pitch,u),Hi.orders[u]=d,Ui+=1);let f=Ki.get(r),p=f?.itemsStage??Sa(),m=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>ta(e,2)):void 0,h=p.build(s,i,m),g=wa(s,i,Ni(i.model),s.map(()=>0),0),_=Aa(s,i),v=_.maxX-_.minX,y=_.maxY-_.minY,b=Math.max(1,Math.ceil(v+16)),x=Math.max(1,Math.ceil(y+16)),S=Bi-_.minX+b-(v+16),C=Bi-_.minY+x-(y+16),w=$i(window.devicePixelRatio),T=window.innerWidth,E=window.innerHeight,D={cssW:T,cssH:E,dpr:w,scale:1},O=b<=T&&x<=E,k=O?{cssW:b,cssH:x,dpr:w,scale:1}:D,A=i.cameraTilt,j=i.cameraTurn,M=i.cameraZoom,N=f;if(!N){let e,t=!0,n=!1;try{e=Kn(r,D),n=!0}catch{e=Rr(r,k),t=!1}N={renderer:e,webgl:t,viewportWidth:T,viewportHeight:E,dpr:w,rendererBuilds:1,itemsStage:p,localStitches:s,resolved:i,typedItems:h,offsetX:S,offsetY:C,...n?{mesh:!0}:{}},Ki.set(r,N)}let P=N.webgl?A:0,F=N.webgl?j:0,I=N.webgl?M:1,ee=P!==0||F!==0||I!==1,te=N.mesh!==void 0,L=te||ee||!O;N.renderer.resize(L?D:k),f&&(N.viewportWidth=T,N.viewportHeight=E,N.dpr=w);let R=qi(g,da(i)),z=R?R.x+S:b/2,B=R?R.y+C:x/2,V=ea(T/2+i.cameraPanX-z,window.devicePixelRatio),H=ea(E/2+i.cameraPanY-B,window.devicePixelRatio),U={x:V+z,y:H+B},W=L?U.x-z:0,G=L?U.y-B:0,K=S+W,q=C+G,ne={x:z+W,y:B+G},J=ee||te?{tilt:P,turn:F,zoom:I,center:ne}:void 0,re={x:l.x+K,y:l.y+q,w:l.w,h:l.h},ie=s.map(({a:e,b:t})=>({a:Qi(e,K,q),b:Qi(t,K,q)}));ya(h,K,q);let ae=Ca(h);r.style.position=`fixed`,r.style.left=`${L?0:V}px`,r.style.top=`${L?0:H}px`,r.style.transform=`none`;let oe={bounds:re,params:o,stitches:ie,items:ae,display:{scale:1,dpr:w,cssW:b,cssH:x},view:{tilt:P,turn:F,zoom:I,center:U},stitchBuilds:Vi.builds,stitchOrder:d,stitchOrderBuilds:Ui,extentBuilds:Ji,rendererBuilds:N.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:p.allocations,wireClamps:_e().clamps,wireUnconverged:_e().unconverged,peek:()=>Ca(h),stretches:()=>Fa(N),...Xi?{setCamera:Xi}:{}};return N.stretches=m,N.localStitches=s,N.resolved=i,N.typedItems=h,N.offsetX=K,N.offsetY=q,N.view=J,N.snapshot=oe,N.renderer.drawTyped(h,Gi(N,c(i))),window.__textweaving=oe,oe}function Ma(e){let t=e??document.querySelector(`canvas`);if(t)return Ki.get(t)?.webgl}function Na(e){let t=e??document.querySelector(`canvas`);return t?Ki.get(t)?.renderer.materialNote?.()??null:null}function Pa(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=Ki.get(n);r?.snapshot&&(r.snapshot.playing=e)}function Fa(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function Ia(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=Ki.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:ta(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>ta(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches),ya(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,Gi(a,c(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.peek=()=>Ca(a.typedItems),t&&(o.items=Ca(a.typedItems)),o}var La=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowAlpha.shadowRatio.k.shade.ply.plyPitch.plySlope.shininess.plyContrast.plyMode.plyProfile.plyGain.plyNotch.step.mergeGap.minLen.alignScale.section.bandWidth.bandFront.bandBack.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.glassTint.glassEdge.glassMirror.glassGloss.glassSharpness.glassEta.glassDispersionMode.glassDispersion.glassSecondGloss.glassSecondWidth.glassSecondShift.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),Ra=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],za=[[`together`,`同時`],[`sequence`,`順番`]],Ba=[[`absolute`,`絶対値`],[`ratio`,`割合`]],Va=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`]],Ha=[[`machine`,`機械`],[`hand`,`手`]],Ua=[[`round`,`丸い線`],[`band`,`帯`]],Wa=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`],[`glass`,`ガラス`]],Ga=[[`shade`,`明るさの縞`],[`normal`,`法線の揺らぎ`]],Ka=[[`trt`,`跳ね返りの屈折`],[`shift`,`照りのずらし`]],qa=[[`wave`,`なだらか`],[`notch`,`切れ込み`],[`scallop`,`丸い膨らみ`]],Ja=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`]),Ya=e=>Number.isFinite(e)&&e>0;function Xa(e){let t=Ni(e.model);return Ra.find(([e])=>Ni(e)===t)?.[0]??`bezier`}var Za=({params:e})=>Xa(e)===`wire`&&Ya(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,Qa=e=>Za(e)??(Ya(e.params.twist)||Ya(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),$a=e=>Za(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),eo=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,to=e=>e.section===`band`,no=e=>e.material===`silk`,ro=e=>e.material===`rubber`,io=e=>e.material===`glass`,ao=e=>no(e)?`silk`:ro(e)?`rubber`:io(e)?`glass`:`standard`,oo=e=>e.glassDispersionMode===`shift`?`shift`:`trt`,so=e=>e.stretchOrder!==`together`,co=e=>Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,lo=e=>e.stretchMode!==`absolute`,uo=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,fo=e=>uo(e)===`speed`,po=e=>uo(e)===`smooth`,mo=`時間の決め方をなめらか以外にすると効く`,ho=({params:e})=>po(e)?null:`時間の決め方をなめらかにすると効く`,go={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,plyMode:`round`,plyProfile:`round`,plyGain:`round`,plyNotch:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},_o=(e,t)=>{let n=go[e];return n===void 0||n===(to(t)?`band`:`round`)},vo=e=>eo(e)??(Ya(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),yo=e=>vo(e)??(e.params.plyMode===`normal`?null:`撚りの表し方を法線の揺らぎにすると効く`),bo=e=>yo(e)??(e.params.plyProfile===`notch`?null:`溝の形を切れ込みにすると効く`),xo=e=>eo(e)??(ro(e.params)?null:`素材をゴムにすると効く`),So=e=>eo(e)??(io(e.params)?null:`素材をガラスにすると効く`),Co=e=>So(e)??(oo(e.params)===`shift`?null:`分光の作り方を照りのずらしにすると効く`),wo=e=>eo(e)??(no(e.params)?null:`素材をシルク・サテンにすると効く`),To=eo,Eo=2*Math.PI,Do=5,Oo=1e3,ko=e=>Math.min(Math.PI/2,Math.max(0,e)),Ao=e=>{let t=(e%Eo+Eo)%Eo;return t<Eo?t:0},jo={gravityBeta:Za,twist:({params:e})=>Xa(e)!==`wire`||Ya(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:Qa,gravityAlpha:$a,wireSmax:Za,wireLref:Za,alignScale:e=>Qa(e)??(Ya(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=Xa(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:Ya(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=Xa(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},shade:e=>eo(e)??(io(e.params)?`素材をガラス以外にすると効く`:null),ply:eo,plyPitch:vo,plySlope:vo,plyContrast:vo,plyMode:vo,plyProfile:yo,plyGain:yo,plyNotch:bo,shininess:e=>eo(e)??`標準の素材には照りが無いので効かない(シルク・ゴムは素材の鋭さのつまみが効く)`,material:eo,silkGloss:wo,silkSharpness:wo,silkShift:wo,silkStreak:wo,silkDim:wo,rubberGloss:xo,rubberSharpness:xo,rubberRim:xo,glassTint:So,glassEdge:So,glassMirror:So,glassGloss:So,glassSharpness:So,glassEta:So,glassDispersion:So,glassSecondGloss:So,glassSecondWidth:So,glassDispersionMode:So,glassSecondShift:Co,cameraDragTilt:To,cameraDragTurn:To,cameraWheelZoom:To,cameraFov:eo,threadWiden:eo,threadMinRadius:eo,stretchDuration:({params:e})=>uo(e)===`duration`?so(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>uo(e)===`duration`?so(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>fo(e)?null:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>po(e)||so(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>po(e)?mo:null,stretchPull:({params:e})=>po(e)?mo:so(e)?null:`伸びの順を順番にすると効く`,stretchPullDelay:({params:e})=>po(e)?mo:so(e)?co(e)>0?null:`引かれの強さを 0 より大きくすると効く`:`伸びの順を順番にすると効く`,stretchSmoothAccel:ho,stretchSmoothDecay:ho,stretchSmoothSnap:ho,stretchUnit:({params:e})=>lo(e)?`伸びの測り方を絶対値にすると効く`:null},Mo={material:e=>no(e.params)||ro(e.params)||io(e.params)?e.materialNote??null:null};function No(e,t){return Ja.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function Po(e,t){if(typeof $[e]!=`number`)return t;let n=Number(t);return Ja.has(e)?n*Math.PI/180:n}function Fo(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function Io(e,t=e.value){return Number(t).toFixed(Fo(e.step))}function Lo(e,t){let n=Math.max(Io(e,e.min).length,Io(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function Ro(e,t,n=e.value){t&&(t.textContent=Io(e,n))}function zo(){return n(``,Wi(window.location.search))}function Bo(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function Vo(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function Ho(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function Uo(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function Wo(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 8df0629 2026-11-25 15:31`}async function Go(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),Uo(),Wo();let r=e??document.querySelector(`canvas`)??void 0,i=Wi(window.location.search),a=n(window.location.search,i),o=null,s=!1,c=!1,u=document.querySelector(`select[data-param="model"]`);if(!u)throw Error(`Missing control for model`);let d=Ni(``);for(let[e,t]of Ra)(e===`bezier`||Ni(e)!==d)&&u.add(new Option(t,e));let f=document.querySelector(`select[data-param="section"]`);if(!f)throw Error(`Missing control for section`);for(let[e,t]of Ua)f.add(new Option(t,e));let p=document.querySelector(`select[data-param="material"]`);if(!p)throw Error(`Missing control for material`);for(let[e,t]of Wa)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="plyMode"]`);if(!m)throw Error(`Missing control for plyMode`);for(let[e,t]of Ga)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="plyProfile"]`);if(!h)throw Error(`Missing control for plyProfile`);for(let[e,t]of qa)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="glassDispersionMode"]`);if(!g)throw Error(`Missing control for glassDispersionMode`);for(let[e,t]of Ka)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="stretchOrder"]`);if(!_)throw Error(`Missing control for stretchOrder`);for(let[e,t]of za)_.add(new Option(t,e));let v=document.querySelector(`select[data-param="stretchMode"]`);if(!v)throw Error(`Missing control for stretchMode`);for(let[e,t]of Ba)v.add(new Option(t,e));let y=document.querySelector(`select[data-param="stretchTiming"]`);if(!y)throw Error(`Missing control for stretchTiming`);for(let[e,t]of Va)y.add(new Option(t,e));let b=document.querySelector(`select[data-param="stitchStyle"]`);if(!b)throw Error(`Missing control for stitchStyle`);for(let[e,t]of Ha)b.add(new Option(t,e));let x=document.querySelector(`input[data-param="stretch"]`);if(!x)throw Error(`Missing control for stretch`);x.max=`2`;let S=document.querySelector(`input[data-param="cameraFov"]`);if(!S)throw Error(`Missing control for cameraFov`);S.max=`60`;let C=new Map,w=new Map;for(let e of La){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);C.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(w.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&Lo(t,n))}let T=new Map;for(let e of La){if(!jo[e]&&!Mo[e])continue;let t=C.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),T.set(e,n)}let E=new Map;for(let e of Object.keys(go)){let t=C.get(e);E.set(e,t.closest(`.control`)??t.parentElement)}let D=new Set([...E.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),O=()=>{for(let[e,t]of E)t.hidden=!_o(e,a);for(let e of D){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},k=()=>{O();let e={params:a,webgl:Ma(r),materialNote:Na(r)};for(let[t,n]of T){let r=jo[t]?.(e)??null,i=C.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??Mo[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},A=()=>{for(let e of La){let t=e===`stretchOrder`?so(a)?`sequence`:`together`:e===`stretchMode`?lo(a)?`ratio`:`absolute`:e===`stretchTiming`?uo(a):e===`material`?ao(a):e===`glassDispersionMode`?oo(a):No(e,a[e]),n=C.get(e);n.value=t;let r=w.get(e);n instanceof HTMLInputElement&&n.type===`range`?Ro(n,r):r&&(r.textContent=n.value)}},j=null,M=[],N=null,P=()=>{let e=l(a,i),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===N)return;let n=performance.now(),r=M.length<Do?n:M[0]+Oo;if(r>n)j===null&&(j=setTimeout(()=>{j=null,P()},r-n));else{j!==null&&(clearTimeout(j),j=null),M.push(n),M.length>Do&&M.shift();try{history.replaceState(null,``,t),N=t}catch{}}},F=e=>{x.value=String(e),Ro(x,w.get(`stretch`),e)},I=null,ee=$n({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>Pa(e,r),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},F(e),k(),Ia(e,t,r)},finish:e=>{a={...a,stretch:e},P()}}),te=sr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:$.stretchLineDuration,pull:()=>co(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),Pa(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),Ia(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),L=Sr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ga(e,_a(a)):[]},speed:()=>_a(a).stretchSpeed,together:()=>!so(a),pull:()=>co(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),Pa(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),Ia(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),R=mr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ga(e,_a(a)):[]},accel:()=>_a(a).stretchSmoothAccel,decay:()=>_a(a).stretchSmoothDecay,snap:()=>_a(a).stretchSmoothSnap,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),Pa(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),Ia(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),z={play(e){po(a)?R.play(e):fo(a)?L.play(e):so(a)?te.play(e):ee.play(e)},stop(){ee.stop(),te.stop(),L.stop(),R.stop(),I=null}},B=e=>{z.stop(),a={...a,...e},q(!1)},V=[];Zi(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);V.push(t),B(n)}));let H=()=>{let e=Ma(r);return e===!0&&To({params:a,webgl:e})===null},U=e=>{Number.isFinite(e)&&e>0&&B({cameraZoom:e})},W=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&H())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=H()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){B({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!H())return;B({cameraTilt:ko(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:Ao(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(H()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}B(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!H())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;U(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},G=!1,K=async e=>{c=!1,G=!1,s=!0;let t=a,n=V;V=[];try{e&&P(),await ja(t,r,I??void 0),r?.setAttribute(`aria-label`,Bo(t.text)),k()}finally{s=!1;for(let e of n)e();c&&q(G)}},q=(e=!0)=>{c=!0,e&&(G=!0),o!==null||s||(o=requestAnimationFrame(async()=>{o=null,await K(G)}))};for(let e of La)C.get(e).addEventListener(`input`,t=>{z.stop();let n=t.currentTarget;a={...a,[e]:Po(e,n.value)},e===`background`&&Vo(a.background);let r=w.get(e);n instanceof HTMLInputElement&&n.type===`range`?Ro(n,r):r&&(r.textContent=n.value),k(),q()}),C.get(e).addEventListener(`change`,P);let ne=document.querySelector(`[data-stretch-to="max"]`),J=document.querySelector(`[data-stretch-to="min"]`);if(!ne||!J)throw Error(`Missing stretch animation buttons`);ne.addEventListener(`click`,()=>z.play(2)),J.addEventListener(`click`,()=>z.play(0));let re=document.querySelector(`[data-reset]`);if(!re)throw Error(`Missing reset button`);re.addEventListener(`click`,()=>{z.stop(),a=zo(),Vo(a.background),A(),k(),q()}),r&&W(r),window.addEventListener(`resize`,()=>q()),Ho(window,()=>q()),Vo(a.background),A(),k(),await K(!1)}await Go();