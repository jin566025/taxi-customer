function returnState(t,s,e){var a=[];return 1==t?(a[0]="未接单",a[1]="30分钟内未接单，将自动取消"):7==t?(a[0]="已取消",a[1]="已取消订单"):2==t?(a[0]="已接单",a[1]="司机正在派送的路上",3!=e&&4!=e&&5!=e||(a[1]="司机正在赶来路上，请耐心等待")):3==t?(a[0]="已完成",0==s?a[1]="未评价，请前去评价":1==s?a[1]="用户已评价":2!=s&&3!=s||(a[1]="司机已评价")):4==t?(a[0]="投诉中",a[1]="等待平台审核投诉"):5==t?(a[0]="结算中",a[1]="正在结算"):6==t?(a[0]="强制中止",a[1]="已强制中止订单"):7==t?(a[0]="强制中止",a[1]="已强制中止订单"):0==t?(a[0]="修改订单",a[1]="正在修改订单"):9==t&&(a[0]="司机不可取消",a[1]="司机不可取消"),a}function timeFormatter(t){var s=new Date(parseInt(t));return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()}function showList(t,s,e){$.ajax({type:"post",url:url_path+"/mission/byUserList.json",data:{userId:t,pageNo:s,pageSize:e},dataType:"json",success:function(t){if(console.log(t),"成功"==t.msg){var s,e,a=t.listDTO;$(".list1,.list2,.list3,.list4").html(""),$("#shadow").fadeOut(500),$("#getAddress").fadeOut(500);for(var i=0;i<a.length;i++){0==a.length?$(".addmore").html("暂无数据"):$(".addmore").html("加载完毕"),s=returnState(a[i].state,a[i].commentstate,a[i].typeId),e=timeFormatter(a[i].startTime);var d=a[i].deliveryAddress;d||(d="未填写，由司机决定");var l='<div class="list-main  list-main1 typeId'+a[i].typeId+'" data-listid='+a[i].id+" data-state="+a[i].state+" id=order"+a[i].id+'><div class="order-list-time">下单时间：'+e+'</div><div class="list-main-container"><div class="status clearfix"><div class="status-left fl">'+s[0]+'</div><div class="status-right fr">'+s[1]+'</div></div><div class="lists-content flex-box"><img class="alarm-img" src="img2/alarm.png" /><div class="alarm">'+e+'</div></div><div class="start-end flex-box"><div class="start-end-left flex-box"><a class="circles strat-circle"></a><div class="start-end-detail">'+d+'</div></div><div class="start-end-right"></div></div><div class="start-end flex-box"><div class="start-end-left flex-box"><a class="circles end-circle"></a><div class="start-end-detail">'+a[i].taskAddress+'</div></div><div class="start-end-right"></div></div></div></div>';1==a[i].typeId?$(".list1").append(l):2==a[i].typeId?$(".list2").append(l):3==a[i].typeId?$(".list3").append(l):4!=a[i].typeId&&5!=a[i].typeId||$(".list4").append(l)}}},error:function(){}})}