var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 13 //地图显示的缩放级别
});
//构造路线导航类
var driving = new AMap.Driving({
    map: map,
    panel: "panel"
}); 
// 根据起终点经纬度规划驾车导航路线
driving.search(new AMap.LngLat(121.553973, 29.870446), new AMap.LngLat(121.521148, 29.87863));
setTimeout(function(){
	var time = $(".planTitle p").text();
	var pattern =new RegExp("\\((.| )+?\\)","igm");

	var content = $(".amap-marker-content")
	$(content[0]).append("<a style='display:inline-block;font-size:12px;position:absolute;top:-20px;width:auto;background-color:#fff;color:#000;white-space:nowrap;padding:3px 5px;left:-10px'>距终点"+times+"</a>")

},1000)