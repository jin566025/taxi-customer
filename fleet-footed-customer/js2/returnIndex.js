var userId = sessionStorage.getItem("userId");
function testLogin(){
	var userId = sessionStorage.getItem("userId");
	if(userId){
		
	}else{
		window.location.href="login.html"
	}
}
setTimeout(function(){
	testLogin();			
},500)