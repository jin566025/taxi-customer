var map=new AMap.Map("container",{resizeEnable:!0,zoom:13}),driving=new AMap.Driving({map:map,panel:"panel"});setTimeout(function(){$(".amap-logo,.amap-controls").hide(),$(".amap-copyright,.amap-controls").css("visibility","hidden")},500);var mySwiper=new Swiper(".section3,.section2",{onTouchMove:function(e){var o=e.touches.currentY-e.touches.startY;o<20?ContentUp():20<o&&ContentDown()}});function save(e,o,t){$.ajax({type:"post",url:e+"/user/saveAccountstream.json",data:{userId:o,money:t,useraccountOperationType:1,useraccountMode:1},async:!1,dataType:"json",success:function(e){"成功"==e.msg&&location.reload()}})}function payWallt(n,r,l,a){r=parseInt(r),$.ajax({type:"post",url:url_path+"/pay/wallet.json",data:{id:n,userId:r,businessType:1,money:l},async:!1,dataType:"json",success:function(e){if(0==e.stateCode)save(url_path,r,l),window.location.href="my-order-list.html?typeId="+a;else if(300==e.stateCode){alert("余额不足，使用微信支付");var o=localStorage.getItem("openid"),t={};t.id=n,t.userId=r,t.tradeType="JSAPI",t.goods_body="wxchangepay"+Date.now().toString(),t.businessType=1,t.openidT=o,console.log(t),$.ajax({url:url_path+"/pay/weixinprepaid.json",type:"post",data:t,dataType:"json",async:!1,success:function(e){if(console.log(e),"成功"==e.msg){$("#loadingimg,#shadow2").fadeOut();var o=e.resInfo,t=o.timeStamp.toString(),n=o.package,a=o.nonceStr,s=o.paySign,i=o.signType,c=o.appId;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:c,timeStamp:t,nonceStr:a,package:n,signType:i,paySign:s},function(e){"get_brand_wcpay_request:ok"==e.err_msg&&save(url_path,r,l)})}},error:function(e){console.log(t)}})}}})}function timeFormatter(e){var o=new Date(parseInt(e)),t=o.getMonth()+1;t<10&&(t="0"+t);var n=o.getDate();n<10&&(n="0"+n);var a=o.getHours();a<10&&(a="0"+a);var s=o.getMinutes();s<10&&(s="0"+s);var i=o.getSeconds();return i<10&&(i="0"+i),o.getFullYear()+"-"+t+"-"+n+" "+a+":"+s+":"+i}var hrefs=window.location.href.split("?listid=")[1],id=hrefs.split("&state=")[0],state=hrefs.split("&state=")[1];$(function(){setTimeout(function(){$(".amap-logo,.amap-controls").hide(),$(".amap-copyright,.amap-controls").css("visibility","hidden")},500);new Swiper(".section3,.section2",{onTouchMove:function(e){var o=e.touches.currentY-e.touches.startY;o<20?ContentUp():20<o&&ContentDown()}});$("#cancle-btn").click(function(){$("#shadow,.cancle-dialog").fadeIn()}),$("#dialog-cancle,#dialog-cancle2,.dialog-btns1").click(function(){$("#shadow,.dialogs").fadeOut()}),$("#access").click(function(){window.location.href="to-access.html?taslId="+id}),$("#complain").click(function(){window.location.href="complain.html?taslId="+id+"&state="+state}),$("#order2-submit").click(function(){$("#shadow,.complete-dialog").fadeIn()}),$("#dialog-sure2").click(function(){!function(e,o){var t=parseFloat($("#finish").text());localStorage.getItem("openid");e=parseInt(e),o=parseInt(o);var n={};n.id=e,n.userId=o,n.businessType=1,n.money=t,$.ajax({type:"post",url:url_path+"/mission/ok.json",async:!1,data:{id:e,userId:o},dataType:"json",success:function(e){console.log(e),"成功"==e.msg&&(window.location.href="../../my-order-list.html")},error:function(){}})}(id,userId),$(this).css("pointer-events","none")}),$("#dialog-sure").click(function(){var t,n,o;t=id,n=userId,o=!1,$.ajax({type:"post",url:url_path+"/mission/getUserCancelNum.json",async:!1,data:{userId:n},dataType:"json",success:function(e){console.log(e),"成功"==e.msg&&(e.cancelNum<4?o=!0:(alert("每日超过3次不能免费取消"),o=!1))},error:function(){}}),o&&$.ajax({type:"post",url:url_path+"/getOrderSn.json",async:!1,dataType:"json",success:function(e){if(console.log(e),0==e.stateCode){var o=e.orderSn;console.log("id:"+t),console.log("userId:"+n),console.log("refundNo:"+o),$.ajax({type:"post",async:!1,url:url_path+"/mission/cancel.json",data:{id:t,userId:n,refundNo:o},dataType:"json",success:function(e){history.go(-1),console.log(e),0==e.stateCode&&(alert("每日免费取消次数为3次"),history.go(-1))},error:function(){history.go(-1)}})}},error:function(e){}})})});