var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 13 //地图显示的缩放级别
});
//构造路线导航类
var driving = new AMap.Driving({
    map: map,
    panel: "panel"
}); 
setTimeout(function(){
	$(".amap-logo,.amap-controls").hide();
	$(".amap-copyright,.amap-controls").css("visibility","hidden")
},500)
var mySwiper = new Swiper('.section3,.section2',{
	 onTouchMove: function(e){
            var dist=e.touches.currentY-e.touches.startY;
            if(dist<20){
				ContentUp();
            }else if(dist>20){
				ContentDown()
            }
	 }
})
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
				location.reload();
			}
		}
	});
}
function payWallt(id,userId,money,typeId){
	userId = parseInt(userId);
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
			if(data.stateCode==0){
				save(url_path,userId,money);
				window.location.href="my-order-list.html?typeId="+typeId
			}else if(data.stateCode==300){
				alert("余额不足，使用微信支付");
				
				var openid = localStorage.getItem("openid");
				var dataArray = {};
				dataArray.id = id;
				dataArray.userId = userId;
				dataArray.tradeType = "JSAPI";
				dataArray.goods_body = "wxchangepay"+Date.now().toString();
				dataArray.businessType = 1;
				dataArray.openidT = openid;
				console.log(dataArray)
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
						            	save(url_path,userId,money);
						            }
						       }
						    );   
						}
					},
					error:function(xml){
						console.log(dataArray)
					}
				})
			}
		}
	});
}
//修改订单
//$("#updateMatmoney").click(function(){
//	var matmoney = $("#updateMatmoneyInput").val();
//	var beifen = sessionStorage.getItem("beifen");
//	beifen = JSON.parse(beifen);
//	
//	var matmoney2 = beifen.matmoney;
//	var finish = parseFloat(beifen.finish)-parseFloat(matmoney2)+parseFloat(matmoney);
//	beifen.state = 1;
//	beifen.matmoney = parseFloat(matmoney);
//	beifen.finish = finish
//	
//	var typeId = beifen.typeId;
//	var id = beifen.id;
//	var money = finish;
//	updateOrder(beifen);
//	payWallt(id,userId,money,typeId);
//})
//
//$("#updateReward").click(function(){
//	var reward = $("#updateRewardInput").val();
//	var beifen = sessionStorage.getItem("beifen");
//	
//	beifen = JSON.parse(beifen);
//	var reward2 = beifen.reward;
//	var finish = parseFloat(beifen.finish)-parseFloat(reward2)+parseFloat(reward);
//	beifen.finish = finish
//	beifen.state = 1;
//	beifen.reward = parseFloat(reward);
//	
//	var id = beifen.id;
//	var money = finish;
//	var typeId = beifen.typeId;
//	updateOrder(beifen);
//	payWallt(id,userId,money,typeId);
//})
//$("#updateMessage").click(function(){
//	var message = $("#updateMessageInput").val();
//	var beifen = sessionStorage.getItem("beifen");
//	beifen = JSON.parse(beifen);
//	beifen.state = 1;
//	beifen.message = message;
//  updateOrder(beifen);
//})
//
//$("#updateAward").click(function(){
//	var award = $("#updateAwardInput").val();
//	var beifen = sessionStorage.getItem("beifen");
//	beifen = JSON.parse(beifen);
//	var award2 = beifen.award;
//	var finish = parseFloat(beifen.finish)-parseFloat(award2)+parseFloat(award);
//	finish = finish.toFixed(2);
//
//	beifen.finish = finish
//	beifen.state = 1;
//	beifen.award = parseFloat(award);
//	var id = beifen.id;
//	var money =finish;
//	var typeId = beifen.typeId;
//	updateOrder(beifen);
//	payWallt(id,userId,money,typeId);
//										
//						            	
//})
var id = window.location.href.split("listid=")[1];
//function changeReward(){
//	changeOrders("#shadow,.dialog5");
//}
//function changeMatmoney(){
//	changeOrders("#shadow,.dialog4");
//}
//function changeAward(){
//	changeOrders("#shadow,.dialog4");
//}
//function changeMessage(){
//	changeOrders("#shadow,.dialog6");
//}
//
//function changeOrders(target){
//	var beifen = sessionStorage.getItem("beifen");
//	beifen = JSON.parse(beifen);
//	beifen.state = 0;
//	$.ajax({
//		type:"post",
//		url:url_path+"/mission/update.json",
//		data:beifen,
//		dataType:"json",
//		success:function(data){
//			if(data.msg=="成功"){
//				$(target).fadeIn();
//			}
//		}
//	});
//}
function timeFormatter(value) {
    var da = new Date(parseInt(value));
    var month = da.getMonth()+1;
    if(month<10){
    	month = "0"+month
    }
    
    var dates = da.getDate();
    if(dates<10){
    	dates = "0"+dates
    }
    
    var hour = da.getHours();
    if(hour<10){
    	hour = "0"+hour
    }
    
    var minute = da.getMinutes();
    if(minute<10){
    	minute = "0"+minute
    }
    
    var second = da.getSeconds();
    if(second<10){
    	second = "0"+second
    }
    return da.getFullYear() + "-" + month + "-" + dates + " " + hour + ":" + minute + ":" + second;
}

function updateOrder(beifen){
	$.ajax({
		type:"post",
		url:url_path+"/mission/update.json",
		data:beifen,
		dataType:"json",
		async:false,
		success:function(data){
		},
		error:function(xml){
			
		}
	})
}

$(function(){
	

    setTimeout(function(){
    	$(".amap-logo,.amap-controls").hide();
    	$(".amap-copyright,.amap-controls").css("visibility","hidden")
    },500)
    
    var mySwiper = new Swiper('.section3,.section2',{
		 onTouchMove: function(e){
	            var dist=e.touches.currentY-e.touches.startY;
	            if(dist<20){
					ContentUp();
	            }else if(dist>20){
					ContentDown()
	            }
		 }
    })
	
	//打开对话框
	$("#cancle-btn").click(function(){
		shadowFadeIn();
	})
	//关闭对话框
	$("#dialog-cancle,#dialog-cancle2,.dialog-btns1").click(function(){
		shadowFadeOut()
	})
	//我要评价
	$("#access").click(function(){
		window.location.href="to-access.html?taslId="+id
	})
	//我要投诉
	$("#complain").click(function(){
		window.location.href="complain.html?taslId="+id
	})
	function shadowFadeIn(){
		$("#shadow,.cancle-dialog").fadeIn();
	}
	function shadowFadeOut(){
		$("#shadow,.dialogs").fadeOut();
	}
	//完成订单
	$("#order2-submit").click(function(){
		$("#shadow,.complete-dialog").fadeIn();
	})
	$("#dialog-sure2").click(function(){	
		completeOrder(id,userId);
		$(this).css("pointer-events","none");
		
	})
	
	
	function completeOrder(id,userId){
		var money =parseFloat($("#finish").text());
		var openid = localStorage.getItem("openid");
		id = parseInt(id);
		userId = parseInt(userId);
		var dataArray = {};
		dataArray.id = id;
		dataArray.userId = userId;
		dataArray.businessType = 1;
		dataArray.money = money;
		$.ajax({
    		type:"post",
    		url:url_path+"/mission/ok.json",
    		async:false,
    		data:{
				"id":id,
				"userId":userId
    		},
    		dataType:"json",
    		success:function(data){
    			console.log(data)
    			if(data.msg=="成功"){
					window.location.href="../../my-order-list.html"
    			}
    		},
    		error:function(){}
    	});

    	
    }
	
	//确认取消订单
	$("#dialog-sure").click(function(){
		cancleOrder(id,userId);
	})
	
	
	
	
	//取消订单
	function cancleOrder(id,userId){
    	var cancelTrue=false;
    	$.ajax({
    		type:"post",
    		url:url_path+"/mission/getUserCancelNum.json",
    		async:false,
    		data:{
    			"userId":userId
    		},
    		dataType:"json",
    		success:function(data){
    			console.log(data)
    			if(data.msg=="成功"){
    				var cancelNum = data.cancelNum;
    				if(cancelNum<4){
    					cancelTrue = true
    				}else{
    					alert("每日超过3次不能免费取消")
    					cancelTrue = false
    				}
    			}
    		},
    		error:function(){}
    	});
    	if(cancelTrue){
    		$.ajax({
    			type:"post",
    			url:url_path+"/getOrderSn.json",
    			async:false,
    			dataType:"json",
    			success:function(data){
    				console.log(data)
    				if(data.stateCode==0){
    					var refundNo = data.orderSn;
    					console.log("id:"+id);
		    			console.log("userId:"+userId);
		    			console.log("refundNo:"+refundNo);
    					$.ajax({
				    		type:"post",
				    		async:false,
				    		url:url_path+"/mission/cancel.json",
				    		data:{
				    			"id":id,
				    			"userId":userId,
				    			"refundNo":refundNo
				    		},
				    		dataType:"json",
				    		success:function(data){
				    			history.go(-1)
				    			console.log(data)
				    			if(data.stateCode==0){
				    				alert("每日免费取消次数为3次")
				    				history.go(-1)
				    			}
				    		},
				    		error:function(){
				    			history.go(-1)
				    		}
				    	});
    				}
    				
    			},
    			error:function(xml){
    				
    			}
    		});
    		
    	}
    	
    }
})
