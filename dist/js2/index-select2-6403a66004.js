var selectContactDom=$("#startTime"),showContactDom=$("#startTime"),contactProvinceCodeDom=$("#contact_province_code"),contactCityCodeDom=$("#contact_city_code");selectContactDom.bind("click",function(){showContactDom.attr("data-city-code"),showContactDom.attr("data-city-name");var t=showContactDom.attr("data-province-code"),o=showContactDom.attr("data-city-code"),a=showContactDom.attr("data-district-code");new IosSelect(3,[iosProvinces,iosCitys,iosCountys],{title:"请选择出发时间",itemHeight:35,relation:[1,1],oneLevelId:t,twoLevelId:o,threeLevelId:a,callback:function(t,o,a){contactProvinceCodeDom.val(t.id),contactProvinceCodeDom.attr("data-province-name",t.value),contactCityCodeDom.val(o.id),contactCityCodeDom.attr("data-city-name",o.value),showContactDom.attr("data-province-code",t.id),showContactDom.attr("data-city-code",o.id),showContactDom.attr("data-district-code",a.id);var e=t.value+" "+o.value+":"+a.value,c=getTimes(e);showContactDom.html(c);var n=sessionStorage.getItem("beifen");(n=JSON.parse(n)).state=1,n.pickuptime=c,$.ajax({type:"post",url:url_path+"/mission/update.json",data:n,dataType:"json",success:function(t){console.log(n),console.log(t),t.msg},error:function(t){console.log(t)}})}})});var data=[{id:"10001",value:"文件票据"},{id:"10002",value:"办公用品"},{id:"10003",value:"日用品"},{id:"10004",value:"酒水"},{id:"10005",value:"水果"},{id:"10006",value:"生鲜"},{id:"10007",value:"蛋糕"},{id:"10008",value:"其他"}],showBankDom=document.querySelector("#showBank"),bankIdDom=document.querySelector("#goodsType");showBankDom.addEventListener("click",function(){var t=showBankDom.dataset.id;showBankDom.dataset.value,new IosSelect(1,[data],{container:".container",title:"选择物品类型",itemHeight:50,itemShowCount:3,oneLevelId:t,callback:function(t){bankIdDom.innerHTML=t.value,bankIdDom.dataset.id=t.id,bankIdDom.dataset.value=t.value;var o=sessionStorage.getItem("beifen");(o=JSON.parse(o)).state=1,o.goodsType=t.value,$.ajax({type:"post",url:url_path+"/mission/update.json",data:o,dataType:"json",success:function(t){console.log(o),console.log(t),"成功"==t.msg&&location.reload()},error:function(t){console.log(t)}})},fallback:function(){console.log(1)},maskCallback:function(){console.log(2)}})});