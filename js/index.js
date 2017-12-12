$(function(){
	var currentPage = 1, //当前页面
		start,	//touch开始的时候的Y坐标
		end,	//touch结束的时候的Y坐标
		distance;	//touch移动的距离
	
	//刚加载的时候第一个界面动画
	setTimeout(function(){
		$(".one-img").parent().removeClass("hide");
		$(".one-content").removeClass("hide");
		$(".one-img").addClass("animated fadeInDown");
		$(".one-content").addClass("animated bounceIn");
		$(".one-downArrow").parent().removeClass("hide");
	},500);
	
	$("body").on('touchstart',function(e){
		var touch = e.originalEvent.targetTouches[0]; 
      	start = touch.pageY;	
	});
	
	$("body").on('touchmove',function(e){
		var touch = e.originalEvent.targetTouches[0]; 
      	end = touch.pageY;	
	})
	
	$("body").on('touchend',function(e){
      	distance = end - start;
      	start=0;
      	if(currentPage==7||currentPage==8) return;
//    	console.log(start+"  "+end+"   "+distance);
      	if(distance>=100){
			distance=0;
      		changePage();
      	}
      	
	})
	
	function changePage(){
		console.log("change");
		switch (currentPage){
      			case 1:{
      				$(".one").addClass("animated fadeInDown");
      				$(".one").addClass("animated fadeOutDown");
		      		setTimeout(function(){
						$(".one").addClass("hide");
						$(".two").removeClass("hide");
			      		$(".two").addClass("animated fadeInDown");
			      		setTimeout(function(){
			      			$(".two-gif").parent().removeClass("hide");
			      			$(".two-gif").addClass("animated rotateInDownLeft");
			      			setTimeout(function(){
				      			$(".two-content").parent().removeClass("hide");
				      			$(".two-content").addClass("animated rotateInUpRight");
				      			$(".two-downArrow").parent().removeClass("hide");
			      			},500)
			      		},500)
		      		},500);
		      		currentPage=2;
      			}
      				break;
      			case 2:{
      				$(".two").removeClass("animated fadeInDown");
      				$(".two").addClass("animated fadeOutDown");
		      		setTimeout(function(){
						$(".two").addClass("hide");
						$(".three").removeClass("hide");
			      		$(".three").addClass("animated fadeInDown");
			      		setTimeout(function(){
			      			$(".three-title").parent().removeClass("hide");
			      			$(".three-title").addClass("animated slideInLeft");
			      			setTimeout(function(){
				      			$(".three-content").removeClass("hide");
				      			$(".three-content").addClass("animated zoomIn");
				      			$(".three-downArrow").parent().removeClass("hide");
				      			$(".three-knowMore").parent().removeClass("hide");
			      			},500)
			      		},500)
		      		},500);
		      		currentPage=3;
      			}
      				break;
      			case 3:{
      				$(".three").removeClass("animated fadeInDown");
      				$(".three").addClass("animated fadeOutDown");
		      		setTimeout(function(){
						$(".three").addClass("hide");
						$(".six").removeClass("hide");
			      		$(".six").addClass("animated fadeInDown");
			      		setTimeout(function(){
			      			$(".six-content").removeClass("hide");
			      			$(".six-content").addClass("animated flipInY");
			      			setTimeout(function(){
				      			$(".six-title").parent().removeClass("hide");
				      			$(".six-title").addClass("animated slideInRight");
				      			$(".six-downArrow").parent().removeClass("hide");
				      			$(".six-knowMore").parent().removeClass("hide");
			      			},500)
			      		},500)
		      		},500);
      			}
      				currentPage=6;
      				break;
//    			case 4:{
//    				$(".four").removeClass("animated fadeInDown");
//    				$(".four").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".four").addClass("hide");
//						$(".five").removeClass("hide");
//			      		$(".five").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
//    			case 5:{
//    				$(".five").removeClass("animated fadeInDown");
//    				$(".five").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".five").addClass("hide");
//						$(".six").removeClass("hide");
//			      		$(".six").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
      			case 6:{
      				$(".six").removeClass("animated fadeInDown");
      				$(".six").addClass("animated fadeOutDown");
		      		setTimeout(function(){
						$(".six").addClass("hide");
						$(".seven").removeClass("hide");
			      		$(".seven").addClass("animated fadeInDown");
			      		setTimeout(function(){
			      			$(".seven-title").parent().removeClass("hide");
			      			$(".seven-title").parent().addClass("animated fadeInDownBig");
			      			setTimeout(function(){
				      			$(".seven-content").removeClass("hide");
				      			$(".seven-content").addClass("animated zoomIn");
				      			$(".seven-button").parent().removeClass("hide");
			      			},500)
			      		},500)
		      		},500);
		      		currentPage=7;
      			}
      				break;
//    			case 7:{
//    				$(".seven").removeClass("animated fadeInDown");
//    				$(".seven").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".seven").addClass("hide");
//						$(".eight").removeClass("hide");
//			      		$(".eight").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
//    			case 8:{
//    				$(".eight").removeClass("animated fadeInDown");
//    				$(".eight").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".eight").addClass("hide");
//						$(".nine").removeClass("hide");
//			      		$(".nine").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
      			case 9:{
      				$(".nine").removeClass("animated fadeInDown");
      				$(".nine").addClass("animated fadeOutDown");
		      		setTimeout(function(){
						$(".nine").addClass("hide");
						$(".twelve").removeClass("hide");
			      		$(".twelve").addClass("animated fadeInDown");
			      		setTimeout(function(){
			      			$(".twelve-video").parent().removeClass("hide");
			      			$(".twelve-video").addClass("animated rubberBand");
			      			$(".twelve-buttonLeft").parent().removeClass("hide");
			      			$(".twelve-businessParters").parent().removeClass("hide");
			      		},500)
		      		},500);
		      		currentPage=12;
      			}
      				break;
//    			case 10:{
//    				$(".ten").removeClass("animated fadeInDown");
//    				$(".ten").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".ten").addClass("hide");
//						$(".eleven").removeClass("hide");
//			      		$(".eleven").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
//    			case 11:{
//    				$(".eleven").removeClass("animated fadeInDown");
//    				$(".eleven").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".eleven").addClass("hide");
//						$(".twelve").removeClass("hide");
//			      		$(".twelve").addClass("animated fadeInDown");
//		      		},500);
//    			}
//    				break;
  				case 12:{
//    				$(".twelve").removeClass("animated fadeInDown");
//    				$(".twelve").addClass("animated fadeOutDown");
//		      		setTimeout(function(){
//						$(".twelve").addClass("hide");
//						$(".one").removeClass("hide");
//			      		$(".one").addClass("animated fadeInDown");
//		      		},500);
      			}
      				break;
      			default: console.log("ERROR!");
      				break;
      		}
	}
	
	//点击第三个界面的“深入了解”
	$(".three-knowMore").on('click',function(){
		$(".three-BG").removeClass("animated fadeIn");
		$(".three-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".three-BG").addClass("hide");
			$(".four-BG").removeClass("hide");
			$(".four-BG").removeClass("animated fadeOut");
			$(".four-BG").addClass("animated fadeIn");
		},500);
		currentPage=4;
	});
	
	//点击第四个界面上的关闭按钮
	$(".four-close").on('click',function(){
		$(".four-BG").removeClass("animated fadeIn");
		$(".four-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".four-BG").addClass("hide");
			$(".three-BG").removeClass("animated fadeOut");
			$(".three-BG").removeClass("hide");			
			$(".three-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第六个界面的“深入了解”
	$(".six-knowMore").on('click',function(){
		$(".six-BG").removeClass("animated fadeIn");
		$(".six-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".six-BG").addClass("hide");
			$(".five-BG").removeClass("hide");
			$(".five-BG").removeClass("animated fadeOut");
			$(".five-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第五个界面上的关闭按钮
	$(".five-close").on('click',function(){
		$(".five-BG").removeClass("animated fadeIn");
		$(".five-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".five-BG").addClass("hide");
			$(".six-BG").removeClass("animated fadeOut");
			$(".six-BG").removeClass("hide");			
			$(".six-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第七个界面上的“立即抢号”按钮
	$(".seven-button").on('click',function(){
		$(".seven").removeClass("animated fadeIn");
		$(".seven").addClass("animated fadeOut");
		setTimeout(function(){
			$(".seven").addClass("hide");
			$(".eight").removeClass("hide");
			$(".eight").removeClass("animated fadeOut");
			$(".eight").addClass("animated fadeIn");
		},500);
		currentPage=8;
	});
	
	//选择预约时间
	$(".eight-time >div").on("click",function(){
		var time = $(".eight-icon-time");
		time.eq(0).toggleClass("active");
		time.eq(1).toggleClass("active");
		$(".eight-time").data("time",$(".eight-time").data("time") == '0' ? '1' :'0');
	});
	
	//选择多久未洗牛仔裤
	$(".eight-howLong >div").on("click",function(){
		var howLong = $(".eight-icon-howLong");
		var currChoice = $(".eight-howLong").data("howlong");
		console.log(currChoice);
		howLong.eq(currChoice).toggleClass("active");
		$(this).find(".eight-icon").eq(0).toggleClass("active");
		for(var i=0;i<=2;i++){
			if(howLong.eq(i).hasClass("active")){
				currChoice=i;
			}
		}
		$(".eight-howLong").data("howlong",currChoice);
	});
	
	//点击第八个界面上的“提交信息”按钮
	$(".eight-button").on('click',function(){
		var name = $(".eight-name").val();
		var tel = $(".eight-tel").val();
		var time = $(".eight-time").data("time");
		var howLong = $(".eight-howLong").data("howLong");
		if(BUD.isEmpty(name)||BUD.isEmpty(tel)){
			BUD.alert("输入不能为空！");
		}else if(!BUD.isTel(tel)){
			BUD.alert("电话必须为纯数字");
		}else {
			req.postMessage(name,tel,time,howLong,callback);
		}
		
	});
	
	//POST姓名和电话后的回调函数
	function callback(msg){
		if(msg=="success"){
			$(".eight").removeClass("animated fadeIn");
			$(".eight").addClass("animated fadeOut");
			setTimeout(function(){
				$(".eight").addClass("hide");
				$(".nine").removeClass("hide");
				$(".nine").removeClass("animated fadeOut");
				$(".nine").addClass("animated fadeIn");
				setTimeout(function(){
					$(".nine-content").removeClass("hide");
					$(".nine-content").addClass("animated zoomIn");
					setTimeout(function(){
						$(".nine-label").parent().removeClass("hide");
						$(".nine-label").addClass("animated swing");
						$(".nine-downArrow").parent().removeClass("hide");
					},500)
				},500)
			},500);
			currentPage=9;
		}else{
			BUD.alert("提交失败!");
		}
	}
	
	//点击第十二个界面上的“洗裤须知”
	$(".twelve-buttonLeft").on('click',function(){
		$(".twelve-BG").removeClass("animated fadeIn");
		$(".twelve-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".twelve-BG").addClass("hide");
			$(".ten-BG").removeClass("animated fadeOut");
			$(".ten-BG").removeClass("hide");			
			$(".ten-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第十个界面上的关闭按钮
	$(".ten-close").on('click',function(){
		$(".ten-BG").removeClass("animated fadeIn");
		$(".ten-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".ten-BG").addClass("hide");
			$(".twelve-BG").removeClass("animated fadeOut");
			$(".twelve-BG").removeClass("hide");			
			$(".twelve-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第十二个界面上的“更多惊喜”
	$(".twelve-buttonRight").on('click',function(){
		$(".twelve-BG").removeClass("animated fadeIn");
		$(".twelve-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".twelve-BG").addClass("hide");
			$(".eleven-BG").removeClass("animated fadeOut");
			$(".eleven-BG").removeClass("hide");			
			$(".eleven-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击第十一个界面上的关闭按钮
	$(".eleven-close").on('click',function(){
		$(".eleven-BG").removeClass("animated fadeIn");
		$(".eleven-BG").addClass("animated fadeOut");
		setTimeout(function(){
			$(".eleven-BG").addClass("hide");
			$(".twelve-BG").removeClass("animated fadeOut");
			$(".twelve-BG").removeClass("hide");			
			$(".twelve-BG").addClass("animated fadeIn");
		},500);
	});
	
	//点击播放
	$(".four-video").click(function(){
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
	});
	$(".five-video").click(function(){
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
	});
	$(".twelve-video").click(function(){
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
	})
	
})
