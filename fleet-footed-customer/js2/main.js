$(function(){
	setTimeout(function(){
		$(".amap-toolbar,.amap-copyright,.amap-zoomcontrol,.amap-touch-toolbar,amap-controls").css("visibility","hidden");
		$(".amap-logo,.amap-geolocation-con,.amap-controls").hide();
	},1000)
	
	
	$(".sure").click(function(){
		ContentUp();
		$(".shadow,.confirm").fadeOut(500);
	})
	$(".submit").click(function(){
		$(".shadow,.confirm").fadeIn(500);
	})
	
	//我要申诉
	$(".complain").click(function(){
		window.location.href="complain.html"
	})
	
	function ContentUp(){
		$(".list-main").css("bottom","17.5rem");
		$(".customer").css("bottom","4rem")
	}
	function ContentDown(){
		$(".list-main").css("bottom","4rem");
		$(".customer").css("bottom","-20rem")
	}
	
	function preview(file) {
    var prevDiv = document.getElementById('preview');
    if (file.files && file.files[0]) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
      }
      reader.readAsDataURL(file.files[0]);
    } else {
      prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
  }
	
	$(".footer-nav").click(function(){
		var index = $(this).index()
		if(index == 0){
			window.location.href="index2.html"
		}else if(index==1){
			window.location.href="my-order-list.html"
		}else if(index==2){
			window.location.href="personal.html"
		}
	})
	var mySwiper = new Swiper('.list-main,.customer',{
		 onTouchMove: function(e){
	            var dist=e.touches.currentY-e.touches.startY;
	            if(dist<20){
					ContentUp();
	            }else if(dist>20){
					ContentDown()
	            }
	
		 }
     })
})