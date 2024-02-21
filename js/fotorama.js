/*!
 * Fotorama 4.1.6 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max("number"!=typeof b?-1/0:b,Math.min("number"!=typeof c?1/0:c,a))}function h(a){return a&&a.match(/-?\d+/g)[4]}function i(a){return kc?Number(h(a.css("transform"))):Number(a.css("left").replace("px",""))}function j(a){var b={};return kc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return a=Number(String(a).replace(b||"px","")),isNaN(a)?!1:a}function m(a){var b=l(a,"%");return b&&/%$/.test(a)?b:!1}function n(a){return l(a)||l(a,"%")?a:!1}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a,b){var c=a.data();if(!c.transEnd){var d=a[0],e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};d.addEventListener(e[T.prefixed("transition")],function(a){a.propertyName.match(b)&&c.onEndFn.call(this)}),c.transEnd=!0}}function r(a,b,c,d){var e,g=a.data();if(g){if(g.onEndFn=function(){e||c.call(this),e=!0},q(a,b),clearTimeout(g.transTimeout),!d)return;g.transTimeout=setTimeout(function(){e||(a.data().onEndFn=f,c.call(a[0]))},1.1*d)}}function s(a){if(kc?(a.css(k(0)),r(a,"",f)):a.stop(),a.length){var b=i(a);return a.css(j(b)),b}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.protocol=u.protocol||("https://"===location.protocol?"https://":"http://"),u.protocol}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e];if(g.i===c&&g.thumbsReady){d.splice(e,1,{i:c,video:g.video,videoReady:!0,caption:g.caption,img:g.img||b.img,thumb:g.thumb||b.thumb});break}}}function z(a){function b(a,b){var c=a.data(),d=a.children("img").eq(0),e=a.attr("href"),f=a.attr("src"),g=d.attr("src"),h=c.video,i=b?w(e,h===!0):!1;return i?e=!1:i=w(h,h),{video:i,img:c.img||e||f||g,thumb:c.thumb||g||f||e,id:a.attr("id")}}var d=[];return a.children().each(function(){var a=c(this),e=a.data();if(a.is("a, img"))c.extend(e,b(a,!0));else{if(a.is(":empty"))return;e.html=this,e._html=a.html()}d.push(e)}),d}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a,b,c){a()?b():setTimeout(function(){B(a,b)},c||100)}function C(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function D(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.round(f),height:Math.round(h),marginLeft:Math.round(-f/2),marginTop:Math.round(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}}function E(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function F(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function G(a,b,c){if(!c)return!1;var d=Number(a);if(!isNaN(d))return d-1;for(var e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function H(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(M(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function I(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function J(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){J(a,c.extend({},b,{overPos:b.pos,time:Math.max(nc,b.time/2)}))});var g=j(d);kc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,tc,e)}function K(a,b,d,e){var g=a,h=b,i="crossfade"===e.method;K.$el1=a=a||c(a),K.$el2=b=b||c(b);var j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Hb+" "+Gb),a.addClass(Gb),b.addClass(Hb),kc?(s(a),s(b),h&&(a.css(c.extend(m,n)),a.width()),a.css(c.extend(l,o)),i&&b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),h&&a.fadeTo(0,0),a.fadeTo(e.time,1,j),i&&b.fadeTo(e.time,0),g||h||j())}function L(a,b){a._x=b?a.touches[0].pageX:a.pageX,a._y=b?a.touches[0].pageY:a.pageY}function M(a,b){function d(a){return m=c(a.target),p=!1,h||k||a.touches&&a.touches.length>1||a.which>1||r.prevent||$&&$.type!==a.type&&ab||(p=b.select&&m.is(b.select,q))?r.prevent!==!0||p:(o=a.type.match("touch"),L(a,o),r.checked=i=l=!1,$=a,_=a.type.replace(/down|start/,"move"),j=a,n=r.control,(b.onStart||f).call(q,a,{control:n,$target:m}),h=k=!0,o||a.preventDefault(),void 0)}function e(a){if(!h||a.touches&&a.touches.length>1)return g(),void 0;if(_===a.type){L(a,o);var c=Math.abs(a._x-j._x),d=Math.abs(a._y-j._y),e=c-d,k=e>=3,m=-3>=e;l||(l=!(!k&&!m)),o&&!r.checked?((k||m)&&(r.checked=!0,i=k),(!r.checked||i)&&a.preventDefault()):!o||i?(a.preventDefault(),(b.onMove||f).call(q,a)):h=!1,r.checked=r.checked||k||m}}function g(a){k=r.control=!1,h&&(a&&a.preventDefault&&a.preventDefault(),ab=!0,clearTimeout(bb),bb=setTimeout(function(){ab=!1},1e3),(b.onEnd||f).call(q,{moved:!!l,$target:m,control:n,startEvent:j,aborted:!a,touch:o}),h=!1)}var h,i,j,k,l,m,n,o,p,q=a[0],r={};return q.addEventListener&&(q.addEventListener("touchstart",d),q.addEventListener("touchmove",e),q.addEventListener("touchend",g)),a.on("mousedown",d),hc.on("mousemove",e).on("mouseup",g),a.on("click","a",function(a){r.checked&&a.preventDefault()}),r}function N(a,b){function d(c){k=l=c._x,p=[[(new Date).getTime(),k]],m=n=s(a),(b.onStart||f).call(z,c,{pos:m})}function e(a,b){r=A.minPos,u=A.maxPos,v=A.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c){x&&(x=!1,d(c)),l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=F(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),B.noMove||(a.css(j(n)),y||(y=!0,Z.addClass("grabbing"))),(b.onMove||f).call(z,c,{pos:n,edge:o})}function i(a){if(!x){Z.removeClass("grabbing"),q=(new Date).getTime();for(var d,e,h,i,j,k,o,s,t,y=q-mc,A=null,B=nc,C=b.friction,D=p.length-1;D>=0;D--){if(d=p[D][0],e=Math.abs(d-y),null===A||h>e)A=d,i=p[D][1];else if(A===y||e>h)break;h=e}o=g(n,r,u);var E=i-l,F=E>=0,G=q-A,H=mc>=G&&n!==m&&o===n;v&&(o=g(Math[H?F?"floor":"ceil":"round"](n/v)*v,r,u),r=u=o),H&&(v||o===n)&&(t=-(E/G),B*=g(Math.abs(t),b.timeLow,b.timeHigh),j=Math.round(n+t*B/C),v||(o=j),(!F&&j>u||F&&r>j)&&(k=F?r:u,s=j-k,v||(o=k),s=g(o+.03*s,k-50,k+50),B=Math.abs((n-s)/(t/C)))),B*=w?10:1,(b.onEnd||f).call(z,c.extend(a,{pos:n,newPos:o,overPos:s,time:B}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z=a[0],A=a.data(),B={};return B=c.extend(M(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),B)}function O(a){P(!0),uc.appendTo(a),db=0,vc(),cb=setInterval(vc,200)}function P(a){a||uc.detach(),clearInterval(cb)}var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},R=new RegExp("[&<>\"'/]","g"),S={escape:function(a){return null==a?"":(""+a).replace(R,function(a){return Q[a]})}},T=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),U={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},V="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)U.ok=!0;else for(var W=0,X=V.length;X>W;W++)if(U.prefix=V[W],"undefined"!=typeof b[U.prefix+"CancelFullScreen"]){U.ok=!0;break}U.ok&&(U.event=U.prefix+"fullscreenchange",U.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},U.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},U.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var Y,Z,$,_,ab,bb,cb,db,eb="fotorama",fb="fullscreen",gb=eb+"__wrap",hb=gb+"--not-ready",ib=gb+"--css3",jb=gb+"--video",kb=gb+"--fade",lb=gb+"--slide",mb=gb+"--no-controls",nb=eb+"__stage",ob=nb+"__frame",pb=ob+"--video",qb=nb+"__shaft",rb=nb+"--only-active",sb=eb+"__arr",tb=sb+"--disabled",ub=sb+"--prev",vb=sb+"--next",wb=sb+"__arr",xb=eb+"__nav",yb=xb+"-wrap",zb=xb+"__shaft",Ab=xb+"--dots",Bb=xb+"--thumbs",Cb=xb+"__frame",Db=Cb+"--dot",Eb=Cb+"--thumb",Fb=eb+"__fade",Gb=Fb+"-front",Hb=Fb+"-rear",Ib=eb+"__shadow",Jb=Ib+"s",Kb=Jb+"--left",Lb=Jb+"--right",Mb=eb+"__active",Nb=eb+"__select",Ob=eb+"--hidden",Pb=eb+"--fullscreen",Qb=eb+"__fullscreen-icon",Rb=eb+"__error",Sb=eb+"__loading",Tb=eb+"__loaded",Ub=Tb+"--full",Vb=Tb+"--img",Wb=eb+"__load",Xb=eb+"__img",Yb=Xb+"--full",Zb=eb+"__dot",$b=eb+"__thumb",_b=$b+"-border",ac=eb+"__html",bc=eb+"__video",cc=bc+"-play",dc=bc+"-close",ec=eb+"__caption",fc=eb+"__oooo",gc=c(a),hc=c(b),ic="CSS1Compat"===b.compatMode,jc="quirks"===b.location.hash.replace("#",""),kc=T.csstransforms3d&&!jc,lc=U.ok,mc=300,nc=333,oc=5e3,pc=2,qc=64,rc=500,sc=333,tc=e([.1,0,.25,1]),uc=c(I("",I(fc))),vc=function(){uc.attr("class",fc+" "+fc+"--"+db),db++,db>4&&(db=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Gc,function(a,b){if(!b.i){b.i=jd++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Gc,fd),y(Gc,{img:d.img,thumb:d.thumb},b.i,fd)}}})}function i(){Gc=fd.data=Gc||z(e),Hc=fd.size=Gc.length,h(),Hd=L(Hd),cb.ok=!1,Hc&&(dd||(e.html("").append(nd),c.Fotorama.size++,dd=!0))}function q(){Ld.noMove=2>Hc||Kc||Wc}function r(a){a===!0&&(a=""),f.autoplay=Math.max(Number(a)||oc,1.5*nc)}function t(a){return a?"add":"remove"}function u(){Wc="crossfade"===f.transition||"dissolve"===f.transition,Rc=f.loop&&(Hc>2||Wc);var a={add:[],remove:[]};Hc>1?(Sc=f.nav,Tc="top"===f.navPosition,a.remove.push(Nb),td.show(),db()):(Sc=!1,td.hide()),a[t(Hc>1)].push("fotorama__wrap--navigation"),f.autoplay&&r(f.autoplay),Xc=l(f.thumbWidth)||qc,Yc=l(f.thumbHeight)||qc,q(),mc(f,!0),Sc===!0||"dots"===Sc?(vd.addClass(Ab).removeClass(Bb),$(Hc,"navDot")):"thumbs"===Sc?(E(ld,c.Fotorama.jst.style({w:Xc,h:Yc,m:pc,s:hd,q:!ic})),vd.addClass(Bb).removeClass(Ab),$(Hc,"navThumb")):(Sc=!1,vd.removeClass(Bb+" "+Ab)),Uc=f.allowFullScreen,e.insertAfter(md).removeClass(Ob),Sc&&Tc?ud.insertBefore(od):ud.insertAfter(od),Uc?(Fd.appendTo(od),Vc=lc&&"native"===Uc):(Fd.detach(),Vc=!1),a[t(Wc)].push(kb),a[t(!Wc&&!Ld.noMove)].push(lb),P(),nd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),Jd=c.extend({},f)}function v(a){return 0>a?(Hc+a%Hc)%Hc:a>=Hc?a%Hc:a}function L(a){return g(a,0,Hc-1)}function M(a){return a>0||Rc?a-1:!1}function Q(a){return Hc-1>a||Rc?a+1:!1}function R(){Cd.minPos=Rc?-1/0:-o(Hc-1,Kd.w,pc,Mc),Cd.maxPos=Rc?1/0:-o(0,Kd.w,pc,Mc),Cd.snap=Kd.w+pc}function S(){Dd.minPos=Math.min(0,Kd.w-wd.width()),Dd.maxPos=0,Md.noMove=Dd.minPos===Dd.maxPos}function T(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Gc[v(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function V(a,b,c,d){(!Zc||"*"===Zc&&d===Id)&&(a=n(f.width)||n(a)||rc,b=n(f.height)||n(b)||sc,fd.resize({width:a,ratio:f.ratio||c||a/b},0,d===Id?!0:"*"))}function W(a,b,d,e,g){T(a,b,function(a,h,i,j,k,l){function m(a){var b=v(h);tc(a,{index:b,src:w,frame:Gc[b]})}function n(){s.remove(),c.Fotorama.cache[w]="error",i.$html&&"stage"===b||!x||x===w?(w&&!l.$html?(j.trigger("f:error").removeClass(Sb).addClass(Rb),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Sb+" "+Rb).addClass(Tb),m("load"),V()),l.state="error",!(Hc>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,fd.splice(h,1))):(i[u]=w=x,W([h],b,d,e,!0))}function o(){var a=s.width(),g=s.height(),k=a/g;t.measures={width:a,height:g,ratio:k},V(a,g,k,h),s.off("load error").addClass(Xb+(q?" "+Yb:"")).prependTo(j),D(s,d||Kd,e||i.fit||f.fit),c.Fotorama.cache[w]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Sb+" "+Rb).addClass(Tb+" "+(q?Ub:Vb)),"stage"===b&&m("load")},5)}function p(){B(function(){return!A(r)},function(){o()})}if(j){var q=fd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",w=i[u],x=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!w)return n(),void 0;c.Fotorama.cache[w]?function y(){"error"===c.Fotorama.cache[w]?n():"loaded"===c.Fotorama.cache[w]?p():setTimeout(y,100)}():(c.Fotorama.cache[w]="*",s.on("load",p).on("error",n)),r.src=w,s.appendTo(c.Fotorama.$load)}}})}function X(){var a=fd.activeFrame[zd];a&&!a.data().state&&(O(a),a.on("f:load f:error",function(){a.off("f:load f:error"),P()}))}function $(a,b){T(a,b,function(a,d,e,g,h,i){if(!g)if(g=e[h]=nd[h].clone(),i=g.data(),i.data=e,"stage"===b){if(e.html&&(c(e.html).html(e._html),c('<div class="'+ac+'"></div>').append(e.html).appendTo(g)),f.captions&&e.caption&&c('<div class="'+ec+'"></div>').append(e.caption).appendTo(g),e.video){var j=Gd.clone();H(j,function(){fd.playVideo()},{onStart:function(a){uc.call(this,a),Ld.control=!0},tail:Ld}),g.addClass(pb).append(j)}qd=qd.add(g)}else"navDot"===b?xd=xd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),yd=yd.add(g),e.video&&g.append(Gd.clone()))})}function _(a,b,c){return a&&a.length&&D(a,b,c)}function ab(a){T(a,"stage",function(a,b,d,e,g,h){if(e){e.css(c.extend({left:Wc?0:o(b,Kd.w,pc,Mc)},Wc&&k(0))),h.appended||(e.appendTo(pd),h.appended=!0,Ac(d.$video));var i=d.fit||f.fit;_(h.$img,Kd,i),_(h.$full,Kd,i)}})}function bb(a,b){if("thumbs"===Sc&&!isNaN(a)){var d=Xc+pc,e=L(p(a+d,d)),f=L(p(a-Kd.w,d)),g={};g.w=Xc,g.h=Yc,yd.each(function(){var a=c(this),d=a.data(),h=d.eq,i="cover";e>h||h>f||_(d.$img,g,i)||b&&W([h],"navThumb",g,i)})}}function cb(a,b,d){cb.ok||(a=a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Gc.length;f>e;e++){var g=Gc[e];if(d.data===g){a=!0,d.eq=e;break}}return a||b.remove(),a}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).appendTo(b),d&&S(),cb.ok=!0)}function db(){td.each(function(a){c(this).toggleClass(tb,!Rc&&(0===Hd&&0===a||Hd===Hc-1&&1===a)&&!Kc)})}function Fb(a){return a.position().left+Xc/2}function Ib(a){J(Ed,{time:.9*a,pos:Fb(fd.activeFrame[Jc])})}function bc(a){if(Gc[a.guessIndex][Jc]){var b=g(a.coo-Fb(Gc[a.guessIndex][Jc]),Dd.minPos,Dd.maxPos),c=.9*a.time;J(wd,{time:c,pos:b,onEnd:function(){bb(b,!0)}}),c&&bb(b),zc(vd,F(b,Dd.minPos,Dd.maxPos))}}function fc(){if("thumbs"===Sc)Ic=yd,Jc=Bd;else{if(!Sc)return;Ic=xd,Jc=Ad}cb(Ic,wd,!0),Ic.removeClass(Mb),fd.activeFrame[Jc].addClass(Mb)}function jc(){Mc=Nc=Hd;var a=fd.activeFrame,b=a[zd];b&&(qd.not(fd.activeFrame[zd].addClass(Mb)).detach().data("appended",!1).removeClass(Mb+" "+Gb+" "+Hb),s(pd),pd.css(j(0)),ab([Hd,Pc,Qc]),R(),S())}function mc(a,b){a&&c.extend(Kd,{width:a.width||Kd.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:Kd.width,height:Kd.height,minWidth:Kd.minWidth,maxWidth:Kd.maxWidth,minHeight:Kd.minHeight,maxHeight:Kd.maxHeight,ratio:Kd.ratio})}function tc(a,b){e.trigger(eb+":"+a,[fd,b])}function uc(){f.stopAutoplayOnTouch?fd.stopAutoplay():bd=!0}function vc(){bd=!(!Kc&&!cd)}function xc(){if(clearTimeout(xc.t),!f.autoplay||bd)return fd.autoplay&&(fd.autoplay=!1,tc("stopautoplay")),void 0;fd.autoplay||(fd.autoplay=!0,tc("startautoplay"));var a=Hd;xc.t=setTimeout(function(){var b=fd.activeFrame[zd].data();B(function(){return b.state||a!==Hd},function(){bd||a!==Hd||fd.show({index:v(Hd+1)})})},f.autoplay)}function yc(){fd.fullScreen&&(fd.fullScreen=!1,lc&&U.cancel(id),Z.removeClass(fb),e.removeClass(Pb).insertAfter(md),tc("fullscreenexit"),Kd=c.extend({},ed),Ac(Kc,!0),fd.resize(),W([Hd,Pc,Qc],"stage"),gc.scrollLeft(_c).scrollTop($c))}function zc(a,b){a.removeClass(Kb+" "+Lb),b&&!Kc&&a.addClass(b.replace(/^|\s/g," "+Jb+"--"))}function Ac(a,b,c){b&&(nd.removeClass(jb),Kc=!1,q()),a&&(a.remove(),tc("unloadvideo")),c&&(vc(),xc())}function Bc(a){nd.toggleClass(mb,a)}function Cc(a,b){Kc?Ac(Kc,!0,!0):b?Bc():fd.show({index:a.shiftKey||a._x-od.offset().left<Kd.w/3?"<":">",slow:a.altKey,direct:!0})}function Dc(a,b){var d=c(this).data().eq;fd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-vd.offset().left,time:b})}function Ec(){i(),u(),Fc.ok||(f.hash&&location.hash&&(Id=G(location.hash.replace(/^#/,""),Gc,0===gd)),Id=(Rc?v(Id):L(Id))||0,Hd=Mc=Nc=Oc=Id),Hc?(Kc&&Ac(Kc,!0),fd.show({index:Hd,time:0}),fd.resize()):fd.destroy()}function Fc(){Fc.ok||(Fc.ok=!0,nd.removeClass(hb),tc("ready"))}Y=Y||c("html"),Z=Z||c("body"),c.Fotorama.$load=c.Fotorama.$load||c('<div class="'+Wb+'"></div>').appendTo(Z);var Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd=this,gd=wc,hd=(new Date).getTime(),id=e.addClass(eb+hd)[0],jd=1,kd=e.data(),ld=c("<style></style>").insertBefore(e),md=c(I(Ob)).insertBefore(e),nd=c(I(gb+" "+hb)),od=c(I(nb)).appendTo(nd),pd=(od[0],c(I(qb)).appendTo(od)),qd=c(),rd=c(I(sb+" "+ub,I(wb))),sd=c(I(sb+" "+vb,I(wb))),td=rd.add(sd).appendTo(od),ud=c(I(yb)),vd=c(I(xb)).appendTo(ud),wd=c(I(zb)).appendTo(vd),xd=c(),yd=c(),zd="$stageFrame",Ad="$navDotFrame",Bd="$navThumbFrame",Cd=pd.data(),Dd=wd.data(),Ed=c(I(_b)).appendTo(wd),Fd=c(I(Qb)),Gd=c(I(cc)),Hd=(c(I(dc)).appendTo(od),!1),Id=!1,Jd={},Kd={},Ld={},Md={};nd[zd]=c(I(ob)),nd[Bd]=c(I(Cb+" "+Eb,I($b))),nd[Ad]=c(I(Cb+" "+Db,I(Zb))),kc&&nd.addClass(ib),kd.fotorama=this,fd.options=f,wc++,fd.startAutoplay=function(a){return fd.autoplay?this:(bd=cd=!1,r(a||f.autoplay),xc(),this)},fd.stopAutoplay=function(){return fd.autoplay&&(bd=cd=!0,xc()),this},fd.show=function(a){function b(){X(),W([Hd,Pc,Qc],"stage"),jc(),tc("showend",a.direct),f.hash&&ad&&!fd.eq&&C(Lc.id||Hd+1),vc(),xc(),ad=!0}var c,d,e=nc;if("object"!=typeof a?(c=a,a={}):(c=a.index,e="number"==typeof a.time?a.time:e,d=a.overPos),a.slow&&(e*=10),">"===c?c=Nc+1:"<"===c?c=Nc-1:"<<"===c?c=0:">>"===c&&(c=Hc-1),isNaN(c)&&(c=G(c,Gc,!0)||Hd||0),fd.activeIndex=Hd=Rc?v(c):L(c),Pc=M(Hd),Qc=Q(Hd),Nc=Rc?c:Hd,fd.activeFrame=Lc=Gc[Hd],ab([Nc]),$([Hd,Pc,Qc],"stage"),Ac(!1,Lc.i!==Gc[v(Mc)].i),tc("show",a.direct),Wc){var h=Lc[zd],i=Hd!==Oc?Gc[Oc][zd]:null;K(h,i,qd,{time:e,method:f.transition,onEnd:b})}else J(pd,{pos:-o(Nc,Kd.w,pc,Mc),overPos:d,time:e,onEnd:b});if(db(),fc(),Sc){var j=L(Hd+g(Nc-Oc,-1,1)),k="undefined"==typeof a.coo;(k||j!==Hd)&&bc({time:e,coo:k?Kd.w/2:a.coo,guessIndex:k?Hd:j})}return"thumbs"===Sc&&Ib(e),Oc=Hd,this},fd.requestFullScreen=function(){return Uc&&!fd.fullScreen&&(fd.fullScreen=!0,$c=gc.scrollTop(),_c=gc.scrollLeft(),gc.scrollLeft(1).scrollTop(1),Vc&&U.request(id),setTimeout(function(){gc.scrollLeft(0).scrollTop(0),Z.addClass(fb),e.addClass(Pb).appendTo(Z),ed=c.extend({},Kd),Ac(Kc,!0),fd.resize(),W([Hd,Pc,Qc],"stage")},5),tc("fullscreenenter")),this},fd.cancelFullScreen=function(){return Vc&&U.is()?U.cancel(b):yc(),this},b.addEventListener&&b.addEventListener(U.event,function(){U.is()||Kc||yc()}),hc.on("keydown",function(a){Kc&&27===a.keyCode?(a.preventDefault(),Ac(Kc,!0,!0)):(fd.fullScreen||f.keyboard&&!gd)&&(27===a.keyCode?(a.preventDefault(),fd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&fd.fullScreen?(a.preventDefault(),fd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&fd.fullScreen)&&(a.preventDefault(),fd.show({index:"<",slow:a.altKey,direct:!0})))}),gd||hc.on("keydown","textarea, input, select",function(a){fd.fullScreen||a.stopPropagation()}),fd.resize=function(b){if(Gc){mc(fd.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b);var c=arguments[1]||0,d=arguments[2],e=Kd.width,f=Kd.height,h=Kd.ratio,i=a.innerHeight-(Sc?vd.height():0);return n(e)&&(nd.css({width:e,minWidth:Kd.minWidth,maxWidth:Kd.maxWidth}),e=Kd.w=nd.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=Kd.h=Math.round(g(f,m(Kd.minHeight)/100*i||l(Kd.minHeight),m(Kd.maxHeight)/100*i||l(Kd.maxHeight))),jc(),od.addClass(rb).stop().animate({width:e,height:f},c,function(){od.removeClass(rb)}),Sc&&(vd.stop().animate({width:e},c).css({left:0}),bc({guessIndex:Hd,time:c,coo:Kd.w/2}),"thumbs"===Sc&&cb.ok&&Ib(c)),Zc=d||!0,Fc())),this}},fd.setOptions=function(a){return c.extend(f,a),Ec(),this},fd.destroy=function(){return fd.stopAutoplay(),nd.detach(),e.html(kd.urtext),dd=!1,Gc=fd.data=null,c.Fotorama.size--,this},fd.playVideo=function(){var a=fd.activeFrame,b=a.video,d=Hd;return"object"==typeof b&&a.videoReady&&(Vc&&fd.fullScreen&&fd.cancelFullScreen(),B(function(){return!U.is()||d!==Hd},function(){d===Hd&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[zd]),nd.addClass(jb),Kc=a.$video,Ld.noMove=!0,tc("loadvideo"))})),this},fd.stopVideo=function(){return Ac(Kc,!0,!0),this},nd.hover(function(){Bc(!1)},function(){Bc(!0)}),Ld=N(pd,{onStart:uc,onMove:function(a,b){zc(od,b.edge)},onEnd:function(a){if(zc(od),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,Kd.w,pc,Mc);fd.show({index:b,time:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Cc(a.startEvent,a.touch)},timeLow:1,timeHigh:1,friction:2,select:"."+Nb+", ."+Nb+" *",$wrap:od}),Md=N(wd,{onStart:uc,onMove:function(a,b){zc(vd,b.edge)},onEnd:function(a){function b(){vc(),xc(),bb(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(J(wd,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),bb(a.newPos),zc(vd,F(a.newPos,Dd.minPos,Dd.maxPos))):b();else{var c=a.$target.closest("."+Cb,wd)[0];c&&Dc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:vd}),H(td,function(a){a.preventDefault(),Kc?Ac(Kc,!0,!0):fd.show({index:td.index(this)?">":"<",slow:a.altKey,direct:!0})},{onStart:function(a){uc.call(this,a),Ld.control=!0},tail:Ld}),H(Fd,function(){fd.fullScreen?fd.cancelFullScreen():fd.requestFullScreen(),vc(),xc()},{onStart:function(a){uc.call(this,a),Ld.control=!0},tail:Ld}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){fd[b]=function(){return Gc=Gc||[],"load"!==b?Array.prototype[b].apply(Gc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Gc=arguments[0]),Ec(),fd}}),gc.on("resize",fd.resize),Ec()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):B(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:qc,thumbHeight:qc,allowFullScreen:!1,fit:"contain",transition:"slide",captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1},c.extend({},a,e)))})})},c.Fotorama.cache={};var wc=0;c.Fotorama.size=0,c(function(){c("."+eb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return S.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\npadding-left:0;\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame:last-child{\npadding-right:0}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb{\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nwidth:"+(null==(b=a.w-a.m*(a.q?0:2))?"":b)+"px;\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px;\nmargin-left:"+(null==(b=-a.w/2)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(S.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>'}}(window,document,jQuery);
