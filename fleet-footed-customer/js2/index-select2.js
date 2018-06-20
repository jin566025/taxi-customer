var selectContactDom = $('#startTime');
var showContactDom = $('#startTime');
var contactProvinceCodeDom = $('#contact_province_code');
var contactCityCodeDom = $('#contact_city_code');
selectContactDom.bind('click', function () {
    var sccode = showContactDom.attr('data-city-code');
    var scname = showContactDom.attr('data-city-name');
    var oneLevelId = showContactDom.attr('data-province-code');
    var twoLevelId = showContactDom.attr('data-city-code');
    var threeLevelId = showContactDom.attr('data-district-code');
    
    var iosSelect = new IosSelect(3, 
        [iosProvinces, iosCitys, iosCountys],
        {
            title: '请选择出发时间',
            itemHeight: 35,
            relation: [1, 1],
            oneLevelId: oneLevelId,
            twoLevelId: twoLevelId,
            threeLevelId: threeLevelId,
            callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                contactProvinceCodeDom.val(selectOneObj.id); 
                contactProvinceCodeDom.attr('data-province-name', selectOneObj.value);
                contactCityCodeDom.val(selectTwoObj.id);
                contactCityCodeDom.attr('data-city-name', selectTwoObj.value);

                showContactDom.attr('data-province-code', selectOneObj.id);
                showContactDom.attr('data-city-code', selectTwoObj.id);
                showContactDom.attr('data-district-code', selectThreeObj.id);
                var time_val = selectOneObj.value + ' ' + selectTwoObj.value + ':' + selectThreeObj.value;
                var start_time = getTimes(time_val);
                showContactDom.html(start_time);
                
                
                var beifen = sessionStorage.getItem("beifen");
                beifen = JSON.parse(beifen);
				beifen.state = 1;
				beifen.pickuptime = start_time;
                $.ajax({
					type:"post",
					url:url_path+"/mission/update.json",
					data:beifen,
					dataType:"json",
					success:function(data){
						console.log(beifen)
						console.log(data)
						if(data.msg=="成功"){
							//location.reload();
						}
					},
					error:function(xml){
						console.log(xml)
					}
				})
            }
    });
});		

var data = [
    {'id': '10001', 'value': '文件票据'},
    {'id': '10002', 'value': '办公用品'},
    {'id': '10003', 'value': '日用品'},
    {'id': '10004', 'value': '酒水'},
    {'id': '10005', 'value': '水果'},
    {'id': '10006', 'value': '生鲜'},
    {'id': '10007', 'value': '蛋糕'},
    {'id': '10008', 'value': '其他'}
];
var showBankDom = document.querySelector('#showBank');
var bankIdDom = document.querySelector('#goodsType');
showBankDom.addEventListener('click', function () {
    var bankId = showBankDom.dataset['id'];
    var bankName = showBankDom.dataset['value'];

    var bankSelect = new IosSelect(1, 
        [data],
        {
            container: '.container',
            title: '选择物品类型',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom.innerHTML = selectOneObj.value;
                bankIdDom.dataset['id'] = selectOneObj.id;
                bankIdDom.dataset['value'] = selectOneObj.value;
                var beifen = sessionStorage.getItem("beifen");
                beifen = JSON.parse(beifen);
				beifen.state = 1;
				beifen.goodsType = selectOneObj.value;
			
                $.ajax({
					type:"post",
					url:url_path+"/mission/update.json",
					data:beifen,
					dataType:"json",
					success:function(data){
						console.log(beifen)
						console.log(data)
						if(data.msg=="成功"){
							location.reload();
						}
					},
					error:function(xml){
						console.log(xml)
					}
				})
            },
            fallback: function () {
                console.log(1);
            },
            maskCallback: function () {
                console.log(2);
            }
    });
});