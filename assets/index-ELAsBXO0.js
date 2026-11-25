(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]);function n(n,r){let i=e(r),a=new URLSearchParams(n.startsWith(`?`)?n.slice(1):n);for(let e of Object.keys(r)){if(t.has(String(e))||!a.has(String(e)))continue;let n=a.get(String(e));if(n===null)continue;let o=r[e];if(typeof o==`string`)i[e]=n;else if(typeof o==`number`&&n.trim()!==``){let t=Number(n);Number.isFinite(t)&&(i[e]=t)}}return i}function r(e,t,n,r){return r*(e-t)*Math.tan(n)}var i=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function a(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...i[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function o(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function s(e,t,n){let r=o(e),i=o(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function c(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,...e.plyMode===`normal`?{plyNormal:{profile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,gain:e.plyGain,notch:e.plyNotch}}:{},light:{dir:a(e.lightAzimuth),elevation:e.elevation,...e.lightSize!==0&&e.lightSize!==void 0?{size:e.lightSize}:{}},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:e.material===`glass`?{material:{name:`glass`,tint:e.glassTint,edge:e.glassEdge,mirror:e.glassMirror,gloss:e.glassGloss,sharpness:e.glassSharpness,eta:e.glassEta,dispersion:e.glassDispersion,secondGloss:e.glassSecondGloss,secondWidth:e.glassSecondWidth,dispersionMode:e.glassDispersionMode,secondShift:e.glassSecondShift,shadowClear:e.glassShadowClear,causticGain:e.glassCausticGain,causticSamples:e.glassCausticSamples,causticBend:e.glassCausticBend}}:{},shadow:{strength:e.shadowStrength},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:s(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:s(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function l(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var u=Math.PI/2,d=Math.PI/2,f=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),p=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),m=12,h=2e-14,g=new Float64Array(2),_=1e8,v=.001;function y(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);g[0]+=o*p,s&&p>0&&(g[1]+=o*((t*c*r*l+n*l*l)/p))}var b=new Float64Array(16),x=new Float64Array(16);for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)b[2*e+n]=.5*(1+t*f[e]),x[2*e+n]=p[e]*.5;var S=new Float64Array(16),C=new Float64Array(16),w=1e-4;function T(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(v,s/(c*r));if(!(l<_))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*f[e]);S[2*e+n]=o+l*Math.sinh(r),C[2*e+n]=p[e]*.5*l*d*Math.cosh(r)}return!0}function E(e,t,n,r,i,a,o,s,c){g[0]=0,g[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)y(e,t,n,r,i,o[c],s[c],a)}function D(e,t,n){return E(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,b,x,n),g[0]}function O(e,t){return D(e,t)}function k(e,t,n,r,i){let a=4*t.H/3;if(n===0&&!(r>0))return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?D(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=T(o,s,u,r,i),f=!1;for(let e=0;e<m;e++){E(o,s,u,r,i,!0,d?S:b,d?C:x,t.work),t.work&&(t.work.newton+=1);let e=g[0]-l;if(!f&&Math.abs(e)<=w*l)f=!0,d=T(o,s,u,r,i);else if(Math.abs(e)<=h*l)break;let n=u-e/g[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function A(e,t){let n=e===0?0:Math.min(d,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(d,n):Math.min(d,Math.max(0,n+t.tau))}function j(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=A(n,t),i=Math.sin(r),a=Math.cos(r),o=k(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function M(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=A(i,t),o=Math.sin(a),s=Math.cos(a),c=k(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var N=.45,P=.0025,F=.3,I=.1,ee=1e-12,L={alpha:Math.PI/2,beta:0},te=12,R=2e-13,z=1e-10,B=16384,ne=16384,V=1024,H={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},U=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],W=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],G=U.length*2,K=new Float64Array(G),re=new Float64Array(G),q=new Float64Array(G),J=new Float64Array(G);for(let e=0,t=0;e<U.length;e++)for(let n of[-1,1]){let r=.5*(1+n*U[e]);K[t]=W[e]*.5,re[t]=6*r*(1-r),q[t]=3*(1-2*r),J[t]=32*r*(1-r)*(1-2*r),t+=1}var Y=new Float64Array(33),ie=new Float64Array(33),ae=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;Y[e]=3*n-2*n*t,ie[e]=3*t*(1-t),ae[e]=16*n*(1-t)*(1-t)}var oe=new Float64Array(G),se=new Float64Array(G),ce=new Float64Array(G),le=new Float64Array(G),ue=new Float64Array(G),de=new Float64Array(G),fe=new Float64Array(G),pe=new Float64Array(G),me=0,he=0;function ge(){return{clamps:me,unconverged:he}}function _e(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ve(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function ye(e){let{a:t,b:n}=_e(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function be(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var xe=e=>e*e*e*(e*(e*6-15)+10);function Se(e,t){let n=Math.floor(e),r=Math.floor(t),i=xe(e-n),a=xe(t-r),o=be(n,r),s=be(n+1,r),c=be(n,r+1),l=be(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function Ce(e,t){let n=ye(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=Se(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var we=e=>Number.isFinite(e)&&e>0?e:0,Te=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function Ee(e,t){let n=we(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*Ce(e,t)}var De=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function Oe(e,t,n,r){M(e,De(t),n,r);let i=Ee(e,t);if(i===0)return;let a=_e(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function ke(e){let t=_e(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function Ae(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function je(e,t){for(let n=0;n<G;n++){let r=t.ux*q[n]+t.c*t.gx*J[n],i=t.uy*q[n]+t.c*t.gy*J[n],a=t.uz*q[n]+t.c*t.gz*J[n],o=e.dx*re[n],s=e.dy*re[n];le[n]=o,ue[n]=s,de[n]=r,fe[n]=i,pe[n]=a,oe[n]=o*o+s*s,se[n]=o*r+s*i,ce[n]=r*r+i*i+a*a}}function Me(e,t,n=!1){let r=0,i=0;for(let t=0;t<G;t++){let a=le[t]+e*de[t],o=ue[t]+e*fe[t],s=e*pe[t],c=n?Math.sqrt(oe[t]+2*e*se[t]+e*e*ce[t]):Math.hypot(a,o,s);r+=K[t]*c,i+=K[t]*(n?se[t]+e*ce[t]:a*de[t]+o*fe[t]+s*pe[t])/c}return t&&(t.quad+=16),[r,i]}function Ne(e,t,n){return 4/3*j(e,{...De(t),e:n,n:3})[1].z}function Pe(e,t,n,r){let i=0,a=0;for(let t=0;t<G;t++){let o=r.ux*q[t]+r.c*r.gx*J[t],s=r.uy*q[t]+r.c*r.gy*J[t],c=r.uz*q[t]+r.c*r.gz*J[t],l=e.dx*re[t],u=e.dy*re[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=K[t]*m,a+=K[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Fe(e,t,n,r,i,a=n,o=!1){je(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<te;e++){let[e,n]=Me(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?z:R)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return he+=1,c}var Ie=new Map;function Le(e,t,n,r){let i=_e(e),a=t.gravity??L;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function Re(e,t){let n=we(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Le(e,t,n,r):void 0;if(i!==void 0){let e=Ie.get(i);if(e!==void 0)return e}let a=ke(e),o=(t.L0??O(e,t.H))*(1+n),s=Ee(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??L,u=Math.min(1,Math.max(-1,Ce(e,t)/I)),d=Ae(a,s,c,l.alpha,l.beta,u),f=Ne(e,t,n),p={frame:a,radius:Fe(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Ie.size>=B){let e=Ie.keys().next().value;e!==void 0&&Ie.delete(e)}Ie.set(i,p)}return p}function ze(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ve(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function Be(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Ze(e,t,Te(t),H),s=t.n-1,c=ve(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(me+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(me+=1),l[t]={x:v,y,z:b}}return l}function Ve(e,t,n,r){let i=Ze(e,t,Te(t),H);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(me+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function He(e,t,n){let r=Ze(e,t,Te(t),H);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(me+=1),e.x=t,e.y=n,e.z=i}}function Ue(e,t){let n=Re(e,t);if(!n){let n=j(e,De(t)),r=Ee(e,t);if(r!==0){let t=ke(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return He(e,t,n),n}return Be(e,t,n)}function We(e,t,n,r){let i=Re(e,t);i?ze(e,t,n,r,i):Oe(e,t,n,r),Ve(e,t,n,r)}function Ge(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function Ke(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var qe=new Map,Je=new Map;function Ye(e,t,n){let r=ke(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??L).alpha,t.lref??80].join(`|`)}function Xe(e,t,n,r){let i=Je.get(r);if(i!==void 0)return i;let a=ke(e),o=O(e,t.H)*(1+n),s=Ne(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*u,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),d=(t.gravity??L).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,Ae(a,t,0,d,0,1)),l!==0){let e=Ae(a,t,l,d,0,1);S(Pe(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=Ae(a,t,l,d,e*p,n);S(Pe(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(Je.size>=V){let e=Je.keys().next().value;e!==void 0&&Je.delete(e)}return Je.set(r,C),C}function Ze(e,t,n,r){let i=we(n),a=Ye(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=qe.get(o);if(s)return s;let c=ke(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=Xe(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+ee*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=Y[e],n=ie[e],i=ae[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);Ge(E,a-s,o-s,S),Ge(E,a+s,o+s,S),Ge(E,a-s-w*s,o-s-T*s,S),Ge(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),F=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),F>k&&(k=F);let[I,ee]=Ke(c.nx,-r.light.dir.x/C,d),[L,te]=Ke(c.ny,-r.light.dir.y/C,d),R=a+A*I,z=o+A*L,B=a+A*ee,ne=o+A*te;R<l&&(l=R),z<D&&(D=z),B>O&&(O=B),ne>k&&(k=ne),Ge(x,l,D,S),Ge(x,O,k,S)}let D=f===0?0:P*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),qe.size>=ne){let e=qe.keys().next().value;e!==void 0&&qe.delete(e)}return qe.set(o,x),x}function Qe(e,t,n,r,i){let a=Ze(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}var $e=.001,et=Math.sqrt(3)/2,tt=1e-4;function nt(e){return!Number.isFinite(e)||!(e>0)?0:Math.tan(Math.min(e,Math.PI/2))}function rt({z:e,elevation:t,size:n,dir:r,normal:i}){let a=nt(n),o=Math.sin(t);if(!(e>0)||!Number.isFinite(e)||!(o>0)||!(a>0))return 0;let s=i.x*r.x+i.y*r.y,c=-i.x*r.y+i.y*r.x,l=e*a/o*Math.sqrt(c*c+s*s/(o*o));return Number.isFinite(l)?l:0}var it=e=>{let t=String(e);return/e/i.test(t)?e.toFixed(20).replace(/0+$/,``):t.includes(`.`)?t:`${t}.0`},at=`
// P125: 足跡の関数(src/render/footprint.ts と同じ式・同じ定数)。
const float PENUMBRA_W_MIN = ${it($e)};
// P87: 画素(1×1 の箱)のうち、画面の向き (a, b)(|n.x|, |n.y|、a ≥ b)の座標が t より小さい部分の面積(台形の分布の累積)。
float pixelBelow(float t, float a, float b) {
  float lo = 0.5 * (a + b);
  float mid = 0.5 * (a - b);
  if (t <= -lo) return 0.0;
  if (t >= lo) return 1.0;
  if (b < ${it(tt)}) return clamp(0.5 + t / a, 0.0, 1.0);
  if (t < -mid) return (t + lo) * (t + lo) / (2.0 * a * b);
  if (t > mid) return 1.0 - (lo - t) * (lo - t) / (2.0 * a * b);
  return 0.5 + t / a;
}
// P125: pixelBelow の原始関数の t ≤ 0 の側。
float pixelBelowIntegralNeg(float t, float a, float b) {
  float lo = 0.5 * (a + b);
  if (t <= -lo) return 0.0;
  if (b < ${it(tt)}) {
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
`,ot=.2;function st(e){let t=e.shade,n=typeof t==`number`&&Number.isFinite(t)?Math.min(1,Math.max(0,t)):ot,r=e.shadow?.strength,i=typeof r==`number`&&Number.isFinite(r)?Math.max(0,r):1,a=Math.min(1,i*n),o=e.material?.name===`glass`?e.material.shadowClear:void 0;return{k:n,sigma:i,kappa:a,kappaDark:Math.min(1,Math.max(0,a*(1-(typeof o==`number`&&Number.isFinite(o)?o:0))))}}function ct(e,t){let n=1-t.kappaDark;return[e[0]*n,e[1]*n,e[2]*n,1]}function lt(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function ut(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}var dt=7,ft=Float32Array.BYTES_PER_ELEMENT,pt=`#version 300 es
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aAcross;
layout(location = 3) in float aDepth;

uniform mat4 uView;
uniform mat4 uProj;
/** P126: 1 のとき画面いっぱいの三角形(布が不透明でないときの影の混ぜ)。 */
uniform int uFill;

out vec3 vNormal;
out float vAcross;

void main() {
  vNormal = aNormal;
  vAcross = aAcross;
  if (uFill == 1) {
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  vec4 clip = uProj * (uView * vec4(aPosition, 1.0));
  clip.z = (aDepth * 2.0 - 1.0) * clip.w;
  gl_Position = clip;
}`,mt=`#version 300 es
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
}`,ht=`#version 300 es
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
}`,gt=`#version 300 es
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
}`,_t=`#version 300 es
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
}`,vt=`#version 300 es
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
}`,yt=`#version 300 es
precision highp float;

in vec3 vNormal;
in float vAcross;

uniform int uShadow;
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
${at}
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
    float shadowOpacity = shadowCoverage * uShadowColor.a * uShadowAlpha;
    if (uShadow == 1) {
      // 布が不透明: 布の色を影の色へ 濃さ × 被覆 だけ混ぜた色(描き手が MIN・MAX で合わせる)。
      outColor = vec4(mix(uCloth.rgb, uShadowColor.rgb, shadowOpacity), 1.0);
    } else {
      // 布が不透明でない(uShadow 3): alpha だけに出す(描き手が MAX で被覆の最大を溜め、後で 1 度だけ混ぜる)。
      outColor = vec4(0.0, 0.0, 0.0, shadowOpacity);
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
}`;function bt(e,t=pt,n=yt){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw e.deleteShader(i),e.deleteShader(a),Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var xt=1e6,X=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,St=4,Ct=Math.PI/4,wt=-Math.SQRT1_2,Tt=-Math.SQRT1_2,Et=1.5,Dt=1e6;function Ot(e){let t=bt(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i={program:t,view:r(`uView`),proj:r(`uProj`),shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),cloth:r(`uCloth`),fill:r(`uFill`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`)},a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer(),c=e.createBuffer();if(!a||!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s);for(let t=0;t<4;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let l=new Float32Array,u=new Float32Array,d=new Float64Array,f=new Float64Array,p=new Float32Array(16),m=new Float32Array(16),h=0,g=-1,_=-1,v,y=t=>{let n=dt*ft,r=t*n;e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*ft),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*ft),e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(3,1,e.FLOAT,!1,ft,t*ft)},b,x=!1,S=new Float32Array,C=()=>{if(b||x)return b;let t;try{t=bt(e,mt,ht)}catch{x=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),x=!0;return}let i=e=>n(t,e);return b={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},b},w,T=!1,E=()=>{if(w||T)return w;let t;try{t=bt(e,gt,_t)}catch{T=!0;return}let r=e=>n(t,e);return w={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},w},D,O=!1,k=()=>{if(D||O)return D;let t;try{t=bt(e,mt,vt)}catch{O=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),O=!0;return}let i=e=>n(t,e);return D={program:t,view:i(`uView`),proj:i(`uProj`),pass:i(`uPass`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),glass:i(`uGlass`),glassB:i(`uGlassB`),glassC:i(`uGlassC`),tangentBuffer:r},D},A=(e,t)=>{if(e.count!==g||t!==_||!v)return!1;if(v===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(v[t]!==e.start[t])return!1;return!0},j=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),h=a,g=t.count,_=n,v=Uint32Array.from(t.start.subarray(0,t.count+1))},M=(t,n,r,i,a,o,s)=>{let c=n.light?.size??0,u={x:a,y:o},p=e.drawingBufferWidth,m=e.drawingBufferHeight,h=r.view,g=r.proj,_=(e,t,n,r)=>{let i=0;for(let a=0;a<4;a+=1){let o=g[a*4+e];o!==0&&(i+=o*(h[a]*t+h[4+a]*n+h[12+a]*r))}return i},v=(e,t,n,r)=>{let i=_(0,e,t,1),a=_(1,e,t,1),o=Math.max(_(3,e,t,1),1e-6),s=_(0,n,r,0),c=_(1,n,r,0),l=_(3,n,r,0),u=(s*o-i*l)/(o*o)*.5*p,d=(c*o-a*l)/(o*o)*.5*m,f=Math.hypot(u,d);return Number.isFinite(f)?f:0},y=e=>.5*(d[e*4]+d[e*4+2]),b=e=>.5*(d[e*4+1]+d[e*4+3]);for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let t=e>n?e-1:e,a=e<r?e+1:e,o=y(e),p=b(e),m=d[e*4],h=d[e*4+1],g=y(a)-y(t),_=b(a)-b(t),x=Math.hypot(g,_),S=0,C=1;if(x>1e-12)S=-_/x,C=g/x;else{let e=Math.hypot(m-o,h-p);e>1e-12&&(S=(m-o)/e,C=(h-p)/e)}let w=(m-o)*S+(h-p)*C,T=w<0?-1:1,E=T*S,D=T*C;w=Number.isFinite(w)?Math.abs(w):0;let O=v(o,p,E,D),k=O>0?Et/O:0,A=O>0?Dt/O:1/0,j=e=>{let t=rt({z:f[e],elevation:i,size:c,dir:u,normal:{x:E,y:D}}),n=Math.min(et*t,A);return Number.isFinite(n)&&n>0?n:0},M=j(e*2),N=j(e*2+1),P=1/0,F=0;if(e>n&&e<r){let e=o-y(t),n=p-b(t),r=y(a)-o,i=b(a)-p;F=e*i-n*r,F!==0&&(P=Math.hypot(e,n)*Math.hypot(r,i)*x/(2*Math.abs(F)))}for(let t=0;t<2;t+=1){let n=t===0?1:-1,r=e*2+t,i=t===0?M:N,a=n*E,o=n*D,c=w+i+k;i>0&&(a*S+o*C)*F>0&&(c=Math.min(c,Math.max(w+k,P)));let u=c-w,f=s+r*dt;l[f]=d[r*2]+a*u,l[f+1]=d[r*2+1]+o*u,l[f+3]=w,l[f+4]=M,l[f+5]=N,l[f+6]=n*c}}}},N=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>x,rubberUnavailable:()=>T,glassUnavailable:()=>O,draw(t,n,r,s,g,_){let v=t.band,b=t.bandNormal;if(!v||!b||!n.band)return;let x=t.start[t.count],w=Math.max(0,n.band.width)/2,T=n.light?.dir.x??wt,D=n.light?.dir.y??Tt,O=n.light?.elevation??Ct,P=Math.tan(O);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o);let F=x*4*dt;l.length<F&&(l=new Float32Array(F),e.bufferData(e.ARRAY_BUFFER,l.byteLength,e.DYNAMIC_DRAW)),A(t,x)||j(t,x);let I=g.view,ee=n.view,L=ut(ee)||ee===void 0;u.length<x*4&&(u=new Float32Array(x*4)),d.length<x*4&&(d=new Float64Array(x*4)),f.length<x*2&&(f=new Float64Array(x*2));let te=0;for(let e=0;e<x;e+=1){let n=t.center[e*3+2]+w;n>te&&(te=n)}let R=1/(t.count+1),z=x*2*dt,B=1/0,ne=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*R;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=v[r*3]*w,s=v[r*3+1]*w,c=v[r*3+2]*w;for(let t=0;t<2;t+=1){let p=t===0?1:-1,m=e+p*o,h=i+p*s,g=Math.max(0,a+p*c),_=(r*2+t)*dt,v=z+_,y=g===0?0:g/P;l[_]=m,l[_+1]=h,l[_+2]=g;let S=r*2+t;if(L)u[S]=n+R*(.5-.45*(te>0?g/te:0));else{let e=I[2]*m+I[6]*h+I[10]*g+I[14];u[S]=e,e<B&&(B=e),e>ne&&(ne=e)}u[x*2+S]=n+R*.5,d[S*2]=m-T*y,d[S*2+1]=h-D*y,f[S]=g,l[_+3]=b[r*3],l[_+4]=b[r*3+1],l[_+5]=b[r*3+2],l[_+6]=p,l[v+2]=0}}}if(M(t,n,g,O,T,D,z),!L&&x>0){let e=ne-B,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<x*2;e+=1)u[e]=t===0?.5:.01+(ne-u[e])*t}F>0&&e.bufferSubData(e.ARRAY_BUFFER,0,l,0,F),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,u.subarray(0,x*4),e.DYNAMIC_DRAW);let V=_?.name===`silk`?C():void 0,H=_?.name===`rubber`?E():void 0,U=_?.name===`glass`?k():void 0;if(V||U){S.length<x*6&&(S=new Float32Array(x*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;S[n]=o,S[n+1]=s,S[n+2]=c}}}}e.useProgram(i.program);for(let e=0;e<16;e+=1)p[e]=g.view[e],m[e]=g.proj[e];e.uniformMatrix4fv(i.view,!1,p),e.uniformMatrix4fv(i.proj,!1,m);let W=r(n.background),G=ct(W,st(n));e.uniform4f(i.shadowColor,G[0],G[1],G[2],G[3]),e.uniform1f(i.shadowAlpha,1);let K=[0,1,2].every(e=>G[e]<=W[e]),re=[0,1,2].every(e=>G[e]>=W[e]),q=W[3]>=1&&(K||re);e.uniform4f(i.cloth,W[0],W[1],W[2],W[3]);let J=r(n.band.front);e.uniform4f(i.front,J[0],J[1],J[2],J[3]);let Y=n.band.back===void 0?J:r(n.band.back);e.uniform4f(i.back,Y[0],Y[1],Y[2],Y[3]);let ie=Math.cos(O);if(e.uniform3f(i.light,T*ie,D*ie,Math.sin(O)),e.uniform3f(i.viewDir,I[2],I[6],I[10]),e.uniform1f(i.ambient,s.ambient),e.uniform1f(i.diffuse,s.diffuse),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),h>0){if(e.disable(e.DEPTH_TEST),e.uniform1i(i.shadow,q?1:3),y(x*2),q?(e.blendEquation(K?e.MIN:e.MAX),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0),e.blendEquation(e.FUNC_ADD)):(e.colorMask(!1,!1,!1,!0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.blendEquation(e.MAX),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0),e.blendEquation(e.FUNC_ADD),e.colorMask(!0,!0,!0,!0),e.blendFuncSeparate(e.DST_ALPHA,e.ONE_MINUS_DST_ALPHA,e.ONE,e.ZERO),e.uniform1i(i.shadow,2),e.uniform1i(i.fill,1),e.drawArrays(e.TRIANGLES,0,3),e.uniform1i(i.fill,0),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE)),e.enable(e.DEPTH_TEST),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS),V&&_)e.useProgram(V.program),e.uniformMatrix4fv(V.view,!1,p),e.uniformMatrix4fv(V.proj,!1,m),e.uniform4f(V.front,J[0],J[1],J[2],J[3]),e.uniform4f(V.back,Y[0],Y[1],Y[2],Y[3]),e.uniform3f(V.light,T*ie,D*ie,Math.sin(O)),N(V.eye,g,I),e.uniform1f(V.ambient,s.ambient),e.uniform1f(V.diffuse,s.diffuse),e.uniform4f(V.silk,X(_.gloss,0),Math.max(0,X(_.sharpness,0)),X(_.shift,0),Math.min(1,Math.max(0,X(_.dim,0)))),e.uniform1f(V.streak,Math.max(0,X(_.streak,xt))),y(0),e.bindBuffer(e.ARRAY_BUFFER,V.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,S.subarray(0,x*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(St,3,e.FLOAT,!1,3*ft,0),e.enableVertexAttribArray(St),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0),e.disableVertexAttribArray(St);else if(H&&_)e.useProgram(H.program),e.uniformMatrix4fv(H.view,!1,p),e.uniformMatrix4fv(H.proj,!1,m),e.uniform4f(H.front,J[0],J[1],J[2],J[3]),e.uniform4f(H.back,Y[0],Y[1],Y[2],Y[3]),e.uniform3f(H.light,T*ie,D*ie,Math.sin(O)),N(H.eye,g,I),e.uniform1f(H.ambient,s.ambient),e.uniform1f(H.diffuse,s.diffuse),e.uniform3f(H.rubber,X(_.gloss,0),Math.max(0,X(_.sharpness,0)),X(_.rim,0)),y(0),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0);else if(U&&_){e.useProgram(U.program),e.uniformMatrix4fv(U.view,!1,p),e.uniformMatrix4fv(U.proj,!1,m),e.uniform4f(U.front,J[0],J[1],J[2],J[3]),e.uniform4f(U.back,Y[0],Y[1],Y[2],Y[3]),e.uniform3f(U.light,T*ie,D*ie,Math.sin(O)),N(U.eye,g,I),e.uniform4f(U.glass,X(_.tint,0),X(_.edge,1),X(_.mirror,0),X(_.gloss,0));let t=_.dispersionMode===`shift`;e.uniform4f(U.glassB,X(_.sharpness,1),X(_.eta,1),0,t?X(_.secondShift,0):0),e.uniform4f(U.glassC,X(_.dispersion,0),X(_.secondGloss,0),X(_.secondWidth,0),+!!t),y(0),e.bindBuffer(e.ARRAY_BUFFER,U.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,S.subarray(0,x*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(St,3,e.FLOAT,!1,3*ft,0),e.enableVertexAttribArray(St),e.disable(e.DEPTH_TEST),e.uniform1i(U.pass,0),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.ONE),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0),e.uniform1i(U.pass,1),e.blendFuncSeparate(e.ONE,e.ONE,e.ZERO,e.ONE),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0),e.disableVertexAttribArray(St),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE)}else e.uniform1i(i.shadow,0),y(0),e.drawElements(e.TRIANGLES,h,e.UNSIGNED_INT,0)}e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var kt=12,At=.2;function jt(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function Mt(e,t){let{k:n}=st(e),r=jt(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=1-n,a.diffuse=n,a.specular=0,a.shininess=jt(e.shininess,1,256,kt),a.ply=jt(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=jt(e.plyContrast,0,1,At),a.plySlope=jt(e.plySlope,-1,1,.35),a}var Nt=`この端末では素材の描き方を作れなかったので、標準で描いている`,Pt=`
// P130: 焦光の関数(src/render/caustic.ts と同じ式・同じ定数)。
const float CAUSTIC_PERP_MIN = ${it(1e-4)};
const float CAUSTIC_LAND_MIN = ${it(.001)};
const float CAUSTIC_FAR = ${it(1e4)};
const float CAUSTIC_SPREAD_MIN = ${it(1e-6)};
const float CAUSTIC_NORMAL_MIN2 = ${it(1e-12)};
const float CAUSTIC_SPLIT_HALF = ${it(.25)};
const float CAUSTIC_THIN = ${it(tt)};
const float CAUSTIC_THIN_SMOOTH = ${it(.001)};
const float CAUSTIC_ETA_MIN = ${it(1e-6)};
const float CAUSTIC_LIGHT_Z_MIN = ${it(1e-12)};

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
`,Ft=`
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
`,It=Math.PI/180,Lt=16,Rt=8;function zt(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+Lt}function Bt(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+Lt+Rt;return Math.min(60,2*Math.atan(r/(r+i+a+o))/It)}function Vt(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function Ht(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=lt(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=Bt(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=zt(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*It/2),a=Math.max(Rt,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var Ut=1e-12;function Wt(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var Gt=new Float64Array,Kt=new Uint8Array;function qt(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);Gt.length<s*3&&(Gt=new Float64Array(s*3),Kt=new Uint8Array(s));let c=Gt,l=Kt,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>Ut?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){Wt(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):Wt(a,l,u,i,t)}}function Jt(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var Yt=new Float64Array,Xt=new Float64Array,Zt=new Float64Array;function Qt(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);Zt.length<n&&(Yt=new Float64Array(n*3),Xt=new Float64Array(n*3),Zt=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;qt(i,n,o,Yt,Xt,Zt,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=Zt[e],r[s+4]=Yt[e*3],r[s+5]=Yt[e*3+1],r[s+6]=Yt[e*3+2],r[s+7]=t,r[s+8]=Xt[e*3],r[s+9]=Xt[e*3+1],r[s+10]=Xt[e*3+2];let c=0;o>=2&&e===n?c=-(1+Jt(-Yt[e*3+2])):o>=2&&e===a-1&&(c=1+Jt(Yt[e*3+2])),r[s+11]=c}}return r}var $t=.71,en=new Float64Array,tn=new Float64Array,nn=new Float64Array;function rn(e,t,n,r,i,a){if(r<=0)return;let o=n[r];nn.length<o&&(en=new Float64Array(o),tn=new Float64Array(o),nn=new Float64Array(o));let s=$t+i;for(let i=0;i<r;i+=1){let r=n[i],o=n[i+1];for(let n=r;n<o;n+=1){let r=n+1<o?n+1:n,i=e[2*n],c=e[2*n+1],l=e[2*r],u=e[2*r+1],d=l-i,f=u-c,p=t[n],m=t[r];en[n]=.5*(i+l),tn[n]=.5*(c+u),nn[n]=.5*Math.sqrt(d*d+f*f)+(p>m?p:m)+s,a[2*n]=n,a[2*n+1]=n}for(let e=r;e<o;e+=1){let t=en[e],n=tn[e],r=nn[e],i=a[2*e+1];for(let s=e+1;s<o;s+=1){let o=en[s]-t,c=tn[s]-n,l=r+nn[s];o*o+c*c<=l*l&&(i=s,e<a[2*s]&&(a[2*s]=e))}a[2*e+1]=i}}}function an(e,t,n,r){for(let i=0;i<t;i+=1){let t=e[i],a=e[i+1];for(let e=t;e<a;e+=1)r[e]=n?t+a-1-e:e}}function on(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function sn(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var cn=.7,ln=1e6,un=4294967295,dn=1024,fn=4,pn=1.5,mn=1e6,hn=e=>Number.isInteger(e)?`${e}.0`:String(e),gn=0,_n=1,vn=2,yn=3,bn=4,xn=5,Sn=7,Cn=`#version 300 es
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
  if (uMode == ${_n}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${vn} || uMode == ${Sn}) {
    int p = gl_VertexID >> 1;
    float side = (gl_VertexID & 1) == 0 ? 1.0 : -1.0;
    vec4 s = texelFetch(uShadowPoints, ivec2(p % uTexWidth, p / uTexWidth), 0);
    float r = effectiveRadius(vec3(s.xy, 0.0));
    // P87: 影の帯も被覆の帯の分だけ広げ、帯の軸からの距離(device px)を渡す(平たい帯なので線形の補間で正しい)。
    float px = pixelsAt(vec3(s.xy, 0.0));
    float fringe = px > 0.0 ? uFringe / px : 0.0;
    // P125: 半影。光源の像の箱の半幅 w = (√3/2)·b(b は管の点の高さ z と帯の法線から)。帯の半幅を r + w + fringe へ広げる。
    float blurPx = px > 0.0 ? min(${hn(et)} * lightImageHalfWidth(fetchPoint(p * 3).z, s.zw) * px, ${hn(mn)}) : 0.0;
    float blur = px > 0.0 ? blurPx / px : 0.0;
    float halfWidth = r + blur + fringe;
    // P125: 曲がりの内側では、半幅を影の折れ線の曲率半径(点 p − 1・p・p + 1 の外接円)で抑える(strip の内側の辺が交差して
    // 裏返った三角形の補間が偽の筋を出さない)。今の半幅 r + fringe より狭めない(β 0 は今の帯のまま)。線の端の点は抑えない。
    if (blur > 0.0 && fetchPoint(p * 3 + 2).w == 0.0) {
      int pa = p - 1;
      int pc = p + 1;
      vec2 sa = texelFetch(uShadowPoints, ivec2(pa % uTexWidth, pa / uTexWidth), 0).xy;
      vec2 sc = texelFetch(uShadowPoints, ivec2(pc % uTexWidth, pc / uTexWidth), 0).xy;
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
  if (uMode == ${xn}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${bn};
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
  vNormal = uMode == ${yn} ? outward * t : n;
  vWorld = world;
}`,wn=`  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);`,Tn={wave:0,notch:1,scallop:2},En=`// P110: 法線の揺らぎ: (溝の深さ plyGain, 溝の形 0 なだらか・1 切れ込み・2 丸い膨らみ, 切れ込みの幅, 未使用)。
uniform vec4 uPlyNormal;
`,Dn=`2.0`,On=`  float plyPhase = 6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN);
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
  float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${Dn}, ${Dn});
  N = normalize(N - plyTilt * grooveDir);
  outColor = vec4(shadeThread(N, T, V, 1.0) * alpha, alpha);`,kn=(e,t=!1,n=!1)=>`#version 300 es
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
${n?En:``}uniform vec4 uEye;
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
${at}
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
  if (uMode == ${_n}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${vn}) {
    float coverage = shadowCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${Sn}) {
    float coverage = shadowCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${xn}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${bn};
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
${n?On:wn}
}`,An=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse;
  return uColor * brightness * ply;
}`,jn=`uniform vec4 uSilk;
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
}`,Mn=`uniform vec3 uRubber;

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
}`,Nn=kn(An),Pn=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,Fn=kn(jn),In=kn(An,!0),Ln=kn(jn,!0),Rn=kn(Mn),zn=kn(Mn,!0),Z=3,Bn=.25,Vn=1.42,Hn=`#version 300 es
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
  float h = max(a0.z, a1.z) + ${Vn.toFixed(2)};
  vec2 d = a1.xy - a0.xy;
  float l = length(d);
  vec2 u = l > 1e-6 ? d / l : vec2(1.0, 0.0);
  vec2 n = vec2(-u.y, u.x);
  float along = (c == 1 || c == 4 || c == 5) ? l + h : -h;
  float side = (c == 2 || c == 3 || c == 5) ? h : -h;
  vec2 at = a0.xy + along * u + side * n;
  gl_Position = vec4(at / uViewport * 2.0 - 1.0, 0.0, 1.0);
  vSegment = k;
}`,Un=`#version 300 es
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
  for (int j = lo; j <= hi; j++) {
    vec4 a = winAt(${Z} * j);
    bool jLast = lastPoint(a);
    vec4 b = jLast ? a : winAt(${Z} * j + ${Z});
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
    vec4 pa = winAt(${Z} * j + 2);
    vec4 pb = jLast ? pa : winAt(${Z} * j + ${Z} + 2);
    for (int e = 0; e < 2; e++) {
      if (e == 1 && jLast) break;
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
    float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${Dn}, ${Dn});
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
}`,Wn=`#version 300 es
void main() {
  int k = gl_VertexID;
  gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
}`,Gn=`#version 300 es
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
}`,Kn=`precision highp sampler2D;
`,qn=`    vBlurPx = blurPx;
    return;
  }`,Jn=(()=>{if(Cn.split(Kn).length!==2||Cn.split(qn).length!==2)throw Error(`mesh: the caustic vertex shader anchors are missing`);return Cn.replace(Kn,`${Kn}invariant gl_Position;
// P130: 端の均しのつまみ c。
uniform float uCausticBend;
out vec3 vCausticCenter;
out vec3 vCausticTangent;
out vec2 vCausticNormal;
out float vCausticRadius;
out float vCausticBend;
${Ft}`).replace(qn,`    vBlurPx = blurPx;
    // P130: 焦光の varying(点の中心・接線・帯の法線・世界の半径・端の均しの重み)。
    vCausticCenter = fetchPoint(p * 3).xyz;
    vCausticTangent = fetchPoint(p * 3 + 1).xyz;
    vCausticNormal = s.zw;
    vCausticRadius = r;
    float causticMark = fetchPoint(p * 3 + 2).w;
    int causticPrev = causticMark < 0.0 ? p : p - 1;
    int causticNext = causticMark > 0.0 ? p : p + 1;
    vec2 causticA = texelFetch(uShadowPoints, ivec2(causticPrev % uTexWidth, causticPrev / uTexWidth), 0).xy;
    vec2 causticC = texelFetch(uShadowPoints, ivec2(causticNext % uTexWidth, causticNext / uTexWidth), 0).xy;
    vCausticBend = causticBendWeight(causticA, s.xy, causticC, r, uCausticBend);
    return;
  }`)})(),Yn=0,Xn=1,Zn=`#version 300 es
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

${at}
${Pt}
void main() {
  vec2 grad = vec2(dFdx(vAcrossPx), dFdy(vAcrossPx));
  float gradLength = length(grad);
  vec2 axis = gradLength > 1e-6 ? abs(grad / gradLength) : vec2(1.0, 0.0);
  float wide = max(axis.x, axis.y);
  float thin = min(axis.x, axis.y);
  if (uCausticPhase == ${Xn}) {
    ivec2 at = ivec2(gl_FragCoord.xy);
    vec4 dark = texelFetch(uCausticDark, at, 0);
    vec4 bright = texelFetch(uCausticBright, at, 0);
    vec3 d = dark.rgb;
    vec3 b = -bright.rgb;
    if (all(equal(dark.rgb, vec3(1.0))) && all(equal(bright.rgb, vec3(-1.0)))) {
      // 画素の中心が strip の外で、標本の一部だけが覆われる画素(MIN の単 sample の target に書かれない)は、その場の被覆の一様の値で補う
      // (τ ≡ 0 の口では今の影と同じ値)。
      causticFrame(vCausticCenter, vCausticTangent, vCausticRadius, uCausticLight, vCausticNormal);
      vec3 E = causticUntouched(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, uCausticOptics.x, uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
      d = min(E, vec3(1.0));
      b = max(E, vec3(1.0));
    }
    vec3 lit = 1.0 - uCausticKappa.y * (1.0 - d) + uCausticKappa.x * uCausticOptics.z * (b - 1.0);
    outDark = vec4(uCausticCloth.rgb * lit, uCausticCloth.a);
    outBright = vec4(0.0);
    return;
  }
  causticFrame(vCausticCenter, vCausticTangent, vCausticRadius, uCausticLight, vCausticNormal);
  vec3 E = causticExposure(vAcrossPx, vRadiusPx, vBlurPx, wide, thin, clamp(vCausticBend, 0.0, 1.0), uCausticOptics.x,
    uCausticColor, uCausticOptics.y, uCausticSamples, uCausticOptics.w > 0.5);
  outDark = vec4(min(E, vec3(1.0)), 1.0);
  outBright = vec4(-max(E, vec3(1.0)), -1.0);
}`,Qn=new Float32Array([1,1,1,1]),$n=new Float32Array([-1,-1,-1,-1]),er=new Map;function tr(e){let t=er.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=tr(r))}}}let i=n??[0,0,0,1];return er.set(e,i),i}function nr(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function rr(e,t,n,r=Cn){let i=e.createProgram();if(!i)throw Error(`Unable to create a WebGL program`);let a=[];try{if(a.push(nr(e,e.VERTEX_SHADER,r)),e.attachShader(i,a[0]),a.push(nr(e,e.FRAGMENT_SHADER,t)),e.attachShader(i,a[1]),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(i)??``}`);n?.push(...a)}catch(t){for(let t of a)e.deleteShader(t);throw e.deleteProgram(i),t}return i}function ir(e,t){let n=[],r=[];try{for(let i of t)n.push(rr(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var ar={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`,penumbra:`uPenumbra`};function or(e,t){let n={};for(let r of Object.keys(ar))n[r]=e.getUniformLocation(t,ar[r]);return{program:t,u:n}}function Q(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function sr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var cr=new Float64Array;function lr(e,t,n){let r=e.center;cr.length<e.count&&(cr=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];cr[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=cr[e]-cr[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}function ur(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;if(!Number.isFinite(A)||A===0){t.fill(0),t[0]=t[5]=t[10]=t[15]=1;return}let j=1/A;t[0]=(s*k-c*O+l*D)*j,t[1]=(i*O-r*k-a*D)*j,t[2]=(h*C-g*S+_*x)*j,t[3]=(f*S-d*C-p*x)*j,t[4]=(c*E-o*k-l*T)*j,t[5]=(n*k-i*E+a*T)*j,t[6]=(g*b-m*C-_*y)*j,t[7]=(u*C-f*b+p*y)*j,t[8]=(o*O-s*E+l*w)*j,t[9]=(r*E-n*O-a*w)*j,t[10]=(m*S-h*b+_*v)*j,t[11]=(d*b-u*S-p*v)*j,t[12]=(s*T-o*D-c*w)*j,t[13]=(n*D-r*T+i*w)*j,t[14]=(h*y-m*x-g*v)*j,t[15]=(u*x-d*y+f*v)*j}var dr=new Float64Array,fr=new Float64Array,pr=new Float64Array(16);function mr(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function hr(e,t,n,r,i,a){let o=e.start[e.count]??0;fr.length<o&&(dr=new Float64Array(o*2),fr=new Float64Array(o));let s=r.view,c=r.proj,l=pr;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=c[r*4+t]*s[e*4+r];l[e*4+t]=n}let u=l[0],d=l[1],f=l[3],p=l[4],m=l[5],h=l[7],g=l[8],_=l[9],v=l[11],y=l[12],b=l[13],x=l[15],S=i.pixelScale,C=i.radius,w=i.widen,T=i.minRadius,E=i.fringe,D=.5*i.viewportW,O=.5*i.viewportH,k=dr,A=fr;for(let e=0,n=0;e<o;e+=1,n+=12){let r=t[n],i=t[n+1],o=t[n+2],s=f*r+h*i+v*o+x,c=S/(s>1e-6?s:1e-6),l=c>0?Math.max(C*c+w,T)/c:C,j=t[n+11];if(j!==0){let e=(j<0?1-Math.abs(j):Math.abs(j)-1)*l;r+=e*t[n+4],i+=e*t[n+5],o+=e*t[n+6]}a&&(a[e*4]=r,a[e*4+1]=i,a[e*4+2]=o,a[e*4+3]=l);let M=f*r+h*i+v*o+x,N=M>1e-6?M:1e-6;k[e*2]=((u*r+p*i+g*o+y)/N+1)*D,k[e*2+1]=((d*r+m*i+_*o+b)/N+1)*O,A[e]=S/N*l+E}for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let n=e===i,s=e===a-1,c=n?e:e-1,l=s?e:e+1,u=o&&mr(k[c*2],k[c*2+1],k[e*2],k[e*2+1],k[l*2],k[l*2+1],A[e],n,s);if(!u&&!s){let t=l===a-1,n=t?l:l+1;u=mr(k[e*2],k[e*2+1],k[l*2],k[l*2+1],k[n*2],k[n*2+1],A[e],!1,t)}t[e*12+7]=2*r+ +!!u}let s=r*8;o?(n[s]=k[i*2],n[s+1]=k[i*2+1],n[s+2]=k[(i+1)*2],n[s+3]=k[(i+1)*2+1],n[s+4]=k[(a-1)*2],n[s+5]=k[(a-1)*2+1],n[s+6]=k[(a-2)*2],n[s+7]=k[(a-2)*2+1]):n.fill(0,s,s+8)}}function gr(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=or(n,rr(n,Nn)),i=or(n,rr(n,In)),a=or(n,rr(n,Pn)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=ir(n,[Rn,zn]);if(!e)p=!0;else return d={...or(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...or(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=new Map,_=e=>{let t=g.get(e);if(t!==void 0)return t;let r=e===`silk`?jn:e===`rubber`?Mn:An,i=ir(n,[kn(r,!1,!0),kn(r,!0,!0)]),a=i?i.map(t=>({...or(n,t),rubber:e===`rubber`?n.getUniformLocation(t,`uRubber`):void 0,plyNormal:n.getUniformLocation(t,`uPlyNormal`)})):null;return g.set(e,a),a},v=()=>{if(o||c)return o;let e=ir(n,[Fn,Ln]);if(!e)c=!0;else return o=or(n,e[0]),s=or(n,e[1]),o},y=t.glassReverse===!0,b=!1,x=!1,S,C=()=>{x=!0},w=e=>{let t=n.drawingBufferWidth,r=n.drawingBufferHeight;if(e.width===t&&e.height===r)return!0;e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.activeTexture(n.TEXTURE4);let i=[n.createTexture(),n.createTexture()];i.forEach((e,i)=>{n.bindTexture(n.TEXTURE_2D,e),n.texStorage2D(n.TEXTURE_2D,1,n.RGBA16F,t,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+i,n.TEXTURE_2D,e,0)}),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0);let a=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,t,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,a),n.bindRenderbuffer(n.RENDERBUFFER,null);let o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindFramebuffer(n.FRAMEBUFFER,null),e.absorb=i[0],e.reflect=i[1],e.depth=a,e.width=t,e.height=r,o},T=()=>{if(x)return;if(!S){let e=[],t=[];try{t.push(rr(n,Un,e,Hn)),t.push(rr(n,Gn,e,Wn))}catch{for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let r=n.getExtension(`EXT_color_buffer_float`),i=n.getExtension(`EXT_color_buffer_half_float`),a=r||i?n.createFramebuffer():null;if(!a){for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let[o,s]=t,c=e=>n.getUniformLocation(o,e);S={line:o,compose:s,framebuffer:a,absorb:null,reflect:null,depth:null,width:-1,height:-1,u:{texWidth:c(`uTexWidth`),viewport:c(`uViewport`),invViewProj:c(`uInvViewProj`),eye:c(`uEye`),light:c(`uLight`),color:c(`uColor`),ply:c(`uPly`),plyNormal:c(`uPlyNormal`),glass:c(`uGlass`),glassB:c(`uGlassB`),glassC:c(`uGlassC`)},which:n.getUniformLocation(s,`uWhich`)},n.useProgram(o),n.uniform1i(c(`uWin`),3),n.uniform1i(c(`uPoints`),0),n.useProgram(s),n.uniform1i(n.getUniformLocation(s,`uAbsorb`),4),n.uniform1i(n.getUniformLocation(s,`uReflect`),5),n.useProgram(null)}if(w(S))return S;let e=S;return e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.deleteFramebuffer(e.framebuffer),n.deleteProgram(e.line),n.deleteProgram(e.compose),S=void 0,C()},E=[null,null,null],D=[0,0,0],O=2,k=new Float32Array,A=new Float64Array,j=new Float64Array,M=new Int32Array,N=new Int32Array,P=new Float32Array(16),F=new Float64Array(16),I=t.causticZero===!0,ee=!1,L,te=()=>{if(L||ee)return L;let e;try{e=rr(n,Zn,void 0,Jn)}catch{ee=!0;return}let t=t=>n.getUniformLocation(e,t);return L={...or(n,e),c:{phase:t(`uCausticPhase`),light:t(`uCausticLight`),optics:t(`uCausticOptics`),color:t(`uCausticColor`),samples:t(`uCausticSamples`),kappa:t(`uCausticKappa`),cloth:t(`uCausticCloth`),bend:t(`uCausticBend`)}},n.useProgram(e),n.uniform1i(t(`uCausticDark`),4),n.uniform1i(t(`uCausticBright`),5),n.useProgram(null),L},R=n.createVertexArray(),z=n.createBuffer(),B=n.createTexture(),ne=n.createTexture(),V=n.createTexture();if(!R||!z||!B||!ne||!V)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(R),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,z),n.bindVertexArray(null);for(let e of[B,ne,V])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let H,U=new Float32Array,W=0,G=new Float32Array,K=0,re=new Float32Array,q=0,J,Y=0,ie=0,ae=0,oe=0,se=0,ce=new Int32Array,le=new Int32Array,ue=0,de=new Uint32Array,fe=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=un);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},pe,me={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},he=new Float32Array(16),ge=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;H&&H.bitmapW===r&&H.bitmapH===i&&H.cssW===a&&H.cssH===o&&H.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,H={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},_e=e=>{e.glassReverse!==void 0&&(y=e.glassReverse===!0),e.causticZero!==void 0&&(I=e.causticZero===!0),ge(e)},ve=(e,t,r)=>{let i=e.count;if(J&&Y===t&&J.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(J[n]!==e.start[n]){t=!1;break}if(t)return}let a=on(e.start,i,t);ie=a.tubeCount,ae=a.capCount,oe=a.shadowCount,se=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(se+=+(se>0)+2*n)}let o=new Uint32Array(a.index.length+se);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}ce.length<i&&(ce=new Int32Array(i),le=new Int32Array(i)),lr(e,r,ce),ue=a.index.length,fe(e,ce,o,ue),de=new Uint32Array(se),n.bindVertexArray(R),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,z),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),J=e.start.slice(0,i+1),Y=t},ye=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*fn;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},be=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,dn,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,dn,r,n.RGBA,n.FLOAT,t)},xe=(e,t=!1)=>{let r=tr(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},Se=(e,t,n,r)=>{let i=Q((t.mesh??{}).cameraFov,45),a=t.view,o=Q(a?.tilt,0),s=Q(a?.turn,0),c=Q(a?.zoom,1)>0?Q(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,Q(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:Ht({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:Vt(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},Ce=(e,t)=>{pe??=Ot(n),xe(t);let r=H?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=Se(e,t,i,a);pe.draw(e,t,tr,Mt(t,me),o,t.material)},we=(e,t,r,i,a,o,s)=>{let c=t.start[t.count],l=n.drawingBufferWidth,u=n.drawingBufferHeight;j.length<c&&(j=new Float64Array(c),M=new Int32Array(c*2),N=new Int32Array(c));let d=dr,f=fr;for(let e=0;e<c;e+=1)j[e]=f[e]-pn;rn(d,j,t.start,t.count,Bn,M),an(t.start,t.count,y,N);let p=Math.max(1,Math.ceil(c*Z/dn));k.length<dn*p*4&&(k=new Float32Array(dn*p*4));let m=k,h=1/0,g=1/0,_=-1/0,v=-1/0;for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1];for(let t=n;t<r;t+=1){let n=t===r-1,i=n?t:t+1,a=t*Z*4;m[a]=d[t*2],m[a+1]=d[t*2+1],m[a+2]=j[t],m[a+3]=2*e+ +!!n,m[a+4]=M[t*2],m[a+5]=M[t*2+1],m[a+6]=N[t],m[a+7]=0,m[a+8]=A[t*4],m[a+9]=A[t*4+1],m[a+10]=A[t*4+2],m[a+11]=A[t*4+3];let o=(Math.max(j[t],j[i])+Vn)*Math.SQRT2;for(let e of[t,i]){let t=d[e*2],n=d[e*2+1];t-o<h&&(h=t-o),t+o>_&&(_=t+o),n-o<g&&(g=n-o),n+o>v&&(v=n+o)}}}let b=Math.max(0,Math.floor(h)),x=Math.max(0,Math.floor(g)),S=Math.min(l,Math.ceil(_)),C=Math.min(u,Math.ceil(v));O=(O+1)%3,n.activeTexture(n.TEXTURE3);let w=E[O];if(w?n.bindTexture(n.TEXTURE_2D,w):(w=n.createTexture(),E[O]=w,n.bindTexture(n.TEXTURE_2D,w),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),p>D[O]&&(n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,dn,p,0,n.RGBA,n.FLOAT,null),D[O]=p),n.texSubImage2D(n.TEXTURE_2D,0,0,0,dn,p,n.RGBA,n.FLOAT,m),n.activeTexture(n.TEXTURE0),S>b&&C>x){let d=S-b,f=C-x;n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.viewport(0,0,l,u),n.enable(n.SCISSOR_TEST),n.scissor(b,x,d,f),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.clearColor(0,0,0,0),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(e.line);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=i.proj[r*4+t]*i.view[e*4+r];F[e*4+t]=n}ur(F,P);let p=i.view,m=r.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},h=r.light?.elevation??Math.PI/4,g=r.material,_=r.plyNormal;n.uniform1i(e.u.texWidth,dn),n.uniform2f(e.u.viewport,l,u),n.uniformMatrix4fv(e.u.invViewProj,!1,P),i.fov>0?n.uniform4f(e.u.eye,s.x+p[2]*i.eye,s.y+p[6]*i.eye,p[10]*i.eye,1):n.uniform4f(e.u.eye,p[2],p[6],p[10],0),n.uniform3f(e.u.light,m.x*Math.cos(h),m.y*Math.cos(h),Math.sin(h)),n.uniform3f(e.u.color,a[0],a[1],a[2]),n.uniform4f(e.u.ply,o.ply,o.plyPitch,o.plyContrast,o.plySlope),n.uniform4f(e.u.plyNormal,_?Q(_.gain,0):0,_?Tn[_.profile]??Tn.wave:0,_?Q(_.notch,0):0,+!!_),n.uniform4f(e.u.glass,Q(g?.tint,0),Q(g?.edge,1),Q(g?.mirror,0),Q(g?.gloss,0));let v=g?.dispersionMode===`shift`;n.uniform4f(e.u.glassB,Q(g?.sharpness,1),Q(g?.eta,1),t.count,v?Q(g?.secondShift,0):0),n.uniform4f(e.u.glassC,Q(g?.dispersion,0),Q(g?.secondGloss,0),Q(g?.secondWidth,0),+!!v),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,w),n.activeTexture(n.TEXTURE0),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.enable(n.DEPTH_TEST),n.depthFunc(n.NOTEQUAL),n.depthMask(!0),n.drawArrays(n.TRIANGLES,0,6*c),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.DEPTH_TEST),n.useProgram(e.compose),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,e.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,e.reflect),n.uniform1i(e.which,0),n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3),n.uniform1i(e.which,1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.SCISSOR_TEST),n.viewport(0,0,l,u);for(let e of[n.TEXTURE5,n.TEXTURE4,n.TEXTURE3])n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,null);n.activeTexture(n.TEXTURE0),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null)},Te=(e,t,r,i,a,o,s,c,l,u)=>{let d=r.material,f=l(e);n.uniform1i(f.mode,vn),n.uniform3f(e.c.light,s.x*Math.cos(c),s.y*Math.cos(c),Math.sin(c)),n.uniform4f(e.c.optics,Q(d?.eta,1),Q(d?.tint,0),Q(d?.causticGain,1),+!!I),n.uniform3f(e.c.color,o[0],o[1],o[2]);let p=Q(d?.causticSamples,32);n.uniform1i(e.c.samples,Math.min(2147483647,Math.max(1,Math.round(p)))),n.uniform2f(e.c.kappa,i.kappa,i.kappaDark),n.uniform4f(e.c.cloth,a[0],a[1],a[2],a[3]),n.uniform1f(e.c.bend,Q(d?.causticBend,1)),n.bindFramebuffer(n.FRAMEBUFFER,t.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.disable(n.SCISSOR_TEST),n.colorMask(!0,!0,!0,!0),n.clearBufferfv(n.COLOR,0,Qn),n.clearBufferfv(n.COLOR,1,$n),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendEquation(n.MIN),n.uniform1i(e.c.phase,Yn),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,u),n.blendEquation(n.FUNC_ADD),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.BLEND),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,t.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,t.reflect),n.uniform1i(e.c.phase,Xn),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,u),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0),n.enable(n.BLEND),n.enable(n.DEPTH_TEST)},Ee=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,b=t.material?.name===`glass`,u=!0,Ce(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,b=o?.name===`glass`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){xe(t);return}let d=b?T():void 0,p=st(t),g=p.kappaDark>0,y=d&&p.kappa>0?te():void 0,x=tr(t.background),S=ct(x,p),C=[0,1,2].every(e=>S[e]<=x[e]),w=[0,1,2].every(e=>S[e]>=x[e]),E=x[3]>=1&&(C||w);xe(t,!y&&g&&!E);let D=H?.transform??1,O=n.drawingBufferWidth/D,k=n.drawingBufferHeight/D,j=t.mesh??{},M=Q(j.threadWiden,0),N=Q(j.threadMinRadius,cn),{camera:P,zoom:F,center:I,width:ee}=Se(e,t,O,k),L=F*(P.fov>0?P.eye:1)*D,J=P.fov>0?P.eye/P.near:1,Y=sn(Math.max(ee/2*F*J*D+M,N)),pe=Math.max(1,Math.ceil(c*3/dn)),ge=pe>W;ge&&(W=pe,U=new Float32Array(dn*pe*4)),Qt(e,U);let _e=Math.max(1,Math.ceil(c/dn)),Ee=_e>K;Ee&&(K=_e,G=new Float32Array(dn*_e*fn)),ye(e,G);let De=Math.max(1,Math.ceil(2*e.count/dn)),Oe=De>q;Oe&&(q=De,re=new Float32Array(dn*De*4)),d&&A.length<c*4&&(A=new Float64Array(c*4)),hr(e,U,re,P,{pixelScale:L,radius:ee/2,widen:M,minRadius:N,fringe:pn,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight},d?A:void 0),ve(e,Y,P.view),lr(e,P.view,le);let ke=!1;for(let t=0;t<e.count;t+=1)if(le[t]!==ce[t]){ke=!0;break}ke&&(ce.set(le.subarray(0,e.count)),fe(e,ce,de,0),n.bindVertexArray(R),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,z),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,ue*Uint32Array.BYTES_PER_ELEMENT,de),n.bindVertexArray(null));let Ae=t.plyNormal,je=Ae?_(l?`silk`:m?`rubber`:`standard`):null,Me=je?void 0:l?v():void 0,Ne=je||Me?void 0:m?h():void 0,Pe=je?.[0]??Me??Ne??r,Fe=je?.[1]??(Me?s:Ne?f:void 0)??i,Ie=je!==null&&l,Le=je!==null&&m;n.bindVertexArray(R),n.activeTexture(n.TEXTURE0),be(B,U,W,ge),n.activeTexture(n.TEXTURE1),be(ne,G,K,Ee),n.activeTexture(n.TEXTURE2),be(V,re,q,Oe),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=P.proj[r*4+t]*P.view[e*4+r];he[e*4+t]=n}let Re=2*P.depthExtent,ze=Mt(t,me),Be=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},Ve=t.light?.elevation??Math.PI/4,He=tr(t.layers[0]?.color??`#ffffff`),Ue=P.view,We=nt(Q(t.light?.size,0)),Ge=Q(Math.sin(Ve),0),Ke=({program:e,u:t,rubber:r,plyNormal:i})=>(n.useProgram(e),n.uniform1i(t.points,0),n.uniform1i(t.shadowPoints,1),n.uniform1i(t.lines,2),n.uniform1i(t.texWidth,dn),n.uniform1i(t.sides,Y),n.uniformMatrix4fv(t.viewProj,!1,he),n.uniform1f(t.pixelScale,L),n.uniform1f(t.radius,ee/2),n.uniform1f(t.widen,M),n.uniform1f(t.minRadius,N),n.uniform3f(t.plane,I.x,I.y,Re),n.uniform4f(t.shading,ze.ambient,ze.diffuse,ze.specular,ze.shininess),n.uniform3f(t.light,Be.x*Math.cos(Ve),Be.y*Math.cos(Ve),Math.sin(Ve)),n.uniform3f(t.color,He[0],He[1],He[2]),n.uniform4f(t.ply,ze.ply,ze.plyPitch,ze.plyContrast,ze.plySlope),P.fov>0?n.uniform4f(t.eye,I.x+Ue[2]*P.eye,I.y+Ue[6]*P.eye,Ue[10]*P.eye,1):n.uniform4f(t.eye,Ue[2],Ue[6],Ue[10],0),Ae&&i&&n.uniform4f(i,Q(Ae.gain,0),Tn[Ae.profile]??Tn.wave,Q(Ae.notch,0),0),(Me||Ie)&&o&&(n.uniform4f(t.silk,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.shift,0),Math.min(1,Math.max(0,Q(o.dim,0)))),n.uniform1f(t.streak,Math.max(0,Q(o.streak,ln)))),(Ne||Le)&&o&&r&&n.uniform3f(r,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.rim,0)),n.uniform4f(t.shadowColor,S[0],S[1],S[2],S[3]),n.uniform1f(t.fringe,pn),n.uniform4f(t.penumbra,We,Ge,Be.x,Be.y),n.uniform3f(t.cloth,x[0],x[1],x[2]),n.uniform2f(t.viewport,n.drawingBufferWidth,n.drawingBufferHeight),t),qe=Ke(Fe),Je=Ke(Pe);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let Ye=Uint32Array.BYTES_PER_ELEMENT,Xe=(ie+ae+oe)*Ye;y&&d?Te(y,d,t,p,x,He,Be,Ve,Ke,Xe):g&&E?(n.disable(n.DEPTH_TEST),n.blendEquation(C?n.MIN:n.MAX),n.uniform1i(Je.mode,Sn),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,Xe),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST)):g&&(n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(Je.mode,vn),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,Xe),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(Je.fillAlpha,x[3]),n.uniform1i(Je.mode,xn),n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST)),d?we(d,e,t,P,He,ze,I):(n.useProgram(a.program),n.uniform1i(a.u.mode,_n),n.uniformMatrix4fv(a.u.viewProj,!1,he),n.uniform3f(a.u.plane,I.x,I.y,Re),n.depthMask(!0),n.depthFunc(n.LESS),n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),n.useProgram(Pe.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(Je.mode,gn),n.drawElements(n.TRIANGLES,ie,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),ae>0&&(n.uniform1i(Je.mode,yn),n.drawElements(n.TRIANGLES,ae,n.UNSIGNED_INT,ie*Ye)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.useProgram(Fe.program),n.uniform1i(qe.mode,bn),n.uniform1i(qe.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,Xe),n.uniform1i(qe.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),n.drawElements(n.TRIANGLE_STRIP,se,n.UNSIGNED_INT,Xe)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null))};return ge(t),{draw(e,t){Ee(sr(e),t)},drawTyped:Ee,resize:_e,materialNote:()=>l&&(u?pe?.silkUnavailable()??!1:c)||m&&(u?pe?.rubberUnavailable()??!1:p)||b&&(u?pe?.glassUnavailable()??!1:x||ee)?Nt:null}}var _r=1.1868238913561442,vr=1.2566370614359172,$={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:vr,elevation:_r,p:.4,k:.07,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowStrength:1,lightSize:10*Math.PI/180,shade:ot,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,plyMode:`shade`,plyProfile:`wave`,plyGain:10,plyNotch:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,glassTint:.5,glassEdge:5,glassMirror:0,glassGloss:.5,glassSharpness:30,glassEta:1.5,glassDispersion:0,glassSecondGloss:.5,glassSecondWidth:.3,glassDispersionMode:`trt`,glassSecondShift:.35,glassShadowClear:.5,glassCausticGain:1,glassCausticSamples:32,glassCausticBend:1,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:cn,light:{dir:a(vr),elevation:_r}},{width:yr,...br}=c($),xr=3e3;function Sr(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function Cr(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:xr},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=Sr(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var wr=4,Tr=2**-53;function Er(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=wr)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<Tr&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function Dr(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return kr(s,e,t,n,r,i,a,o);if(c&&a>0)return Or(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=Sr(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function Or(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function kr(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return Er(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function Ar(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function jr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=Dr(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,Ar(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<Ar(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var Mr=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},Nr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,Pr=e=>e>0&&e<1?e:$.stretchSmoothDecay,Fr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap;function Ir(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Lr(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}function Rr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;if(a.last!==null&&(a.driver.step(n-a.last),a.driver.idle)){r(a.from.length,a.to);return}a.last=n;let o=Lr(a.seq,a.from,a.to,a.ex,a.L0-a.driver.value);a.current=o,e.draw(o,Ir(o),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<Ir(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=new Mr(Nr(e.accel()),Pr(e.decay()),Fr(e.snap()),{value:Number.isFinite(d)?d:0});f.to(0);let p=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:f,last:null,frame:null,current:c},p||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function zr(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function Br(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var Vr=e=>Math.min(1,Math.max(0,e)),Hr=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function Ur(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=Br(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=Hr(i,n,a>0?Vr(l/a):1)}return c}let u=o>0;if(u&&s>0)return Wr(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?Vr((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=Hr(s,n,g),f=g,d+=m,p+=1}return c}function Wr(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return Er(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=Hr(n[a],r,i)}),e}function Gr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Kr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=Ur(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,Gr(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<Gr(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=zr(c,n,o,e.speed()),m=Br(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function qr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var Jr=Math.PI/4,Yr=.8,Xr=-Math.SQRT1_2,Zr=-Math.SQRT1_2;function Qr(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function $r(e,t){e.fillStyle=`#000000`,e.fillStyle=t.background;let n=String(e.fillStyle),r=Qr(n),i=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(n),a=r??(i?[Number(i[1]),Number(i[2]),Number(i[3])]:[0,0,0]);return`rgb(${ct([a[0]/255,a[1]/255,a[2]/255,1],st(t)).slice(0,3).map(e=>Math.round(e*255)).join(`, `)})`}var ei=256,ti=1.25;function ni(e,t){if(t&&t.front===e)return t;let n=Qr(e)??[255,255,255],r=[];for(let e=0;e<ei;e+=1){let t=e/255*ti,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function ri(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function ii(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function ai(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function oi(e,t,n,r,i,a,o){return ri(e,t,n,a,o)-r*ai(e,t,n,i,a,o)}function si(e,t,n,r,i,a,o){return ii(e,t,n,a,o)-r*ai(e,t,n,i,a,o)}function ci(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??Xr,u=n.light?.dir.y??Zr,d=n.light?.elevation??Jr,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*Yr,v=.9*Yr;e.globalAlpha=1,e.fillStyle=$r(e,n);for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(oi(s,a,c,l,f,t,1),si(s,a,c,u,f,t,1)),e.lineTo(oi(s,a,c,l,f,t,-1),si(s,a,c,u,f,t,-1)),e.lineTo(oi(s,a,c,l,f,t+1,-1),si(s,a,c,u,f,t+1,-1)),e.lineTo(oi(s,a,c,l,f,t+1,1),si(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/ti*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(ri(s,a,c,t,1),ii(s,a,c,t,1)),e.lineTo(ri(s,a,c,t,-1),ii(s,a,c,t,-1)),e.lineTo(ri(s,a,c,t+1,-1),ii(s,a,c,t+1,-1)),e.lineTo(ri(s,a,c,t+1,1),ii(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function li(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=ni(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:ni(e,i),ci(n,t,a,r,i)}else{n.globalAlpha=1,n.strokeStyle=$r(n,a),n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(qr(e),t)},drawTyped:s,resize:o}}var ui=127;function di(){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0}}}function fi(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return di();let i=e.getImageData(0,0,n,r).data,a=n,o=r,s=-1,c=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=ui||(a=Math.min(a,t),o=Math.min(o,e),s=Math.max(s,t),c=Math.max(c,e));let l=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>ui};return s<a||c<o?{inside:l,bounds:{x:0,y:0,w:0,h:0}}:{inside:l,bounds:{x:a/t,y:o/t,w:(s-a+1)/t,h:(c-o+1)/t}}}async function pi(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?di():(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),fi(i,n))}function mi(e,t,n,r=`machine`){let i=e.length,a=()=>Int32Array.from({length:i},(e,t)=>t);if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=hi(i,v,y),O=new Int32Array(i),k=0;for(let{c:e}of E)for(let t of gi(e.members,D,h,v,y)){let e=t.length;if(r===`hand`){let n=Math.floor((e-1)/2);for(let e=n;e>=0;--e)O[k++]=t[e];for(let r=n+1;r<e;r+=1)O[k++]=t[r]}else for(let e of t)O[k++]=e}return O}function hi(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function gi(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function _i(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function vi(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=_i(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var yi=2,bi=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,xi=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/yi),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),Si=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Ci(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=xi(a);if(n=o,r&&bi(r.key,o))return Si(r.result);let s=i.find(e=>bi(e.key,o));if(s)return Si(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,yi);return{stitches:vi(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&bi(n,o)&&(r={key:o,result:e}),Si(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function wi(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function Ti(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*wi(o,r)}})}function Ei(e,t,n){return Math.min(t,n*e)}var Di=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),Oi=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),ki=12,Ai=2e-14;function ji(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<Di.length;r++){let s=Di[r],c=Oi[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function Mi(e,t,n){if(n===0)return e;let[r,i]=ji(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<ki;n++){let[n,r]=ji(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=Ai*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function Ni(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<ki;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=Ai*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function Pi(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=Mi(a,t,n),s=t.n-1,c=Array(t.n),l=Math.abs(r),u=n===0||l===0?0:Math.sqrt(Math.max(0,o*o-i*i)),d=n===0||l===0?0:Ni(u/l,t.work);if(n===0||l!==0&&!(d>0)){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*wi(a,t.p)}}return Ii(e,c,t.tau)}if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*wi(a,t.p)}}return Ii(e,c,t.tau)}let f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*wi(u,t.p)}}return Ii(e,c,t.tau)}function Fi(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function Ii(e,t,n){return Fi(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function Li(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=Mi(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{Fi(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)},f=Math.abs(a),p=i===0||f===0?0:Math.sqrt(Math.max(0,c*c-o*o)),m=i===0||f===0?0:Ni(p/f,t.work);if(i===0||f!==0&&!(m>0)){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*wi(r,t.p))}d();return}if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*wi(a,t.p))}d();return}let h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*wi(c,t.p))}d()}var Ri=64,zi=256,Bi=4,Vi=16,Hi=Math.sin(Math.PI/18),Ui=new Float64Array(Ri),Wi=new Float64Array(Ri);function Gi(){let e=Ri/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=Ri;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=Ri*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);Ui[t]=(1-e)*.5,Ui[63-t]=(1+e)*.5,Wi[t]=r,Wi[63-t]=r}}Gi();function Ki(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<Ri;n++){let o=Ui[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*Wi[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=Ri),[r,i]}var qi=new Map;function Ji(e){let t=qi.get(e);if(t)return t;let n=new Float64Array(zi),r=new Float64Array(zi);for(let t=0;t<zi;t++){let i=t/255;n[t]=Bi*i*i,r[t]=Ki(n[t],e)[0]}let i={p:e,r:n,length:r};return qi.set(e,i),i}function Yi(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function Xi(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?Ki(s,r,t.work)[0]:t.L0/o)*(1+n),l=Yi(Ji(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,Vi);e++){let[e,n]=Ki(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function Zi(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/Hi),a=Math.min(d,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(d,a):Math.min(d,Math.max(0,a+o))}function Qi(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return Ti(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=Xi(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return Ti(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=Zi(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*wi(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function $i(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:Xi(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=Zi(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*wi(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var ea={shape:j,shapeInto:M},ta=[[`bezier`,ea],[`catenary`,{shape:Pi,shapeInto:Li}],[`arch`,{shape:Qi,shapeInto:$i}],[`wire`,{shape:Ue,shapeInto:We,boundInto:Qe}]],na=new Map(ta);function ra(){return ta.map(([,e])=>e)}function ia(e){return na.get(e)??ea}function aa(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var oa=1e-12;function sa(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>oa*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var ca=33,la=[0,.25,.5,.75,1].map(e=>e*2),ua=[-u,0,u],da=8,fa=Ci(pi),pa=null,ma=0;function ha(e){return $}function ga(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var _a=new WeakMap;function va(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var ya=0,ba,xa;function Sa(e){xa=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Ca=(e,t,n)=>({x:e.x+t,y:e.y+n});function wa(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function Ta(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function Ea(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function Da(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function Oa(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function ka(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function Aa(e){return{smax:ka(e.wireSmax,1,N),lref:Oa(e.wireLref,80),alignScale:Oa(e.alignScale,60)}}var ja=/^#[0-9a-f]{6}$/i;function Ma(e){return Oa(e.bandWidth,$.bandWidth)}function Na(e){return e.section===`band`}function Pa(e){return Na(e)?Ma(e)/2:e.width/2}function Fa(e){return Na(e)?0:e.width}function Ia(e){return Na(e)?Ma(e):e.width}function La(e){return e.stretchMode!==`absolute`}function Ra(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:$.stretchUnit}function za(e,t,n,r){if(La(r)||e===0)return e;let i=O(t,n),a=e*Ra(r)/i;return Number.isFinite(a)&&a>0?a:0}function Ba(e,t,n){return Math.max(2,za(2,e,t,n))}function Va(e,t){let n=new Float64Array(e.length);if(!La(t)){let e=Ra(t);return n.fill(e>0?e:0)}let i=r(t.pitch,Fa(t),t.elevation,t.shadowRatio);for(let r=0;r<e.length;r+=1){let a=e[r],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[r]=O(a,Ei(o,i,t.k))}return n}function Ha(e){let t=ia(e.model)===ia(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:$.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:$.gravityBeta,i=2*Math.PI,o=Aa(e);return{...e,stretch:Ea(e.stretch,2),stretchMode:La(e)?`ratio`:`absolute`,stretchUnit:Ra(e),twist:Ea(e.twist,u),cameraTilt:Ea(e.cameraTilt,u),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:$.cameraTurn,cameraZoom:Oa(e.cameraZoom,$.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:$.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:$.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:$.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:$.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:$.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:$.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:$.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:$.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:Ea(e.align,1),phiMax:Ea(e.phiMax,d),phiRef:Da(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:$.lightAzimuth,stretchDuration:Oa(e.stretchDuration,$.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,stretchSpeed:Oa(e.stretchSpeed,$.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:$.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:$.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:$.stretchSmoothSnap,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:Oa(e.stretchLineDuration,$.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,wireSmax:o.smax,wireLref:o.lref,alignScale:o.alignScale,section:Na(e)?`band`:`round`,bandWidth:Ma(e),bandFront:ja.test(e.bandFront)?e.bandFront:$.bandFront,bandBack:ja.test(e.bandBack)?e.bandBack:$.bandBack,material:e.material===`silk`||e.material===`rubber`||e.material===`glass`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:$.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:$.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:$.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):$.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):$.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:$.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:$.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:$.rubberRim,glassTint:Number.isFinite(e.glassTint)?e.glassTint:$.glassTint,glassEdge:Number.isFinite(e.glassEdge)?e.glassEdge:$.glassEdge,glassMirror:Number.isFinite(e.glassMirror)?e.glassMirror:$.glassMirror,glassGloss:Number.isFinite(e.glassGloss)?e.glassGloss:$.glassGloss,glassSharpness:Number.isFinite(e.glassSharpness)?e.glassSharpness:$.glassSharpness,glassEta:Number.isFinite(e.glassEta)?e.glassEta:$.glassEta,glassDispersion:Number.isFinite(e.glassDispersion)?e.glassDispersion:$.glassDispersion,glassSecondGloss:Number.isFinite(e.glassSecondGloss)?e.glassSecondGloss:$.glassSecondGloss,glassSecondWidth:Number.isFinite(e.glassSecondWidth)?e.glassSecondWidth:$.glassSecondWidth,glassDispersionMode:e.glassDispersionMode===`shift`?`shift`:`trt`,glassSecondShift:Number.isFinite(e.glassSecondShift)?e.glassSecondShift:$.glassSecondShift,glassShadowClear:Number.isFinite(e.glassShadowClear)?e.glassShadowClear:$.glassShadowClear,glassCausticGain:Number.isFinite(e.glassCausticGain)?e.glassCausticGain:$.glassCausticGain,glassCausticSamples:Number.isFinite(e.glassCausticSamples)?Math.max(1,Math.round(e.glassCausticSamples)):$.glassCausticSamples,glassCausticBend:Number.isFinite(e.glassCausticBend)?e.glassCausticBend:$.glassCausticBend,plyMode:e.plyMode===`normal`?`normal`:`shade`,plyProfile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,plyGain:Number.isFinite(e.plyGain)?e.plyGain:$.plyGain,plyNotch:Number.isFinite(e.plyNotch)?e.plyNotch:$.plyNotch,light:{dir:a(e.lightAzimuth),elevation:e.elevation}}}function Ua(e,t,n,i,a,o,s){let c={dir:n.light.dir,elevation:n.elevation},l=r(n.pitch,Fa(n),c.elevation,n.shadowRatio),f=Ea(n.phiMax,d),p=Ea(n.twist,u),m=Ea(n.align,1),h=Aa(n),g=2*Math.PI,_={alpha:(n.gravityAlpha%g+g)%g,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let r=0;r<t.length;r+=1){let u=t[r],d=Ea(a===void 0?n.stretch:a[r],2);if(s){let e=r*4;if(s.valid[r]===1&&Object.is(s.e[r],d)&&Object.is(s.ends[e],u.a.x)&&Object.is(s.ends[e+1],u.a.y)&&Object.is(s.ends[e+2],u.b.x)&&Object.is(s.ends[e+3],u.b.y))continue;s.valid[r]=1,s.e[r]=d,s.ends[e]=u.a.x,s.ends[e+1]=u.a.y,s.ends[e+2]=u.b.x,s.ends[e+3]=u.b.y}let g=Math.hypot(u.b.x-u.a.x,u.b.y-u.a.y),v=e.start[r],y=Ei(g,l,n.k),b=za(d,u,y,n),x=La(n)?void 0:Ba(u,y,n);i.shapeInto(u,{e:b,H:y,p:n.p,n:ca,phiMax:f,eRef:Da(n.phiRef),tau:o===void 0?p*aa(u):o,twist:p,gravity:_,align:m,...h,...x===void 0?{}:{eMax:x}},e.center,v*3);let S=e.start[r+1]-v,C=Math.tan(c.elevation);for(let t=0;t<S;t+=1){let n=v+t,r=v+(t===0?0:t-1),i=v+(t===S-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],s=Math.hypot(a,o),l=-o/s,u=a/s;e.normal[n*2]=l,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/C;e.shadow[n*2]=d-c.dir.x*t,e.shadow[n*2+1]=f-c.dir.y*t}e.lightSide[n]=c.dir.x*l+c.dir.y*u}e.band&&e.bandNormal&&sa(e.center,v,S,u,e.band,e.bandNormal)}}function Wa(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function Ga(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,Fa(e),e.shadowRatio,e.k,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function Ka(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function qa(){let e,t,n,r,i=0,a=e=>{let t=e*ca;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(o,s,c){e&&t&&n&&e.count===o.length||(e=a(o.length),t=a(o.length),n={e:new Float64Array(o.length),ends:new Float64Array(o.length*4),valid:new Uint8Array(o.length)},r=void 0);let l=Ga(s);Ka(r,l)||n.valid.fill(0),r=l,Na(s)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=o.length;t+=1)e.start[t]=t*ca;return Ua(e,o,s,ia(s.model),c,void 0,n),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal)),t},get allocations(){return i}}}function Ja(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function Ya(e,t,n,r,i){let a=e.length*ca,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*ca;return Ua(o,e,t,n,r,i),Ja(o)}function Xa(e){let t=Aa(e);return JSON.stringify([e.text,e.font,e.angle,e.pitch,Math.min(e.step,.5),e.mergeGap,e.minLen,Fa(e),e.shadowRatio,e.elevation,e.light.dir.x,e.light.dir.y,e.p,e.k,e.phiMax,Da(e.phiRef),(e.gravityAlpha%(2*Math.PI)+2*Math.PI)%(2*Math.PI),t.smax,t.lref,Pa(e),La(e)?`ratio`:[`absolute`,Ra(e)]])}var Za=[0,d/2,d],Qa=[0,d];function $a(e){let t=e.start[e.count];return{count:e.count,start:e.start,center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}}function eo(e,t,n,r,i){let a=Math.tan(n.elevation),o=n.light.dir.x/a,s=n.light.dir.y/a,c=e[0],l=e[e.length-1],u=t.map(e=>e===d?1:Math.sin(e)),f=t.map(e=>e===d?0:Math.cos(e)),p=new Float64Array(t.length),m=u.map(e=>e*e);for(let n=0;n<c.count;n+=1){let a=c.start[n],h=c.start[n+1],g=a+(h-a-1>>1),_=c.center[g*3+2];for(let t=0;t<e.length;t+=1){let n=e[t],r=Math.hypot(n.center[g*3]-c.center[g*3],n.center[g*3+1]-c.center[g*3+1],n.center[g*3+2]);p[t]=t===0||!(_>0)||!(r>0)?1:r/_}let v=p[e.length-1],y=e=>{let n=Math.sin(e)**2,r=0;for(let e=0;e<t.length;e+=1){let i=p[e];for(let r=0;r<t.length;r+=1)r!==e&&(i*=(n-m[r])/(m[e]-m[r]));r+=i}return r};for(let e=a;e<h;e+=1){let n=c.center[e*3],a=c.center[e*3+1],m=c.center[e*3+2],h=(l.center[e*3]-n)/v,g=(l.center[e*3+1]-a)/v;for(let e=0;e<4;e+=1){let c=e%2==0?n:a,l=e%2==0?h:g,_=e<2?0:-(e%2==0?o:s)*m,v=-1/0,b=1/0;for(let e=0;e<t.length;e+=1){let t=p[e]*(l*u[e]+_*f[e]);v=Math.max(v,c+t),b=Math.min(b,c+t)}let x=Math.hypot(l,_),S=Math.atan2(l,_);S>0&&S<d&&(v=Math.max(v,c+y(S)*x));let C=Math.atan2(-l,-_);C>0&&C<d&&(b=Math.min(b,c-y(C)*x)),e%2==0?(i.minX=Math.min(i.minX,b-r),i.maxX=Math.max(i.maxX,v+r)):(i.minY=Math.min(i.minY,b-r),i.maxY=Math.max(i.maxY,v+r))}}}}function to(e,t){let n=Xa(t);if(ba?.key===n)return ba.extent;ya+=1;let i={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},a=Pa(t),o=e.length*ca,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*ca;let c=[];for(let n of ra()){if(!n.boundInto){let r=n===ia(`bezier`)?Za:n===ia(`arch`)?Qa:void 0;if(r){for(;c.length<r.length;)c.push($a(s));let o=c.slice(0,r.length);for(let s of la)r.forEach((r,i)=>Ua(o[i],e,{...t,stretch:s,phiMax:0},n,void 0,r)),eo(o,r,t,a,i);continue}let l=ua;for(let r of la)for(let c of l){Ua(s,e,{...t,stretch:r},n,void 0,c);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1],r=s.shadow[e*2],o=s.shadow[e*2+1];i.minX=Math.min(i.minX,t-a,r-a),i.minY=Math.min(i.minY,n-a,o-a),i.maxX=Math.max(i.maxX,t+a,r+a),i.maxY=Math.max(i.maxY,n+a,o+a)}}}if(n.boundInto){let o=Aa(t),s=r(t.pitch,Fa(t),t.elevation,t.shadowRatio),c={light:{dir:t.light.dir,elevation:t.elevation},width:2*a};for(let r of e){let e=Ei(Math.hypot(r.b.x-r.a.x,r.b.y-r.a.y),s,t.k);n.boundInto(r,{e:0,H:e,p:t.p,n:ca,phiMax:0,eRef:1,gravity:{alpha:t.gravityAlpha,beta:0},smax:o.smax,lref:o.lref},Ba(r,e,t),i,c)}}}return Number.isFinite(i.minX+i.minY+i.maxX+i.maxY)||(i.minX=0,i.minY=0,i.maxX=0,i.maxY=0),ba={key:n,extent:i},i}async function no(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=Ha(e),{light:a,...o}=i,{stitches:s,bounds:l}=await fa.get(i);pa?.builds!==fa.builds&&(pa={builds:fa.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=pa.orders[u];d||(d=mi(s,i.angle,i.pitch,u),pa.orders[u]=d,ma+=1);let f=_a.get(r),p=f?.itemsStage??qa(),m=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>Ea(e,2)):void 0,h=p.build(s,i,m),g=Ya(s,i,ia(i.model),s.map(()=>0),0),_=to(s,i),v=_.maxX-_.minX,y=_.maxY-_.minY,b=Math.max(1,Math.ceil(v+16)),x=Math.max(1,Math.ceil(y+16)),S=da-_.minX+b-(v+16),C=da-_.minY+x-(y+16),w=wa(window.devicePixelRatio),T=window.innerWidth,E=window.innerHeight,D={cssW:T,cssH:E,dpr:w,scale:1},O=b<=T&&x<=E,k=O?{cssW:b,cssH:x,dpr:w,scale:1}:D,A=i.cameraTilt,j=i.cameraTurn,M=i.cameraZoom,N=f;if(!N){let e,t=!0,n=!1;try{e=gr(r,D),n=!0}catch{e=li(r,k),t=!1}N={renderer:e,webgl:t,viewportWidth:T,viewportHeight:E,dpr:w,rendererBuilds:1,itemsStage:p,localStitches:s,resolved:i,typedItems:h,offsetX:S,offsetY:C,...n?{mesh:!0}:{}},_a.set(r,N)}let P=N.webgl?A:0,F=N.webgl?j:0,I=N.webgl?M:1,ee=P!==0||F!==0||I!==1,L=N.mesh!==void 0,te=L||ee||!O;N.renderer.resize(te?D:k),f&&(N.viewportWidth=T,N.viewportHeight=E,N.dpr=w);let R=va(g,Ia(i)),z=R?R.x+S:b/2,B=R?R.y+C:x/2,ne=Ta(T/2+i.cameraPanX-z,window.devicePixelRatio),V=Ta(E/2+i.cameraPanY-B,window.devicePixelRatio),H={x:ne+z,y:V+B},U=te?H.x-z:0,W=te?H.y-B:0,G=S+U,K=C+W,re={x:z+U,y:B+W},q=ee||L?{tilt:P,turn:F,zoom:I,center:re}:void 0,J={x:l.x+G,y:l.y+K,w:l.w,h:l.h},Y=s.map(({a:e,b:t})=>({a:Ca(e,G,K),b:Ca(t,G,K)}));Wa(h,G,K);let ie=Ja(h);r.style.position=`fixed`,r.style.left=`${te?0:ne}px`,r.style.top=`${te?0:V}px`,r.style.transform=`none`;let ae={bounds:J,params:o,stitches:Y,items:ie,display:{scale:1,dpr:w,cssW:b,cssH:x},view:{tilt:P,turn:F,zoom:I,center:H},stitchBuilds:fa.builds,stitchOrder:d,stitchOrderBuilds:ma,extentBuilds:ya,rendererBuilds:N.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:p.allocations,wireClamps:ge().clamps,wireUnconverged:ge().unconverged,peek:()=>Ja(h),stretches:()=>oo(N),...xa?{setCamera:xa}:{}};return N.stretches=m,N.localStitches=s,N.resolved=i,N.typedItems=h,N.offsetX=G,N.offsetY=K,N.view=q,N.snapshot=ae,N.renderer.drawTyped(h,ga(N,c(i))),window.__textweaving=ae,ae}function ro(e){let t=e??document.querySelector(`canvas`);if(t)return _a.get(t)?.webgl}function io(e){let t=e??document.querySelector(`canvas`);return t?_a.get(t)?.renderer.materialNote?.()??null:null}function ao(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=_a.get(n);r?.snapshot&&(r.snapshot.playing=e)}function oo(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function so(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=_a.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:Ea(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>Ea(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches),Wa(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,ga(a,c(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.peek=()=>Ja(a.typedItems),t&&(o.items=Ja(a.typedItems)),o}var co=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowStrength.lightSize.shadowRatio.k.shade.ply.plyPitch.plySlope.shininess.plyContrast.plyMode.plyProfile.plyGain.plyNotch.step.mergeGap.minLen.alignScale.section.bandWidth.bandFront.bandBack.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.glassTint.glassEdge.glassMirror.glassGloss.glassSharpness.glassEta.glassDispersionMode.glassDispersion.glassSecondGloss.glassSecondWidth.glassSecondShift.glassShadowClear.glassCausticGain.glassCausticSamples.glassCausticBend.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),lo=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],uo=[[`together`,`同時`],[`sequence`,`順番`]],fo=[[`absolute`,`絶対値`],[`ratio`,`割合`]],po=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`]],mo=[[`machine`,`機械`],[`hand`,`手`]],ho=[[`round`,`丸い線`],[`band`,`帯`]],go=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`],[`glass`,`ガラス`]],_o=[[`shade`,`明るさの縞`],[`normal`,`法線の揺らぎ`]],vo=[[`trt`,`跳ね返りの屈折`],[`shift`,`照りのずらし`]],yo=[[`wave`,`なだらか`],[`notch`,`切れ込み`],[`scallop`,`丸い膨らみ`]],bo=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`,`lightSize`]),xo=e=>Number.isFinite(e)&&e>0;function So(e){let t=ia(e.model);return lo.find(([e])=>ia(e)===t)?.[0]??`bezier`}var Co=({params:e})=>So(e)===`wire`&&xo(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,wo=e=>Co(e)??(xo(e.params.twist)||xo(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),To=e=>Co(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),Eo=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,Do=e=>e.section===`band`,Oo=e=>e.material===`silk`,ko=e=>e.material===`rubber`,Ao=e=>e.material===`glass`,jo=e=>Oo(e)?`silk`:ko(e)?`rubber`:Ao(e)?`glass`:`standard`,Mo=e=>e.glassDispersionMode===`shift`?`shift`:`trt`,No=e=>e.stretchOrder!==`together`,Po=e=>Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,Fo=e=>e.stretchMode!==`absolute`,Io=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,Lo=e=>Io(e)===`speed`,Ro=e=>Io(e)===`smooth`,zo=`時間の決め方をなめらか以外にすると効く`,Bo=({params:e})=>Ro(e)?null:`時間の決め方をなめらかにすると効く`,Vo={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,plyMode:`round`,plyProfile:`round`,plyGain:`round`,plyNotch:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},Ho=(e,t)=>{let n=Vo[e];return n===void 0||n===(Do(t)?`band`:`round`)},Uo=e=>Eo(e)??(xo(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),Wo=e=>Uo(e)??(e.params.plyMode===`normal`?null:`撚りの表し方を法線の揺らぎにすると効く`),Go=e=>Wo(e)??(e.params.plyProfile===`notch`?null:`溝の形を切れ込みにすると効く`),Ko=e=>Eo(e)??(ko(e.params)?null:`素材をゴムにすると効く`),qo=e=>Eo(e)??(Ao(e.params)?null:`素材をガラスにすると効く`),Jo=e=>qo(e)??(Mo(e.params)===`shift`?null:`分光の作り方を照りのずらしにすると効く`),Yo=e=>qo(e)??(Do(e.params)?`丸い線のガラスの影でだけ効く`:null),Xo=e=>Eo(e)??(Oo(e.params)?null:`素材をシルク・サテンにすると効く`),Zo=Eo,Qo=2*Math.PI,$o=5,es=1e3,ts=e=>Math.min(Math.PI/2,Math.max(0,e)),ns=e=>{let t=(e%Qo+Qo)%Qo;return t<Qo?t:0},rs={gravityBeta:Co,twist:({params:e})=>So(e)!==`wire`||xo(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:wo,gravityAlpha:To,wireSmax:Co,wireLref:Co,alignScale:e=>wo(e)??(xo(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=So(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:xo(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=So(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},ply:Eo,lightSize:Eo,plyPitch:Uo,plySlope:Uo,plyContrast:Uo,plyMode:Uo,plyProfile:Wo,plyGain:Wo,plyNotch:Go,shininess:e=>Eo(e)??`標準の素材には照りが無いので効かない(シルク・ゴムは素材の鋭さのつまみが効く)`,material:Eo,silkGloss:Xo,silkSharpness:Xo,silkShift:Xo,silkStreak:Xo,silkDim:Xo,rubberGloss:Ko,rubberSharpness:Ko,rubberRim:Ko,glassTint:qo,glassEdge:qo,glassMirror:qo,glassGloss:qo,glassSharpness:qo,glassEta:qo,glassDispersion:qo,glassSecondGloss:qo,glassSecondWidth:qo,glassDispersionMode:qo,glassSecondShift:Jo,glassShadowClear:qo,glassCausticGain:Yo,glassCausticSamples:Yo,glassCausticBend:Yo,cameraDragTilt:Zo,cameraDragTurn:Zo,cameraWheelZoom:Zo,cameraFov:Eo,threadWiden:Eo,threadMinRadius:Eo,stretchDuration:({params:e})=>Io(e)===`duration`?No(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>Io(e)===`duration`?No(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>Lo(e)?null:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>Ro(e)||No(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>Ro(e)?zo:null,stretchPull:({params:e})=>Ro(e)?zo:No(e)?null:`伸びの順を順番にすると効く`,stretchPullDelay:({params:e})=>Ro(e)?zo:No(e)?Po(e)>0?null:`引かれの強さを 0 より大きくすると効く`:`伸びの順を順番にすると効く`,stretchSmoothAccel:Bo,stretchSmoothDecay:Bo,stretchSmoothSnap:Bo,stretchUnit:({params:e})=>Fo(e)?`伸びの測り方を絶対値にすると効く`:null},is={shade:e=>e.webgl!==!1&&Ao(e.params)?`ガラスの糸の陰影には効かない(影には効く)`:null,material:e=>Oo(e.params)||ko(e.params)||Ao(e.params)?e.materialNote??null:null};function as(e,t){return bo.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function os(e,t){if(typeof $[e]!=`number`)return t;let n=Number(t);return bo.has(e)?n*Math.PI/180:n}function ss(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function cs(e,t=e.value){return Number(t).toFixed(ss(e.step))}function ls(e,t){let n=Math.max(cs(e,e.min).length,cs(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function us(e,t,n=e.value){t&&(t.textContent=cs(e,n))}function ds(){return n(``,ha(window.location.search))}function fs(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function ps(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function ms(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function hs(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function gs(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 75b50a1 2026-11-26 02:00`}async function _s(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),hs(),gs();let r=e??document.querySelector(`canvas`)??void 0,i=ha(window.location.search),a=n(window.location.search,i),o=null,s=!1,c=!1,u=document.querySelector(`select[data-param="model"]`);if(!u)throw Error(`Missing control for model`);let d=ia(``);for(let[e,t]of lo)(e===`bezier`||ia(e)!==d)&&u.add(new Option(t,e));let f=document.querySelector(`select[data-param="section"]`);if(!f)throw Error(`Missing control for section`);for(let[e,t]of ho)f.add(new Option(t,e));let p=document.querySelector(`select[data-param="material"]`);if(!p)throw Error(`Missing control for material`);for(let[e,t]of go)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="plyMode"]`);if(!m)throw Error(`Missing control for plyMode`);for(let[e,t]of _o)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="plyProfile"]`);if(!h)throw Error(`Missing control for plyProfile`);for(let[e,t]of yo)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="glassDispersionMode"]`);if(!g)throw Error(`Missing control for glassDispersionMode`);for(let[e,t]of vo)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="stretchOrder"]`);if(!_)throw Error(`Missing control for stretchOrder`);for(let[e,t]of uo)_.add(new Option(t,e));let v=document.querySelector(`select[data-param="stretchMode"]`);if(!v)throw Error(`Missing control for stretchMode`);for(let[e,t]of fo)v.add(new Option(t,e));let y=document.querySelector(`select[data-param="stretchTiming"]`);if(!y)throw Error(`Missing control for stretchTiming`);for(let[e,t]of po)y.add(new Option(t,e));let b=document.querySelector(`select[data-param="stitchStyle"]`);if(!b)throw Error(`Missing control for stitchStyle`);for(let[e,t]of mo)b.add(new Option(t,e));let x=document.querySelector(`input[data-param="stretch"]`);if(!x)throw Error(`Missing control for stretch`);x.max=`2`;let S=document.querySelector(`input[data-param="cameraFov"]`);if(!S)throw Error(`Missing control for cameraFov`);S.max=`60`;let C=new Map,w=new Map;for(let e of co){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);C.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(w.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&ls(t,n))}let T=new Map;for(let e of co){if(!rs[e]&&!is[e])continue;let t=C.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),T.set(e,n)}let E=new Map;for(let e of Object.keys(Vo)){let t=C.get(e);E.set(e,t.closest(`.control`)??t.parentElement)}let D=new Set([...E.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),O=()=>{for(let[e,t]of E)t.hidden=!Ho(e,a);for(let e of D){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},k=()=>{O();let e={params:a,webgl:ro(r),materialNote:io(r)};for(let[t,n]of T){let r=rs[t]?.(e)??null,i=C.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??is[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},A=()=>{for(let e of co){let t=e===`stretchOrder`?No(a)?`sequence`:`together`:e===`stretchMode`?Fo(a)?`ratio`:`absolute`:e===`stretchTiming`?Io(a):e===`material`?jo(a):e===`glassDispersionMode`?Mo(a):as(e,a[e]),n=C.get(e);n.value=t;let r=w.get(e);n instanceof HTMLInputElement&&n.type===`range`?us(n,r):r&&(r.textContent=n.value)}},j=null,M=[],N=null,P=()=>{let e=l(a,i),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===N)return;let n=performance.now(),r=M.length<$o?n:M[0]+es;if(r>n)j===null&&(j=setTimeout(()=>{j=null,P()},r-n));else{j!==null&&(clearTimeout(j),j=null),M.push(n),M.length>$o&&M.shift();try{history.replaceState(null,``,t),N=t}catch{}}},F=e=>{x.value=String(e),us(x,w.get(`stretch`),e)},I=null,ee=Cr({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>ao(e,r),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},F(e),k(),so(e,t,r)},finish:e=>{a={...a,stretch:e},P()}}),L=jr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:$.stretchLineDuration,pull:()=>Po(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),ao(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),so(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),te=Kr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?Va(e,Ha(a)):[]},speed:()=>Ha(a).stretchSpeed,together:()=>!No(a),pull:()=>Po(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),ao(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),so(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),R=Rr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?Va(e,Ha(a)):[]},accel:()=>Ha(a).stretchSmoothAccel,decay:()=>Ha(a).stretchSmoothDecay,snap:()=>Ha(a).stretchSmoothSnap,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(I=null),ao(e,r)},draw:(e,t,n)=>{I=n?null:e,a={...a,stretch:t},F(t),k(),so(t,n,r,n?void 0:e)},finish:e=>{I=null,a={...a,stretch:e},P()}}),z={play(e){Ro(a)?R.play(e):Lo(a)?te.play(e):No(a)?L.play(e):ee.play(e)},stop(){ee.stop(),L.stop(),te.stop(),R.stop(),I=null}},B=e=>{z.stop(),a={...a,...e},K(!1)},ne=[];Sa(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);ne.push(t),B(n)}));let V=()=>{let e=ro(r);return e===!0&&Zo({params:a,webgl:e})===null},H=e=>{Number.isFinite(e)&&e>0&&B({cameraZoom:e})},U=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&V())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=V()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){B({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!V())return;B({cameraTilt:ts(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:ns(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(V()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}B(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!V())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;H(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},W=!1,G=async e=>{c=!1,W=!1,s=!0;let t=a,n=ne;ne=[];try{e&&P(),await no(t,r,I??void 0),r?.setAttribute(`aria-label`,fs(t.text)),k()}finally{s=!1;for(let e of n)e();c&&K(W)}},K=(e=!0)=>{c=!0,e&&(W=!0),o!==null||s||(o=requestAnimationFrame(async()=>{o=null,await G(W)}))};for(let e of co)C.get(e).addEventListener(`input`,t=>{z.stop();let n=t.currentTarget;a={...a,[e]:os(e,n.value)},e===`background`&&ps(a.background);let r=w.get(e);n instanceof HTMLInputElement&&n.type===`range`?us(n,r):r&&(r.textContent=n.value),k(),K()}),C.get(e).addEventListener(`change`,P);let re=document.querySelector(`[data-stretch-to="max"]`),q=document.querySelector(`[data-stretch-to="min"]`);if(!re||!q)throw Error(`Missing stretch animation buttons`);re.addEventListener(`click`,()=>z.play(2)),q.addEventListener(`click`,()=>z.play(0));let J=document.querySelector(`[data-reset]`);if(!J)throw Error(`Missing reset button`);J.addEventListener(`click`,()=>{z.stop(),a=ds(),ps(a.background),A(),k(),K()}),r&&U(r),window.addEventListener(`resize`,()=>K()),ms(window,()=>K()),ps(a.background),A(),k(),await G(!1)}await _s();