$(function(){
	var userId = localStorage.getItem("userId");
	if(!userId){
		getCodeReturn();
		getCode();
	}
	var hasLogin = localStorage.getItem("hasLogin");
	var openid = localStorage.getItem("openid");
	if(hasLogin && openid && userId){
		window.location.href="index2.html"
	}
	
	function setCookie(c_name,value,expiredays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie = c_name+ "=" +escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())
	}
	function getCookie(c_name){
		if(document.cookie.length>0){
			var c_start = document.cookie.indexOf(c_name + "=");
			if(c_start!==-1){
				c_start = c_start+c_name.length+1;
				c_end = document.cookie.indexOf(";",c_start);
				if(c_end==-1) c_end=document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end))
			}
		}
		return ""
	}
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
					localStorage.setItem("appId",appId);
					var code = sessionStorage.getItem("code");
					var hrefs = window.location.href.split("userOpenid=")[1]
					if(hrefs){
						var userOpneid = hrefs.split("?type=")[0];
						var userType = hrefs.split("?type=")[1];
						sessionStorage.setItem("userOpneid",userOpneid);
						sessionStorage.setItem("userType",userType);
					}

					if(!code){
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
			sessionStorage.setItem("code",code);
		}
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
		var code = sessionStorage.getItem("code");
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
					"validateCode":validateCode,
					"code":code
				},
				async:false,
				dataType:"json",
				success:function(data){
					console.log(data)
					if(data.msg=="用户不存在"){
						$("#tips1").css("visibility","visible").html(data.msg)
						$("#tips2").css("visibility","hidden").html("")
					}else if(data.msg=="成功"){
						localStorage.setItem("hasLogin",true);
						localStorage.setItem("usernickname",data.nickname);
						localStorage.setItem("userscore",data.score);
						localStorage.setItem("userId",data.userId);
						localStorage.setItem("userImg",data.userImg);
						localStorage.setItem("openid",data.userOpenid);
						localStorage.setItem("token",data.token);
						var userOpneid = sessionStorage.getItem("userOpneid");
						if(userOpneid){
							$.ajax({
								type:"post",
								url:url_path+"/saveSubordinate.json",
								async:false,
								data:{
									"userOpenid":userOpenid,
									"type":1
								},
								dataType:"json",
								success:function(data){
									if(data.msg=="成功"){
										window.location.href="index2.html";
									}
								}
							});
						}else{
							window.location.href="index2.html";
						}
						
						
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