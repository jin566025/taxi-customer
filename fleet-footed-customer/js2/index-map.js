var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 13
});
AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
    var poiPicker = new PoiPicker({
        input: 'pickerInput'
    });

    //初始化poiPicker
    poiPickerReady(poiPicker);
});
function poiPickerReady(poiPicker) {
    window.poiPicker = poiPicker;
    var marker = new AMap.Marker();
    var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -20)
    });
    //选取了某个POI
    poiPicker.on('poiPicked', function(poiResult) {
        var name = poiResult.item.name
        var lng = poiResult.item.location.lng;
        var lat = poiResult.item.location.lat;
		$("#pickerInput").val(name);
		var toaddress4_str = {};
		var toaddress4;

		toaddress4_str.name = name;
		toaddress4_str.lng = lng;
		toaddress4_str.lat = lat;
		toaddress4 = JSON.stringify(toaddress4_str)
		sessionStorage.setItem("toaddress4",toaddress4);

    });
    poiPicker.onCityReady(function() {
//        poiPicker.suggest('美食');
    });
}
//获取用户所在城市信息
//function showCityInfo() {
//  //实例化城市查询类
//  var citysearch = new AMap.CitySearch();
//  //自动获取用户IP，返回当前城市
//  citysearch.getLocalCity(function(status, result) {
//      if (status === 'complete' && result.info === 'OK') {
//          if (result && result.city && result.bounds) {
//              var cityinfo = result.city;
//              var citybounds = result.bounds;
//              var area = sessionStorage.getItem("area");
//              if(!area){
//              	document.getElementById('tip').innerHTML =cityinfo;
//              }else{
//              	document.getElementById('tip').innerHTML =area;
//              }
//             
//              //地图显示当前城市
//              map.setBounds(citybounds);
//          }
//      } else {
//          document.getElementById('tip').innerHTML = result.info;
//      }
//  });
//}
//setTimeout(showCityInfo,500)

var driving = new AMap.Driving({
    map: map,
    panel: "panel"
}); 
function loadmap() {
	var tabIndex = $(".type-navs-active").index(".type-navs");
	var toaddress1;
	var toaddress2;
	var area = sessionStorage.getItem("area");
	if(area){
		$("#tip").html(area);
	}else{
		alert("请先选择所在地区");
		window.location.href = "select-area.html";
	}
	
	if(tabIndex==0){
		toaddress1 = JSON.parse(sessionStorage.getItem("toaddress1"));
    	toaddress2 = JSON.parse(sessionStorage.getItem("toaddress2"));
    	if(toaddress1 && toaddress2){
	    	var toaddress1_lng = toaddress1.lng;
	    	var toaddress1_lat = toaddress1.lat;
	    	var toaddress2_lng = toaddress2.lng;
	    	var toaddress2_lat = toaddress2.lat;
	      	driving.search(new AMap.LngLat(toaddress1_lng, toaddress1_lat), new AMap.LngLat(toaddress2_lng, toaddress2_lat));
	    	setTimeout(function(){
		    	var time = $(".planTitle p").text();
		    	var distance = (time.match(/\(([^)]*)\)/))[1];
		    	var distance2 = parseFloat(distance);
		    	$("#distance").html(distance2);
		    	
		    	var Regulation1 = sessionStorage.getItem("Regulation1");
		    	Regulation1 = JSON.parse(Regulation1);
		    	var initialMileage = Regulation1.initialMileage;
		    	var initialMoney = Regulation1.initialMoney;
		    	var valuation = Regulation1.valuation;
		    	if(distance2>initialMileage){
		    		price = parseFloat(initialMoney+(distance2-initialMileage)*valuation)
		    	}else{
		    		price = parseFloat(initialMoney.toFixed(2))
		    	}
		    	console.log(price)
		    	$("#finish-price2").html(price)
		    	var award = parseFloat($("#award3").text());
		    	var	main = price+award
		    	$("#finish-price").html(main.toFixed(2))
		    },1000)
	    }
	}else if(tabIndex==3){
		toaddress1 = JSON.parse(sessionStorage.getItem("toaddress7"));
    	toaddress2 = JSON.parse(sessionStorage.getItem("toaddress8"));
    	if(toaddress1 && toaddress2){
	    	var toaddress1_lng = toaddress1.addressLng;
	    	var toaddress1_lat = toaddress1.addressLat;
	    	var toaddress2_lng = toaddress2.addressLng;
	    	var toaddress2_lat = toaddress2.addressLat;
	      	driving.search(new AMap.LngLat(toaddress1_lng, toaddress1_lat), new AMap.LngLat(toaddress2_lng, toaddress2_lat));
	    	setTimeout(function(){
		    	var time = $(".planTitle p").text();
		    	var distance = (time.match(/\(([^)]*)\)/))[1];
		    	var distance2 = parseFloat(distance);
		    	var price;
		    	var Regulation2 = sessionStorage.getItem("Regulation2");
		    	Regulation2 = JSON.parse(Regulation2);
		    	var initialMileage2 = Regulation2.initialMileage;
		    	var initialMoney2 = Regulation2.initialMoney;
		    	var valuation2 = Regulation2.valuation;
		    	
		    	$("#main4-distance").html(distance2);
		    	if(distance2>initialMileage2){
		    		price = parseFloat(initialMoney2+(distance2-initialMileage2)*valuation2)
		    	}else{
		    		price = parseFloat(initialMoney2.toFixed(2))
		    	}
		    	console.log(price)
		    	$("#main4-reward").html(price);
		    	var award = parseFloat($("#main4-award").text());
		    	var	main = price+award;
		    	$("#main4-finish").html(main.toFixed(2))
		    },1000)
	    }
	}
	

}
setTimeout(function(){
	loadmap();
},500)
