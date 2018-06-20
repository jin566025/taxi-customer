$(function(){
    setTimeout(function(){
    	$(".amap-logo,.amap-controls").hide();
    	$(".amap-copyright,.amap-controls").css("visibility","hidden")
    },500)

    var id = window.location.href.split("=")[1];
    var orderDetail;
    function timeFormatter(value) {
	    var da = new Date(parseInt(value));
	    return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getMinutes() + ":" + da.getSeconds();
	}
    loadOrderDetail(id)
    function loadOrderDetail(id){
    	$.ajax({
	    	type:"post",
	    	url:url_path+"/mission/info.json",
	    	data:{
	    		"id":id
	    	},
	    	dataType:"json",
	    	success:function(data){
	    		console.log(data)
	    		if(data.msg=="成功"){
	    			orderDetail = data;
	    			
	    			
	    			var state = data.state;
	    			var typeId = data.typeId;
	    			var award = data.award;
	    			var finish = data.finish;
	    			var message = data.message;
	    			var goodType = data.goodsType;
	    			var driverNickname = data.driverNickname;
	    			var matmoney = data.matmoney;
	    			var reward = data.reward;
    				$(".main-content"+state+"").show();
    				
    				sessionStorage.setItem("driverId",data.driverId);
    				var pickupTime = timeFormatter(data.pickupTime)
    				if(state==2){
    					$("#main-content2-finish").html(award);
    					$("#main-content2-award").html(finish);
    					$("#main-content2-pickupTime").html(pickupTime);
    					$("#main-content2-message").html(message);
    					$("#main-content2-type").html(goodType);
    					$("#main-content2-name").html(driverNickname);
    					$("#main-content2-head").attr("src",data.driverImgUrl);
    					$("#main-content2-driverGrade").html(data.driverGrade);
    					$("#main-content2-driverCarNum").html(data.driverCarNum);
    					$(".driverTel").attr("href","tel:"+data.driverTel+"");
    					if(typeId==1){
    						$(".types2").hide();
    					}else if(typeId==2){
    						$(".types1").hide();
    						$(".main-top-content-p3").hide();
    						$("#main-content2-award").html(reward);
    						$(".dzzj").html(matmoney)
    					}else if(typeId==3){
    						$("#main-top").hide();
	    					$("#main-mid").hide();
	    					$(".section2").hide();
	    					$(".main2").removeClass("section3");
	    					$(".tocomplain").remove();
	    					$(".order2-mid-navs").css("width","50%")
    					}
    				}else if(state ==1){
    					if(typeId ==1 ){
	    					$(".types2").hide();
	    					$("#main-content2-finish").html(award);
	    					$("#main-content2-award").html(finish);
	    					$(".main-top-container2-input").hide()
	    				}else if(typeId==2){
	    					$("#main-bottom").css("margin-top","10px");
	    					$(".main-top-container").hide();
	    					$(".main-top-content-p3").hide();
	    					$("#main-mid").hide();
	    					$(".main-top-container3").removeClass("hide");
	    					$(".main-top-container3-p1").show();
	    					$(".main-top-container2-price").html(matmoney).attr("changid","1");
	    					$(".main-top-container2-input").val(message);
	    					$(".edit").show();
	    				}else if(typeId==3){
	    					$("#main-top").hide();
	    					$("#main-mid").hide();
	    					$(".section2").hide();
	    					$(".main2").removeClass("section3");
	    					$(".tocomplain").remove();
	    					$(".order2-mid-navs").css("width","50%")
	    				}
    				}else if(state==3){
    					$("#main-content3-finish").html(finish);
    					$("#main-content3-award").html(award);
    					$("#main-content3-time").html(pickupTime);
    					$("#main-content3-message").html(message);
    					$("#main-content3-type").html(goodType);
    					$("#main-content3-name").html(driverNickname);
    					$("#main-content3-head").attr("src",data.driverImgUrl);
    					$("#main-content3-grade").html(data.driverGrade);
    					$("#main-content3-carnum").html(data.driverCarNum);
    					$(".driverTel").attr("href","tel:"+data.driverTel+"");
    					if(typeId==1){
    						$(".main2-section-p-container1").hide()
    					}else if(typeId==2){
    						$(".main2-section-p-container1-price").html(matmoney);
    						$(".main2-section-p-container1-message").html(message);
    						$(".main-top-content-p3").hide();
    						$(".main2-section-p-container2").hide();
    						$('#main-content3-finish').html(finish)
    					}else if(typeId==3){
    						$(".main").removeClass("section3");
    						$(".section2").hide()
    					}
    				}else if(state ==9){
    					
    				}
    				
	    			var deliveryAddressLatitude = data.deliveryAddressLatitude;
	    			var deliveryAddressLongitude = data.deliveryAddressLongitude;
	    			
	    			var goodsType = data.goodsType;
	    			var award = data.award;
	    			var finish = data.finish;
	    			var taskAddressLatitude = data.taskAddressLatitude;
	    			var taskAddressLongitude = data.taskAddressLongitude;
	    			
	    			driving.search(new AMap.LngLat(deliveryAddressLongitude, deliveryAddressLatitude), new AMap.LngLat(taskAddressLongitude, taskAddressLatitude));
				    $("#goodsType").html(goodsType);
				    $("#reward").html(award);
				    $("#message").html(data.message);
				    $("#matmoney").html(finish)
	    		}
	    	},
	    	error:function(){}
	    });
    }
    $(".main-top-container2-price").click(function(){
    	var changeId = $(this).attr("changid");
    	if(changeId==1){
    		$(".dialog4").fadeIn();
    		$("#shadow").fadeIn();
    	}
    })
    $(".dialog-btns1 ").click(function(){
    	$("#shadow").fadeOut(500);
		$(".dialogs").fadeOut(500)
    })
    //修改订单
//  $(".dialog4-sure").click(function(){
//  	var dialog4_input = $("#dialog4-input").val
//  	if(dialog4_input){
//  		var dataArray = {};
//  		dataArray.matmoney = dialog4_input;
//  		dataArray.deliveryAddress = orderDetail.deliveryAddress;
//  		dataArray.deliveryAddressLatitude = orderDetail.deliveryAddressLatitude;
//  		dataArray.deliveryAddressLongitude = orderDetail.deliveryAddressLongitude;
//  		dataArray.message = orderDetail.message;
//  		dataArray.reward = orderDetail.reward;
//  		dataArray.taskAddress = orderDetail.taskAddress;
//  		dataArray.taskAddressLatitude = orderDetail.taskAddressLatitude;
//  		dataArray.taskAddressLongitude = orderDetail.taskAddressLongitude;
//  	}
//  	
//  	
//  })
    $(".edit").click(function(){
    	$(".dialog5").fadeIn();
    	$("#shadow").fadeIn();
    })
    //完成订单
    $("#main-content2-submit").click(function(){
		$("#shadow").fadeIn(500);
		$(".dialog2").fadeIn(500)
    })
    $(".dialog-sure1").click(function(){
    	completeOrder(id,userId);
    })
    //取消订单
    $(".cancle-orders").click(function(){
    	$("#shadow").fadeIn(500);
		$(".dialog3").fadeIn(500)
    })
    $(".dialog-sure2").click(function(){
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
	    		async:false,
	    		url:url_path+"/mission/cancel.json",
	    		data:{
	    			"id":id,
	    			"userId":userId
	    		},
	    		dataType:"json",
	    		success:function(data){
	    			console.log(data)
	    			if(data.msg=="成功"){
	    				alert("每日免费取消次数为3次")
	    				history.go(-1)
	    			}
	    		},
	    		error:function(){}
	    	});
    	}
    	
    }
    
    
    //完成订单
    function completeOrder(id,userId){
    	
    	$.ajax({
    		type:"post",
    		url:url_path+"/mission/ok.json",
    		async:true,
    		data:{
				"id":id,
				"userId":userId
    		},
    		dataType:"json",
    		success:function(data){
    			if(data.msg=="成功"){
    				window.location.href="to-access.html?taslId="+id
    			}
    		},
    		error:function(){}
    	});
    }
    $(".complete-order").click(function(){
    	completeOrder(id,userId);
    })
    $(".toaccesss").click(function(){
    	window.location.href = 'to-access.html?taslId='+id
    })
    $(".tocomplain").click(function(){
    	var driverId = sessionStorage.getItem("driverId");
    	setTimeout(function(){
    		window.location.href = 'complain.html?taslId='+id+'='+driverId
    	},500)
    	
    })
})