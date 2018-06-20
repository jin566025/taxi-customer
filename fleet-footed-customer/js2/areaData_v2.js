var iosProvinces = [
    {'id': '110000', 'value': '今天', 'parentId': '0'},
    {'id': '120000', 'value': '明天', 'parentId': '0'},
    {'id': '130000', 'value': '后天', 'parentId': '0'},

];
var iosCitys = [];
for(var i=0;i<iosProvinces.length;i++){
	for(var j=0;j<24;j++){	
		var iosCitysArray = {};
		var j2 = j+1;
		if(j2<10){
			j2 = "0"+j2
		}else{
			j2 = j2
		}	
		iosCitysArray.id = "1"+(i+1)+""+j2+"00";
		iosCitysArray.value = j2;
		iosCitysArray.parentId = "1"+(i+1)+"0000";
		iosCitys.push(iosCitysArray)
	}
}
var iosCountys = []
for(var c=0;c<iosCitys.length;c++){
	for(var d=0;d<60;d++){
		var iosCountysArray = {};
		var d2 = d+1;

		if(d2<10){
			d2= "0"+d2
		}else{
			d2=d2
		}
		var parent_id = iosCitys[c].id
		var parents = parent_id.substring(0,4);
		iosCountysArray.parentId = parent_id;
		iosCountysArray.id = parents+d2;
		iosCountysArray.value = d2;

		iosCountys.push(iosCountysArray);	
	}
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

function getTimes(val){
	var day = val.substring(0,2);
	var day2 = val.substring(3)+":00";
	var time2 = new Date();
	var time;
	if(day=="今天"){
		
	}else if(day=="明天"){
		time2 = new Date(time2.getTime()+24*60*60*1000)
	}else if(day=="后天"){
		time2 = new Date(time2.getTime()+48*60*60*1000)
	}
	time2 = getDayString(time2.toLocaleDateString())
	time = time2 +" "+ day2
	return time;
}
