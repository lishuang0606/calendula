/*! Calendula | © 2013—2015 Denis Seleznev | https://github.com/hcodes/calendula/ */
var Calendula=function(t,e,n,i,r){"use strict";function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function s(t){return(10>t?"0":"")+t}function a(t,e,n){return[t,s(e+1),s(n)].join("-")}function l(t){var e,i,r=null;if(t)if(x(t)){if("today"===t)return new n;e=/^\s*(\d{4})[-/.](\d\d)(?:[-/.](\d\d))?\s*$/.exec(t),e?i=[e[3],e[2],e[1]]:(e=/^\s*(\d{1,2})[-/.](\d{1,2})(?:[-/.](\d{4}|\d\d))?\s*$/.exec(t),e&&(i=[e[1],e[2],e[3]])),i&&(r=new n(v(i[2]),v(i[1]-1),v(i[0])))}else w(t)?t instanceof n?r=t:t.year&&t.day&&(r=new n(t.year,t.month-1,t.day,12,0,0,0)):b(t)&&(r=new n(t));return r}function c(t){var e=l(t);return e?[e.getFullYear(),s(e.getMonth()+1),s(e.getDate())].join("-"):null}function h(t){var e=l(t);return e?{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}:{}}function u(t,e,n){return null===n||n===!1?t="":(n===!0||n===r)&&(n=""),S+"__"+t+(e?"_"+e+(""===n?"":"_"+n):"")}function f(t,e){return null===e||e===!1?t="":(e===!0||e===r)&&(e=""),S+"_"+t+(""===e?"":"_"+e)}function d(t,e){var n=p(t),i=n?u(n,e):f(e),r=(t.className||"").split(" ");r.forEach(function(e){(e===i||-1!==e.search(i+"_"))&&W(t,e)})}function _(t,e,n){var i=p(t);d(t,e),C(t,i?u(i,e,n):f(e,n))}function m(t,e,n){var i=p(t);return j(t,i?u(i,e,n):f(e,n))}function y(t,e){return j(t,u(e))}function p(t){var e=t.className.match(/__([^ _$]+)/);return e?e[1]:""}function v(t){return parseInt(t,10)}function g(t){return"[object Object]"===Object.prototype.toString.call(t)}function x(t){return"string"==typeof t}function b(t){return"number"==typeof t}function w(t){return"object"==typeof t}function E(t){return"undefined"==typeof t}function D(n){var i={top:0,left:0};return E(n.getBoundingClientRect)||(i=n.getBoundingClientRect()),{top:i.top+(t.pageYOffset||e.scrollTop||0)-(e.clientTop||0),left:i.left+(t.pageXOffset||e.scrollLeft||0)-(e.clientLeft||0)}}function A(t,e,n){O(t,e),H(t,n)}function O(t,e){t.style.left=b(e)?e+"px":e}function H(t,e){t.style.top=b(e)?e+"px":e}var S="calendula",M=0,k=11,Y=function(t){t=o({},t||{});var e=this._prepareYears(t.years),n=o(t,{autocloseable:E(t.autocloseable)?!0:t.autocloseable,closeAfterSelection:E(t.closeAfterSelection)?!0:t.closeAfterSelection,locale:t.locale||Y._defaultLocale,min:h(t.min),max:h(t.max),showOn:t.showOn||"click",theme:t.theme||"default",_startYear:e.start,_endYear:e.end});this._data=n,this._initExts(),this.val(n.value),this._addSwitcherEvents(n.showOn)};Y.version="0.9.10",o(Y.prototype,{isOpened:function(){return this._isOpened},open:function(){var t=this;return this._init(),this.isOpened()||(this.timeout.clearAll(["open","close"]).set(function(){_(t._container,"opened"),t._update(),t._monthSelector(t._currentDate.month,!1),t._yearSelector(t._currentDate.year,!1),t._openedEvents()},0,"open"),this._isOpened=!0,this.event.trigger("open")),this},close:function(){var t=this;return this._init(),this.isOpened()&&t.timeout.clearAll(["open","close"]).set(function(){t._isOpened=!1,t.timeout.clearAll("open"),t._update(),t._delOpenedEvents(),d(t._container,"opened"),t.tooltip.hide(),t.event.trigger("close")},0,"close"),this},toggle:function(){return this.isOpened()?this.close():this.open()},val:function(t){return arguments.length?(t?(this._val=h(t),this._currentDate=o({},this._val)):(this._val={},this._currentDate=this._current()),this._container&&this._updateSelection(),void this._updateSwitcher()):this._val},setting:function(t,e){var n=this._data,i=this._container,r={min:!0,max:!0,locale:!0};return 1===arguments.length?n[t]:(n[t]="min"===t||"max"===t||"value"===t?h(e):e,"showOn"===t&&this._addSwitcherEvents(e),i&&("theme"===t&&_(i,"theme",e),"daysAfterMonths"===t&&(e?_(i,"days-after-months"):d(i,"days-after-months")),r[t]&&this._rebuild()),this)},position:function(){var t,e,n,i=this.setting("position")||"left bottom",r=this.setting("switcher"),o=D(r),s=this._container,a=s.offsetWidth,l=s.offsetHeight,c=r.offsetWidth,h=r.offsetHeight;if(x(i)){switch(t=i.trim().split(/ +/),e=o.left,n=o.top,t[0]){case"center":e+=-(a-c)/2;break;case"right":e+=c-a}switch(t[1]){case"top":n+=-l;break;case"center":n+=-(l-h)/2;break;case"bottom":n+=h}}else e=o.left,n=o.top;A(this._container,e,n)},destroy:function(){this._isInited&&(this.close(),this._removeExts(),e.body.removeChild(this._container),["_container","_data","_isInited","_isOpened"].forEach(function(t){delete this[t]},this))},_init:function(){if(!this._isInited){this._isInited=!0;var t=this.setting("id"),n=e.createElement("div");this._container=n,t&&(n.id=t),C(n,S),_(n,"theme",this._data.theme),this.setting("daysAfterMonths")&&_(n,"days-after-months"),this._rebuild(),e.body.appendChild(n)}},_current:function(){var t=new n;return{day:t.getDate(),month:t.getMonth(),year:t.getFullYear()}},_update:function(){this._init(),this.setting("switcher")&&this.position()},_findDayByDate:function(t){if(t.year!==this._currentDate.year)return null;var e=this._elemAll("days-month")[t.month];if(e){var n=this._elemAllContext(e,"day")[t.day-1];return n||null}return null},_resize:function(){this._update()},_rebuild:function(){this._container.innerHTML=this.template.get("main")},_rebuildDays:function(){this._elem("days-container").innerHTML=this.template.get("days"),this._monthSelector(this._currentDate.month,!1)},_intoContainer:function(t){for(var e=t;e;){if(e===this._container)return!0;e=e.parentNode}return!1},_openedEvents:function(){var n=this;this.domEvent.on(e,"click",function(t){!t.button&&n.setting("autocloseable")&&(t.target===n.setting("switcher")||n._intoContainer(t.target)||n.close())},"open"),this.domEvent.on(t,"resize",function(){n._resize()},"open").on(e,"keypress",function(t){27===t.keyCode&&n.close()},"open").on(this._container,"click",function(t){t.button||n.tooltip.hide()},"open");var i=this._elem("days"),r=this._elem("months"),o=this._elem("years"),s=function(t){var e=0;return t.deltaY>0?e=1:t.deltaY<0&&(e=-1),e};this._onwheelmonths=function(t){var e=s(t);e&&(n._monthSelector(n._currentDate.month+e,!0),t.preventDefault())},this._onwheelyears=function(t){var e=s(t);e&&(n._yearSelector(n._currentDate.year+e,!0),t.preventDefault())},this.domEvent.onWheel(i,this._onwheelmonths,"open").onWheel(r,this._onwheelmonths,"open").onWheel(o,this._onwheelyears,"open"),this.domEvent.on(r,"click",function(t){t.button||y(t.target,"month")&&n._monthSelector(+N(t.target,"month"),!0)},"open"),this.domEvent.on(o,"click",function(t){if(!t.button){var e=N(t.target,"year");e&&n._yearSelector(+e,!0)}},"open"),this.domEvent.on(i,"mouseover",function(t){var e=t.target,i=+N(e,"day"),r=+N(e,"month"),o=+n._currentDate.year;y(e,"day")&&m(e,"has-title")&&n.tooltip.show(e,n.title.get(a(o,r,i)))},"open"),this.domEvent.on(i,"mouseout",function(t){y(t.target,"day")&&n.tooltip.hide()},"open"),this.domEvent.on(i,"click",function(t){if(!t.button){var e=n._currentDate,r=t.target,o=N(r,"day"),s=N(r,"month");if(o){if(m(r,"minmax"))return;if(!m(r,"selected")){e.day=+o,e.month=+s;var a=i.querySelector("."+u("day","selected"));a&&d(a,"selected"),_(r,"selected"),n.event.trigger("select",{day:e.day,month:e.month,year:e.year}),n.setting("closeAfterSelection")&&n.close()}}}},"open")},_monthSelector:function(t,e){M>t?t=M:t>k&&(t=k),this._currentDate.month=t;var n,r=this._elem("months"),o=this._elem("month").offsetHeight,s=this._elemAll("days-month"),a=s[t],l=this._elem("month-selector"),c=this._elem("days-container"),h=this._elem("days");e||(_(h,"noanim"),_(r,"noanim"));var u=i.floor(this._currentDate.month*o-o/2);0>=u&&(u=1),u+l.offsetHeight>=r.offsetHeight&&(u=r.offsetHeight-l.offsetHeight-1),I(l,u),n=-i.floor(a.offsetTop-h.offsetHeight/2+a.offsetHeight/2),n>0&&(n=0);var f=h.offsetHeight-c.offsetHeight;f>n&&(n=f),I(c,n),this._colorizeMonths(t),e||this.timeout.set(function(){d(h,"noanim"),d(r,"noanim")},0,"anim")},_yearSelector:function(t,e){var n=this._data,r=n._startYear,o=n._endYear,s=this._currentDate.year;r>t?t=r:t>o&&(t=o),this._currentDate.year=t;var a=this._elem("years"),l=this._elem("years-container"),c=this._elem("year").offsetHeight,h=this._elem("year-selector");e||_(a,"noanim");var u=i.floor((this._currentDate.year-r)*c),f=-i.floor((this._currentDate.year-r)*c-a.offsetHeight/2);f>0&&(f=0),f<a.offsetHeight-l.offsetHeight&&(f=a.offsetHeight-l.offsetHeight);var m=0;a.offsetHeight>=l.offsetHeight&&((o-r+1)%2&&(m=c),f=i.floor((a.offsetHeight-l.offsetHeight-m)/2)),t!==s&&this._rebuildDays(t),I(h,u),I(l,f),this._colorizeYears(t),e||this.timeout.set(function(){d(a,"noanim")},0,"anim")},_colorizeMonths:function(t){for(var e=this._elemAll("month"),n=5,i=0;n>i;i++)for(var r=this._elemAll("month","color",i),o=0,s=r.length;s>o;o++)d(r[o],"color",i);_(e[t],"color","0"),t-1>=M&&_(e[t-1],"color","0"),k>=t+1&&_(e[t+1],"color","0");var a=1;for(i=t-2;i>=M&&n>a;i--,a++)_(e[i],"color",a);for(a=1,i=t+2;k>=i&&n>a;i++,a++)_(e[i],"color",a)},_colorizeYears:function(t){for(var e=this._elemAll("year"),n=this._data._startYear,i=5,r=0;i>r;r++)for(var o=this._elemAll("year","color",r),s=0,a=o.length;a>s;s++)d(o[s],"color",r);_(e[t-n],"color","0");var l=1;for(r=t-1;r>=this._data._startYear&&i>l;r--,l++)_(e[r-n],"color",l);for(l=1,r=t+1;r<=this._data._endYear&&i>l;r++,l++)_(e[r-n],"color",l)},_delOpenedEvents:function(){this.domEvent.offAll("open")},_prepareYears:function(t){var e,n,r,o=this._current();return x(t)&&(e=t.trim().split(/[:,; ]/),n=v(e[0]),r=v(e[1]),isNaN(n)||isNaN(r)||(i.abs(n)<1e3&&(n=o.year+n),i.abs(r)<1e3&&(r=o.year+r))),{start:n||o.year-11,end:r||o.year+1}},_updateSelection:function(){var t=this._elem("day","selected");if(t&&d(t,"selected"),this._currentDate.year===this._val.year){var e=this._elemAll("days-month");if(e&&e[this._val.month]){var n=this._elemAllContext(e[this._val.month],"day"),i=this._val.day-1;n&&n[i]&&_(n[i],"selected")}}},_addSwitcherEvents:function(t){var e=this.setting("switcher"),n=this,i=$(t)?t:[t||"click"],r=["input","textarea"],o=["focus","mouseover"];if(this.domEvent.offAll("switcher"),-1===i.indexOf("none")&&e){var s=e.tagName.toLowerCase();i.forEach(function(t){n.domEvent.on(e,t,function(){-1!==r.indexOf(s)||-1!==o.indexOf(t)?n.open():n.toggle()},"switcher")})}},_switcherText:function(){var t=this._currentDate,e=this.text("months"),n=this.text("caseMonths");return t.day+" "+(n||e)[t.month]+" "+t.year},_updateSwitcher:function(){var t,e=this.setting("switcher"),n=this._switcherText();e&&(t=e.tagName.toLowerCase(),"input"===t||"textarea"===t?e.value=n:e.innerHTML=n)},_elem:function(t,e,n){return this._container.querySelector("."+u(t,e,n))},_elemAll:function(t,e,n){return this._container.querySelectorAll("."+u(t,e,n))},_elemAllContext:function(t,e,n,i){return t.querySelectorAll("."+u(e,n,i))}}),o(Y.prototype,{_initExts:function(){Y._exts.forEach(function(t){var e=t[0],n=t[1]||function(){},i=t[2];o(n.prototype,i),this[e]=new n;var r=this[e];r.parent=this,r.init&&r.init(this._data,this._container)},this)},_removeExts:function(){Y._exts.forEach(function(t){var e=t[0];this[e].destroy(),delete this[e]},this)}}),Y._exts=[],Y.addExt=function(t,e,n){Y._exts.push([t,e,n])};var L=e.createElement("div"),N=L.dataset?function(t,e){return t.dataset[e]}:function(t,e){return t.getAttribute("data-"+e)},T=!!L.classList,C=T?function(t,e){t.classList.add(e)}:function(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");n.test(e.className)||(t.className=(t.className+" "+e).replace(/\s+/g," ").replace(/(^ | $)/g,""))},W=T?function(t,e){t.classList.remove(e)}:function(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(n,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")},j=T?function(t,e){return t.classList.contains(e)}:function(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");return-1!==t.className.search(n)};o(Y,{addHolidays:function(t,e){this._holidays=this._holidays||{},this._holidays[t]=e}}),Y.prototype.getHoliday=function(t,e,n){var i=this._data.locale,o=Y._holidays;return o&&o[i]&&o[i][n]?o[i][n][t+"-"+(e+1)]:r};var z=function(){var t=function(n){if(null===n||n===r)return"";var i=[];if(g(n))return e(n);if($(n)){for(var o=0,s=n.length;s>o;o++)i.push(t(n[o]));return i.join("")}return""+n},e=function(e){var i=e.t||"div",r="<"+i+n(e)+">";return e.c&&(r+=t(e.c)),r+="</"+i+">"},n=function(t){var e,n,r=Object.keys(t),o=["c","t","e","m"],s=[],a=[],l="";if(t.e&&a.push(u(t.e)),t.m)if(t.e)for(e in t.m)t.m.hasOwnProperty(e)&&a.push(u(t.e,e,t.m[e]));else for(e in t.m)t.m.hasOwnProperty(e)&&a.push(f(e,t.m[e]));for(a.length&&s.push(i("class",a)),e=0,n=r.length;n>e;e++){var c=r[e];-1===o.indexOf(c)&&s.push(i(c,t[c]))}return l=s.join(" "),l?" "+l:""},i=function(t,e){return null!==e&&e!==r?t+'="'+($(e)?e.join(" "):e)+'"':""};return t}();o(Y,{_texts:{},_locales:[],addLocale:function(t,e){this._locales.push(t),this._texts[t]=e,e.def&&(this._defaultLocale=t)}}),Y.prototype.text=function(t){return Y._texts[this._data.locale][t]};var $=Array.isArray,I=function(){var t=e.createElement("div"),n=!1;return["Moz","Webkit","O","ms",""].forEach(function(e){var i=e+(e?"T":"t")+"ransform";i in t.style&&(n=i)}),n===!1?function(t,e){t.style.top=b(e)?e+"px":e}:function(t,e){t.style[n]="translateY("+(b(e)?e+"px":e)+")"}}(),q="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==r?"mousewheel":"DOMMouseScroll";Y.addExt("domEvent",function(){this._buf=[]},{onWheel:function(e,n,i){return this.on(e,"DOMMouseScroll"===q?"MozMousePixelScroll":q,"wheel"===q?n:function(e){e||(e=t.event);var i={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"===e.type?0:1,deltaX:0,delatZ:0,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1}},r=-1/40;return"mousewheel"===q?(i.deltaY=r*e.wheelDelta,e.wheelDeltaX&&(i.deltaX=r*e.wheelDeltaX)):i.deltaY=e.detail,n(i)},i)},on:function(t,e,n,i){return t&&e&&n&&(t.addEventListener(e,n,!1),this._buf.push({elem:t,type:e,callback:n,ns:i})),this},off:function(t,e,n,i){for(var r=this._buf,o=0;o<r.length;o++){var s=r[o];s&&s.elem===t&&s.callback===n&&s.type===e&&s.ns===i&&(t.removeEventListener(e,n,!1),r.splice(o,1),o--)}return this},offAll:function(t){for(var e=this._buf,n=0;n<e.length;n++){var i=e[n];t?t===i.ns&&(i.elem.removeEventListener(i.type,i.callback,!1),e.splice(n,1),n--):i.elem.removeEventListener(i.type,i.callback,!1)}return t||(this._buf=[]),this},destroy:function(){this.offAll(),delete this._buf}}),Y.addExt("event",function(){this._buf=[]},{on:function(t,e){return t&&e&&this._buf.push({type:t,callback:e}),this},off:function(t,e){for(var n=this._buf,i=0;i<n.length;i++)e===n[i].callback&&t===n[i].type&&(n.splice(i,1),i--);return this},trigger:function(t){for(var e=this._buf,n=0;n<e.length;n++)t===e[n].type&&e[n].callback.apply(this,[{type:t}].concat(Array.prototype.slice.call(arguments,1)));return this},destroy:function(){delete this._buf}});var B=6,P=0;return Y.addExt("template",null,{get:function(t){return z(this[t]())},days:function(){for(var t=[],e=M;k>=e;e++)t.push(this.month(e,this.parent._currentDate.year));return t},dayNames:function(){for(var t=this.parent.text("firstWeekday")||0,e={first:t,last:t?t-1:B},n=t,i=0;7>i;i++)e[n]=i,n++,n>B&&(n=P);return e},month:function(t,e){var i=new n(e,t,1,12,0,0,0),r=i.getTime(),o=new n,l=function(t,e,n){var i=_._val;return t===i.day&&e===i.month&&n===i.year},c=function(t){return t.year?new n(t.year,t.month,t.day,12,0,0,0).getTime():null},h=function(){var n=function(t){return v(""+t.year+s(t.month))},i=n(x),r=n(b),o={},a=v(""+e+s(t));return(x&&i>a||b&&a>r)&&(o.minmax=!0),{e:"days-title-month",m:o,c:g}};o.setHours(12,0,0,0);for(var u,f,d,_=this.parent,m=i.getDay(),y=this.dayNames(),p=y[m],g=_.text("months")[t],x=_.setting("min"),b=_.setting("max"),w=c(x),E=c(b),D=o.getTime(),A={t:"tr",c:[m!==y.first?{t:"td",colspan:p,e:"empty",c:3>p?"":h()}:""]},O=A,H={e:"days-month",c:[3>p?h():"",{t:"table",e:"days-table",c:[O]}]},S=1;i.getMonth()===t;i.setDate(++S)){u="",r=+i,m=i.getDay(),f=_.getHoliday(S,t,e),d={},m===P||m===B?d.holiday=!0:d.workday=!0,0===f?d.nonholiday=!0:1===f&&(d.highday=!0),l(S,t,e)&&(d.selected=!0),D===r&&(d.now=!0,u=_.text("today")),(w&&w>r||E&&r>E)&&(d.minmax=!0);var M=_.title.get(a(e,t,S));M&&(d["has-title"]=!0,d["title-color"]=M.color||"default"),m===y.first&&(O={t:"tr",c:[]},H.c[1].c.push(O)),O.c.push({t:"td",e:"day",m:d,title:u,"data-month":t,"data-day":S,c:S})}return H},years:function(){for(var t=this.parent._data,e=t._startYear,n=t._endYear,i=[{e:"year-selector",c:{e:"year-selector-i"}}],r=e;n>=r;r++)i.push({e:"year","data-year":r,c:r});return i},months:function(){var t=[{e:"month-selector",c:{e:"month-selector-i"}}];return this.parent.text("months").forEach(function(e,n){t.push({e:"month","data-month":n,c:e})}),t},main:function(){var t=this.parent,e=t.text("firstWeekday")||P,n=t.text("dayNames")||[],i=[];return t.text("shortDayNames").forEach(function(t,r,o){i.push({e:"short-daynames-cell",m:{n:e},title:n[e]||o[e],c:o[e]}),e++,e>B&&(e=P)},this),[{e:"short-daynames",c:i},{e:"container",c:[{e:"days",c:{e:"days-container",c:this.days()}},{e:"months",c:this.months()},{e:"years",c:{e:"years-container",c:this.years()}}]}]},destroy:function(){}}),Y.addExt("timeout",function(){this._buf=[]},{set:function(t,e,n){var i=this,r=setTimeout(function(){t(),i.clear(r)},e);return this._buf.push({id:r,ns:n}),r},clear:function(t){var e=this._buf,n=-1;return e&&(e.some(function(e,i){return e.id===t?(n=i,!0):!1}),n>=0&&(clearTimeout(e[n].id),e.splice(n,1))),this},clearAll:function(t){var e=this._buf,n=[],i=Array.isArray(t)?t:[t];return e.forEach(function(e){t?-1!==i.indexOf(e.ns)?clearTimeout(e.id):n.push(e):clearTimeout(e.id)},this),this._buf=t?n:[],this},destroy:function(){this.clearAll(),delete this._buf}}),Y.addExt("title",function(){this._title={}},{init:function(t){this.set(t.title)},get:function(t){var e=c(t);return e?this._title[e]:r},set:function(t){$(t)?t.forEach(function(){this._set(t)},this):g(t)&&this._set(t)},_set:function(t){var e,n=c(t.date),i=this.parent;n&&(this._title[n]={text:t.text,color:t.color},i._isInited&&(e=i._findDayByDate(h(t.date)),e&&(_(e,"has-title"),_(e,"title-color",t.color))))},remove:function(t){$(t)?t.forEach(function(t){this._remove(t)},this):this._remove(t)},_remove:function(t){var e=this.parent,n=c(t);if(n&&(delete this._title[n],e._isInited)){var i=e._findDayByDate(h(t));i&&(d(i,"has-title"),d(i,"title-color"))}},removeAll:function(){if(this._title={},this.parent._isInited){var t=this.parent._elemAll("day","has-title");if(t)for(var e=0,n=t.length;n>e;e++)d(t[e],"has-title"),d(t[e],"title-color")}},destroy:function(){delete this._title}}),Y.addExt("tooltip",null,{create:function(){if(!this._container){var t=e.createElement("div");C(t,u("tooltip")),t.innerHTML=z([{e:"tooltip-text"},{e:"tooltip-tail"}]),e.body.appendChild(t),this._container=t}},show:function(t,e){var n=e||{},i=5;this.create(),_(this._container,"theme",this.parent.setting("theme")),_(this._container,"visible"),this._container.querySelector(".calendula__tooltip-text").innerHTML=z({c:n.text,e:"tooltip-row"}),_(this._container,"color",n.color||"default"),this._isOpened=!0;var r=D(t),o=r.left-(this._container.offsetWidth-t.offsetWidth)/2,s=r.top-this._container.offsetHeight-i;A(this._container,o,s)},hide:function(){this._isOpened&&(d(this._container,"visible"),this._isOpened=!1)},destroy:function(){this._container&&(this.hide(),e.body.removeChild(this._container),delete this._container)}}),Y}(this,this.document,Date,Math);