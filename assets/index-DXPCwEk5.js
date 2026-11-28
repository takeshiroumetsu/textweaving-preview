(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]),n=new Set([`heightMax`]);function r(r,i){let a=e(i),o=new URLSearchParams(r.startsWith(`?`)?r.slice(1):r);for(let e of Object.keys(i)){if(t.has(String(e))||!o.has(String(e)))continue;let r=o.get(String(e));if(r===null)continue;let s=i[e];if(typeof s==`string`)a[e]=r;else if(typeof s==`number`&&r.trim()!==``){let t=Number(r);(Number.isFinite(t)||t===1/0&&n.has(String(e)))&&(a[e]=t)}}return a}function i(e,t,n,r){return r*(e-t)*Math.tan(n)}var a=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function o(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...a[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function s(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function c(e,t,n){let r=s(e),i=s(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function l(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,...e.plyMode===`normal`?{plyNormal:{profile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,gain:e.plyGain,notch:e.plyNotch}}:{},light:{dir:o(e.lightAzimuth),elevation:e.elevation,...e.lightSize!==0&&e.lightSize!==void 0?{size:e.lightSize}:{}},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack,thickness:e.bandThickness,...e.material===`glass`?{glassColor:e.glassColor}:{},...e.material===`glass`&&e.glassMode===`scatter`?{glassMode:`scatter`,glassHaze:e.glassHaze}:{}}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:e.material===`glass`?{material:{name:`glass`,tint:e.glassTint,edge:e.glassEdge,mirror:e.glassMirror,gloss:e.glassGloss,sharpness:e.glassSharpness,eta:e.glassEta,dispersion:e.glassDispersion,secondGloss:e.glassSecondGloss,secondWidth:e.glassSecondWidth,dispersionMode:e.glassDispersionMode,secondShift:e.glassSecondShift,shadowClear:e.glassShadowClear,causticGain:e.glassCausticGain,causticSamples:e.glassCausticSamples,causticBend:e.glassCausticBend}}:{},shadow:{strength:e.shadowStrength},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:c(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:c(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function u(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var d=Math.PI/2,f=Math.PI/2,p=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),m=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),h=12,g=2e-14,_=new Float64Array(2),v=1e8,y=.001;function b(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);_[0]+=o*p,s&&p>0&&(_[1]+=o*((t*c*r*l+n*l*l)/p))}var x=new Float64Array(16),S=new Float64Array(16);for(let e=0;e<p.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)x[2*e+n]=.5*(1+t*p[e]),S[2*e+n]=m[e]*.5;var C=new Float64Array(16),w=new Float64Array(16),T=1e-4;function E(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(y,s/(c*r));if(!(l<v))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<p.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*p[e]);C[2*e+n]=o+l*Math.sinh(r),w[2*e+n]=m[e]*.5*l*d*Math.cosh(r)}return!0}function D(e,t,n,r,i,a,o,s,c){_[0]=0,_[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)b(e,t,n,r,i,o[c],s[c],a)}function O(e,t,n){return D(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,x,S,n),_[0]}function k(e,t){return O(e,t)}function A(e,t,n,r,i){let a=4*t.H/3;if(n===0&&!(r>0))return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?O(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=E(o,s,u,r,i),f=!1;for(let e=0;e<h;e++){D(o,s,u,r,i,!0,d?C:x,d?w:S,t.work),t.work&&(t.work.newton+=1);let e=_[0]-l;if(!f&&Math.abs(e)<=T*l)f=!0,d=E(o,s,u,r,i);else if(Math.abs(e)<=g*l)break;let n=u-e/_[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function j(e,t){let n=e===0?0:Math.min(f,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(f,n):Math.min(f,Math.max(0,n+t.tau))}function M(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=j(n,t),i=Math.sin(r),a=Math.cos(r),o=A(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function N(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=j(i,t),o=Math.sin(a),s=Math.cos(a),c=A(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var P=.45,ee=.0025,F=.3,I=.1,L=1e-12,R={alpha:Math.PI/2,beta:0},z=12,B=2e-13,te=1e-10,ne=16384,V=16384,H=1024,re={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},ie=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],ae=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],U=ie.length*2,W=new Float64Array(U),oe=new Float64Array(U),G=new Float64Array(U),K=new Float64Array(U);for(let e=0,t=0;e<ie.length;e++)for(let n of[-1,1]){let r=.5*(1+n*ie[e]);W[t]=ae[e]*.5,oe[t]=6*r*(1-r),G[t]=3*(1-2*r),K[t]=32*r*(1-r)*(1-2*r),t+=1}var se=new Float64Array(33),ce=new Float64Array(33),le=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;se[e]=3*n-2*n*t,ce[e]=3*t*(1-t),le[e]=16*n*(1-t)*(1-t)}var ue=new Float64Array(U),q=new Float64Array(U),de=new Float64Array(U),J=new Float64Array(U),fe=new Float64Array(U),Y=new Float64Array(U),pe=new Float64Array(U),me=new Float64Array(U),he=0,ge=0;function _e(){return{clamps:he,unconverged:ge}}function ve(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ye(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function be(e){let{a:t,b:n}=ve(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function xe(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var Se=e=>e*e*e*(e*(e*6-15)+10);function Ce(e,t){let n=Math.floor(e),r=Math.floor(t),i=Se(e-n),a=Se(t-r),o=xe(n,r),s=xe(n+1,r),c=xe(n,r+1),l=xe(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function we(e,t){let n=be(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=Ce(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var Te=e=>Number.isFinite(e)&&e>0?e:0,Ee=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function De(e,t){let n=Te(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*we(e,t)}var Oe=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function ke(e,t,n,r){N(e,Oe(t),n,r);let i=De(e,t);if(i===0)return;let a=ve(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function Ae(e){let t=ve(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function je(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function Me(e,t){for(let n=0;n<U;n++){let r=t.ux*G[n]+t.c*t.gx*K[n],i=t.uy*G[n]+t.c*t.gy*K[n],a=t.uz*G[n]+t.c*t.gz*K[n],o=e.dx*oe[n],s=e.dy*oe[n];J[n]=o,fe[n]=s,Y[n]=r,pe[n]=i,me[n]=a,ue[n]=o*o+s*s,q[n]=o*r+s*i,de[n]=r*r+i*i+a*a}}function Ne(e,t,n=!1){let r=0,i=0;for(let t=0;t<U;t++){let a=J[t]+e*Y[t],o=fe[t]+e*pe[t],s=e*me[t],c=n?Math.sqrt(ue[t]+2*e*q[t]+e*e*de[t]):Math.hypot(a,o,s);r+=W[t]*c,i+=W[t]*(n?q[t]+e*de[t]:a*Y[t]+o*pe[t]+s*me[t])/c}return t&&(t.quad+=16),[r,i]}function Pe(e,t,n){return 4/3*M(e,{...Oe(t),e:n,n:3})[1].z}function Fe(e,t,n,r){let i=0,a=0;for(let t=0;t<U;t++){let o=r.ux*G[t]+r.c*r.gx*K[t],s=r.uy*G[t]+r.c*r.gy*K[t],c=r.uz*G[t]+r.c*r.gz*K[t],l=e.dx*oe[t],u=e.dy*oe[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=W[t]*m,a+=W[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Ie(e,t,n,r,i,a=n,o=!1){Me(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<z;e++){let[e,n]=Ne(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?te:B)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return ge+=1,c}var Le=new Map;function Re(e,t,n,r){let i=ve(e),a=t.gravity??R;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function ze(e,t){let n=Te(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Re(e,t,n,r):void 0;if(i!==void 0){let e=Le.get(i);if(e!==void 0)return e}let a=Ae(e),o=(t.L0??k(e,t.H))*(1+n),s=De(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??R,u=Math.min(1,Math.max(-1,we(e,t)/I)),d=je(a,s,c,l.alpha,l.beta,u),f=Pe(e,t,n),p={frame:a,radius:Ie(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Le.size>=ne){let e=Le.keys().next().value;e!==void 0&&Le.delete(e)}Le.set(i,p)}return p}function Be(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ye(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function Ve(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Qe(e,t,Ee(t),re),s=t.n-1,c=ye(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(he+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(he+=1),l[t]={x:v,y,z:b}}return l}function He(e,t,n,r){let i=Qe(e,t,Ee(t),re);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(he+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function Ue(e,t,n){let r=Qe(e,t,Ee(t),re);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(he+=1),e.x=t,e.y=n,e.z=i}}function We(e,t){let n=ze(e,t);if(!n){let n=M(e,Oe(t)),r=De(e,t);if(r!==0){let t=Ae(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return Ue(e,t,n),n}return Ve(e,t,n)}function Ge(e,t,n,r){let i=ze(e,t);i?Be(e,t,n,r,i):ke(e,t,n,r),He(e,t,n,r)}function Ke(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function qe(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var Je=new Map,Ye=new Map;function Xe(e,t,n){let r=Ae(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??R).alpha,t.lref??80].join(`|`)}function Ze(e,t,n,r){let i=Ye.get(r);if(i!==void 0)return i;let a=Ae(e),o=k(e,t.H)*(1+n),s=Pe(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*d,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),u=(t.gravity??R).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,je(a,t,0,u,0,1)),l!==0){let e=je(a,t,l,u,0,1);S(Fe(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=je(a,t,l,u,e*p,n);S(Fe(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(Ye.size>=H){let e=Ye.keys().next().value;e!==void 0&&Ye.delete(e)}return Ye.set(r,C),C}function Qe(e,t,n,r){let i=Te(n),a=Xe(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=Je.get(o);if(s)return s;let c=Ae(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=Ze(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+L*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=se[e],n=ce[e],i=le[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);Ke(E,a-s,o-s,S),Ke(E,a+s,o+s,S),Ke(E,a-s-w*s,o-s-T*s,S),Ke(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),ee=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),ee>k&&(k=ee);let[F,I]=qe(c.nx,-r.light.dir.x/C,d),[L,R]=qe(c.ny,-r.light.dir.y/C,d),z=a+A*F,B=o+A*L,te=a+A*I,ne=o+A*R;z<l&&(l=z),B<D&&(D=B),te>O&&(O=te),ne>k&&(k=ne),Ke(x,l,D,S),Ke(x,O,k,S)}let D=f===0?0:ee*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),Je.size>=V){let e=Je.keys().next().value;e!==void 0&&Je.delete(e)}return Je.set(o,x),x}function $e(e,t,n,r,i){let a=Qe(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}var et=.001,tt=Math.sqrt(3)/2,nt=1e-4;function rt(e){return!Number.isFinite(e)||!(e>0)?0:Math.tan(Math.min(e,Math.PI/2))}function it({z:e,elevation:t,size:n,dir:r,normal:i}){let a=rt(n),o=Math.sin(t);if(!(e>0)||!Number.isFinite(e)||!(o>0)||!(a>0))return 0;let s=i.x*r.x+i.y*r.y,c=-i.x*r.y+i.y*r.x,l=e*a/o*Math.sqrt(c*c+s*s/(o*o));return Number.isFinite(l)?l:0}var at=e=>{let t=String(e);return/e/i.test(t)?e.toFixed(20).replace(/0+$/,``):t.includes(`.`)?t:`${t}.0`},ot=`
// P125: 足跡の関数(src/render/footprint.ts と同じ式・同じ定数)。
const float PENUMBRA_W_MIN = ${at(et)};
// P87: 画素(1×1 の箱)のうち、画面の向き (a, b)(|n.x|, |n.y|、a ≥ b)の座標が t より小さい部分の面積(台形の分布の累積)。
float pixelBelow(float t, float a, float b) {
  float lo = 0.5 * (a + b);
  float mid = 0.5 * (a - b);
  if (t <= -lo) return 0.0;
  if (t >= lo) return 1.0;
  if (b < ${at(nt)}) return clamp(0.5 + t / a, 0.0, 1.0);
  if (t < -mid) return (t + lo) * (t + lo) / (2.0 * a * b);
  if (t > mid) return 1.0 - (lo - t) * (lo - t) / (2.0 * a * b);
  return 0.5 + t / a;
}
// P125: pixelBelow の原始関数の t ≤ 0 の側。
float pixelBelowIntegralNeg(float t, float a, float b) {
  float lo = 0.5 * (a + b);
  if (t <= -lo) return 0.0;
  if (b < ${at(nt)}) {
    float h = clamp(0.5 + t / a, 0.0, 1.0);
    return 0.5 * a * h * h;
  }
  float mid = 0.5 * (a - b);
  if (t < -mid) {
    float u = t + lo;
    return u * u * u / (6.0 * a * b);
  }
  return b * b / (6.0 * a) + 0.5 * (t + mid) + (t - mid) * (t + mid) / (2.0 * a);
}
// P125: P(t) = ∫ pixelBelow。P(t) = t + P(−t)。
float pixelBelowIntegral(float t, float a, float b) {
  return t > 0.0 ? t + pixelBelowIntegralNeg(-t, a, b) : pixelBelowIntegralNeg(t, a, b);
}
// P125: 対ごとの差 P(c + w) − P(c − w)(場合を分けて桁落ちを避ける)。
float pairDifference(float c, float w, float a, float b) {
  float lo = 0.5 * (a + b);
  float minus = c - w;
  float plus = c + w;
  if (minus >= lo) return 2.0 * w;
  if (plus <= -lo) return 0.0;
  if (plus >= lo) return 2.0 * w - pixelBelowIntegral(w - c, a, b);
  if (minus <= -lo) return pixelBelowIntegral(plus, a, b);
  return pixelBelowIntegral(plus, a, b) - pixelBelowIntegral(minus, a, b);
}
// P125: 半影の被覆(箱 ⊗ 足跡 ⊗ 帯)。x は軸からの距離、r は帯の半幅、w は光源の像の箱の半幅(すべて device px)。
float penumbraCoverage(float x, float r, float w, float a, float b) {
  if (!(w >= PENUMBRA_W_MIN)) return pixelBelow(r - x, a, b) - pixelBelow(-r - x, a, b);
  float inner = pairDifference(r - x, w, a, b);
  float outer = pairDifference(-r - x, w, a, b);
  return clamp((inner - outer) / (2.0 * w), 0.0, 1.0);
}
`,st=1e-4,ct=.001,lt=1e4,ut=1e-6,dt=1e-12,ft=.25,pt=1/64,mt=.001,ht=1e-6,gt=1e-12,_t=`
float plateFresnel(float ci, float eta) {
  if (eta == 1.0) return 0.0;
  float s2 = (1.0 - ci * ci) / (eta * eta);
  if (!(s2 < 1.0)) return 1.0;
  float ct = sqrt(1.0 - s2);
  float rs = (ci - eta * ct) / (ci + eta * ct);
  float rp = (eta * ci - ct) / (eta * ci + ct);
  return clamp(0.5 * (rs * rs + rp * rp), 0.0, 1.0);
}
float plateTransmittance(float cosI, float eta, float color, float tint) {
  float ci = clamp(cosI, 0.0, 1.0);
  float F = plateFresnel(ci, eta);
  if (!(F < 1.0)) return 0.0;
  float ct = sqrt(max(0.0, 1.0 - (1.0 - ci * ci) / (eta * eta)));
  float e = tint / max(ct, 1e-3);
  float absorb;
  if (color == 1.0 || e == 0.0) absorb = 1.0;
  else if (color > 0.0) absorb = pow(color, e);
  else absorb = 0.0;
  return clamp((1.0 - F) * (1.0 - F) * absorb, 0.0, 1.0);
}
`,vt=`
// P130: 焦光の関数(src/render/caustic.ts と同じ式・同じ定数)。
const float CAUSTIC_PERP_MIN = ${at(st)};
const float CAUSTIC_LAND_MIN = ${at(ct)};
const float CAUSTIC_FAR = ${at(lt)};
const float CAUSTIC_SPREAD_MIN = ${at(ut)};
const float CAUSTIC_NORMAL_MIN2 = ${at(dt)};
const float CAUSTIC_SPLIT_HALF = ${at(ft)};
const float CAUSTIC_FAST_SPLIT_HALF = ${at(pt)};
const float CAUSTIC_THIN = ${at(nt)};
const float CAUSTIC_THIN_SMOOTH = ${at(mt)};
const float CAUSTIC_ETA_MIN = ${at(ht)};
const float CAUSTIC_LIGHT_Z_MIN = ${at(gt)};

// 点の基底(causticFrame が置く)。
vec3 cfC;
vec3 cfT;
vec3 cfD;
vec3 cfP;
vec3 cfL;
float cfR;
float cfS;
float cfPerp;
float cfLz;
vec2 cfShadow;
vec2 cfA;

float causticFresnel(float cosI, float eta) {
  if (eta == 1.0) return 0.0;
  float ci = clamp(cosI, 0.0, 1.0);
  float s2 = (1.0 - ci * ci) / (eta * eta);
  if (!(s2 < 1.0)) return 1.0;
  float ct = sqrt(1.0 - s2);
  float rs = (ci - eta * ct) / (ci + eta * ct);
  float rp = (eta * ci - ct) / (eta * ci + ct);
  return clamp(0.5 * (rs * rs + rp * rp), 0.0, 1.0);
}

float causticEffectiveEta(float eta, float s) {
  float num = sqrt(max(0.0, eta * eta - s * s));
  float den = max(sqrt(max(0.0, 1.0 - s * s)), CAUSTIC_PERP_MIN);
  return num / den;
}

float causticAxialRatio(float eta, float s) {
  return -s / sqrt(max(eta * eta - s * s, 1e-12));
}

vec3 causticTransmittance(float h, float etaP, vec3 color, float tint) {
  float ci = sqrt(max(0.0, 1.0 - h * h));
  float st = h / etaP;
  if (!(abs(st) < 1.0)) return vec3(0.0);
  float ct = sqrt(1.0 - st * st);
  float F = causticFresnel(ci, etaP);
  return (1.0 - F) * (1.0 - F) * pow(max(color, vec3(1e-6)), vec3(tint * ct));
}

void causticFrame(vec3 C, vec3 T0, float r, vec3 L, vec2 a) {
  float tl = length(T0);
  vec3 T = tl > 0.0 ? T0 / tl : vec3(1.0, 0.0, 0.0);
  float s = dot(L, T);
  vec3 lp = L - s * T;
  float perp = length(lp);
  vec3 d;
  if (perp > 1e-6) {
    d = -lp / perp;
  } else {
    float at = a.x * T.x + a.y * T.y;
    vec3 q = vec3(a, 0.0) - at * T;
    float ql = length(q);
    if (!(ql > 1e-6)) {
      q = cross(T, abs(T.x) < 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0));
      ql = length(q);
    }
    d = q / ql;
  }
  cfC = C;
  cfT = T;
  cfD = d;
  cfP = cross(T, d);
  cfL = L;
  cfR = r;
  cfS = s;
  cfPerp = perp;
  cfLz = max(L.z, CAUSTIC_LIGHT_Z_MIN);
  cfShadow = C.xy - (C.z / cfLz) * L.xy;
  cfA = a;
}

`,yt=`${vt}
float causticLanding(float etaP, float ratio, float h) {
  float eta = max(etaP, CAUSTIC_ETA_MIN);
  float c = sqrt(max(0.0, 1.0 - h * h));
  vec2 P = vec2(h, -c);
  float mu = 1.0 / eta;
  float k = max(0.0, 1.0 - mu * mu * h * h);
  vec2 D1 = vec2(0.0, mu) + (mu * c - sqrt(k)) * P;
  float dl = length(D1);
  if (dl > 0.0) D1 /= dl;
  float t = -2.0 * dot(P, D1);
  vec2 Q = P + t * D1;
  float ci2 = dot(Q, D1);
  float k2 = max(0.0, 1.0 - eta * eta * (1.0 - ci2 * ci2));
  vec2 o = eta * D1 - (eta * ci2 - sqrt(k2)) * Q;
  float ol = length(o);
  if (ol > 0.0) o /= ol;
  float chord = length(Q - P);
  vec3 P3 = cfC + cfR * (P.x * cfP + P.y * cfD);
  vec3 Q3 = cfC + cfR * (Q.x * cfP + Q.y * cfD) + (chord * cfR * ratio) * cfT;
  vec2 Y;
  if (P3.z <= 0.0) {
    Y = P3.xy - (P3.z / cfLz) * cfL.xy;
  } else if (Q3.z < 0.0) {
    Y = P3.xy + (Q3.xy - P3.xy) * (P3.z / (P3.z - Q3.z));
  } else {
    vec3 o3 = cfPerp * (o.x * cfP + o.y * cfD) - cfS * cfT;
    float far = clamp((o3.z + CAUSTIC_LAND_MIN) / CAUSTIC_LAND_MIN, 0.0, 1.0) * CAUSTIC_FAR * abs(cfR);
    float tt = Q3.z / max(-o3.z, CAUSTIC_LAND_MIN) + far;
    Y = Q3.xy + o3.xy * tt;
  }
  return dot(cfA, Y - cfShadow);
}

float causticRampNeg(float y, float l, float s) {
  if (!(l > 0.0)) return 0.0;
  if (y <= -(l + s)) return 0.0;
  if (s > 0.0 && y <= -(l - s)) {
    float u = y + l + s;
    return u * u * u / (24.0 * l * s);
  }
  float q = y + l;
  return (3.0 * q * q + s * s) / (12.0 * l);
}
float causticRamp(float y, float l, float s) {
  return y > 0.0 ? y + causticRampNeg(-y, l, s) : causticRampNeg(y, l, s);
}
float causticStepNeg(float y, float l, float s) {
  if (!(l > 0.0)) return y < 0.0 ? 0.0 : 0.5;
  if (y <= -(l + s)) return 0.0;
  if (s > 0.0 && y <= -(l - s)) {
    float u = y + l + s;
    return u * u / (8.0 * l * s);
  }
  return (y + l) / (2.0 * l);
}
float causticStep(float y, float l, float s) {
  return y > 0.0 ? 1.0 - causticStepNeg(-y, l, s) : causticStepNeg(y, l, s);
}
float causticBoxDensity(float c, float h, float w, float a, float b) {
  float l = max(h, w);
  float s = min(h, w);
  if (b < CAUSTIC_THIN) {
    float lt = max(l, CAUSTIC_THIN_SMOOTH);
    float hl = 0.5 * a - (lt - l);
    return (causticStep(c + hl, lt, s) - causticStep(c - hl, lt, s)) / a;
  }
  float lo = 0.5 * (a + b);
  float mid = 0.5 * (a - b);
  float g = causticRamp(c + lo, l, s) - causticRamp(c + mid, l, s) - causticRamp(c - mid, l, s) + causticRamp(c - lo, l, s);
  return g / (a * b);
}
float causticSegmentFactor(float x, float e0, float e1, float w, float band, float a, float b) {
  float lo = min(e0, e1);
  float hi = max(e0, e1);
  float len = hi - lo;
  float cl = clamp(lo, -band, band);
  float ch = clamp(hi, -band, band);
  float hl;
  float mid;
  float frac;
  if (ch > cl) {
    hl = 0.5 * (ch - cl);
    mid = cl + hl;
    frac = (ch - cl) / len;
  } else if (!(len > 0.0) && lo >= -band && lo <= band) {
    hl = 0.0;
    mid = lo;
    frac = 1.0;
  } else {
    return 0.0;
  }
  float ww = w >= PENUMBRA_W_MIN ? w : 0.0;
  float c = mid - x;
  if (abs(c) - hl - ww >= 0.5 * (a + b)) return 0.0;
  if (hl >= CAUSTIC_SPLIT_HALF) {
    float sh = ww > 0.0 ? pairDifference(ch - x, ww, a, b) / (2.0 * ww) : pixelBelow(ch - x, a, b);
    float sl = ww > 0.0 ? pairDifference(cl - x, ww, a, b) / (2.0 * ww) : pixelBelow(cl - x, a, b);
    return (sh - sl) / len;
  }
  return frac * causticBoxDensity(c, hl, ww, a, b);
}

// MIN の target に書かれなかった画素(画素の中心が strip の外)の光の倍率: 一様の値 1 − cov·(1 − τ̄)(τ ≡ 0 の口では 1 − cov)。
vec3 causticUntouched(float x, float rPx, float w, float a, float b, float eta, vec3 color, float tint, int K, bool zero) {
  float cov = penumbraCoverage(x, rPx, w, a, b);
  if (zero) return vec3(1.0 - cov);
  int n = max(K, 1);
  float invK = 1.0 / float(n);
  float etaP = max(causticEffectiveEta(eta, cfS), CAUSTIC_ETA_MIN);
  vec3 wsum = vec3(0.0);
  for (int i = 0; i < n; i += 1) {
    float hm = -1.0 + float(2 * i + 1) * invK;
    wsum += causticTransmittance(hm, etaP, color, tint) * (2.0 * invK);
  }
  return 1.0 - cov * (1.0 - wsum * 0.5);
}

// 帯の画素の光の倍率 E(channel ごと)。causticFrame の後に呼ぶ。zero は τ ≡ 0 の口。
vec3 causticExposure(float x, float rPx, float w, float a, float b, float bend, float eta, vec3 color, float tint, int K, bool zero) {
  float cov = penumbraCoverage(x, rPx, w, a, b);
  if (zero) return vec3(1.0 - cov);
  int n = max(K, 1);
  float invK = 1.0 / float(n);
  float etaP = max(causticEffectiveEta(eta, cfS), CAUSTIC_ETA_MIN);
  bool degenerate = !(dot(cfA, cfA) >= CAUSTIC_NORMAL_MIN2);
  vec3 wsum = vec3(0.0);
  vec3 T = vec3(0.0);
  if (degenerate) {
    for (int i = 0; i < n; i += 1) {
      float hm = -1.0 + float(2 * i + 1) * invK;
      wsum += causticTransmittance(hm, etaP, color, tint) * (2.0 * invK * rPx);
    }
  } else {
    float ratio = causticAxialRatio(eta, cfS);
    float etaP1 = max(causticEffectiveEta(1.0, cfS), CAUSTIC_ETA_MIN);
    float ratio1 = causticAxialRatio(1.0, cfS);
    float x1m = causticLanding(etaP1, ratio1, -1.0);
    float x1p = causticLanding(etaP1, ratio1, 1.0);
    float spread = abs(x1p - x1m) * 0.5;
    float sigma = x1p >= x1m ? 1.0 : -1.0;
    float scale = rPx / max(spread, CAUSTIC_SPREAD_MIN);
    float prev = -sigma * rPx + (causticLanding(etaP, ratio, -1.0) - x1m) * scale;
    for (int i = 0; i < n; i += 1) {
      float h1 = -1.0 + float(2 * (i + 1)) * invK;
      float next = sigma * h1 * rPx + (causticLanding(etaP, ratio, h1) - causticLanding(etaP1, ratio1, h1)) * scale;
      float hm = -1.0 + float(2 * i + 1) * invK;
      vec3 wi = causticTransmittance(hm, etaP, color, tint) * (2.0 * invK * rPx);
      wsum += wi;
      float f = causticSegmentFactor(x, prev, next, w, rPx, a, b);
      T += wi * f;
      prev = next;
    }
  }
  vec3 tauMean = rPx > 0.0 ? wsum / (2.0 * rPx) : vec3(0.0);
  vec3 uniformE = 1.0 - cov * (1.0 - tauMean);
  if (degenerate) return uniformE;
  return bend * (1.0 - cov + T) + (1.0 - bend) * uniformE;
}

`,bt=`${vt}
// ---- P132(issue #242): 軽い路。causticExposure・causticUntouched と同じ量を、軽い式で数える(結果の差は float の丸めの程度)。
// - 素通し(η′ = 1)の着地は直線の光の影なので閉じた式 x1(h) = r·(h·A_p − √(1 − h²)·A_d)(A = a·(v.xy − v.z/L_z·L.xy)、
//   v は断面の基底 p・d)。閉じた式が P130 の数値の着地と同じ点にならない極端(光が軸に沿う・布にほぼ平行)は、素通しの組の着地で数える。
//   η = 1 は着地の差を 0 にする(素通しの恒等)。
// - τ の吸収 color^(tint·cosθt) は exp2(tint·cosθt·log2 color)(log2 は画素ごとに 1 度)。
// - 区画の光は、端ごとの累積 S(光源の箱 ⊗ 画素の足跡)を 1 度だけ求めて隣の 2 区画で使う(S の差 / 区間長)。区間の半長が
//   CAUSTIC_FAST_SPLIT_HALF より短い区画は、切り詰めた区間の割合 × 端の密度 S′ の平均。場合分けは select にする
//   (SwiftShader などは分岐の両側を回すので、K の loop の中では分岐を避ける)。
// P133(issue #248): channel ごとの η_c(P131 の分光)を vec3 の 1 本の K の loop で数える(成分 c は η_c と color_c だけを使う。
//   Δη = 0 なら 3 成分が同じ値)。d3d11(ANGLE → HLSL → FXC)は関数を呼ぶ所ごとに展開するので、channel ごとに関数を呼ぶと K の loop が
//   複製されて compile が膨れる(P131 で 94 秒)。着地は η の 3 channel と素通しの組を vec4 の 1 度で数える(xyz = η_c、w = 素通し)。

// 足跡の画素ごとの定数(causticFootprint が置く)。
float fpLo;
float fpMid;
float fpInv2A;
float fpInv2AB;
float fpInv6AB;
float fpB6A;
float fpW;
float fpInv2W;
void causticFootprint(float a, float b0, float ww) {
  // 足跡が軸に沿う細い向き(b < CAUSTIC_THIN)も、b を CAUSTIC_THIN に上げた一般の式で求める(台形の斜めの幅 CAUSTIC_THIN の差は
  // 1 LSB に遠く届かない)。
  float b = max(b0, CAUSTIC_THIN);
  fpLo = 0.5 * (a + b);
  fpMid = 0.5 * (a - b);
  fpInv2A = 0.5 / a;
  fpInv2AB = 0.5 / (a * b);
  fpInv6AB = fpInv2AB / 3.0;
  fpB6A = b * b / (6.0 * a);
  // 光源の箱の半幅(PENUMBRA_W_MIN より狭い箱は PENUMBRA_W_MIN の箱で求める。画素の足跡だけの値との差は O(w²))。
  fpW = max(ww, PENUMBRA_W_MIN);
  fpInv2W = 0.5 / fpW;
}
// 成分ごとの (P(t), pixelBelow(t))(P は pixelBelow の原始関数。t ≤ 0 の側の式を P(t) = t + P(−t)・pixelBelow(t) = 1 − pixelBelow(−t) で写す)。
void causticBelow(vec3 t, out vec3 I, out vec3 D) {
  vec3 u = -abs(t);
  vec3 v = u + fpLo;
  bvec3 cubic = lessThan(u, vec3(-fpMid));
  vec3 i0 = mix(fpB6A + 0.5 * (u + fpMid) + (u - fpMid) * (u + fpMid) * fpInv2A, v * v * v * fpInv6AB, cubic);
  vec3 d0 = mix(0.5 + 2.0 * u * fpInv2A, v * v * fpInv2AB, cubic);
  bvec3 beyond = lessThanEqual(u, vec3(-fpLo));
  i0 = mix(i0, vec3(0.0), beyond);
  d0 = mix(d0, vec3(0.0), beyond);
  bvec3 pos = greaterThan(t, vec3(0.0));
  I = mix(i0, t + i0, pos);
  D = mix(d0, 1.0 - d0, pos);
}
// 成分ごとの端の (S, S′): S(t) = 光源の箱 ⊗ 画素の足跡の t より下の割合(causticSegmentFactor の長い区画の S と同じ値)、S′ はその密度。
void causticEdgeS(vec3 t, out vec3 S, out vec3 dS) {
  vec3 ip;
  vec3 dp;
  vec3 im;
  vec3 dm;
  causticBelow(t + fpW, ip, dp);
  causticBelow(t - fpW, im, dm);
  S = (ip - im) * fpInv2W;
  dS = (dp - dm) * fpInv2W;
  S = mix(mix(S, vec3(0.0), lessThanEqual(t + fpW, vec3(-fpLo))), vec3(1.0), greaterThanEqual(t - fpW, vec3(fpLo)));
}
// 着地の画素ごとの係数(causticLandingSetup が causticFrame の後に置く)。causticLanding と同じ量を、断面の基底の a 成分・z 成分の
// scalar で求める(点の中心からの相対で数えるので、桁は元の式より落ちない)。
// xyz = channel ごとの η_c の組、w = 素通し(η′ = 1)の組。
vec4 lfEta;
vec4 lfEta2;
vec4 lfMu;
vec4 lfMu2;
float lfAP;
float lfAD;
float lfZP;
float lfZD;
vec4 lfAT;
vec4 lfZT;
float lfOAP;
float lfOAD;
float lfOAS;
float lfOZP;
float lfOZD;
float lfOZS;
float lfAL;
float lfCz;
float lfFar;
void causticLandingSetup(vec3 etaP, vec3 ratio, float etaP1, float ratio1) {
  lfEta = max(vec4(etaP, etaP1), vec4(CAUSTIC_ETA_MIN));
  lfEta2 = lfEta * lfEta;
  lfMu = 1.0 / lfEta;
  lfMu2 = lfMu * lfMu;
  float ap = dot(cfA, cfP.xy);
  float ad = dot(cfA, cfD.xy);
  float at = dot(cfA, cfT.xy);
  lfAP = cfR * ap;
  lfAD = cfR * ad;
  lfZP = cfR * cfP.z;
  lfZD = cfR * cfD.z;
  lfAT = cfR * vec4(ratio, ratio1) * at;
  lfZT = cfR * vec4(ratio, ratio1) * cfT.z;
  lfOAP = cfPerp * ap;
  lfOAD = cfPerp * ad;
  lfOAS = cfS * at;
  lfOZP = cfPerp * cfP.z;
  lfOZD = cfPerp * cfD.z;
  lfOZS = cfS * cfT.z;
  lfAL = dot(cfA, cfL.xy) / cfLz;
  lfCz = cfC.z;
  lfFar = CAUSTIC_FAR * abs(cfR);
}
// causticLanding と同じ量(c = √(1 − h²))。xyz = causticLanding(etaP_c, ratio_c, h)、w = 素通しの組(causticLanding(etaP1, ratio1, h))。
vec4 causticLandingFast(float h, float c) {
  vec4 k = max(vec4(0.0), 1.0 - lfMu2 * h * h);
  vec4 f = lfMu * c - sqrt(k);
  vec4 dx = f * h;
  vec4 dy = lfMu - f * c;
  vec4 dl2 = dx * dx + dy * dy;
  vec4 dn = mix(vec4(1.0), inversesqrt(dl2), greaterThan(dl2, vec4(0.0)));
  dx *= dn;
  dy *= dn;
  vec4 t = 2.0 * (c * dy - h * dx);
  vec4 qx = h + t * dx;
  vec4 qy = -c + t * dy;
  vec4 ci2 = qx * dx + qy * dy;
  vec4 k2 = max(vec4(0.0), 1.0 - lfEta2 * (1.0 - ci2 * ci2));
  vec4 g = lfEta * ci2 - sqrt(k2);
  vec4 ox = lfEta * dx - g * qx;
  vec4 oy = lfEta * dy - g * qy;
  vec4 ol2 = ox * ox + oy * oy;
  vec4 on = mix(vec4(1.0), inversesqrt(ol2), greaterThan(ol2, vec4(0.0)));
  ox *= on;
  oy *= on;
  // |Q − P| = |t|·|D1|(D1 は単位。D1 が 0 なら t も 0)。
  vec4 chord = abs(t);
  float aP = h * lfAP - c * lfAD;
  float zP = h * lfZP - c * lfZD;
  vec4 aQ = qx * lfAP + qy * lfAD + chord * lfAT;
  vec4 zQ = qx * lfZP + qy * lfZD + chord * lfZT;
  float zPa = lfCz + zP;
  vec4 zQa = lfCz + zQ;
  float base = lfCz * lfAL;
  float y1 = aP - zP * lfAL;
  vec4 den = zPa - zQa;
  vec4 y2 = aP + (aQ - aP) * (zPa / mix(vec4(1.0), den, notEqual(den, vec4(0.0)))) + base;
  vec4 ao = ox * lfOAP + oy * lfOAD - lfOAS;
  vec4 zo = ox * lfOZP + oy * lfOZD - lfOZS;
  vec4 far = clamp((zo + CAUSTIC_LAND_MIN) / CAUSTIC_LAND_MIN, 0.0, 1.0) * lfFar;
  vec4 tt = zQa / max(-zo, vec4(CAUSTIC_LAND_MIN)) + far;
  vec4 y3 = aQ + ao * tt + base;
  return zPa <= 0.0 ? vec4(y1) : mix(y3, y2, lessThan(zQa, vec4(0.0)));
}

// τ(h̄)(causticTransmittance と同じ値。成分 c は etaP_c と logColor_c = log2(max(color_c, 1e-6)))。
// Fresnel(causticFresnel)の sin²θt = (1 − cos²θi)/η′² = st² と cosθt を τ の吸収と共有する。
vec3 causticTauFast(float h, vec3 etaP, vec3 logColor, float tint) {
  float ci = sqrt(max(0.0, 1.0 - h * h));
  vec3 st = h / etaP;
  vec3 s2 = st * st;
  vec3 ct = sqrt(max(vec3(0.0), 1.0 - s2));
  vec3 rs = (ci - etaP * ct) / (ci + etaP * ct);
  vec3 rp = (etaP * ci - ct) / (etaP * ci + ct);
  vec3 F = mix(mix(vec3(1.0), clamp(0.5 * (rs * rs + rp * rp), 0.0, 1.0), lessThan(s2, vec3(1.0))), vec3(0.0), equal(etaP, vec3(1.0)));
  vec3 v = (1.0 - F) * (1.0 - F) * exp2(logColor * (tint * ct));
  return mix(vec3(0.0), v, lessThan(abs(st), vec3(1.0)));
}
// 区画の τ の和 Σ τ_i(causticUntouched の wsum = この和 × 2/K)。
vec3 causticTauSum(vec3 etaP, vec3 logColor, float tint, int n) {
  float invK = 1.0 / float(n);
  vec3 sum = vec3(0.0);
  for (int i = 0; i < n; i += 1) sum += causticTauFast(-1.0 + float(2 * i + 1) * invK, etaP, logColor, tint);
  return sum;
}
// 成分ごとの実効の屈折率 η′_c(causticEffectiveEta と同じ式)と軸の向きの比(causticAxialRatio と同じ式)。
vec3 causticEffectiveEta3(vec3 eta, float s) {
  return sqrt(max(vec3(0.0), eta * eta - s * s)) / max(sqrt(max(0.0, 1.0 - s * s)), CAUSTIC_PERP_MIN);
}
vec3 causticAxialRatio3(vec3 eta, float s) {
  return -s / sqrt(max(eta * eta - s * s, vec3(1e-12)));
}

// 被覆(penumbraCoverage と同じ量): S(rPx − x) − S(−rPx − x)。causticFootprint の後に呼ぶ。
float causticCoverageFast(float x, float rPx) {
  vec3 S;
  vec3 dS;
  causticEdgeS(vec3(rPx - x, -rPx - x, 0.0), S, dS);
  return clamp(S.x - S.y, 0.0, 1.0);
}

// MIN の target に書かれなかった画素の一様の値(causticUntouched と同じ量。channel c は η_c)。causticFrame の後に呼ぶ。
vec3 causticUntouchedFast(float x, float rPx, float w, float a, float b, vec3 eta, vec3 color, float tint, int K, bool zero) {
  causticFootprint(a, b, w >= PENUMBRA_W_MIN ? w : 0.0);
  float cov = causticCoverageFast(x, rPx);
  if (zero) return vec3(1.0 - cov);
  int n = max(K, 1);
  vec3 etaP = max(causticEffectiveEta3(eta, cfS), vec3(CAUSTIC_ETA_MIN));
  vec3 sum = causticTauSum(etaP, log2(max(color, vec3(1e-6))), tint, n);
  return 1.0 - cov * (1.0 - sum / float(n));
}

// 帯の画素の光の倍率 E(causticExposure と同じ量。channel c は η_c)。causticFrame の後に呼ぶ。
vec3 causticExposureFast(float x, float rPx, float w, float a, float b, float bend, vec3 eta, vec3 color, float tint, int K, bool zero) {
  float ww = w >= PENUMBRA_W_MIN ? w : 0.0;
  causticFootprint(a, b, ww);
  float cov = causticCoverageFast(x, rPx);
  if (zero) return vec3(1.0 - cov);
  int n = max(K, 1);
  float invK = 1.0 / float(n);
  vec3 etaP = max(causticEffectiveEta3(eta, cfS), vec3(CAUSTIC_ETA_MIN));
  vec3 logColor = log2(max(color, vec3(1e-6)));
  bool degenerate = !(dot(cfA, cfA) >= CAUSTIC_NORMAL_MIN2);
  // 区画は [−rPx, rPx] に切り詰めるので、|x| ≥ rPx + w + 足跡の半幅 の画素では、どの端の S も 0 か 1 に飽きて T = 0(数えても同じ 0)。
  bool outside = abs(x) >= rPx + fpW + fpLo;
  if (degenerate || outside) {
    if (!degenerate && bend >= 1.0) return vec3(1.0 - cov);
    vec3 uniformE = 1.0 - cov * (1.0 - causticTauSum(etaP, logColor, tint, n) * invK);
    return degenerate ? uniformE : bend * (1.0 - cov) + (1.0 - bend) * uniformE;
  }
  vec3 ratio = causticAxialRatio3(eta, cfS);
  float etaP1 = max(causticEffectiveEta(1.0, cfS), CAUSTIC_ETA_MIN);
  float ratio1 = causticAxialRatio(1.0, cfS);
  bvec3 pass = equal(eta, vec3(1.0));
  causticLandingSetup(etaP, ratio, etaP1, ratio1);
  // 素通しの着地の閉じた式 x1(h) = h·A_p − √(1 − h²)·A_d(断面の基底 p・d の影の a 成分 × r)。causticLanding(etaP1, ratio1, h) と同じ点に
  // なるのは、実効の屈折率が 1(√(1 − s²) ≥ CAUSTIC_PERP_MIN)で、素通しの光が布へ下りる(L_z ≥ CAUSTIC_LAND_MIN: 遠くへ置く守りが
  // 効かない)とき。その外(光が軸に沿う・布にほぼ平行)は、素通しの組の着地で数える(P130 の路と同じ守りが η と 1 の両方に掛かる)。
  bool closed = cfL.z >= CAUSTIC_LAND_MIN && sqrt(max(0.0, 1.0 - cfS * cfS)) >= CAUSTIC_PERP_MIN;
  float Ap = dot(cfA, cfP.xy - (cfP.z / cfLz) * cfL.xy) * cfR;
  float Ad = dot(cfA, cfD.xy - (cfD.z / cfLz) * cfL.xy) * cfR;
  vec4 start = causticLandingFast(-1.0, 0.0);
  float x1m = -Ap;
  float x1p = Ap;
  if (!closed) {
    x1m = start.w;
    x1p = causticLandingFast(1.0, 0.0).w;
  }
  float sigma = x1p >= x1m ? 1.0 : -1.0;
  float scale = rPx / max(abs(x1p - x1m) * 0.5, CAUSTIC_SPREAD_MIN);
  float wScale = 2.0 * invK * rPx;
  float edge = fpW + fpLo;
  vec3 sum = vec3(0.0);
  vec3 T = vec3(0.0);
  vec3 prev = -sigma * rPx + mix((start.xyz - x1m) * scale, vec3(0.0), pass);
  vec3 cPrev = clamp(prev, -rPx, rPx);
  vec3 sPrev;
  vec3 dPrev;
  causticEdgeS(cPrev - x, sPrev, dPrev);
  for (int i = 1; i <= n; i += 1) {
    float h = -1.0 + float(2 * i) * invK;
    float c = sqrt(max(0.0, 1.0 - h * h));
    vec4 land = causticLandingFast(h, c);
    float x1 = closed ? h * Ap - c * Ad : (i == n ? x1p : land.w);
    vec3 next = sigma * h * rPx + mix((land.xyz - x1) * scale, vec3(0.0), pass);
    vec3 cNext = clamp(next, -rPx, rPx);
    // 光源の箱 ⊗ 足跡の外の端は S が 0 か 1、S′ が 0(causticEdgeS と同じ値。3 channel とも外なら数えずに済ませる)。
    vec3 tNext = cNext - x;
    vec3 sNext = vec3(greaterThan(tNext, vec3(0.0)));
    vec3 dNext = vec3(0.0);
    if (any(lessThan(abs(tNext), vec3(edge)))) causticEdgeS(tNext, sNext, dNext);
    vec3 tau = causticTauFast(h - invK, etaP, logColor, tint);
    sum += tau;
    vec3 len = next - prev;
    vec3 invLen = 1.0 / max(abs(len), vec3(1e-30));
    vec3 frac = mix(vec3(lessThanEqual(abs(prev), vec3(rPx))), abs(cNext - cPrev) * invLen, notEqual(len, vec3(0.0)));
    vec3 f = mix(frac * 0.5 * (dNext + dPrev), (sNext - sPrev) * sign(len) * invLen, greaterThanEqual(abs(len), vec3(2.0 * CAUSTIC_FAST_SPLIT_HALF)));
    T += tau * (wScale * f);
    prev = next;
    cPrev = cNext;
    sPrev = sNext;
    dPrev = dNext;
  }
  vec3 uniformE = 1.0 - cov * (1.0 - sum * invK);
  return bend * (1.0 - cov + T) + (1.0 - bend) * uniformE;
}
`,xt=`
// 端の均しの重み(点 at の影の折れ線の外接円の曲率と r・c から。片側の長さ 0 は +∞ = 0、一直線は 1)。
float causticBendWeight(vec2 prev, vec2 at, vec2 next, float r, float c) {
  if (!(c > 0.0) || !(r > 0.0)) return 1.0;
  vec2 e1 = at - prev;
  vec2 e2 = next - at;
  float l1 = length(e1);
  float l2 = length(e2);
  float l3 = length(next - prev);
  if (!(l1 > 0.0) || !(l2 > 0.0)) return 0.0;
  float turn = abs(e1.x * e2.y - e1.y * e2.x);
  if (!(turn > 0.0)) return l3 > 0.0 ? 1.0 : 0.0;
  if (!(l3 > 0.0)) return 0.0;
  float num = 2.0 * c * r * turn;
  float den = l1 * l2 * l3;
  if (!(num < 2.0 * den)) return 0.0;
  float t = clamp((num / den - 0.5) / 1.5, 0.0, 1.0);
  return 1.0 - t * t * (3.0 - 2.0 * t);
}
`,St=1e30;function Ct(e){return typeof e!=`number`||!Number.isFinite(e)||!(e>0)?0:Math.min(e,St)}function wt(e,t){let n=e.count>0?e.start[e.count]:0,r=t&&t.length>=n*3?t:new Float64Array(n*3),i=e.center,a=e.bandNormal;if(!a)return r.fill(0,0,n*3),r;for(let t=0;t<e.count;t+=1){let n=e.start[t],o=e.start[t+1]-1;for(let e=n;e<=o;e+=1){let t=e>n?e-1:e,s=e<o?e+1:e,c=Math.hypot(i[s*3]-i[t*3],i[s*3+1]-i[t*3+1],i[s*3+2]-i[t*3+2]),l=0,u=0,d=0;Number.isFinite(c)&&c>=1e-12&&(l=(a[s*3]-a[t*3])/c,u=(a[s*3+1]-a[t*3+1])/c,d=(a[s*3+2]-a[t*3+2])/c,Number.isFinite(l)&&Number.isFinite(u)&&Number.isFinite(d)||(l=0,u=0,d=0)),r[e*3]=l,r[e*3+1]=u,r[e*3+2]=d}}return r}var Tt=`
const float THICK_X_MAX = 1e6;
vec3 thickReach(float d, float vpp, float vb, vec3 etaC) {
  vec3 eta = max(etaC, vec3(1e-3));
  vec3 cosT = sqrt(clamp(vec3(1.0) - vec3(vpp) / (eta * eta), 0.0, 1.0));
  return min(vec3(d * abs(vb)) / (eta * max(cosT, vec3(1e-3))), vec3(THICK_X_MAX));
}
vec3 thickMask(float e, vec3 w, float delta) {
  vec3 overlap = min(vec3(e + 0.5 * delta), w) - vec3(max(e - 0.5 * delta, 0.0));
  return clamp(overlap, 0.0, delta) / delta;
}
// P149(D5): 長さの向きの横の進み x_T,c = clamp(−d·(Vp·T)/(η_c·max(cosθt_c, 1e-3)), ±X_MAX)(x_c を 2 乗しない)。
vec3 thickGhostOffset(float d, float vpp, float vt, vec3 etaC) {
  vec3 eta = max(etaC, vec3(1e-3));
  vec3 cosT = sqrt(clamp(vec3(1.0) - vec3(vpp) / (eta * eta), 0.0, 1.0));
  return clamp(vec3(-d * vt) / (eta * max(cosT, vec3(1e-3))), vec3(-THICK_X_MAX), vec3(THICK_X_MAX));
}
// P149: 裏の面の法線 N′ = normalize(N + S·x_T)。長さが 1e-9 以下か大きすぎる(有限でない)ときは N。
vec3 thickGhostNormal(vec3 n, vec3 slope, float xt) {
  vec3 g = n + slope * xt;
  float l = length(g);
  return (l > 1e-9 && l < 1e30) ? g / l : n;
}
float thickWallFresnel(float vb, float etaC) {
  float eta = max(etaC, 1e-3);
  if (eta == 1.0) return 0.0;
  float a = abs(vb);
  float ci = min(1.0, a / eta);
  float s2 = a < eta ? max(0.0, eta * eta - a * a) : 0.0;
  if (!(s2 < 1.0)) return 1.0;
  float ct = sqrt(1.0 - s2);
  float mu = 1.0 / eta;
  float rs = (ci - mu * ct) / (ci + mu * ct);
  float rp = (mu * ci - ct) / (mu * ci + ct);
  return clamp(0.5 * (rs * rs + rp * rp), 0.0, 1.0);
}
`,Et=.5,Dt=.5,Ot=0,kt=1,At=2,jt=3;function Mt(e,t,n,r){let i=e.band,a=e.bandNormal,o=e.count>0&&i&&a?e.start[e.count]:0,s=Number.isFinite(t)?Math.max(0,t):0,c=Ct(n),l=0;if(o>0)for(let t=0;t<e.count;t+=1)l+=Math.max(0,e.start[t+1]-e.start[t]-1);let u=2*l*6,d=2*l*6,f={points:o,thickness:r&&r.thickness.length>=o?r.thickness:new Float64Array(o),position:r&&r.position.length>=24*o?r.position:new Float64Array(24*o),normal:r&&r.normal.length>=24*o?r.normal:new Float64Array(24*o),tangent:r&&r.tangent.length>=24*o?r.tangent:new Float64Array(24*o),across:r&&r.across.length>=8*o?r.across:new Float64Array(8*o),index:r&&r.index.length>=u+d?r.index:new Uint32Array(u+d),faceIndexCount:u,wallIndexCount:d};if(o===0||!i||!a)return f;let p=e.center,{thickness:m,position:h,normal:g,tangent:_,across:v,index:y}=f;v.fill(0,0,8*o);let b=e=>_[(Ot*o+e)*6],x=e=>_[(Ot*o+e)*6+1],S=e=>_[(Ot*o+e)*6+2];for(let t=0;t<e.count;t+=1){let n=e.start[t],r=e.start[t+1]-1;for(let e=n;e<=r;e+=1){let t=e>n?e-1:e,i=e<r?e+1:e,a=p[i*3]-p[t*3],s=p[i*3+1]-p[t*3+1],c=p[i*3+2]-p[t*3+2],l=Math.hypot(a,s,c);l>1e-12&&Number.isFinite(l)?(a/=l,s/=l,c/=l):(a=1,s=0,c=0);let u=(Ot*o+e)*6;_[u]=a,_[u+1]=s,_[u+2]=c}}for(let t=0;t<e.count;t+=1){let n=e.start[t],r=e.start[t+1]-1;for(let e=n;e<=r;e+=1){let t=c;if(c>0){let i=e>n?e-1:e,o=e<r?e+1:e,s=Math.hypot(p[o*3]-p[i*3],p[o*3+1]-p[i*3+1],p[o*3+2]-p[i*3+2]);if(s>=1e-12&&Number.isFinite(s)){let n=((b(o)-b(i))*a[e*3]+(x(o)-x(i))*a[e*3+1]+(S(o)-S(i))*a[e*3+2])/s;Number.isFinite(n)&&n>0&&(t=Math.min(c,Et/n))}}m[e]=t}if(c>0){for(let e=n+1;e<=r;e+=1){let t=Math.hypot(p[e*3]-p[(e-1)*3],p[e*3+1]-p[(e-1)*3+1],p[e*3+2]-p[(e-1)*3+2]),n=m[e-1]+Dt*t;n<m[e]&&(m[e]=n)}for(let e=r-1;e>=n;--e){let t=Math.hypot(p[(e+1)*3]-p[e*3],p[(e+1)*3+1]-p[e*3+1],p[(e+1)*3+2]-p[e*3+2]),n=m[e+1]+Dt*t;n<m[e]&&(m[e]=n)}}}let C=(e,t,n,r,i)=>{e[t*3]=n,e[t*3+1]=r,e[t*3+2]=i},w=(e,t,n)=>{e[t*3]=e[n*3],e[t*3+1]=e[n*3+1],e[t*3+2]=e[n*3+2]},T=(e,t,n)=>(e*o+t)*2+n;for(let e=0;e<o;e+=1){let t=p[e*3],n=p[e*3+1],r=p[e*3+2],o=i[e*3]*s,c=i[e*3+1]*s,l=i[e*3+2]*s,u=a[e*3],d=a[e*3+1],f=a[e*3+2],v=m[e],y=b(e),E=x(e),D=S(e);for(let a=0;a<2;a+=1){let s=a===0?1:-1,p=T(kt,e,a),m=T(Ot,e,a);C(h,p,t+s*o,n+s*c,Math.max(0,r+s*l)),C(h,m,t+s*o+v*u,n+s*c+v*d,Math.max(0,r+s*l+v*f)),C(g,p,u,d,f),C(g,m,u,d,f);let _=a===0?At:jt;w(h,T(_,e,0),p),w(h,T(_,e,1),m);for(let t=0;t<2;t+=1)C(g,T(_,e,t),s*i[e*3],s*i[e*3+1],s*i[e*3+2])}for(let t=0;t<4;t+=1)for(let n=0;n<2;n+=1)C(_,T(t,e,n),y,E,D)}let E=0;for(let t of[Ot,kt,At,jt])for(let n=0;n<e.count;n+=1)for(let r=e.start[n];r+1<e.start[n+1];r+=1){let e=T(t,r,0),n=T(t,r,1),i=T(t,r+1,0),a=T(t,r+1,1);y[E]=e,y[E+1]=n,y[E+2]=i,y[E+3]=i,y[E+4]=n,y[E+5]=a,E+=6}return f}var Nt=.2;function Pt(e){let t=e.shade,n=typeof t==`number`&&Number.isFinite(t)?Math.min(1,Math.max(0,t)):Nt,r=e.shadow?.strength,i=typeof r==`number`&&Number.isFinite(r)?Math.max(0,r):1,a=Math.min(1,i*n),o=e.material?.name===`glass`?e.material.shadowClear:void 0;return{k:n,sigma:i,kappa:a,kappaDark:Math.min(1,Math.max(0,a*(1-(typeof o==`number`&&Number.isFinite(o)?o:0))))}}function Ft(e,t){let n=1-t.kappaDark;return[e[0]*n,e[1]*n,e[2]*n,1]}var It=.001,Lt=e=>Number.isNaN(e)?0:Math.min(1,Math.max(0,e)),Rt=e=>Number.isNaN(e)||!(e>0)?0:e,zt=e=>Number.isNaN(e)?It:Math.min(1,Math.max(e,It));function Bt(e,t){return!(e>0)||t===1/0?0:e===1/0?1:Lt(e/(e+Math.max(0,t)))}function Vt(e,t){return t===0||e===1?0:e===0?1/0:t*-Math.log(e)}function Ht(e,t,n){let r=Rt(n),i=Vt(e,t),a=r===0?1:Math.exp(-r),o=Bt(r,Number.isNaN(i)?0:i),s=Math.exp(-(i+r))+(o===0?0:e*o*(1-a)*a/2);return s>0?-Math.log(s):1/0}function Ut(e,t,n){let r=zt(e),i=r>=1?0:t*-Math.log(r),a=(Number.isNaN(i)?0:i)+Rt(n);return Number.isNaN(a)?0:a}function Wt(e){let t=e.map(e=>e===1/0?1/0:Number.isNaN(e)?0:e===-1/0?-Number.MAX_VALUE:e),n=t.reduce((e,t)=>t!==1/0&&Math.abs(t)>e?Math.abs(t):e,0);if(!t.some(e=>e===1/0)&&n===0)return{color:[1,1,1],tint:0};let r=n>0?n:1;return{color:t.map(e=>e===1/0?0:e===0?1:Math.exp(-e/r)),tint:r}}function Gt(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function Kt(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}function qt(e){let t=Math.log2(e);if(!Number.isInteger(e)||e<1||!Number.isInteger(t)||t>30)throw Error(`表の texture の幅は正の整数の 2 の冪であること: ${e}`);return{mask:e-1,shift:t}}var Jt=7,Yt=Float32Array.BYTES_PER_ELEMENT,Xt=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;
/** P122: 帯のガラスの影の、もとの帯の面の法線(items.bandNormal)。ガラスの影の draw の間だけ有効。 */
layout(location = 5) in vec3 aPlateNormal;

uniform mat4 uView;
uniform mat4 uProj;
/** P126: 1 のとき画面いっぱいの三角形(布が不透明でないときの影の混ぜ)。 */
uniform int uFill;

out vec3 vNormal;
out float vAcross;
out vec3 vPlateNormal;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vPlateNormal = aPlateNormal;
  if (uFill == 1) {
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,Zt=`#version 300 es
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
}`,Qt=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;
layout(location = 4) in vec3 aTangent;
layout(location = 6) in vec3 aSlope;
// P151: ガラスの箱の (縁の半幅, 板の厚み)。面 (hw, t_i)、壁 (t_i/2, 2hw)。箱の枝でだけ読む。
layout(location = 7) in vec2 aPlate;

uniform mat4 uView;
uniform mat4 uProj;
// P151: 箱の一つの面の頂点の数 2P(面の種 = 頂点の番号 / 2P。0 = 表・1 = 裏・2・3 = 壁)。箱の枝でだけ意味を持つ。
uniform int uBoxSpan;

out vec3 vNormal;
out float vAcross;
out vec3 vTangent;
out vec3 vWorld;
out vec3 vSlope;
out vec2 vPlate;
flat out float vFace;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  vTangent = aTangent;
  vWorld = aPosition;
  vSlope = aSlope;
  vPlate = aPlate;
  vFace = float(gl_VertexID / max(uBoxSpan, 1));
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,$t=1024,{mask:en,shift:tn}=qt($t),nn=16384,rn=6,an=`#version 300 es
precision highp float;
precision highp int;

uniform mat4 uView;
uniform mat4 uProj;
uniform int uFaceBase;
uniform highp sampler2D uBoxPoints;
uniform highp sampler2D uBoxValues;
uniform highp sampler2D uBoxCorners;
uniform highp sampler2D uBoxRange;
// P164: 厚みのガラスの FS の uThick(x 厚み・y 帯の半幅・z 'plate'・w 1 = 箱の枝)。不透明の箱の program では 0。
uniform vec4 uThick;

out vec3 vNormal;
out float vAcross;
out vec3 vPlateNormal;
out vec3 vTangent;
out vec3 vWorld;
out vec3 vSlope;
out vec2 vPlate;
flat out float vFace;
invariant gl_Position;

vec4 boxTexel(highp sampler2D table, int texel) {
  return texelFetch(table, ivec2(texel & ${en}, texel >> ${tn}), 0);
}

void main() {
  int face = gl_InstanceID + uFaceBase;
  int i = gl_VertexID >> 1;
  int side = gl_VertexID & 1;
  vec3 b = boxTexel(uBoxPoints, 3 * i + 1).xyz;
  vec4 p2 = boxTexel(uBoxPoints, 3 * i + 2);
  // 角の番号 = 2·(表か) + (−b の側か)。表・裏の side 0 = +b の縁、壁の side 0 = 裏の辺・side 1 = 表の辺。
  bool wall = face >= 2;
  int minus = wall ? face - 2 : side;
  int lifted = wall ? side : (face == 0 ? 1 : 0);
  vec3 corner = boxTexel(uBoxCorners, 4 * i + 2 * lifted + minus).xyz;
  bool glass = uThick.w > 0.5;
  vNormal = wall ? (face == 2 ? b : -b) : (glass && face == 1 ? -p2.xyz : p2.xyz);
  float across0 = face == 0 || face == 2 ? 1.0 : -1.0;
  vAcross = glass ? (side == 0 ? across0 : -across0) : 0.0;
  vPlateNormal = p2.xyz;
  vTangent = boxTexel(uBoxValues, 2 * i).xyz;
  vWorld = corner;
  // P164: 厚み t_i は K0.w、S 裏 は (K1.w, K2.w, K3.w)、S 表 は Q1.xyz。
  float t = boxTexel(uBoxCorners, 4 * i).w;
  float hw = uThick.y;
  vPlate = wall ? vec2(0.5 * t, 2.0 * hw) : vec2(hw, t);
  vSlope = face == 0
    ? boxTexel(uBoxValues, 2 * i + 1).xyz
    : face == 1
      ? vec3(boxTexel(uBoxCorners, 4 * i + 1).w, boxTexel(uBoxCorners, 4 * i + 2).w, boxTexel(uBoxCorners, 4 * i + 3).w)
      : vec3(0.0);
  vFace = float(face);
  vec4 range = texelFetch(uBoxRange, ivec2(0, 0), 0);
  vec4 eye = uView * vec4(corner, 1.0);
  float depth;
  if (range.w > 0.0) {
    depth = p2.w + range.w * (0.5 - 0.45 * (range.x > 0.0 ? corner.z / range.x : 0.0));
  } else {
    float span = range.y - range.z;
    float scale = span > 1e-9 && span <= 3.4e38 ? 0.98 / span : 0.0;
    float mapped = scale == 0.0 ? 0.5 : 0.01 + (range.y - eye.z) * scale;
    depth = abs(mapped) <= 3.4e38 ? mapped : 0.5;
  }
  vec4 clip = uProj * eye;
  clip.z = (depth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,on=`#version 300 es
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
}`,sn=`#version 300 es
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
}`,cn=`#version 300 es
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
}`,ln=`#version 300 es
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
}`,un=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vTangent;
in vec3 vWorld;
// P149: S = dN/dℓ(返す前の法線の、中心線の弧長あたりの変化)。
in vec3 vSlope;
// P151: 箱の (縁の半幅, 板の厚み) と面の種(0 = 表・1 = 裏・2・3 = 壁)。
in vec2 vPlate;
flat in float vFace;

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
// P148: (厚み d〈≤ THICK_D_MAX〉, 帯の半幅, P149: 1 = 'plate'・0 = それ以外, P151: 1 = 箱の枝・0 = 今の面)。
// 箱の枝では厚み・半幅を属性 7(vPlate)から読み、x・y は使わない。
uniform vec4 uThick;

out vec4 outColor;
${Tt}

void main() {
  // P151(D2・D4): 箱の枝。法線の属性は外向きの法線 N_out(表 +N・裏 −N・壁 ±b)で、目に向かない面は捨てる。
  bool box = uThick.w > 0.5;
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = box ? 1.0 : clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
  float eyeLength = length(toEye);
  vec3 V = eyeLength > 1e-6 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
  float normalLength = length(vNormal);
  vec3 N = normalLength > 1e-9 ? vNormal / normalLength : vec3(0.0, 0.0, 1.0);
  vec3 rawN = N;
  // P148(D3・D4): 縁の帯。b̂ = normalize(cross(N_raw, T))(返す前の法線。箱では cross(N_out, T))。遠い縁からの帯の上の距離 e。
  // P151: 微分(fwidth(vAcross)・fwidth(e))は discard より前に、一様な制御の下で取る。
  float plateHalf = box ? vPlate.x : uThick.y;
  float plateD = box ? vPlate.y : uThick.x;
  float thickTangentLength = length(vTangent);
  vec3 thickT = thickTangentLength > 1e-9 ? vTangent / thickTangentLength : vec3(1.0, 0.0, 0.0);
  vec3 thickAxisRaw = cross(rawN, thickT);
  float thickAxisLength = length(thickAxisRaw);
  bool thickAxisOk = thickAxisLength > 1e-6;
  vec3 thickB = thickAxisOk ? thickAxisRaw / thickAxisLength : vec3(0.0);
  float thickVb = dot(V, thickB);
  float thickE = (1.0 + vAcross * sign(thickVb)) * plateHalf;
  float thickDelta = max(fwidth(thickE), 1e-6);
  if (box ? dot(N, V) <= 0.0 : coverage <= 0.0) discard;
  vec3 slope = vSlope;
  vec4 surface = uFront;
  if (box) {
    // P151: 返しを止め、色は面の種で(表 uFront・裏 uBack・壁 uFront)。S は属性で既に面の向きに揃っている。
    if (vFace > 0.5 && vFace < 1.5) surface = uBack;
  } else if (dot(N, V) < 0.0) {
    N = -N;
    // P149: 裏が見える所では S も N と一緒に返す。
    slope = -slope;
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
  // P148: channel ごとの縁の幅 w_c(板の厚みは今の面では uThick.x、箱では属性 7)。
  vec3 thickEtaC = max(vec3(eta) + uGlassC.x * vec3(-1.0, 0.0, 1.0), vec3(1e-3));
  vec3 thickVp = V - dot(V, N) * N;
  vec3 thickW = thickReach(plateD, dot(thickVp, thickVp), thickVb, thickEtaC);
  vec3 thickM = thickAxisOk ? thickMask(thickE, thickW, thickDelta) : vec3(0.0);
  bool thickEdge = max(thickM.x, max(thickM.y, thickM.z)) > 0.0;
  // 壁で鏡映した視線 V_m(N ⊥ b̂ なので N·V_m = N·V)。H は L + V_m から作る。
  vec3 thickVm = V - 2.0 * thickVb * thickB;
  vec3 thickHalfway = uLight + thickVm;
  float thickHalfwayLength = length(thickHalfway);
  thickHalfway = thickHalfwayLength > 1e-9 ? thickHalfway / thickHalfwayLength : thickVm;
  float thickNh = clamp(dot(N, thickHalfway), -1.0, 1.0);
  // P149(D5): 裏の照りは、長さの向きに x_T,c だけ進んだ裏の点の法線 N′_c で数える(縁の帯の内の V_m の項は N のまま)。
  vec3 ghostX = thickGhostOffset(plateD, dot(thickVp, thickVp), dot(thickVp, thickT), thickEtaC);
  vec3 ghostNh = vec3(
    clamp(dot(thickGhostNormal(N, slope, ghostX.x), halfway), -1.0, 1.0),
    clamp(dot(thickGhostNormal(N, slope, ghostX.y), halfway), -1.0, 1.0),
    clamp(dot(thickGhostNormal(N, slope, ghostX.z), halfway), -1.0, 1.0));
  vec3 secondM = vec3(0.0);
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
        vec3 cosH = ghostNh * cos(offs) + dot(sideN, halfway) * sin(offs);
        vec3 ang = acos(clamp(cosH, -1.0, 1.0));
        second = weight * exp(-ang * ang / width2);
        if (thickEdge) {
          vec3 cosHM = thickNh * cos(offs) + dot(sideN, thickHalfway) * sin(offs);
          vec3 angM = acos(clamp(cosHM, -1.0, 1.0));
          secondM = weight * exp(-angM * angM / width2);
        }
      }
    } else {
      float sinI = sqrt(max(sinI2, 0.0));
      vec3 etaC = max(vec3(eta) + uGlassC.x * vec3(-1.0, 0.0, 1.0), vec3(1e-3));
      vec3 thetaC = asin(clamp(vec3(sinI) / etaC, 0.0, 1.0));
      float theta = asin(clamp(sinI / eta, 0.0, 1.0));
      // P149: 'plate'(uThick.z = 1)は角のずれ δ_c を 0 にする(色は裏の照りの横のずれだけで出す)。
      vec3 shiftC = uThick.z > 0.5 ? vec3(0.0) : 2.0 * (thetaC - vec3(theta));
      vec3 ang = acos(ghostNh) - shiftC;
      second = weight * exp(-ang * ang / width2);
      if (thickEdge) {
        vec3 angM = vec3(acos(thickNh)) - shiftC;
        secondM = weight * exp(-angM * angM / width2);
      }
    }
    if (thickEdge) {
      vec3 thickF = vec3(thickWallFresnel(thickVb, thickEtaC.x), thickWallFresnel(thickVb, thickEtaC.y), thickWallFresnel(thickVb, thickEtaC.z));
      second = mix(second, thickF * secondM, thickM);
    }
  }
  outColor = vec4((vec3(highlight + fresnel * uGlass.z) + second) * coverage, 0.0);
}`,dn=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vWorld;

uniform int uPass;
uniform vec3 uLight;
uniform vec4 uEye;
// (濁り h, 色の濃さ tint, ambient, diffuse)。
uniform vec4 uScatter;
// rgb = ガラスの色 C(無限に濁ったときに見える色)、a = 布の alpha a0(R の枝)。
uniform vec4 uScatterColor;
// (屈折率 η, 縁の冪, 0, 0)。
uniform vec4 uScatterB;

out vec4 outColor;

void main() {
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  if (coverage <= 0.0) discard;
  if (uPass == 2) {
    outColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  if (uPass == 4) {
    outColor = vec4(0.0, 0.0, 0.0, uScatterColor.a);
    return;
  }
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - vWorld : uEye.xyz;
  float eyeLength = length(toEye);
  vec3 V = eyeLength > 1e-6 ? toEye / eyeLength : vec3(0.0, 0.0, 1.0);
  float normalLength = length(vNormal);
  vec3 N = normalLength > 1e-9 ? vNormal / normalLength : vec3(0.0, 0.0, 1.0);
  if (dot(N, V) < 0.0) N = -N;
  float facing = clamp(abs(dot(N, V)), 0.0, 1.0);
  float eta = max(uScatterB.x, 1e-3);
  float sinI2 = 1.0 - facing * facing;
  float cosT = sqrt(clamp(1.0 - sinI2 / (eta * eta), 0.0, 1.0));
  float thick = 1.0 / max(cosT, 1e-3);
  // h は有限に抑える(float32 で +∞ になった濁りでも a/h が ∞/∞ にならない。exp(−h·thick) は 0 のまま)。
  float h = clamp(uScatter.x, 0.0, 3.0e38);
  float T = h > 0.0 ? exp(-h * thick) : 1.0;
  if (uPass == 0) {
    float m = mix(1.0, T, coverage);
    outColor = vec4(m, m, m, m);
    return;
  }
  float f0 = (eta - 1.0) * (eta - 1.0) / ((eta + 1.0) * (eta + 1.0));
  float fresnel = clamp(f0 + (1.0 - f0) * pow(max(1.0 - facing, 0.0), max(uScatterB.y, 1e-3)), 0.0, 1.0);
  vec3 C = clamp(uScatterColor.rgb, vec3(1e-3), vec3(1.0));
  vec3 a = max(uScatter.y, 0.0) * -log(C);
  vec3 omega = h > 0.0 ? 1.0 / (1.0 + a / h) : vec3(0.0);
  float nl = dot(N, uLight);
  float E = uScatter.z + uScatter.w * (max(0.0, nl) + max(0.0, -nl) * exp(-h / max(abs(nl), 1e-3)));
  vec3 glow = C * omega * E * (1.0 - 0.5 * T) * (1.0 - fresnel);
  outColor = vec4(max(glow, vec3(0.0)), 1.0);
}`,fn=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;
in vec3 vPlateNormal;

uniform int uShadow;
/**
 * P122: 帯のガラスの影の板(η, Δη, tint, 1 = ガラスの影・0 = 標準の影)。ガラスの影の draw の間だけ w = 1(終われば 0 へ戻す)。
 */
uniform vec4 uPlate;
uniform vec4 uShadowColor;
uniform float uShadowAlpha;
/**
 * P126: 布の色と alpha。uShadow は 1 = 布が不透明な影(布からの混ぜ。描き手が MIN・MAX)、3 = 布が不透明でない影(alpha だけ。
 * 描き手が MAX で溜める)、2 = 画面いっぱいの混ぜ(alpha は布の alpha)、0 = 帯の面。
 */
uniform vec4 uCloth;
uniform vec4 uFront;
/** P73: 裏の色(dot(N, 視線) < 0 の面)。 */
uniform vec4 uBack;
uniform vec3 uLight;
/** P52: 見る人の向き(世界の座標、V の 3 行目)。真上は (0, 0, 1)。 */
uniform vec3 uViewDir;
uniform float uAmbient;
uniform float uDiffuse;

out vec4 outColor;

// P126: 足跡の関数(src/render/footprint.ts の FOOTPRINT_GLSL をそのまま埋める)。
${ot}
// P122: 板の透過(src/render/caustic.ts の PLATE_GLSL = plateTransmittance の写し)。
${_t}
/**
 * P122: 帯のガラスの影の τ_c(R・G・B)。帯の面の法線 N(0 なら +z)と光 L で cosθi = |N·L|、光の当たる面の色(N·L ≥ 0 なら表、
 * < 0 なら裏)、η_c = max(η + Δη·(−1, 0, +1), 1e-3)。標準の影(uPlate.w = 0)は 0。
 */
vec3 plateTau() {
  if (!(uPlate.w > 0.5)) return vec3(0.0);
  float normalLength = length(vPlateNormal);
  vec3 N = normalLength > 1e-9 ? vPlateNormal / normalLength : vec3(0.0, 0.0, 1.0);
  float nl = dot(N, uLight);
  vec3 surface = nl >= 0.0 ? uFront.rgb : uBack.rgb;
  float cosI = abs(nl);
  vec3 etaC = max(vec3(uPlate.x) + uPlate.y * vec3(-1.0, 0.0, 1.0), vec3(1e-3));
  return vec3(
    plateTransmittance(cosI, etaC.r, surface.r, uPlate.z),
    plateTransmittance(cosI, etaC.g, surface.g, uPlate.z),
    plateTransmittance(cosI, etaC.b, surface.b, uPlate.z));
}
// P126: 1 つの縁(座標 c より内側)を画素の箱と光源の像の箱(半幅 w)で畳んだ面積。2 つの縁の w が同じなら、内と外の差は
// penumbraCoverage と同じ。w < PENUMBRA_W_MIN では pixelBelow(丸い線の今の影の縁)。
float edgeInside(float c, float w, float a, float b) {
  if (!(w >= PENUMBRA_W_MIN)) return pixelBelow(c, a, b);
  return pairDifference(c, w, a, b) / (2.0 * w);
}

void main() {
  if (uShadow == 1 || uShadow == 3) {
    // P126: vAcross は影の帯の法線の向きの座標(世界の単位)、vNormal = (半幅 h, + の縁の w, − の縁の w)(世界の単位)。
    // 画面の勾配の長さ(1 device px あたりの世界の単位)で device px へ直す。uShadow は uniform なので dFdx も画素の組でそろう。
    vec2 grad = vec2(dFdx(vAcross), dFdy(vAcross));
    float perPx = length(grad);
    if (!(perPx > 1e-12)) discard;
    vec2 axis = abs(grad / perPx);
    float wide = max(axis.x, axis.y);
    float thin = min(axis.x, axis.y);
    float x = vAcross / perPx;
    float h = vNormal.x / perPx;
    float shadowCoverage = clamp(
      edgeInside(h - x, vNormal.y / perPx, wide, thin) - edgeInside(-h - x, vNormal.z / perPx, wide, thin), 0.0, 1.0);
    if (!(shadowCoverage > 0.0)) discard;
    // P122: 帯のガラスの影は channel ごとに (1 − τ_c) を掛ける(out_c = ρ_c(1 − κ′·cov·(1 − τ_c)))。標準の影は τ = 0。
    vec3 tau = plateTau();
    vec3 shadowOpacity = shadowCoverage * uShadowColor.a * uShadowAlpha * (vec3(1.0) - tau);
    if (uShadow == 1) {
      // 布が不透明: 布の色を影の色へ 濃さ × 被覆 だけ混ぜた色(描き手が MIN・MAX で合わせる)。
      outColor = vec4(mix(uCloth.rgb, uShadowColor.rgb, shadowOpacity), 1.0);
    } else {
      // 布が不透明でない(uShadow 3): alpha だけに出す(描き手が MAX で被覆の最大を溜め、後で 1 度だけ混ぜる)。
      // alpha は 1 枚なので、ガラスの影は channel の平均で近似する(τ = 0 では標準と同じ)。
      outColor = vec4(0.0, 0.0, 0.0, (shadowOpacity.r + shadowOpacity.g + shadowOpacity.b) / 3.0);
    }
    return;
  }
  if (uShadow == 2) {
    // P126: 画面いっぱいの三角形(溜めた alpha の割合で影の色を 1 度だけ混ぜ、alpha を布の alpha へ戻す)。
    outColor = vec4(uShadowColor.rgb, uCloth.a);
    return;
  }
  // 縁の anti-aliasing: 幅の向きの座標 across(縁で ±1)の 1 画素あたりの変化で縁をぼかす。
  float edge = max(fwidth(vAcross), 1e-6);
  float coverage = clamp((1.0 - abs(vAcross)) / edge, 0.0, 1.0);
  if (coverage <= 0.0) discard;
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
}`;function pn(e,t=Xt,n=fn){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw e.deleteShader(i),e.deleteShader(a),Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var mn=1e6,hn=/^#[0-9a-f]{6}$/i,X=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,gn=4,_n=4,vn=5,yn=6,bn=Math.PI/4,xn=-Math.SQRT1_2,Sn=-Math.SQRT1_2,Cn=1.5,wn=1e6,Tn=1e30;function En(e){let t=pn(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i={program:t,view:r(`uView`),proj:r(`uProj`),shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),cloth:r(`uCloth`),fill:r(`uFill`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),plate:r(`uPlate`)},a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer(),c=e.createBuffer(),l=null,u=new Float32Array;if(!a||!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s);for(let t=0;t<4;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let d=new Float32Array,f=new Float32Array,p=new Float64Array,m=new Float64Array,h=new Float64Array,g=new Float64Array,_=new Float32Array(16),v=new Float32Array(16),y=0,b=-1,x=-1,S,C=t=>{let n=Jt*Yt,r=t*n;e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*Yt),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*Yt),e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(3,1,e.FLOAT,!1,Yt,t*Yt)},w,T=!1,E=new Float32Array,D=new Float32Array,O=new Float64Array,k=()=>{if(w||T)return w;let t;try{t=pn(e,Zt,on)}catch{T=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),T=!0;return}let i=e=>n(t,e);return w={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},w},A,j=!1,M=()=>{if(A||j)return A;let t;try{t=pn(e,sn,cn)}catch{j=!0;return}let r=e=>n(t,e);return A={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},A},N,P=!1,ee=()=>{if(N||P)return N;let t;try{t=pn(e,Zt,ln)}catch{P=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),P=!0;return}let i=e=>n(t,e);return N={program:t,view:i(`uView`),proj:i(`uProj`),pass:i(`uPass`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),glass:i(`uGlass`),glassB:i(`uGlassB`),glassC:i(`uGlassC`),tangentBuffer:r},N},F,I=!1,L=!1,R=()=>{if(F||I)return F;let t;try{t=pn(e,Qt,un)}catch{I=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),I=!0;return}let i=e=>n(t,e);try{F={program:t,view:i(`uView`),proj:i(`uProj`),pass:i(`uPass`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),glass:i(`uGlass`),glassB:i(`uGlassB`),glassC:i(`uGlassC`),thick:i(`uThick`),boxSpan:i(`uBoxSpan`),slopeBuffer:r}}catch{e.deleteProgram(t),e.deleteBuffer(r),I=!0;return}return F},z,B=!1,te=!1,ne=()=>{if(z||B)return z;let t;try{t=pn(e,Zt,dn)}catch{B=!0;return}let r=e=>n(t,e);try{z={program:t,view:r(`uView`),proj:r(`uProj`),pass:r(`uPass`),light:r(`uLight`),eye:r(`uEye`),scatter:r(`uScatter`),scatterColor:r(`uScatterColor`),scatterB:r(`uScatterB`)}}catch{e.deleteProgram(t),B=!0;return}return z},V,H=0,re=-1,ie=new Float64Array,ae=new Float64Array,U=new Float64Array,W=new Float64Array,oe=!1,G=(e,t,n)=>{for(let r=0;r<n;r+=1)if(!Object.is(e[r],t[r]))return!1;return!0},K=(e,t,n)=>{let r=e.length>=n?e:new Float64Array(n);for(let e=0;e<n;e+=1)r[e]=t[e];return r},se=e=>{let t=e.count>0?e.start[e.count]:0,n=e.band,r=e.bandNormal,i=n!==void 0&&r!==void 0;re===e.count&&oe===i&&G(ie,e.start,e.count+1)&&G(ae,e.center,t*3)&&(!i||G(U,n,t*3)&&G(W,r,t*3))||(H+=1,re=e.count,oe=i,ie=K(ie,e.start,e.count+1),ae=K(ae,e.center,t*3),i&&(U=K(U,n,t*3),W=K(W,r,t*3)))},ce=0,le=-1,ue=e=>{le!==ce&&(le=ce,se(e))},q=-1,de=NaN,J=NaN,fe=(e,t,n)=>(ue(e),V&&q===H&&Object.is(de,t)&&Object.is(J,n)||(V=Mt(e,t,n,V),q=H,de=t,J=n,me=-1),V),Y=-1,pe=(e,t,n)=>(ue(e),O.length<n*3&&(O=new Float64Array(n*3),Y=-1),Y!==H&&(wt({count:e.count,start:e.start,center:e.center,bandNormal:t},O),Y=H),O),me=-1,he=NaN,ge=NaN,_e=NaN,ve=!1,ye,be=!1,xe,Se=!1,Ce,we=!1,Te,Ee=!1,De=(t,r)=>{let i;try{i=pn(e,an,t)}catch{return}try{return r(e=>n(i,e),i)}catch{e.deleteProgram(i);return}},Oe=e=>({faceBase:e(`uFaceBase`),points:e(`uBoxPoints`),values:e(`uBoxValues`),corners:e(`uBoxCorners`),range:e(`uBoxRange`)}),ke=()=>(xe||Se||(xe=De(fn,(e,t)=>({program:t,view:e(`uView`),proj:e(`uProj`),shadow:e(`uShadow`),shadowColor:e(`uShadowColor`),shadowAlpha:e(`uShadowAlpha`),cloth:e(`uCloth`),front:e(`uFront`),back:e(`uBack`),light:e(`uLight`),viewDir:e(`uViewDir`),ambient:e(`uAmbient`),diffuse:e(`uDiffuse`),box:Oe(e)})),Se=!xe),xe),Ae=()=>(Ce||we||(Ce=De(cn,(e,t)=>({program:t,view:e(`uView`),proj:e(`uProj`),front:e(`uFront`),back:e(`uBack`),light:e(`uLight`),eye:e(`uEye`),ambient:e(`uAmbient`),diffuse:e(`uDiffuse`),rubber:e(`uRubber`),box:Oe(e)})),we=!Ce),Ce),je=()=>(Te||Ee||(Te=De(on,(e,t)=>({program:t,view:e(`uView`),proj:e(`uProj`),front:e(`uFront`),back:e(`uBack`),light:e(`uLight`),eye:e(`uEye`),ambient:e(`uAmbient`),diffuse:e(`uDiffuse`),silk:e(`uSilk`),streak:e(`uStreak`),box:Oe(e)})),Ee=!Te),Te),Me,Ne=!1,Pe=!1,Fe=()=>(Me||Ne||(Me=De(un,(e,t)=>({program:t,view:e(`uView`),proj:e(`uProj`),pass:e(`uPass`),front:e(`uFront`),back:e(`uBack`),light:e(`uLight`),eye:e(`uEye`),glass:e(`uGlass`),glassB:e(`uGlassB`),glassC:e(`uGlassC`),thick:e(`uThick`),box:Oe(e)})),Ne=!Me),Me),Ie=()=>{if(ye||be)return ye;let t=e.createVertexArray(),n=Array.from({length:12},()=>e.createTexture());if(!t||n.some(e=>!e)){t&&e.deleteVertexArray(t);for(let t of n)t&&e.deleteTexture(t);be=!0;return}e.bindVertexArray(t),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.activeTexture(Le[0]);for(let t of n)e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE0),e.bindVertexArray(a);let r=(e,t)=>({textures:n.slice(3*e,3*e+3),rows:[0,0,0],turn:2,texels:t,data:new Float32Array}),i=Number(e.getParameter(e.MAX_TEXTURE_SIZE));return ye={vao:t,points:r(0,3),values:r(1,2),corners:r(2,4),range:r(3,0),maxRows:Number.isFinite(i)&&i>0?Math.min(i,nn):nn},ye},Le=[e.TEXTURE6,e.TEXTURE7,e.TEXTURE8,e.TEXTURE9],Re=(t,n,r)=>{t.turn=(t.turn+1)%3;let i=t.texels===0?1:$t;e.activeTexture(Le[n]),e.bindTexture(e.TEXTURE_2D,t.textures[t.turn]),t.rows[t.turn]!==r&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,i,r,0,e.RGBA,e.FLOAT,null),t.rows[t.turn]=r),e.texSubImage2D(e.TEXTURE_2D,0,0,0,i,r,e.RGBA,e.FLOAT,t.data,0)},ze=(e,t)=>Math.max(1,Math.ceil(e.texels*t/$t)),Be=(e,t)=>{let n=4*$t*t;return e.data.length<n&&(e.data=new Float32Array(n)),e.data},Ve=-1,He=NaN,Ue=NaN,We=new Float32Array(4),Ge=(t,n,r,i,a,o,s)=>{let c=r.points,l=n.band,u=n.bandNormal,d=n.center,f=(e,t,n)=>(e*c+t)*2+n,p=1/(n.count+1),m=[t.points,t.values,t.corners];if(r===V&&q===H&&Ve===H&&Object.is(He,i)&&Object.is(Ue,a))m.forEach((t,n)=>{e.activeTexture(Le[n]),e.bindTexture(e.TEXTURE_2D,t.textures[t.turn])});else{let e=pe(n,u,c),o=Be(t.points,ze(t.points,c)),s=Be(t.values,ze(t.values,c)),h=Be(t.corners,ze(t.corners,c)),g=Ct(a),_=r.thickness,v=r.tangent;for(let t=0;t<n.count;t+=1){let i=n.start[t],a=n.start[t+1]-1,c=1-(t+1)*p;for(let t=i;t<=a;t+=1){let n=t>i?t-1:t,p=t<a?t+1:t,m=e=>f(0,e,0)*3;for(let e=0;e<3;e+=1)o[t*12+e]=d[t*3+e],o[t*12+4+e]=l[t*3+e],o[t*12+8+e]=u[t*3+e];o[t*12+3]=i,o[t*12+7]=a,o[t*12+11]=c;let y=g;if(g>0){let e=Math.hypot(d[p*3]-d[n*3],d[p*3+1]-d[n*3+1],d[p*3+2]-d[n*3+2]);if(e>=1e-12&&Number.isFinite(e)){let r=((v[m(p)]-v[m(n)])*u[t*3]+(v[m(p)+1]-v[m(n)+1])*u[t*3+1]+(v[m(p)+2]-v[m(n)+2])*u[t*3+2])/e;Number.isFinite(r)&&r>0&&(y=Math.min(g,Et/r))}}let b=t>i?Math.hypot(d[t*3]-d[(t-1)*3],d[t*3+1]-d[(t-1)*3+1],d[t*3+2]-d[(t-1)*3+2]):0;for(let n=0;n<3;n+=1)s[t*8+n]=v[m(t)+n],s[t*8+4+n]=e[t*3+n];s[t*8+3]=y,s[t*8+7]=b;let x=0,S=0,C=0,w=Math.hypot(d[p*3]+_[p]*u[p*3]-(d[n*3]+_[n]*u[n*3]),d[p*3+1]+_[p]*u[p*3+1]-(d[n*3+1]+_[n]*u[n*3+1]),d[p*3+2]+_[p]*u[p*3+2]-(d[n*3+2]+_[n]*u[n*3+2]));if(Number.isFinite(w)&&w>=1e-12){let e=-(u[p*3]-u[n*3])/w,t=-(u[p*3+1]-u[n*3+1])/w,r=-(u[p*3+2]-u[n*3+2])/w;Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(r)&&(x=e,S=t,C=r)}for(let e=0;e<4;e+=1){let n=f(+(e<2),t,e&1)*3,i=(t*4+e)*4;h[i]=r.position[n],h[i+1]=r.position[n+1],h[i+2]=r.position[n+2],h[i+3]=e===0?_[t]:e===1?x:e===2?S:C}}}m.forEach((e,t)=>Re(e,t,ze(e,c))),Ve=r===V&&q===H?H:-1,He=i,Ue=a}let h=0,g=1/0,_=-1/0;for(let e=0;e<4*c;e+=1){let t=r.position[e*3],n=r.position[e*3+1],i=r.position[e*3+2];if(i>h&&(h=i),!o){let e=s[2]*t+s[6]*n+s[10]*i+s[14];e<g&&(g=e),e>_&&(_=e)}}We[0]=h,We[1]=o?0:_,We[2]=o?0:g,We[3]=o?p:-p,t.range.data=We,Re(t.range,3,1),e.activeTexture(e.TEXTURE0)},Ke=()=>{for(let t=0;t<4;t+=1)e.activeTexture(Le[t]),e.bindTexture(e.TEXTURE_2D,null);e.activeTexture(e.TEXTURE0)},qe=(t,n)=>{e.uniform1i(t.points,rn),e.uniform1i(t.values,7),e.uniform1i(t.corners,8),e.uniform1i(t.range,9),e.uniform1i(t.faceBase,n)},Je=(e,t)=>{if(e.count!==b||t!==x||!S)return!1;if(S===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(S[t]!==e.start[t])return!1;return!0},Ye=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),y=a,b=t.count,x=n,S=Uint32Array.from(t.start.subarray(0,t.count+1))},Xe=(e,t,n,r,i,a)=>{let o=e.band,s=e.bandNormal;if(!o||!s)return;let c=e.start[e.count];if(t===V&&q===H&&me===H&&Object.is(he,r)&&Object.is(ge,i)&&Object.is(_e,a)&&h.length>=c*4&&g.length>=c*2){p.set(h.subarray(0,c*4)),m.set(g.subarray(0,c*2));return}h.length<c*4&&(h=new Float64Array(c*4)),g.length<c*2&&(g=new Float64Array(c*2));let l=e=>.5*(p[e*4]+p[e*4+2]),u=e=>.5*(p[e*4+1]+p[e*4+3]);for(let c=0;c<e.count;c+=1){let d=e.start[c],f=e.start[c+1]-1;for(let c=d;c<=f;c+=1){let _=c>d?c-1:c,v=c<f?c+1:c,y=l(c),b=u(c),x=p[c*4],S=p[c*4+1],C=l(v)-l(_),w=u(v)-u(_),T=Math.hypot(C,w),E=0,D=1;if(T>1e-12)E=-w/T,D=C/T;else{let e=Math.hypot(x-y,S-b);e>1e-12&&(E=(x-y)/e,D=(S-b)/e)}(x-y)*E+(S-b)*D<0&&(E=-E,D=-D);let O=t.thickness[c],k=-1/0,A=1/0;for(let t=0;t<2;t+=1){let l=t===0?1:-1;for(let u=0;u<2;u+=1){let d,f,_;if(u===0)d=p[(c*2+t)*2],f=p[(c*2+t)*2+1],_=m[c*2+t];else{_=Math.max(0,e.center[c*3+2]+l*o[c*3+2]*n+O*s[c*3+2]);let t=_===0?0:_/a;d=e.center[c*3]+l*o[c*3]*n+O*s[c*3]-r*t,f=e.center[c*3+1]+l*o[c*3+1]*n+O*s[c*3+1]-i*t}let v=(d-y)*E+(f-b)*D;v>k&&(k=v,h[c*4]=d,h[c*4+1]=f,g[c*2]=_),v<A&&(A=v,h[c*4+2]=d,h[c*4+3]=f,g[c*2+1]=_)}}}}p.set(h.subarray(0,c*4)),m.set(g.subarray(0,c*2)),me=t===V&&q===H?H:-1,he=r,ge=i,_e=a},Ze=(t,n,r,i,a,o,s)=>{let c=n.light?.size??0,l={x:a,y:o},u=e.drawingBufferWidth,f=e.drawingBufferHeight,h=r.view,g=r.proj,_=(e,t,n,r)=>{let i=0;for(let a=0;a<4;a+=1){let o=g[a*4+e];o!==0&&(i+=o*(h[a]*t+h[4+a]*n+h[12+a]*r))}return i},v=(e,t,n,r)=>{let i=_(0,e,t,1),a=_(1,e,t,1),o=Math.max(_(3,e,t,1),1e-6),s=_(0,n,r,0),c=_(1,n,r,0),l=_(3,n,r,0),d=(s*o-i*l)/(o*o)*.5*u,p=(c*o-a*l)/(o*o)*.5*f,m=Math.hypot(d,p);return Number.isFinite(m)?m:0},y=e=>.5*(p[e*4]+p[e*4+2]),b=e=>.5*(p[e*4+1]+p[e*4+3]);for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let t=e>n?e-1:e,a=e<r?e+1:e,o=y(e),u=b(e),f=p[e*4],h=p[e*4+1],g=y(a)-y(t),_=b(a)-b(t),x=Math.hypot(g,_),S=0,C=1;if(x>1e-12)S=-_/x,C=g/x;else{let e=Math.hypot(f-o,h-u);e>1e-12&&(S=(f-o)/e,C=(h-u)/e)}let w=(f-o)*S+(h-u)*C,T=w<0?-1:1,E=T*S,D=T*C;w=Number.isFinite(w)?Math.abs(w):0;let O=v(o,u,E,D),k=O>0?Math.min(Cn/O,Tn):0,A=O>0?Math.min(wn/O,Tn):Tn,j=e=>{let t=it({z:m[e],elevation:i,size:c,dir:l,normal:{x:E,y:D}}),n=Math.min(tt*t,A);return Number.isFinite(n)&&n>0?n:0},M=j(e*2),N=j(e*2+1),P=1/0,ee=0;if(e>n&&e<r){let e=o-y(t),n=u-b(t),r=y(a)-o,i=b(a)-u;ee=e*i-n*r,ee!==0&&(P=Math.hypot(e,n)*Math.hypot(r,i)*x/(2*Math.abs(ee)))}for(let t=0;t<2;t+=1){let n=t===0?1:-1,r=e*2+t,i=t===0?M:N,a=n*E,o=n*D,c=w+i+k;i>0&&(a*S+o*C)*ee>0&&(c=Math.min(c,Math.max(w+k,P)));let l=c-w,u=s+r*Jt;d[u]=p[r*2]+a*l,d[u+1]=p[r*2+1]+o*l,d[u+3]=w,d[u+4]=M,d[u+5]=N,d[u+6]=n*c}}}},Qe=(t,n,r)=>{let a=t.bandNormal,o=t.start[t.count];u.length<o*6&&(u=new Float32Array(o*6));for(let e=0;e<o;e+=1)for(let t=0;t<3;t+=1){let n=a?a[e*3+t]:0,r=Number.isFinite(n)?n:0;u[e*6+t]=r,u[e*6+3+t]=r}e.uniform4f(i.plate,X(n.eta,1),X(n.dispersion,0),r??X(n.tint,0),1),l??=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,u.subarray(0,o*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(vn,3,e.FLOAT,!1,3*Yt,0),e.enableVertexAttribArray(vn)},$e=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>T,rubberUnavailable:()=>j,glassUnavailable:()=>P,thickUnavailable:()=>I&&L||Pe,boxWallUnavailable:()=>ve,scatterUnavailable:()=>te,draw(t,n,r,s,l,u,h){let g=Ct(n.band?.thickness),b=u?.name===`glass`?g:0,x=u?.name===`glass`?0:g;ve=!1,Pe=!1;let S=u?.name===`glass`&&u.dispersionMode===`plate`;L=b>0||S;let w=u?.name===`glass`&&n.band?.glassMode===`scatter`;te=w&&b>0;let T=t.band,A=t.bandNormal;if(!T||!A||!n.band)return;ce+=1;let j=t.start[t.count],N=Math.max(0,n.band.width)/2,P=n.light?.dir.x??xn,F=n.light?.dir.y??Sn,I=n.light?.elevation??bn,z=Math.tan(I);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o);let B=j*4*Jt;d.length<B&&(d=new Float32Array(B),e.bufferData(e.ARRAY_BUFFER,d.byteLength,e.DYNAMIC_DRAW)),Je(t,j)||Ye(t,j);let V=l.view,H=n.view,re=Kt(H)||H===void 0;f.length<j*4&&(f=new Float32Array(j*4)),p.length<j*4&&(p=new Float64Array(j*4)),m.length<j*2&&(m=new Float64Array(j*2));let ie=0;for(let e=0;e<j;e+=1){let n=t.center[e*3+2]+N;n>ie&&(ie=n)}let ae=1/(t.count+1),U=j*2*Jt,W=1/0,oe=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*ae;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=T[r*3]*N,s=T[r*3+1]*N,c=T[r*3+2]*N;for(let t=0;t<2;t+=1){let l=t===0?1:-1,u=e+l*o,h=i+l*s,g=Math.max(0,a+l*c),_=(r*2+t)*Jt,v=U+_,y=g===0?0:g/z;d[_]=u,d[_+1]=h,d[_+2]=g;let b=r*2+t;if(re)f[b]=n+ae*(.5-.45*(ie>0?g/ie:0));else{let e=V[2]*u+V[6]*h+V[10]*g+V[14];f[b]=e,e<W&&(W=e),e>oe&&(oe=e)}f[j*2+b]=n+ae*.5,p[b*2]=u-P*y,p[b*2+1]=h-F*y,m[b]=g,d[_+3]=A[r*3],d[_+4]=A[r*3+1],d[_+5]=A[r*3+2],d[_+6]=l,d[v+2]=0}}}let G=g>0?fe(t,N,g):void 0;if(G&&Xe(t,G,N,P,F,z),Ze(t,n,l,I,P,F,U),!re&&j>0){let e=oe-W,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<j*2;e+=1)f[e]=t===0?.5:.01+(oe-f[e])*t}B>0&&e.bufferSubData(e.ARRAY_BUFFER,0,d,0,B),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,f.subarray(0,j*4),e.DYNAMIC_DRAW);let K=u?.name===`silk`?k():void 0,se=u?.name===`rubber`?M():void 0,le=u?.name===`glass`?ee():void 0,ue;if(le&&b>0&&G){let e=Fe()?Ie():void 0;ue=e&&ze(e.corners,G.points)<=e.maxRows?e:void 0,Pe=!ue}let q=ue?Me:void 0,de=le&&L&&!q?R():void 0,J=le&&w&&!(b>0)?ne():void 0;if(le&&w&&!(b>0)&&!J&&(te=!0),K||le){E.length<j*6&&(E=new Float32Array(j*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;E[n]=o,E[n+1]=s,E[n+2]=c}}}}e.useProgram(i.program);for(let e=0;e<16;e+=1)_[e]=l.view[e],v[e]=l.proj[e];e.uniformMatrix4fv(i.view,!1,_),e.uniformMatrix4fv(i.proj,!1,v);let Y=r(n.background),me=Ft(Y,Pt(n));e.uniform4f(i.shadowColor,me[0],me[1],me[2],me[3]),e.uniform1f(i.shadowAlpha,1);let he=[0,1,2].every(e=>me[e]<=Y[e]),ge=[0,1,2].every(e=>me[e]>=Y[e]),_e=Y[3]>=1&&(he||ge);e.uniform4f(i.cloth,Y[0],Y[1],Y[2],Y[3]);let ye=le?r(hn.test(n.band.glassColor??``)?n.band.glassColor:`#ffffff`):void 0,be=ye??r(n.band.front),Se=ye??(n.band.back===void 0?be:r(n.band.back)),we=n.band.glassHaze,Ee=typeof we==`number`&&Number.isFinite(we)?Math.max(0,we):1,De=X(u?.tint,0),Oe,Ne;if(J&&ye){let e=e=>[e(ye[0],De,Ee),e(ye[1],De,Ee),e(ye[2],De,Ee)];Oe=Wt(e(Ht)),Ne=Wt(e(Ut))}let Le=Oe?[...Oe.color,1]:be,Re=Oe?[...Oe.color,1]:Se;e.uniform4f(i.front,Le[0],Le[1],Le[2],Le[3]),e.uniform4f(i.back,Re[0],Re[1],Re[2],Re[3]);let Be=Math.cos(I);if(e.uniform3f(i.light,P*Be,F*Be,Math.sin(I)),e.uniform3f(i.viewDir,V[2],V[6],V[10]),e.uniform1f(i.ambient,s.ambient),e.uniform1f(i.diffuse,s.diffuse),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),y>0){e.disable(e.DEPTH_TEST),e.uniform1i(i.shadow,_e?1:3),C(j*2);let n=le!==void 0&&u?.name===`glass`&&h?.causticZero!==!0;n&&Qe(t,u,Oe?.tint),_e?(e.blendEquation(he?e.MIN:e.MAX),e.drawElements(e.TRIANGLES,y,e.UNSIGNED_INT,0),e.blendEquation(e.FUNC_ADD)):(e.colorMask(!1,!1,!1,!0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.blendEquation(e.MAX),e.drawElements(e.TRIANGLES,y,e.UNSIGNED_INT,0),e.blendEquation(e.FUNC_ADD),e.colorMask(!0,!0,!0,!0),e.blendFuncSeparate(e.DST_ALPHA,e.ONE_MINUS_DST_ALPHA,e.ONE,e.ZERO),e.uniform1i(i.shadow,2),e.uniform1i(i.fill,1),e.drawArrays(e.TRIANGLES,0,3),e.uniform1i(i.fill,0),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE)),n&&(e.disableVertexAttribArray(vn),e.uniform4f(i.plate,0,0,0,0)),e.enable(e.DEPTH_TEST),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS);let r=(t,n)=>{e.useProgram(t.program),e.uniformMatrix4fv(t.view,!1,_),e.uniformMatrix4fv(t.proj,!1,v),e.uniform4f(t.front,be[0],be[1],be[2],be[3]),e.uniform4f(t.back,Se[0],Se[1],Se[2],Se[3]),e.uniform3f(t.light,P*Be,F*Be,Math.sin(I)),$e(t.eye,l,V),e.uniform1f(t.ambient,s.ambient),e.uniform1f(t.diffuse,s.diffuse),e.uniform4f(t.silk,X(n.gloss,0),Math.max(0,X(n.sharpness,0)),X(n.shift,0),Math.min(1,Math.max(0,X(n.dim,0)))),e.uniform1f(t.streak,Math.max(0,X(n.streak,mn)))},a=(t,n,r,i)=>{e.useProgram(t.program),e.uniformMatrix4fv(t.view,!1,_),e.uniformMatrix4fv(t.proj,!1,v),e.uniform4f(t.front,be[0],be[1],be[2],be[3]),e.uniform4f(t.back,Se[0],Se[1],Se[2],Se[3]),e.uniform3f(t.light,P*Be,F*Be,Math.sin(I)),$e(t.eye,l,V),e.uniform1f(t.ambient,s.ambient),e.uniform1f(t.diffuse,s.diffuse),e.uniform3f(t.rubber,n,r,i)},o=x>0?K&&u?`silk`:se&&u?`rubber`:`standard`:void 0,c;if(o&&G){let e=(o===`silk`?je()!==void 0:(o===`rubber`||ke()!==void 0)&&Ae()!==void 0)?Ie():void 0;c=e&&ze(e.corners,G.points)<=e.maxRows?e:void 0,ve=!c}if(c&&G){if(Ge(c,t,G,N,x,re,V),e.bindVertexArray(c.vao),o===`silk`&&Te&&u)r(Te,u),qe(Te.box,0),e.drawElementsInstanced(e.TRIANGLES,y,e.UNSIGNED_INT,0,4);else if(o===`rubber`&&Ce&&u)a(Ce,X(u.gloss,0),Math.max(0,X(u.sharpness,0)),X(u.rim,0)),qe(Ce.box,0),e.drawElementsInstanced(e.TRIANGLES,y,e.UNSIGNED_INT,0,4);else if(xe&&Ce){let t=xe;e.useProgram(t.program),e.uniformMatrix4fv(t.view,!1,_),e.uniformMatrix4fv(t.proj,!1,v),e.uniform4f(t.shadowColor,me[0],me[1],me[2],me[3]),e.uniform1f(t.shadowAlpha,1),e.uniform4f(t.cloth,Y[0],Y[1],Y[2],Y[3]),e.uniform4f(t.front,Le[0],Le[1],Le[2],Le[3]),e.uniform4f(t.back,Re[0],Re[1],Re[2],Re[3]),e.uniform3f(t.light,P*Be,F*Be,Math.sin(I)),e.uniform3f(t.viewDir,V[2],V[6],V[10]),e.uniform1f(t.ambient,s.ambient),e.uniform1f(t.diffuse,s.diffuse),e.uniform1i(t.shadow,0),qe(t.box,0),e.drawElementsInstanced(e.TRIANGLES,y,e.UNSIGNED_INT,0,2),a(Ce,0,1,0),qe(Ce.box,2),e.drawElementsInstanced(e.TRIANGLES,y,e.UNSIGNED_INT,0,2)}Ke()}else if(K&&u)r(K,u),C(0),e.bindBuffer(e.ARRAY_BUFFER,K.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,E.subarray(0,j*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(_n,3,e.FLOAT,!1,3*Yt,0),e.enableVertexAttribArray(_n),e.drawElements(e.TRIANGLES,y,e.UNSIGNED_INT,0),e.disableVertexAttribArray(_n);else if(se&&u)a(se,X(u.gloss,0),Math.max(0,X(u.sharpness,0)),X(u.rim,0)),C(0),e.drawElements(e.TRIANGLES,y,e.UNSIGNED_INT,0);else if(le&&u){let n=q??de??le;e.useProgram(n.program),e.uniformMatrix4fv(n.view,!1,_),e.uniformMatrix4fv(n.proj,!1,v),e.uniform4f(n.front,be[0],be[1],be[2],be[3]),e.uniform4f(n.back,Se[0],Se[1],Se[2],Se[3]),e.uniform3f(n.light,P*Be,F*Be,Math.sin(I)),$e(n.eye,l,V),e.uniform4f(n.glass,X(u.tint,0),X(u.edge,1),X(u.mirror,0),X(u.gloss,0));let r=u.dispersionMode===`shift`;e.uniform4f(n.glassB,X(u.sharpness,1),X(u.eta,1),0,r?X(u.secondShift,0):0),e.uniform4f(n.glassC,X(u.dispersion,0),X(u.secondGloss,0),X(u.secondWidth,0),+!!r);let i=q??de;i&&e.uniform4f(i.thick,b,N,+!!S,+!!q);let a=y;if(q&&ue&&G)Ge(ue,t,G,N,b,re,V),e.bindVertexArray(ue.vao),qe(q.box,0);else if(C(0),e.bindBuffer(e.ARRAY_BUFFER,le.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,E.subarray(0,j*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(_n,3,e.FLOAT,!1,3*Yt,0),e.enableVertexAttribArray(_n),de){pe(t,A,j),D.length<j*6&&(D=new Float32Array(j*6));for(let e=0;e<j;e+=1)for(let t=0;t<2;t+=1){let n=(e*2+t)*3;D[n]=O[e*3],D[n+1]=O[e*3+1],D[n+2]=O[e*3+2]}e.bindBuffer(e.ARRAY_BUFFER,de.slopeBuffer),e.bufferData(e.ARRAY_BUFFER,D.subarray(0,j*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(yn,3,e.FLOAT,!1,3*Yt,0),e.enableVertexAttribArray(yn)}e.disable(e.DEPTH_TEST),e.uniform1i(n.pass,0),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.ONE);let o=()=>{q?e.drawElementsInstanced(e.TRIANGLES,a,e.UNSIGNED_INT,0,4):e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0)};if(o(),J&&Ne){let[t,r,i]=Ne.color;e.uniform4f(n.front,t,r,i,1),e.uniform4f(n.back,t,r,i,1),e.uniform4f(n.glass,Ne.tint,X(u.edge,1),X(u.mirror,0),X(u.gloss,0))}e.uniform1i(n.pass,1),e.blendFuncSeparate(e.ONE,e.ONE,e.ZERO,e.ONE),o(),J&&ye&&(e.useProgram(J.program),e.uniformMatrix4fv(J.view,!1,_),e.uniformMatrix4fv(J.proj,!1,v),e.uniform3f(J.light,P*Be,F*Be,Math.sin(I)),$e(J.eye,l,V),e.uniform4f(J.scatter,Ee,De,s.ambient,s.diffuse),e.uniform4f(J.scatterColor,ye[0],ye[1],ye[2],Y[3]),e.uniform4f(J.scatterB,X(u.eta,1),X(u.edge,1),0,0),e.uniform1i(J.pass,2),e.enable(e.DEPTH_TEST),e.depthMask(!0),e.depthFunc(e.LESS),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(0,gn),e.colorMask(!1,!1,!1,!0),e.blendFuncSeparate(e.ZERO,e.ONE,e.ONE,e.ZERO),e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0),e.disable(e.POLYGON_OFFSET_FILL),e.polygonOffset(0,0),e.disable(e.DEPTH_TEST),e.colorMask(!0,!0,!0,!0),e.uniform1i(J.pass,0),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA),e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0),e.useProgram(n.program),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!1),e.blendFuncSeparate(e.ONE_MINUS_DST_ALPHA,e.ONE,e.ZERO,e.ONE),e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0),e.useProgram(J.program),e.uniform1i(J.pass,3),e.blendFuncSeparate(e.ONE_MINUS_DST_ALPHA,e.ONE,e.ONE,e.ZERO),e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0),Y[3]<1&&(e.disable(e.DEPTH_TEST),e.colorMask(!1,!1,!1,!0),e.uniform1i(J.pass,4),e.blendFuncSeparate(e.ZERO,e.ONE,e.ONE,e.ZERO),e.drawElements(e.TRIANGLES,a,e.UNSIGNED_INT,0),e.colorMask(!0,!0,!0,!0)),e.disable(e.DEPTH_TEST),e.depthMask(!0),e.depthFunc(e.LESS)),q?Ke():(e.disableVertexAttribArray(_n),de&&e.disableVertexAttribArray(yn)),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE)}else e.uniform1i(i.shadow,0),C(0),e.drawElements(e.TRIANGLES,y,e.UNSIGNED_INT,0)}e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var Dn=12,On=.2;function kn(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function An(e,t){let{k:n}=Pt(e),r=kn(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=1-n,a.diffuse=n,a.specular=0,a.shininess=kn(e.shininess,1,256,Dn),a.ply=kn(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=kn(e.plyContrast,0,1,On),a.plySlope=kn(e.plySlope,-1,1,.35),a}var jn=`この端末では素材の描き方を作れなかったので、標準で描いている`,Mn=Math.PI/180,Nn=16,Pn=8;function Fn(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+Nn}function In(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+Nn+Pn;return Math.min(60,2*Math.atan(r/(r+i+a+o))/Mn)}function Ln(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function Rn(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=Gt(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=In(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=Fn(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*Mn/2),a=Math.max(Pn,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var zn=1e-12;function Bn(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var Vn=new Float64Array,Hn=new Uint8Array;function Un(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);Vn.length<s*3&&(Vn=new Float64Array(s*3),Hn=new Uint8Array(s));let c=Vn,l=Hn,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>zn?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){Bn(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):Bn(a,l,u,i,t)}}function Wn(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var Gn=new Float64Array,Kn=new Float64Array,qn=new Float64Array;function Jn(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);qn.length<n&&(Gn=new Float64Array(n*3),Kn=new Float64Array(n*3),qn=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;Un(i,n,o,Gn,Kn,qn,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=qn[e],r[s+4]=Gn[e*3],r[s+5]=Gn[e*3+1],r[s+6]=Gn[e*3+2],r[s+7]=t,r[s+8]=Kn[e*3],r[s+9]=Kn[e*3+1],r[s+10]=Kn[e*3+2];let c=0;o>=2&&e===n?c=-(1+Wn(-Gn[e*3+2])):o>=2&&e===a-1&&(c=1+Wn(Gn[e*3+2])),r[s+11]=c}}return r}var Yn=.71,Xn=new Float64Array,Zn=new Float64Array,Qn=new Float64Array;function $n(e,t,n,r,i,a){if(r<=0)return;let o=n[r];Qn.length<o&&(Xn=new Float64Array(o),Zn=new Float64Array(o),Qn=new Float64Array(o));let s=Yn+i;for(let i=0;i<r;i+=1){let r=n[i],o=n[i+1];for(let n=r;n<o;n+=1){let r=n+1<o?n+1:n,i=e[2*n],c=e[2*n+1],l=e[2*r],u=e[2*r+1],d=l-i,f=u-c,p=t[n],m=t[r];Xn[n]=.5*(i+l),Zn[n]=.5*(c+u),Qn[n]=.5*Math.sqrt(d*d+f*f)+(p>m?p:m)+s,a[2*n]=n,a[2*n+1]=n}for(let e=r;e<o;e+=1){let t=Xn[e],n=Zn[e],r=Qn[e],i=a[2*e+1];for(let s=e+1;s<o;s+=1){let o=Xn[s]-t,c=Zn[s]-n,l=r+Qn[s];o*o+c*c<=l*l&&(i=s,e<a[2*s]&&(a[2*s]=e))}a[2*e+1]=i}}}function er(e,t,n,r){for(let i=0;i<t;i+=1){let t=e[i],a=e[i+1];for(let e=t;e<a;e+=1)r[e]=n?t+a-1-e:e}}function tr(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function nr(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var rr=.7,ir=1e6,ar=4294967295,or=1024,{mask:sr,shift:cr}=qt(or),lr=4,ur=1.5,dr=1e6,fr=e=>Number.isInteger(e)?`${e}.0`:String(e),pr=0,mr=1,hr=2,gr=3,_r=4,vr=5,yr=7,br=`#version 300 es
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
// P125: 半影 (tanβ, sinε, 光の水平の向き)。β 0 で tanβ = 0(半影なし = 今の影)。
uniform vec4 uPenumbra;

out vec3 vNormal;
out vec3 vTangent;
out vec3 vWorld;
out float vArc;
// P87: 画素の中心の、管の軸からの画面の上の符号付きの距離(device px)と、管の画面の半径(device px)。
out float vAcrossPx;
out float vRadiusPx;
// P125: 影の帯の、光源の像の箱の半幅 w(device px。0 で今の硬い影)。
out float vBlurPx;
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
  return texelFetch(uPoints, ivec2(texel & ${sr}, texel >> ${cr}), 0);
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

// P125: 光源の像の布の上の半幅 b(世界の単位) = (z / sinε)·tanβ·√((n·l⊥)² + (n·l∥)²/sin²ε)(src/render/footprint.ts と同じ式)。
// z ≤ 0・sinε ≤ 0・β ≤ 0 で 0。(n·l∥)/sinε を先に割ってから 2 乗する(sinε² の下溢れで 0/0 にしない)。
float lightImageHalfWidth(float z, vec2 n) {
  float t = uPenumbra.x;
  float s = uPenumbra.y;
  if (!(z > 0.0) || !(s > 0.0) || !(t > 0.0)) return 0.0;
  float along = dot(n, uPenumbra.zw) / s;
  float across = -n.x * uPenumbra.w + n.y * uPenumbra.z;
  return (z * t / s) * sqrt(across * across + along * along);
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
  vBlurPx = 0.0;
  vRadiusWorld = 0.0;
  vSegment0 = vec3(0.0);
  vSegment1 = vec3(0.0);
  vSegmentTangent0 = vec3(0.0);
  vSegmentTangent1 = vec3(0.0);
  vAxis1 = vec2(0.0);
  vAxis2 = vec2(0.0);
  vLineCode = 0;
  vReach = 0.0;
  if (uMode == ${mr}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${hr} || uMode == ${yr}) {
    int p = gl_VertexID >> 1;
    float side = (gl_VertexID & 1) == 0 ? 1.0 : -1.0;
    vec4 s = texelFetch(uShadowPoints, ivec2(p & ${sr}, p >> ${cr}), 0);
    float r = effectiveRadius(vec3(s.xy, 0.0));
    // P87: 影の帯も被覆の帯の分だけ広げ、帯の軸からの距離(device px)を渡す(平たい帯なので線形の補間で正しい)。
    float px = pixelsAt(vec3(s.xy, 0.0));
    float fringe = px > 0.0 ? uFringe / px : 0.0;
    // P125: 半影。光源の像の箱の半幅 w = (√3/2)·b(b は管の点の高さ z と帯の法線から)。帯の半幅を r + w + fringe へ広げる。
    float blurPx = px > 0.0 ? min(${fr(tt)} * lightImageHalfWidth(fetchPoint(p * 3).z, s.zw) * px, ${fr(dr)}) : 0.0;
    float blur = px > 0.0 ? blurPx / px : 0.0;
    float halfWidth = r + blur + fringe;
    // P125: 曲がりの内側では、半幅を影の折れ線の曲率半径(点 p − 1・p・p + 1 の外接円)で抑える(strip の内側の辺が交差して
    // 裏返った三角形の補間が偽の筋を出さない)。今の半幅 r + fringe より狭めない(β 0 は今の帯のまま)。線の端の点は抑えない。
    if (blur > 0.0 && fetchPoint(p * 3 + 2).w == 0.0) {
      int pa = p - 1;
      int pc = p + 1;
      vec2 sa = texelFetch(uShadowPoints, ivec2(pa & ${sr}, pa >> ${cr}), 0).xy;
      vec2 sc = texelFetch(uShadowPoints, ivec2(pc & ${sr}, pc >> ${cr}), 0).xy;
      vec2 e1 = s.xy - sa;
      vec2 e2 = sc - s.xy;
      float turn = e1.x * e2.y - e1.y * e2.x;
      // 曲がりの中心は、左へ曲がる(turn > 0)とき帯の法線 s.zw(= 前後の点の差の左の法線)の側。
      if (side * turn > 0.0) {
        float bend = length(e1) * length(e2) * length(sc - sa) / (2.0 * abs(turn));
        halfWidth = min(halfWidth, max(r + fringe, bend));
      }
    }
    gl_Position = clipOf(vec3(s.xy + side * halfWidth * s.zw, 0.0));
    vAcrossPx = side * halfWidth * px;
    vRadiusPx = px > 0.0 ? r * px : 1e6;
    vBlurPx = blurPx;
    return;
  }
  if (uMode == ${vr}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${_r};
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
  vNormal = uMode == ${gr} ? outward * t : n;
  vWorld = world;
}`,xr=`  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);`,Sr={wave:0,notch:1,scallop:2},Cr=`// P110: 法線の揺らぎ: (溝の深さ plyGain, 溝の形 0 なだらか・1 切れ込み・2 丸い膨らみ, 切れ込みの幅, 未使用)。
uniform vec4 uPlyNormal;
`,wr=`2.0`,Tr=`  float plyPhase = 6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN);
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
  float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${wr}, ${wr});
  N = normalize(N - plyTilt * grooveDir);
  outColor = vec4(shadeThread(N, T, V, 1.0) * alpha, alpha);`,Er=(e,t=!1,n=!1)=>`#version 300 es
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
${n?Cr:``}uniform vec4 uEye;
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
in float vBlurPx;
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

// P125: 足跡の関数(pixelBelow・原始関数・対ごとの差・半影の被覆)。src/render/footprint.ts の FOOTPRINT_GLSL をそのまま埋める。
${ot}
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

// P125: 影の被覆 = 硬い帯を画素の箱と光源の像の箱(半幅 vBlurPx)で畳んだ面積。w < PENUMBRA_W_MIN では edgeCoverage と同じ式。
float shadowCoverage() {
  vec2 grad = vec2(dFdx(vAcrossPx), dFdy(vAcrossPx));
  float gradLength = length(grad);
  vec2 axis = gradLength > 1e-6 ? abs(grad / gradLength) : vec2(1.0, 0.0);
  float wide = max(axis.x, axis.y);
  float thin = min(axis.x, axis.y);
  return penumbraCoverage(vAcrossPx, vRadiusPx, vBlurPx, wide, thin);
}

void main() {
#ifdef RIBBON_DEPTH
  gl_FragDepth = gl_FragCoord.z;
#endif
  if (uMode == ${mr}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${hr}) {
    float coverage = shadowCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${yr}) {
    float coverage = shadowCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${vr}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${_r};
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
    vec4 head = texelFetch(uLines, ivec2((2 * line) & ${sr}, (2 * line) >> ${cr}), 0);
    vec4 tail = texelFetch(uLines, ivec2((2 * line + 1) & ${sr}, (2 * line + 1) >> ${cr}), 0);
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
${n?Tr:xr}
}`,Dr=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse;
  return uColor * brightness * ply;
}`,Or=`uniform vec4 uSilk;
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
}`,kr=`uniform vec3 uRubber;

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
}`,Ar=Er(Dr),jr=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,Mr=Er(Or),Nr=Er(Dr,!0),Pr=Er(Or,!0),Fr=Er(kr),Ir=Er(kr,!0),Z=3,Lr=.25,Rr=1.42,zr=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uWin;
uniform int uTexWidth;
uniform vec2 uViewport;
// ガラス: (照りの鋭さ, 屈折率 η, 線の数, ずれの角)。ここでは線の数(z)だけを使う(fragment と同じ宣言)。
uniform vec4 uGlassB;
flat out int vSegment;

vec4 winAt(int i) {
  return texelFetch(uWin, ivec2(i & ${sr}, i >> ${cr}), 0);
}

void main() {
  int slot = gl_VertexID / 6;
  int c = gl_VertexID - 6 * slot;
  int k = int(winAt(${Z} * slot + 1).z + 0.5);
  vec4 a0 = winAt(${Z} * k);
  vec4 a1 = (int(a0.w + 0.5) & 1) == 1 ? a0 : winAt(${Z} * k + ${Z});
  float h = max(a0.z, a1.z) + ${Rr.toFixed(2)};
  vec2 d = a1.xy - a0.xy;
  float l = length(d);
  vec2 u = l > 1e-6 ? d / l : vec2(1.0, 0.0);
  vec2 n = vec2(-u.y, u.x);
  float along = (c == 1 || c == 4 || c == 5) ? l + h : -h;
  float side = (c == 2 || c == 3 || c == 5) ? h : -h;
  vec2 at = a0.xy + along * u + side * n;
  float depth = (float(int(a0.w + 0.5) >> 1) + 1.0) / (uGlassB.z + 2.0);
  gl_Position = vec4(at / uViewport * 2.0 - 1.0, 2.0 * depth - 1.0, 1.0);
  vSegment = k;
}`,Br=`#version 300 es
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
  return texelFetch(uWin, ivec2(i & ${sr}, i >> ${cr}), 0);
}

vec4 pointAt(int i) {
  return texelFetch(uPoints, ivec2(i & ${sr}, i >> ${cr}), 0);
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

// 区間 (a, b) の画面の距離 − (r(t) + 0.71)。0 以下なら画素は区間の届く内(自分の区間の判定と持ち主の判定で同じ式)。
float reachGap(vec4 a, vec4 b, vec2 q) {
  vec2 d = b.xy - a.xy;
  float l = dot(d, d);
  float t = l > 1e-12 ? clamp(dot(q - a.xy, d) / l, 0.0, 1.0) : 0.0;
  return length(q - (a.xy + t * d)) - (mix(a.z, b.z, t) + 0.71);
}

void main() {
  vec2 q = gl_FragCoord.xy;
  int k = vSegment;
  vec4 k0 = winAt(${Z} * k);
  int code = int(k0.w + 0.5);
  vec4 k1 = (code & 1) == 1 ? k0 : winAt(${Z} * k + ${Z});
  // 自分の区間で d > r(t) + 0.71 なら捨てる(布の下・被覆 0 も discard に統一)。
  if (reachGap(k0, k1, q) > 0.0) discard;
  vec4 range = winAt(${Z} * k + 1);
  int lo = int(range.x + 0.5);
  int hi = int(range.y + 0.5);
  // P139(issue #255): 画素の持ち主は、この線の区間のうち画素が r(t) + 0.71 の内に入る区間の番号の最小。持ち主でない
  // fragment は、安い距離の判定だけで捨てる(重い窓の loop を、区間の長方形の重なりの数だけ回さない)。値は D2 により
  // どの区間の fragment でも同じなので、持ち主が描いても先着が描いても画素は変わらない。画素に入る 2 つの区間は互いの窓に
  // 入る(中点の距離 ≤ 半長 + r + 0.71 の和)ので、持ち主の候補は窓の [lo, k) を見れば足りる。深さの NOTEQUAL は残す。
  // 近い区間ほど画素に入りやすいので、k − 1 から lo へ向けて見る(「k より小さい番号で入るものがあるか」は向きに依らない)。
  for (int j = k - 1; j >= lo; j--) {
    vec4 a = winAt(${Z} * j);
    vec4 b = lastPoint(a) ? a : winAt(${Z} * j + ${Z});
    if (reachGap(a, b, q) <= 0.0) discard;
  }
  // 窓の中で d − r(和集合の符号つきの距離)が最小の区間 m。端の点は区間に依らず同じ値になるよう、clamp した所は点そのものを使う。
  int m = k;
  float tm = 0.0;
  float dm = 0.0;
  float rm = 1.0;
  vec2 off = vec2(1.0, 0.0);
  float best = 1e30;
  // P123: s(厚み)は窓の中の d / r の最小(連続)。d − r が最小の区間の d / r は、遠近で r が点ごとに違うと区間の切り替わりで跳ぶ。
  // r が線の中で同じなら(fov 0)、d / r の最小の区間は d − r の最小の区間と同じ(神託と同じ値)。
  float sMin = 1.0;
  // 画素の視線(近い面の世界の点と、目への向き)。
  vec4 nearH = uInvViewProj * vec4(q / uViewport * 2.0 - 1.0, -1.0, 1.0);
  vec3 origin = nearH.xyz / nearH.w;
  vec3 toEye = uEye.w > 0.5 ? uEye.xyz - origin : uEye.xyz;
  float toEyeLength = length(toEye);
  vec3 ray = toEyeLength > 1e-9 ? toEye / toEyeLength : vec3(0.0, 0.0, 1.0);
  // P123(issue #221): 見える面は、視線と窓の capsule(区間の円柱 + 両端の点の球)の交点のうち目に最も近いもの。
  // 画面の d − r が最小の区間 m は被覆と s(厚み)にだけ使う。端で糸が布へ立つと、端の近くの区間・点が画面で重なり、
  // m の切り替わりで接線・弧長・軸の点が跳んで扇の線になっていた(画面の距離は高さを知らない)。窓の中の順に依らず同じ値。
  float hitAlong = -1e30;
  int hitPoint = -1;
  int hitSegment = -1;
  float hitT = 0.0;
  // P128(issue #232): 画面の d − r の最小と capsule の交点を、窓の 1 回のループで求める(texel は区間ごとに 1 度だけ読む)。
  // P139: 区間 j の終わりの点の texel は、区間 j + 1 の始まりの点の texel(窓は線の中で連続)。読んだものを次の番へ渡す。
  vec4 aNext = winAt(${Z} * lo);
  vec4 paNext = winAt(${Z} * lo + 2);
  for (int j = lo; j <= hi; j++) {
    vec4 a = aNext;
    vec4 pa = paNext;
    bool jLast = lastPoint(a);
    vec4 b = jLast ? a : winAt(${Z} * j + ${Z});
    vec4 pb = jLast ? pa : winAt(${Z} * j + ${Z} + 2);
    aNext = b;
    paNext = pb;
    vec2 e2d = b.xy - a.xy;
    float e2 = dot(e2d, e2d);
    float tq = e2 > 1e-12 ? clamp(dot(q - a.xy, e2d) / e2, 0.0, 1.0) : 0.0;
    vec2 c = tq <= 0.0 ? a.xy : tq >= 1.0 ? b.xy : a.xy + tq * e2d;
    float r = tq <= 0.0 ? a.z : tq >= 1.0 ? b.z : mix(a.z, b.z, tq);
    vec2 o = q - c;
    float d = length(o);
    sMin = min(sMin, d / max(r, 1e-6));
    if (d - r < best) {
      best = d - r;
      m = j;
      tm = tq;
      dm = d;
      rm = r;
      off = o;
    }
    // P139(issue #255): 視線の交点を解かずに済む区間を、3 次元の式だけで間引く(画面の近似は使わない)。
    // 区間 j の capsule(軸の円柱 + 点 j・j + 1 の球)は、中点 C を中心にした半径 R = 半長 + max(半径) の球に入る
    // (capsule の点 P は、軸の点 A から最大の半径の内。|A − C| ≤ 半長)。
    // - 視線がその球に当たらないなら、円柱にも、点 j・j + 1 の球にも当たらない。
    // - 当たる点 P の視線の上の位置 dot(P − origin, ray) は、視線がその球に入る点の位置(球の交点のうち目に近い方)を越えない。
    //   それがいまの最も手前の交点(hitAlong)以下なら、この区間・点の交点は勝たない(勝つのは厳密に大きいときだけ)。
    // どちらも丸めの分だけ緩く(解く側へ)取る。何を解くかは loop の順に依るが、残る交点(最大)は順に依らず同じ。
    // 点の球は、その点から始まる区間の番で 1 度だけ解く(窓の最後の区間の終わりの点だけは、その区間の番で解く)。
    // 点 j の球は区間 j の包む球に入るので、上の間引きで落ちるのは、当たらない・勝たない球だけである。
    float maxR = max(pa.w, pb.w);
    vec3 boundC = 0.5 * (pa.xyz + pb.xyz);
    float boundR = (0.5 * length(pb.xyz - pa.xyz) + maxR) * 1.001 + 1e-4;
    vec3 boundO = origin - boundC;
    float boundB = dot(boundO, ray);
    float boundD = boundB * boundB - (dot(boundO, boundO) - boundR * boundR);
    if (boundD < 0.0) continue;
    if (-boundB + sqrt(boundD) + 1e-3 <= hitAlong) continue;
    for (int e = 0; e < 2; e++) {
      if (e == 1 && (jLast || j < hi)) break;
      vec4 pe = e == 0 ? pa : pb;
      vec3 oc = origin - pe.xyz;
      float bq = dot(oc, ray);
      float dq = bq * bq - (dot(oc, oc) - pe.w * pe.w);
      if (dq >= 0.0) {
        float al = -bq + sqrt(dq);
        if (al > hitAlong) {
          hitAlong = al;
          hitPoint = j + e;
          hitSegment = -1;
        }
      }
    }
    if (jLast) continue;
    vec3 axis = pb.xyz - pa.xyz;
    float axis2 = dot(axis, axis);
    if (axis2 <= 1e-12) continue;
    vec3 ta = axis * inversesqrt(axis2);
    vec3 offsetAcross = (origin - pa.xyz) - dot(origin - pa.xyz, ta) * ta;
    vec3 rayAcross = ray - dot(ray, ta) * ta;
    float qa = dot(rayAcross, rayAcross);
    if (qa <= 1e-12) continue;
    float qb = dot(offsetAcross, rayAcross);
    // 半径は区間の中で線形。中ほどの半径で解き、交点の t の半径で 1 度解き直す。
    float rr = 0.5 * (pa.w + pb.w);
    float tj = -1.0;
    float al = 0.0;
    bool ok = false;
    for (int it = 0; it < 2; it++) {
      float disc = qb * qb - qa * (dot(offsetAcross, offsetAcross) - rr * rr);
      ok = disc >= 0.0;
      if (!ok) break;
      al = (-qb + sqrt(disc)) / qa;
      tj = dot(origin + al * ray - pa.xyz, axis) / axis2;
      // P139: 両端の半径が同じなら、解き直しても同じ半径(中ほどの半径のまま)。
      if (pa.w == pb.w) break;
      rr = mix(pa.w, pb.w, clamp(tj, 0.0, 1.0));
    }
    if (ok && tj >= 0.0 && tj <= 1.0 && al > hitAlong) {
      hitAlong = al;
      hitPoint = -1;
      hitSegment = j;
      hitT = tj;
    }
  }
  // 被覆(画素から m への最近点の向きで、台形の分布の面積。D2)。
  vec2 dir = dm > 1e-6 ? abs(off / dm) : vec2(1.0, 0.0);
  float coverage = pixelBelow(rm - dm, max(dir.x, dir.y), min(dir.x, dir.y));
  if (coverage <= 0.0) discard;
  vec4 m0 = winAt(${Z} * m);
  bool mLast = lastPoint(m0);
  int endPoint = (tm <= 0.0 || mLast) ? m : tm >= 1.0 ? m + 1 : -1;
  vec3 entry;
  vec3 axisPoint;
  vec3 T;
  float arc;
  float rw;
  bool hit = hitPoint >= 0 || hitSegment >= 0;
  // 線の端の点の球の、外へ向く向き(線の内の点・区間では 0。点 1 つの線では全体を球にする印 capWhole)。
  vec3 capOut = vec3(0.0);
  bool capWhole = false;
  if (hitPoint >= 0) {
    vec4 ae = winAt(${Z} * hitPoint + 2);
    rw = ae.w;
    entry = origin + hitAlong * ray;
    axisPoint = ae.xyz;
    T = pointAt(3 * hitPoint + 1).xyz;
    arc = pointAt(3 * hitPoint).w;
    bool isLast = lastPoint(winAt(${Z} * hitPoint));
    bool isFirst = hitPoint == 0 || lastPoint(winAt(${Z} * hitPoint - ${Z}));
    if (isFirst && isLast) {
      capWhole = true;
    } else if (isFirst || isLast) {
      vec3 inner = winAt(${Z} * (isLast ? hitPoint - 1 : hitPoint + 1) + 2).xyz;
      capOut = dot(T, ae.xyz - inner) < 0.0 ? -T : T;
    }
  } else if (hitSegment >= 0) {
    vec4 a0 = winAt(${Z} * hitSegment + 2);
    vec4 a1 = winAt(${Z} * hitSegment + ${Z} + 2);
    rw = mix(a0.w, a1.w, hitT);
    entry = origin + hitAlong * ray;
    axisPoint = mix(a0.xyz, a1.xyz, hitT);
    T = mix(pointAt(3 * hitSegment + 1).xyz, pointAt(3 * hitSegment + 4).xyz, hitT);
    arc = mix(pointAt(3 * hitSegment).w, pointAt(3 * hitSegment + 3).w, hitT);
  } else if (endPoint >= 0) {
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
  float s = sMin;
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
  // P123: 交点があれば、法線は交点の面から出す。断面の式は、球の蓋では軸の延長線を挟んで符号が反転し(sSigned)、
  // 糸が視線に沿うと across・front が定まらないため、交点の無い縁(被覆の外側の画素)だけに使う。
  // - 区間の円柱・線の内の点の球: 軸の点から交点への向き g を、補った接線 T に垂直へ射影する(滑らかな法線)。
  //   g そのもの(区間の軸に垂直)では、折れ線の区間ごとに法線の向きが変わり、糸が視線に沿う所で区間ごとの縞(段)になる。
  //   円柱の t = 1 と次の点の球、点の球と次の円柱の t = 0 は、同じ g と同じ T なので同じ法線になる。
  // - 線の端の点の球: 外へ向く半球(g·T_外 > 0)は g(丸い蓋)。境(g·T = 0)で射影と同じ値になる。
  // - 画素の平均: 面の法線 n を視線 V と、V に垂直な向き dir に分け(σ = |n − (n·V)V|)、断面の式と同じく σ ± 0.5 / r で
  //   円の法線を平均する(輪郭の画素で N·V が 0 へ落ちない)。T ⊥ V の円柱では断面の式と同じ値(σ = s、dir = ±across、V = front)。
  vec3 radial = entry - axisPoint;
  float radialLength = length(radial);
  if (hit && radialLength > 1e-9) {
    vec3 g = radial / radialLength;
    vec3 gp = g - dot(g, T) * T;
    float gpLength = length(gp);
    vec3 n = (capWhole || dot(g, capOut) > 0.0 || gpLength < 1e-6) ? g : gp / gpLength;
    vec3 nPerp = n - dot(n, V) * V;
    float sigma = min(length(nPerp), 1.0);
    vec3 dir = sigma > 1e-6 ? nPerp / length(nPerp) : vec3(0.0);
    float g0 = clamp(sigma - 0.5 * inv, -1.0, 1.0);
    float g1 = clamp(sigma + 0.5 * inv, -1.0, 1.0);
    float gMean = 0.5 * (g0 + g1);
    float gFront = g1 - g0 > 1e-4
      ? (circleArea(g1) - circleArea(g0)) / (g1 - g0)
      : sqrt(max(0.0, 1.0 - gMean * gMean));
    N = normalize(gMean * dir + gFront * V);
  }
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
    float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${wr}, ${wr});
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
}`,Vr=`#version 300 es
void main() {
  int k = gl_VertexID;
  gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
}`,Hr=`#version 300 es
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
}`,Ur=`precision highp sampler2D;
`,Wr=`    vBlurPx = blurPx;
    return;
  }`,Gr=(()=>{if(br.split(Ur).length!==2||br.split(Wr).length!==2)throw Error(`mesh: the caustic vertex shader anchors are missing`);return br.replace(Ur,`${Ur}invariant gl_Position;
// P130: 端の均しのつまみ c。
uniform float uCausticBend;
out vec3 vCausticCenter;
out vec3 vCausticTangent;
out vec2 vCausticNormal;
out float vCausticRadius;
out float vCausticBend;
${xt}`).replace(Wr,`    vBlurPx = blurPx;
    // P130: 焦光の varying(点の中心・接線・帯の法線・世界の半径・端の均しの重み)。
    vCausticCenter = fetchPoint(p * 3).xyz;
    vCausticTangent = fetchPoint(p * 3 + 1).xyz;
    vCausticNormal = s.zw;
    vCausticRadius = r;
    float causticMark = fetchPoint(p * 3 + 2).w;
    int causticPrev = causticMark < 0.0 ? p : p - 1;
    int causticNext = causticMark > 0.0 ? p : p + 1;
    vec2 causticA = texelFetch(uShadowPoints, ivec2(causticPrev & ${sr}, causticPrev >> ${cr}), 0).xy;
    vec2 causticC = texelFetch(uShadowPoints, ivec2(causticNext & ${sr}, causticNext >> ${cr}), 0).xy;
    vCausticBend = causticBendWeight(causticA, s.xy, causticC, r, uCausticBend);
    return;
  }`)})(),Kr=0,qr=1,Jr=`// P133: channel ごとの η_c。
vec3 causticEtaRGB() {
  return vec3(uCausticOptics.x) + uCausticDispersion * vec3(-1.0, 0.0, 1.0);
}
vec3 causticExposureRGB(float bend, float wide, float thin) {
  return causticExposureFast(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, bend, causticEtaRGB(), uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
}
vec3 causticUntouchedRGB(float wide, float thin) {
  return causticUntouchedFast(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, causticEtaRGB(), uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
}`,Yr=`// P131: 帯の画素の光の倍率 E を η で 1 度数える(P130 の路)。
vec3 causticExposureEta(float eta, float bend, float wide, float thin) {
  return causticExposure(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, bend, eta, uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
}
// P131: MIN の target に書かれなかった画素の一様の値を η で 1 度数える。
vec3 causticUntouchedEta(float eta, float wide, float thin) {
  return causticUntouched(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, eta, uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
}
// P131: 焦光の分光。Δη = 0 は η の 1 度(uniform の分岐)、Δη ≠ 0 は channel c を η_c = η + Δη·(−1, 0, 1)_c で
// 回した値の c 成分(P120 の shift は影に掛けない)。
vec3 causticExposureRGB(float bend, float wide, float thin) {
  float eta = uCausticOptics.x;
  float de = uCausticDispersion;
  if (de == 0.0) return causticExposureEta(eta, bend, wide, thin);
  return vec3(
    causticExposureEta(eta - de, bend, wide, thin).r,
    causticExposureEta(eta, bend, wide, thin).g,
    causticExposureEta(eta + de, bend, wide, thin).b);
}
vec3 causticUntouchedRGB(float wide, float thin) {
  float eta = uCausticOptics.x;
  float de = uCausticDispersion;
  if (de == 0.0) return causticUntouchedEta(eta, wide, thin);
  return vec3(
    causticUntouchedEta(eta - de, wide, thin).r,
    causticUntouchedEta(eta, wide, thin).g,
    causticUntouchedEta(eta + de, wide, thin).b);
}`,Xr=e=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
// P130: 0 = MIN(光の倍率を target へ)、1 = COMPOSE(target を読んで既定の framebuffer へ)。
uniform int uCausticPhase;
// 光源への向き。
uniform vec3 uCausticLight;
// (η, tint, 焦光の強さ g, τ ≡ 0 の口)。
uniform vec4 uCausticOptics;
// 糸の色(τ の吸収)。
uniform vec3 uCausticColor;
// 区画の数 K。
uniform int uCausticSamples;
// (κ, κ′)。明るい側は κ、暗い側は κ′。
uniform vec2 uCausticKappa;
// 布の色(rgba)。
uniform vec4 uCausticCloth;
uniform sampler2D uCausticDark;
uniform sampler2D uCausticBright;
// P131(issue #237): 分光の Δη(P118 の glassDispersion)。channel ごとの η_c = η + Δη·(−1, 0, 1)(r・g・b)。0 なら 1 channel の道。
uniform float uCausticDispersion;

in float vAcrossPx;
in float vRadiusPx;
in float vBlurPx;
in vec3 vCausticCenter;
in vec3 vCausticTangent;
in vec2 vCausticNormal;
in float vCausticRadius;
in float vCausticBend;
layout(location = 0) out vec4 outDark;
layout(location = 1) out vec4 outBright;

${ot}
${e?yt:bt}
${e?Yr:Jr}
void main() {
  vec2 grad = vec2(dFdx(vAcrossPx), dFdy(vAcrossPx));
  float gradLength = length(grad);
  vec2 axis = gradLength > 1e-6 ? abs(grad / gradLength) : vec2(1.0, 0.0);
  float wide = max(axis.x, axis.y);
  float thin = min(axis.x, axis.y);
  if (uCausticPhase == ${qr}) {
    ivec2 at = ivec2(gl_FragCoord.xy);
    vec4 dark = texelFetch(uCausticDark, at, 0);
    vec4 bright = texelFetch(uCausticBright, at, 0);
    vec3 d = dark.rgb;
    vec3 b = -bright.rgb;
    if (all(equal(dark.rgb, vec3(1.0))) && all(equal(bright.rgb, vec3(-1.0)))) {
      // 画素の中心が strip の外で、標本の一部だけが覆われる画素(MIN の単 sample の target に書かれない)は、その場の被覆の一様の値で補う
      // (τ ≡ 0 の口では今の影と同じ値)。
      causticFrame(vCausticCenter, vCausticTangent, vCausticRadius, uCausticLight, vCausticNormal);
      vec3 E = causticUntouchedRGB(wide, thin);
      d = min(E, vec3(1.0));
      b = max(E, vec3(1.0));
    }
    vec3 lit = 1.0 - uCausticKappa.y * (1.0 - d) + uCausticKappa.x * uCausticOptics.z * (b - 1.0);
    outDark = vec4(uCausticCloth.rgb * lit, uCausticCloth.a);
    outBright = vec4(0.0);
    return;
  }
  causticFrame(vCausticCenter, vCausticTangent, vCausticRadius, uCausticLight, vCausticNormal);
  vec3 E = causticExposureRGB(clamp(vCausticBend, 0.0, 1.0), wide, thin);
  outDark = vec4(min(E, vec3(1.0)), 1.0);
  outBright = vec4(-max(E, vec3(1.0)), -1.0);
}`,Zr=new Float32Array([1,1,1,1]),Qr=new Float32Array([-1,-1,-1,-1]),$r=new Map;function ei(e){let t=$r.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=ei(r))}}}let i=n??[0,0,0,1];return $r.set(e,i),i}function ti(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function ni(e,t,n,r=br){let i=e.createProgram();if(!i)throw Error(`Unable to create a WebGL program`);let a=[];try{if(a.push(ti(e,e.VERTEX_SHADER,r)),e.attachShader(i,a[0]),a.push(ti(e,e.FRAGMENT_SHADER,t)),e.attachShader(i,a[1]),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(i)??``}`);n?.push(...a)}catch(t){for(let t of a)e.deleteShader(t);throw e.deleteProgram(i),t}return i}function ri(e,t){let n=[],r=[];try{for(let i of t)n.push(ni(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var ii={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`,penumbra:`uPenumbra`};function ai(e,t){let n={};for(let r of Object.keys(ii))n[r]=e.getUniformLocation(t,ii[r]);return{program:t,u:n}}function Q(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function oi(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var si=new Float64Array;function ci(e,t,n){let r=e.center;si.length<e.count&&(si=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];si[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=si[e]-si[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}function li(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;if(!Number.isFinite(A)||A===0){t.fill(0),t[0]=t[5]=t[10]=t[15]=1;return}let j=1/A;t[0]=(s*k-c*O+l*D)*j,t[1]=(i*O-r*k-a*D)*j,t[2]=(h*C-g*S+_*x)*j,t[3]=(f*S-d*C-p*x)*j,t[4]=(c*E-o*k-l*T)*j,t[5]=(n*k-i*E+a*T)*j,t[6]=(g*b-m*C-_*y)*j,t[7]=(u*C-f*b+p*y)*j,t[8]=(o*O-s*E+l*w)*j,t[9]=(r*E-n*O-a*w)*j,t[10]=(m*S-h*b+_*v)*j,t[11]=(d*b-u*S-p*v)*j,t[12]=(s*T-o*D-c*w)*j,t[13]=(n*D-r*T+i*w)*j,t[14]=(h*y-m*x-g*v)*j,t[15]=(u*x-d*y+f*v)*j}var ui=new Float64Array,di=new Float64Array,fi=new Float64Array,pi=new Uint8Array,mi=new Uint8Array,hi=new Float64Array(16);function gi(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function _i(e,t,n,r,i,a){let o=e.start[e.count]??0;di.length<o&&(ui=new Float64Array(o*2),di=new Float64Array(o),fi=new Float64Array(o),pi=new Uint8Array(o),mi=new Uint8Array(o));let s=r.view,c=r.proj,l=hi;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=c[r*4+t]*s[e*4+r];l[e*4+t]=n}let u=l[0],d=l[1],f=l[3],p=l[4],m=l[5],h=l[7],g=l[8],_=l[9],v=l[11],y=l[12],b=l[13],x=l[15],S=i.pixelScale,C=i.radius,w=i.widen,T=i.minRadius,E=i.fringe,D=.5*i.viewportW,O=.5*i.viewportH,k=ui,A=di;for(let e=0,n=0;e<o;e+=1,n+=12){let r=t[n],i=t[n+1],o=t[n+2],s=f*r+h*i+v*o+x,c=S/(s>1e-6?s:1e-6),l=c>0?Math.max(C*c+w,T)/c:C,j=t[n+11];if(j!==0){let e=(j<0?1-Math.abs(j):Math.abs(j)-1)*l;r+=e*t[n+4],i+=e*t[n+5],o+=e*t[n+6]}a&&(a[e*4]=r,a[e*4+1]=i,a[e*4+2]=o,a[e*4+3]=l);let M=f*r+h*i+v*o+x,N=M>1e-6?M:1e-6;k[e*2]=((u*r+p*i+g*o+y)/N+1)*D,k[e*2+1]=((d*r+m*i+_*o+b)/N+1)*O,A[e]=S/N*l+E}let j=fi,M=pi,N=mi;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let t=e===i,n=e===a-1,r=t?e:e-1,s=n?e:e+1;M[e]=o&&gi(k[r*2],k[r*2+1],k[e*2],k[e*2+1],k[s*2],k[s*2+1],A[e],t,n)?1:0,j[e]=t?0:j[e-1]+Math.hypot(k[e*2]-k[r*2],k[e*2+1]-k[r*2+1])}let s=-1/0;for(let e=i;e<a;e+=1)M[e]&&(s=Math.max(s,j[e]+A[e])),N[e]=+(j[e]<=s);let c=1/0;for(let e=a-1;e>=i;--e){let n=e===a-1?e:e+1;M[n]&&(c=Math.min(c,j[n]-A[n]));let i=N[e]===1||j[n]>=c;t[e*12+7]=2*r+ +!!i}let l=r*8;o?(n[l]=k[i*2],n[l+1]=k[i*2+1],n[l+2]=k[(i+1)*2],n[l+3]=k[(i+1)*2+1],n[l+4]=k[(a-1)*2],n[l+5]=k[(a-1)*2+1],n[l+6]=k[(a-2)*2],n[l+7]=k[(a-2)*2+1]):n.fill(0,l,l+8)}}function vi(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=ai(n,ni(n,Ar)),i=ai(n,ni(n,Nr)),a=ai(n,ni(n,jr)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=ri(n,[Fr,Ir]);if(!e)p=!0;else return d={...ai(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...ai(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=new Map,_=e=>{let t=g.get(e);if(t!==void 0)return t;let r=e===`silk`?Or:e===`rubber`?kr:Dr,i=ri(n,[Er(r,!1,!0),Er(r,!0,!0)]),a=i?i.map(t=>({...ai(n,t),rubber:e===`rubber`?n.getUniformLocation(t,`uRubber`):void 0,plyNormal:n.getUniformLocation(t,`uPlyNormal`)})):null;return g.set(e,a),a},v=()=>{if(o||c)return o;let e=ri(n,[Mr,Pr]);if(!e)c=!0;else return o=ai(n,e[0]),s=ai(n,e[1]),o},y=t.glassReverse===!0,b=!1,x=!1,S,C=()=>{x=!0},w=e=>{let t=n.drawingBufferWidth,r=n.drawingBufferHeight;if(e.width===t&&e.height===r)return!0;e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.activeTexture(n.TEXTURE4);let i=[n.createTexture(),n.createTexture()];i.forEach((e,i)=>{n.bindTexture(n.TEXTURE_2D,e),n.texStorage2D(n.TEXTURE_2D,1,n.RGBA16F,t,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+i,n.TEXTURE_2D,e,0)}),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0);let a=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,t,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,a),n.bindRenderbuffer(n.RENDERBUFFER,null);let o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindFramebuffer(n.FRAMEBUFFER,null),e.absorb=i[0],e.reflect=i[1],e.depth=a,e.width=t,e.height=r,o},T=()=>{if(x)return;if(!S){let e=[],t=[];try{t.push(ni(n,Br,e,zr)),t.push(ni(n,Hr,e,Vr))}catch{for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let r=n.getExtension(`EXT_color_buffer_float`),i=n.getExtension(`EXT_color_buffer_half_float`),a=r||i?n.createFramebuffer():null;if(!a){for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let[o,s]=t,c=e=>n.getUniformLocation(o,e);S={line:o,compose:s,framebuffer:a,absorb:null,reflect:null,depth:null,width:-1,height:-1,u:{texWidth:c(`uTexWidth`),viewport:c(`uViewport`),invViewProj:c(`uInvViewProj`),eye:c(`uEye`),light:c(`uLight`),color:c(`uColor`),ply:c(`uPly`),plyNormal:c(`uPlyNormal`),glass:c(`uGlass`),glassB:c(`uGlassB`),glassC:c(`uGlassC`)},which:n.getUniformLocation(s,`uWhich`)},n.useProgram(o),n.uniform1i(c(`uWin`),3),n.uniform1i(c(`uPoints`),0),n.useProgram(s),n.uniform1i(n.getUniformLocation(s,`uAbsorb`),4),n.uniform1i(n.getUniformLocation(s,`uReflect`),5),n.useProgram(null)}if(w(S))return S;let e=S;return e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.deleteFramebuffer(e.framebuffer),n.deleteProgram(e.line),n.deleteProgram(e.compose),S=void 0,C()},E=[null,null,null],D=[0,0,0],O=2,k=new Float32Array,A=new Float64Array,j=new Float64Array,M=new Int32Array,N=new Int32Array,P=new Float32Array(16),ee=new Float64Array(16),F=t.causticZero===!0,I=t.causticExact===!0,L=t.passProbe,R=!1,z=e=>{L&&(R=L.begin(e)===!1&&e!==`prepare`)},B=e=>{L&&(R=!1,L.end(e))},te=[{gpu:void 0,failed:!1},{gpu:void 0,failed:!1}],ne=()=>te[+!!I],V=()=>{let e=ne();if(e.gpu||e.failed)return e.gpu;let t;try{t=ni(n,Xr(I),void 0,Gr)}catch{e.failed=!0;return}let r=e=>n.getUniformLocation(t,e),i={...ai(n,t),c:{phase:r(`uCausticPhase`),light:r(`uCausticLight`),optics:r(`uCausticOptics`),color:r(`uCausticColor`),samples:r(`uCausticSamples`),kappa:r(`uCausticKappa`),cloth:r(`uCausticCloth`),bend:r(`uCausticBend`),dispersion:r(`uCausticDispersion`)}};return n.useProgram(t),n.uniform1i(r(`uCausticDark`),4),n.uniform1i(r(`uCausticBright`),5),n.useProgram(null),e.gpu=i,i},H=n.createVertexArray(),re=n.createBuffer(),ie=n.createTexture(),ae=n.createTexture(),U=n.createTexture();if(!H||!re||!ie||!ae||!U)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(H),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,re),n.bindVertexArray(null);for(let e of[ie,ae,U])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let W,oe=new Float32Array,G=0,K=new Float32Array,se=0,ce=new Float32Array,le=0,ue,q=0,de=0,J=0,fe=0,Y=0,pe=new Int32Array,me=new Int32Array,he=0,ge=new Uint32Array,_e=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=ar);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},ve,ye={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},be=new Float32Array(16),xe=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;W&&W.bitmapW===r&&W.bitmapH===i&&W.cssW===a&&W.cssH===o&&W.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,W={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},Se=e=>{e.glassReverse!==void 0&&(y=e.glassReverse===!0),e.causticZero!==void 0&&(F=e.causticZero===!0),e.causticExact!==void 0&&(I=e.causticExact===!0),e.passProbe!==void 0&&(L=e.passProbe),xe(e)},Ce=(e,t,r)=>{let i=e.count;if(ue&&q===t&&ue.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(ue[n]!==e.start[n]){t=!1;break}if(t)return}let a=tr(e.start,i,t);de=a.tubeCount,J=a.capCount,fe=a.shadowCount,Y=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(Y+=+(Y>0)+2*n)}let o=new Uint32Array(a.index.length+Y);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}pe.length<i&&(pe=new Int32Array(i),me=new Int32Array(i)),ci(e,r,pe),he=a.index.length,_e(e,pe,o,he),ge=new Uint32Array(Y),n.bindVertexArray(H),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,re),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),ue=e.start.slice(0,i+1),q=t},we=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*lr;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},Te=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,or,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,or,r,n.RGBA,n.FLOAT,t)},Ee=(e,t=!1)=>{let r=ei(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),R||n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},De=(e,t,n,r)=>{let i=Q((t.mesh??{}).cameraFov,45),a=t.view,o=Q(a?.tilt,0),s=Q(a?.turn,0),c=Q(a?.zoom,1)>0?Q(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,Q(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:Rn({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:Ln(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},Oe=(e,t)=>{ve??=En(n),Ee(t);let r=W?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=De(e,t,i,a);ve.draw(e,t,ei,An(t,ye),o,t.material,{causticZero:F})},ke=(e,t,r,i,a,o,s)=>{z(`glass-target`);let c=t.start[t.count],l=n.drawingBufferWidth,u=n.drawingBufferHeight;j.length<c&&(j=new Float64Array(c),M=new Int32Array(c*2),N=new Int32Array(c));let d=ui,f=di;for(let e=0;e<c;e+=1)j[e]=f[e]-ur;$n(d,j,t.start,t.count,Lr,M),er(t.start,t.count,y,N);let p=Math.max(1,Math.ceil(c*Z/or));k.length<or*p*4&&(k=new Float32Array(or*p*4));let m=k,h=1/0,g=1/0,_=-1/0,v=-1/0;for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1];for(let t=n;t<r;t+=1){let n=t===r-1,i=n?t:t+1,a=t*Z*4;m[a]=d[t*2],m[a+1]=d[t*2+1],m[a+2]=j[t],m[a+3]=2*e+ +!!n,m[a+4]=M[t*2],m[a+5]=M[t*2+1],m[a+6]=N[t],m[a+7]=0,m[a+8]=A[t*4],m[a+9]=A[t*4+1],m[a+10]=A[t*4+2],m[a+11]=A[t*4+3];let o=(Math.max(j[t],j[i])+Rr)*Math.SQRT2;for(let e of[t,i]){let t=d[e*2],n=d[e*2+1];t-o<h&&(h=t-o),t+o>_&&(_=t+o),n-o<g&&(g=n-o),n+o>v&&(v=n+o)}}}let b=Math.max(0,Math.floor(h)),x=Math.max(0,Math.floor(g)),S=Math.min(l,Math.ceil(_)),C=Math.min(u,Math.ceil(v));O=(O+1)%3,n.activeTexture(n.TEXTURE3);let w=E[O];if(w?n.bindTexture(n.TEXTURE_2D,w):(w=n.createTexture(),E[O]=w,n.bindTexture(n.TEXTURE_2D,w),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),p>D[O]&&(n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,or,p,0,n.RGBA,n.FLOAT,null),D[O]=p),n.texSubImage2D(n.TEXTURE_2D,0,0,0,or,p,n.RGBA,n.FLOAT,m),n.activeTexture(n.TEXTURE0),S>b&&C>x){let d=S-b,f=C-x;n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.viewport(0,0,l,u),n.enable(n.SCISSOR_TEST),n.scissor(b,x,d,f),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.clearColor(0,0,0,0),n.clearDepth(1),R||n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(e.line);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=i.proj[r*4+t]*i.view[e*4+r];ee[e*4+t]=n}li(ee,P);let p=i.view,m=r.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},h=r.light?.elevation??Math.PI/4,g=r.material,_=r.plyNormal;n.uniform1i(e.u.texWidth,or),n.uniform2f(e.u.viewport,l,u),n.uniformMatrix4fv(e.u.invViewProj,!1,P),i.fov>0?n.uniform4f(e.u.eye,s.x+p[2]*i.eye,s.y+p[6]*i.eye,p[10]*i.eye,1):n.uniform4f(e.u.eye,p[2],p[6],p[10],0),n.uniform3f(e.u.light,m.x*Math.cos(h),m.y*Math.cos(h),Math.sin(h)),n.uniform3f(e.u.color,a[0],a[1],a[2]),n.uniform4f(e.u.ply,o.ply,o.plyPitch,o.plyContrast,o.plySlope),n.uniform4f(e.u.plyNormal,_?Q(_.gain,0):0,_?Sr[_.profile]??Sr.wave:0,_?Q(_.notch,0):0,+!!_),n.uniform4f(e.u.glass,Q(g?.tint,0),Q(g?.edge,1),Q(g?.mirror,0),Q(g?.gloss,0));let v=g?.dispersionMode===`shift`;n.uniform4f(e.u.glassB,Q(g?.sharpness,1),Q(g?.eta,1),t.count,v?Q(g?.secondShift,0):0),n.uniform4f(e.u.glassC,Q(g?.dispersion,0),Q(g?.secondGloss,0),Q(g?.secondWidth,0),+!!v),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,w),n.activeTexture(n.TEXTURE0),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.enable(n.DEPTH_TEST),n.depthFunc(n.NOTEQUAL),n.depthMask(!0),R||n.drawArrays(n.TRIANGLES,0,6*c)}B(`glass-target`),z(`glass-compose`),S>b&&C>x&&(n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.DEPTH_TEST),n.useProgram(e.compose),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,e.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,e.reflect),n.uniform1i(e.which,0),n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.ONE),R||n.drawArrays(n.TRIANGLES,0,3),n.uniform1i(e.which,1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),R||n.drawArrays(n.TRIANGLES,0,3)),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.SCISSOR_TEST),n.viewport(0,0,l,u);for(let e of[n.TEXTURE5,n.TEXTURE4,n.TEXTURE3])n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,null);n.activeTexture(n.TEXTURE0),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null),B(`glass-compose`)},Ae=(e,t,r,i,a,o,s,c,l,u)=>{z(`caustic-min`);let d=r.material,f=l(e);n.uniform1i(f.mode,hr),n.uniform3f(e.c.light,s.x*Math.cos(c),s.y*Math.cos(c),Math.sin(c)),n.uniform4f(e.c.optics,Q(d?.eta,1),Q(d?.tint,0),Q(d?.causticGain,1),+!!F),n.uniform3f(e.c.color,o[0],o[1],o[2]);let p=Q(d?.causticSamples,8);n.uniform1i(e.c.samples,Math.min(2147483647,Math.max(1,Math.round(p)))),n.uniform2f(e.c.kappa,i.kappa,i.kappaDark),n.uniform4f(e.c.cloth,a[0],a[1],a[2],a[3]),n.uniform1f(e.c.bend,Q(d?.causticBend,1)),n.uniform1f(e.c.dispersion,Q(d?.dispersion,0)),n.bindFramebuffer(n.FRAMEBUFFER,t.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.disable(n.SCISSOR_TEST),n.colorMask(!0,!0,!0,!0),R||(n.clearBufferfv(n.COLOR,0,Zr),n.clearBufferfv(n.COLOR,1,Qr)),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendEquation(n.MIN),n.uniform1i(e.c.phase,Kr),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,u),n.blendEquation(n.FUNC_ADD),B(`caustic-min`),z(`caustic-compose`),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.BLEND),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,t.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,t.reflect),n.uniform1i(e.c.phase,qr),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,u),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0),n.enable(n.BLEND),n.enable(n.DEPTH_TEST),B(`caustic-compose`)},je=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,b=t.material?.name===`glass`,u=!0,Oe(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,b=o?.name===`glass`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){z(`clear`),Ee(t),B(`clear`);return}let d=b?T():void 0,p=Pt(t),g=p.kappaDark>0,y=d&&p.kappa>0?V():void 0,x=ei(t.background),S=Ft(x,p),C=[0,1,2].every(e=>S[e]<=x[e]),w=[0,1,2].every(e=>S[e]>=x[e]),E=x[3]>=1&&(C||w);z(`clear`),Ee(t,!y&&g&&!E),B(`clear`),z(`prepare`);let D=W?.transform??1,O=n.drawingBufferWidth/D,k=n.drawingBufferHeight/D,j=t.mesh??{},M=Q(j.threadWiden,0),N=Q(j.threadMinRadius,rr),{camera:P,zoom:ee,center:F,width:I}=De(e,t,O,k),L=ee*(P.fov>0?P.eye:1)*D,te=P.fov>0?P.eye/P.near:1,ne=nr(Math.max(I/2*ee*te*D+M,N)),ue=Math.max(1,Math.ceil(c*3/or)),q=ue>G;q&&(G=ue,oe=new Float32Array(or*ue*4)),Jn(e,oe);let ve=Math.max(1,Math.ceil(c/or)),xe=ve>se;xe&&(se=ve,K=new Float32Array(or*ve*lr)),we(e,K);let Se=Math.max(1,Math.ceil(2*e.count/or)),je=Se>le;je&&(le=Se,ce=new Float32Array(or*Se*4)),d&&A.length<c*4&&(A=new Float64Array(c*4)),_i(e,oe,ce,P,{pixelScale:L,radius:I/2,widen:M,minRadius:N,fringe:ur,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight},d?A:void 0),Ce(e,ne,P.view),ci(e,P.view,me);let Me=!1;for(let t=0;t<e.count;t+=1)if(me[t]!==pe[t]){Me=!0;break}Me&&(pe.set(me.subarray(0,e.count)),_e(e,pe,ge,0),n.bindVertexArray(H),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,re),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,he*Uint32Array.BYTES_PER_ELEMENT,ge),n.bindVertexArray(null));let Ne=t.plyNormal,Pe=Ne?_(l?`silk`:m?`rubber`:`standard`):null,Fe=Pe?void 0:l?v():void 0,Ie=Pe||Fe?void 0:m?h():void 0,Le=Pe?.[0]??Fe??Ie??r,Re=Pe?.[1]??(Fe?s:Ie?f:void 0)??i,ze=Pe!==null&&l,Be=Pe!==null&&m;n.bindVertexArray(H),n.activeTexture(n.TEXTURE0),Te(ie,oe,G,q),n.activeTexture(n.TEXTURE1),Te(ae,K,se,xe),n.activeTexture(n.TEXTURE2),Te(U,ce,le,je),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=P.proj[r*4+t]*P.view[e*4+r];be[e*4+t]=n}let Ve=2*P.depthExtent,He=An(t,ye),Ue=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},We=t.light?.elevation??Math.PI/4,Ge=ei(t.layers[0]?.color??`#ffffff`),Ke=P.view,qe=rt(Q(t.light?.size,0)),Je=Q(Math.sin(We),0),Ye=({program:e,u:t,rubber:r,plyNormal:i})=>(n.useProgram(e),n.uniform1i(t.points,0),n.uniform1i(t.shadowPoints,1),n.uniform1i(t.lines,2),n.uniform1i(t.texWidth,or),n.uniform1i(t.sides,ne),n.uniformMatrix4fv(t.viewProj,!1,be),n.uniform1f(t.pixelScale,L),n.uniform1f(t.radius,I/2),n.uniform1f(t.widen,M),n.uniform1f(t.minRadius,N),n.uniform3f(t.plane,F.x,F.y,Ve),n.uniform4f(t.shading,He.ambient,He.diffuse,He.specular,He.shininess),n.uniform3f(t.light,Ue.x*Math.cos(We),Ue.y*Math.cos(We),Math.sin(We)),n.uniform3f(t.color,Ge[0],Ge[1],Ge[2]),n.uniform4f(t.ply,He.ply,He.plyPitch,He.plyContrast,He.plySlope),P.fov>0?n.uniform4f(t.eye,F.x+Ke[2]*P.eye,F.y+Ke[6]*P.eye,Ke[10]*P.eye,1):n.uniform4f(t.eye,Ke[2],Ke[6],Ke[10],0),Ne&&i&&n.uniform4f(i,Q(Ne.gain,0),Sr[Ne.profile]??Sr.wave,Q(Ne.notch,0),0),(Fe||ze)&&o&&(n.uniform4f(t.silk,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.shift,0),Math.min(1,Math.max(0,Q(o.dim,0)))),n.uniform1f(t.streak,Math.max(0,Q(o.streak,ir)))),(Ie||Be)&&o&&r&&n.uniform3f(r,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.rim,0)),n.uniform4f(t.shadowColor,S[0],S[1],S[2],S[3]),n.uniform1f(t.fringe,ur),n.uniform4f(t.penumbra,qe,Je,Ue.x,Ue.y),n.uniform3f(t.cloth,x[0],x[1],x[2]),n.uniform2f(t.viewport,n.drawingBufferWidth,n.drawingBufferHeight),t),Xe=Ye(Re),Ze=Ye(Le);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let Qe=Uint32Array.BYTES_PER_ELEMENT,$e=(de+J+fe)*Qe;B(`prepare`),y&&d?Ae(y,d,t,p,x,Ge,Ue,We,Ye,$e):g&&E?(z(`shadow`),n.disable(n.DEPTH_TEST),n.blendEquation(C?n.MIN:n.MAX),n.uniform1i(Ze.mode,yr),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,$e),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST),B(`shadow`)):g&&(z(`shadow`),n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(Ze.mode,hr),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,$e),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(Ze.fillAlpha,x[3]),n.uniform1i(Ze.mode,vr),R||n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST),B(`shadow`)),d?ke(d,e,t,P,Ge,He,F):(z(`cloth`),n.useProgram(a.program),n.uniform1i(a.u.mode,mr),n.uniformMatrix4fv(a.u.viewProj,!1,be),n.uniform3f(a.u.plane,F.x,F.y,Ve),n.depthMask(!0),n.depthFunc(n.LESS),R||n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),R||n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),B(`cloth`),z(`tube`),n.useProgram(Le.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(Ze.mode,pr),R||n.drawElements(n.TRIANGLES,de,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),J>0&&(n.uniform1i(Ze.mode,gr),R||n.drawElements(n.TRIANGLES,J,n.UNSIGNED_INT,de*Qe)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),B(`tube`),z(`ribbon`),n.useProgram(Re.program),n.uniform1i(Xe.mode,_r),n.uniform1i(Xe.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,$e),n.uniform1i(Xe.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),R||n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,$e)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null),B(`ribbon`))};return xe(t),{draw(e,t){je(oi(e),t)},drawTyped:je,resize:Se,materialNote:()=>l&&(u?ve?.silkUnavailable()??!1:c)||m&&(u?ve?.rubberUnavailable()??!1:p)||b&&(u?ve?.glassUnavailable()??!1:x||ne().failed)||b&&u&&(ve?.thickUnavailable()??!1)||b&&u&&(ve?.scatterUnavailable()??!1)||u&&(ve?.boxWallUnavailable()??!1)?jn:null}}var yi=1.1868238913561442,bi=1.2566370614359172,$={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:bi,elevation:yi,p:.4,k:.07,heightMode:`gap`,heightMax:1/0,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchSectionLag:300,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowStrength:1,lightSize:10*Math.PI/180,shade:Nt,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,plyMode:`shade`,plyProfile:`wave`,plyGain:10,plyNotch:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,bandThickness:0,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,glassColor:`#ffffff`,glassTint:.5,glassMode:`absorb`,glassHaze:1,glassEdge:5,glassMirror:0,glassGloss:.5,glassSharpness:30,glassEta:1.5,glassDispersion:0,glassSecondGloss:.5,glassSecondWidth:.3,glassDispersionMode:`trt`,glassSecondShift:.35,glassShadowClear:.5,glassCausticGain:1,glassCausticSamples:8,glassCausticBend:1,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:rr,light:{dir:o(bi),elevation:yi}},{width:xi,...Si}=l($),Ci=3e3;function wi(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function Ti(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:Ci},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=wi(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var Ei=4,Di=2**-53;function Oi(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=Ei)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<Di&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function ki(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return ji(s,e,t,n,r,i,a,o);if(c&&a>0)return Ai(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=wi(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function Ai(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function ji(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return Oi(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function Mi(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Ni(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=ki(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,Mi(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<Mi(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var Pi=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},Fi=()=>{let e=$.stretchSectionLag;return typeof e==`number`&&Number.isFinite(e)?e:300},Ii=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,Li=e=>e>0&&e<1?e:$.stretchSmoothDecay,Ri=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap,zi=e=>Number.isFinite(e)?e>0?e:0:Fi();function Bi(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Vi(e,t){if(e.length<1||e[0]!==0||e[e.length-1]!==t)return!1;for(let t=1;t<e.length;t+=1){let n=e[t];if(!Number.isInteger(n)||!(n>e[t-1]))return!1}return!0}function Hi(e,t,n,r,i){let a=t.length,o=Array.from(e.order),s=Vi(e.starts,o.length)?Array.from(e.starts):Array.from({length:o.length+1},(e,t)=>t),c=[];for(let e=0;e+1<s.length;e+=1){let t=o.slice(s[e],s[e+1]).filter(e=>Number.isInteger(e)&&e>=0&&e<a);t.sort((e,t)=>e-t),c.push(t)}n<Bi(t)||c.reverse();let l=[],u=[],d=[];for(let e of c){let i=0;for(let a of e)i+=Math.abs(t[a]-n)*r[a];Number.isFinite(i)&&i>0?(l.push(e),u.push(i)):d.push(...e)}let f=new Float64Array(l.length);for(let e=1;e<l.length;e+=1)f[e]=e*i;return{lines:l,L0:Float64Array.from(u),starts:f,still:d}}function Ui(e,t,n,r,i){let a=Float64Array.from(t);if(!(r>0))return{stretches:a,done:!1};for(let t of e.still)a[t]=n;let o=!0;for(let s=0;s<e.lines.length;s+=1){let c=r-e.starts[s];if(!(c>0)){o=!1;continue}let l=e.L0[s];i.jump(l),i.to(0),i.step(c);let u=e.lines[s];if(i.idle){for(let e of u)a[e]=n;continue}o=!1;let d=1-i.value/l;if(d>=1)for(let e of u)a[e]=n;else if(d>0)for(let e of u)a[e]=t[e]+(n-t[e])*d}return{stretches:a,done:o}}function Wi(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt,{stretches:s,done:c}=Ui(a.plan,a.from,a.to,o,a.probe);c?r(a.from.length,a.to):(a.current=s,e.draw(s,Bi(s),!1),a.frame=requestAnimationFrame(i))};return{play(n){if(t?.to===n)return;let a=e.sections(),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=Ii(e.accel()),u=Li(e.decay()),d=Ri(e.snap()),f=Hi(a,c,n,o,zi(e.lag())),p=new Pi(l,u,d,{value:0}),m=t!==null;t={plan:f,from:c,to:n,probe:p,startedAt:null,frame:null,current:c},m||e.playing(!0),e.reducedMotion()||f.lines.length===0?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Gi(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function Ki(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var qi=e=>Math.min(1,Math.max(0,e)),Ji=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function Yi(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=Ki(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=Ji(i,n,a>0?qi(l/a):1)}return c}let u=o>0;if(u&&s>0)return Xi(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?qi((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=Ji(s,n,g),f=g,d+=m,p+=1}return c}function Xi(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return Oi(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=Ji(n[a],r,i)}),e}function Zi(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Qi(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=Yi(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,Zi(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<Zi(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=Gi(c,n,o,e.speed()),m=Ki(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}var $i=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,ea=e=>e>0&&e<1?e:$.stretchSmoothDecay,ta=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap;function na(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function ra(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}var ia=1024,aa=1e-13,oa=0;function sa(e,t,n,r){let i=0;for(let a=0;a<e.length;a+=1){let o=e[a];i+=Math.abs(t[o]-n)*r[o]}return i}function ca(e,t,n,r,i,a,o,s){let c=ia,l=Ki(r,!1),u=e=>e/c*l,d=a=>(oa+=1,sa(e,Yi(e,t,n,r,a,!1,o,s),n,i)),f=new Float64Array(1025).fill(NaN);f[0]=a,f[c]=0;let p=e=>{let t=f[e];return Number.isNaN(t)&&(t=d(u(e)),f[e]=t),t},m=aa*a,h=0;return{stretches(i){for(;h>0&&p(h)<=i;)--h;let a=h+1;if(!(p(a)<=i)&&a<c){let e=!Number.isNaN(f[h+1]),t=c;for(let n=1;;n=e?n*2:1){let e=Math.min(a+n,c);if(p(e)<=i||e===c){t=e;break}a=e}for(;t-a>1;){let e=a+Math.floor((t-a)/2);p(e)<=i?t=e:a=e}h=t-1}else a>=c&&(h=1023);let l=u(h),g=u(h+1),_=p(h)-i,v=p(h+1)-i,y;if(!(_>0))y=l;else if(!(v<0))y=g;else{let e=0,t=_,n=v,r=l,a=_,o=p(h+1)===0?l:g,s=p(h+1)===0?_:v,c=p(h+1)===0;for(let u=0;u<12;u+=1){let u=s===a?NaN:o-s*(o-r)/(s-a);if(u>l&&u<g||(u=c?l+(g-l)/2:(l*v-g*_)/(v-_)),u>l&&u<g||(u=l+(g-l)/2),u<=l||u>=g)break;let f=d(u),p=f-i;if(f!==0&&(r=o,a=s,o=u,s=p),p<0?(g=u,v=p,n=p,c=f===0,e===-1&&(_/=2),e=-1):(l=u,_=p,t=p,e===1&&(v/=2),e=1),Math.abs(p)<=m)break}if(Math.min(t,-n)<=m)y=t<-n?l:g;else{for(;;){let e=l+(g-l)/2;if(e<=l||e>=g)break;d(e)-i>0?l=e:g=e}y=g}}return Yi(e,t,n,r,y,!1,o,s)}}}function la(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let o=t;if(!o)return;if(o.warp){a(o,o.warp,n);return}if(o.last!==null&&(o.driver.step(n-o.last),o.driver.idle)){r(o.from.length,o.to);return}o.last=n;let s=ra(o.seq,o.from,o.to,o.ex,o.L0-o.driver.value);o.current=s,e.draw(s,na(s),!1),o.frame=requestAnimationFrame(i)},a=(t,n,a)=>{n.startedAt===null&&(n.startedAt=a);let o=a-n.startedAt,s;if(o>0){let e=n.probe;if(e.jump(t.L0),e.to(0),e.step(o),e.idle){r(t.from.length,t.to);return}s=n.solver.stretches(e.value)}else s=Float64Array.from(t.from);t.current=s,e.draw(s,na(s),!1),t.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<na(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=$i(e.accel()),p=ea(e.decay()),m=ta(e.snap()),h=new Pi(f,p,m,{value:Number.isFinite(d)?d:0});h.to(0);let g=e.pull?.()??0,_=e.pullDelay?.()??0,v=(e.speed?.()??$.stretchSpeed)*_/1e3,y=null;if(g>0&&v!==1/0){let e=Float64Array.from(c);for(let t of l)u[t]>0||(e[t]=n);y={solver:ca(l,e,n,u,Float64Array.from(o),d,g,v>0?v:0),probe:new Pi(f,p,m,{value:Number.isFinite(d)?d:0}),startedAt:null}}let b=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:h,last:null,frame:null,current:c,warp:y},b||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function ua(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function da(e){let{zeroCenter:t,viewportWidth:n,viewportHeight:r,panX:i,panY:a,devicePixelRatio:o}=e,s=t!==void 0&&Number.isFinite(t.x)&&Number.isFinite(t.y),c=s?t.x:n/2,l=s?t.y:r/2,u=ua(n/2+i-c,o),d=ua(r/2+a-l,o);return{offsetX:u,offsetY:d,center:{x:u+c,y:d+l}}}function fa(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var pa=Math.PI/4,ma=.8,ha=-Math.SQRT1_2,ga=-Math.SQRT1_2;function _a(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function va(e,t){e.fillStyle=`#000000`,e.fillStyle=t.background;let n=String(e.fillStyle),r=_a(n),i=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(n),a=r??(i?[Number(i[1]),Number(i[2]),Number(i[3])]:[0,0,0]);return`rgb(${Ft([a[0]/255,a[1]/255,a[2]/255,1],Pt(t)).slice(0,3).map(e=>Math.round(e*255)).join(`, `)})`}var ya=256,ba=1.25;function xa(e,t){if(t&&t.front===e)return t;let n=_a(e)??[255,255,255],r=[];for(let e=0;e<ya;e+=1){let t=e/255*ba,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function Sa(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function Ca(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function wa(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function Ta(e,t,n,r,i,a,o){return Sa(e,t,n,a,o)-r*wa(e,t,n,i,a,o)}function Ea(e,t,n,r,i,a,o){return Ca(e,t,n,a,o)-r*wa(e,t,n,i,a,o)}function Da(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??ha,u=n.light?.dir.y??ga,d=n.light?.elevation??pa,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*ma,v=.9*ma;e.globalAlpha=1,e.fillStyle=va(e,n);for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(Ta(s,a,c,l,f,t,1),Ea(s,a,c,u,f,t,1)),e.lineTo(Ta(s,a,c,l,f,t,-1),Ea(s,a,c,u,f,t,-1)),e.lineTo(Ta(s,a,c,l,f,t+1,-1),Ea(s,a,c,u,f,t+1,-1)),e.lineTo(Ta(s,a,c,l,f,t+1,1),Ea(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/ba*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(Sa(s,a,c,t,1),Ca(s,a,c,t,1)),e.lineTo(Sa(s,a,c,t,-1),Ca(s,a,c,t,-1)),e.lineTo(Sa(s,a,c,t+1,-1),Ca(s,a,c,t+1,-1)),e.lineTo(Sa(s,a,c,t+1,1),Ca(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function Oa(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=xa(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:xa(e,i),Da(n,t,a,r,i)}else{n.globalAlpha=1,n.strokeStyle=va(n,a),n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(fa(e),t)},drawTyped:s,resize:o}}var ka=127;function Aa(e){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0},mask:{width:0,height:0,scale:e,data:new Uint8Array}}}function ja(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return Aa(t);let i=e.getImageData(0,0,n,r).data,a=new Uint8Array(n*r),o=n,s=r,c=-1,l=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=ka||(a[e*n+t]=1,o=Math.min(o,t),s=Math.min(s,e),c=Math.max(c,t),l=Math.max(l,e));let u=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>ka},d={width:n,height:r,scale:t,data:a};return c<o||l<s?{inside:u,bounds:{x:0,y:0,w:0,h:0},mask:d}:{inside:u,mask:d,bounds:{x:o/t,y:s/t,w:(c-o+1)/t,h:(l-s+1)/t}}}async function Ma(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?Aa(n):(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),ja(i,n))}function Na(e,t,n,r=`machine`){let i=e.length,a=()=>({order:Int32Array.from({length:i},(e,t)=>t),starts:Int32Array.from({length:i+1},(e,t)=>t)});if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=Fa(i,v,y),O=new Int32Array(i),k=[0],A=0;for(let{c:e}of E)for(let t of Ia(e.members,D,h,v,y))A=Pa(t,r,O,A),k.push(A);return{order:O,starts:Int32Array.from(k)}}function Pa(e,t,n,r){let i=e.length;if(t===`hand`){let t=Math.floor((i-1)/2);for(let i=t;i>=0;--i)n[r++]=e[i];for(let a=t+1;a<i;a+=1)n[r++]=e[a]}else for(let t of e)n[r++]=t;return r}function Fa(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function Ia(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function La(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function Ra(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=La(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var za=2,Ba=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,Va=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/za),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),Ha=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Ua(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=Va(a);if(n=o,r&&Ba(r.key,o))return Ha(r.result);let s=i.find(e=>Ba(e.key,o));if(s)return Ha(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,za);return{stitches:Ra(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&Ba(n,o)&&(r={key:o,result:e}),Ha(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function Wa(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function Ga(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*Wa(o,r)}})}function Ka(e,t,n){return Math.min(t,n*e)}var qa=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),Ja=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),Ya=12,Xa=2e-14;function Za(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<qa.length;r++){let s=qa[r],c=Ja[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function Qa(e,t,n){if(n===0)return e;let[r,i]=Za(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<Ya;n++){let[n,r]=Za(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=Xa*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function $a(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<Ya;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=Xa*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function eo(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=Qa(a,t,n),s=t.n-1,c=Array(t.n),l=Math.abs(r),u=n===0||l===0?0:Math.sqrt(Math.max(0,o*o-i*i)),d=n===0||l===0?0:$a(u/l,t.work);if(n===0||l!==0&&!(d>0)){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*Wa(a,t.p)}}return no(e,c,t.tau)}if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*Wa(a,t.p)}}return no(e,c,t.tau)}let f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*Wa(u,t.p)}}return no(e,c,t.tau)}function to(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function no(e,t,n){return to(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function ro(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=Qa(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{to(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)},f=Math.abs(a),p=i===0||f===0?0:Math.sqrt(Math.max(0,c*c-o*o)),m=i===0||f===0?0:$a(p/f,t.work);if(i===0||f!==0&&!(m>0)){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*Wa(r,t.p))}d();return}if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*Wa(a,t.p))}d();return}let h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*Wa(c,t.p))}d()}var io=64,ao=256,oo=4,so=16,co=Math.sin(Math.PI/18),lo=new Float64Array(io),uo=new Float64Array(io);function fo(){let e=io/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=io;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=io*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);lo[t]=(1-e)*.5,lo[63-t]=(1+e)*.5,uo[t]=r,uo[63-t]=r}}fo();function po(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<io;n++){let o=lo[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*uo[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=io),[r,i]}var mo=new Map;function ho(e){let t=mo.get(e);if(t)return t;let n=new Float64Array(ao),r=new Float64Array(ao);for(let t=0;t<ao;t++){let i=t/255;n[t]=oo*i*i,r[t]=po(n[t],e)[0]}let i={p:e,r:n,length:r};return mo.set(e,i),i}function go(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function _o(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?po(s,r,t.work)[0]:t.L0/o)*(1+n),l=go(ho(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,so);e++){let[e,n]=po(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function vo(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/co),a=Math.min(f,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(f,a):Math.min(f,Math.max(0,a+o))}function yo(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return Ga(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=_o(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return Ga(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=vo(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*Wa(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function bo(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:_o(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=vo(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*Wa(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var xo={shape:M,shapeInto:N},So=new Map([[`bezier`,xo],[`catenary`,{shape:eo,shapeInto:ro}],[`arch`,{shape:yo,shapeInto:bo}],[`wire`,{shape:We,shapeInto:Ge,boundInto:$e}]]);function Co(e){return So.get(e)??xo}function wo(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var To=1e-12;function Eo(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>To*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var Do=33,Oo=Ua(Ma),ko=null,Ao=0;function jo(e){return $}function Mo(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var No=new WeakMap;function Po(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var Fo;function Io(e){Fo=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Lo=(e,t,n)=>({x:e.x+t,y:e.y+n});function Ro(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function zo(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function Bo(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function Vo(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function Ho(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function Uo(e){return{smax:Ho(e.wireSmax,1,P),lref:Vo(e.wireLref,80),alignScale:Vo(e.alignScale,60)}}var Wo=/^#[0-9a-f]{6}$/i;function Go(e){return Vo(e.bandWidth,$.bandWidth)}function Ko(e){return e.section===`band`}function qo(e){return Ko(e)?0:e.width}function Jo(e){return Ko(e)?Go(e):e.width}function Yo(e){return e.stretchMode!==`absolute`}function Xo(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:$.stretchUnit}function Zo(e,t,n,r){if(Yo(r)||e===0)return e;let i=k(t,n),a=e*Xo(r)/i;return Number.isFinite(a)&&a>0?a:0}function Qo(e,t,n){return Math.max(2,Zo(2,e,t,n))}function $o(e){return i(e.pitch,qo(e),e.elevation,e.shadowRatio)}function es(e,t,n){if(t.heightMode!==`free`)return Ka(e,n,t.k);let r=t.k*e;if(!Number.isFinite(r)||!(r>0))return 0;let i=t.heightMax;return typeof i!=`number`||Number.isNaN(i)?r:Math.max(0,Math.min(r,i))}function ts(e,t){let n=new Float64Array(e.length);if(!Yo(t)){let e=Xo(t);return n.fill(e>0?e:0)}let r=$o(t);for(let i=0;i<e.length;i+=1){let a=e[i],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[i]=k(a,es(o,t,r))}return n}function ns(e){let t=Co(e.model)===Co(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:$.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:$.gravityBeta,i=2*Math.PI,a=Uo(e);return{...e,stretch:zo(e.stretch,2),stretchMode:Yo(e)?`ratio`:`absolute`,stretchUnit:Xo(e),twist:zo(e.twist,d),cameraTilt:zo(e.cameraTilt,d),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:$.cameraTurn,cameraZoom:Vo(e.cameraZoom,$.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:$.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:$.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:$.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:$.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:$.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:$.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:$.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:$.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:zo(e.align,1),phiMax:zo(e.phiMax,f),phiRef:Bo(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:$.lightAzimuth,stretchDuration:Vo(e.stretchDuration,$.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`||e.stretchTiming===`section`?e.stretchTiming:`speed`,stretchSpeed:Vo(e.stretchSpeed,$.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:$.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:$.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:$.stretchSmoothSnap,stretchSectionLag:Number.isFinite(e.stretchSectionLag)?e.stretchSectionLag:$.stretchSectionLag,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:Vo(e.stretchLineDuration,$.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,wireSmax:a.smax,wireLref:a.lref,alignScale:a.alignScale,section:Ko(e)?`band`:`round`,bandWidth:Go(e),bandFront:Wo.test(e.bandFront)?e.bandFront:$.bandFront,bandBack:Wo.test(e.bandBack)?e.bandBack:$.bandBack,bandThickness:Number.isFinite(e.bandThickness)?e.bandThickness:$.bandThickness,material:e.material===`silk`||e.material===`rubber`||e.material===`glass`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:$.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:$.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:$.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):$.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):$.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:$.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:$.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:$.rubberRim,glassColor:Wo.test(e.glassColor)?e.glassColor:$.glassColor,glassTint:Number.isFinite(e.glassTint)?e.glassTint:$.glassTint,glassMode:e.glassMode===`scatter`?`scatter`:`absorb`,glassHaze:Number.isFinite(e.glassHaze)?Math.max(0,e.glassHaze):$.glassHaze,glassEdge:Number.isFinite(e.glassEdge)?e.glassEdge:$.glassEdge,glassMirror:Number.isFinite(e.glassMirror)?e.glassMirror:$.glassMirror,glassGloss:Number.isFinite(e.glassGloss)?e.glassGloss:$.glassGloss,glassSharpness:Number.isFinite(e.glassSharpness)?e.glassSharpness:$.glassSharpness,glassEta:Number.isFinite(e.glassEta)?e.glassEta:$.glassEta,glassDispersion:Number.isFinite(e.glassDispersion)?e.glassDispersion:$.glassDispersion,glassSecondGloss:Number.isFinite(e.glassSecondGloss)?e.glassSecondGloss:$.glassSecondGloss,glassSecondWidth:Number.isFinite(e.glassSecondWidth)?e.glassSecondWidth:$.glassSecondWidth,glassDispersionMode:e.glassDispersionMode===`shift`?`shift`:e.glassDispersionMode===`plate`?`plate`:`trt`,glassSecondShift:Number.isFinite(e.glassSecondShift)?e.glassSecondShift:$.glassSecondShift,glassShadowClear:Number.isFinite(e.glassShadowClear)?e.glassShadowClear:$.glassShadowClear,glassCausticGain:Number.isFinite(e.glassCausticGain)?e.glassCausticGain:$.glassCausticGain,glassCausticSamples:Number.isFinite(e.glassCausticSamples)?Math.max(1,Math.round(e.glassCausticSamples)):$.glassCausticSamples,glassCausticBend:Number.isFinite(e.glassCausticBend)?e.glassCausticBend:$.glassCausticBend,plyMode:e.plyMode===`normal`?`normal`:`shade`,plyProfile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,plyGain:Number.isFinite(e.plyGain)?e.plyGain:$.plyGain,plyNotch:Number.isFinite(e.plyNotch)?e.plyNotch:$.plyNotch,light:{dir:o(e.lightAzimuth),elevation:e.elevation}}}function rs(e,t,n,r,i,a,o){let s={dir:n.light.dir,elevation:n.elevation},c=$o(n),l=zo(n.phiMax,f),u=zo(n.twist,d),p=zo(n.align,1),m=Uo(n),h=2*Math.PI,g={alpha:(n.gravityAlpha%h+h)%h,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let d=0;d<t.length;d+=1){let f=t[d],h=zo(i===void 0?n.stretch:i[d],2);if(o){let e=d*4;if(o.valid[d]===1&&Object.is(o.e[d],h)&&Object.is(o.ends[e],f.a.x)&&Object.is(o.ends[e+1],f.a.y)&&Object.is(o.ends[e+2],f.b.x)&&Object.is(o.ends[e+3],f.b.y))continue;o.valid[d]=1,o.e[d]=h,o.ends[e]=f.a.x,o.ends[e+1]=f.a.y,o.ends[e+2]=f.b.x,o.ends[e+3]=f.b.y}let _=Math.hypot(f.b.x-f.a.x,f.b.y-f.a.y),v=e.start[d],y=es(_,n,c),b=Zo(h,f,y,n),x=Yo(n)?void 0:Qo(f,y,n);r.shapeInto(f,{e:b,H:y,p:n.p,n:Do,phiMax:l,eRef:Bo(n.phiRef),tau:a===void 0?u*wo(f):a,twist:u,gravity:g,align:p,...m,...x===void 0?{}:{eMax:x}},e.center,v*3);let S=e.start[d+1]-v,C=Math.tan(s.elevation);for(let t=0;t<S;t+=1){let n=v+t,r=v+(t===0?0:t-1),i=v+(t===S-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],c=Math.hypot(a,o),l=-o/c,u=a/c;e.normal[n*2]=l,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/C;e.shadow[n*2]=d-s.dir.x*t,e.shadow[n*2+1]=f-s.dir.y*t}e.lightSide[n]=s.dir.x*l+s.dir.y*u}e.band&&e.bandNormal&&Eo(e.center,v,S,f,e.band,e.bandNormal)}}function is(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function as(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,qo(e),e.shadowRatio,e.k,e.heightMode,e.heightMax,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function os(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function ss(){let e,t,n,r,i=0,a=e=>{let t=e*Do;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(o,s,c){e&&t&&n&&e.count===o.length||(e=a(o.length),t=a(o.length),n={e:new Float64Array(o.length),ends:new Float64Array(o.length*4),valid:new Uint8Array(o.length)},r=void 0);let l=as(s);os(r,l)||n.valid.fill(0),r=l,Ko(s)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=o.length;t+=1)e.start[t]=t*Do;return rs(e,o,s,Co(s.model),c,void 0,n),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal)),t},get allocations(){return i}}}function cs(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function ls(e,t,n,r,i){let a=e.length*Do,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*Do;return rs(o,e,t,n,r,i),cs(o)}async function us(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=ns(e),{light:a,...o}=i,{stitches:s,bounds:c}=await Oo.get(i);ko?.builds!==Oo.builds&&(ko={builds:Oo.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=ko.orders[u];d||(d=Na(s,i.angle,i.pitch,u),ko.orders[u]=d,Ao+=1);let f=d.order,p=No.get(r),m=p?.itemsStage??ss(),h=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>zo(e,2)):void 0,g=m.build(s,i,h),_=ls(s,i,Co(i.model),s.map(()=>0),0),v=Ro(window.devicePixelRatio),y=window.innerWidth,b=window.innerHeight,x={cssW:y,cssH:b,dpr:v,scale:1},S=i.cameraTilt,C=i.cameraTurn,w=i.cameraZoom,T=p;if(!T){let e,t=!0,n=!1;try{e=vi(r,x),n=!0}catch{e=Oa(r,x),t=!1}T={renderer:e,webgl:t,viewportWidth:y,viewportHeight:b,dpr:v,rendererBuilds:1,itemsStage:m,localStitches:s,resolved:i,typedItems:g,offsetX:0,offsetY:0,...n?{mesh:!0}:{}},No.set(r,T)}let E=T.webgl?S:0,D=T.webgl?C:0,O=T.webgl?w:1,k=E!==0||D!==0||O!==1,A=T.mesh!==void 0;T.renderer.resize(x),p&&(T.viewportWidth=y,T.viewportHeight=b,T.dpr=v);let{offsetX:j,offsetY:M,center:N}=da({zeroCenter:Po(_,Jo(i)),viewportWidth:y,viewportHeight:b,panX:i.cameraPanX,panY:i.cameraPanY,devicePixelRatio:window.devicePixelRatio}),P=k||A?{tilt:E,turn:D,zoom:O,center:N}:void 0,ee={x:c.x+j,y:c.y+M,w:c.w,h:c.h},F=s.map(({a:e,b:t})=>({a:Lo(e,j,M),b:Lo(t,j,M)}));is(g,j,M);let I=cs(g);r.style.position=`fixed`,r.style.left=`0px`,r.style.top=`0px`,r.style.transform=`none`;let L={bounds:ee,offsetX:j,offsetY:M,params:o,stitches:F,items:I,display:{scale:1,dpr:v,cssW:y,cssH:b},view:{tilt:E,turn:D,zoom:O,center:N},stitchBuilds:Oo.builds,stitchOrder:f,stitchSectionStarts:d.starts,stitchOrderBuilds:Ao,rendererBuilds:T.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:m.allocations,wireClamps:_e().clamps,wireUnconverged:_e().unconverged,peek:()=>cs(g),stretches:()=>ms(T),...Fo?{setCamera:Fo}:{}};return T.stretches=h,T.localStitches=s,T.resolved=i,T.typedItems=g,T.offsetX=j,T.offsetY=M,T.view=P,T.snapshot=L,T.renderer.drawTyped(g,Mo(T,l(i))),window.__textweaving=L,L}function ds(e){let t=e??document.querySelector(`canvas`);if(t)return No.get(t)?.webgl}function fs(e){let t=e??document.querySelector(`canvas`);return t?No.get(t)?.renderer.materialNote?.()??null:null}function ps(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=No.get(n);r?.snapshot&&(r.snapshot.playing=e)}function ms(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function hs(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=No.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:zo(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>zo(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches),is(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,Mo(a,l(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.peek=()=>cs(a.typedItems),t&&(o.items=cs(a.typedItems)),o}var gs=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchSectionLag.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowStrength.lightSize.heightMode.shadowRatio.k.heightMax.shade.ply.plyPitch.plySlope.shininess.plyContrast.plyMode.plyProfile.plyGain.plyNotch.step.mergeGap.minLen.alignScale.section.bandWidth.bandFront.bandBack.bandThickness.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.glassColor.glassTint.glassMode.glassHaze.glassEdge.glassMirror.glassGloss.glassSharpness.glassEta.glassDispersionMode.glassDispersion.glassSecondGloss.glassSecondWidth.glassSecondShift.glassShadowClear.glassCausticGain.glassCausticSamples.glassCausticBend.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),_s=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],vs=[[`together`,`同時`],[`sequence`,`順番`]],ys=[[`absolute`,`絶対値`],[`ratio`,`割合`]],bs=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`],[`section`,`区画の時差`]],xs=[[`machine`,`機械`],[`hand`,`手`]],Ss=[[`gap`,`隙間`],[`free`,`自由`]],Cs=[[`round`,`丸い線`],[`band`,`帯`]],ws=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`],[`glass`,`ガラス`]],Ts=[[`shade`,`明るさの縞`],[`normal`,`法線の揺らぎ`]],Es=[[`trt`,`跳ね返りの屈折`],[`shift`,`照りのずらし`],[`plate`,`平行な板`]],Ds=[[`absorb`,`吸収`],[`scatter`,`散乱`]],Os=[[`wave`,`なだらか`],[`notch`,`切れ込み`],[`scallop`,`丸い膨らみ`]],ks=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`,`lightSize`]),As=e=>Number.isFinite(e)&&e>0;function js(e){let t=Co(e.model);return _s.find(([e])=>Co(e)===t)?.[0]??`bezier`}var Ms=({params:e})=>js(e)===`wire`&&As(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,Ns=e=>Ms(e)??(As(e.params.twist)||As(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),Ps=e=>Ms(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),Fs=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,Is=e=>e.section===`band`,Ls=e=>e.material===`silk`,Rs=e=>e.material===`rubber`,zs=e=>e.material===`glass`,Bs=e=>Ls(e)?`silk`:Rs(e)?`rubber`:zs(e)?`glass`:`standard`,Vs=e=>e.glassDispersionMode===`shift`?`shift`:e.glassDispersionMode===`plate`?`plate`:`trt`,Hs=e=>e.glassMode===`scatter`?`scatter`:`absorb`,Us=e=>e.heightMode===`free`?`free`:`gap`,Ws=e=>e.stretchOrder!==`together`,Gs=e=>Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,Ks=e=>Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,qs=e=>e.stretchMode!==`absolute`,Js=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`||e.stretchTiming===`section`?e.stretchTiming:`speed`,Ys=e=>Js(e)===`speed`,Xs=e=>Js(e)===`smooth`,Zs=`時間の決め方をなめらか以外にすると効く`,Qs=e=>Js(e)===`section`,$s=`時間の決め方を区画の時差以外にすると効く`,ec=({params:e})=>Xs(e)||Qs(e)?null:`時間の決め方をなめらかか区画の時差にすると効く`,tc={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,plyMode:`round`,plyProfile:`round`,plyGain:`round`,plyNotch:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},nc=(e,t)=>{let n=tc[e];return n===void 0||n===(Is(t)?`band`:`round`)},rc=e=>Fs(e)??(As(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),ic=e=>rc(e)??(e.params.plyMode===`normal`?null:`撚りの表し方を法線の揺らぎにすると効く`),ac=e=>ic(e)??(e.params.plyProfile===`notch`?null:`溝の形を切れ込みにすると効く`),oc=e=>Fs(e)??(Rs(e.params)?null:`素材をゴムにすると効く`),sc=e=>Fs(e)??(zs(e.params)?null:`素材をガラスにすると効く`),cc=e=>sc(e)??(Vs(e.params)===`shift`?null:`分光の作り方を照りのずらしにすると効く`),lc=e=>sc(e)??(Is(e.params)?null:`帯のガラスでだけ効く`),uc=e=>lc(e)??(Hs(e.params)===`scatter`?null:`ガラスの方式を散乱にすると効く`),dc=e=>e.webgl!==!1&&zs(e.params)&&Is(e.params)?`ガラスでは効かない(ガラスの色が効く)`:null,fc=e=>sc(e)??(Is(e.params)?`丸い線のガラスの影でだけ効く`:null),pc=e=>Fs(e)??(Is(e.params)?null:`帯のときだけ効く`),mc=e=>Fs(e)??(Ls(e.params)?null:`素材をシルク・サテンにすると効く`),hc=Fs,gc=2*Math.PI,_c=5,vc=1e3,yc=e=>Math.min(Math.PI/2,Math.max(0,e)),bc=e=>{let t=(e%gc+gc)%gc;return t<gc?t:0},xc={gravityBeta:Ms,twist:({params:e})=>js(e)!==`wire`||As(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:Ns,gravityAlpha:Ps,wireSmax:Ms,wireLref:Ms,alignScale:e=>Ns(e)??(As(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=js(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:As(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=js(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},ply:Fs,lightSize:Fs,plyPitch:rc,plySlope:rc,plyContrast:rc,plyMode:rc,plyProfile:ic,plyGain:ic,plyNotch:ac,shininess:e=>Fs(e)??`標準の素材には照りが無いので効かない(シルク・ゴムは素材の鋭さのつまみが効く)`,material:Fs,heightMax:({params:e})=>Us(e)===`free`?null:`高さの決め方を自由にすると効く`,shadowRatio:({params:e})=>Us(e)===`gap`?null:`高さの決め方を隙間にすると効く`,silkGloss:mc,silkSharpness:mc,silkShift:mc,silkStreak:mc,silkDim:mc,rubberGloss:oc,rubberSharpness:oc,rubberRim:oc,glassColor:lc,bandFront:dc,bandBack:dc,glassTint:sc,glassMode:lc,glassHaze:uc,glassEdge:sc,glassMirror:sc,glassGloss:sc,glassSharpness:sc,glassEta:sc,glassDispersion:sc,glassSecondGloss:sc,glassSecondWidth:sc,glassDispersionMode:sc,glassSecondShift:cc,glassShadowClear:sc,glassCausticGain:fc,glassCausticSamples:fc,glassCausticBend:fc,bandThickness:pc,cameraDragTilt:hc,cameraDragTurn:hc,cameraWheelZoom:hc,cameraFov:Fs,threadWiden:Fs,threadMinRadius:Fs,stretchDuration:({params:e})=>Qs(e)?$s:Js(e)===`duration`?Ws(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>Qs(e)?$s:Js(e)===`duration`?Ws(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>Qs(e)?$s:Ys(e)?null:Xs(e)?Gs(e)>0?Ks(e)>0?null:`引かれの遅れを 0 より大きくすると効く`:`引かれの強さを 0 より大きくすると効く`:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>Qs(e)?$s:Xs(e)||Ws(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>Qs(e)?$s:Xs(e)?Zs:null,stretchPull:({params:e})=>Qs(e)?$s:Xs(e)||Ws(e)?null:`伸びの順を順番にするか、時間の決め方をなめらかにすると効く`,stretchPullDelay:({params:e})=>Qs(e)?$s:!Xs(e)&&!Ws(e)?`伸びの順を順番にすると効く`:Gs(e)>0?null:`引かれの強さを 0 より大きくすると効く`,stretchSmoothAccel:ec,stretchSmoothDecay:ec,stretchSmoothSnap:ec,stretchSectionLag:({params:e})=>Qs(e)?null:`時間の決め方を区画の時差にすると効く`,stretchUnit:({params:e})=>qs(e)?`伸びの測り方を絶対値にすると効く`:null},Sc={shade:e=>e.webgl!==!1&&zs(e.params)?`ガラスの糸の陰影には効かない(影には効く)`:null,material:e=>Ls(e.params)||Rs(e.params)||zs(e.params)?e.materialNote??null:null,glassDispersionMode:e=>e.webgl!==!1&&zs(e.params)&&!Is(e.params)&&Vs(e.params)===`plate`?`平行な板は帯のときだけ。丸い線では跳ね返りの屈折(trt)と同じに描く`:null,stretchSpeed:e=>Xs(e.params)?`なめらかでは全体の時間に効かず、重なりの具合に効く(伸びの速さ × 遅れ)`:null};function Cc(e,t){return ks.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function wc(e,t){if(typeof $[e]!=`number`)return t;let n=Number(t);return ks.has(e)?n*Math.PI/180:n}function Tc(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function Ec(e,t=e.value){return Number(t).toFixed(Tc(e.step))}function Dc(e,t){let n=Math.max(Ec(e,e.min).length,Ec(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function Oc(e,t,n=e.value){t&&(t.textContent=Ec(e,n))}function kc(){return r(``,jo(window.location.search))}function Ac(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function jc(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function Mc(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function Nc(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function Pc(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 0c51927 2026-11-28 17:54`}async function Fc(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),Nc(),Pc();let n=e??document.querySelector(`canvas`)??void 0,i=jo(window.location.search),a=r(window.location.search,i),o=null,s=!1,c=!1,l=document.querySelector(`select[data-param="model"]`);if(!l)throw Error(`Missing control for model`);let d=Co(``);for(let[e,t]of _s)(e===`bezier`||Co(e)!==d)&&l.add(new Option(t,e));let f=document.querySelector(`select[data-param="section"]`);if(!f)throw Error(`Missing control for section`);for(let[e,t]of Cs)f.add(new Option(t,e));let p=document.querySelector(`select[data-param="material"]`);if(!p)throw Error(`Missing control for material`);for(let[e,t]of ws)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="plyMode"]`);if(!m)throw Error(`Missing control for plyMode`);for(let[e,t]of Ts)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="plyProfile"]`);if(!h)throw Error(`Missing control for plyProfile`);for(let[e,t]of Os)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="glassDispersionMode"]`);if(!g)throw Error(`Missing control for glassDispersionMode`);for(let[e,t]of Es)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="glassMode"]`);if(!_)throw Error(`Missing control for glassMode`);for(let[e,t]of Ds)_.add(new Option(t,e));let v=document.querySelector(`select[data-param="stretchOrder"]`);if(!v)throw Error(`Missing control for stretchOrder`);for(let[e,t]of vs)v.add(new Option(t,e));let y=document.querySelector(`select[data-param="stretchMode"]`);if(!y)throw Error(`Missing control for stretchMode`);for(let[e,t]of ys)y.add(new Option(t,e));let b=document.querySelector(`select[data-param="stretchTiming"]`);if(!b)throw Error(`Missing control for stretchTiming`);for(let[e,t]of bs)b.add(new Option(t,e));let x=document.querySelector(`select[data-param="heightMode"]`);if(!x)throw Error(`Missing control for heightMode`);for(let[e,t]of Ss)x.add(new Option(t,e));let S=document.querySelector(`select[data-param="stitchStyle"]`);if(!S)throw Error(`Missing control for stitchStyle`);for(let[e,t]of xs)S.add(new Option(t,e));let C=document.querySelector(`input[data-param="stretch"]`);if(!C)throw Error(`Missing control for stretch`);C.max=`2`;let w=document.querySelector(`input[data-param="cameraFov"]`);if(!w)throw Error(`Missing control for cameraFov`);w.max=`60`;let T=new Map,E=new Map;for(let e of gs){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);T.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(E.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&Dc(t,n))}let D=new Map;for(let e of gs){if(!xc[e]&&!Sc[e])continue;let t=T.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),D.set(e,n)}let O=new Map;for(let e of Object.keys(tc)){let t=T.get(e);O.set(e,t.closest(`.control`)??t.parentElement)}let k=new Set([...O.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),A=()=>{for(let[e,t]of O)t.hidden=!nc(e,a);for(let e of k){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},j=()=>{A();let e={params:a,webgl:ds(n),materialNote:fs(n)};for(let[t,n]of D){let r=xc[t]?.(e)??null,i=T.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??Sc[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},M=()=>{for(let e of gs){let t=e===`stretchOrder`?Ws(a)?`sequence`:`together`:e===`stretchMode`?qs(a)?`ratio`:`absolute`:e===`stretchTiming`?Js(a):e===`material`?Bs(a):e===`glassDispersionMode`?Vs(a):e===`glassMode`?Hs(a):e===`heightMode`?Us(a):Cc(e,a[e]),n=T.get(e);n.value=t;let r=E.get(e);n instanceof HTMLInputElement&&n.type===`range`?Oc(n,r):r&&(r.textContent=n.value)}},N=null,P=[],ee=null,F=()=>{let e=u(a,i),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===ee)return;let n=performance.now(),r=P.length<_c?n:P[0]+vc;if(r>n)N===null&&(N=setTimeout(()=>{N=null,F()},r-n));else{N!==null&&(clearTimeout(N),N=null),P.push(n),P.length>_c&&P.shift();try{history.replaceState(null,``,t),ee=t}catch{}}},I=e=>{C.value=String(e),Oc(C,E.get(`stretch`),e)},L=null,R=Ti({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>ps(e,n),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},I(e),j(),hs(e,t,n)},finish:e=>{a={...a,stretch:e},F()}}),z=Ni({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:$.stretchLineDuration,pull:()=>Gs(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(L=null),ps(e,n)},draw:(e,t,r)=>{L=r?null:e,a={...a,stretch:t},I(t),j(),hs(t,r,n,r?void 0:e)},finish:e=>{L=null,a={...a,stretch:e},F()}}),B=Qi({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ts(e,ns(a)):[]},speed:()=>ns(a).stretchSpeed,together:()=>!Ws(a),pull:()=>Gs(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(L=null),ps(e,n)},draw:(e,t,r)=>{L=r?null:e,a={...a,stretch:t},I(t),j(),hs(t,r,n,r?void 0:e)},finish:e=>{L=null,a={...a,stretch:e},F()}}),te=la({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ts(e,ns(a)):[]},accel:()=>ns(a).stretchSmoothAccel,decay:()=>ns(a).stretchSmoothDecay,snap:()=>ns(a).stretchSmoothSnap,pull:()=>Gs(a),pullDelay:()=>Ks(a),speed:()=>ns(a).stretchSpeed,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(L=null),ps(e,n)},draw:(e,t,r)=>{L=r?null:e,a={...a,stretch:t},I(t),j(),hs(t,r,n,r?void 0:e)},finish:e=>{L=null,a={...a,stretch:e},F()}}),ne=Wi({value:()=>a.stretch,sections:()=>{let e=window.__textweaving;return{order:e?.stitchOrder??[],starts:e?.stitchSectionStarts??[0]}},rates:()=>{let e=window.__textweaving?.stitches;return e?ts(e,ns(a)):[]},accel:()=>ns(a).stretchSmoothAccel,decay:()=>ns(a).stretchSmoothDecay,snap:()=>ns(a).stretchSmoothSnap,lag:()=>ns(a).stretchSectionLag,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(L=null),ps(e,n)},draw:(e,t,r)=>{L=r?null:e,a={...a,stretch:t},I(t),j(),hs(t,r,n,r?void 0:e)},finish:e=>{L=null,a={...a,stretch:e},F()}}),V={play(e){Qs(a)?ne.play(e):Xs(a)?te.play(e):Ys(a)?B.play(e):Ws(a)?z.play(e):R.play(e)},stop(){R.stop(),z.stop(),B.stop(),te.stop(),ne.stop(),L=null}},H=e=>{V.stop(),a={...a,...e},G(!1)},re=[];Io(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);re.push(t),H(n)}));let ie=()=>{let e=ds(n);return e===!0&&hc({params:a,webgl:e})===null},ae=e=>{Number.isFinite(e)&&e>0&&H({cameraZoom:e})},U=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&ie())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=ie()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){H({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!ie())return;H({cameraTilt:yc(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:bc(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(ie()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}H(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!ie())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;ae(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},W=!1,oe=async e=>{c=!1,W=!1,s=!0;let t=a,r=re;re=[];try{e&&F(),await us(t,n,L??void 0),n?.setAttribute(`aria-label`,Ac(t.text)),j()}finally{s=!1;for(let e of r)e();c&&G(W)}},G=(e=!0)=>{c=!0,e&&(W=!0),o!==null||s||(o=requestAnimationFrame(async()=>{o=null,await oe(W)}))};for(let e of gs)T.get(e).addEventListener(`input`,t=>{V.stop();let n=t.currentTarget;a={...a,[e]:wc(e,n.value)},e===`background`&&jc(a.background);let r=E.get(e);n instanceof HTMLInputElement&&n.type===`range`?Oc(n,r):r&&(r.textContent=n.value),j(),G()}),T.get(e).addEventListener(`change`,F);let K=document.querySelector(`[data-stretch-to="max"]`),se=document.querySelector(`[data-stretch-to="min"]`);if(!K||!se)throw Error(`Missing stretch animation buttons`);K.addEventListener(`click`,()=>V.play(2)),se.addEventListener(`click`,()=>V.play(0));let ce=document.querySelector(`[data-reset]`);if(!ce)throw Error(`Missing reset button`);ce.addEventListener(`click`,()=>{V.stop(),a=kc(),jc(a.background),M(),j(),G()}),n&&U(n),window.addEventListener(`resize`,()=>G()),Mc(window,()=>G()),jc(a.background),M(),j(),await oe(!1)}await Fc();