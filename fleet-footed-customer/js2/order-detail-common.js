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
$(function(){
	var id = window.location.href.split("listid=")[1];

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
	$("#dialog-cancle").click(function(){
		shadowFadeOut()
	})
	

	function shadowFadeIn(){
		$("#shadow,.cancle-dialog").fadeIn();
	}
	function shadowFadeOut(){
		$("#shadow,.cancle-dialog").fadeOut();
	}
	//完成订单
	$("#order2-submit").click(function(){
		completeOrder(id,userId);
	})
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
	    		async:false,
	    		url:url_path+"/mission/cancel.json",
	    		data:{
	    			"id":id,
	    			"userId":userId,
	    			"refundNo":refundNo
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
})
