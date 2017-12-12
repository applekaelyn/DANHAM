BUD={};

//弹出提示信息
$(function(){
	$("body").append('<div class="alert-txt hide">弹出提示信息！</div>');
});

BUD.alert = function(str){
	window.msgTimer && clearTimeout(msgTimer);
	var txt = $(".alert-txt");
	txt.hide();
	txt.text(str);
	txt.css({
		display:"block",
		opacity:1
	});
	window.msgTimer = setTimeout(function(){
		txt.fadeOut();
	},1300);
}

//判断是否输入为空
BUD.isEmpty = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, "") ? false : true;
}

//判断电话输入是否为纯数字
BUD.isTel = function(number){
	return !isNaN(number);
}