KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",h="vframe",v=function(){throw Error("unimplement method")},m=function(){},d={tagName:h,rootId:"magix_vf_root",execError:m},l=d.hasOwnProperty,g=function(e,t){return e?l.call(e,t):e},p=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=E.isObject(t)?w(e,t):g(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},y=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new y(e,t)},w=function(e,t,r){for(var n in t)r&&g(r,n)||(e[n]=t[n]);return e};w(y.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,g(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,a=s+e,o=i[a];if(!g(i,a)){if(i.length>=n.b){i.sort(x);for(var c=n.b-n.x;c--;)o=i.pop(),delete i[o.k],o.m&&C(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e],r.m&&(C(r.m,r.o,r),r.m=a))},has:function(e){return e=s+e,g(this.c,e)}});var b=y(60),$=y(),C=function(e,t,r,n,i,a){for(E.isArray(e)||(e=[e]),t&&(E.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){d.execError(o)}return i},E={isArray:v,isObject:v,isFunction:v,isRegExp:v,isString:v,isNumber:v,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:v,include:v,mix:w,unimpl:v,has:g,safeExec:C,noop:m,config:p(d),start:function(e){var t=this;w(d,e),t.libRequire(d.iniFile,function(r){d=w(d,r,e),d["!tnc"]=d.tagName!=h;var n=d.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(d.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)g(e,r)&&t.push(r);return t},local:p({}),path:function(e,t){var o=e+"\n"+t,s=$.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+u,t.charAt(0)==u){var f=c.test(e)?8:0,h=e.indexOf(u,f);s=e.substring(0,h)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");$.set(o,s)}return s},pathToObject:function(e,t){var r=b.get(e);if(!r){r={};var n={},f=a;i.test(e)?f=e.replace(i,a):~e.indexOf("=")||(f=e);var h=e.replace(f,a);if(f&&c.test(f)){var v=f.indexOf(u,8);f=~v?f.substring(v):u}h.replace(o,function(e,r,i){if(t)try{i=decodeURIComponent(i)}catch(a){}n[r]=i}),r[s]=f,r.params=n,b.set(e,r)}return r},objectToPath:function(e,t,r){var n,i=e[s],a=[],o=e.params;for(var c in o)n=o[c],(!r||n||g(r,c))&&(t&&(n=encodeURIComponent(n)),a.push(c+"="+n));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(E.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:y};return w(E,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c=window,f="",u="pathname",h=t.has,v=t.mix,m=document,d=t.keys,l=/^UTF-8$/i.test(m.charset||m.characterSet||"UTF-8"),g=t.config(),p=t.cache(),x=t.cache(40),y={params:{},href:f},w=/#.*$/,b=/^[^#]*#?!?/,$="params",C=g.nativeHistory,E=function(e,r,n){if(e){n=this[$],t.isString(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(r=h(n,e[i]));i++);}return r},S=function(){return this[u]},M=function(){return this.view},I=function(e,t,r,n){return r=this,n=r[$],arguments.length>1?n[e]=t:n[e]},T=function(e){var r=t.pathToObject(e,l),n=r[u];return n&&s&&(r[u]=t.path(c.location[u],n)),r},P=v({viewInfo:function(e,r){if(!a){a={rs:g.routes||{},nf:g.notFoundView};var n=g.defaultView;if(!n)throw Error("unset defaultView");a.home=n;var i=g.defaultPathname||f;a.rs[i]=n,a[u]=i}var o;e||(e=a[u]);var s=a.rs;return o=t.isFunction(s)?s.call(g,e,r):s[e],{view:o?o:a.nf||a.home,pathname:o||C?e:a.nf?e:a[u]}},start:function(){var e=P,t=c.history;o=C&&t.pushState,s=C&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=P,n=p.get(e);if(!n){var i=e.replace(w,f),a=e.replace(b,f),o=T(i),s=T(a),h={};v(h,o[$]),v(h,s[$]),n={get:I,set:I,href:e,refHref:y.href,srcQuery:i,srcHash:a,query:o,hash:s,params:h},p.set(e,n)}if(t&&!n.view){var m;m=C?n.hash[u]||n.query[u]:n.hash[u];var d=r.viewInfo(m,n);v(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=x.get(i);if(!a){var o,s,c;a={view:c},a[u]=c,a[$]={};var f,h,v=[u,"view"];for(f=1;f>=0;f--)h=v[f],s=e[h],c=t[h],s!=c&&(a[h]={from:s,to:c},o=1);var m=e[$],l=t[$];for(v=d(m).concat(d(l)),f=v.length-1;f>=0;f--)h=v[f],s=m[h],c=l[h],s!=c&&(a[$][h]={from:s,to:c},o=1);a.occur=o,a.isParam=E,a.isPathname=S,a.isView=M,x.set(i,a)}return a},route:function(){var e=P,t=e.parseQH(0,1),r=!y.get,n=e.getChged(y,t);y=t,n.occur&&(i=t,e.fire("changed",{location:t,changed:n,force:r}))},navigate:function(e,r,n){var a=P;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},l)),e){var c=T(e),m={};if(m[$]=v({},c[$]),m[u]=c[u],m[u]){if(s){var d=i.query[$];for(var g in d)h(d,g)&&!h(m[$],g)&&(m[$][g]=f)}}else{var p=v({},i[$]);m[$]=v(p,m[$]),m[u]=i[u]}var x,y=t.objectToPath(m,l,i.query[$]);x=o?y!=i.srcQuery:y!=i.srcHash,x&&(o?(a.poped=1,history[n?"replaceState":"pushState"](f,f,y),a.route()):(v(m,i,m),m.srcHash=y,m.hash={params:m[$],pathname:m[u]},a.fire("!ul",{loc:i=m}),y="#!"+y,n?location.replace(y):location.hash=y))}}},r);return P.useState=function(){var e=P,t=location.href;n.on(c,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},P.useHash=function(){n.on(c,"hashchange",P.route)},P},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var r,n=t.has,i=t.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-owner",u="mx-ei",h={},v=65536,m=function(e){return e.id||(e.id="mx-e-"+v--)},d=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},l={special:function(e){i(a,e)},process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,s=h[a]||(h[a]=RegExp(","+a+"(?:,|$)"));if(!s.test(d(t,u))){for(var v,l,g="mx-"+a,p=[];i&&i!=o&&(v=d(i,g),l=d(i,u),!v&&!s.test(l));)p.push(i),i=i.parentNode;if(v){var x,y=v.split(c);y.length>1&&(x=y[0],v=y.pop());var w=d(i,f)||x;if(!w)for(var b=i,$=r.all();b&&b!=o;){if(n($,b.id)){d(i,f,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+f+":"+v);var C=r.get(w),E=C&&C.view;E&&E.processEvent({info:v,se:e,st:a,tId:m(t),cId:m(i)})}else for(var S;p.length;)S=p.shift(),l=d(S,u)||"",s.test(l)||(l=l+","+a,d(S,u,l))}},on:function(e,t){var n=this;if(!s[e]){r=t,s[e]=0;var i=a[e];i?n.lib(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}s[e]++},off:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.lib(1,o,e):o["on"+e]=null}s[e]=r}}};return l},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,h=c.length,v=h-1;h--;)f=a?h:v-h,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s,c,f=document,u=f.body,h=65536,v=t.safeExec,m=[],d=m.slice,l=t.mix,g=t.config("tagName"),p=t.config("rootId"),x=t.config("!tnc"),y=t.has,w=x?"mx-vframe":"mx-defer",b=u.contains,$=x&&u.querySelectorAll,C=" "+g+"[mx-vframe]",E="alter",S="created",M=function(e){return"object"==typeof e?e:f.getElementById(e)},I=function(e,t,r){return t=M(e),t&&(r=$?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(g)),r||m},T=function(e){return e.id||(e.id="magix_vf_"+h--)},P=function(e,t,r){if(e=M(e),t=M(t),e&&t)if(e!==t)try{r=b?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},q=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=c};return l(q,{root:function(e,t,r){if(!i){o=t,s=r,c=e;var n=M(p);n||(n=f.createElement(g),n.id=p,u.insertBefore(n,u.firstChild)),i=new q(p),e.add(i)}return i}}),l(l(q.prototype,r),{mountView:function(e,r,i){var a=this,f=M(a.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),a.unmountView(),e){var u=t.pathToObject(e),h=u.pathname,m=--a.sign;t.libRequire(h,function(e){if(m==a.sign){n.prepare(e);var t=new e({owner:a,id:a.id,$:M,path:h,vom:c,location:o});a.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),a.mountZoneVframes()),t.on("rendered",function(){a.mountZoneVframes()}),t.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),t.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:t}),i&&v(i,t,a)})},0),r=r||{},t.load(l(r,u.params,r),s)}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.oust();var t=M(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,a=c.get(e);return a||(a=new q(e),a.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,c.add(a)),a.mountView(t,r,n),a},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=I(i),o=a.length,s={};if(o)for(var c,f,u,h,v=0;o>v;v++)if(c=a[v],f=T(c),!y(s,f)&&(u=c.getAttribute("mx-view"),h=!c.getAttribute(w),h=h!=x,h||u)){n.mountVframe(f,u,t,r);for(var m,d=I(c),l=0,g=d.length;g>l;l++)m=d[l],s[T(m)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=c.get(e);if(n){var i=n.fcc;n.unmountView(),c.remove(e,i);var a=c.get(n.pId);a&&y(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?P(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=d.call(arguments,1);return i&&(t=v(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(S,e),t.fire(S,e)),c.vfCreated();var n=t.id,i=c.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(E,e),t.fire(E,e));var i=c.get(t.pId);i&&y(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var e=this,r=e.view;if(r&&r.sign>0&&r.rendered){var n=r.olChanged(s),i={location:o,changed:s,prevent:function(){this.cs=m},toChildren:function(e){e=e||m,t.isString(e)&&(e=e.split(",")),this.cs=e}};n&&v(r.locationChange,i,r);for(var a,f=i.cs||t.keys(e.cM),u=0,h=f.length;h>u;u++)a=c.get(f[u]),a&&a.locChged()}}}),q},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,h={render:1,renderUI:1},v="~",m=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},d=t.cache(40),l=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),p=function(){this.render()},x={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},y=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,w=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,$=function(e){var t=this;u(t,e),t.sign=1,a($.ms,[e],t)};$.ms=[],$.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[v]){e[v]=1;var n,i,a,c,u,d=e.prototype,l={};for(var p in d)if(o(d,p))if(n=d[p],i=p.match(b))for(a=i[1],c=i[2],c=c.split(s),u=c.length-1;u>-1;u--)i=c[u],l[i]=1,d[a+g+i]=n;else o(h,p)&&n!=f&&(d[p]=m(n));c&&(d.$evts=l)}},$.mixin=function(e,t){t&&$.ms.push(t),u($.prototype,e)},u(u($.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=function(i){if(n==e.sign){e.template=e.wrapMxEvent(i),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+g)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s))),n.locationChange==f&&(n.locationChange=p)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,i=d.get(r);i||(i=r.match(y),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(w,function(e,t,r){i.p[t]=r}),d.set(r,i));var o=i.n+g+e.st,s=t[o];if(s){var c=x[i.f];c&&c.call(x,n),a(s,u({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:i.p},x),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.off:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C,E,S="?t="+e.now(),M={},I={};return $.prototype.fetchTmpl=function(t){var r=this,n="template"in r;if(n)t(r.template);else if(o(M,r.path))t(M[r.path]);else{if(!C){var s=r.path.substring(0,r.path.indexOf("/"));E=e.Config.packages[s],C=E.base||E.path}var c=r.path;E.ignorePackageNameInUri&&(c=c.replace(E.name,""));var f=C+c+".html",u=I[f],h=function(e){t(M[r.path]=e)};u?u.push(h):(u=I[f]=[h],i({url:f+S,success:function(e){a(u,e),delete I[f]},error:function(e,t){a(u,t),delete I[f]}}))}},$.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},$},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},h={},v={},m=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,m.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],m.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&m.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(h,n),!r){a(v,e.changed);var i=t.root(m,h,v);v.isView()?i.mountView(n.view):i.locChged()}}},n);return m},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t.mix,o="mr",s=String.fromCharCode(26),c=t.isFunction,f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,o,e[r]);return t},h=function(e,t){return[e.name,u(t.urlParams),u(t.postParams)].join(s)},v=Date.now||function(){return+new Date},m=v(),d=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+m--},l=[].slice,g={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,cache:1,before:1,after:1},p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(l.call(arguments)))}},x=function(e){return e&&e.manage},y=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},w=function(e){return function(){var t=new C(this),r=arguments,n=r[r.length-1];return x(n)&&(n.manage(t.id,t),r=l.call(r,0,-1)),t[e].apply(t,r)}},b=function(e,t){return function(r,n){var i=l.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(d,{create:function(e){if(!e)throw Error("ungiven modelClass");return new d(e)}});var $={ALL:1,ONE:2,ORDER:4},C=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id=o+m--};return a(C.prototype,{send:function(e,r,a,o){var s=this;if(s.$doTask)return s.next(function(){this.send(e,r,a,o)}),s;s.$doTask=!0;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,h=s.$reqModels;t.isArray(e)||(e=[e]);var m,d,l,g=e.length,x=0,w=Array(g),b=[],C={},E=[],S=t.isArray(r);S&&(b=Array(r.length));for(var M,I=function(e,t,n){if(!s.$destroy){x++,delete h[e.id];var o=e.$mm,u=o.key;if(w[t]=e,n)m=!0,l=!0,d=n,C.msg=n,C[t]=n;else{if(l=!1,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=v();var p=o.after,y=o.meta;p&&i(p,[e,y]),c.fire("done",{model:e,meta:y})}!e.fromCache&&o.used>0&&(e.fromCache=!0),o.used++}if(a==$.ONE){var M=S?r[t]:r;M&&(b[t]=i(M,[l?C:null,e,C],s))}else if(a==$.ORDER){E[t]={m:e,e:l,s:n};for(var I,T,P=E.i||0;I=E[P];P++)T=S?r[P]:r,I.e&&(C.msg=I.s,C[P]=I.s),b[P]=i(T,[I.e?C:null,I.m,C].concat(b),s);E.i=P}x>=g&&(m||(C=null),a==$.ALL?(w.unshift(C),b[0]=C,b[1]=i(r,w,s)):b.unshift(C),s.$ntId=setTimeout(function(){s.doNext(b)},30))}},T=0;e.length>T;T++){if(M=e[T],!M)throw Error("miss attrs:"+e);var P=c.getModel(M,o),q=P.cKey,O=P.entity,k=p(I,O,T);k.id=s.id,q&&n(u,q)?u[q].q.push(k):P.update?(h[O.id]=O,q&&(u[q]={q:[k],e:O},k=y),O.request(k,{key:q,cKeys:u})):k()}return s},fetchAll:function(e,t){return this.send(e,t,$.ALL)},saveAll:function(e,t){return this.send(e,t,$.ALL,1)},fetchOrder:b($.ORDER),saveOrder:b($.ORDER,1),saveOne:b($.ONE,1),fetchOne:b($.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],h=u.q,v=[],m=[],d=0;h.length>d;d++)f=h[d],f.id!=e.id?v.push(f):e.$destroy||m.push(f);i(m,["abort"],e),v.length?u.q=v:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(a(d.prototype,r),{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++)if(i=e[o]){if(a=i.name,!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);i.cache&&(i.cacheKey||(i.cacheKey=h),i.cacheTime||(i.cacheTime=f)),n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),n=new t.$mClass;n.set(r,g),n.$mm={used:0};var a=e.before||r.before;c(a)&&i(a,[n,r]);var o=e.after||r.after;n.$mm.after=o;var s=e.cacheKey||r.cacheKey;return c(s)&&(s=i(s,[r,e])),n.$mm.key=s,n.$mm.meta=r,n.set(e,g),n.setUrlParams(r.urlParams),n.setPostParams(r.postParams),n.setUrlParams(e.urlParams),n.setPostParams(e.postParams),t.fire("inited",{model:n,meta:r}),n},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:w("saveAll"),fetchAll:w("fetchAll"),saveOrder:w("saveOrder"),fetchOrder:w("fetchOrder"),saveOne:w("saveOne"),fetchOne:w("fetchOne"),createMRequest:function(e){var t=new C(this);return x(e)&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,c(r)&&(r=i(r,[n,e]))),r){var f=a.$mCacheKeys,u=f[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var h=e.cacheTime||n.cacheTime||0;c(h)&&(h=i(h,[n,e])),h>0&&v()-s.$mm.done>h&&(a.clearCacheByKey(r),s=null)}}return s}}),d},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,n){var i=function(){i.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return t.mix(i,this,{prototype:!0}),e.extend(i,this,r)},n=+new Date,i=encodeURIComponent,a=t.has,o=t.isObject,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET),e=e.toUpperCase();var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t.isArray(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)a(t,n)||(r.$attrs[n]=e[n]);else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(o(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,f=t.has,u=r.extend({navigate:n.navigate,manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(n&&f(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)})});return u},{requires:["magix/magix","magix/view","magix/router"]}),document.createElement("vframe");