// var url_path = "http://192.168.16.100:8080/Taxi/rest";
//var url_path = "http://taxiweb.nbzhidun.com/Taxi/rest";
var url_path = "http://zyy71897.yicp.io:50353/Taxi/rest";
//var url_path = "http://javawangcy.imwork.net:25950/Taxi/rest"
$(".footer-nav").click(function(){
	var index = $(this).index()
	if(index == 0){
		window.location.href="index2.html"
	}else if(index==1){
		window.location.href="my-order-list.html"
	}else if(index==2){
		window.location.href="personal.html"
	}
})
//var useragent = navigator.userAgent;
//if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
//  alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
//  var opened = window.open('about:blank', '_self');
//  opened.opener = null;
//  opened.close();
//}

$(function(){
	(function(){
		var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //重写alert方法，alert()方法重写，不能传多余参数
            window.alert = function(name){
                var iframe = document.createElement("IFRAME");
                iframe.style.display="none";
                iframe.setAttribute("src", 'data:text/plain');
                document.documentElement.appendChild(iframe);
                window.frames[0].window.alert(name);
                iframe.parentNode.removeChild(iframe);
            }
        }
        
	   if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
	       handleFontSize();
	   } else {
	       if (document.addEventListener) {
	           document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
	       } else if (document.attachEvent) {
	           document.attachEvent("WeixinJSBridgeReady", handleFontSize);
	           document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
	   }
	   function handleFontSize() {
	       // 设置网页字体为默认大小
	       WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
	       // 重写设置网页字体大小的事件
	       WeixinJSBridge.on('menu:setfont', function() {
	           WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
	       });
	   }
	})();
})
