!function(){var v=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},m=function(){var s={},o=document.createElement("div").style,e=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in o)return t[e].substr(0,t[e].length-1);return!1}();function t(t){return!1!==e&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}s.getTime=Date.now||function(){return(new Date).getTime()},s.extend=function(t,e){for(var i in e)t[i]=e[i]},s.addEvent=function(t,e,i,s){t.addEventListener(e,i,!!s)},s.removeEvent=function(t,e,i,s){t.removeEventListener(e,i,!!s)},s.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},s.momentum=function(t,e,i,s,o,n){var l,r,a=t-e,h=Math.abs(a)/i;return r=h/(n=void 0===n?6e-4:n),(l=t+h*h/(2*n)*(a<0?-1:1))<s?(l=o?s-o/2.5*(h/8):s,r=(a=Math.abs(l-t))/h):0<l&&(l=o?o/2.5*(h/8):0,r=(a=Math.abs(t)+l)/h),{destination:Math.round(l),duration:r}};var i=t("transform");return s.extend(s,{hasTransform:!1!==i,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in window,hasPointer:!(!window.PointerEvent&&!window.MSPointerEvent),hasTransition:t("transition")in o}),s.isBadAndroid=function(){var t=window.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var e=t.match(/Safari\/(\d+.\d)/);return!(e&&"object"==typeof e&&2<=e.length)||parseFloat(e[1])<535.19}return!1}(),s.extend(s.style={},{transform:i,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),s.hasClass=function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},s.addClass=function(t,e){if(!s.hasClass(t,e)){var i=t.className.split(" ");i.push(e),t.className=i.join(" ")}},s.removeClass=function(t,e){if(s.hasClass(t,e)){var i=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(i," ")}},s.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},s.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},s.extend(s.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),s.extend(s.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*Math.pow(2,-10*t)*Math.sin((t-.055)*(2*Math.PI)/.22)+1}}}),s.tap=function(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},s.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||((e=document.createEvent(window.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),e.view=t.view||window,e.detail=1,e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0,e.ctrlKey=!!t.ctrlKey,e.altKey=!!t.altKey,e.shiftKey=!!t.shiftKey,e.metaKey=!!t.metaKey,e.button=0,e.relatedTarget=null,e._constructed=!0,i.dispatchEvent(e))},s}();function n(t,e){for(var i in this.wrapper="string"==typeof t?document.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!0,disableTouch:!m.hasTouch,disableMouse:m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===window.onmousedown},e)this.options[i]=e[i];this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}n.prototype={version:"1.0.0",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=m.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||m.eventType[t.type]===this.initiated)){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,i=t.touches?t.touches[0]:t;this.initiated=m.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,e=this.getComputedPosition(),this._translate(Math.round(e.x),Math.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=i.pageX,this.pointY=i.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault;var e,i,s,o,n=t.touches?t.touches[0]:t,l=n.pageX-this.pointX,r=n.pageY-this.pointY,a=m.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=l,this.distY+=r,s=Math.abs(this.distX),o=Math.abs(this.distY),!(300<a-this.endTime&&s<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(s>o+this.options.directionLockThreshold?this.directionLocked="h":o>=s+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,r=this.hasVerticalScroll?r:0,e=this.x+l,i=this.y+r,(0<e||e<this.maxScrollX)&&(e=this.options.bounce?this.x+l/3:0<e?0:this.maxScrollX),(0<i||i<this.maxScrollY)&&(i=this.options.bounce?this.y+r/3:0<i?0:this.maxScrollY),this.directionX=0<l?-1:l<0?1:0,this.directionY=0<r?-1:r<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,i),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),1<this.options.probeType&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var e,i,s=m.getTime()-this.startTime,o=Math.round(this.x),n=Math.round(this.y),l=Math.abs(o-this.startX),r=Math.abs(n-this.startY),a=0,h="";if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&m.tap(t,this.options.tap),this.options.click&&m.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&s<200&&l<100&&r<100)this._execEvent("flick");else{if(this.options.momentum&&s<300&&(e=this.hasHorizontalScroll?m.momentum(this.x,this.startX,s,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},i=this.hasVerticalScroll?m.momentum(this.y,this.startY,s,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=e.destination,n=i.destination,a=Math.max(e.duration,i.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(o-c.x),1e3),Math.min(Math.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,h=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(h=m.ease.quadratic),void this.scrollTo(o,n,a,h);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||0<this.y?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(e!=this.x||i!=this.y)&&(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);-1<i&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollTo:function(t,e,i,s){s=s||m.ease.circular,this.isInTransition=this.options.useTransition&&0<i;var o=this.options.useTransition&&s.style;!i||o?(o&&(this._transitionTimingFunction(s.style),this._transitionTime(i)),this._translate(t,e)):this._animate(t,e,i,s.fn)},scrollToElement:function(t,e,i,s,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=m.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===i&&(i=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=i||0,n.top-=s||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,e=null==e||"auto"===e?Math.max(Math.abs(this.x-n.left),Math.abs(this.y-n.top)):e,this.scrollTo(n.left,n.top,e,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var e=m.style.transitionDuration;if(e&&(this.scrollerStyle[e]=t+"ms",!t&&m.isBadAndroid)){this.scrollerStyle[e]="0.0001ms";var i=this;v(function(){"0.0001ms"===i.scrollerStyle[e]&&(i.scrollerStyle[e]="0s")})}}},_transitionTimingFunction:function(t){this.scrollerStyle[m.style.transitionTimingFunction]=t},_translate:function(t,e){this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e},_initEvents:function(t){var e=t?m.removeEvent:m.addEvent,i=this.options.bindToWrapper?this.wrapper:window;e(window,"orientationchange",this),e(window,"resize",this),this.options.click&&e(this.wrapper,"click",this,!0),this.options.disableMouse||(e(this.wrapper,"mousedown",this),e(i,"mousemove",this),e(i,"mousecancel",this),e(i,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(e(this.wrapper,m.prefixPointerEvent("pointerdown"),this),e(i,m.prefixPointerEvent("pointermove"),this),e(i,m.prefixPointerEvent("pointercancel"),this),e(i,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(e(this.wrapper,"touchstart",this),e(i,"touchmove",this),e(i,"touchcancel",this),e(i,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,e,i=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((i=i[m.style.transform].split(")")[0].split(", "))[12]||i[4]),e=+(i[13]||i[5])):(t=+i.left.replace(/[^-\d.]/g,""),e=+i.top.replace(/[^-\d.]/g,"")),{x:t,y:e}},_animate:function(n,l,r,a){var h=this,c=this.x,p=this.y,d=m.getTime(),u=d+r;this.isAnimating=!0,function t(){var e,i,s,o=m.getTime();if(u<=o)return h.isAnimating=!1,h._translate(n,l),void(h.resetPosition(h.options.bounceTime)||h._execEvent("scrollEnd"));s=a(o=(o-d)/r),e=(n-c)*s+c,i=(l-p)*s+p,h._translate(e,i),h.isAnimating&&v(t),3==h.options.probeType&&h._execEvent("scroll")}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},n.utils=m;var h=function(t){return"[object Array]"===Object.prototype.toString.call(t)},c=function(t){return"function"==typeof t},f=function(t,e){var i={};for(var s in t.dataset)i[s]=t.dataset[s];return i.dom=t,i.atindex=e,i},y=function(t){var e="";for(var i in t)e+="data-"+i+'="'+t[i]+'"';return e};function l(t,e){if(!(this instanceof l))return new l(t,e);this.html=t,this.opts=e;var i=document.createElement("div");i.className="olay";var s=document.createElement("div");s.className="layer",this.el=i,this.layer_el=s,this.init()}function t(t,e,i){if(!h(e)||0===e.length)throw new TypeError("the data must be a non-empty array!");if(-1==[1,2,3,4,5,6].indexOf(t))throw new RangeError("the level parameter must be one of 1,2,3,4,5,6!");this.data=e,this.level=t||1,this.options=i,this.typeBox="one-level-box",1===this.level?this.typeBox="one-level-box":2===this.level?this.typeBox="two-level-box":3===this.level?this.typeBox="three-level-box":4===this.level?this.typeBox="four-level-box":5===this.level?this.typeBox="five-level-box":6===this.level&&(this.typeBox="six-level-box"),this.title=i.title||"",this.options.itemHeight=i.itemHeight||35,this.options.itemShowCount=-1!==[3,5,7,9].indexOf(i.itemShowCount)?i.itemShowCount:7,this.options.coverArea1Top=Math.floor(this.options.itemShowCount/2),this.options.coverArea2Top=Math.ceil(this.options.itemShowCount/2),this.options.headerHeight=i.headerHeight||44,this.options.relation=h(this.options.relation)?this.options.relation:[],this.options.oneTwoRelation=this.options.relation[0],this.options.twoThreeRelation=this.options.relation[1],this.options.threeFourRelation=this.options.relation[2],this.options.fourFiveRelation=this.options.relation[3],this.options.fiveSixRelation=this.options.relation[4],"px"!==this.options.cssUnit&&"rem"!==this.options.cssUnit&&(this.options.cssUnit="px");var s=this;this.selectOneObj={id:s.options.oneLevelId},this.selectTwoObj={id:s.options.twoLevelId},this.selectThreeObj={id:s.options.threeLevelId},this.selectFourObj={id:s.options.fourLevelId},this.selectFiveObj={id:s.options.fiveLevelId},this.selectSixObj={id:s.options.sixLevelId},this.setBase(),this.init()}l.prototype={init:function(){this.layer_el.innerHTML=this.html,this.opts.container&&document.querySelector(this.opts.container)?document.querySelector(this.opts.container).appendChild(this.el):document.body.appendChild(this.el),this.el.appendChild(this.layer_el),this.el.style.height=Math.max(document.documentElement.getBoundingClientRect().height,window.innerHeight),this.opts.className&&(this.el.className+=" "+this.opts.className),this.bindEvent()},bindEvent:function(){var t=this.el.querySelectorAll(".sure"),e=this.el.querySelectorAll(".close"),i=this;this.el.addEventListener("click",function(t){i.close(),i.opts.maskCallback&&i.opts.maskCallback()}),this.layer_el.addEventListener("click",function(t){t.stopPropagation()}),Array.prototype.slice.call(t).forEach(function(t,e){t.addEventListener("click",function(){i.close()})}),Array.prototype.slice.call(e).forEach(function(t,e){t.addEventListener("click",function(){i.close(),i.opts.fallback&&i.opts.fallback()})})},close:function(){var t=this;t.el&&(t.opts.showAnimate?(t.el.className+=" fadeOutDown",setTimeout(function(){t.removeDom()},500)):t.removeDom())},removeDom:function(){this.el.parentNode.removeChild(this.el),this.el=null,document.documentElement.classList.contains("ios-select-body-class")&&document.documentElement.classList.remove("ios-select-body-class")}},t.prototype={init:function(){this.initLayer(),this.setLevelData(1,this.options.oneLevelId,this.options.twoLevelId,this.options.threeLevelId,this.options.fourLevelId,this.options.fiveLevelId,this.options.sixLevelId)},initLayer:function(){var e=this,t=this.options.sureText||"确定",i=this.options.closeText||"取消",s=this.options.headerHeight+this.options.cssUnit,o=['<header style="height: '+s+"; line-height: "+s+'" class="iosselect-header">','<a style="height: '+s+"; line-height: "+s+'" href="javascript:void(0)" class="close">'+i+"</a>",'<a style="height: '+s+"; line-height: "+s+'" href="javascript:void(0)" class="sure">'+t+"</a>",'<h2 id="iosSelectTitle"></h2>',"</header>",'<section class="iosselect-box">','<div class="one-level-contain" id="oneLevelContain">','<ul class="select-one-level">',"</ul>","</div>",'<div class="two-level-contain" id="twoLevelContain">','<ul class="select-two-level">',"</ul>","</div>",'<div class="three-level-contain" id="threeLevelContain">','<ul class="select-three-level">',"</ul>","</div>",'<div class="four-level-contain" id="fourLevelContain">','<ul class="select-four-level">',"</ul>","</div>",'<div class="five-level-contain" id="fiveLevelContain">','<ul class="select-five-level">',"</ul>","</div>",'<div class="six-level-contain" id="sixLevelContain">','<ul class="select-six-level">',"</ul>","</div>","</section>",'<hr class="cover-area1"/>','<hr class="cover-area2"/>','<div class="ios-select-loading-box" id="iosSelectLoadingBox">','<div class="ios-select-loading"></div>',"</div>"].join("\r\n");this.iosSelectLayer=new l(o,{className:"ios-select-widget-box "+this.typeBox+(this.options.addClassName?" "+this.options.addClassName:"")+(this.options.showAnimate?" fadeInUp":""),container:this.options.container||"",showAnimate:this.options.showAnimate,fallback:this.options.fallback,maskCallback:this.options.maskCallback}),this.iosSelectTitleDom=this.iosSelectLayer.el.querySelector("#iosSelectTitle"),this.iosSelectLoadingBoxDom=this.iosSelectLayer.el.querySelector("#iosSelectLoadingBox"),this.iosSelectTitleDom.innerHTML=this.title,this.options.headerHeight&&this.options.itemHeight&&(this.coverArea1Dom=this.iosSelectLayer.el.querySelector(".cover-area1"),this.coverArea1Dom.style.top=this.options.headerHeight+this.options.itemHeight*this.options.coverArea1Top+this.options.cssUnit,this.coverArea2Dom=this.iosSelectLayer.el.querySelector(".cover-area2"),this.coverArea2Dom.style.top=this.options.headerHeight+this.options.itemHeight*this.options.coverArea2Top+this.options.cssUnit),this.oneLevelContainDom=this.iosSelectLayer.el.querySelector("#oneLevelContain"),this.twoLevelContainDom=this.iosSelectLayer.el.querySelector("#twoLevelContain"),this.threeLevelContainDom=this.iosSelectLayer.el.querySelector("#threeLevelContain"),this.fourLevelContainDom=this.iosSelectLayer.el.querySelector("#fourLevelContain"),this.fiveLevelContainDom=this.iosSelectLayer.el.querySelector("#fiveLevelContain"),this.sixLevelContainDom=this.iosSelectLayer.el.querySelector("#sixLevelContain"),this.oneLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-one-level"),this.twoLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-two-level"),this.threeLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-three-level"),this.fourLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-four-level"),this.fiveLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-five-level"),this.sixLevelUlContainDom=this.iosSelectLayer.el.querySelector(".select-six-level"),this.iosSelectLayer.el.querySelector(".layer").style.height=this.options.itemHeight*this.options.itemShowCount+this.options.headerHeight+this.options.cssUnit,this.oneLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,document.documentElement.classList.add("ios-select-body-class"),this.scrollOne=new n("#oneLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollOne,1),2<=this.level&&(this.twoLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,this.scrollTwo=new n("#twoLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollTwo,2)),3<=this.level&&(this.threeLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,this.scrollThree=new n("#threeLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollThree,3)),4<=this.level&&(this.fourLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,this.scrollFour=new n("#fourLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollFour,4)),5<=this.level&&(this.fiveLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,this.scrollFive=new n("#fiveLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollFive,5)),6<=this.level&&(this.sixLevelContainDom.style.height=this.options.itemHeight*this.options.itemShowCount+this.options.cssUnit,this.scrollSix=new n("#sixLevelContain",{probeType:3,bounce:!1}),this.setScorllEvent(this.scrollSix,6)),this.selectBtnDom=this.iosSelectLayer.el.querySelector(".sure"),this.selectBtnDom.addEventListener("click",function(t){e.options.callback&&e.options.callback(e.selectOneObj,e.selectTwoObj,e.selectThreeObj,e.selectFourObj,e.selectFiveObj,e.selectSixObj)})},mapKeyByIndex:function(t){var e=this,i={index:1,levelContain:e.oneLevelContainDom,relation:e.options.oneTwoRelation};return 2===t?i={index:2,levelContain:e.twoLevelContainDom,relation:e.options.twoThreeRelation}:3===t?i={index:3,levelContain:e.threeLevelContainDom,relation:e.options.threeFourRelation}:4===t?i={index:4,levelContain:e.fourLevelContainDom,relation:e.options.fourFiveRelation}:5===t?i={index:5,levelContain:e.fiveLevelContainDom,relation:e.options.fiveSixRelation}:6===t&&(i={index:6,levelContain:e.sixLevelContainDom,relation:0}),i},setScorllEvent:function(n,l){var r=this,a=r.mapKeyByIndex(l);n.on("scrollStart",function(){r.toggleClassList(a.levelContain)}),n.on("scroll",function(){if(!isNaN(this.y)){var t,e=Math.abs(this.y/r.baseSize)/r.options.itemHeight;t=Math.round(e)+1,r.toggleClassList(a.levelContain),r.changeClassName(a.levelContain,t)}}),n.on("scrollEnd",function(){var t=Math.abs(this.y/r.baseSize)/r.options.itemHeight,e=1,i=0;Math.ceil(t)===Math.round(t)?(i=Math.ceil(t)*r.options.itemHeight*r.baseSize,e=Math.ceil(t)+1):(i=Math.floor(t)*r.options.itemHeight*r.baseSize,e=Math.floor(t)+1),n.scrollTo(0,-i,0),r.toggleClassList(a.levelContain);var s=r.changeClassName(a.levelContain,e),o=f(s,e);r.setSelectObj(l,o),r.level>l&&(1===a.relation&&h(r.data[l])||c(r.data[l]))&&r.setLevelData(l+1,r.selectOneObj.id,r.selectTwoObj.id,r.selectThreeObj.id,r.selectFourObj.id,r.selectFiveObj.id,r.selectSixObj.id)}),n.on("scrollCancel",function(){var t=Math.abs(this.y/r.baseSize)/r.options.itemHeight,e=1,i=0;Math.ceil(t)===Math.round(t)?(i=Math.ceil(t)*r.options.itemHeight*r.baseSize,e=Math.ceil(t)+1):(i=Math.floor(t)*r.options.itemHeight*r.baseSize,e=Math.floor(t)+1),n.scrollTo(0,-i,0),r.toggleClassList(a.levelContain);var s=r.changeClassName(a.levelContain,e),o=f(s,e);r.setSelectObj(l,o),r.level>l&&(1===a.relation&&h(r.data[l])||c(r.data[l]))&&r.setLevelData(l+1,r.selectOneObj.id,r.selectTwoObj.id,r.selectThreeObj.id,r.selectFourObj.id,r.selectFiveObj.id,r.selectSixObj.id)})},loadingShow:function(){this.options.showLoading&&(this.iosSelectLoadingBoxDom.style.display="block")},loadingHide:function(){this.iosSelectLoadingBoxDom.style.display="none"},mapRenderByIndex:function(t){var e=this,i={index:1,relation:0,levelUlContainDom:e.oneLevelUlContainDom,scrollInstance:e.scrollOne,levelContainDom:e.oneLevelContainDom};return 2===t?i={index:2,relation:e.options.oneTwoRelation,levelUlContainDom:e.twoLevelUlContainDom,scrollInstance:e.scrollTwo,levelContainDom:e.twoLevelContainDom}:3===t?i={index:3,relation:e.options.twoThreeRelation,levelUlContainDom:e.threeLevelUlContainDom,scrollInstance:e.scrollThree,levelContainDom:e.threeLevelContainDom}:4===t?i={index:4,relation:e.options.threeFourRelation,levelUlContainDom:e.fourLevelUlContainDom,scrollInstance:e.scrollFour,levelContainDom:e.fourLevelContainDom}:5===t?i={index:5,relation:e.options.fourFiveRelation,levelUlContainDom:e.fiveLevelUlContainDom,scrollInstance:e.scrollFive,levelContainDom:e.fiveLevelContainDom}:6===t&&(i={index:6,relation:e.options.fiveSixRelation,levelUlContainDom:e.sixLevelUlContainDom,scrollInstance:e.scrollSix,levelContainDom:e.sixLevelContainDom}),i},getLevelData:function(t,e,i,s,o,n){var l=[],r=this.mapRenderByIndex(t);if(1===t)l=this.data[0];else if(1===r.relation){var a=arguments[t-1];this.data[t-1].forEach(function(t,e,i){t.parentId==a&&l.push(t)})}else l=this.data[t-1];return l},setLevelData:function(e,i,s,o,n,l,r){if(h(this.data[e-1])){var t=this.getLevelData(e,i,s,o,n);this.renderLevel(e,i,s,o,n,l,r,t)}else{if(!c(this.data[e-1]))throw new Error("data format error");this.loadingShow(),this.data[e-1].apply(this,[i,s,o,n,l].slice(0,e-1).concat(function(t){this.loadingHide(),this.renderLevel(e,i,s,o,n,l,r,t)}.bind(this)))}},renderLevel:function(t,e,i,s,o,n,l,r){var a=0,h=arguments[t];r.some(function(t,e,i){return t.id==h})||(h=r[0].id);var c="",p=this.options.itemHeight+this.options.cssUnit;c+=this.getWhiteItem(),r.forEach(function(t,e,i){t.id==h?(c+='<li style="height: '+p+"; line-height: "+p+';"'+y(t)+' class="at">'+t.value+"</li>",a=e+1):c+='<li style="height: '+p+"; line-height: "+p+';"'+y(t)+">"+t.value+"</li>"}),c+=this.getWhiteItem();var d=this.mapRenderByIndex(t);d.levelUlContainDom.innerHTML=c,d.scrollInstance.refresh(),d.scrollInstance.scrollToElement(":nth-child("+a+")",0);var u=this.changeClassName(d.levelContainDom,a),v=f(u,a);this.setSelectObj(t,v),this.level>t&&this.setLevelData(t+1,this.selectOneObj.id,this.selectTwoObj.id,this.selectThreeObj.id,this.selectFourObj.id,this.selectFiveObj.id,this.selectSixObj.id)},setSelectObj:function(t,e){1===t?this.selectOneObj=e:2===t?this.selectTwoObj=e:3===t?this.selectThreeObj=e:4===t?this.selectFourObj=e:5===t?this.selectFiveObj=e:6===t&&(this.selectSixObj=e)},getWhiteItem:function(){var t="",e=this.options.itemHeight+this.options.cssUnit,i='<li style="height: '+e+"; line-height: "+e+'"></li>';return t+=i,3<this.options.itemShowCount&&(t+=i),5<this.options.itemShowCount&&(t+=i),7<this.options.itemShowCount&&(t+=i),t},changeClassName:function(t,e){var i;return 3===this.options.itemShowCount?(i=t.querySelector("li:nth-child("+(e+1)+")")).classList.add("at"):5===this.options.itemShowCount?((i=t.querySelector("li:nth-child("+(e+2)+")")).classList.add("at"),t.querySelector("li:nth-child("+(e+1)+")").classList.add("side1"),t.querySelector("li:nth-child("+(e+3)+")").classList.add("side1")):7===this.options.itemShowCount?((i=t.querySelector("li:nth-child("+(e+3)+")")).classList.add("at"),t.querySelector("li:nth-child("+(e+2)+")").classList.add("side1"),t.querySelector("li:nth-child("+(e+1)+")").classList.add("side2"),t.querySelector("li:nth-child("+(e+4)+")").classList.add("side1"),t.querySelector("li:nth-child("+(e+5)+")").classList.add("side2")):9===this.options.itemShowCount&&((i=t.querySelector("li:nth-child("+(e+4)+")")).classList.add("at"),t.querySelector("li:nth-child("+(e+3)+")").classList.add("side1"),t.querySelector("li:nth-child("+(e+2)+")").classList.add("side2"),t.querySelector("li:nth-child("+(e+5)+")").classList.add("side1"),t.querySelector("li:nth-child("+(e+6)+")").classList.add("side2")),i},setBase:function(){if("rem"===this.options.cssUnit){var t=document.documentElement,e=window.getComputedStyle(t,null).fontSize;try{this.baseSize=/\d+(?:\.\d+)?/.exec(e)[0]}catch(t){this.baseSize=1}}else this.baseSize=1},toggleClassList:function(t){Array.prototype.slice.call(t.querySelectorAll("li")).forEach(function(t){t.classList.contains("at")?t.classList.remove("at"):t.classList.contains("side1")?t.classList.remove("side1"):t.classList.contains("side2")&&t.classList.remove("side2")})}},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.IosSelect=t}();