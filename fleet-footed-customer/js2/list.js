function returnState(s,c,t){
	var state=[];
	if(s==1){
		state[0] = "未接单";
		state[1] = "30分钟内未接单，将自动取消";
	}else if(s==7){
		state[0] = "已取消";
		state[1] = "已取消订单";
	}else if(s==2){
		state[0] = "已接单";
		state[1] = "司机正在派送的路上";
		if(t==3 || t==4 || t==5){
			state[1] = "司机正在赶来路上，请耐心等待"
		}
		
		
	}else if(s==3){
		state[0] = "已完成";
		if(c==0){
			state[1] = "未评价，请前去评价";
		}else if(c==1){
			state[1] = "用户已评价";
		}else if(c==2 || c==3){
			state[1] = "司机已评价";
		}
	}else if(s==4){
		state[0] = "投诉中";
		state[1] = "等待平台审核投诉";
	}else if(s==5){
		state[0] = "结算中";
		state[1] = "正在结算";
	}else if(s==6){
		state[0] = "强制中止";
		state[1] = "已强制中止订单";
	}else if(s==7){
		state[0] = "强制中止";
		state[1] = "已强制中止订单";
	}else if(s==0){
		state[0] = "修改订单";
		state[1] = "正在修改订单";
	}else if(s==9){
		state[0] = "司机不可取消";
		state[1] = "司机不可取消";
	}
	
	
	return state;
}
function timeFormatter(value) {
    var da = new Date(parseInt(value));
    return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getMinutes() + ":" + da.getSeconds();
}
function showList(userId,pageNo,pageSize){
	
	$.ajax({
		type:"post",
		url:url_path+"/mission/byUserList.json",
		data:{
			"userId":userId,
			"pageNo":pageNo,
			"pageSize":pageSize
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.msg=="成功"){
				var list = data.listDTO;
				$(".list1,.list2,.list3,.list4").html("")
				$("#shadow").fadeOut(500);
				$("#getAddress").fadeOut(500)
				var state,dateTime;
				for(var i=0;i<list.length;i++){
					state = returnState(list[i].state,list[i].commentstate,list[i].typeId)
					dateTime = timeFormatter(list[i].startTime)
					var deliveryAddress = list[i].deliveryAddress;
					if(deliveryAddress){
						
					}else{
						deliveryAddress="未填写，由司机决定"
					}
					var typeId = list[i].typeId
					var html =  '<div class="list-main  list-main1 typeId'+typeId+'" data-listid='+list[i].id+' data-state='+list[i].state+' id=order'+list[i].id+'>'+
									'<div class="order-list-time">下单时间：'+dateTime+'</div>'+
									'<div class="list-main-container">'+
										'<div class="status clearfix">'+
											'<div class="status-left fl">'+state[0]+'</div>'+
											'<div class="status-right fr">'+state[1]+'</div>'+
										'</div>'+
										'<div class="lists-content flex-box">'+
											'<img class="alarm-img" src="img2/alarm.png" />'+
											'<div class="alarm">'+dateTime+'</div>'+
										'</div>'+
										'<div class="start-end flex-box">'+
											'<div class="start-end-left flex-box">'+
												'<a class="circles strat-circle"></a>'+
												'<div class="start-end-detail">'+deliveryAddress+'</div>'+
											'</div>'+
											'<div class="start-end-right"></div>'+
										'</div>'+
										'<div class="start-end flex-box">'+
											'<div class="start-end-left flex-box">'+
												'<a class="circles end-circle"></a>'+
												'<div class="start-end-detail">'+list[i].taskAddress+'</div>'+
											'</div>'+
											'<div class="start-end-right"></div>'+
										'</div>'+
									'</div>'+
								'</div>';
					if(list[i].typeId==1){
						$(".list1").append(html)
					}else if(list[i].typeId==2){
						$(".list2").append(html)
					}else if(list[i].typeId==3){
						$(".list3").append(html)
					}else if(list[i].typeId==4 || list[i].typeId==5){
						$(".list4").append(html)
					}
				}
				
			}
		},
		error:function(){}
	});
}
