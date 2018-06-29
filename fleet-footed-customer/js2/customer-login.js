$(function(){
	
	function getCodeReturn(){
		$.ajax({
			type:"post",
			url:url_path+"/wx/queryAppId.json",
			dataType:"json",
			success:function(data){
				if(data.msg=="成功"){
					var appId = data.appId;
					var appSecret = data.appSecret;
					sessionStorage.setItem("appSecret",appSecret);
					sessionStorage.setItem("appId",appId);
					var code = sessionStorage.getItem("code");
					var hrefs = window.location.href.split("userOpenid=")[1]
					if(hrefs){
						var userOpneid = hrefs.split("?type=")[0];
						var userType = hrefs.split("?type=")[1];
						sessionStorage.setItem("userOpneid",userOpneid);
						sessionStorage.setItem("userType",userType);
					}
					
					if(code=="undefined" || code=="null"){
						window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri=http%3a%2f%2ftaxicustomer.nbzhidun.com%2findex.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
					}	
				}
			},
			error:function(){}
		})
	}
	
	function getCode(){
		var codeStr = window.location.href.split("code=")[1];
		if(codeStr){
			var code = codeStr.split("&")[0];
		}
		
		sessionStorage.setItem("code",code);
		if(code){
			
			$.ajax({
				type:"post",
				url:url_path+"/getAccessToken.json",
				data:{
					"code":code
				},
				dataType:"json",
				async:false,
				success:function(data){
					console.log(data)
					var openid = data.openid;
					sessionStorage.setItem("openid",openid);
					localStorage.setItem("openid",openid);
					localStorage.setItem("token",data.token);
					var userOpneid = sessionStorage.getItem("userOpneid");
					var userType = sessionStorage.getItem("userType");
					if(userOpneid){
						$.ajax({
							type:"post",
							url:url_path+"/saveSubordinate.json",
							async:false,
							data:{
								"userOpneid":userOpneid,
								"type":userType,
								"openid":openid
							},
							dataType:"json",
							success:function(data){
								alert(data);
							}
						});
					}
					
					$.ajax({
						type:"post",
						url:url_path+"/user/loginOauth.json",
						async:false,
						data:{
							"userOpenid":openid
						},
						dataType:"json",
						success:function(data){
							if(data.msg=="成功"){
								var nickname = data.nickname;
								var score = data.score;
								var userId = data.userId;
								var userImg = data.userImg;
								
								localStorage.setItem("usernickname",nickname);
								localStorage.setItem("userscore",score);
								localStorage.setItem("userId",userId);
								localStorage.setItem("userImg",userImg);
							}
						}
					});
				}
			});
		}
		
	}
	
	
	var userId = localStorage.getItem("userId");
	if(!userId){
		getCodeReturn();
		getCode();
	}
	
	var hasLogin = localStorage.getItem("hasLogin");
	var openid = localStorage.getItem("openid");
	if(hasLogin && openid){
		window.location.href="index2.html"
	}
	
	$(".login-btn").click(function(){
		login(url_path);
	})
	$("#send-yzm").click(function(){
		getLoginSMS(url_path);
	})

	function login(url){
		
		var username = $("#username").val();
		var validateCode = $("#ymz").val();
		if(!isPhoneNo(username)){
			$("#tips1").css("visibility","visible").html("请输入正确的手机号码")
		}else if(validateCode==""){
			$("#tips2").css("visibility","visible").html("请输入验证码")
		}else{
			$.ajax({
				type:"post",
				url:url+"/user/login.json",
				data:{
					"username":username,
					"validateCode":validateCode
				},
				dataType:"json",
				success:function(data){
					if(data.msg=="用户不存在"){
						$("#tips1").css("visibility","visible").html(data.msg)
						$("#tips2").css("visibility","hidden").html("")
					}else if(data.msg=="成功"){
						localStorage.setItem("hasLogin",true);
						window.location.href="index2.html";
						
					}else{
						$("#tips1").css("visibility","visible").html(data.msg)
						$("#tips2").css("visibility","hidden").html("")
					}
				}
			});
		}
		
	}
	function getLoginSMS(url){
		var phoneNumber = $("#username").val();
		console.log(phoneNumber)
		if(isPhoneNo(phoneNumber)){
			$("#tips1").css("visibility","hidden");
			var time = 60;
			$("#send-yzm").addClass("disabled")
			var TimeInterVal = setInterval(function(){
				time = time-1;
				$("#send-yzm").html(time);
			},1000)
			setTimeout(function(){
				$("#send-yzm").html("点击发送验证码").removeClass("disabled");
				window.clearInterval(TimeInterVal);
			},60000)
			$.ajax({
				type:"get",
				url:url+"/user/getLoginSMS.json",
				dataType:"json",
				data:{
					"username":phoneNumber
				},
				success:function(data){
					console.log(data)
					console.log(phoneNumber)
					if(data.msg=="成功"){
						
					}
				},
				error:function(xhr){
					console.log(xhr)
				}
			});
		}else{
			$("#tips1").css("visibility","visible").html("请输入正确的手机号码")
		}
	}

	function isPhoneNo(phone) {  
	    var pattern = /^1[34578]\d{9}$/;  
	    return pattern.test(phone);  
	}
})