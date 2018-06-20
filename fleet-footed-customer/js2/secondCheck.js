var userId = localStorage.getItem("userId");
function testLogin(){
	var userId = localStorage.getItem("userId");
	if(userId){
		
	}else{
		window.location.href="../../index.html"
	}
}
setTimeout(function(){
	testLogin();			
},500)