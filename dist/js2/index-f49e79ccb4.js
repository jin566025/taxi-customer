$(function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,observer:!0,observeParents:!0,autoplay:1500});function h(e){var t=$(e).index(".dj-type2")+1;$(".main4-section").hide(),$(".main4-section"+t).show(),$(".dj-type2").removeClass("dj-type-active"),$(e).addClass("dj-type-active")}function e(){$("#main4-footer-child-distance4").hasClass("totop")?($(".main4-footer").css("bottom","4.6rem"),$(".main4-header-child").fadeOut(500),$("#shadow3").fadeOut(500),$("#main4-footer-child-distance4").attr("src","img2/toTop.png"),$("#main4-footer-child-distance4").removeClass("totop")):($("#main4-footer-child-distance4").addClass("totop"),$(".main4-header-child").fadeIn(500),$("#shadow3").fadeIn(500),$("#main4-footer-child-distance4").attr("src","img2/toBottom.png"),$(".main4-footer").css("bottom","0"))}function t(){$("#footer-content-toTop").hasClass("top")?($(".footer").css("bottom","4.6rem"),$(".footer-hide").fadeOut(500),$("#shadow").fadeOut(500),$("#footer-content-toTop").attr("src","img2/toTop.png"),$("#footer-content-toTop").removeClass("top")):($(".footer").css("bottom","0"),$(".footer-hide").fadeIn(500),$("#shadow").fadeIn(500),$("#footer-content-toTop").attr("src","img2/toBottom.png"),$("#footer-content-toTop").addClass("top"))}$(".dj-type2").click(function(){h(this)}),$("#main4-footer-child-distance4").click(function(){e()}),$(".protocol-label").click(function(){$(this).hasClass("checked")?$(this).removeClass("checked"):$(this).addClass("checked")}),$(".swiper-container").click(function(){window.location.href="recharge.html"}),$("#footer-content-toTop").click(function(){t()}),$(".section4-guize").click(function(){window.location.href="protocol.html"}),$("#shadow").click(function(){t()}),$("#shadow3").click(function(){e()}),$("#award").bind("input propertychange",function(){$(this).val($(this).val().replace(/[^\-?\d.]/g,""));var e=$(this).val(),t=e.split(".");console.log(t),(1<t.length&&2<t[1].length||2<t.length)&&(e=t[0]+"."+t[1].substr(0,2),$(this).val(e)),function(){var e=parseFloat($("#award").val());if(e<0)return alert("不能小于0"),$("#award").val(0);var t=parseFloat($("#finish-price2").text()),s=(e+t).toFixed(2);e?($("#finish-price").html(s),$("#award2,#award3").html(e),$("#finish-price3").html(t)):($("#finish-price").html(t),$("#award2,#award3").html("0.00"))}()}),$("#award4").bind("input propertychange",function(){$(this).val($(this).val().replace(/[^\-?\d.]/g,""));var e=$(this).val(),t=e.split(".");(1<t.length&&2<t[1].length||2<t.length)&&(e=t[0]+"."+t[1].substr(0,2),$(this).val(e)),function(){var e=parseFloat($("#award4").val());if(e<0)return alert("不能小于0"),$("#award").val(0);var t=parseFloat($("#main4-reward").text());t=t.toFixed(2);var s=(e+t).toFixed(2);e?($("#main4-finish").html(s),$("#main4-award").html(e),$("#finish-price3").html(t)):($("#main4-finish").html(t),$("#main4-award").html("0"))}()}),$("#toSelectArea").click(function(){var e=$("#tip").text();sessionStorage.setItem("area",e),window.location.href="select-area.html"}),$(".type-navs").click(function(){var e,t;e=this,t=$(e).index()+1,$(".main").hide(),$(".main"+t).show(),$(".type-navs").removeClass("type-navs-active"),$(e).addClass("type-navs-active"),loadmap()}),$(".main4").on("click",".dj2-section",function(){var e,t,s,a,o,i,n,r,d;e=this,t=$(e).index(),s=$.trim($(e).find(".dj2-sections2-a4").text()),a=$.trim($(e).find(".dj2-sections2-a3").text()),o=$.trim($(e).find(".dj2-sections2-a2").text()),i=$.trim($(e).attr("data-setid")),n=$.trim($(e).find(".setMealName").text()),r=$.trim($("#tip").text()),(d={}).text1=s,d.text2=a,d.text3=o,d.text4=i,d.setMealName=n,d.address=r,d=JSON.stringify(d),sessionStorage.setItem("djType",1),sessionStorage.setItem("meal",d),sessionStorage.setItem("addressType",6),sessionStorage.setItem("returnIndex",4),setTimeout(function(){window.location.href="daijia.html?type="+t},500)}),$("#type1-submit").click(function(){$(".protocol-label").hasClass("checked")?($("#finish-price3").html($("#finish-price2").text()),$("#award2").html($("#award3").text()),$("#shadow2,#type1-dialog").fadeIn(500)):alert("需要同意并接受协议")}),$(".type1-btn-left,.type1-btn-right").click(function(){$("#shadow2,#type1-dialog").fadeOut(500)}),$(".toaddress").click(function(){var e;e=this,$(e).hasClass("toaddress1")?(sessionStorage.setItem("returnIndex",1),sessionStorage.setItem("addressType",1)):$(e).hasClass("toaddress2")?(sessionStorage.setItem("returnIndex",1),sessionStorage.setItem("addressType",2)):$(e).hasClass("toaddress3")?(sessionStorage.setItem("returnIndex",2),sessionStorage.setItem("addressType",3)):$(e).hasClass("toaddress4")?(sessionStorage.setItem("returnIndex",3),sessionStorage.setItem("addressType",4)):$(e).hasClass("toaddress5")?(sessionStorage.setItem("returnIndex",3),sessionStorage.setItem("addressType",5)):$(e).hasClass("toaddress6")?(sessionStorage.setItem("returnIndex",4),sessionStorage.setItem("addressType",6),sessionStorage.setItem("djType",0)):$(e).hasClass("toaddress7")?(sessionStorage.setItem("returnIndex",4),sessionStorage.setItem("addressType",7),sessionStorage.setItem("djType",0)):$(e).hasClass("toaddress8")&&(sessionStorage.setItem("returnIndex",2),sessionStorage.setItem("addressType",8))}),setTimeout(function(){!function(){var e=JSON.parse(sessionStorage.getItem("toaddress4"));if(e){var t=e.name;$("#pickerInput").val(t)}var s=sessionStorage.getItem("returnIndex");s&&($(".main").hide(),$(".main"+s).show(),$(".type-navs").removeClass("type-navs-active"),$(".type-navs").eq(s-1).addClass("type-navs-active"));for(var a=[],o=0,i=$(".toaddress"),n=0;n<i.length;n++)o+=1,a[n]=JSON.parse(sessionStorage.getItem("toaddress"+o)),a[n]&&($("#type-address"+o).html(a[n].pickerInput2+" "+a[n].addressInput),$("#type-name"+o).html(a[n].nameInput),$("#type-mobile"+o).html(a[n].mobileInput),$("#section"+o).show().siblings(".content-address").hide());var r=JSON.parse(sessionStorage.getItem("toaddress5")),d=JSON.parse(sessionStorage.getItem("toaddress6")),c=JSON.parse(sessionStorage.getItem("toaddress9"));r&&$("#section4").val(r.addressName),d&&$("#section5").val(d.addressName),c&&$("#section33").val(c.addressName);var l=JSON.parse(sessionStorage.getItem("toaddress7")),m=JSON.parse(sessionStorage.getItem("toaddress8"));l&&$("#section6").val(l.addressName),m&&$("#section7").val(m.addressName),h(1==sessionStorage.getItem("djType")?"#bsdj":"#rcdj")}()},300)});