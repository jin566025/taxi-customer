$(function(){function j(a,n,e,o){n=parseInt(n),e=parseFloat(e),$.ajax({type:"post",url:url_path+"/pay/wallet.json",data:{id:a,userId:n,businessType:1,money:e},async:!1,dataType:"json",success:function(e){if("成功"==e.msg)window.location.href="my-order-list.html?typeId="+o;else if(300==e.stateCode){alert("余额不足，使用微信支付"),$("#loadingimg,#shadow2").fadeIn();var s=localStorage.getItem("openid"),t={};t.id=a,t.userId=n,t.tradeType="JSAPI",t.goods_body="wxpay",t.businessType=1,t.openidT=s,console.log(t),$.ajax({url:url_path+"/pay/weixinprepaid.json",type:"post",data:t,dataType:"json",async:!1,success:function(e){if(console.log(e),"成功"==e.msg){$("#loadingimg,#shadow2").fadeOut();var s=e.resInfo,t=s.timeStamp.toString(),a=s.package,n=s.nonceStr,i=s.paySign,d=s.signType,r=s.appId;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:r,timeStamp:t,nonceStr:n,package:a,signType:d,paySign:i},function(e){"get_brand_wcpay_request:ok"==e.err_msg&&(window.location.href="my-order-list.html?typeId="+o)})}},error:function(e){console.log(t),console.log(e)}})}}})}$.ajax({type:"post",url:url_path+"/getIndex.json",async:!0,dataType:"json",success:function(e){if(console.log(e),"成功"==e.msg)for(var s=0;s<e.adDTOList.length;s++){var t='<div class="swiper-slide"><img data-adId='+e.adDTOList[s].adId+' src="'+e.adDTOList[s].adPicUrl+'" /></div>';$(".swiper-wrapper").append(t)}},error:function(){}}),$.ajax({type:"post",url:url_path+"/mission/regulation.json",data:{id:1},dataType:"json",success:function(e){if(0==e.stateCode){var s=JSON.stringify(e);sessionStorage.setItem("Regulation1",s)}}}),$.ajax({type:"post",url:url_path+"/mission/regulation.json",data:{id:2},dataType:"json",success:function(e){if(console.log(e),0==e.stateCode){var s=JSON.stringify(e);sessionStorage.setItem("Regulation2",s)}}}),$("#typeID1").click(function(){!function(){var e,s,t,a,n,i,d,r,o,l,c,p,u,g,m,y=JSON.parse(sessionStorage.getItem("toaddress1")),f=JSON.parse(sessionStorage.getItem("toaddress2")),I=localStorage.getItem("districtId"),v=localStorage.getItem("cityId");{if(!y)return alert("请填写完整发货信息");e=y.pickerInput2+" "+y.addressInput,n=y.lng,i=y.lat,g=y.nameInput,m=y.mobileInput}{if(!f)return alert("请填写完整收货信息");s=f.pickerInput2+" "+f.addressInput,t=f.lng,a=f.lat,p=f.nameInput,u=f.mobileInput}if(d=$("#suId").val(),console.log(d),51==d.length)return alert("请选择取件时间");if(56==(r=$("#showBank").text()).length)return alert("请选择物品类型");if(o=$("#message").val(),l=parseFloat($("#finish-price").text()),!(c=parseFloat($("#award").val())))return alert("请输入红包金额");var h=$("#distance").text();$.ajax({type:"post",url:url_path+"/mission/save.json",dataType:"json",async:!1,data:{typeId:1,deliveryAddress:e,taskAddress:s,taskAddressLongitude:t,taskAddressLatitude:a,deliveryAddressLongitude:n,deliveryAddressLatitude:i,pickuptime:d,goodsType:r,message:o,finish:l,award:c,taskRealname:p,taskTel:u,deliveryRealname:g,deliveryTel:m,userId:userId,distance:h,districtId:I,cityId:v},success:function(e){if("成功"==e.msg){var s=e.finish,t=e.id;j(t,userId,s,1)}},error:function(e){console.log(e)}})}(),$(this).css("pointer-events","none");var e=this;setTimeout(function(){$(e).css("pointer-events","visible")},2e3)}),$(".main2-textarea").change(function(){var e=$(".main2-textarea").val();sessionStorage.setItem("daigoumsg",e)}),$(".main2-btn").click(function(){var e=$(".main2-textarea").val();sessionStorage.setItem("daigoumsg",e),sessionStorage.getItem("toaddress3")?""==e||"null"==e||"undefined"==e?alert("请填写购买信息"):setTimeout(function(){window.location.href="pages2/my-order-list/type1-order2.html?typeId=2"},500):alert("请填写收货信息")}),$.ajax({type:"post",url:url_path+"/mission/getSetMeal.json",dataType:"json",success:function(e){if(console.log(e),"成功"==e.msg)for(var s=e.list,t=0;t<s.length;t++){var a,n,i,d;s[t].hour<24?(a=s[t].hour,n="小时"):(a=s[t].day,n="天"),i=s[t].day?s[t].day+"天=":"",d=s[t].name?s[t].name:"";var r='<div class="dj2-section flex-box" data-setid='+s[t].id+'><a class="setMealName">'+s[t].name+'</a><div class="dj2-sections dj2-sections1"><a>'+a+"</a><a>"+n+'</a></div><div class="dj2-sections dj2-sections2"><p><a class="dj2-sections2-a1 dj2-sections2-a4">'+i+s[t].hour+'小时        </a><a class="dj2-sections2-a1 dj2-sections2-a3">'+s[t].money+'元起</a></p><p class="dj2-sections2-a2">'+d+'</p></div><img class="dj2-sections dj2-sections3" src="img2/toRight2.png" /></div>';$(".dj2-content").append(r)}}}),$(".main3-btn").click(function(){!function(){var e=JSON.parse(sessionStorage.getItem("toaddress5"));{if(!e)return alert("请填写出发地址");var s=e.addressLng,t=e.addressLat}var a=JSON.parse(sessionStorage.getItem("toaddress6"));{if(!a)return alert("请填写目的地地址");var n=a.addressLng,i=a.addressLat}$("#shadow,#getAddress").fadeIn(500),driving.search(new AMap.LngLat(s,t),new AMap.LngLat(n,i),function(){var e=$(".planTitle p").text(),s=new RegExp("\\((.| )+?\\)","igm");e=e.match(s)[0];e=e.replace(/[^\d\.]/g,""),$(".main3-distance").html(e)})}(),$(this).css("pointer-events","none");var e=this;setTimeout(function(){$(e).css("pointer-events","visible")},2e3)}),$(".main3-distance").on("DOMNodeInserted",function(){var e,s,t,a,n,i,d,r,o,l,c;$("#shadow,#getAddress").fadeOut(500),e=localStorage.getItem("districtId"),s=localStorage.getItem("cityId"),t=parseFloat($(".main3-distance").text()),a=JSON.parse(sessionStorage.getItem("toaddress5")),n=a.addressName,i=a.addressLng,d=a.addressLat,r=JSON.parse(sessionStorage.getItem("toaddress6")),o=r.addressName,l=r.addressLng,c=r.addressLat,$.ajax({url:url_path+"/mission/save.json",type:"post",async:!1,data:{typeId:3,deliveryAddress:n,deliveryAddressLongitude:i,deliveryAddressLatitude:d,taskAddress:o,taskAddressLongitude:l,taskAddressLatitude:c,finish:0,userId:userId,distance:t,districtId:e,cityId:s},dataType:"json",success:function(e){"成功"==e.msg&&(window.location.href="my-order-list.html?typeId=3")},error:function(){}}),$(this).css("pointer-events","none");var p=this;setTimeout(function(){$(p).css("pointer-events","visible")},2e3)}),$(".main4-footer-submit").click(function(){!function(){var e=JSON.parse(sessionStorage.getItem("toaddress7"));if(!e)return alert("请填写完整起始地");var s=e.addressName,t=e.addressLng,a=e.addressLat,n=JSON.parse(sessionStorage.getItem("toaddress8"));if(!n)return alert("请填写完整出发地");var i=n.addressName,d=n.addressLng,r=n.addressLat,o=localStorage.getItem("districtId"),l=localStorage.getItem("cityId"),c=$("#main4-finish").text(),p=$("#main4-award").text(),u=$("#main4-reward").text(),g=$("#main4-distance").text(),m={};if(m.districtId=o,m.cityId=l,m.typeId=4,s&&(m.deliveryAddress=s),t&&(m.deliveryAddressLongitude=t),a&&(m.deliveryAddressLatitude=a),i&&(m.taskAddress=i),d&&(m.taskAddressLongitude=d),r&&(m.taskAddressLatitude=r),c&&(m.finish=c),!p)return alert("请输入红包金额");m.award=p,u&&(m.reward=u),g&&(m.distance=g),m.userId=userId,console.log(m),$.ajax({type:"post",url:url_path+"/mission/save.json",data:m,dataType:"json",success:function(e){if(console.log(e),"成功"==e.msg){var s=e.finish;j(e.id,userId,s,4)}}})}(),$(this).css("pointer-events","none");var e=this;setTimeout(function(){$(e).css("pointer-events","visible")},2e3)})});