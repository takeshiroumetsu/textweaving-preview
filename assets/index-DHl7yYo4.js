(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t){return Array.isArray(t)?t.map(e):typeof t==`object`&&t?Object.fromEntries(Object.entries(t).map(([t,n])=>[t,e(n)])):t}var t=new Set([`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`]);function n(n,r){let i=e(r),a=new URLSearchParams(n.startsWith(`?`)?n.slice(1):n);for(let e of Object.keys(r)){if(t.has(String(e))||!a.has(String(e)))continue;let n=a.get(String(e));if(n===null)continue;let o=r[e];if(typeof o==`string`)i[e]=n;else if(typeof o==`number`&&n.trim()!==``){let t=Number(n);Number.isFinite(t)&&(i[e]=t)}}return i}function r(e,t,n,r){return r*(e-t)*Math.tan(n)}var i=[{x:1,y:0},{x:Math.SQRT1_2,y:Math.SQRT1_2},{x:0,y:1},{x:-Math.SQRT1_2,y:Math.SQRT1_2},{x:-1,y:0},{x:-Math.SQRT1_2,y:-Math.SQRT1_2},{x:0,y:-1},{x:Math.SQRT1_2,y:-Math.SQRT1_2}];function a(e){let t=Number.isFinite(e)?e:5*Math.PI/4,n=t/(Math.PI/4),r=Math.round(n);return Math.abs(n-r)<1e-9?{...i[(r%8+8)%8]}:{x:Math.cos(t),y:Math.sin(t)}}function o(e){return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}function s(e,t,n){let r=o(e),i=o(t);return`#${r.map((e,t)=>Math.round(e+n*(i[t]-e))).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function c(e){let t=e.threadColor.toLowerCase();return{background:e.background,width:e.width,ply:e.ply,shade:e.shade,plyPitch:e.plyPitch,plySlope:e.plySlope,shininess:e.shininess,plyContrast:e.plyContrast,...e.plyMode===`normal`?{plyNormal:{profile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,gain:e.plyGain,notch:e.plyNotch}}:{},light:{dir:a(e.lightAzimuth),elevation:e.elevation},...e.section===`band`?{band:{width:e.bandWidth,front:e.bandFront,back:e.bandBack}}:{},...e.material===`silk`?{material:{name:`silk`,gloss:e.silkGloss,sharpness:e.silkSharpness,shift:e.silkShift,dim:e.silkDim,streak:e.silkStreak}}:e.material===`rubber`?{material:{name:`rubber`,gloss:e.rubberGloss,sharpness:e.rubberSharpness,rim:e.rubberRim}}:e.material===`glass`?{material:{name:`glass`,tint:e.glassTint,edge:e.glassEdge,mirror:e.glassMirror,gloss:e.glassGloss,sharpness:e.glassSharpness,eta:e.glassEta,dispersion:e.glassDispersion,secondGloss:e.glassSecondGloss,secondWidth:e.glassSecondWidth}}:{},shadow:{color:`#17221f`,alpha:e.shadowAlpha},layers:[{color:t,widthRatio:1,offsetRatio:0},{color:s(t,`#ffffff`,.3),widthRatio:.6,offsetRatio:.12},{color:s(t,`#ffffff`,.8),widthRatio:.22,offsetRatio:.22}]}}function l(e,n){let r=new URLSearchParams;for(let i of Object.keys(n)){let a=n[i];t.has(i)||typeof a!=`string`&&typeof a!=`number`||e[i]===a||r.set(i,String(e[i]))}return r.toString()}var u=Math.PI/2,d=Math.PI/2,f=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),p=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),m=12,h=2e-14,g=new Float64Array(2),_=1e8,v=.001;function y(e,t,n,r,i,a,o,s){let c=6*a*(1-a),l=3*(1-2*a),u=e*c,d=t*c+n*r*l,f=n*i*l,p=Math.hypot(u,d,f);g[0]+=o*p,s&&p>0&&(g[1]+=o*((t*c*r*l+n*l*l)/p))}var b=new Float64Array(16),x=new Float64Array(16);for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++)b[2*e+n]=.5*(1+t*f[e]),x[2*e+n]=p[e]*.5;var S=new Float64Array(16),C=new Float64Array(16),w=1e-4;function T(e,t,n,r,i){let a=n*r;if(!(a>0))return!1;let o=.5+t/(2*(a+Math.hypot(a,t))),s=Math.hypot(e*6*o*(1-o),n*i*3*(1-2*o)),c=Math.abs(6*t*(1-2*o)-6*a),l=Math.max(v,s/(c*r));if(!(l<_))return!1;let u=Math.asinh(-o/l),d=Math.asinh((1-o)/l)-u;for(let e=0;e<f.length;e++)for(let t=-1,n=0;t<=1;t+=2,n++){let r=u+d*.5*(1+t*f[e]);S[2*e+n]=o+l*Math.sinh(r),C[2*e+n]=p[e]*.5*l*d*Math.cosh(r)}return!0}function E(e,t,n,r,i,a,o,s,c){g[0]=0,g[1]=0,c&&(c.quad+=16);for(let c=0;c<16;c++)y(e,t,n,r,i,o[c],s[c],a)}function D(e,t,n){return E(e.b.x-e.a.x,e.b.y-e.a.y,4*t/3,0,1,!1,b,x,n),g[0]}function O(e,t){return D(e,t)}function k(e,t,n,r,i){let a=4*t.H/3;if(n===0&&!(r>0))return a;let o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s),l=(t.L0===void 0?D(e,t.H,t.work):t.L0)*(1+n),u=Math.max(a,Math.sqrt(Math.max(0,l*l-c*c))),d=T(o,s,u,r,i),f=!1;for(let e=0;e<m;e++){E(o,s,u,r,i,!0,d?S:b,d?C:x,t.work),t.work&&(t.work.newton+=1);let e=g[0]-l;if(!f&&Math.abs(e)<=w*l)f=!0,d=T(o,s,u,r,i);else if(Math.abs(e)<=h*l)break;let n=u-e/g[1];u=Number.isFinite(n)&&n>=a?n:(u+a)*.5}return u}function A(e,t){let n=e===0?0:Math.min(d,t.phiMax)*Math.min(1,e/t.eRef);return t.tau===void 0||t.tau===0?Math.min(d,n):Math.min(d,Math.max(0,n+t.tau))}function j(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=A(n,t),i=Math.sin(r),a=Math.cos(r),o=k(e,t,n,i,a),s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=o*i,u=o*a,d=t.n-1,f=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)f[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)f[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n*2<=d?n/d:1-(d-n)/d,r=t*t,i=3*r-2*r*t,a=3*t*(1-t);f[n]={x:e.a.x+s*i,y:e.a.y+c*i+l*a,z:u*a}}return f}function M(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=A(i,t),o=Math.sin(a),s=Math.cos(a),c=k(e,t,i,o,s),l=e.b.x-e.a.x,u=e.b.y-e.a.y,d=c*o,f=c*s,p=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i*2<=p?i/p:1-(p-i)/p,r=t*t,o=3*r-2*r*t,s=3*t*(1-t);n[a]=e.a.x+l*o,n[a+1]=e.a.y+u*o+d*s,n[a+2]=f*s}}}var N=.45,P=.0025,F=.3,I=.1,ee=1e-12,L={alpha:Math.PI/2,beta:0},R=12,z=2e-13,B=1e-10,V=16384,H=16384,U=1024,W={light:{dir:{x:0,y:0},elevation:Math.PI/2},width:0},te=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],ne=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096],G=te.length*2,K=new Float64Array(G),q=new Float64Array(G),J=new Float64Array(G),re=new Float64Array(G);for(let e=0,t=0;e<te.length;e++)for(let n of[-1,1]){let r=.5*(1+n*te[e]);K[t]=ne[e]*.5,q[t]=6*r*(1-r),J[t]=3*(1-2*r),re[t]=32*r*(1-r)*(1-2*r),t+=1}var Y=new Float64Array(33),ie=new Float64Array(33),ae=new Float64Array(33);for(let e=0;e<=32;e++){let t=e/32,n=t*t;Y[e]=3*n-2*n*t,ie[e]=3*t*(1-t),ae[e]=16*n*(1-t)*(1-t)}var oe=new Float64Array(G),se=new Float64Array(G),ce=new Float64Array(G),le=new Float64Array(G),ue=new Float64Array(G),de=new Float64Array(G),fe=new Float64Array(G),pe=new Float64Array(G),me=0,he=0;function ge(){return{clamps:me,unconverged:he}}function _e(e){return e.a.x<e.b.x||e.a.x===e.b.x&&e.a.y<=e.b.y?e:{a:e.b,b:e.a}}function ve(e){return e.a.x>e.b.x||e.a.x===e.b.x&&e.a.y>e.b.y}function ye(e){let{a:t,b:n}=_e(e);return Math.sin(t.x*12.9898+t.y*78.233+n.x*37.719+n.y*19.913)}function be(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return 2*(n-Math.floor(n))-1}var xe=e=>e*e*e*(e*(e*6-15)+10);function Se(e,t){let n=Math.floor(e),r=Math.floor(t),i=xe(e-n),a=xe(t-r),o=be(n,r),s=be(n+1,r),c=be(n,r+1),l=be(n+1,r+1),u=o+(s-o)*i;return u+(c+(l-c)*i-u)*a}function Ce(e,t){let n=ye(e),r=t.align;if(r===void 0||!(r>0))return n;let i=Math.min(1,r),a=t.alignScale??60,o=(e.a.x+e.b.x)/2,s=(e.a.y+e.b.y)/2,c=Se(o/a,s/a),l=1-i;return l*l*n+2*i*l*c+i*i}var we=e=>Number.isFinite(e)&&e>0?e:0,Te=e=>e.eMax!==void 0&&Number.isFinite(e.eMax)&&e.eMax>2?e.eMax:2;function Ee(e,t){let n=we(t.e);return n===0||t.twist===void 0||t.twist===0?0:Math.min(1,n/t.eRef)*t.twist*Ce(e,t)}var De=e=>({...e,H:Math.abs(e.H),phiMax:0,tau:void 0,gravity:void 0});function Oe(e,t,n,r){M(e,De(t),n,r);let i=Ee(e,t);if(i===0)return;let a=_e(e),o=a.b.x-a.a.x,s=a.b.y-a.a.y,c=Math.hypot(o,s),l=c===0?0:-s/c,u=c===0?0:o/c,d=Math.sin(i),f=Math.cos(i);for(let e=1;e<t.n-1;e++){let t=r+e*3,i=n[t+2];n[t]+=i*d*l,n[t+1]+=i*d*u,n[t+2]=i*f}}function ke(e){let t=_e(e),n=t.b.x-t.a.x,r=t.b.y-t.a.y,i=Math.hypot(n,r);return{a:{x:t.a.x,y:t.a.y},dx:n,dy:r,D:i,cx:i===0?0:n/i,cy:i===0?0:r/i,nx:i===0?0:-r/i,ny:i===0?0:n/i}}function Ae(e,t,n,r,i,a){let o=Math.sin(t),s=Math.cos(t),c=o*e.nx,l=o*e.ny,u=s,d=s*e.nx,f=s*e.ny,p=-o,m=Math.cos(r),h=Math.sin(r),g=m*e.cx+h*e.cy,_=m*d+h*f,v=Math.cos(i),y=Math.sin(i),b=v*(g*e.cx+_*d)+y*a*d,x=v*(g*e.cy+_*f)+y*a*f,S=v*_*p+y*a*p,C=Math.hypot(b,x,S);if(C>1&&(b/=C,x/=C,S/=C),t!==0&&S<0)S=0;else if(t!==0&&S>0){let n=1-Math.abs(t)/F;if(n>0){let e=(1-n)*(b*d+x*f+S*p);b-=e*d,x-=e*f,S-=e*p}else{let t=b*e.nx+x*e.ny;b-=t*e.nx,x-=t*e.ny,S=0}}let w=t===0?n:Math.min(n,.75*s/Math.abs(o));return{ux:c,uy:l,uz:u,gx:b,gy:x,gz:S,c:w}}function je(e,t){for(let n=0;n<G;n++){let r=t.ux*J[n]+t.c*t.gx*re[n],i=t.uy*J[n]+t.c*t.gy*re[n],a=t.uz*J[n]+t.c*t.gz*re[n],o=e.dx*q[n],s=e.dy*q[n];le[n]=o,ue[n]=s,de[n]=r,fe[n]=i,pe[n]=a,oe[n]=o*o+s*s,se[n]=o*r+s*i,ce[n]=r*r+i*i+a*a}}function Me(e,t,n=!1){let r=0,i=0;for(let t=0;t<G;t++){let a=le[t]+e*de[t],o=ue[t]+e*fe[t],s=e*pe[t],c=n?Math.sqrt(oe[t]+2*e*se[t]+e*e*ce[t]):Math.hypot(a,o,s);r+=K[t]*c,i+=K[t]*(n?se[t]+e*ce[t]:a*de[t]+o*fe[t]+s*pe[t])/c}return t&&(t.quad+=16),[r,i]}function Ne(e,t,n){return 4/3*j(e,{...De(t),e:n,n:3})[1].z}function Pe(e,t,n,r){let i=0,a=0;for(let t=0;t<G;t++){let o=r.ux*J[t]+r.c*r.gx*re[t],s=r.uy*J[t]+r.c*r.gy*re[t],c=r.uz*J[t]+r.c*r.gz*re[t],l=e.dx*q[t],u=e.dy*q[t],d=l*l+u*u,f=l*o+u*s,p=o*o+s*s+c*c,m=Math.sqrt(d+2*n*f+n*n*p);i+=K[t]*m,a+=K[t]*(f+n*p)/m}let o=n-(i-t)/a;return!Number.isFinite(o)||o<0||o>=n?n:Math.min(n,o+1e-10*Math.max(1,n))}function Fe(e,t,n,r,i,a=n,o=!1){je(e,r);let s=a>0&&a<n,c=s?a:n,l=o?2:1;for(let e=0;e<l;e++){let r=o&&e===0,l=0,u=n;c=e===0&&s?a:n;for(let e=0;e<R;e++){let[e,n]=Me(c,i,r);i&&(i.newton+=1);let a=e-t;if(Math.abs(a)<=(r?B:z)*t)return c;a>0?u=c:l=c;let o=c-a/n;c=Number.isFinite(o)&&o>l&&o<u?o:(l+u)/2}}return he+=1,c}var Ie=new Map;function Le(e,t,n,r){let i=_e(e),a=t.gravity??L;return[i.a.x,i.a.y,i.b.x,i.b.y,t.H,t.p,t.L0,n,t.eRef,t.twist??0,a.alpha,a.beta,r,t.align??0,t.alignScale??60,t.lref??80].join(`|`)}function Re(e,t){let n=we(t.e),r=t.smax??.45;if(n===0||r===0)return;let i=t.work===void 0?Le(e,t,n,r):void 0;if(i!==void 0){let e=Ie.get(i);if(e!==void 0)return e}let a=ke(e),o=(t.L0??O(e,t.H))*(1+n),s=Ee(e,t),c=Math.min(1,n/t.eRef)*r*Math.min(1,o/(t.lref??80));if(c===0)return;let l=t.gravity??L,u=Math.min(1,Math.max(-1,Ce(e,t)/I)),d=Ae(a,s,c,l.alpha,l.beta,u),f=Ne(e,t,n),p={frame:a,radius:Fe(a,o,f,d,t.work,f,!0),deflection:d};if(i!==void 0){if(Ie.size>=V){let e=Ie.keys().next().value;e!==void 0&&Ie.delete(e)}Ie.set(i,p)}return p}function ze(e,t,n,r,i){let{frame:a,radius:o,deflection:s}=i,c=t.n-1,l=ve(e);for(let i=0;i<t.n;i++){let u=r+i*3;if(i===0||i===t.n-1){let t=i===0?e.a:e.b;n[u]=t.x,n[u+1]=t.y,n[u+2]=0;continue}let d=l?c-i:i,f=d*2<=c?d/c:1-(c-d)/c,p=f*f,m=3*p-2*p*f,h=3*f*(1-f),g=16*p*(1-f)*(1-f);n[u]=a.a.x+a.dx*m+o*(h*s.ux+s.c*g*s.gx),n[u+1]=a.a.y+a.dy*m+o*(h*s.uy+s.c*g*s.gy),n[u+2]=o*(h*s.uz+s.c*g*s.gz)}}function Be(e,t,n){let{frame:r,radius:i,deflection:a}=n,o=Ze(e,t,Te(t),W),s=t.n-1,c=ve(e),l=Array(t.n);for(let t=0;t<=s;t++){if(t===0||t===s){let n=t===0?e.a:e.b,r=n.x<o.minX?o.minX:n.x>o.maxX?o.maxX:n.x,i=n.y<o.minY?o.minY:n.y>o.maxY?o.maxY:n.y;(r!==n.x||i!==n.y)&&(me+=1),l[t]={x:r,y:i,z:0};continue}let n=c?s-t:t,u=n*2<=s?n/s:1-(s-n)/s,d=u*u,f=3*d-2*d*u,p=3*u*(1-u),m=16*d*(1-u)*(1-u),h=r.a.x+r.dx*f+i*(p*a.ux+a.c*m*a.gx),g=r.a.y+r.dy*f+i*(p*a.uy+a.c*m*a.gy),_=i*(p*a.uz+a.c*m*a.gz),v=h<o.minX?o.minX:h>o.maxX?o.maxX:h,y=g<o.minY?o.minY:g>o.maxY?o.maxY:g,b=_<0?0:_>o.maxZ?o.maxZ:_;(v!==h||y!==g||b!==_)&&(me+=1),l[t]={x:v,y,z:b}}return l}function Ve(e,t,n,r){let i=Ze(e,t,Te(t),W);for(let e=0;e<t.n;e++){let t=r+e*3,a=Math.min(i.maxX,Math.max(i.minX,n[t])),o=Math.min(i.maxY,Math.max(i.minY,n[t+1])),s=Math.min(i.maxZ,Math.max(0,n[t+2]));(a!==n[t]||o!==n[t+1]||s!==n[t+2])&&(me+=1),n[t]=a,n[t+1]=o,n[t+2]=s}}function He(e,t,n){let r=Ze(e,t,Te(t),W);for(let e of n){let t=Math.min(r.maxX,Math.max(r.minX,e.x)),n=Math.min(r.maxY,Math.max(r.minY,e.y)),i=Math.min(r.maxZ,Math.max(0,e.z));(t!==e.x||n!==e.y||i!==e.z)&&(me+=1),e.x=t,e.y=n,e.z=i}}function Ue(e,t){let n=Re(e,t);if(!n){let n=j(e,De(t)),r=Ee(e,t);if(r!==0){let t=ke(e),i=Math.sin(r),a=Math.cos(r);for(let e=1;e<n.length-1;e++){let r=n[e].z;n[e].x+=r*i*t.nx,n[e].y+=r*i*t.ny,n[e].z=r*a}}return He(e,t,n),n}return Be(e,t,n)}function We(e,t,n,r){let i=Re(e,t);i?ze(e,t,n,r,i):Oe(e,t,n,r),Ve(e,t,n,r)}function Ge(e,t,n,r){e.minX=Math.min(e.minX,t-r),e.minY=Math.min(e.minY,n-r),e.maxX=Math.max(e.maxX,t+r),e.maxY=Math.max(e.maxY,n+r)}function Ke(e,t,n){let r=[-e*Math.sin(n)+t*Math.cos(n),e*Math.sin(n)+t*Math.cos(n)],i=Math.atan2(e,t);for(let a of[i-Math.PI,i,i+Math.PI])a>=-n&&a<=n&&r.push(e*Math.sin(a)+t*Math.cos(a));return[Math.min(...r),Math.max(...r)]}var qe=new Map,Je=new Map;function Ye(e,t,n){let r=ke(e);return[r.dx,r.dy,t.H,n,t.smax??.45,(t.gravity??L).alpha,t.lref??80].join(`|`)}function Xe(e,t,n,r){let i=Je.get(r);if(i!==void 0)return i;let a=ke(e),o=O(e,t.H)*(1+n),s=Ne(e,{...t,L0:void 0,work:void 0},n),c=Math.min(1,n)*u,l=Math.min(1,n)*(t.smax??.45)*Math.min(1,o/(t.lref??80)),d=(t.gravity??L).alpha,f=c===0?0:2*c/30,p=Math.PI/2/6,m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=(e,t)=>{m.push(e),h.push(t.ux),g.push(t.uy),_.push(t.uz),v.push(t.gx),y.push(t.gy),b.push(t.gz),x.push(t.c)};for(let e=0;e<=30;e++){let t=c===0?0:-c+e*f;if(S(s,Ae(a,t,0,d,0,1)),l!==0){let e=Ae(a,t,l,d,0,1);S(Pe(a,o,s,e),e);for(let e=1;e<=6;e++)for(let n of[-1,1]){let r=Ae(a,t,l,d,e*p,n);S(Pe(a,o,s,r),r)}}}let C={target:o,rigid:s,thetaMax:c,cMax:l,radii:m,ux:h,uy:g,uz:_,gx:v,gy:y,gz:b,c:x};if(Je.size>=U){let e=Je.keys().next().value;e!==void 0&&Je.delete(e)}return Je.set(r,C),C}function Ze(e,t,n,r){let i=we(n),a=Ye(e,t,i),o=`${e.a.x}|${e.a.y}|${e.b.x}|${e.b.y}|${a}|${r.light.dir.x}|${r.light.dir.y}|${r.light.elevation}|${r.width}`,s=qe.get(o);if(s)return s;let c=ke(e),{target:l,rigid:u,thetaMax:d,cMax:f,radii:p,ux:m,uy:h,uz:g,gx:_,gy:v,gz:y,c:b}=Xe(e,t,i,a),x={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0,maxZ:u*.75+ee*Math.max(1,l)},S=r.width/2,C=Math.tan(r.light.elevation),w=r.light.dir.x/C,T=r.light.dir.y/C,E={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let e=0;e<=32;e++){let t=Y[e],n=ie[e],i=ae[e],a=c.a.x+c.dx*t,o=c.a.y+c.dy*t,s=u*(n+f*i);Ge(E,a-s,o-s,S),Ge(E,a+s,o+s,S),Ge(E,a-s-w*s,o-s-T*s,S),Ge(E,a+s-w*s,o+s-T*s,S);let l=a,D=o,O=a,k=o;for(let e=0;e<p.length;e++){let t=p[e],r=a+t*(n*m[e]+b[e]*i*_[e]),s=o+t*(n*h[e]+b[e]*i*v[e]),c=t*(n*g[e]+b[e]*i*y[e]);r<l&&(l=r),s<D&&(D=s),r>O&&(O=r),s>k&&(k=s);let u=r-w*c,d=s-T*c;u<l&&(l=u),d<D&&(D=d),u>O&&(O=u),d>k&&(k=d)}let A=u*n,j=Math.sin(d),M=a-A*j*Math.abs(c.nx),N=o-A*j*Math.abs(c.ny),P=a+A*j*Math.abs(c.nx),F=o+A*j*Math.abs(c.ny);M<l&&(l=M),N<D&&(D=N),P>O&&(O=P),F>k&&(k=F);let[I,ee]=Ke(c.nx,-r.light.dir.x/C,d),[L,R]=Ke(c.ny,-r.light.dir.y/C,d),z=a+A*I,B=o+A*L,V=a+A*ee,H=o+A*R;z<l&&(l=z),B<D&&(D=B),V>O&&(O=V),H>k&&(k=H),Ge(x,l,D,S),Ge(x,O,k,S)}let D=f===0?0:P*Math.max(1,l);if(x.minX=Math.max(E.minX,x.minX-D),x.minY=Math.max(E.minY,x.minY-D),x.maxX=Math.min(E.maxX,x.maxX+D),x.maxY=Math.min(E.maxY,x.maxY+D),x.minX=Math.min(x.minX,e.a.x-S,e.b.x-S),x.minY=Math.min(x.minY,e.a.y-S,e.b.y-S),x.maxX=Math.max(x.maxX,e.a.x+S,e.b.x+S),x.maxY=Math.max(x.maxY,e.a.y+S,e.b.y+S),qe.size>=H){let e=qe.keys().next().value;e!==void 0&&qe.delete(e)}return qe.set(o,x),x}function Qe(e,t,n,r,i){let a=Ze(e,t,n,i);r.minX=Math.min(r.minX,a.minX),r.minY=Math.min(r.minY,a.minY),r.maxX=Math.max(r.maxX,a.maxX),r.maxY=Math.max(r.maxY,a.maxY)}function $e(e,t){let n=Math.cos(e),r=Math.sin(e),i=Math.cos(t),a=Math.sin(t);return new Float64Array([i,-a,0,n*a,n*i,-r,r*a,r*i,n])}function et(e){return e===void 0||e.tilt===0&&e.turn===0&&(e.zoom===void 0||e.zoom===1)}var tt=7,nt=Float32Array.BYTES_PER_ELEMENT,rt=`#version 300 es
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
}`,it=`#version 300 es
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
}`,at=`#version 300 es
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
}`,ot=`#version 300 es
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
}`,st=`#version 300 es
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
}`,ct=`#version 300 es
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
}`;function lt(e,t=rt,n=ct){let r=(t,n)=>{let r=e.createShader(t);if(!r)throw Error(`Unable to create WebGL band shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??`WebGL band shader compilation failed`;throw e.deleteShader(r),Error(t)}return r},i=r(e.VERTEX_SHADER,t),a;try{a=r(e.FRAGMENT_SHADER,n)}catch(t){throw e.deleteShader(i),t}let o=e.createProgram();if(!o)throw e.deleteShader(i),e.deleteShader(a),Error(`Unable to create WebGL band program`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`WebGL band program link failed`;throw e.deleteProgram(o),Error(t)}return o}var ut=1e6,dt=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,ft=4,pt=Math.PI/4,mt=-Math.SQRT1_2,ht=-Math.SQRT1_2;function gt(e){let t=lt(e),n=(t,n)=>{let r=e.getUniformLocation(t,n);if(r===null)throw Error(`WebGL band uniform ${n} is unavailable`);return r},r=e=>n(t,e),i={program:t,view:r(`uView`),proj:r(`uProj`),shadow:r(`uShadow`),shadowColor:r(`uShadowColor`),shadowAlpha:r(`uShadowAlpha`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),viewDir:r(`uViewDir`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`)},a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer(),c=e.createBuffer();if(!a||!o||!s||!c)throw Error(`Unable to create WebGL band buffers`);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s);for(let t=0;t<4;t+=1)e.enableVertexAttribArray(t);e.bindVertexArray(null);let l=new Float32Array,u=new Float32Array,d=new Float32Array(16),f=new Float32Array(16),p=0,m=-1,h=-1,g,_=t=>{let n=tt*nt,r=t*n;e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(0,3,e.FLOAT,!1,n,r),e.vertexAttribPointer(1,3,e.FLOAT,!1,n,r+3*nt),e.vertexAttribPointer(2,1,e.FLOAT,!1,n,r+6*nt),e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(3,1,e.FLOAT,!1,nt,t*nt)},v,y=!1,b=new Float32Array,x=()=>{if(v||y)return v;let t;try{t=lt(e,it,at)}catch{y=!0;return}let r=e.createBuffer();if(!r){e.deleteProgram(t),y=!0;return}let i=e=>n(t,e);return v={program:t,view:i(`uView`),proj:i(`uProj`),front:i(`uFront`),back:i(`uBack`),light:i(`uLight`),eye:i(`uEye`),ambient:i(`uAmbient`),diffuse:i(`uDiffuse`),silk:i(`uSilk`),streak:i(`uStreak`),tangentBuffer:r},v},S,C=!1,w=()=>{if(S||C)return S;let t;try{t=lt(e,ot,st)}catch{C=!0;return}let r=e=>n(t,e);return S={program:t,view:r(`uView`),proj:r(`uProj`),front:r(`uFront`),back:r(`uBack`),light:r(`uLight`),eye:r(`uEye`),ambient:r(`uAmbient`),diffuse:r(`uDiffuse`),rubber:r(`uRubber`)},S},T=(e,t)=>{if(e.count!==m||t!==h||!g)return!1;if(g===e.start)return!0;for(let t=0;t<=e.count;t+=1)if(g[t]!==e.start[t])return!1;return!0},E=(t,n)=>{let r=0;for(let e=0;e<t.count;e+=1)r+=Math.max(0,t.start[e+1]-t.start[e]-1);let i=new Uint32Array(r*6),a=0;for(let e=0;e<t.count;e+=1)for(let n=t.start[e];n+1<t.start[e+1];n+=1){let e=n*2;i[a]=e,i[a+1]=e+1,i[a+2]=e+2,i[a+3]=e+2,i[a+4]=e+1,i[a+5]=e+3,a+=6}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),p=a,m=t.count,h=n,g=Uint32Array.from(t.start.subarray(0,t.count+1))},D=(t,n,r)=>{let i=n.proj[11];if(i!==0){let a=-r[12],o=-r[13],s=-n.proj[15]/i-r[14];e.uniform4f(t,r[0]*a+r[1]*o+r[2]*s,r[4]*a+r[5]*o+r[6]*s,r[8]*a+r[9]*o+r[10]*s,1)}else e.uniform4f(t,r[2],r[6],r[10],0)};return{silkUnavailable:()=>y,rubberUnavailable:()=>C,draw(t,n,r,s,m,h){let g=t.band,v=t.bandNormal;if(!g||!v||!n.band)return;let y=t.start[t.count],S=Math.max(0,n.band.width)/2,C=n.light?.dir.x??mt,O=n.light?.dir.y??ht,k=n.light?.elevation??pt,A=Math.tan(k);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o);let j=y*4*tt;l.length<j&&(l=new Float32Array(j),e.bufferData(e.ARRAY_BUFFER,l.byteLength,e.DYNAMIC_DRAW)),T(t,y)||E(t,y);let M=m.view,N=n.view,P=et(N)||N===void 0;u.length<y*4&&(u=new Float32Array(y*4));let F=0;for(let e=0;e<y;e+=1){let n=t.center[e*3+2]+S;n>F&&(F=n)}let I=1/(t.count+1),ee=y*2*tt,L=1/0,R=-1/0;for(let e=0;e<t.count;e+=1){let n=1-(e+1)*I;for(let r=t.start[e];r<t.start[e+1];r+=1){let e=t.center[r*3],i=t.center[r*3+1],a=t.center[r*3+2],o=g[r*3]*S,s=g[r*3+1]*S,c=g[r*3+2]*S;for(let t=0;t<2;t+=1){let d=t===0?1:-1,f=e+d*o,p=i+d*s,m=Math.max(0,a+d*c),h=(r*2+t)*tt,g=ee+h,_=m===0?0:m/A;l[h]=f,l[h+1]=p,l[h+2]=m;let b=r*2+t;if(P)u[b]=n+I*(.5-.45*(F>0?m/F:0));else{let e=M[2]*f+M[6]*p+M[10]*m+M[14];u[b]=e,e<L&&(L=e),e>R&&(R=e)}u[y*2+b]=n+I*.5,l[g]=f-C*_,l[g+1]=p-O*_,l[h+3]=v[r*3],l[h+4]=v[r*3+1],l[h+5]=v[r*3+2],l[h+6]=d,l[g+2]=0,l[g+3]=0,l[g+4]=0,l[g+5]=1,l[g+6]=d}}}if(!P&&y>0){let e=R-L,t=Number.isFinite(e)&&e>1e-9?.98/e:0;for(let e=0;e<y*2;e+=1)u[e]=t===0?.5:.01+(R-u[e])*t}j>0&&e.bufferSubData(e.ARRAY_BUFFER,0,l,0,j),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,u.subarray(0,y*4),e.DYNAMIC_DRAW);let z=h?.name===`silk`?x():void 0,B=h?.name===`rubber`?w():void 0;if(z){b.length<y*6&&(b=new Float32Array(y*6));for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1]-1;for(let e=n;e<=r;e+=1){let i=e>n?e-1:e,a=e<r?e+1:e,o=t.center[a*3]-t.center[i*3],s=t.center[a*3+1]-t.center[i*3+1],c=t.center[a*3+2]-t.center[i*3+2],l=Math.hypot(o,s,c);l>1e-12?(o/=l,s/=l,c/=l):(o=1,s=0,c=0);for(let t=0;t<2;t+=1){let n=(e*2+t)*3;b[n]=o,b[n+1]=s,b[n+2]=c}}}}e.useProgram(i.program);for(let e=0;e<16;e+=1)d[e]=m.view[e],f[e]=m.proj[e];e.uniformMatrix4fv(i.view,!1,d),e.uniformMatrix4fv(i.proj,!1,f);let V=r(n.shadow.color);e.uniform4f(i.shadowColor,V[0],V[1],V[2],V[3]),e.uniform1f(i.shadowAlpha,n.shadow.alpha);let H=r(n.band.front);e.uniform4f(i.front,H[0],H[1],H[2],H[3]);let U=n.band.back===void 0?H:r(n.band.back);e.uniform4f(i.back,U[0],U[1],U[2],U[3]);let W=Math.cos(k);e.uniform3f(i.light,C*W,O*W,Math.sin(k)),e.uniform3f(i.viewDir,M[2],M[6],M[10]),e.uniform1f(i.ambient,s.ambient),e.uniform1f(i.diffuse,s.diffuse),e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE),e.enable(e.DEPTH_TEST),e.depthMask(!0),p>0&&(e.depthFunc(e.NOTEQUAL),e.uniform1i(i.shadow,1),_(y*2),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.clear(e.DEPTH_BUFFER_BIT),e.depthFunc(e.LESS),z&&h?(e.useProgram(z.program),e.uniformMatrix4fv(z.view,!1,d),e.uniformMatrix4fv(z.proj,!1,f),e.uniform4f(z.front,H[0],H[1],H[2],H[3]),e.uniform4f(z.back,U[0],U[1],U[2],U[3]),e.uniform3f(z.light,C*W,O*W,Math.sin(k)),D(z.eye,m,M),e.uniform1f(z.ambient,s.ambient),e.uniform1f(z.diffuse,s.diffuse),e.uniform4f(z.silk,dt(h.gloss,0),Math.max(0,dt(h.sharpness,0)),dt(h.shift,0),Math.min(1,Math.max(0,dt(h.dim,0)))),e.uniform1f(z.streak,Math.max(0,dt(h.streak,ut))),_(0),e.bindBuffer(e.ARRAY_BUFFER,z.tangentBuffer),e.bufferData(e.ARRAY_BUFFER,b.subarray(0,y*6),e.DYNAMIC_DRAW),e.vertexAttribPointer(ft,3,e.FLOAT,!1,3*nt,0),e.enableVertexAttribArray(ft),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0),e.disableVertexAttribArray(ft)):B&&h?(e.useProgram(B.program),e.uniformMatrix4fv(B.view,!1,d),e.uniformMatrix4fv(B.proj,!1,f),e.uniform4f(B.front,H[0],H[1],H[2],H[3]),e.uniform4f(B.back,U[0],U[1],U[2],U[3]),e.uniform3f(B.light,C*W,O*W,Math.sin(k)),D(B.eye,m,M),e.uniform1f(B.ambient,s.ambient),e.uniform1f(B.diffuse,s.diffuse),e.uniform3f(B.rubber,dt(h.gloss,0),Math.max(0,dt(h.sharpness,0)),dt(h.rim,0)),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0)):(e.uniform1i(i.shadow,0),_(0),e.drawElements(e.TRIANGLES,p,e.UNSIGNED_INT,0))),e.disable(e.DEPTH_TEST),e.bindVertexArray(null)}}}var _t=12,vt=.2;function yt(e,t,n,r){return Math.min(n,Math.max(t,typeof e==`number`&&Number.isFinite(e)?e:r))}function bt(e,t){let n=yt(e.shade,0,1,.8),r=yt(e.plyPitch,1,12,6),i=typeof e.width==`number`&&Number.isFinite(e.width)?Math.max(2**-52,e.width):1,a=t??{ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0};return a.ambient=.9-.7*n,a.diffuse=.9*n,a.specular=0,a.shininess=yt(e.shininess,1,256,_t),a.ply=yt(e.ply,0,1,0),a.plyPitch=r*i,a.plyContrast=yt(e.plyContrast,0,1,vt),a.plySlope=yt(e.plySlope,-1,1,.35),a}var xt=`この端末では素材の描き方を作れなかったので、標準で描いている`,St=Math.PI/180,Ct=16,wt=8;function Tt(e,t,n){return Math.max(0,e)+2*Math.max(0,t)+2*Math.max(0,n)+Ct}function Et(e,t,n){let r=Math.max(0,e),i=Math.max(0,t),a=Math.max(0,n);if(!(r>0))return 0;let o=i+a+Ct+wt;return Math.min(60,2*Math.atan(r/(r+i+a+o))/St)}function Dt(e,t){let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t=0;t<e.count;t+=1){let o=e.start[t],s=e.start[t+1];if(!(s<=o))for(let t of[o,s-1]){let o=e.center[t*3],s=e.center[t*3+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}}if(!Number.isFinite(n+r+i+a))return 0;let o=Math.max(Math.abs(n-t.x),Math.abs(i-t.x)),s=Math.max(Math.abs(r-t.y),Math.abs(a-t.y));return Math.hypot(o,s)}function Ot(e){let{cssW:t,cssH:n,center:r}=e,i=Number.isFinite(e.zoom)&&e.zoom>0?e.zoom:1,a=$e(e.tilt,e.turn),o=r.x,s=r.y,c=new Float64Array(16);for(let e=0;e<3;e+=1)c[e]=a[e*3],c[4+e]=a[e*3+1],c[8+e]=a[e*3+2],c[12+e]=-(a[e*3]*o+a[e*3+1]*s);c[15]=1;let l=Et(e.rScene,e.zLimit,e.width),u=Number.isFinite(e.fov)?Math.max(0,e.fov):0,d=Math.min(u,l),f=Tt(e.rScene,e.zLimit,e.width),p=new Float64Array(16),m=2*o/t-1,h=1-2*s/n;if(d>0){let r=e.rScene/Math.tan(d*St/2),a=Math.max(wt,r-f),o=r+f,s=(o+a)/(o-a),l=2*o*a/(o-a);return p[0]=2*i*r/t,p[5]=-2*i*r/n,p[8]=-m,p[9]=-h,p[10]=-s,p[11]=-1,p[12]=m*r,p[13]=h*r,p[14]=s*r-l,p[15]=r,{view:c,proj:p,fov:d,eye:r,near:a,far:o,depthExtent:f}}return p[0]=2*i/t,p[5]=-2*i/n,p[10]=-1/f,p[12]=m,p[13]=h,p[15]=1,{view:c,proj:p,fov:0,eye:0,near:-f,far:f,depthExtent:f}}var kt=1e-12;function At(e,t,n,r,i){let a=Math.abs(e),o=Math.abs(t),s=Math.abs(n),c=0;o<a&&(c=1),s<(c===0?a:o)&&(c=2);let l=c===0?e:c===1?t:n,u=+(c===0)-l*e,d=+(c===1)-l*t,f=+(c===2)-l*n,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p,r[i]=u,r[i+1]=d,r[i+2]=f}var jt=new Float64Array,Mt=new Uint8Array;function Nt(e,t,n,r,i,a,o){if(n<=0)return;let s=Math.max(0,n-1);jt.length<s*3&&(jt=new Float64Array(s*3),Mt=new Uint8Array(s));let c=jt,l=Mt,u=-1,d=0;a[o]=0;for(let n=0;n<s;n+=1){let r=(t+n)*3,i=e[r+3]-e[r],s=e[r+4]-e[r+1],f=e[r+5]-e[r+2],p=Math.hypot(i,s,f);d+=p,a[o+n+1]=d,p>kt?(c[n*3]=i/p,c[n*3+1]=s/p,c[n*3+2]=f/p,l[n]=1,u<0&&(u=n)):l[n]=0}let f=u;for(let e=0;e<s;e+=1)l[e]?f=e:f>=0?(c[e*3]=c[f*3],c[e*3+1]=c[f*3+1],c[e*3+2]=c[f*3+2]):(c[e*3]=1,c[e*3+1]=0,c[e*3+2]=0);for(let e=0;e<n;e+=1){let t=(o+e)*3,a,l,u;if(s===0)a=1,l=0,u=0;else if(e===0||e===n-1){let t=(e===0?0:s-1)*3;a=c[t],l=c[t+1],u=c[t+2]}else{let t=(e-1)*3,n=e*3;a=c[t]+c[n],l=c[t+1]+c[n+1],u=c[t+2]+c[n+2];let r=Math.hypot(a,l,u);r>1e-9?(a/=r,l/=r,u/=r):(a=c[n],l=c[n+1],u=c[n+2])}if(r[t]=a,r[t+1]=l,r[t+2]=u,e===0){At(a,l,u,i,t);continue}let d=t-3,f=i[d]*a+i[d+1]*l+i[d+2]*u,p=i[d]-f*a,m=i[d+1]-f*l,h=i[d+2]-f*u,g=Math.hypot(p,m,h);g>1e-6?(i[t]=p/g,i[t+1]=m/g,i[t+2]=h/g):At(a,l,u,i,t)}}function Pt(e){if(!(e<0))return 2;let t=Math.sqrt(Math.max(0,1-e*e))/-e;return Math.min(2,t)}var Ft=new Float64Array,It=new Float64Array,Lt=new Float64Array;function Rt(e,t){let n=e.start[e.count],r=t??new Float32Array(12*n);Lt.length<n&&(Ft=new Float64Array(n*3),It=new Float64Array(n*3),Lt=new Float64Array(n));let i=e.center;for(let t=0;t<e.count;t+=1){let n=e.start[t],a=e.start[t+1],o=a-n;Nt(i,n,o,Ft,It,Lt,n);for(let e=n;e<a;e+=1){let s=e*12;r[s]=i[e*3],r[s+1]=i[e*3+1],r[s+2]=i[e*3+2],r[s+3]=Lt[e],r[s+4]=Ft[e*3],r[s+5]=Ft[e*3+1],r[s+6]=Ft[e*3+2],r[s+7]=t,r[s+8]=It[e*3],r[s+9]=It[e*3+1],r[s+10]=It[e*3+2];let c=0;o>=2&&e===n?c=-(1+Pt(-Ft[e*3+2])):o>=2&&e===a-1&&(c=1+Pt(Ft[e*3+2])),r[s+11]=c}}return r}var zt=.71,Bt=new Float64Array,Vt=new Float64Array,Ht=new Float64Array;function Ut(e,t,n,r,i,a){if(r<=0)return;let o=n[r];Ht.length<o&&(Bt=new Float64Array(o),Vt=new Float64Array(o),Ht=new Float64Array(o));let s=zt+i;for(let i=0;i<r;i+=1){let r=n[i],o=n[i+1];for(let n=r;n<o;n+=1){let r=n+1<o?n+1:n,i=e[2*n],c=e[2*n+1],l=e[2*r],u=e[2*r+1],d=l-i,f=u-c,p=t[n],m=t[r];Bt[n]=.5*(i+l),Vt[n]=.5*(c+u),Ht[n]=.5*Math.sqrt(d*d+f*f)+(p>m?p:m)+s,a[2*n]=n,a[2*n+1]=n}for(let e=r;e<o;e+=1){let t=Bt[e],n=Vt[e],r=Ht[e],i=a[2*e+1];for(let s=e+1;s<o;s+=1){let o=Bt[s]-t,c=Vt[s]-n,l=r+Ht[s];o*o+c*c<=l*l&&(i=s,e<a[2*s]&&(a[2*s]=e))}a[2*e+1]=i}}}function Wt(e,t,n,r){for(let i=0;i<t;i+=1){let t=e[i],a=e[i+1];for(let e=t;e<a;e+=1)r[e]=n?t+a-1-e:e}}function Gt(e,t,n){let r=0,i=0;for(let n=0;n<t;n+=1){let t=e[n+1]-e[n];t>=2&&(r+=t-1,i+=2)}let a=r*n*6,o=i*(n-2)*3,s=r*6,c=new Uint32Array(a+o+s),l=0;for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];for(let e=t;e+1<i;e+=1)for(let t=0;t<n;t+=1){let r=t+1===n?0:t+1,i=e*n+t,a=e*n+r,o=(e+1)*n+t,s=(e+1)*n+r;c[l++]=i,c[l++]=o,c[l++]=a,c[l++]=a,c[l++]=o,c[l++]=s}}for(let r=0;r<t;r+=1){let t=e[r],i=e[r+1];if(!(i-t<2))for(let e of[t,i-1])for(let t=1;t+1<n;t+=1)c[l++]=e*n,c[l++]=e*n+t,c[l++]=e*n+t+1}for(let n=0;n<t;n+=1){let t=e[n],r=e[n+1];for(let e=t;e+1<r;e+=1){let t=2*e;c[l++]=t,c[l++]=t+1,c[l++]=t+2,c[l++]=t+1,c[l++]=t+3,c[l++]=t+2}}return{index:c,tubeCount:a,capCount:o,shadowCount:s}}function Kt(e){if(!(e>.25))return 6;if(e===1/0)return 24;let t=Math.acos(1-.5/e);return t>0?Math.min(24,Math.max(6,Math.ceil(Math.PI/t))):24}var qt=.7,Jt=1e6,Yt=4294967295,X=1024,Xt=4,Zt=1.5,Qt=0,$t=1,en=2,tn=3,nn=4,rn=5,an=7,on=`#version 300 es
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
  if (uMode == ${$t}) {
    int k = gl_VertexID;
    vec2 corner = vec2((k == 0 || k == 2) ? -1.0 : 1.0, k < 2 ? -1.0 : 1.0);
    gl_Position = clipOf(vec3(uPlane.xy + corner * uPlane.z, 0.0));
    return;
  }
  if (uMode == ${en} || uMode == ${an}) {
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
  if (uMode == ${rn}) {
    // P87: 画面いっぱいの三角形(影の被覆の最大で、影の色を 1 度だけ混ぜる)。
    int k = gl_VertexID;
    gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
    return;
  }
  bool ribbon = uMode == ${nn};
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
  vNormal = uMode == ${tn} ? outward * t : n;
  vWorld = world;
}`,sn=`  float plyWave = 0.5 + 0.5 * sin(6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN));
  float ply = 1.0 - uPly.x * uPly.z * plyWave;
  outColor = vec4(shadeThread(N, T, V, ply) * alpha, alpha);`,cn={wave:0,notch:1,scallop:2},ln=`// P110: 法線の揺らぎ: (溝の深さ plyGain, 溝の形 0 なだらか・1 切れ込み・2 丸い膨らみ, 切れ込みの幅, 未使用)。
uniform vec4 uPlyNormal;
`,un=`2.0`,dn=`  float plyPhase = 6.28318530718 * (vArc / max(uPly.y, 1e-6) + uPly.w * acrossN);
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
  float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${un}, ${un});
  N = normalize(N - plyTilt * grooveDir);
  outColor = vec4(shadeThread(N, T, V, 1.0) * alpha, alpha);`,fn=(e,t=!1,n=!1)=>`#version 300 es
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
${n?ln:``}uniform vec4 uEye;
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
  if (uMode == ${$t}) {
    outColor = vec4(0.0);
    return;
  }
  // P106: 被覆(edgeCoverage)は、使う所(影の帯・縁の帯)でだけ求める(管・蓋は使わない)。uMode は uniform なので、
  // 分岐の中の dFdx も画素の組でそろう。
  if (uMode == ${en}) {
    float coverage = edgeCoverage();
    // 影の濃さ × 被覆を alpha だけに出す(MAX で、画素ごとに被覆の最大を残す)。
    // P104: discard しない(被覆 0 は MAX で効かない。管・蓋と同じ program の深さの検査を後回しにしない)。
    outColor = vec4(0.0, 0.0, 0.0, uShadowColor.a * max(coverage, 0.0));
    return;
  }
  if (uMode == ${an}) {
    float coverage = edgeCoverage();
    // 布の色の上で、影の色を「濃さ × 被覆」の割合で混ぜた色。被覆が大きいほど影の色へ単調に寄るので、重なる帯を MIN(影が布より
    // 暗いとき)か MAX(明るいとき)で合わせると、画素ごとに被覆の最大の 1 度だけの混ぜになる(重なっても 2 度は暗くならない)。
    outColor = vec4(mix(uCloth, uShadowColor.rgb, uShadowColor.a * max(coverage, 0.0)), 1.0);
    return;
  }
  if (uMode == ${rn}) {
    outColor = vec4(uShadowColor.rgb, uFillAlpha);
    return;
  }
  bool ribbon = uMode == ${nn};
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
${n?dn:sn}
}`,pn=`vec3 shadeThread(vec3 N, vec3 T, vec3 V, float ply) {
  float diffuse = max(0.0, dot(N, uLight));
  float brightness = uShading.x + uShading.y * diffuse;
  return uColor * brightness * ply;
}`,mn=`uniform vec4 uSilk;
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
}`,hn=`uniform vec3 uRubber;

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
}`,gn=fn(pn),_n=`#version 300 es
precision highp float;
out vec4 outColor;
void main() {
  outColor = vec4(0.0);
}`,vn=fn(mn),yn=fn(pn,!0),bn=fn(mn,!0),xn=fn(hn),Sn=fn(hn,!0),Z=3,Cn=.25,wn=1.42,Tn=`#version 300 es
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
  float h = max(a0.z, a1.z) + ${wn.toFixed(2)};
  vec2 d = a1.xy - a0.xy;
  float l = length(d);
  vec2 u = l > 1e-6 ? d / l : vec2(1.0, 0.0);
  vec2 n = vec2(-u.y, u.x);
  float along = (c == 1 || c == 4 || c == 5) ? l + h : -h;
  float side = (c == 2 || c == 3 || c == 5) ? h : -h;
  vec2 at = a0.xy + along * u + side * n;
  gl_Position = vec4(at / uViewport * 2.0 - 1.0, 0.0, 1.0);
  vSegment = k;
}`,En=`#version 300 es
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
// ガラス: (照りの鋭さ, 屈折率 η, 線の数, 未使用)。
uniform vec4 uGlassB;
// P118(issue #213、計画 c9 の D6): 分光 (Δη, 2 次の照りの強さ, 幅, 未使用)。
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
    float plyTilt = clamp(uPly.x * uPly.z * uPlyNormal.x * plySlopeH, -${un}, ${un});
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
  if (uGlassC.y != 0.0) {
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
}`,Dn=`#version 300 es
void main() {
  int k = gl_VertexID;
  gl_Position = vec4(k == 1 ? 3.0 : -1.0, k == 2 ? 3.0 : -1.0, 0.0, 1.0);
}`,On=`#version 300 es
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
}`,kn=new Map;function An(e){let t=kn.get(e);if(t)return t;let n,r=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(r)n=[Number.parseInt(r[1],16)/255,Number.parseInt(r[2],16)/255,Number.parseInt(r[3],16)/255,1];else{let t=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)$/i.exec(e);if(t)n=[Number(t[1])/255,Number(t[2])/255,Number(t[3])/255,t[4]===void 0?1:Number(t[4])];else if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);if(t){t.fillStyle=`#000000`,t.fillStyle=e;let r=String(t.fillStyle);r!==e&&(n=An(r))}}}let i=n??[0,0,0,1];return kn.set(e,i),i}function jn(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Unable to create a WebGL shader`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`mesh shader: ${t??``}`)}return r}function Mn(e,t,n,r=on){let i=e.createProgram();if(!i)throw Error(`Unable to create a WebGL program`);let a=[];try{if(a.push(jn(e,e.VERTEX_SHADER,r)),e.attachShader(i,a[0]),a.push(jn(e,e.FRAGMENT_SHADER,t)),e.attachShader(i,a[1]),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw Error(`mesh program: ${e.getProgramInfoLog(i)??``}`);n?.push(...a)}catch(t){for(let t of a)e.deleteShader(t);throw e.deleteProgram(i),t}return i}function Nn(e,t){let n=[],r=[];try{for(let i of t)n.push(Mn(e,i,r));return n}catch{for(let t of r)e.deleteShader(t);for(let t of n)e.deleteProgram(t);return null}}var Pn={points:`uPoints`,shadowPoints:`uShadowPoints`,lines:`uLines`,texWidth:`uTexWidth`,sides:`uSides`,mode:`uMode`,viewProj:`uViewProj`,pixelScale:`uPixelScale`,radius:`uRadius`,widen:`uWiden`,minRadius:`uMinRadius`,plane:`uPlane`,light:`uLight`,color:`uColor`,shading:`uShading`,shadowColor:`uShadowColor`,fillAlpha:`uFillAlpha`,ply:`uPly`,eye:`uEye`,fringe:`uFringe`,viewport:`uViewport`,ribbonPass:`uRibbonPass`,cloth:`uCloth`,silk:`uSilk`,streak:`uStreak`};function Fn(e,t){let n={};for(let r of Object.keys(Pn))n[r]=e.getUniformLocation(t,Pn[r]);return{program:t,u:n}}function Q(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function In(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);return e.forEach((e,n)=>{e.center.forEach((s,c)=>{let l=t[n]+c;r[l*3]=s.x,r[l*3+1]=s.y,r[l*3+2]=s.z,i[l*2]=e.shadow[c].x,i[l*2+1]=e.shadow[c].y,a[l*2]=e.normal[c].x,a[l*2+1]=e.normal[c].y,o[l]=e.lightSide[c]})}),{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var Ln=new Float64Array;function Rn(e,t,n){let r=e.center;Ln.length<e.count&&(Ln=new Float64Array(e.count));for(let i=0;i<e.count;i+=1){let a=e.start[i],o=e.start[i+1],s=0;for(let e=a;e<o;e+=1)s+=t[2]*r[e*3]+t[6]*r[e*3+1]+t[10]*r[e*3+2];Ln[i]=o>a?s/(o-a):0,n[i]=i}let i=(t,n)=>{let i=e.start[t],a=e.start[t+1]-1;return n<3?r[i*3+n]:n<6?r[a*3+n-3]:a-i};n.subarray(0,e.count).sort((e,t)=>{let n=Ln[e]-Ln[t];if(n!==0)return n;for(let n=0;n<7;n+=1){let r=i(e,n)-i(t,n);if(r!==0)return r}return 0})}function zn(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;if(!Number.isFinite(A)||A===0){t.fill(0),t[0]=t[5]=t[10]=t[15]=1;return}let j=1/A;t[0]=(s*k-c*O+l*D)*j,t[1]=(i*O-r*k-a*D)*j,t[2]=(h*C-g*S+_*x)*j,t[3]=(f*S-d*C-p*x)*j,t[4]=(c*E-o*k-l*T)*j,t[5]=(n*k-i*E+a*T)*j,t[6]=(g*b-m*C-_*y)*j,t[7]=(u*C-f*b+p*y)*j,t[8]=(o*O-s*E+l*w)*j,t[9]=(r*E-n*O-a*w)*j,t[10]=(m*S-h*b+_*v)*j,t[11]=(d*b-u*S-p*v)*j,t[12]=(s*T-o*D-c*w)*j,t[13]=(n*D-r*T+i*w)*j,t[14]=(h*y-m*x-g*v)*j,t[15]=(u*x-d*y+f*v)*j}var Bn=new Float64Array,Vn=new Float64Array,Hn=new Float64Array(16);function Un(e,t,n,r,i,a,o,s,c){let l=n-e,u=r-t,d=i-n,f=a-r,p=Math.sqrt(l*l+u*u),m=Math.sqrt(d*d+f*f);if(s||c)return(s?m:p)<.5;if(p<.5||m<.5)return!0;let h=Math.abs(l*f-u*d)/(p*m);return(l*d+u*f)/(p*m)<0||o*h>.5*Math.min(p,m)}function Wn(e,t,n,r,i,a){let o=e.start[e.count]??0;Vn.length<o&&(Bn=new Float64Array(o*2),Vn=new Float64Array(o));let s=r.view,c=r.proj,l=Hn;for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=c[r*4+t]*s[e*4+r];l[e*4+t]=n}let u=l[0],d=l[1],f=l[3],p=l[4],m=l[5],h=l[7],g=l[8],_=l[9],v=l[11],y=l[12],b=l[13],x=l[15],S=i.pixelScale,C=i.radius,w=i.widen,T=i.minRadius,E=i.fringe,D=.5*i.viewportW,O=.5*i.viewportH,k=Bn,A=Vn;for(let e=0,n=0;e<o;e+=1,n+=12){let r=t[n],i=t[n+1],o=t[n+2],s=f*r+h*i+v*o+x,c=S/(s>1e-6?s:1e-6),l=c>0?Math.max(C*c+w,T)/c:C,j=t[n+11];if(j!==0){let e=(j<0?1-Math.abs(j):Math.abs(j)-1)*l;r+=e*t[n+4],i+=e*t[n+5],o+=e*t[n+6]}a&&(a[e*4]=r,a[e*4+1]=i,a[e*4+2]=o,a[e*4+3]=l);let M=f*r+h*i+v*o+x,N=M>1e-6?M:1e-6;k[e*2]=((u*r+p*i+g*o+y)/N+1)*D,k[e*2+1]=((d*r+m*i+_*o+b)/N+1)*O,A[e]=S/N*l+E}for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1],o=a-i>=2;for(let e=i;e<a;e+=1){let n=e===i,s=e===a-1,c=n?e:e-1,l=s?e:e+1,u=o&&Un(k[c*2],k[c*2+1],k[e*2],k[e*2+1],k[l*2],k[l*2+1],A[e],n,s);if(!u&&!s){let t=l===a-1,n=t?l:l+1;u=Un(k[e*2],k[e*2+1],k[l*2],k[l*2+1],k[n*2],k[n*2+1],A[e],!1,t)}t[e*12+7]=2*r+ +!!u}let s=r*8;o?(n[s]=k[i*2],n[s+1]=k[i*2+1],n[s+2]=k[(i+1)*2],n[s+3]=k[(i+1)*2+1],n[s+4]=k[(a-1)*2],n[s+5]=k[(a-1)*2+1],n[s+6]=k[(a-2)*2],n[s+7]=k[(a-2)*2+1]):n.fill(0,s,s+8)}}function Gn(e,t){let n=e.getContext(`webgl2`,{antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!0});if(!n)throw Error(`WebGL2 context is unavailable`);let r=Fn(n,Mn(n,gn)),i=Fn(n,Mn(n,yn)),a=Fn(n,Mn(n,_n)),o,s,c=!1,l=!1,u=!1,d,f,p=!1,m=!1,h=()=>{if(d||p)return d;let e=Nn(n,[xn,Sn]);if(!e)p=!0;else return d={...Fn(n,e[0]),rubber:n.getUniformLocation(e[0],`uRubber`)},f={...Fn(n,e[1]),rubber:n.getUniformLocation(e[1],`uRubber`)},d},g=new Map,_=e=>{let t=g.get(e);if(t!==void 0)return t;let r=e===`silk`?mn:e===`rubber`?hn:pn,i=Nn(n,[fn(r,!1,!0),fn(r,!0,!0)]),a=i?i.map(t=>({...Fn(n,t),rubber:e===`rubber`?n.getUniformLocation(t,`uRubber`):void 0,plyNormal:n.getUniformLocation(t,`uPlyNormal`)})):null;return g.set(e,a),a},v=()=>{if(o||c)return o;let e=Nn(n,[vn,bn]);if(!e)c=!0;else return o=Fn(n,e[0]),s=Fn(n,e[1]),o},y=t.glassReverse===!0,b=!1,x=!1,S,C=()=>{x=!0},w=e=>{let t=n.drawingBufferWidth,r=n.drawingBufferHeight;if(e.width===t&&e.height===r)return!0;e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.activeTexture(n.TEXTURE4);let i=[n.createTexture(),n.createTexture()];i.forEach((e,i)=>{n.bindTexture(n.TEXTURE_2D,e),n.texStorage2D(n.TEXTURE_2D,1,n.RGBA16F,t,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+i,n.TEXTURE_2D,e,0)}),n.bindTexture(n.TEXTURE_2D,null),n.activeTexture(n.TEXTURE0);let a=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,t,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,a),n.bindRenderbuffer(n.RENDERBUFFER,null);let o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindFramebuffer(n.FRAMEBUFFER,null),e.absorb=i[0],e.reflect=i[1],e.depth=a,e.width=t,e.height=r,o},T=()=>{if(x)return;if(!S){let e=[],t=[];try{t.push(Mn(n,En,e,Tn)),t.push(Mn(n,On,e,Dn))}catch{for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let r=n.getExtension(`EXT_color_buffer_float`),i=n.getExtension(`EXT_color_buffer_half_float`),a=r||i?n.createFramebuffer():null;if(!a){for(let t of e)n.deleteShader(t);for(let e of t)n.deleteProgram(e);return C()}let[o,s]=t,c=e=>n.getUniformLocation(o,e);S={line:o,compose:s,framebuffer:a,absorb:null,reflect:null,depth:null,width:-1,height:-1,u:{texWidth:c(`uTexWidth`),viewport:c(`uViewport`),invViewProj:c(`uInvViewProj`),eye:c(`uEye`),light:c(`uLight`),color:c(`uColor`),ply:c(`uPly`),plyNormal:c(`uPlyNormal`),glass:c(`uGlass`),glassB:c(`uGlassB`),glassC:c(`uGlassC`)},which:n.getUniformLocation(s,`uWhich`)},n.useProgram(o),n.uniform1i(c(`uWin`),3),n.uniform1i(c(`uPoints`),0),n.useProgram(s),n.uniform1i(n.getUniformLocation(s,`uAbsorb`),4),n.uniform1i(n.getUniformLocation(s,`uReflect`),5),n.useProgram(null)}if(w(S))return S;let e=S;return e.absorb&&n.deleteTexture(e.absorb),e.reflect&&n.deleteTexture(e.reflect),e.depth&&n.deleteRenderbuffer(e.depth),n.deleteFramebuffer(e.framebuffer),n.deleteProgram(e.line),n.deleteProgram(e.compose),S=void 0,C()},E=[null,null,null],D=[0,0,0],O=2,k=new Float32Array,A=new Float64Array,j=new Float64Array,M=new Int32Array,N=new Int32Array,P=new Float32Array(16),F=new Float64Array(16),I=n.createVertexArray(),ee=n.createBuffer(),L=n.createTexture(),R=n.createTexture(),z=n.createTexture();if(!I||!ee||!L||!R||!z)throw Error(`Unable to create WebGL mesh buffers`);n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bindVertexArray(null);for(let e of[L,R,z])n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.bindTexture(n.TEXTURE_2D,null);let B,V=new Float32Array,H=0,U=new Float32Array,W=0,te=new Float32Array,ne=0,G,K=0,q=0,J=0,re=0,Y=0,ie=new Int32Array,ae=new Int32Array,oe=0,se=new Uint32Array,ce=(e,t,n,r)=>{let i=r;for(let a=0;a<e.count;a+=1){let o=t[a],s=e.start[o],c=e.start[o+1];if(!(c-s<2)){i>r&&(n[i++]=Yt);for(let e=2*s;e<2*c;e+=1)n[i++]=e}}},le,ue={ambient:0,diffuse:0,specular:0,shininess:0,ply:0,plyPitch:0,plyContrast:0,plySlope:0},de=new Float32Array(16),fe=t=>{let n=t.scale??1,r=Math.max(1,Math.round(t.cssW*n*t.dpr)),i=Math.max(1,Math.round(t.cssH*n*t.dpr)),a=t.cssW*n,o=t.cssH*n,s=t.dpr*n;B&&B.bitmapW===r&&B.bitmapH===i&&B.cssW===a&&B.cssH===o&&B.transform===s&&e.width===r&&e.height===i||(e.width=r,e.height=i,e.style.width=`${a}px`,e.style.height=`${o}px`,B={bitmapW:r,bitmapH:i,cssW:a,cssH:o,transform:s})},pe=e=>{e.glassReverse!==void 0&&(y=e.glassReverse===!0),fe(e)},me=(e,t,r)=>{let i=e.count;if(G&&K===t&&G.length===i+1){let t=!0;for(let n=0;n<=i;n+=1)if(G[n]!==e.start[n]){t=!1;break}if(t)return}let a=Gt(e.start,i,t);q=a.tubeCount,J=a.capCount,re=a.shadowCount,Y=0;for(let t=0;t<i;t+=1){let n=e.start[t+1]-e.start[t];n>=2&&(Y+=+(Y>0)+2*n)}let o=new Uint32Array(a.index.length+Y);o.set(a.index);for(let e=0;e<a.tubeCount;e+=3){let n=Math.floor(o[e]/t),r=Math.floor(o[e+1]/t),i=Math.floor(o[e+2]/t),a=Math.min(n,r,i);if(i===a)continue;let[s,c,l]=[o[e],o[e+1],o[e+2]];n===a?(o[e]=c,o[e+1]=l,o[e+2]=s):(o[e]=l,o[e+1]=s,o[e+2]=c)}ie.length<i&&(ie=new Int32Array(i),ae=new Int32Array(i)),Rn(e,r,ie),oe=a.index.length,ce(e,ie,o,oe),se=new Uint32Array(Y),n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bufferData(n.ELEMENT_ARRAY_BUFFER,o,n.STATIC_DRAW),n.bindVertexArray(null),G=e.start.slice(0,i+1),K=t},he=(e,t)=>{let n=e.shadow;for(let r=0;r<e.count;r+=1){let i=e.start[r],a=e.start[r+1];for(let e=i;e<a;e+=1){let r=e>i?e-1:e,o=e+1<a?e+1:e,s=n[o*2]-n[r*2],c=n[o*2+1]-n[r*2+1],l=Math.hypot(s,c),u=e*Xt;t[u]=n[e*2],t[u+1]=n[e*2+1],t[u+2]=l>0?-c/l:0,t[u+3]=l>0?s/l:0}}},ge=(e,t,r,i)=>{n.bindTexture(n.TEXTURE_2D,e),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,X,r,0,n.RGBA,n.FLOAT,null),n.texSubImage2D(n.TEXTURE_2D,0,0,0,X,r,n.RGBA,n.FLOAT,t)},_e=(e,t=!1)=>{let r=An(e.background);n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.disable(n.SCISSOR_TEST),n.clearColor(r[0],r[1],r[2],t?0:r[3]),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},ve=(e,t,n,r)=>{let i=Q((t.mesh??{}).cameraFov,45),a=t.view,o=Q(a?.tilt,0),s=Q(a?.turn,0),c=Q(a?.zoom,1)>0?Q(a?.zoom,1):1,l=a?.center??{x:n/2,y:r/2},u=Math.max(0,Q(t.width,1)),d=0;for(let t=2;t<e.center.length;t+=3)e.center[t]>d&&(d=e.center[t]);return{camera:Ot({tilt:o,turn:s,zoom:c,center:l,cssW:n,cssH:r,fov:i,rScene:Dt(e,l),zLimit:d,width:u}),zoom:c,center:l,width:u}},ye=(e,t)=>{le??=gt(n),_e(t);let r=B?.transform??1,i=n.drawingBufferWidth/r,a=n.drawingBufferHeight/r,{camera:o}=ve(e,t,i,a);le.draw(e,t,An,bt(t,ue),o,t.material)},be=(e,t,r,i,a,o,s)=>{let c=t.start[t.count],l=n.drawingBufferWidth,u=n.drawingBufferHeight;j.length<c&&(j=new Float64Array(c),M=new Int32Array(c*2),N=new Int32Array(c));let d=Bn,f=Vn;for(let e=0;e<c;e+=1)j[e]=f[e]-Zt;Ut(d,j,t.start,t.count,Cn,M),Wt(t.start,t.count,y,N);let p=Math.max(1,Math.ceil(c*Z/X));k.length<X*p*4&&(k=new Float32Array(X*p*4));let m=k,h=1/0,g=1/0,_=-1/0,v=-1/0;for(let e=0;e<t.count;e+=1){let n=t.start[e],r=t.start[e+1];for(let t=n;t<r;t+=1){let n=t===r-1,i=n?t:t+1,a=t*Z*4;m[a]=d[t*2],m[a+1]=d[t*2+1],m[a+2]=j[t],m[a+3]=2*e+ +!!n,m[a+4]=M[t*2],m[a+5]=M[t*2+1],m[a+6]=N[t],m[a+7]=0,m[a+8]=A[t*4],m[a+9]=A[t*4+1],m[a+10]=A[t*4+2],m[a+11]=A[t*4+3];let o=(Math.max(j[t],j[i])+wn)*Math.SQRT2;for(let e of[t,i]){let t=d[e*2],n=d[e*2+1];t-o<h&&(h=t-o),t+o>_&&(_=t+o),n-o<g&&(g=n-o),n+o>v&&(v=n+o)}}}let b=Math.max(0,Math.floor(h)),x=Math.max(0,Math.floor(g)),S=Math.min(l,Math.ceil(_)),C=Math.min(u,Math.ceil(v));O=(O+1)%3,n.activeTexture(n.TEXTURE3);let w=E[O];if(w?n.bindTexture(n.TEXTURE_2D,w):(w=n.createTexture(),E[O]=w,n.bindTexture(n.TEXTURE_2D,w),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),p>D[O]&&(n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,X,p,0,n.RGBA,n.FLOAT,null),D[O]=p),n.texSubImage2D(n.TEXTURE_2D,0,0,0,X,p,n.RGBA,n.FLOAT,m),n.activeTexture(n.TEXTURE0),S>b&&C>x){let d=S-b,f=C-x;n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),n.viewport(0,0,l,u),n.enable(n.SCISSOR_TEST),n.scissor(b,x,d,f),n.colorMask(!0,!0,!0,!0),n.depthMask(!0),n.clearColor(0,0,0,0),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(e.line);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=i.proj[r*4+t]*i.view[e*4+r];F[e*4+t]=n}zn(F,P);let p=i.view,m=r.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},h=r.light?.elevation??Math.PI/4,g=r.material,_=r.plyNormal;n.uniform1i(e.u.texWidth,X),n.uniform2f(e.u.viewport,l,u),n.uniformMatrix4fv(e.u.invViewProj,!1,P),i.fov>0?n.uniform4f(e.u.eye,s.x+p[2]*i.eye,s.y+p[6]*i.eye,p[10]*i.eye,1):n.uniform4f(e.u.eye,p[2],p[6],p[10],0),n.uniform3f(e.u.light,m.x*Math.cos(h),m.y*Math.cos(h),Math.sin(h)),n.uniform3f(e.u.color,a[0],a[1],a[2]),n.uniform4f(e.u.ply,o.ply,o.plyPitch,o.plyContrast,o.plySlope),n.uniform4f(e.u.plyNormal,_?Q(_.gain,0):0,_?cn[_.profile]??cn.wave:0,_?Q(_.notch,0):0,+!!_),n.uniform4f(e.u.glass,Q(g?.tint,0),Q(g?.edge,1),Q(g?.mirror,0),Q(g?.gloss,0)),n.uniform4f(e.u.glassB,Q(g?.sharpness,1),Q(g?.eta,1),t.count,0),n.uniform4f(e.u.glassC,Q(g?.dispersion,0),Q(g?.secondGloss,0),Q(g?.secondWidth,0),0),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,w),n.activeTexture(n.TEXTURE0),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.enable(n.DEPTH_TEST),n.depthFunc(n.NOTEQUAL),n.depthMask(!0),n.drawArrays(n.TRIANGLES,0,6*c),n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.DEPTH_TEST),n.useProgram(e.compose),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,e.absorb),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,e.reflect),n.uniform1i(e.which,0),n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3),n.uniform1i(e.which,1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.disable(n.SCISSOR_TEST),n.viewport(0,0,l,u);for(let e of[n.TEXTURE5,n.TEXTURE4,n.TEXTURE3])n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,null);n.activeTexture(n.TEXTURE0),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null)},xe=(e,t)=>{if(t.band&&e.band&&e.bandNormal){l=t.material?.name===`silk`,m=t.material?.name===`rubber`,b=!1,u=!0,ye(e,t);return}let o=t.material;l=o?.name===`silk`,m=o?.name===`rubber`,b=o?.name===`glass`,u=!1;let c=e.start[e.count]??0;if(e.count===0||c===0){_e(t);return}let d=b?T():void 0,p=t.shadow.alpha>0,g=An(t.background),y=An(t.shadow.color),x=[0,1,2].every(e=>y[e]<=g[e]),S=[0,1,2].every(e=>y[e]>=g[e]),C=g[3]>=1&&(x||S);_e(t,p&&!C);let w=B?.transform??1,E=n.drawingBufferWidth/w,D=n.drawingBufferHeight/w,O=t.mesh??{},k=Q(O.threadWiden,0),j=Q(O.threadMinRadius,qt),{camera:M,zoom:N,center:P,width:F}=ve(e,t,E,D),G=N*(M.fov>0?M.eye:1)*w,K=M.fov>0?M.eye/M.near:1,le=Kt(Math.max(F/2*N*K*w+k,j)),fe=Math.max(1,Math.ceil(c*3/X)),pe=fe>H;pe&&(H=fe,V=new Float32Array(X*fe*4)),Rt(e,V);let xe=Math.max(1,Math.ceil(c/X)),Se=xe>W;Se&&(W=xe,U=new Float32Array(X*xe*Xt)),he(e,U);let Ce=Math.max(1,Math.ceil(2*e.count/X)),we=Ce>ne;we&&(ne=Ce,te=new Float32Array(X*Ce*4)),d&&A.length<c*4&&(A=new Float64Array(c*4)),Wn(e,V,te,M,{pixelScale:G,radius:F/2,widen:k,minRadius:j,fringe:Zt,viewportW:n.drawingBufferWidth,viewportH:n.drawingBufferHeight},d?A:void 0),me(e,le,M.view),Rn(e,M.view,ae);let Te=!1;for(let t=0;t<e.count;t+=1)if(ae[t]!==ie[t]){Te=!0;break}Te&&(ie.set(ae.subarray(0,e.count)),ce(e,ie,se,0),n.bindVertexArray(I),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ee),n.bufferSubData(n.ELEMENT_ARRAY_BUFFER,oe*Uint32Array.BYTES_PER_ELEMENT,se),n.bindVertexArray(null));let Ee=t.plyNormal,De=Ee?_(l?`silk`:m?`rubber`:`standard`):null,Oe=De?void 0:l?v():void 0,ke=De||Oe?void 0:m?h():void 0,Ae=De?.[0]??Oe??ke??r,je=De?.[1]??(Oe?s:ke?f:void 0)??i,Me=De!==null&&l,Ne=De!==null&&m;n.bindVertexArray(I),n.activeTexture(n.TEXTURE0),ge(L,V,H,pe),n.activeTexture(n.TEXTURE1),ge(R,U,W,Se),n.activeTexture(n.TEXTURE2),ge(z,te,ne,we),n.activeTexture(n.TEXTURE0);for(let e=0;e<4;e+=1)for(let t=0;t<4;t+=1){let n=0;for(let r=0;r<4;r+=1)n+=M.proj[r*4+t]*M.view[e*4+r];de[e*4+t]=n}let Pe=2*M.depthExtent,Fe=bt(t,ue),Ie=t.light?.dir??{x:-Math.SQRT1_2,y:-Math.SQRT1_2},Le=t.light?.elevation??Math.PI/4,Re=An(t.layers[0]?.color??`#ffffff`),ze=M.view,Be=An(t.shadow.color),Ve=({program:e,u:r,rubber:i,plyNormal:a})=>(n.useProgram(e),n.uniform1i(r.points,0),n.uniform1i(r.shadowPoints,1),n.uniform1i(r.lines,2),n.uniform1i(r.texWidth,X),n.uniform1i(r.sides,le),n.uniformMatrix4fv(r.viewProj,!1,de),n.uniform1f(r.pixelScale,G),n.uniform1f(r.radius,F/2),n.uniform1f(r.widen,k),n.uniform1f(r.minRadius,j),n.uniform3f(r.plane,P.x,P.y,Pe),n.uniform4f(r.shading,Fe.ambient,Fe.diffuse,Fe.specular,Fe.shininess),n.uniform3f(r.light,Ie.x*Math.cos(Le),Ie.y*Math.cos(Le),Math.sin(Le)),n.uniform3f(r.color,Re[0],Re[1],Re[2]),n.uniform4f(r.ply,Fe.ply,Fe.plyPitch,Fe.plyContrast,Fe.plySlope),M.fov>0?n.uniform4f(r.eye,P.x+ze[2]*M.eye,P.y+ze[6]*M.eye,ze[10]*M.eye,1):n.uniform4f(r.eye,ze[2],ze[6],ze[10],0),Ee&&a&&n.uniform4f(a,Q(Ee.gain,0),cn[Ee.profile]??cn.wave,Q(Ee.notch,0),0),(Oe||Me)&&o&&(n.uniform4f(r.silk,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.shift,0),Math.min(1,Math.max(0,Q(o.dim,0)))),n.uniform1f(r.streak,Math.max(0,Q(o.streak,Jt)))),(ke||Ne)&&o&&i&&n.uniform3f(i,Q(o.gloss,0),Math.max(0,Q(o.sharpness,0)),Q(o.rim,0)),n.uniform4f(r.shadowColor,Be[0],Be[1],Be[2],Be[3]*t.shadow.alpha),n.uniform1f(r.fringe,Zt),n.uniform3f(r.cloth,g[0],g[1],g[2]),n.uniform2f(r.viewport,n.drawingBufferWidth,n.drawingBufferHeight),r),He=Ve(je),Ue=Ve(Ae);n.disable(n.CULL_FACE),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);let We=Uint32Array.BYTES_PER_ELEMENT,Ge=(q+J+re)*We;p&&C?(n.disable(n.DEPTH_TEST),n.blendEquation(x?n.MIN:n.MAX),n.uniform1i(Ue.mode,an),n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,Ge),n.blendEquation(n.FUNC_ADD),n.enable(n.DEPTH_TEST)):p&&(n.disable(n.DEPTH_TEST),n.colorMask(!1,!1,!1,!0),n.blendEquation(n.MAX),n.uniform1i(Ue.mode,en),n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,Ge),n.blendEquation(n.FUNC_ADD),n.colorMask(!0,!0,!0,!0),n.blendFuncSeparate(n.DST_ALPHA,n.ONE_MINUS_DST_ALPHA,n.ONE,n.ZERO),n.uniform1f(Ue.fillAlpha,g[3]),n.uniform1i(Ue.mode,rn),n.drawArrays(n.TRIANGLES,0,3),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE),n.enable(n.DEPTH_TEST)),d?be(d,e,t,M,Re,Fe,P):(n.useProgram(a.program),n.uniform1i(a.u.mode,$t),n.uniformMatrix4fv(a.u.viewProj,!1,de),n.uniform3f(a.u.plane,P.x,P.y,Pe),n.depthMask(!0),n.depthFunc(n.LESS),n.clear(n.DEPTH_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.colorMask(!0,!0,!0,!0),n.useProgram(Ae.program),n.enable(n.SAMPLE_ALPHA_TO_COVERAGE),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.uniform1i(Ue.mode,Qt),n.drawElements(n.TRIANGLES,q,n.UNSIGNED_INT,0),n.disable(n.CULL_FACE),J>0&&(n.uniform1i(Ue.mode,tn),n.drawElements(n.TRIANGLES,J,n.UNSIGNED_INT,q*We)),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.useProgram(je.program),n.uniform1i(He.mode,nn),n.uniform1i(He.ribbonPass,0),n.depthFunc(n.LESS),n.depthMask(!0),n.colorMask(!0,!0,!0,!0),n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,Ge),n.uniform1i(He.ribbonPass,3),((e,t)=>{n.depthFunc(e),n.colorMask(t,t,t,t),n.depthMask(!1),n.drawElements(n.TRIANGLE_STRIP,Y,n.UNSIGNED_INT,Ge)})(n.LESS,!0),n.depthMask(!0),n.depthFunc(n.LESS),n.disable(n.BLEND),n.disable(n.DEPTH_TEST),n.bindVertexArray(null))};return fe(t),{draw(e,t){xe(In(e),t)},drawTyped:xe,resize:pe,materialNote:()=>l&&(u?le?.silkUnavailable()??!1:c)||m&&(u?le?.rubberUnavailable()??!1:p)||b&&!u&&x?xt:null}}var Kn=1.1868238913561442,qn=1.2566370614359172,$={text:`1234567890`,font:`bold 200px sans-serif`,angle:Math.PI/4,pitch:8,width:2,shadowRatio:1,lightAzimuth:qn,elevation:Kn,p:.4,k:.07,stretch:1.042,stretchMode:`ratio`,stretchUnit:36,stretchTiming:`speed`,stretchSpeed:1350,stretchSmoothAccel:.5,stretchSmoothDecay:.15,stretchSmoothSnap:.5,stretchDuration:700,stretchOrder:`sequence`,stretchLineDuration:30,stitchStyle:`machine`,stretchPull:.9,stretchPullDelay:35,twist:0,gravityAlpha:4.363323129985823,gravityBeta:1.5707963267948966,align:0,wireSmax:.4,wireLref:300,alignScale:60,ply:.55,phiMax:Math.PI/3,phiRef:1,model:`wire`,step:.5,mergeGap:1,minLen:2,threadColor:`#ffffff`,background:`#6fcee2`,shadowAlpha:.05,shade:.2,plyPitch:6,plySlope:.5,shininess:1,plyContrast:.15,plyMode:`shade`,plyProfile:`wave`,plyGain:10,plyNotch:.15,section:`round`,bandWidth:6,bandFront:`#ffffff`,bandBack:`#ffffff`,material:`standard`,silkGloss:.8,silkSharpness:12,silkShift:.15,silkStreak:.5,silkDim:0,rubberGloss:.3,rubberSharpness:4,rubberRim:.2,glassTint:.5,glassEdge:5,glassMirror:0,glassGloss:.5,glassSharpness:30,glassEta:1.5,glassDispersion:0,glassSecondGloss:.5,glassSecondWidth:.3,cameraTilt:.5846852994181003,cameraTurn:0,cameraZoom:1,cameraDragTilt:.25*Math.PI/180,cameraDragTurn:-(.4*Math.PI)/180,cameraWheelZoom:.002,cameraPanX:0,cameraPanY:0,cameraFov:45,threadWiden:0,threadMinRadius:qt,light:{dir:a(qn),elevation:Kn}},{width:Jn,...Yn}=c($),Xn=3e3;function Zn(e,{from:t,to:n,duration:r}){if(e<0)return t;if(r<=0||e>=r)return n;if(t===n)return t;let i=e/r,a=i*i*(3-2*i);return t+(n-t)*a}function Qn(e){let t=null,n=()=>{let t=e.duration?.();return typeof t==`number`&&Number.isFinite(t)&&t>0?t:Xn},r=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},i=n=>{let r=t;if(!r)return;r.startedAt===null&&(r.startedAt=n);let a=n-r.startedAt,o=a>=r.duration,s=Zn(a,{from:r.from,to:r.to,duration:r.duration});e.draw(s,o),o?(t=null,e.finish(r.to)):r.frame=requestAnimationFrame(i)};return{play(r){if(t?.to===r)return;let a=e.value();if(!t&&a===r)return;let o=t;o?.frame!==null&&o?.frame!==void 0&&cancelAnimationFrame(o.frame),t={from:a,to:r,duration:n(),startedAt:null,frame:null},e.playing(!0),e.reducedMotion()?(e.draw(r,!0),t=null,e.finish(r)):t.frame=requestAnimationFrame(i)},stop:r}}var $n=4,er=2**-53;function tr(e,t,n,r,i,a){let o=e.length;if(o===0)return;let s=(n,r)=>{let i=t[n];return i>0?Math.min(1,Math.max(0,(r-e[n])/i)):+(r>=e[n])},c=new Float64Array(o);for(let t=1;t<o;t+=1)c[t]=Math.min(e[t],c[t-1]+i);let l=1;for(;l<o;)l*=2;let u=null,d=(t,n)=>{if(t<0)return-1;if(!u){u=new Float64Array(2*l).fill(1/0);for(let t=0;t<o;t+=1)u[l+t]=e[t]-t*i;for(let e=l-1;e>=1;--e)u[e]=Math.min(u[2*e],u[2*e+1])}let r=l+t;if(u[r]<=n)return t;for(;;){if(r===1)return-1;if(r%2==1&&u[r-1]<=n){--r;break}r=Math.floor(r/2)}for(;r<l;)r=u[2*r+1]<=n?2*r+1:2*r;return r-l},f=[];for(let t=0;t<o&&!(n<c[t]);t+=1){let o=n-t*i;f.length=0;let l=t,u;for(;;){let e=n-(t-l)*i;if(e<0||e<c[l]){u=0;break}let r=s(l,e);if(l===0){u=r;break}if(r>=1){u=1;break}if(r>0){f.push(l),--l;continue}let a=n-(t-l+1)*i;if(a<0||a<c[l-1]){u=0;break}let p=d(l-1,o);for(;p>=0&&s(p,n-(t-p)*i)<=0;)p=d(p-1,o);if(p<0){u=0;break}f.push(-(l-p)),l=p}let p=u;for(let e=f.length-1;e>=0;--e){let a=f[e];if(a>=0)p=Math.min(1,1-(1-r*p)*(1-s(a,n-(t-a)*i)));else if(-a<=$n)for(let e=0;e<-a;e+=1)p=Math.min(1,1-(1-r*p));else p=Math.min(1,p*r**+-a),p<er&&(p=0)}if(p>0)a(t,p);else if(n<=e[t])break}}function nr(e,t,n,r,i,a=0,o=0){let s=Float64Array.from(t),c=Number.isFinite(r)&&r>0;if(c&&a>0&&o>0)return ir(s,e,t,n,r,i,a,o);if(c&&a>0)return rr(s,e,t,n,r,i,a);let l=c?Math.floor(Math.max(0,i)/r):1/0,u=0;for(let a=0;a<e.length;a+=1){let o=e[a],c=t[o];if(c===n)s[o]=n;else{if(u<l)s[o]=n;else if(u===l)s[o]=Zn(i-u*r,{from:c,to:n,duration:r});else break;u+=1}}return s}function rr(e,t,n,r,i,a,o){let s=Math.max(0,a),c=Math.floor(s/i),l=0,u=0;for(let a=0;a<t.length;a+=1){let d=t[a],f=n[d];if(f===r){e[d]=r;continue}let p=Math.min(1,Math.max(0,(s-u*i)/i)),m=u===0?p:Math.min(1,1-(1-o*l)*(1-p));if(m<=0&&u>c)break;m>=1?e[d]=r:m>0&&(e[d]=f+(r-f)*(m*m*(3-2*m))),l=m,u+=1}return e}function ir(e,t,n,r,i,a,o,s){let c=[];for(let i=0;i<t.length;i+=1){let a=t[i];n[a]===r?e[a]=r:c.push(a)}let l=c.length,u=new Float64Array(l);for(let e=0;e<l;e+=1)u[e]=e*i;return tr(u,new Float64Array(l).fill(i),Math.max(0,a),o,s,(t,i)=>{let a=c[t],o=n[a];e[a]=i>=1?r:o+(r-o)*(i*i*(3-2*i))}),e}function ar(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function or(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=n=>{let i=t;if(!i)return;i.startedAt===null&&(i.startedAt=n);let a=n-i.startedAt;if(a>=i.total){let n=new Float64Array(i.from.length).fill(i.to);i.current=n,t=null,e.draw(n,i.to,!0),e.finish(i.to);return}let o=nr(i.order,i.from,i.to,i.lineMs,a,i.pull,i.delay);i.current=o,e.draw(o,ar(o),!1),i.frame=requestAnimationFrame(r)};return{play(n){if(t?.to===n)return;let i=Array.from(e.order()),a=i.length,o=t?Float64Array.from(t.current):new Float64Array(a).fill(e.value());if(!t&&o.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let s=n<ar(o)?i:i.reverse(),c=0;for(let e=0;e<o.length;e+=1)o[e]!==n&&(c+=1);let l=e.lineDuration(),u=e.pull?.()??0,d=e.pullDelay?.()??0,f=Number.isFinite(l)&&l>0?c*l:0,p=t!==null;if(t={order:s,from:o,to:n,lineMs:l,pull:u,delay:d,total:f,startedAt:null,frame:null,current:o},p||e.playing(!0),e.reducedMotion()){let r=new Float64Array(a).fill(n);t=null,e.draw(r,n,!0),e.finish(n)}else t.frame=requestAnimationFrame(r)},stop:n}}var sr=class e extends EventTarget{static fps=60;snap;_accel=0;_decay=0;_brake=0;scalar;n;pos;tgt;vel;dir;perp;active=!1;_phase=`idle`;d0=0;constructor(e,t,n,r={}){super();let i=r.value??0;this.scalar=typeof i==`number`;let a=this.scalar?1:Array.isArray(i)?i.length:0;if(!(a>=1))throw RangeError(`SmoothInOut: value must be a number or a non-empty number[]`);if(this.n=a,this.pos=new Float64Array(a),this.tgt=new Float64Array(a),this.vel=new Float64Array(a),this.dir=new Float64Array(a),this.perp=new Float64Array(a),this.read(i,this.pos,`value`),this.tgt.set(this.pos),this.accel=e,this.decay=t,!(n>=0)||!Number.isFinite(n))throw RangeError(`SmoothInOut: snap must be >= 0 (got ${n})`);this.snap=n,this.brake=r.brake??2}get axes(){return this.n}get accel(){return this._accel}set accel(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: accel must be > 0 (got ${e})`);this._accel=e}get decay(){return this._decay}set decay(e){if(!(e>0&&e<1))throw RangeError(`SmoothInOut: decay must be in (0, 1) (got ${e})`);this._decay=e}get brake(){return this._brake}set brake(e){if(!(e>0)||!Number.isFinite(e))throw RangeError(`SmoothInOut: brake must be > 0 (got ${e})`);this._brake=e}get value(){return this.out(this.pos,1)}get target(){return this.out(this.tgt,1)}get velocity(){return this.out(this.vel,1/e.fps)}get speed(){let t=0;for(let e=0;e<this.n;e++)t+=this.vel[e]*this.vel[e];return Math.sqrt(t)/e.fps}get idle(){return!this.active}get phase(){return this._phase}get progress(){return!this.active||!(this.d0>0)?1:Math.min(1,Math.max(0,1-this.dist()/this.d0))}get eta(){if(!this.active)return 0;if(!(this.snap>0))return 1/0;let t=e.fps,n=this._accel*t*t,r=-Math.log(1-this._decay)*t,i=this._brake*n,a=0;for(let e=0;e<this.n;e++)a+=(this.tgt[e]-this.pos[e])**2;a=Math.sqrt(a);let o=0;if(a>0)for(let e=0;e<this.n;e++)o+=this.vel[e]*(this.tgt[e]-this.pos[e])/a;let s=0;if(o<0){let e=-o/i;s+=e,a+=-o*e/2,o=0}if(a<=this.snap)return s*1e3;let c=0,l=o-r*a;if(l<0){let e=.5*r*n,t=n+r*o;c=-2*l/(t+Math.sqrt(t*t-4*e*l))}let u=a-o*c-.5*n*c*c;return u<=this.snap?(s+c)*1e3:(s+c+Math.log(u/this.snap)/r)*1e3}to(e){return this.read(e,this.tgt,`target`),this.active=!0,this.d0=this.dist(),this}jump(e){return this.read(e,this.pos,`value`),this.tgt.set(this.pos),this.vel.fill(0),this.active=!1,this._phase=`idle`,this}stop(){return this.active&&(this.jump(this.value),this.dispatchEvent(new Event(`stop`))),this}step(t){if(!this.active)return this.value;let n=t/1e3;if(!(n>0))return this.value;let r=e.fps,i=this._accel*r*r,a=-Math.log(1-this._decay)*r,o=this._brake*i,s=this.n,c=this.pos,l=this.tgt,u=this.vel,d=this.dir,f=this.perp,p=0;for(let e=0;e<s;e++){let t=l[e]-c[e];d[e]=t,p+=t*t}p=Math.sqrt(p);let m=0;if(p>0){for(let e=0;e<s;e++)d[e]/=p;for(let e=0;e<s;e++)m+=u[e]*d[e]}else d.fill(0);let h=0;for(let e=0;e<s;e++)f[e]=u[e]-m*d[e],h+=f[e]*f[e];h=Math.sqrt(h);let g=0,_=0;if(h>0){let e=h/o;e>=n?(_=(h-.5*o*n)*n,g=h-o*n):_=.5*h*e}let v=n,y=0,b=`brake`;if(m<0){let e=-m/o;e>=n?(y=m*n+.5*o*n*n,m+=o*n,v=0):(y=.5*m*e,m=0,v-=e),p-=y}if(v>0&&p>0){let e=0,t=m-a*p;if(t<0){let n=.5*a*i,r=i+a*m;e=-2*t/(r+Math.sqrt(r*r-4*n*t))}let n,r;e>=v?(n=p-m*v-.5*i*v*v,r=m+i*v,n<0&&(n=0),b=`in`):(n=Math.max(0,p-m*e-.5*i*e*e)*Math.exp(-a*(v-e)),r=a*n,b=`out`),y+=p-n,m=r}let x=h>0?_/h:0,S=h>0?g/h:0;for(let e=0;e<s;e++)c[e]+=y*d[e]+x*f[e],u[e]=m*d[e]+S*f[e];this._phase=b;let C=0;for(let e=0;e<s;e++){let t=l[e]-c[e];C+=t*t}return Math.sqrt(C)<=this.snap&&g===0&&m>=0&&(c.set(l),u.fill(0),this.active=!1,this._phase=`idle`,this.dispatchEvent(new Event(`done`))),this.value}dist(){let e=0;for(let t=0;t<this.n;t++)e+=(this.tgt[t]-this.pos[t])**2;return Math.sqrt(e)}out(e,t){return this.scalar?e[0]*t:Array.from(e,e=>e*t)}read(e,t,n){if(this.scalar){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(`SmoothInOut: ${n} must be a finite number`);t[0]=e}else{if(!Array.isArray(e)||e.length!==this.n)throw RangeError(`SmoothInOut: ${n} must be a number[] of length ${this.n}`);for(let r=0;r<this.n;r++){let i=e[r];if(typeof i!=`number`||!Number.isFinite(i))throw TypeError(`SmoothInOut: ${n}[${r}] must be a finite number`);t[r]=i}}}},cr=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothAccel,lr=e=>e>0&&e<1?e:$.stretchSmoothDecay,ur=e=>Number.isFinite(e)&&e>0?e:$.stretchSmoothSnap;function dr(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function fr(e,t,n,r,i){let a=Float64Array.from(t),o=0;for(let s=0;s<e.length;s+=1){let c=e[s];if(i<=o)break;let l=r[c];a[c]=i>=o+l?n:t[c]+(n-t[c])*(i-o)/l,o+=l}return a}function pr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;if(a.last!==null&&(a.driver.step(n-a.last),a.driver.idle)){r(a.from.length,a.to);return}a.last=n;let o=fr(a.seq,a.from,a.to,a.ex,a.L0-a.driver.value);a.current=o,e.draw(o,dr(o),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=(n<dr(c)?a:a.reverse()).filter(e=>e>=0&&e<s&&c[e]!==n),u=new Float64Array(s),d=0;for(let e of l)u[e]=Math.abs(c[e]-n)*o[e],d+=u[e];let f=new sr(cr(e.accel()),lr(e.decay()),ur(e.snap()),{value:Number.isFinite(d)?d:0});f.to(0);let p=t!==null;t={seq:l,from:c,to:n,ex:u,L0:d,driver:f,last:null,frame:null,current:c},p||e.playing(!0),e.reducedMotion()||!(Number.isFinite(d)&&d>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function mr(e,t,n,r){let i=new Float64Array(e.length);for(let a=0;a<e.length;a+=1)i[a]=e[a]===t?0:1e3*Math.abs(t-e[a])*n[a]/r;return i}function hr(e,t){let n=0,r=0;for(let t=0;t<e.length;t+=1)n=Math.max(n,e[t]),r+=e[t];return t?n:r}var gr=e=>Math.min(1,Math.max(0,e)),_r=(e,t,n)=>n>=1?t:n<=0?e:e+(t-e)*n;function vr(e,t,n,r,i,a,o=0,s=0){let c=Float64Array.from(t);if(i>=hr(r,a))return c.fill(n);let l=Math.max(0,i);if(a){for(let e=0;e<t.length;e+=1){let i=t[e];if(i===n)continue;let a=r[e];c[e]=_r(i,n,a>0?gr(l/a):1)}return c}let u=o>0;if(u&&s>0)return yr(c,e,t,n,r,l,o,s);let d=0,f=0,p=0;for(let i=0;i<e.length;i+=1){let a=e[i],s=t[a];if(s===n)continue;let m=r[a],h=m>0?gr((l-d)/m):+(l>=d),g=p===0||!u?h:Math.min(1,1-(1-o*f)*(1-h));if(g<=0)break;c[a]=_r(s,n,g),f=g,d+=m,p+=1}return c}function yr(e,t,n,r,i,a,o,s){let c=[];for(let e=0;e<t.length;e+=1)n[t[e]]!==r&&c.push(t[e]);let l=c.length,u=new Float64Array(l),d=new Float64Array(l),f=0;for(let e=0;e<l;e+=1)u[e]=f,d[e]=i[c[e]],f+=d[e];return tr(u,d,a,o,s,(t,i)=>{let a=c[t];e[a]=_r(n[a],r,i)}),e}function br(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function xr(e){let t=null,n=()=>{t&&(t.frame!==null&&cancelAnimationFrame(t.frame),t=null,e.playing(!1))},r=(n,r)=>{let i=new Float64Array(n).fill(r);t=null,e.draw(i,r,!0),e.finish(r)},i=n=>{let a=t;if(!a)return;a.startedAt===null&&(a.startedAt=n);let o=n-a.startedAt;if(o>=a.total){r(a.from.length,a.to);return}let s=vr(a.order,a.from,a.to,a.durations,o,a.together,a.pull,a.delay);a.current=s,e.draw(s,br(s),!1),a.frame=requestAnimationFrame(i)};return{play(n){if(t?.to===n)return;let a=Array.from(e.order()),o=e.rates(),s=o.length,c=t&&t.current.length===s?Float64Array.from(t.current):new Float64Array(s).fill(e.value());if(!t&&c.every(e=>e===n))return;t?.frame!==null&&t?.frame!==void 0&&cancelAnimationFrame(t.frame);let l=n<br(c)?a:a.reverse(),u=e.together(),d=u?0:e.pull?.()??0,f=u?0:e.pullDelay?.()??0,p=mr(c,n,o,e.speed()),m=hr(p,u),h=t!==null;t={order:l,from:c,to:n,durations:p,together:u,pull:d,delay:f,total:m,startedAt:null,frame:null,current:c},h||e.playing(!0),e.reducedMotion()||!(Number.isFinite(m)&&m>0)?r(s,n):t.frame=requestAnimationFrame(i)},stop:n}}function Sr(e){let t=new Uint32Array(e.length+1);for(let n=0;n<e.length;n+=1)t[n+1]=t[n]+e[n].center.length;let n=t[e.length],r=new Float64Array(n*3),i=new Float64Array(n*2),a=new Float64Array(n*2),o=new Float64Array(n);for(let n=0;n<e.length;n+=1){let s=e[n];for(let e=0;e<s.center.length;e+=1){let c=t[n]+e;r[c*3]=s.center[e].x,r[c*3+1]=s.center[e].y,r[c*3+2]=s.center[e].z,i[c*2]=s.shadow[e].x,i[c*2+1]=s.shadow[e].y,a[c*2]=s.normal[e].x,a[c*2+1]=s.normal[e].y,o[c]=s.lightSide[e]}}return{count:e.length,start:t,center:r,shadow:i,normal:a,lightSide:o}}var Cr=Math.PI/4,wr=.8,Tr=-Math.SQRT1_2,Er=-Math.SQRT1_2;function Dr(e){if(/^#[0-9a-f]{6}$/i.test(e))return[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16))}var Or=256,kr=1.25;function Ar(e,t){if(t&&t.front===e)return t;let n=Dr(e)??[255,255,255],r=[];for(let e=0;e<Or;e+=1){let t=e/255*kr,i=Math.min(255,Math.round(n[0]*t)),a=Math.min(255,Math.round(n[1]*t)),o=Math.min(255,Math.round(n[2]*t));r.push(`rgb(${i},${a},${o})`)}return{front:e,fills:r}}function jr(e,t,n,r,i){return e[r*3]+i*n*t[r*3]}function Mr(e,t,n,r,i){return e[r*3+1]+i*n*t[r*3+1]}function Nr(e,t,n,r,i,a){return Math.max(0,e[i*3+2]+a*n*t[i*3+2])/r}function Pr(e,t,n,r,i,a,o){return jr(e,t,n,a,o)-r*Nr(e,t,n,i,a,o)}function Fr(e,t,n,r,i,a,o){return Mr(e,t,n,a,o)-r*Nr(e,t,n,i,a,o)}function Ir(e,t,n,r,i){let a=t.band,o=t.bandNormal;if(!a||!o||!n.band)return;let s=t.center,c=Math.max(0,n.band.width)/2,l=n.light?.dir.x??Tr,u=n.light?.dir.y??Er,d=n.light?.elevation??Cr,f=Math.tan(d),p=Math.cos(d),m=l*p,h=u*p,g=Math.sin(d),_=.9-.7*wr,v=.9*wr;e.globalAlpha=n.shadow.alpha,e.fillStyle=n.shadow.color;for(let n=0;n<t.count;n+=1){let r=t.start[n],i=t.start[n+1];if(!(i-r<2)){e.beginPath();for(let t=r;t+1<i;t+=1)e.moveTo(Pr(s,a,c,l,f,t,1),Fr(s,a,c,u,f,t,1)),e.lineTo(Pr(s,a,c,l,f,t,-1),Fr(s,a,c,u,f,t,-1)),e.lineTo(Pr(s,a,c,l,f,t+1,-1),Fr(s,a,c,u,f,t+1,-1)),e.lineTo(Pr(s,a,c,l,f,t+1,1),Fr(s,a,c,u,f,t+1,1)),e.closePath();e.fill(`nonzero`)}}e.globalAlpha=1,e.lineWidth=.5;for(let n=0;n<t.count;n+=1){let l=t.start[n],u=t.start[n+1];for(let t=l;t+1<u;t+=1){let n=o[t*3]+o[(t+1)*3],l=o[t*3+1]+o[(t+1)*3+1],u=o[t*3+2]+o[(t+1)*3+2],d=Math.hypot(n,l,u)||1,f=u,p=f>=0?1/d:-1/d,y=_+v*Math.max(0,(n*m+l*h+u*g)*p),b=Math.min(255,Math.max(0,Math.round(y/kr*255))),x=(f>=0?r:i).fills[b];e.fillStyle=x,e.strokeStyle=x,e.beginPath(),e.moveTo(jr(s,a,c,t,1),Mr(s,a,c,t,1)),e.lineTo(jr(s,a,c,t,-1),Mr(s,a,c,t,-1)),e.lineTo(jr(s,a,c,t+1,-1),Mr(s,a,c,t+1,-1)),e.lineTo(jr(s,a,c,t+1,1),Mr(s,a,c,t+1,1)),e.closePath(),e.fill(),e.stroke()}}}function Lr(e,t){let n=e.getContext(`2d`);if(!n)throw Error(`Canvas 2D context is unavailable`);let r,i,a,o=t=>{let r=t.scale??1,i=Math.round(t.cssW*r*t.dpr),o=Math.round(t.cssH*r*t.dpr),s=t.cssW*r,c=t.cssH*r,l=t.dpr*r,u=n.getTransform();if(a&&a.bitmapW===i&&a.bitmapH===o&&a.cssW===s&&a.cssH===c&&a.transform===l&&e.width===i&&e.height===o&&e.style.width===a.styleW&&e.style.height===a.styleH&&u.a===a.matrix[0]&&u.b===a.matrix[1]&&u.c===a.matrix[2]&&u.d===a.matrix[3]&&u.e===a.matrix[4]&&u.f===a.matrix[5])return;e.width=i,e.height=o,e.style.width=`${s}px`,e.style.height=`${c}px`,n.setTransform(l,0,0,l,0,0);let d=n.getTransform();a={bitmapW:i,bitmapH:o,cssW:s,cssH:c,styleW:e.style.width,styleH:e.style.height,transform:l,matrix:[d.a,d.b,d.c,d.d,d.e,d.f]}},s=(t,a)=>{if(n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=1,n.fillStyle=a.background,n.fillRect(0,0,e.width,e.height),n.restore(),n.lineCap=`round`,n.lineJoin=`round`,n.shadowBlur=0,a.band&&t.band&&t.bandNormal){r=Ar(a.band.front,r);let e=a.band.back??a.band.front;i=e===a.band.front?r:Ar(e,i),Ir(n,t,a,r,i)}else{n.globalAlpha=a.shadow.alpha,n.strokeStyle=a.shadow.color,n.lineWidth=a.width;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2)){n.beginPath(),n.moveTo(t.shadow[r*2],t.shadow[r*2+1]);for(let e=r+1;e<i;e+=1)n.lineTo(t.shadow[e*2],t.shadow[e*2+1]);n.stroke()}}n.globalAlpha=1;for(let e=0;e<t.count;e+=1){let r=t.start[e],i=t.start[e+1];if(!(i-r<2))for(let e of a.layers){n.strokeStyle=e.color,n.lineWidth=a.width*e.widthRatio;let o=e.offsetRatio*a.width;n.beginPath();for(let e=r;e<i;e+=1){let i=o*t.lightSide[e],a=t.center[e*3]+i*t.normal[e*2],s=t.center[e*3+1]+i*t.normal[e*2+1];e===r?n.moveTo(a,s):n.lineTo(a,s)}n.stroke()}}}};return o(t),{draw(e,t){s(Sr(e),t)},drawTyped:s,resize:o}}var Rr=127;function zr(){return{inside:()=>!1,bounds:{x:0,y:0,w:0,h:0}}}function Br(e,t){let n=e.canvas.width,r=e.canvas.height;if(n===0||r===0)return zr();let i=e.getImageData(0,0,n,r).data,a=n,o=r,s=-1,c=-1;for(let e=0;e<r;e+=1)for(let t=0;t<n;t+=1)i[(e*n+t)*4+3]<=Rr||(a=Math.min(a,t),o=Math.min(o,e),s=Math.max(s,t),c=Math.max(c,e));let l=(e,a)=>{let o=Math.floor(e*t),s=Math.floor(a*t);return o<0||o>=n||s<0||s>=r?!1:i[(s*n+o)*4+3]>Rr};return s<a||c<o?{inside:l,bounds:{x:0,y:0,w:0,h:0}}:{inside:l,bounds:{x:a/t,y:o/t,w:(s-a+1)/t,h:(c-o+1)/t}}}async function Vr(e,t,n){await document.fonts.load(t);let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`2D canvas context is unavailable`);i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`;let a=i.measureText(e),o=a.actualBoundingBoxLeft,s=a.actualBoundingBoxAscent,c=o+a.actualBoundingBoxRight,l=s+a.actualBoundingBoxDescent;return c===0||l===0?zr():(r.width=Math.ceil(c*n),r.height=Math.ceil(l*n),i.font=t,i.textAlign=`left`,i.textBaseline=`alphabetic`,i.scale(n,n),i.fillText(e,o,s),Br(i,n))}function Hr(e,t,n,r=`machine`){let i=e.length,a=()=>Int32Array.from({length:i},(e,t)=>t);if(i<=1||!Number.isFinite(t)||!Number.isFinite(n)||!(n>0))return a();let o=Math.sin(t),s=Math.cos(t),c=Math.cos(t),l=-Math.sin(t),u=new Float64Array(i),d=1/0;for(let t=0;t<i;t+=1){let{a:n}=e[t];u[t]=o*n.x+s*n.y,u[t]<d&&(d=u[t])}if(!Number.isFinite(d))return a();let f=new Float64Array(i),p=new Float64Array(i),m=new Map,h=new Int32Array(i);for(let t=0;t<i;t+=1){let{a:r,b:i}=e[t],a=c*r.x+l*r.y,o=c*i.x+l*i.y;f[t]=Math.min(a,o),p[t]=Math.max(a,o);let s=Math.round((u[t]-d)/n);h[t]=s;let g=m.get(s);g?g.push(t):m.set(s,[t])}let g=Int32Array.from({length:i},(e,t)=>t),_=e=>{for(;g[e]!==e;)g[e]=g[g[e]],e=g[e];return e},v=Array.from({length:i},()=>[]),y=Array.from({length:i},()=>[]);for(let[e,t]of m){let n=m.get(e+1);if(n){for(let e of t)for(let t of n)if(f[e]<p[t]&&f[t]<p[e]){v[e].push(t),y[t].push(e);let n=_(e),r=_(t);n!==r&&(g[n]=r)}}}let b=new Map,x=[];for(let t=0;t<i;t+=1){let n=_(t),r=b.get(n);r||(r={members:[],x0:1/0,x1:-1/0,y0:1/0},b.set(n,r),x.push(r));let{a:i,b:a}=e[t];r.members.push(t),r.x0=Math.min(r.x0,i.x,a.x),r.x1=Math.max(r.x1,i.x,a.x),r.y0=Math.min(r.y0,i.y,a.y)}let S=x.length,C=Int32Array.from({length:S},(e,t)=>t),w=e=>{for(;C[e]!==e;)C[e]=C[C[e]],e=C[e];return e};for(let e=0;e<S;e+=1)for(let t=e+1;t<S;t+=1){let n=x[e],r=x[t],[i,a]=n.x1-n.x0<=r.x1-r.x0?[n,r]:[r,n],o=(i.x0+i.x1)/2;if(o>=a.x0&&o<=a.x1){let n=w(e),r=w(t);n!==r&&(C[n]=r)}}let T=new Map;for(let e=0;e<S;e+=1){let t=w(e);T.set(t,Math.min(T.get(t)??1/0,x[e].x0))}let E=x.map((e,t)=>({c:e,p:t,g:w(t)}));E.sort((e,t)=>{if(e.g!==t.g){let n=T.get(e.g)-T.get(t.g);return n===0?e.g-t.g:n}return e.c.y0-t.c.y0||e.c.x0-t.c.x0||e.p-t.p});let D=Ur(i,v,y),O=new Int32Array(i),k=0;for(let{c:e}of E)for(let t of Wr(e.members,D,h,v,y)){let e=t.length;if(r===`hand`){let n=Math.floor((e-1)/2);for(let e=n;e>=0;--e)O[k++]=t[e];for(let r=n+1;r<e;r+=1)O[k++]=t[r]}else for(let e of t)O[k++]=e}return O}function Ur(e,t,n){let r=new Int32Array(e).fill(-1),i=[],a=e=>n[e].length===1&&t[n[e][0]].length===1;for(let o=0;o<e;o+=1){if(r[o]>=0)continue;let e=o;for(;a(e);)e=n[e][0];let s=i.length,c=[],l=e;for(;r[l]=s,c.push(l),t[l].length===1;){let e=t[l][0];if(n[e].length!==1)break;l=e}i.push(c)}return{of:r,lines:i}}function Wr(e,t,n,r,i){let a=[],o=new Set,s=[...new Set(e.map(e=>t.of[e]))],c=(e,n)=>i[e].some(e=>t.of[e]===n)||r[e].some(e=>t.of[e]===n),l=(e,n)=>{let r=t.lines[e];a.push(n===r[0]?r:[...r].reverse()),o.add(e)},u=e=>{let n=t.lines[e];return n.length===1?[n[0]]:[n[0],n[n.length-1]]},d=(e,t)=>{let r=e[0];for(let i of e){let e=Math.abs(n[i]-n[t]),a=Math.abs(n[r]-n[t]);(e<a||e===a&&i<r)&&(r=i)}return r},f=t.of[e[0]];for(l(f,e[0]);o.size<s.length;){let e=a[a.length-1],p=e[e.length-1],m=-1,h=-1;for(let e of t.lines[f])for(let n of[...i[e],...r[e]]){let e=t.of[n];if(e===f||o.has(e))continue;let r=d(u(e).filter(e=>c(e,f)),p);(m<0||r<h)&&(m=e,h=r)}if(m<0)for(let e of s){if(o.has(e))continue;let t=d(u(e),p);if(m<0){m=e,h=t;continue}let r=Math.abs(n[t]-n[p]),i=Math.abs(n[h]-n[p]);(r<i||r===i&&t<h)&&(m=e,h=t)}l(m,h),f=m}return a}function Gr(e,t,n,r,i,a,o){let s={x:e*n.x,y:e*n.y},c=-1/0,l=1/0;for(let[e,n,u,d]of[[s.x,t.x,r,a],[s.y,t.y,i,o]]){if(Math.abs(n)<1e-15){if(e<u||e>d)return;continue}let t=(u-e)/n,r=(d-e)/n;c=Math.max(c,Math.min(t,r)),l=Math.min(l,Math.max(t,r))}return l>c?{lo:c,hi:l}:void 0}function Kr(e,t){let{bounds:n}=e;if(!(n.w>0)||!(n.h>0))return[];let r=t.angle,i=t.pitch,a=t.phase,o=t.step>0?t.step:.5,s=Math.max(0,t.tol),c={x:Math.cos(r),y:-Math.sin(r)},l={x:Math.sin(r),y:Math.cos(r)},u=n.x,d=n.y,f=u+n.w,p=d+n.h;if(!(i>0)||!Number.isFinite(i))return[];let m=[l.x*u+l.y*d,l.x*f+l.y*d,l.x*u+l.y*p,l.x*f+l.y*p],h=Math.min(...m),g=Math.max(...m),_=Math.ceil((h-a)/i),v=Math.floor((g-a)/i),y=[],b=(e,t)=>({x:e*l.x+t*c.x,y:e*l.y+t*c.y});for(let n=_;n<=v;n++){let r=a+n*i,m=Gr(r,c,l,u,d,f,p);if(!m)continue;let h=m.hi-m.lo,g=Math.max(1,Math.ceil(h/o)),_=h/g,v=[],x=m.lo,S=b(r,x),C=e.inside(S.x,S.y),w=C?m.lo:void 0;for(let t=1;t<=g;t++){let n=t===g?m.hi:m.lo+t*_,i=b(r,n),a=e.inside(i.x,i.y);if(a!==C){let t=x,i=n,o=C,c=s>0?2*s:2**-52*Math.max(1,Math.abs(t),Math.abs(i));for(;i-t>c;){let n=(t+i)/2;if(n===t||n===i)break;let a=b(r,n);e.inside(a.x,a.y)===o?t=n:i=n}let l=(t+i)/2;a?w=l:w!==void 0&&(l>w&&v.push({lo:w,hi:l}),w=void 0)}x=n,C=a}w!==void 0&&m.hi>w&&v.push({lo:w,hi:m.hi});let T=[];for(let e of v){let n=T[T.length-1];n&&e.lo-n.hi<t.mergeGap?n.hi=e.hi:T.push({...e})}for(let e of T)e.hi-e.lo<t.minLen||y.push({a:b(r,e.lo),b:b(r,e.hi)})}return y}var qr=2,Jr=(e,t)=>e.text===t.text&&e.font===t.font&&e.options.angle===t.options.angle&&e.options.pitch===t.options.pitch&&e.options.phase===t.options.phase&&e.options.step===t.options.step&&e.options.tol===t.options.tol&&e.options.mergeGap===t.options.mergeGap&&e.options.minLen===t.options.minLen,Yr=e=>({text:e.text,font:e.font,options:{angle:e.angle,pitch:e.pitch,phase:0,step:Math.min(e.step,1/qr),tol:.05,mergeGap:e.mergeGap,minLen:e.minLen}}),Xr=({stitches:e,bounds:t})=>({stitches:e.map(({a:e,b:t})=>({a:{...e},b:{...t}})),bounds:{...t}});function Zr(e){let t=0,n,r,i=[];return{get builds(){return t},async get(a){let o=Yr(a);if(n=o,r&&Jr(r.key,o))return Xr(r.result);let s=i.find(e=>Jr(e.key,o));if(s)return Xr(await s.promise);t+=1;let c=(async()=>{let t=await e(o.text,o.font,qr);return{stitches:Kr(t,o.options).filter(({a:e,b:t})=>Math.hypot(t.x-e.x,t.y-e.y)>0),bounds:{...t.bounds}}})(),l={key:o,promise:c};i.push(l);try{let e=await c;return n&&Jr(n,o)&&(r={key:o,result:e}),Xr(e)}finally{let e=i.indexOf(l);e>=0&&i.splice(e,1)}}}}function Qr(e,t){let n=Math.min(1,Math.max(0,e));return(4*n*(1-n))**t}function $r(e,t){let{H:n,p:r,n:i}=t;return Array.from({length:i},(t,a)=>{let o=a/(i-1);return{x:e.a.x+(e.b.x-e.a.x)*o,y:e.a.y+(e.b.y-e.a.y)*o,z:a===0||a===i-1?0:n*Qr(o,r)}})}function ei(e,t,n){return Math.min(t,n*e)}var ti=new Float64Array([.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]),ni=new Float64Array([.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.06225352393864789,.027152459411754096]),ri=12,ii=2e-14;function ai(e,t,n,r){let i=0,a=0,o=1/n;for(let r=0;r<ti.length;r++){let s=ti[r],c=ni[r]*.5;for(let r=-1;r<=1;r+=2){let l=.5*(1+r*s),u=l**+o,d=.5*u,f=.5*o*u/l,p=4*d*(1-d),m=t*n*p**(n-1)*4*(1-2*d)*f,h=e*f,g=Math.hypot(h,m);i+=c*g,a+=c*(e*f*f/g)}}return r&&(r.quad+=16),[2*i,2*a]}function oi(e,t,n){if(n===0)return e;let[r,i]=ai(e,t.H,t.p,t.work),a=t.L0===void 0?r:t.L0,o=a*(1+n),s=Math.max(e+n*a/i,o-2*t.H);for(let n=0;n<ri;n++){let[n,r]=ai(s,t.H,t.p,t.work);t.work&&(t.work.newton+=1);let i=n-o;if(Math.abs(i)<=ii*o)break;let a=s-i/r;s=Number.isFinite(a)&&a>=e?a:(s+e)*.5}return s}function si(e,t){let n=e-1;if(n<=1e-15)return Math.sqrt(Math.max(0,6*n));let r;if(e<1.5)r=Math.sqrt(6*n)*(1-3*n/20);else{let t=Math.log(2*e);r=t+Math.log(t)}for(let n=0;n<ri;n++){let n=Math.sinh(r),i=n/r-e;if(Math.abs(i)<=ii*e)break;let a=(r*Math.cosh(r)-n)/(r*r),o=r-i/a;r=Number.isFinite(o)&&o>0?o:r*.5,t&&(t.newton+=1)}return r}function ci(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=e.b.x-e.a.x,i=e.b.y-e.a.y,a=Math.hypot(r,i),o=oi(a,t,n),s=t.n-1,c=Array(t.n),l=Math.abs(r),u=n===0||l===0?0:Math.sqrt(Math.max(0,o*o-i*i)),d=n===0||l===0?0:si(u/l,t.work);if(n===0||l!==0&&!(d>0)){for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let a=n*2<=s?n/s:1-(s-n)/s;c[n]={x:e.a.x+r*a,y:e.a.y+i*a,z:t.H*Qr(a,t.p)}}return ui(e,c,t.tau)}if(l===0){let n=(o+i)/(2*o),r=e.a.y+(o+i)*.5;for(let i=0;i<t.n;i++)if(i===0)c[i]={x:e.a.x,y:e.a.y,z:0};else if(i===s)c[i]={x:e.b.x,y:e.b.y,z:0};else{let a=i*2<=s?i/s:1-(s-i)/s,l=a<=n?e.a.y+o*a:r-o*(a-n);c[i]={x:e.a.x,y:l,z:t.H*Qr(a,t.p)}}return ui(e,c,t.tau)}let f=Math.asinh(i/u)+d,p=Math.sinh(f),m=2*d*o/l,h=l/(2*d),g=Math.cosh(f);for(let n=0;n<t.n;n++)if(n===0)c[n]={x:e.a.x,y:e.a.y,z:0};else if(n===s)c[n]={x:e.b.x,y:e.b.y,z:0};else{let o=n*2<=s?n/s:1-(s-n)/s,l,u,_;if(d>6||Math.abs(i)>.49*a){u=o;let e=p-m*u;l=(f-Math.asinh(e))/(2*d),_=Math.hypot(1,e)}else{l=o;let e=f-2*d*l,t=Math.exp(e),n=1/t,r=(t-n)*.5;_=(t+n)*.5,u=(p-r)/m}c[n]={x:e.a.x+r*l,y:e.a.y+h*(g-_),z:t.H*Qr(u,t.p)}}return ui(e,c,t.tau)}function li(e,t,n,r,i,a,o){if(n===void 0||n>=0||n===0)return;let s=e.b.x-e.a.x,c=e.b.y-e.a.y,l=Math.hypot(s,c);if(!(l>0))return;let u=s/l,d=c/l,f=-d,p=u;p<0&&(f=-f,p=-p);let m=Math.PI/2;for(let n=1;n<t-1;n++){let t=(r(n)-e.a.x)*f+(i(n)-e.a.y)*p;t>0&&(m=Math.min(m,Math.atan2(a(n),t)))}let h=Math.min(-n,m);if(!(h>0))return;let g=Math.sin(h),_=Math.cos(h);for(let n=1;n<t-1;n++){let t=r(n),s=i(n),c=a(n),l=t-e.a.x,m=s-e.a.y,h=l*u+m*d,v=l*f+m*p,y=v*_+c*g,b=c*_-v*g;o(n,e.a.x+h*u+y*f,e.a.y+h*d+y*p,Math.max(0,b))}}function ui(e,t,n){return li(e,t.length,n,e=>t[e].x,e=>t[e].y,e=>t[e].z,(e,n,r,i)=>{t[e]={x:n,y:r,z:i}}),t}function di(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=e.b.x-e.a.x,o=e.b.y-e.a.y,s=Math.hypot(a,o),c=oi(s,t,i),l=t.n-1,u=(e,t,i,a)=>{let o=r+e*3;n[o]=t,n[o+1]=i,n[o+2]=a},d=()=>{li(e,t.n,t.tau,e=>n[r+e*3],e=>n[r+e*3+1],e=>n[r+e*3+2],u)},f=Math.abs(a),p=i===0||f===0?0:Math.sqrt(Math.max(0,c*c-o*o)),m=i===0||f===0?0:si(p/f,t.work);if(i===0||f!==0&&!(m>0)){for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l;u(n,e.a.x+a*r,e.a.y+o*r,t.H*Qr(r,t.p))}d();return}if(f===0){let n=(c+o)/(2*c),r=e.a.y+(c+o)*.5;for(let i=0;i<t.n;i++)if(i===0)u(i,e.a.x,e.a.y,0);else if(i===l)u(i,e.b.x,e.b.y,0);else{let a=i*2<=l?i/l:1-(l-i)/l,o=a<=n?e.a.y+c*a:r-c*(a-n);u(i,e.a.x,o,t.H*Qr(a,t.p))}d();return}let h=Math.asinh(o/p)+m,g=Math.sinh(h),_=2*m*c/f,v=f/(2*m),y=Math.cosh(h);for(let n=0;n<t.n;n++)if(n===0)u(n,e.a.x,e.a.y,0);else if(n===l)u(n,e.b.x,e.b.y,0);else{let r=n*2<=l?n/l:1-(l-n)/l,i,c,d;if(m>6||Math.abs(o)>.49*s){c=r;let e=g-_*c;i=(h-Math.asinh(e))/(2*m),d=Math.hypot(1,e)}else{i=r;let e=h-2*m*i,t=Math.exp(e),n=1/t,a=(t-n)*.5;d=(t+n)*.5,c=(g-a)/_}u(n,e.a.x+a*i,e.a.y+v*(y-d),t.H*Qr(c,t.p))}d()}var fi=64,pi=256,mi=4,hi=16,gi=Math.sin(Math.PI/18),_i=new Float64Array(fi),vi=new Float64Array(fi);function yi(){let e=fi/2;for(let t=0;t<e;t++){let e=Math.cos(Math.PI*(t+.75)/64.5),n=0;for(;;){let t=1,r=e;for(let n=2;n<=fi;n++){let i=((2*n-1)*e*r-(n-1)*t)/n;t=r,r=i}n=fi*(e*r-t)/(e*e-1);let i=e-r/n;if(i===e||Math.abs(i-e)<=2e-16){e=i;break}e=i}let r=1/((1-e*e)*n*n);_i[t]=(1-e)*.5,_i[63-t]=(1+e)*.5,vi[t]=r,vi[63-t]=r}}yi();function bi(e,t,n){let r=1,i=0,a=1/t;for(let n=0;n<fi;n++){let o=_i[n],s=.5*o**+a,c=4*s*(1-s),l=4*t*(1-2*s)*c**(t-1),u=.5*a*o**(a-1),d=Math.hypot(1,e*l),f=2*vi[n]*u;r+=f*(d-1),i+=f*(e*l*l/d)}return n&&(n.quad+=fi),[r,i]}var xi=new Map;function Si(e){let t=xi.get(e);if(t)return t;let n=new Float64Array(pi),r=new Float64Array(pi);for(let t=0;t<pi;t++){let i=t/255;n[t]=mi*i*i,r[t]=bi(n[t],e)[0]}let i={p:e,r:n,length:r};return xi.set(e,i),i}function Ci(e,t){if(t>=e.length[255])return Math.max(e.r[255],t*.5);let n=0,r=255;for(;r-n>1;){let i=n+r>>>1;e.length[i]<t?n=i:r=i}let i=(t-e.length[n])/(e.length[r]-e.length[n]);return e.r[n]+(e.r[r]-e.r[n])*i}function wi(e,t,n,r){let i=e.b.x-e.a.x,a=e.b.y-e.a.y,o=Math.hypot(i,a);if(!(o>0))return t.H;let s=t.H/o,c=(t.L0===void 0?bi(s,r,t.work)[0]:t.L0/o)*(1+n),l=Ci(Si(r),c),u=t.L0===void 0?1:2;for(let e=0;e<Math.min(u,hi);e++){let[e,n]=bi(l,r,t.work);t.work&&(t.work.newton+=1);let i=l-(e-c)/n;if(!Number.isFinite(i)||i<s)break;l=i}return l*o}function Ti(e,t,n){let r=t.eRef>0?Math.min(1,e/t.eRef):1,i=Math.min(1,Math.abs(n)/gi),a=Math.min(d,t.phiMax)*r*i,o=t.tau===void 0?0:t.tau;return o===0?Math.min(d,a):Math.min(d,Math.max(0,a+o))}function Ei(e,t){let n=Number.isFinite(t.e)&&t.e>0?t.e:0,r=t.tau===void 0?0:t.tau;if(n===0&&r===0)return $r(e,{H:t.H,p:t.p,n:t.n});let i=Number.isFinite(t.p)&&t.p>0?t.p:1,a=wi(e,t,n,i),o=e.b.x-e.a.x,s=e.b.y-e.a.y,c=Math.hypot(o,s);if(!(c>0))return $r(e,{H:a,p:i,n:t.n});let l=o/c,u=-(s/c),d=l;d<0&&(u=-u,d=-d);let f=Ti(n,t,d),p=Math.sin(f),m=Math.cos(f),h=t.n-1,g=Array(t.n);for(let n=0;n<t.n;n++)if(n===0)g[n]={x:e.a.x,y:e.a.y,z:0};else if(n===t.n-1)g[n]={x:e.b.x,y:e.b.y,z:0};else{let t=n/h,r=a*Qr(t,i),c=r*p;g[n]={x:e.a.x+o*t+u*c,y:e.a.y+s*t+d*c,z:r*m}}return g}function Di(e,t,n,r){let i=Number.isFinite(t.e)&&t.e>0?t.e:0,a=t.tau===void 0?0:t.tau,o=Number.isFinite(t.p)&&t.p>0?t.p:1,s=i===0&&a===0?t.H:wi(e,t,i,o),c=e.b.x-e.a.x,l=e.b.y-e.a.y,u=Math.hypot(c,l),d=0,f=0,p=0,m=1;if((i>0||a!==0)&&u>0){d=-(l/u),f=c/u,f<0&&(d=-d,f=-f);let e=Ti(i,t,f);p=Math.sin(e),m=Math.cos(e)}let h=t.n-1;for(let i=0;i<t.n;i++){let a=r+i*3;if(i===0)n[a]=e.a.x,n[a+1]=e.a.y,n[a+2]=0;else if(i===t.n-1)n[a]=e.b.x,n[a+1]=e.b.y,n[a+2]=0;else{let t=i/h,r=s*Qr(t,o),u=r*p;n[a]=e.a.x+c*t+d*u,n[a+1]=e.a.y+l*t+f*u,n[a+2]=r*m}}}var Oi={shape:j,shapeInto:M},ki=[[`bezier`,Oi],[`catenary`,{shape:ci,shapeInto:di}],[`arch`,{shape:Ei,shapeInto:Di}],[`wire`,{shape:Ue,shapeInto:We,boundInto:Qe}]],Ai=new Map(ki);function ji(){return ki.map(([,e])=>e)}function Mi(e){return Ai.get(e)??Oi}function Ni(e){let t=Math.round(e.a.x*10),n=Math.round(e.a.y*10),r=Math.round(e.b.x*10),i=Math.round(e.b.y*10),a=Math.sin(t*12.9898+n*78.233+r*37.719+i*19.913)*43758.5453123;return 2*(a-Math.floor(a))-1}var Pi=1e-12;function Fi(e,t,n,r,i,a){let o=r.b.x-r.a.x,s=r.b.y-r.a.y,c=Math.hypot(o,s),l=c>0?-s/c:0,u=c>0?o/c:1,d=l,f=u,p=0;for(let r=0;r<n;r+=1){let a=t+(r===0?0:r-1),o=t+(r===n-1?r:r+1),s=e[o*3]-e[a*3],c=e[o*3+1]-e[a*3+1],m=Math.hypot(s,c),h=d,g=f;m>Pi*Math.max(1,Math.abs(e[o*3+2]-e[a*3+2]))&&(h=-c/m,g=s/m,r>0&&h*d+g*f<0&&(h=-h,g=-g)),d=h,f=g,p+=h*l+g*u;let _=(t+r)*3;i[_]=h,i[_+1]=g,i[_+2]=0}let m=p<0?-1:1;for(let r=0;r<n;r+=1){let o=t+(r===0?0:r-1),s=t+(r===n-1?r:r+1),c=e[s*3]-e[o*3],l=e[s*3+1]-e[o*3+1],u=e[s*3+2]-e[o*3+2],d=(t+r)*3,f=m*i[d],p=m*i[d+1];i[d]=f,i[d+1]=p;let h=-u*p,g=u*f,_=c*p-l*f,v=Math.hypot(h,g,_);v>0?(h/=v,g/=v,_/=v):(h=0,g=0,_=1),a[d]=h,a[d+1]=g,a[d+2]=_}}var Ii=33,Li=[0,.25,.5,.75,1].map(e=>e*2),Ri=[-u,0,u],zi=8,Bi=Zr(Vr),Vi=null,Hi=0;function Ui(e){return $}function Wi(e,t){let n=e.view?{...t,view:e.view}:t;if(!e.mesh)return n;let{cameraFov:r,threadWiden:i,threadMinRadius:a}=e.resolved;return{...n,mesh:{cameraFov:r,threadWiden:i,threadMinRadius:a}}}var Gi=new WeakMap;function Ki(e,t){let n=t/2,r={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(let t of e)for(let e of[...t.center,...t.shadow])r.minX=Math.min(r.minX,e.x-n),r.minY=Math.min(r.minY,e.y-n),r.maxX=Math.max(r.maxX,e.x+n),r.maxY=Math.max(r.maxY,e.y+n);if(Number.isFinite(r.minX+r.minY+r.maxX+r.maxY))return{x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2}}var qi=0,Ji,Yi;function Xi(e){Yi=e,window.__textweaving&&(window.__textweaving.setCamera=e)}var Zi=(e,t,n)=>({x:e.x+t,y:e.y+n});function Qi(e){return Number.isFinite(e)&&e>0?Math.min(e,2):1}function $i(e,t){let n=Number.isFinite(t)&&t>0?t:1;return Number.isInteger(n)?Math.round(e):Math.round(e*n)/n}function ea(e,t){return typeof e!=`number`||Number.isNaN(e)?0:Math.min(t,Math.max(0,e))}function ta(e){return typeof e!=`number`||!Number.isFinite(e)||e<=0?1:Math.min(e,2)}function na(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:t}function ra(e,t,n){return typeof e!=`number`||!Number.isFinite(e)?n:Math.min(t,Math.max(0,e))}function ia(e){return{smax:ra(e.wireSmax,1,N),lref:na(e.wireLref,80),alignScale:na(e.alignScale,60)}}var aa=/^#[0-9a-f]{6}$/i;function oa(e){return na(e.bandWidth,$.bandWidth)}function sa(e){return e.section===`band`}function ca(e){return sa(e)?oa(e)/2:e.width/2}function la(e){return sa(e)?0:e.width}function ua(e){return sa(e)?oa(e):e.width}function da(e){return e.stretchMode!==`absolute`}function fa(e){return typeof e.stretchUnit==`number`&&Number.isFinite(e.stretchUnit)?e.stretchUnit:$.stretchUnit}function pa(e,t,n,r){if(da(r)||e===0)return e;let i=O(t,n),a=e*fa(r)/i;return Number.isFinite(a)&&a>0?a:0}function ma(e,t,n){return Math.max(2,pa(2,e,t,n))}function ha(e,t){let n=new Float64Array(e.length);if(!da(t)){let e=fa(t);return n.fill(e>0?e:0)}let i=r(t.pitch,la(t),t.elevation,t.shadowRatio);for(let r=0;r<e.length;r+=1){let a=e[r],o=Math.hypot(a.b.x-a.a.x,a.b.y-a.a.y);n[r]=O(a,ei(o,i,t.k))}return n}function ga(e){let t=Mi(e.model)===Mi(`bezier`)?`bezier`:e.model,n=Number.isFinite(e.gravityAlpha)?e.gravityAlpha:$.gravityAlpha,r=Number.isFinite(e.gravityBeta)?e.gravityBeta:$.gravityBeta,i=2*Math.PI,o=ia(e);return{...e,stretch:ea(e.stretch,2),stretchMode:da(e)?`ratio`:`absolute`,stretchUnit:fa(e),twist:ea(e.twist,u),cameraTilt:ea(e.cameraTilt,u),cameraTurn:Number.isFinite(e.cameraTurn)?e.cameraTurn:$.cameraTurn,cameraZoom:na(e.cameraZoom,$.cameraZoom),cameraDragTilt:Number.isFinite(e.cameraDragTilt)?e.cameraDragTilt:$.cameraDragTilt,cameraDragTurn:Number.isFinite(e.cameraDragTurn)?e.cameraDragTurn:$.cameraDragTurn,cameraWheelZoom:Number.isFinite(e.cameraWheelZoom)?e.cameraWheelZoom:$.cameraWheelZoom,cameraPanX:Number.isFinite(e.cameraPanX)?e.cameraPanX:$.cameraPanX,cameraPanY:Number.isFinite(e.cameraPanY)?e.cameraPanY:$.cameraPanY,cameraFov:Number.isFinite(e.cameraFov)?e.cameraFov:$.cameraFov,threadWiden:Number.isFinite(e.threadWiden)?e.threadWiden:$.threadWiden,threadMinRadius:Number.isFinite(e.threadMinRadius)?e.threadMinRadius:$.threadMinRadius,gravityAlpha:(n%i+i)%i,gravityBeta:Math.min(Math.PI/2,Math.max(0,r)),align:ea(e.align,1),phiMax:ea(e.phiMax,d),phiRef:ta(e.phiRef),model:t,lightAzimuth:Number.isFinite(e.lightAzimuth)?e.lightAzimuth:$.lightAzimuth,stretchDuration:na(e.stretchDuration,$.stretchDuration),stretchTiming:e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,stretchSpeed:na(e.stretchSpeed,$.stretchSpeed),stretchSmoothAccel:Number.isFinite(e.stretchSmoothAccel)?e.stretchSmoothAccel:$.stretchSmoothAccel,stretchSmoothDecay:Number.isFinite(e.stretchSmoothDecay)?e.stretchSmoothDecay:$.stretchSmoothDecay,stretchSmoothSnap:Number.isFinite(e.stretchSmoothSnap)?e.stretchSmoothSnap:$.stretchSmoothSnap,stretchOrder:e.stretchOrder===`together`?`together`:`sequence`,stretchLineDuration:na(e.stretchLineDuration,$.stretchLineDuration),stitchStyle:e.stitchStyle===`hand`?`hand`:`machine`,stretchPull:Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,stretchPullDelay:Number.isFinite(e.stretchPullDelay)?e.stretchPullDelay:$.stretchPullDelay,wireSmax:o.smax,wireLref:o.lref,alignScale:o.alignScale,section:sa(e)?`band`:`round`,bandWidth:oa(e),bandFront:aa.test(e.bandFront)?e.bandFront:$.bandFront,bandBack:aa.test(e.bandBack)?e.bandBack:$.bandBack,material:e.material===`silk`||e.material===`rubber`||e.material===`glass`?e.material:`standard`,silkGloss:Number.isFinite(e.silkGloss)?e.silkGloss:$.silkGloss,silkSharpness:Number.isFinite(e.silkSharpness)?e.silkSharpness:$.silkSharpness,silkShift:Number.isFinite(e.silkShift)?e.silkShift:$.silkShift,silkStreak:Number.isFinite(e.silkStreak)?Math.max(0,e.silkStreak):$.silkStreak,silkDim:Number.isFinite(e.silkDim)?Math.min(1,Math.max(0,e.silkDim)):$.silkDim,rubberGloss:Number.isFinite(e.rubberGloss)?e.rubberGloss:$.rubberGloss,rubberSharpness:Number.isFinite(e.rubberSharpness)?e.rubberSharpness:$.rubberSharpness,rubberRim:Number.isFinite(e.rubberRim)?e.rubberRim:$.rubberRim,glassTint:Number.isFinite(e.glassTint)?e.glassTint:$.glassTint,glassEdge:Number.isFinite(e.glassEdge)?e.glassEdge:$.glassEdge,glassMirror:Number.isFinite(e.glassMirror)?e.glassMirror:$.glassMirror,glassGloss:Number.isFinite(e.glassGloss)?e.glassGloss:$.glassGloss,glassSharpness:Number.isFinite(e.glassSharpness)?e.glassSharpness:$.glassSharpness,glassEta:Number.isFinite(e.glassEta)?e.glassEta:$.glassEta,glassDispersion:Number.isFinite(e.glassDispersion)?e.glassDispersion:$.glassDispersion,glassSecondGloss:Number.isFinite(e.glassSecondGloss)?e.glassSecondGloss:$.glassSecondGloss,glassSecondWidth:Number.isFinite(e.glassSecondWidth)?e.glassSecondWidth:$.glassSecondWidth,plyMode:e.plyMode===`normal`?`normal`:`shade`,plyProfile:e.plyProfile===`notch`||e.plyProfile===`scallop`?e.plyProfile:`wave`,plyGain:Number.isFinite(e.plyGain)?e.plyGain:$.plyGain,plyNotch:Number.isFinite(e.plyNotch)?e.plyNotch:$.plyNotch,light:{dir:a(e.lightAzimuth),elevation:e.elevation}}}function _a(e,t,n,i,a,o,s){let c={dir:n.light.dir,elevation:n.elevation},l=r(n.pitch,la(n),c.elevation,n.shadowRatio),f=ea(n.phiMax,d),p=ea(n.twist,u),m=ea(n.align,1),h=ia(n),g=2*Math.PI,_={alpha:(n.gravityAlpha%g+g)%g,beta:Math.min(Math.PI/2,Math.max(0,n.gravityBeta))};for(let r=0;r<t.length;r+=1){let u=t[r],d=ea(a===void 0?n.stretch:a[r],2);if(s){let e=r*4;if(s.valid[r]===1&&Object.is(s.e[r],d)&&Object.is(s.ends[e],u.a.x)&&Object.is(s.ends[e+1],u.a.y)&&Object.is(s.ends[e+2],u.b.x)&&Object.is(s.ends[e+3],u.b.y))continue;s.valid[r]=1,s.e[r]=d,s.ends[e]=u.a.x,s.ends[e+1]=u.a.y,s.ends[e+2]=u.b.x,s.ends[e+3]=u.b.y}let g=Math.hypot(u.b.x-u.a.x,u.b.y-u.a.y),v=e.start[r],y=ei(g,l,n.k),b=pa(d,u,y,n),x=da(n)?void 0:ma(u,y,n);i.shapeInto(u,{e:b,H:y,p:n.p,n:Ii,phiMax:f,eRef:ta(n.phiRef),tau:o===void 0?p*Ni(u):o,twist:p,gravity:_,align:m,...h,...x===void 0?{}:{eMax:x}},e.center,v*3);let S=e.start[r+1]-v,C=Math.tan(c.elevation);for(let t=0;t<S;t+=1){let n=v+t,r=v+(t===0?0:t-1),i=v+(t===S-1?t:t+1),a=e.center[i*3]-e.center[r*3],o=e.center[i*3+1]-e.center[r*3+1],s=Math.hypot(a,o),l=-o/s,u=a/s;e.normal[n*2]=l,e.normal[n*2+1]=u;let d=e.center[n*3],f=e.center[n*3+1],p=e.center[n*3+2];if(p===0)e.shadow[n*2]=d,e.shadow[n*2+1]=f;else{let t=p/C;e.shadow[n*2]=d-c.dir.x*t,e.shadow[n*2+1]=f-c.dir.y*t}e.lightSide[n]=c.dir.x*l+c.dir.y*u}e.band&&e.bandNormal&&Fi(e.center,v,S,u,e.band,e.bandNormal)}}function va(e,t,n){let r=e.start[e.count];for(let i=0;i<r;i+=1)e.center[i*3]+=t,e.center[i*3+1]+=n,e.shadow[i*2]+=t,e.shadow[i*2+1]+=n}function ya(e){return[e.model,e.section,e.bandWidth,e.light.dir.x,e.light.dir.y,e.lightAzimuth,e.elevation,e.pitch,la(e),e.shadowRatio,e.k,e.p,e.phiMax,e.phiRef,e.twist,e.align,e.wireSmax,e.wireLref,e.alignScale,e.gravityAlpha,e.gravityBeta,e.stretchMode,e.stretchUnit]}function ba(e,t){if(!e||e.length!==t.length)return!1;for(let n=0;n<t.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function xa(){let e,t,n,r,i=0,a=e=>{let t=e*Ii;return i+=5,{count:e,start:new Uint32Array(e+1),center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}};return{build(o,s,c){e&&t&&n&&e.count===o.length||(e=a(o.length),t=a(o.length),n={e:new Float64Array(o.length),ends:new Float64Array(o.length*4),valid:new Uint8Array(o.length)},r=void 0);let l=ya(s);ba(r,l)||n.valid.fill(0),r=l,sa(s)?(e.band&&e.bandNormal&&e.band.length===e.center.length||(e.band=new Float64Array(e.center.length),e.bandNormal=new Float64Array(e.center.length),i+=2,n.valid.fill(0)),t.band&&t.bandNormal&&t.band.length===t.center.length||(t.band=new Float64Array(t.center.length),t.bandNormal=new Float64Array(t.center.length),i+=2)):(e.band=void 0,e.bandNormal=void 0,t.band=void 0,t.bandNormal=void 0);for(let t=0;t<=o.length;t+=1)e.start[t]=t*Ii;return _a(e,o,s,Mi(s.model),c,void 0,n),t.start.set(e.start),t.center.set(e.center),t.shadow.set(e.shadow),t.normal.set(e.normal),t.lightSide.set(e.lightSide),t.band&&t.bandNormal&&e.band&&e.bandNormal&&(t.band.set(e.band),t.bandNormal.set(e.bandNormal)),t},get allocations(){return i}}}function Sa(e){let t=[];for(let n=0;n<e.count;n+=1){let r=[],i=[],a=[],o=[];for(let t=e.start[n];t<e.start[n+1];t+=1)r.push({x:e.center[t*3],y:e.center[t*3+1],z:e.center[t*3+2]}),i.push({x:e.shadow[t*2],y:e.shadow[t*2+1]}),a.push({x:e.normal[t*2],y:e.normal[t*2+1]}),o.push(e.lightSide[t]);t.push({center:r,shadow:i,normal:a,lightSide:o})}return t}function Ca(e,t,n,r,i){let a=e.length*Ii,o={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(a*3),shadow:new Float64Array(a*2),normal:new Float64Array(a*2),lightSide:new Float64Array(a)};for(let t=0;t<=e.length;t+=1)o.start[t]=t*Ii;return _a(o,e,t,n,r,i),Sa(o)}function wa(e){let t=ia(e);return JSON.stringify([e.text,e.font,e.angle,e.pitch,Math.min(e.step,.5),e.mergeGap,e.minLen,la(e),e.shadowRatio,e.elevation,e.light.dir.x,e.light.dir.y,e.p,e.k,e.phiMax,ta(e.phiRef),(e.gravityAlpha%(2*Math.PI)+2*Math.PI)%(2*Math.PI),t.smax,t.lref,ca(e),da(e)?`ratio`:[`absolute`,fa(e)]])}var Ta=[0,d/2,d],Ea=[0,d];function Da(e){let t=e.start[e.count];return{count:e.count,start:e.start,center:new Float64Array(t*3),shadow:new Float64Array(t*2),normal:new Float64Array(t*2),lightSide:new Float64Array(t)}}function Oa(e,t,n,r,i){let a=Math.tan(n.elevation),o=n.light.dir.x/a,s=n.light.dir.y/a,c=e[0],l=e[e.length-1],u=t.map(e=>e===d?1:Math.sin(e)),f=t.map(e=>e===d?0:Math.cos(e)),p=new Float64Array(t.length),m=u.map(e=>e*e);for(let n=0;n<c.count;n+=1){let a=c.start[n],h=c.start[n+1],g=a+(h-a-1>>1),_=c.center[g*3+2];for(let t=0;t<e.length;t+=1){let n=e[t],r=Math.hypot(n.center[g*3]-c.center[g*3],n.center[g*3+1]-c.center[g*3+1],n.center[g*3+2]);p[t]=t===0||!(_>0)||!(r>0)?1:r/_}let v=p[e.length-1],y=e=>{let n=Math.sin(e)**2,r=0;for(let e=0;e<t.length;e+=1){let i=p[e];for(let r=0;r<t.length;r+=1)r!==e&&(i*=(n-m[r])/(m[e]-m[r]));r+=i}return r};for(let e=a;e<h;e+=1){let n=c.center[e*3],a=c.center[e*3+1],m=c.center[e*3+2],h=(l.center[e*3]-n)/v,g=(l.center[e*3+1]-a)/v;for(let e=0;e<4;e+=1){let c=e%2==0?n:a,l=e%2==0?h:g,_=e<2?0:-(e%2==0?o:s)*m,v=-1/0,b=1/0;for(let e=0;e<t.length;e+=1){let t=p[e]*(l*u[e]+_*f[e]);v=Math.max(v,c+t),b=Math.min(b,c+t)}let x=Math.hypot(l,_),S=Math.atan2(l,_);S>0&&S<d&&(v=Math.max(v,c+y(S)*x));let C=Math.atan2(-l,-_);C>0&&C<d&&(b=Math.min(b,c-y(C)*x)),e%2==0?(i.minX=Math.min(i.minX,b-r),i.maxX=Math.max(i.maxX,v+r)):(i.minY=Math.min(i.minY,b-r),i.maxY=Math.max(i.maxY,v+r))}}}}function ka(e,t){let n=wa(t);if(Ji?.key===n)return Ji.extent;qi+=1;let i={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},a=ca(t),o=e.length*Ii,s={count:e.length,start:new Uint32Array(e.length+1),center:new Float64Array(o*3),shadow:new Float64Array(o*2),normal:new Float64Array(o*2),lightSide:new Float64Array(o)};for(let t=0;t<=e.length;t+=1)s.start[t]=t*Ii;let c=[];for(let n of ji()){if(!n.boundInto){let r=n===Mi(`bezier`)?Ta:n===Mi(`arch`)?Ea:void 0;if(r){for(;c.length<r.length;)c.push(Da(s));let o=c.slice(0,r.length);for(let s of Li)r.forEach((r,i)=>_a(o[i],e,{...t,stretch:s,phiMax:0},n,void 0,r)),Oa(o,r,t,a,i);continue}let l=Ri;for(let r of Li)for(let c of l){_a(s,e,{...t,stretch:r},n,void 0,c);for(let e=0;e<o;e+=1){let t=s.center[e*3],n=s.center[e*3+1],r=s.shadow[e*2],o=s.shadow[e*2+1];i.minX=Math.min(i.minX,t-a,r-a),i.minY=Math.min(i.minY,n-a,o-a),i.maxX=Math.max(i.maxX,t+a,r+a),i.maxY=Math.max(i.maxY,n+a,o+a)}}}if(n.boundInto){let o=ia(t),s=r(t.pitch,la(t),t.elevation,t.shadowRatio),c={light:{dir:t.light.dir,elevation:t.elevation},width:2*a};for(let r of e){let e=ei(Math.hypot(r.b.x-r.a.x,r.b.y-r.a.y),s,t.k);n.boundInto(r,{e:0,H:e,p:t.p,n:Ii,phiMax:0,eRef:1,gravity:{alpha:t.gravityAlpha,beta:0},smax:o.smax,lref:o.lref},ma(r,e,t),i,c)}}}return Number.isFinite(i.minX+i.minY+i.maxX+i.maxY)||(i.minX=0,i.minY=0,i.maxX=0,i.maxY=0),Ji={key:n,extent:i},i}async function Aa(e,t,n){if(typeof document>`u`||typeof window>`u`)throw Error(`drawTextWeaving requires a browser DOM`);let r=t??document.querySelector(`canvas`);if(!r)throw Error(`The page needs a canvas element`);let i=ga(e),{light:a,...o}=i,{stitches:s,bounds:l}=await Bi.get(i);Vi?.builds!==Bi.builds&&(Vi={builds:Bi.builds,orders:{}});let u=i.stitchStyle===`hand`?`hand`:`machine`,d=Vi.orders[u];d||(d=Hr(s,i.angle,i.pitch,u),Vi.orders[u]=d,Hi+=1);let f=Gi.get(r),p=f?.itemsStage??xa(),m=n!==void 0&&n.length===s.length?Float64Array.from(n,e=>ea(e,2)):void 0,h=p.build(s,i,m),g=Ca(s,i,Mi(i.model),s.map(()=>0),0),_=ka(s,i),v=_.maxX-_.minX,y=_.maxY-_.minY,b=Math.max(1,Math.ceil(v+16)),x=Math.max(1,Math.ceil(y+16)),S=zi-_.minX+b-(v+16),C=zi-_.minY+x-(y+16),w=Qi(window.devicePixelRatio),T=window.innerWidth,E=window.innerHeight,D={cssW:T,cssH:E,dpr:w,scale:1},O=b<=T&&x<=E,k=O?{cssW:b,cssH:x,dpr:w,scale:1}:D,A=i.cameraTilt,j=i.cameraTurn,M=i.cameraZoom,N=f;if(!N){let e,t=!0,n=!1;try{e=Gn(r,D),n=!0}catch{e=Lr(r,k),t=!1}N={renderer:e,webgl:t,viewportWidth:T,viewportHeight:E,dpr:w,rendererBuilds:1,itemsStage:p,localStitches:s,resolved:i,typedItems:h,offsetX:S,offsetY:C,...n?{mesh:!0}:{}},Gi.set(r,N)}let P=N.webgl?A:0,F=N.webgl?j:0,I=N.webgl?M:1,ee=P!==0||F!==0||I!==1,L=N.mesh!==void 0,R=L||ee||!O;N.renderer.resize(R?D:k),f&&(N.viewportWidth=T,N.viewportHeight=E,N.dpr=w);let z=Ki(g,ua(i)),B=z?z.x+S:b/2,V=z?z.y+C:x/2,H=$i(T/2+i.cameraPanX-B,window.devicePixelRatio),U=$i(E/2+i.cameraPanY-V,window.devicePixelRatio),W={x:H+B,y:U+V},te=R?W.x-B:0,ne=R?W.y-V:0,G=S+te,K=C+ne,q={x:B+te,y:V+ne},J=ee||L?{tilt:P,turn:F,zoom:I,center:q}:void 0,re={x:l.x+G,y:l.y+K,w:l.w,h:l.h},Y=s.map(({a:e,b:t})=>({a:Zi(e,G,K),b:Zi(t,G,K)}));va(h,G,K);let ie=Sa(h);r.style.position=`fixed`,r.style.left=`${R?0:H}px`,r.style.top=`${R?0:U}px`,r.style.transform=`none`;let ae={bounds:re,params:o,stitches:Y,items:ie,display:{scale:1,dpr:w,cssW:b,cssH:x},view:{tilt:P,turn:F,zoom:I,center:W},stitchBuilds:Bi.builds,stitchOrder:d,stitchOrderBuilds:Hi,extentBuilds:qi,rendererBuilds:N.rendererBuilds,animFrames:window.__textweaving?.animFrames??0,playing:window.__textweaving?.playing??!1,typedAllocations:p.allocations,wireClamps:ge().clamps,wireUnconverged:ge().unconverged,peek:()=>Sa(h),stretches:()=>Pa(N),...Yi?{setCamera:Yi}:{}};return N.stretches=m,N.localStitches=s,N.resolved=i,N.typedItems=h,N.offsetX=G,N.offsetY=K,N.view=J,N.snapshot=ae,N.renderer.drawTyped(h,Wi(N,c(i))),window.__textweaving=ae,ae}function ja(e){let t=e??document.querySelector(`canvas`);if(t)return Gi.get(t)?.webgl}function Ma(e){let t=e??document.querySelector(`canvas`);return t?Gi.get(t)?.renderer.materialNote?.()??null:null}function Na(e,t){let n=t??document.querySelector(`canvas`);if(!n)return;let r=Gi.get(n);r?.snapshot&&(r.snapshot.playing=e)}function Pa(e){return e.stretches?Array.from(e.stretches):e.localStitches.map(()=>e.resolved.stretch)}function Fa(e,t,n,r){let i=n??document.querySelector(`canvas`);if(!i)return;let a=Gi.get(i);if(!a?.snapshot)return;a.resolved={...a.resolved,stretch:ea(e,2)},a.stretches=!t&&r!==void 0&&r.length===a.localStitches.length?Float64Array.from(r,e=>ea(e,2)):void 0,a.typedItems=a.itemsStage.build(a.localStitches,a.resolved,a.stretches),va(a.typedItems,a.offsetX,a.offsetY),a.renderer.drawTyped(a.typedItems,Wi(a,c(a.resolved)));let o=a.snapshot;return o.params.stretch=a.resolved.stretch,o.animFrames+=1,o.playing=!t,o.typedAllocations=a.itemsStage.allocations,o.peek=()=>Sa(a.typedItems),t&&(o.items=Sa(a.typedItems)),o}var Ia=`text.font.background.pitch.width.angle.threadColor.model.stretch.stretchMode.stretchUnit.stretchTiming.stretchSpeed.stretchSmoothAccel.stretchSmoothDecay.stretchSmoothSnap.stretchDuration.stretchOrder.stretchLineDuration.stitchStyle.stretchPull.stretchPullDelay.twist.align.p.phiMax.phiRef.gravityBeta.gravityAlpha.wireSmax.wireLref.lightAzimuth.elevation.shadowAlpha.shadowRatio.k.shade.ply.plyPitch.plySlope.shininess.plyContrast.plyMode.plyProfile.plyGain.plyNotch.step.mergeGap.minLen.alignScale.section.bandWidth.bandFront.bandBack.material.silkGloss.silkSharpness.silkShift.silkStreak.silkDim.rubberGloss.rubberSharpness.rubberRim.glassTint.glassEdge.glassMirror.glassGloss.glassSharpness.glassEta.glassDispersion.glassSecondGloss.glassSecondWidth.cameraDragTilt.cameraDragTurn.cameraWheelZoom.cameraFov.threadWiden.threadMinRadius`.split(`.`),La=[[`bezier`,`ベジェ`],[`catenary`,`懸垂線`],[`arch`,`倒れるアーチ`],[`wire`,`張り`]],Ra=[[`together`,`同時`],[`sequence`,`順番`]],za=[[`absolute`,`絶対値`],[`ratio`,`割合`]],Ba=[[`speed`,`同じ速さ`],[`duration`,`一定の時間`],[`smooth`,`なめらか`]],Va=[[`machine`,`機械`],[`hand`,`手`]],Ha=[[`round`,`丸い線`],[`band`,`帯`]],Ua=[[`standard`,`標準`],[`silk`,`シルク・サテン`],[`rubber`,`ゴム`],[`glass`,`ガラス`]],Wa=[[`shade`,`明るさの縞`],[`normal`,`法線の揺らぎ`]],Ga=[[`wave`,`なだらか`],[`notch`,`切れ込み`],[`scallop`,`丸い膨らみ`]],Ka=new Set([`gravityBeta`,`angle`,`lightAzimuth`,`elevation`,`phiMax`,`gravityAlpha`,`twist`,`cameraDragTilt`,`cameraDragTurn`]),qa=e=>Number.isFinite(e)&&e>0;function Ja(e){let t=Mi(e.model);return La.find(([e])=>Mi(e)===t)?.[0]??`bezier`}var Ya=({params:e})=>Ja(e)===`wire`&&qa(e.stretch)?null:`形を張りにして伸びを 0 より大きくすると効く`,Xa=e=>Ya(e)??(qa(e.params.twist)||qa(e.params.gravityBeta)?null:`輪の傾きか重力の向きを 0 より大きくすると効く`),Za=e=>Ya(e)??(e.params.gravityBeta<Math.PI/2-1e-9?null:`重力の向きを 90° より小さくすると効く`),Qa=({webgl:e})=>e===!1?`WebGL で描くときだけ効く`:null,$a=e=>e.section===`band`,eo=e=>e.material===`silk`,to=e=>e.material===`rubber`,no=e=>e.material===`glass`,ro=e=>eo(e)?`silk`:to(e)?`rubber`:no(e)?`glass`:`standard`,io=e=>e.stretchOrder!==`together`,ao=e=>Number.isFinite(e.stretchPull)?e.stretchPull:$.stretchPull,oo=e=>e.stretchMode!==`absolute`,so=e=>e.stretchTiming===`duration`||e.stretchTiming===`smooth`?e.stretchTiming:`speed`,co=e=>so(e)===`speed`,lo=e=>so(e)===`smooth`,uo=`時間の決め方をなめらか以外にすると効く`,fo=({params:e})=>lo(e)?null:`時間の決め方をなめらかにすると効く`,po={width:`round`,threadColor:`round`,ply:`round`,plyPitch:`round`,plySlope:`round`,plyContrast:`round`,plyMode:`round`,plyProfile:`round`,plyGain:`round`,plyNotch:`round`,bandWidth:`band`,bandFront:`band`,bandBack:`band`},mo=(e,t)=>{let n=po[e];return n===void 0||n===($a(t)?`band`:`round`)},ho=e=>Qa(e)??(qa(e.params.ply)?null:`撚りの濃さを 0 より大きくすると効く`),go=e=>ho(e)??(e.params.plyMode===`normal`?null:`撚りの表し方を法線の揺らぎにすると効く`),_o=e=>go(e)??(e.params.plyProfile===`notch`?null:`溝の形を切れ込みにすると効く`),vo=e=>Qa(e)??(to(e.params)?null:`素材をゴムにすると効く`),yo=e=>Qa(e)??(no(e.params)?$a(e.params)?`断面を丸い線にすると効く`:null:$a(e.params)?`断面を丸い線にし、素材をガラスにすると効く`:`素材をガラスにすると効く`),bo=`帯ではガラスはまだ描けないので、標準で描く`,xo=e=>Qa(e)??(eo(e.params)?null:`素材をシルク・サテンにすると効く`),So=Qa,Co=2*Math.PI,wo=5,To=1e3,Eo=e=>Math.min(Math.PI/2,Math.max(0,e)),Do=e=>{let t=(e%Co+Co)%Co;return t<Co?t:0},Oo={gravityBeta:Ya,twist:({params:e})=>Ja(e)!==`wire`||qa(e.stretch)?null:`伸びを 0 より大きくすると効く`,align:Xa,gravityAlpha:Za,wireSmax:Ya,wireLref:Ya,alignScale:e=>Xa(e)??(qa(e.params.align)?null:`向きの揃いを 0 より大きくすると効く`),phiMax:({params:e})=>{let t=Ja(e);return t!==`bezier`&&t!==`arch`?`形をベジェか倒れるアーチにすると効く`:qa(e.stretch)?null:`伸びを 0 より大きくすると効く`},p:({params:e})=>{let t=Ja(e);return t===`catenary`||t===`arch`?null:`形を懸垂線か倒れるアーチにすると効く`},shade:e=>Qa(e)??(no(e.params)&&!$a(e.params)?`素材をガラス以外にすると効く`:null),ply:Qa,plyPitch:ho,plySlope:ho,plyContrast:ho,plyMode:ho,plyProfile:go,plyGain:go,plyNotch:_o,shininess:e=>Qa(e)??`標準の素材には照りが無いので効かない(シルク・ゴムは素材の鋭さのつまみが効く)`,material:Qa,silkGloss:xo,silkSharpness:xo,silkShift:xo,silkStreak:xo,silkDim:xo,rubberGloss:vo,rubberSharpness:vo,rubberRim:vo,glassTint:yo,glassEdge:yo,glassMirror:yo,glassGloss:yo,glassSharpness:yo,glassEta:yo,glassDispersion:yo,glassSecondGloss:yo,glassSecondWidth:yo,cameraDragTilt:So,cameraDragTurn:So,cameraWheelZoom:So,cameraFov:Qa,threadWiden:Qa,threadMinRadius:Qa,stretchDuration:({params:e})=>so(e)===`duration`?io(e)?`伸びの順を同時にすると効く`:null:`時間の決め方を一定の時間にすると効く`,stretchLineDuration:({params:e})=>so(e)===`duration`?io(e)?null:`伸びの順を順番にすると効く`:`時間の決め方を一定の時間にすると効く`,stretchSpeed:({params:e})=>co(e)?null:`時間の決め方を同じ速さにすると効く`,stitchStyle:({params:e})=>lo(e)||io(e)?null:`伸びの順を順番にすると効く`,stretchOrder:({params:e})=>lo(e)?uo:null,stretchPull:({params:e})=>lo(e)?uo:io(e)?null:`伸びの順を順番にすると効く`,stretchPullDelay:({params:e})=>lo(e)?uo:io(e)?ao(e)>0?null:`引かれの強さを 0 より大きくすると効く`:`伸びの順を順番にすると効く`,stretchSmoothAccel:fo,stretchSmoothDecay:fo,stretchSmoothSnap:fo,stretchUnit:({params:e})=>oo(e)?`伸びの測り方を絶対値にすると効く`:null},ko={material:e=>no(e.params)&&$a(e.params)?bo:eo(e.params)||to(e.params)||no(e.params)?e.materialNote??null:null};function Ao(e,t){return Ka.has(e)?String(Math.round(t*180/Math.PI*1e9)/1e9):String(t)}function jo(e,t){if(typeof $[e]!=`number`)return t;let n=Number(t);return Ka.has(e)?n*Math.PI/180:n}function Mo(e){let t=e.trim(),n=/e-(\d+)$/i.exec(t);if(n)return Number(n[1]);let r=t.indexOf(`.`);return r<0?0:t.length-r-1}function No(e,t=e.value){return Number(t).toFixed(Mo(e.step))}function Po(e,t){let n=Math.max(No(e,e.min).length,No(e,e.max).length);t.style.setProperty(`--output-characters`,String(n))}function Fo(e,t,n=e.value){t&&(t.textContent=No(e,n))}function Io(){return n(``,Ui(window.location.search))}function Lo(e){return e.trim()?`${e} を糸で刺繍した図`:`糸で刺繍した図(空)`}function Ro(e){document.documentElement.style.backgroundColor=e,document.body.style.backgroundColor=`transparent`}function zo(e,t){let n=null,r=!1,i=()=>{n&&=(typeof n.removeEventListener==`function`?n.removeEventListener(`change`,o):n.removeListener(o),null)},a=()=>{n=e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`),typeof n.addEventListener==`function`?n.addEventListener(`change`,o):n.addListener(o)},o=()=>{i(),r||(t(e.devicePixelRatio),r||a())};return a(),()=>{r=!0,i()}}function Bo(){for(let e of document.querySelectorAll(`form fieldset > legend > button[aria-expanded]`)){let t=e.closest(`fieldset`);if(!t)continue;let n=n=>{e.setAttribute(`aria-expanded`,String(n)),t.toggleAttribute(`data-collapsed`,!n)};n(e.getAttribute(`aria-expanded`)!==`false`),e.addEventListener(`click`,()=>n(e.getAttribute(`aria-expanded`)!==`true`))}}function Vo(){for(let e of document.querySelectorAll(`[data-build-version]`))e.textContent=`版 6496443 2026-11-25 03:08`}async function Ho(e){let t=document.querySelector(`details`);t&&(t.open=window.innerWidth>=640),Bo(),Vo();let r=e??document.querySelector(`canvas`)??void 0,i=Ui(window.location.search),a=n(window.location.search,i),o=null,s=!1,c=!1,u=document.querySelector(`select[data-param="model"]`);if(!u)throw Error(`Missing control for model`);let d=Mi(``);for(let[e,t]of La)(e===`bezier`||Mi(e)!==d)&&u.add(new Option(t,e));let f=document.querySelector(`select[data-param="section"]`);if(!f)throw Error(`Missing control for section`);for(let[e,t]of Ha)f.add(new Option(t,e));let p=document.querySelector(`select[data-param="material"]`);if(!p)throw Error(`Missing control for material`);for(let[e,t]of Ua)p.add(new Option(t,e));let m=document.querySelector(`select[data-param="plyMode"]`);if(!m)throw Error(`Missing control for plyMode`);for(let[e,t]of Wa)m.add(new Option(t,e));let h=document.querySelector(`select[data-param="plyProfile"]`);if(!h)throw Error(`Missing control for plyProfile`);for(let[e,t]of Ga)h.add(new Option(t,e));let g=document.querySelector(`select[data-param="stretchOrder"]`);if(!g)throw Error(`Missing control for stretchOrder`);for(let[e,t]of Ra)g.add(new Option(t,e));let _=document.querySelector(`select[data-param="stretchMode"]`);if(!_)throw Error(`Missing control for stretchMode`);for(let[e,t]of za)_.add(new Option(t,e));let v=document.querySelector(`select[data-param="stretchTiming"]`);if(!v)throw Error(`Missing control for stretchTiming`);for(let[e,t]of Ba)v.add(new Option(t,e));let y=document.querySelector(`select[data-param="stitchStyle"]`);if(!y)throw Error(`Missing control for stitchStyle`);for(let[e,t]of Va)y.add(new Option(t,e));let b=document.querySelector(`input[data-param="stretch"]`);if(!b)throw Error(`Missing control for stretch`);b.max=`2`;let x=document.querySelector(`input[data-param="cameraFov"]`);if(!x)throw Error(`Missing control for cameraFov`);x.max=`60`;let S=new Map,C=new Map;for(let e of Ia){let t=document.querySelector(`[data-param="${e}"]`);if(!t)throw Error(`Missing control for ${e}`);S.set(e,t);let n=document.querySelector(`output[for~="${t.id}"]`);n&&(C.set(e,n),t instanceof HTMLInputElement&&t.type===`range`&&Po(t,n))}let w=new Map;for(let e of Ia){if(!Oo[e]&&!ko[e])continue;let t=S.get(e),n=document.createElement(`small`);n.className=`note`,n.id=`${t.id}-note`,n.hidden=!0,(t.closest(`.control`)??t.parentElement)?.append(n),t.setAttribute(`aria-describedby`,n.id),w.set(e,n)}let T=new Map;for(let e of Object.keys(po)){let t=S.get(e);T.set(e,t.closest(`.control`)??t.parentElement)}let E=new Set([...T.values()].map(e=>e.closest(`fieldset`)).filter(e=>e!==null)),D=()=>{for(let[e,t]of T)t.hidden=!mo(e,a);for(let e of E){let t=[...e.querySelectorAll(`:scope > .control`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}},O=()=>{D();let e={params:a,webgl:ja(r),materialNote:Ma(r)};for(let[t,n]of w){let r=Oo[t]?.(e)??null,i=S.get(t);i.disabled=r!==null,i.closest(`.control`)?.classList.toggle(`is-off`,r!==null);let a=r??ko[t]?.(e)??null;n.hidden=a===null,n.textContent=a??``,a===null?n.removeAttribute(`title`):n.title=a}},k=()=>{for(let e of Ia){let t=e===`stretchOrder`?io(a)?`sequence`:`together`:e===`stretchMode`?oo(a)?`ratio`:`absolute`:e===`stretchTiming`?so(a):e===`material`?ro(a):Ao(e,a[e]),n=S.get(e);n.value=t;let r=C.get(e);n instanceof HTMLInputElement&&n.type===`range`?Fo(n,r):r&&(r.textContent=n.value)}},A=null,j=[],M=null,N=()=>{let e=l(a,i),t=`${location.pathname}${e?`?${e}`:``}${location.hash}`;if(t===M)return;let n=performance.now(),r=j.length<wo?n:j[0]+To;if(r>n)A===null&&(A=setTimeout(()=>{A=null,N()},r-n));else{A!==null&&(clearTimeout(A),A=null),j.push(n),j.length>wo&&j.shift();try{history.replaceState(null,``,t),M=t}catch{}}},P=e=>{b.value=String(e),Fo(b,C.get(`stretch`),e)},F=null,I=Qn({value:()=>a.stretch,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>Na(e,r),duration:()=>a.stretchDuration,draw:(e,t)=>{a={...a,stretch:e},P(e),O(),Fa(e,t,r)},finish:e=>{a={...a,stretch:e},N()}}),ee=or({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],lineDuration:()=>Number.isFinite(a.stretchLineDuration)&&a.stretchLineDuration>0?a.stretchLineDuration:$.stretchLineDuration,pull:()=>ao(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(F=null),Na(e,r)},draw:(e,t,n)=>{F=n?null:e,a={...a,stretch:t},P(t),O(),Fa(t,n,r,n?void 0:e)},finish:e=>{F=null,a={...a,stretch:e},N()}}),L=xr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ha(e,ga(a)):[]},speed:()=>ga(a).stretchSpeed,together:()=>!io(a),pull:()=>ao(a),pullDelay:()=>Number.isFinite(a.stretchPullDelay)?a.stretchPullDelay:$.stretchPullDelay,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(F=null),Na(e,r)},draw:(e,t,n)=>{F=n?null:e,a={...a,stretch:t},P(t),O(),Fa(t,n,r,n?void 0:e)},finish:e=>{F=null,a={...a,stretch:e},N()}}),R=pr({value:()=>a.stretch,order:()=>window.__textweaving?.stitchOrder??[],rates:()=>{let e=window.__textweaving?.stitches;return e?ha(e,ga(a)):[]},accel:()=>ga(a).stretchSmoothAccel,decay:()=>ga(a).stretchSmoothDecay,snap:()=>ga(a).stretchSmoothSnap,reducedMotion:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,playing:e=>{e||(F=null),Na(e,r)},draw:(e,t,n)=>{F=n?null:e,a={...a,stretch:t},P(t),O(),Fa(t,n,r,n?void 0:e)},finish:e=>{F=null,a={...a,stretch:e},N()}}),z={play(e){lo(a)?R.play(e):co(a)?L.play(e):io(a)?ee.play(e):I.play(e)},stop(){I.stop(),ee.stop(),L.stop(),R.stop(),F=null}},B=e=>{z.stop(),a={...a,...e},G(!1)},V=[];Xi(e=>new Promise(t=>{let n={};for(let t of[`cameraTilt`,`cameraTurn`,`cameraZoom`,`cameraPanX`,`cameraPanY`])e[t]!==void 0&&(n[t]=e[t]);V.push(t),B(n)}));let H=()=>{let e=ja(r);return e===!0&&So({params:a,webgl:e})===null},U=e=>{Number.isFinite(e)&&e>0&&B({cameraZoom:e})},W=e=>{let t=new Map,n=null,r=null,i=null,o=()=>{let[e,n]=[...t.values()];return Math.hypot(n.x-e.x,n.y-e.y)},s=()=>{let[e,n]=[...t.values()];return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}},c=t=>{try{e.setPointerCapture(t.pointerId)}catch{}t.preventDefault()};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,e=>{let l=e.pointerType===`mouse`;if(l&&(e.button===2||e.button===0&&e.shiftKey)){if(i||t.size>0)return;i={id:e.pointerId,x:e.clientX,y:e.clientY,panX:a.cameraPanX,panY:a.cameraPanY},c(e)}else(!l||e.button===0&&H())&&(i||t.size>=2||(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),c(e),t.size===1?(n=H()?{x:e.clientX,y:e.clientY,tilt:a.cameraTilt,turn:a.cameraTurn}:null,r=null):(n=null,r={distance:o(),zoom:a.cameraZoom,mid:s(),panX:a.cameraPanX,panY:a.cameraPanY})))}),e.addEventListener(`pointermove`,e=>{if(i&&e.pointerId===i.id){B({cameraPanX:i.panX+(e.clientX-i.x),cameraPanY:i.panY+(e.clientY-i.y)});return}let c=t.get(e.pointerId);if(c){if(c.x=e.clientX,c.y=e.clientY,n&&t.size===1){if(!H())return;B({cameraTilt:Eo(n.tilt+a.cameraDragTilt*(e.clientY-n.y)),cameraTurn:Do(n.turn+a.cameraDragTurn*(e.clientX-n.x))})}else if(r&&t.size===2){let e=s(),t={cameraPanX:r.panX+(e.x-r.mid.x),cameraPanY:r.panY+(e.y-r.mid.y)};if(H()){let e=r.zoom*Math.exp(a.cameraWheelZoom*(o()-r.distance));Number.isFinite(e)&&e>0&&(t.cameraZoom=e)}B(t)}}});let l=e=>{i&&e.pointerId===i.id?i=null:t.delete(e.pointerId)&&(t.size<2&&(r=null),t.size===0&&(n=null))};e.addEventListener(`pointerup`,l),e.addEventListener(`pointercancel`,l),e.addEventListener(`wheel`,e=>{if(!H())return;e.preventDefault();let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:1;U(a.cameraZoom*Math.exp(-a.cameraWheelZoom*e.deltaY*t))},{passive:!1})},te=!1,ne=async e=>{c=!1,te=!1,s=!0;let t=a,n=V;V=[];try{e&&N(),await Aa(t,r,F??void 0),r?.setAttribute(`aria-label`,Lo(t.text)),O()}finally{s=!1;for(let e of n)e();c&&G(te)}},G=(e=!0)=>{c=!0,e&&(te=!0),o!==null||s||(o=requestAnimationFrame(async()=>{o=null,await ne(te)}))};for(let e of Ia)S.get(e).addEventListener(`input`,t=>{z.stop();let n=t.currentTarget;a={...a,[e]:jo(e,n.value)},e===`background`&&Ro(a.background);let r=C.get(e);n instanceof HTMLInputElement&&n.type===`range`?Fo(n,r):r&&(r.textContent=n.value),O(),G()}),S.get(e).addEventListener(`change`,N);let K=document.querySelector(`[data-stretch-to="max"]`),q=document.querySelector(`[data-stretch-to="min"]`);if(!K||!q)throw Error(`Missing stretch animation buttons`);K.addEventListener(`click`,()=>z.play(2)),q.addEventListener(`click`,()=>z.play(0));let J=document.querySelector(`[data-reset]`);if(!J)throw Error(`Missing reset button`);J.addEventListener(`click`,()=>{z.stop(),a=Io(),Ro(a.background),k(),O(),G()}),r&&W(r),window.addEventListener(`resize`,()=>G()),zo(window,()=>G()),Ro(a.background),k(),O(),await ne(!1)}await Ho();