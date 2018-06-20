
// 提供微信分享接口所需的参数  
var wxdata = {  
    wx_account : new Array(4),  
    wx_share : new Array(4),  
      
    get_wxshare_data : function(ctx){  
        var url = ctx + "/weixinShareAction.do?method=getWxShareData";  
        $.ajax({  
            type : "GET",  
            url : url,  
            dataType : "json",  
            cache : false,  
            async : false,  
            success : function(msg) {   
                if(msg.errcode == 0){  
                    wxdata.wx_account[0] = msg.wxuser;  // appid  
                    wxdata.wx_account[1] = msg.timestamp;   // timestamp  
                    wxdata.wx_account[2] = msg.noncestr; // noncestr  
                    wxdata.wx_account[3] = msg.signature;  // signature  
  
                    wxdata.wx_share[0] = msg.shareimg;  // share_img 分享缩略图图片  
                    wxdata.wx_share[1] = msg.shareurl;// share_link  分享页面的url地址，如果地址无效，则分享失败  
                      
                    var description = $("meta[name='description']").attr("content");  
                    if ($.trim(description) != "") {  
                        wxdata.wx_share[2] = $.trim(description); // share_desc  
                    }  
                    var title1 = document.title;  
                    if ($.trim(title1) != "") {  
                        wxdata.wx_share[3] = title1;// share_title  
                    }  
                }  
            },  
            error : function(msg){  
                  
            }  
        });  
    }  
      
}  
  
var host = "http://" + window.location.host;  
wxdata.get_wxshare_data(host);  