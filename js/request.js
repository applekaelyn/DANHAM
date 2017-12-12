var req = {};
	
	//提交信息后POST
    req.postMessage = function(name,tel,time,howLong,callback){
//      $.ajax({
//          type : "POST",
//          url  : "",
//        	data : {name:name,tel:tel,time:time,howLong:howLong},
//          dataType : "JSON",
//          success  : function(data){
//              callback ? callback($.parseJSON(data)) : (function(){})();
//          }
//      });
		callback("success");
    }
    