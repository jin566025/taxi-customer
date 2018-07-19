$(function(){

	//轮播图
	var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	    paginationClickable: true,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
    	autoplay:1500
	});
	$(".dj-type2").click(function(){
		tabdjType(this)
	})
	function tabdjType(t){
		var type_index = $(t).index(".dj-type2")+1;
		$(".main4-section").hide();
		$(".main4-section"+type_index+"").show();
		$(".dj-type2").removeClass("dj-type-active");
		$(t).addClass("dj-type-active");
	}
	$("#main4-footer-child-distance4").click(function(){
		toTop2();
	})
	function toTop2(){
		if($("#main4-footer-child-distance4").hasClass("totop")){
			$(".main4-footer").css("bottom","4.6rem")
			$(".main4-header-child").fadeOut(500);
			$("#shadow3").fadeOut(500);
			$("#main4-footer-child-distance4").attr("src","img2/toTop.png");
			$("#main4-footer-child-distance4").removeClass("totop")
		}else{
			$("#main4-footer-child-distance4").addClass("totop");
			$(".main4-header-child").fadeIn(500);
			$("#shadow3").fadeIn(500);
			$("#main4-footer-child-distance4").attr("src","img2/toBottom.png");
			$(".main4-footer").css("bottom","0")
		}
	}
	$(".protocol-label").click(function(){
		if($(this).hasClass("checked")){
			$(this).removeClass("checked")
		}else{
			$(this).addClass("checked")
		}
	})
	
	
	$(".swiper-container").click(function(){
		window.location.href = "recharge.html"
	})
	$("#footer-content-toTop").click(function(){
		toTop();
	})
	function toTop(){
		if($("#footer-content-toTop").hasClass("top")){
			$(".footer").css("bottom","4.6rem")
			$(".footer-hide").fadeOut(500);
			$("#shadow").fadeOut(500);
			$("#footer-content-toTop").attr("src","img2/toTop.png");
			$("#footer-content-toTop").removeClass("top")
		}else{
			$(".footer").css("bottom","0")
			$(".footer-hide").fadeIn(500);
			$("#shadow").fadeIn(500);
			$("#footer-content-toTop").attr("src","img2/toBottom.png");
			$("#footer-content-toTop").addClass("top")
		}
	}
	$("#shadow").click(function(){
		toTop();
	})
	$("#shadow3").click(function(){
		toTop2();
	})
	//监听送取件红包输入
	$('#award').bind('input propertychange', function() {
		var value = $(this).val();
        var array = value.split(".");
        if((array.length >1 && array[1].length > 2) || array.length >2){
            value = array[0] + "." +array[1].substr(0,2);
            $(this).val(value);
        }
		calAward(this);
	});  
	//监听日常代驾红包输入
	$('#award4').bind('input propertychange', function() {
		var value = $(this).val();
        var array = value.split(".");
        if((array.length >1 && array[1].length > 2) || array.length >2){
            value = array[0] + "." +array[1].substr(0,2);
            $(this).val(value);
        }
		calAward2(this);
	});  
	function calAward2(){
		
		var award = parseFloat($("#award4").val());
		if(award<0){
			alert("不能小于0");
			$("#award").val(0)
			return false;
		}
	
		var finish_price = parseFloat($("#main4-reward").text());
		finish_price = finish_price.toFixed(2)
		var main = (award+finish_price).toFixed(2);
		if(award){
			$("#main4-finish").html(main);
			$("#main4-award").html(award)
			$("#finish-price3").html(finish_price);
		}else{
			$("#main4-finish").html(finish_price)
			$("#main4-award").html("0")
		}
	}
	function calAward(){
		
		var award = parseFloat($("#award").val());
		if(award<0){
			alert("不能小于0");
			$("#award").val(0)
			return false;
		}
		
		var finish_price = parseFloat($("#finish-price2").text());
		var main = (award+finish_price).toFixed(2);
		if(award){
			$("#finish-price").html(main);
			$("#award2,#award3").html(award)
			$("#finish-price3").html(finish_price);
		}else{
			$("#finish-price").html(finish_price)
			$("#award2,#award3").html("0.00")
		}
	}
	
	$("#toSelectArea").click(function(){
		var area = $("#tip").text();
		sessionStorage.setItem("area",area);
		window.location.href = "select-area.html";
	})
	$(".type-navs").click(function(){
		tabType(this);
		loadmap();
	})
	function tabType(t){
		var index = $(t).index()+1;
		$(".main").hide();
		$(".main"+index+"").show();
		$(".type-navs").removeClass("type-navs-active");
		$(t).addClass("type-navs-active");
	}
	$(".main4").on("click",".dj2-section",function(){
		toDaijia(this)
	})
	function toDaijia(t){
		var index = $(t).index();
		var text1 =$.trim($(t).find(".dj2-sections2-a4").text());
		var text2 = $.trim($(t).find(".dj2-sections2-a3").text());
		var text3 = $.trim($(t).find(".dj2-sections2-a2").text());
		var text4 = $.trim($(t).attr("data-setid"));
		var setMealName = $.trim($(t).find(".setMealName").text());
		var address = $.trim($("#tip").text());
		var dataArray = {};
		dataArray.text1 = text1;
		dataArray.text2 = text2;
		dataArray.text3 = text3;
		dataArray.text4 = text4;
		dataArray.setMealName = setMealName;
		dataArray.address = address;
		dataArray = JSON.stringify(dataArray);
		sessionStorage.setItem("djType",1)
		sessionStorage.setItem("meal",dataArray);
		sessionStorage.setItem("addressType",6);
		sessionStorage.setItem("returnIndex",4);
		setTimeout(function(){
			window.location.href="daijia.html?type="+index
		},500)
	}
//	$("#type1").click(function(){
//		window.location.href="address-manage.html"
//	})
	$("#type1-submit").click(function(){
		if($(".protocol-label").hasClass("checked")){
			$("#finish-price3").html($("#finish-price2").text());
			$("#award2").html($("#award3").text());
			$("#shadow2,#type1-dialog").fadeIn(500)
		}else{
			alert("需要同意并接受协议")
		}
		
	})
	
	$(".type1-btn-left,.type1-btn-right").click(function(){
		$("#shadow2,#type1-dialog").fadeOut(500)
	})
	
	$(".toaddress").click(function(){
		indexToAddress(this);
	})
	function indexToAddress(t){
		
		if($(t).hasClass("toaddress1")){
			sessionStorage.setItem("returnIndex",1);
			sessionStorage.setItem("addressType",1)
		}else if($(t).hasClass("toaddress2")){
			sessionStorage.setItem("returnIndex",1);
			sessionStorage.setItem("addressType",2)
		}else if($(t).hasClass("toaddress3")){
			sessionStorage.setItem("returnIndex",2);
			sessionStorage.setItem("addressType",3)
		}else if($(t).hasClass("toaddress4")){
			sessionStorage.setItem("returnIndex",3);
			sessionStorage.setItem("addressType",4)
		}else if($(t).hasClass("toaddress5")){
			sessionStorage.setItem("returnIndex",3);
			sessionStorage.setItem("addressType",5)
		}else if($(t).hasClass("toaddress6")){
			sessionStorage.setItem("returnIndex",4);
			sessionStorage.setItem("addressType",6);
			sessionStorage.setItem("djType",0)
		}else if($(t).hasClass("toaddress7")){
			sessionStorage.setItem("returnIndex",4);
			sessionStorage.setItem("addressType",7)
			sessionStorage.setItem("djType",0)
		}else if($(t).hasClass("toaddress8")){
			sessionStorage.setItem("returnIndex",2);
			sessionStorage.setItem("addressType",8)
		}
	}
	function webLoad(){
		var toaddress4 = JSON.parse(sessionStorage.getItem("toaddress4"));
		if(toaddress4){
			var pickerInputName = toaddress4.name;
			$("#pickerInput").val(pickerInputName);
		}
		
		//返回时回到起始导航栏
		var returnIndex = sessionStorage.getItem("returnIndex");
		if(returnIndex){
			$(".main").hide();
			$(".main"+returnIndex+"").show();
			$(".type-navs").removeClass("type-navs-active");
			$(".type-navs").eq(returnIndex-1).addClass("type-navs-active");
		}
		

		var arr = [];
		var j = 0;
		var address_input = $(".toaddress")
		for(var i=0;i<address_input.length;i++){
			j = j+1
			arr[i] = JSON.parse(sessionStorage.getItem("toaddress"+j+""));
			if(arr[i]){
				$("#type-address"+j+"").html(arr[i].pickerInput2+" "+arr[i].addressInput);
				$("#type-name"+j+"").html(arr[i].nameInput);
				$("#type-mobile"+j+"").html(arr[i].mobileInput);
				$("#section"+j+"").show().siblings(".content-address").hide()
			}
		}
		var toaddress5 = JSON.parse(sessionStorage.getItem("toaddress5"));
		var toaddress6 = JSON.parse(sessionStorage.getItem("toaddress6"));
		var toaddress9 = JSON.parse(sessionStorage.getItem("toaddress9"));
		if(toaddress5){
			$("#section4").val(toaddress5.addressName)
		}
		if(toaddress6){
			$("#section5").val(toaddress6.addressName)
		}
		if(toaddress9){
			$("#section33").val(toaddress9.addressName)
		}
		var toaddress7 = JSON.parse(sessionStorage.getItem("toaddress7"));
		var toaddress8 = JSON.parse(sessionStorage.getItem("toaddress8"));
		if(toaddress7){
			$("#section6").val(toaddress7.addressName)
		}
		if(toaddress8){
			$("#section7").val(toaddress8.addressName)
		}
		var djType = sessionStorage.getItem("djType");
		if(djType==1){
			tabdjType("#bsdj")
		}else{
			tabdjType("#rcdj")
		}
	}
	setTimeout(function(){
		webLoad();
	},300)
})


