KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",v="vframe",h=function(){throw Error("unimplement method")},d=function(){},l={tagName:v,rootId:"magix_vf_root",execError:d},m=l.hasOwnProperty,p=function(e,t){return e?m.call(e,t):e},g=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=E.isObject(t)?b(e,t):p(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},w=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new w(e,t)},b=function(e,t,r){for(var n in t)r&&p(r,n)||(e[n]=t[n]);return e};b(w.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,p(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,a=s+e,o=i[a];if(!p(i,a)){if(i.length>=n.b){i.sort(x);for(var c=n.b-n.x;c--;)o=i.pop(),delete i[o.k],o.m&&S(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e],r.m&&(S(r.m,r.o,r),r.m=a))},has:function(e){return e=s+e,p(this.c,e)}});var y=w(60),C=w(),S=function(e,t,r,n,i,a){for(E.isArray(e)||(e=[e]),t&&(E.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){l.execError(o)}return i},E={isArray:h,isObject:h,isFunction:h,isRegExp:h,isString:h,isNumber:h,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:h,include:h,mix:b,unimpl:h,has:p,safeExec:S,noop:d,config:g(l),start:function(e){var t=this;b(l,e),t.libRequire(l.iniFile,function(r){l=b(l,r,e),l["!tnc"]=l.tagName!=v;var n=l.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(l.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)p(e,r)&&t.push(r);return t},local:g({}),path:function(e,t){var o=e+"\n"+t,s=C.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+u,t.charAt(0)==u){var f=c.test(e)?8:0,v=e.indexOf(u,f);s=e.substring(0,v)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");C.set(o,s)}return s},pathToObject:function(e,t){var r=y.get(e);if(!r){r={};var n={},f=a;i.test(e)?f=e.replace(i,a):~e.indexOf("=")||(f=e);var v=e.replace(f,a);if(f&&c.test(f)){var h=f.indexOf(u,8);f=~h?f.substring(h):u}v.replace(o,function(e,r,i){if(t)try{i=decodeURIComponent(i)}catch(a){}n[r]=i}),r[s]=f,r.params=n,y.set(e,r)}return r},objectToPath:function(e,t,r){var n,i=e[s],a=[],o=e.params;for(var c in o)n=o[c],(!r||n||p(r,c))&&(t&&(n=encodeURIComponent(n)),a.push(c+"="+n));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(E.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:w};return b(E,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c=window,f="",u="pathname",v=t.has,h=t.mix,d=document,l=t.keys,m=/^UTF-8$/i.test(d.charset||d.characterSet||"UTF-8"),p=t.config(),g=t.cache(),x=t.cache(40),w={params:{},href:f},b=/#.*$/,y=/^[^#]*#?!?/,C="params",S=p.nativeHistory,E=function(e,r,n){if(e){n=this[C],t.isString(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(r=v(n,e[i]));i++);}return r},I=function(){return this[u]},V=function(){return this.view},k=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},M=function(e){var r=t.pathToObject(e,m),n=r[u];return n&&s&&(r[u]=t.path(c.location[u],n)),r},T=h({viewInfo:function(e,r){if(!a){a={rs:p.routes||{},nf:p.notFoundView};var n=p.defaultView;if(!n)throw Error("unset defaultView");a.home=n;var i=p.defaultPathname||f;a.rs[i]=n,a[u]=i}var o;e||(e=a[u]);var s=a.rs;return o=t.isFunction(s)?s.call(p,e,r):s[e],{view:o?o:a.nf||a.home,pathname:o||S?e:a.nf?e:a[u]}},start:function(){var e=T,t=c.history;o=S&&t.pushState,s=S&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=T,n=g.get(e);if(!n){var i=e.replace(b,f),a=e.replace(y,f),o=M(i),s=M(a),v={};h(v,o[C]),h(v,s[C]),n={get:k,set:k,href:e,refHref:w.href,srcQuery:i,srcHash:a,query:o,hash:s,params:v},g.set(e,n)}if(t&&!n.view){var d;d=S?n.hash[u]||n.query[u]:n.hash[u];var l=r.viewInfo(d,n);h(n,l)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=x.get(i);if(!a){var o,s,c;a={view:c},a[u]=c,a[C]={};var f,v,h=[u,"view"];for(f=1;f>=0;f--)v=h[f],s=e[v],c=t[v],s!=c&&(a[v]={from:s,to:c},o=1);var d=e[C],m=t[C];for(h=l(d).concat(l(m)),f=h.length-1;f>=0;f--)v=h[f],s=d[v],c=m[v],s!=c&&(a[C][v]={from:s,to:c},o=1);a.occur=o,a.isParam=E,a.isPathname=I,a.isView=V,x.set(i,a)}return a},route:function(){var e=T,t=e.parseQH(0,1),r=!w.get,n=e.getChged(w,t);w=t,n.occur&&(i=t,e.fire("changed",{location:t,changed:n,force:r}))},navigate:function(e,r,n){var a=T;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},m)),e){var c=M(e),d={};if(d[C]=h({},c[C]),d[u]=c[u],d[u]){if(s){var l=i.query[C];for(var p in l)v(l,p)&&!v(d[C],p)&&(d[C][p]=f)}}else{var g=h({},i[C]);d[C]=h(g,d[C]),d[u]=i[u]}var x,w=t.objectToPath(d,m,i.query[C]);x=o?w!=i.srcQuery:w!=i.srcHash,x&&(o?(a.poped=1,history[n?"replaceState":"pushState"](f,f,w),a.route()):(h(d,i,d),d.srcHash=w,d.hash={params:d[C],pathname:d[u]},a.fire("!ul",{loc:i=d}),w="#!"+w,n?location.replace(w):location.hash=w))}}},r);return T.useState=function(){var e=T,t=location.href;n.on(c,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},T.useHash=function(){n.on(c,"hashchange",T.route)},T},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var r,n=t.has,i=t.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-owner",u="mx-ei",v={},h=65536,d=function(e){return e.id||(e.id="mx-e-"+h--)},l=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},m={special:function(e){i(a,e)},process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,s=v[a]||(v[a]=RegExp(","+a+"(?:,|$)"));if(!s.test(l(t,u))){for(var h,m,p="mx-"+a,g=[];i&&i!=o&&(h=l(i,p),m=l(i,u),!h&&!s.test(m));)g.push(i),i=i.parentNode;if(h){var x,w=h.split(c);w.length>1&&(x=w[0],h=w.pop());var b=l(i,f)||x;if(!b)for(var y=i,C=r.all();y&&y!=o;){if(n(C,y.id)){l(i,f,b=y.id);break}y=y.parentNode}if(!b)throw Error("miss "+f+":"+h);var S=r.get(b),E=S&&S.view;E&&E.processEvent({info:h,se:e,st:a,tId:d(t),cId:d(i)})}else for(var I;g.length;)I=g.shift(),m=l(I,u)||"",s.test(m)||(m=m+","+a,l(I,u,m))}},on:function(e,t){var n=this;if(!s[e]){r=t,s[e]=0;var i=a[e];i?n.lib(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}s[e]++},off:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.lib(1,o,e):o["on"+e]=null}s[e]=r}}};return m},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,h=v-1;v--;)f=a?v:h-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),h--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s,c,f=document,u=f.body,v=65536,h=t.safeExec,d=[],l=d.slice,m=t.mix,p=t.config("tagName"),g=t.config("rootId"),x=t.config("!tnc"),w=t.has,b=x?"mx-vframe":"mx-defer",y=u.contains,C=x&&u.querySelectorAll,S=" "+p+"[mx-vframe]",E="alter",I="created",V=function(e){return"object"==typeof e?e:f.getElementById(e)},k=function(e,t,r){return t=V(e),t&&(r=C?f.querySelectorAll("#"+t.id+S):t.getElementsByTagName(p)),r||d},M=function(e){return e.id||(e.id="magix_vf_"+v--)},T=function(e,t,r){if(e=V(e),t=V(t),e&&t)if(e!==t)try{r=y?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},q=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=c};return m(q,{root:function(e,t,r){if(!i){o=t,s=r,c=e;var n=V(g);n||(n=f.createElement(p),n.id=g,u.insertBefore(n,u.firstChild)),i=new q(g),e.add(i)}return i}}),m(m(q.prototype,r),{mountView:function(e,r,i){var a=this,f=V(a.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),a.unmountView(),e){var u=t.pathToObject(e),v=u.pathname,d=--a.sign;t.libRequire(v,function(e){if(d==a.sign){n.prepare(e);var t=new e({owner:a,id:a.id,$:V,path:v,vom:c,location:o});a.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),a.mountZoneVframes()),t.on("rendered",function(){a.mountZoneVframes()}),t.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),t.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:t}),i&&h(i,t,a)})},0),r=r||{},t.load(m(r,u.params,r),s)}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.oust();var t=V(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,a=c.get(e);return a||(a=new q(e),a.pId=i.id,w(i.cM,e)||i.cC++,i.cM[e]=1,c.add(a)),a.mountView(t,r,n),a},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=k(i),o=a.length,s={};if(o)for(var c,f,u,v,h=0;o>h;h++)if(c=a[h],f=M(c),!w(s,f)&&(u=c.getAttribute("mx-view"),v=!c.getAttribute(b),v=v!=x,v||u)){n.mountVframe(f,u,t,r);for(var d,l=k(c),m=0,p=l.length;p>m;m++)d=l[m],s[M(d)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=c.get(e);if(n){var i=n.fcc;n.unmountView(),c.remove(e,i);var a=c.get(n.pId);a&&w(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?T(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=l.call(arguments,1);return i&&(t=h(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(I,e),t.fire(I,e)),c.vfCreated();var n=t.id,i=c.get(t.pId);i&&!w(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(E,e),t.fire(E,e));var i=c.get(t.pId);i&&w(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var e=this,r=e.view;if(r&&r.sign>0&&r.rendered){var n=r.olChanged(s),i={location:o,changed:s,prevent:function(){this.cs=d},toChildren:function(e){e=e||d,t.isString(e)&&(e=e.split(",")),this.cs=e}};n&&h(r.locationChange,i,r);for(var a,f=i.cs||t.keys(e.cM),u=0,v=f.length;v>u;u++)a=c.get(f[u]),a&&a.locChged()}}}),q},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,v={render:1,renderUI:1},h="~",d=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},l=t.cache(40),m=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,p=String.fromCharCode(26),g=function(){this.render()},x={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},w=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,b=/(\w+):([^,]+)/g,y=/([$\w]+)<([\w,]+)>/,C=function(e){var t=this;u(t,e),t.sign=1,a(C.ms,[e],t)};C.ms=[],C.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[h]){e[h]=1;var n,i,a,c,u,l=e.prototype,m={};for(var g in l)if(o(l,g))if(n=l[g],i=g.match(y))for(a=i[1],c=i[2],c=c.split(s),u=c.length-1;u>-1;u--)i=c[u],m[i]=1,l[a+p+i]=n;else o(v,g)&&n!=f&&(l[g]=d(n));c&&(l.$evts=m)}},C.mixin=function(e,t){t&&C.ms.push(t),u(C.prototype,e)},u(u(C.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=function(i){if(n==e.sign){e.template=e.wrapMxEvent(i),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(m,"$&"+this.id+p)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s))),n.locationChange==f&&(n.locationChange=g)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,i=l.get(r);i||(i=r.match(w),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(b,function(e,t,r){i.p[t]=r}),l.set(r,i));var o=i.n+p+e.st,s=t[o];if(s){var c=x[i.f];c&&c.call(x,n),a(s,u({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:i.p},x),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.off:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var S,E,I="?t="+e.now(),V={},k={};return C.prototype.fetchTmpl=function(t){var r=this,n="template"in r;if(n)t(r.template);else if(o(V,r.path))t(V[r.path]);else{if(!S){var s=r.path.substring(0,r.path.indexOf("/"));E=e.Config.packages[s],S=E.base||E.path}var c=r.path;E.ignorePackageNameInUri&&(c=c.replace(E.name,""));var f=S+c+".html",u=k[f],v=function(e){t(V[r.path]=e)};u?u.push(v):(u=k[f]=[v],i({url:f+I,success:function(e){a(u,e),delete k[f]},error:function(e,t){a(u,t),delete k[f]}}))}},C.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},C},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},v={},h={},d=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,d.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],d.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&d.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(v,n),!r){a(h,e.changed);var i=t.root(d,v,h);h.isView()?i.mountView(n.view):i.locChged()}}},n);return d},{requires:["magix/vframe","magix/magix","magix/event"]}),document.createElement("vframe");