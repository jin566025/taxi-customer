$(function(){
	$.ajax({
		type:"post",
		url:url_path+"/getIndex.json",
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.msg=="成功"){
				for(var i=0;i<data.adDTOList.length;i++){
					var html = '<div class="swiper-slide">'+
					            	'<img data-adId='+data.adDTOList[i].adId+' src="'+data.adDTOList[i].adPicUrl+'" />'+
					            '</div>';
					$(".swiper-wrapper").append(html)
				}
			}
		},
		error:function(){}
	});
	$.ajax({
		type:"post",
		url:url_path+"/mission/regulation.json",
		data:{
			"id":1
		},
		dataType:"json",
		success:function(data){
			if(data.stateCode==0){
				var Regulation1 = data
//				Regulation1.initialMileage=.initialMileage;
//				Regulation1.initialMoney = data.initialMoney;
//				Regulation1.valuation = data.valuation;
//				Regulation1 = JSON.stringify(Regulation1)
				sessionStorage.setItem("Regulation1",Regulation1)
			}
			
		}
	});
	$.ajax({
		type:"post",
		url:url_path+"/mission/regulation.json",
		data:{
			"id":2
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.stateCode==0){
				var Regulation2 = data;
//				Regulation2.initialMileage=data.initialMileage;
//				Regulation2.initialMoney = data.initialMoney;
//				Regulation2.valuation = data.valuation;
//				Regulation2 = JSON.stringify(Regulation2)
				sessionStorage.setItem("Regulation2",Regulation2)
			}
		}
	});

	//送取件
	$("#typeID1").click(function(){
		typeId1();
		$(this).css("pointer-events","none")
		var that = this;
		setTimeout(function(){
			$(that).css("pointer-events","visible");
		},2000)
	})
	//代购
	$(".main2-btn").click(function(){
		var daigoumsg = $(".main2-textarea").val();
		sessionStorage.setItem("daigoumsg",daigoumsg);
		var toaddress3 = sessionStorage.getItem("toaddress3");
		if(!toaddress3){
			alert("请填写收货信息")
			
		}else if(daigoumsg=="" || daigoumsg=="null" || daigoumsg=="undefined"){
			alert("请填写购买信息")
		}else{
			setTimeout(function(){
				window.location.href = "pages2/my-order-list/type1-order2.html?typeId=2"
			},500)
		}
		
		
	})
	//获取代驾套餐列表
	getSetMeal();
	function getSetMeal(){
		$.ajax({
			type:"post",
			url:url_path+"/mission/getSetMeal.json",
			dataType:"json",
			success:function(data){
				console.log(data)
				if(data.msg=="成功"){
					var list = data.list;
					for(var i=0;i<list.length;i++){
						var title_time,str,day_str,tc_str;
						if(list[i].hour<24){
							title_time = list[i].hour;
							str="小时"
						}else{
							title_time = list[i].day;
							str="天"
						}
						if(list[i].day){
							day_str = list[i].day+'天='
						}else{
							day_str="";
						}
						
						if(list[i].name){
							tc_str = list[i].name
						}else{
							tc_str=""
						}
						var html = '<div class="dj2-section flex-box" data-setid='+list[i].id+'>'+
										'<a class="setMealName">'+list[i].name+'</a>'+
										'<div class="dj2-sections dj2-sections1">'+
											'<a>'+title_time+'</a>'+
											'<a>'+str+'</a>'+
										'</div>'+
										'<div class="dj2-sections dj2-sections2">'+
											'<p>'+
												'<a class="dj2-sections2-a1 dj2-sections2-a4">'+day_str+list[i].hour+'小时        </a>'+
												'<a class="dj2-sections2-a1 dj2-sections2-a3">'+list[i].money+'元起</a>'+
											'</p>'+
											'<p class="dj2-sections2-a2">'+tc_str+'</p>'+
										'</div>'+
										'<img class="dj2-sections dj2-sections3" src="img2/toRight2.png" />'+
									'</div>';
						$(".dj2-content").append(html)
					}
				}
			}
		});
	}
	//打车
	$(".main3-btn").click(function(){
		typeId3();
		$(this).css("pointer-events","none");
		var that = this;
		setTimeout(function(){
			$(that).css("pointer-events","visible");
		},2000)
	})
	$(".main3-distance").on('DOMNodeInserted',function(){
		$("#shadow,#getAddress").fadeOut(500)
        typeId33();
        $(this).css("pointer-events","none")
        var that = this;
		setTimeout(function(){
			$(that).css("pointer-events","visible");
		},2000)
    })
	//日常代驾
	function daijia(){
		var toaddress7 = JSON.parse(sessionStorage.getItem("toaddress7"));
		if(toaddress7){
			var deliveryAddress = toaddress7.addressName;
			var deliveryAddressLongitude = toaddress7.addressLng;
			var deliveryAddressLatitude = toaddress7.addressLat;
		}else{
			alert("请填写完整起始地");
			return false;
		}
		var toaddress8 = JSON.parse(sessionStorage.getItem("toaddress8"));
		if(toaddress8){
			var taskAddress = toaddress8.addressName;
			var taskAddressLongitude = toaddress8.addressLng;
			var taskAddressLatitude = toaddress8.addressLat;
		}else{
			alert("请填写完整出发地");
			return false;
		}
		
		
		var districtId = localStorage.getItem("districtId");
		var cityId = localStorage.getItem("cityId");
		
		var finish = $("#main4-finish").text();
		var award = $("#main4-award").text();
		var reward = $("#main4-reward").text();
		var distance = $("#main4-distance").text();
		var typeId = 4;
		var dataArray = {};
		dataArray.districtId = districtId;
		dataArray.cityId = cityId;
		if(typeId){
			dataArray.typeId = typeId;
		}
		if(deliveryAddress){
			dataArray.deliveryAddress = deliveryAddress;
		}
		if(deliveryAddressLongitude){
			dataArray.deliveryAddressLongitude = deliveryAddressLongitude;
		}
		if(deliveryAddressLatitude){
			dataArray.deliveryAddressLatitude = deliveryAddressLatitude;
		}
		if(taskAddress){
			dataArray.taskAddress = taskAddress;
		}
		if(taskAddressLongitude){
			dataArray.taskAddressLongitude = taskAddressLongitude;
		}
		if(taskAddressLatitude){
			dataArray.taskAddressLatitude = taskAddressLatitude;
		}
		if(finish){
			dataArray.finish = finish;
		}
		if(award){
			dataArray.award = award;
		}
		if(reward){
			dataArray.reward = reward;
		}
		if(distance){
			dataArray.distance = distance;
		}
		dataArray.userId = userId;
		console.log(dataArray)
		$.ajax({
			type:"post",
			url:url_path+"/mission/save.json",
			data:dataArray,
			dataType:"json",
			success:function(data){
				console.log(data)
				if(data.msg=="成功"){
					var money = data.finish;
					var id = data.id;
					payWallt(id,userId,money,typeId);
				}
			}
		});
	}
	$(".main4-footer-submit").click(function(){
		daijia();
		$(this).css("pointer-events","none");
		var that = this;
		setTimeout(function(){
			$(that).css("pointer-events","visible");
		},2000)
	})
	function typeId33(){
		var districtId = localStorage.getItem("districtId");
		var cityId = localStorage.getItem("cityId");
		var distance = parseFloat($(".main3-distance").text());
        var typeId = 3;
        var finish=0;
        var toaddress5 = JSON.parse(sessionStorage.getItem("toaddress5"));
        var deliveryAddress = toaddress5.addressName;
		var deliveryAddressLongitude = toaddress5.addressLng;
		var deliveryAddressLatitude = toaddress5.addressLat;
		var toaddress6 = JSON.parse(sessionStorage.getItem("toaddress6"));
		var taskAddress = toaddress6.addressName;
		var taskAddressLongitude = toaddress6.addressLng;
		var taskAddressLatitude = toaddress6.addressLat;
        $.ajax({
			url:url_path+"/mission/save.json",
			type:"post",
			async:false,
			data:{
				"typeId":typeId,
				"deliveryAddress":deliveryAddress,
				"deliveryAddressLongitude":deliveryAddressLongitude,
				"deliveryAddressLatitude":deliveryAddressLatitude,
				"taskAddress":taskAddress,
				"taskAddressLongitude":taskAddressLongitude,
				"taskAddressLatitude":taskAddressLatitude,
				"finish":finish,
				"userId":userId,
				"distance":distance,
				"districtId":districtId,
				"cityId":cityId
			},
			dataType:"json",
			success:function(data){
				if(data.msg=="成功"){
					window.location.href = "my-order-list.html"
					//payWallt(id,userId,money,typeId);
				}
			},
			error:function(){}
		})
	}
	function typeId3(){
		var toaddress5 = JSON.parse(sessionStorage.getItem("toaddress5"));
		if(toaddress5){
			var deliveryAddressLongitude = toaddress5.addressLng;
			var deliveryAddressLatitude = toaddress5.addressLat;
		}else{
			alert("请填写出发地址");
			return false;
		}
		var toaddress6 = JSON.parse(sessionStorage.getItem("toaddress6"));
		if(toaddress6){
			var taskAddressLongitude = toaddress6.addressLng;
			var taskAddressLatitude = toaddress6.addressLat;
		}else{
			alert("请填写目的地地址");
			return false;
		}
		$("#shadow,#getAddress").fadeIn(500)
		driving.search(new AMap.LngLat(deliveryAddressLongitude, deliveryAddressLatitude), new AMap.LngLat(taskAddressLongitude, taskAddressLatitude));
		setTimeout(function(){
			var distance = $(".planTitle p").text();
			var pattern =new RegExp("\\((.| )+?\\)","igm");
			distance = distance.match(pattern)[0];
			var reg = /[^\d\.]/g;
			distance = distance.replace( reg, '' );
			$(".main3-distance").html(distance);
		},500)
		
	}
	function getDayString(time){
		var times = time.split("/");
		var year = times[0];
		var month = parseInt(times[1]);
		var day = parseInt(times[2]);
		if(month<10){
			month = "0"+month
		}
		if(day<10){
			day = "0"+day
		}
		return year+"-"+month+"-"+day
	}

	
	function typeId1(){
		var typeId = 1;
		var deliveryAddress,deliveryAddress,taskAddress,taskAddressLongitude,taskAddressLatitude,deliveryAddressLongitude,deliveryAddressLatitude,pickuptime,goodsType,message,finish,award,taskRealname,taskTel,deliveryRealname,deliveryTel;
		var toaddress1 = JSON.parse(sessionStorage.getItem("toaddress1"));
		var toaddress2 = JSON.parse(sessionStorage.getItem("toaddress2"));
		var dataArray = {};
		
		var districtId = localStorage.getItem("districtId");
		var cityId = localStorage.getItem("cityId");
		//发货信息
		if(toaddress1){
			deliveryAddress = toaddress1.pickerInput2 +" "+ toaddress1.addressInput;
			deliveryAddressLongitude = toaddress1.lng;
			deliveryAddressLatitude = toaddress1.lat;
			deliveryRealname = toaddress1.nameInput;
			deliveryTel = toaddress1.mobileInput;
		}else{
			alert("请填写完整发货信息");
			return false;
		}
		//收货信息
		if(toaddress2){
			taskAddress = toaddress2.pickerInput2 +" "+ toaddress2.addressInput;
			taskAddressLongitude = toaddress2.lng;
			taskAddressLatitude = toaddress2.lat;
			taskRealname = toaddress2.nameInput;
			taskTel = toaddress2.mobileInput;
		}else{
			alert("请填写完整收货信息");
			return false;
		}
		
		pickuptime = $("#suId").val()//取件时间
		console.log(pickuptime);
		if(pickuptime.length==51){
			alert("请选择取件时间");
			return false;
		}
		goodsType = $("#showBank").text();

		if(goodsType.length==56){
			alert("请选择物品类型");
			return false;
		}
		message = $("#message").val();//备注信息
		finish = parseFloat($("#finish-price").text());//总金额
		award = parseFloat($("#award").val());//红包
		if(!award){
			alert("请输入红包金额");
			return false;
		}
		var distance = $("#distance").text();

		$.ajax({
			type:"post",
			url:url_path+"/mission/save.json",
			dataType:"json",
			async:false,
			data:{
				"typeId":typeId,
				"deliveryAddress":deliveryAddress,
				"taskAddress":taskAddress,
				"taskAddressLongitude":taskAddressLongitude,
				"taskAddressLatitude":taskAddressLatitude,
				"deliveryAddressLongitude":deliveryAddressLongitude,
				"deliveryAddressLatitude":deliveryAddressLatitude,
				"pickuptime":pickuptime,
				"goodsType":goodsType,
				"message":message,
				"finish":finish,
				"award":award,
				"taskRealname":taskRealname,
				"taskTel":taskTel,
				"deliveryRealname":deliveryRealname,
				"deliveryTel":deliveryTel,
				"userId":userId,
				"distance":distance,
				"districtId":districtId,
				"cityId":cityId
			},
			success:function(data){
				if(data.msg=="成功"){
					var money = data.finish;
					var id = data.id;
					payWallt(id,userId,money,typeId);
				}
			},
			error:function(err){
				console.log(err)
			}
		});
	}
	function save(url_path,userId,money){
		$.ajax({
			type:"post",
			url:url_path+"/user/saveAccountstream.json",
			data:{
				"userId":userId,
				"money":money,
				"useraccountOperationType":1,
				"useraccountMode":1
			},
			async:false,
			dataType:"json",
			success:function(data){
				if(data.msg=="成功"){
					window.location.href="http://taxicustomer.nbzhidun.com/my-order-list.html"
				}
			}
		});
	}
	function payWallt(id,userId,money,typeId){
		userId = parseInt(userId);
		money=  parseFloat(money)
		$.ajax({
			type:"post",
			url:url_path+"/pay/wallet.json",
			data:{
				"id":id,
				"userId":userId,
				"businessType":1,
				"money":money
			},
			async:false,
			dataType:"json",
			success:function(data){
				if(data.msg=="成功"){
					save(url_path,userId,money);
					window.location.href="my-order-list.html?typeId="+typeId
				}else if(data.stateCode==300){
					alert("余额不足，使用微信支付");
					$("#loadingimg,#shadow2").fadeIn();
					var openid = localStorage.getItem("openid");
					var dataArray = {};
					dataArray.id = id;
					dataArray.userId = userId;
					dataArray.tradeType = "JSAPI";
					dataArray.goods_body = "wxpay";
					dataArray.businessType = 1;
					dataArray.openidT = openid;
					console.log(dataArray);
					$.ajax({
						url:url_path+"/pay/weixinprepaid.json",
						type:"post",
						data:dataArray,
						dataType:"json",
						async:false,
						success:function(data){
							console.log(data)
							if(data.msg=="成功"){
								$("#loadingimg,#shadow2").fadeOut();
								var param = data.resInfo;
								var timeStamp = param.timeStamp.toString();
								var package = param.package;
								var noncestr = param.nonceStr;
								var sign = param.paySign;
								var signType = param.signType;
								var appid = param.appId;
								WeixinJSBridge.invoke(
							       'getBrandWCPayRequest', {
							           "appId":appid,               //公众号名称，由商户传入     
							           "timeStamp":timeStamp,       //时间戳，自1970年以来的秒数     
							           "nonceStr":noncestr,         //随机串     
							           "package":package,     
							           "signType":signType,         //微信签名方式：     
							           "paySign":sign               //微信签名 
							       },
							       function(res){
							            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
							            	save(url_path,userId,money)
							            }
							       }
							    );   
							}
						},
						error:function(xml){
							console.log(dataArray)
							console.log(xml)
						}
					})
				}
			}
		});
	}
})