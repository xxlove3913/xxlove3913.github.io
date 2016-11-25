;(function(){
	function change(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/(320/20)+"px";
	}
	change();
	window.addEventListener("resize",change,false);
})();

//跳转页面
$(function(){
	$(".index .btn").click(function(){
		window.location.href="one.html";
	})
	$(".page1_info ul li a").click(function(){
		window.location.href="two.html";
	});
	$("#page2 .page_info ul li a").click(function(){
		window.location.href="three.html";
	});
	$("#page3 .page_info ul li a").click(function(){
		window.location.href="four.html";
	});
	$("#page4 .page_info ul li a").click(function(){
		window.location.href="five.html";
	});
	$("#page5 .page_info ul li a").click(function(){
		window.location.href="six.html";
	});
	$("#page6 .page_info ul li a").click(function(){
		window.location.href="seven.html";
	});
	$("#page7 .page_info ul li a").click(function(){
		window.location.href="eight.html";
	});
	$("#page8 .page_info ul li a").click(function(){
		window.location.href="nine.html";
	});
	

	$(".test_btn").click(function(){
		//w是体重 h是身高
//		var w=$("#weight").val();
//		var h=$("#stature").val()/100;
//		var bMi=Math.round(w/Math.pow(h,2));
//		alert(bMi);
//		$("#result h4 em").val(function(){
//			return $("#weight").val()/$("#stature").val()^2;
//		});
});
//	Math.pow(x,y)	
//	体质指数(BMI)=体重(kg)/身高(m)的平方。
//体重指数——男性：	体重指数——女性：
//过轻——低于20	过轻——低于19
//适中—— 20-25	适中——19-24
//过重——25-30	过重——24-29
//肥胖——30-35	肥胖—— 29-34
//非常肥胖—— 高于35	非常肥胖——高于34
//w是体重 h是身高	

	$(".test_btn").click(function(){
		var w=$("#weight").val();
		var h=$("#stature").val()/100;
		var bMi=Math.round(w/Math.pow(h,2));
		$("#page9").css({display:'none'});
		$("#result").css({display:'block'});
		$("#result h4 em").text(bMi);
		if($(".gender select").find("option:selected").text()=="女"){
			switch (true){
				case bMi<19:
					$("#result h4 strong").text("过轻");
					break;
				case bMi>=19 && bMi<24:
					$("#result h4 strong").text("适中");
					break;
				case bMi>=24 && bMi<29:
					$("#result h4 strong").text("过重");
					break;
				case bMi>=29 && bMi<34:
					$("#result h4 strong").text("肥胖");
					break;
				case bMi>=34:
					$("#result h4 strong").text("非常肥胖");
					break;
				default:
         			break;
			}
		}else{
			switch (true){
				case bMi<20:
					$("#result h4 strong").text("过轻");
					break;
				case bMi>=20 && bMi<25:
					$("#result h4 strong").text("适中");
					break;
				case bMi>=25 && bMi<30:
					$("#result h4 strong").text("过重");
					break;
				case bMi>=30 && bMi<35:
					$("#result h4 strong").text("肥胖");
					break;
				case bMi>=35:
					$("#result h4 strong").text("非常肥胖");
					break;
				default:
         			break;
			}
		}
		
		
	});
	
});






//$(function(){
//	$("#page .btn").click(function(){
//		window.location.href="one.html";
//	});
//	
//	$("#page1 .next").click(function(){
//		if($(".page1_info input:checked").length>=1){
//			window.location.href="two.html";
//		}
//	});
//	$("#page1 .page1_info img").each(function(index){
//		$(this).click(function(){
//			$(".page1_info input").eq(index).click();
//		});
//	});
//	
//	$("#page2 .prev").click(function(){
//		window.location.href="one.html";
//	});
//	$("#page2 .next").click(function(){
//		if($("#page2 .content_info input:checked").length>=1){
//			window.location.href="three.html";
//		}
//	});
//	
//	$("#page3 .prev").click(function(){
//		window.location.href="two.html";
//	});
//	$("#page3 .next").click(function(){
//		if($("#page3 .content_info input:checked").length>=1){
//			window.location.href="four.html";
//		}
//	});
//	
//	$("#page4 .prev").click(function(){
//		window.location.href="three.html";
//	});
//	$("#page4 .next").click(function(){
//		if($("#page4 .content_info input:checked").length>=1){
//			window.location.href="five.html";
//		}
//	});
//	
//	$("#page5 .prev").click(function(){
//		window.location.href="four.html";
//	});
//	$("#page5 .next").click(function(){
//		if($("#page5 .content_info input:checked").length>=1){
//			window.location.href="six.html";
//		}
//	});
//	
//	$("#page6 .prev").click(function(){
//		window.location.href="five.html";
//	});
//	$("#page6 .next").click(function(){
//		if($("#page6 .content_info input:checked").length>=1){
//			window.location.href="seven.html";
//		}
//	});
//	
//	$("#page7 .prev").click(function(){
//		window.location.href="six.html";
//	});
//	$("#page7 .next").click(function(){
//		if($("#page7 .content_info input:checked").length>=1){
//			window.location.href="eight.html";
//		}
//	});
//	
//	$("#page8 .prev").click(function(){
//		window.location.href="seven.html";
//	});
//	$("#page8 .next").click(function(){
//		if($("#page8 .content_info input:checked").length>=1){
//			window.location.href="nine.html";
//		}
//	});
//});
