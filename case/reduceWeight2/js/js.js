;(function(){
	function change(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/(320/20)+"px";
	}
	change();
	window.addEventListener("resize",change,false);
})();

//设 您的职业页面 职业列表背景
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
	
//	Math.pow(x,y)
	$(".test_btn").click(function(){
		//w是体重 h是身高
//		var w=$("#weight").val();
//		var h=$("#stature").val()/100;
//		var bMi=Math.round(w/Math.pow(h,2));
//		alert(bMi);
//		$("#result h4 em").val(function(){
//			return $("#weight").val()/$("#stature").val()^2;
//		});
	})
	
//	体质指数(BMI)=体重(kg)/身高(m)的平方。
//体重指数——男性：	体重指数——女性：
//过轻——低于20	过轻——低于19
//适中—— 20-25	适中——19-24
//过重——25-30	过重——24-29
//肥胖——30-35	肥胖—— 29-34
//非常肥胖—— 高于35	非常肥胖——高于34
	$(".test_btn").click(function(){
		//w是体重 h是身高
		var w=$("#weight").val();
		var h=$("#stature").val()/100;
		var bMi=Math.round(w/Math.pow(h,2));
		alert(bMi);
		$("#result h4 em").text(bMi);
		
	})
});






$(function(){
	$("#page .btn").click(function(){
		window.location.href="one.html";
	});
	
	$("#page1 .next").click(function(){
		if($(".page1_info input:checked").length>=1){
			window.location.href="two.html";
		}
	});
	$("#page1 .page1_info img").each(function(index){
		$(this).click(function(){
			$(".page1_info input").eq(index).click();
		});
	});
	
	$("#page2 .prev").click(function(){
		window.location.href="one.html";
	});
	$("#page2 .next").click(function(){
		if($("#page2 .content_info input:checked").length>=1){
			window.location.href="three.html";
		}
	});
	
	$("#page3 .prev").click(function(){
		window.location.href="two.html";
	});
	$("#page3 .next").click(function(){
		if($("#page3 .content_info input:checked").length>=1){
			window.location.href="four.html";
		}
	});
	
	$("#page4 .prev").click(function(){
		window.location.href="three.html";
	});
	$("#page4 .next").click(function(){
		if($("#page4 .content_info input:checked").length>=1){
			window.location.href="five.html";
		}
	});
	
	$("#page5 .prev").click(function(){
		window.location.href="four.html";
	});
	$("#page5 .next").click(function(){
		if($("#page5 .content_info input:checked").length>=1){
			window.location.href="six.html";
		}
	});
	
	$("#page6 .prev").click(function(){
		window.location.href="five.html";
	});
	$("#page6 .next").click(function(){
		if($("#page6 .content_info input:checked").length>=1){
			window.location.href="seven.html";
		}
	});
	
	$("#page7 .prev").click(function(){
		window.location.href="six.html";
	});
	$("#page7 .next").click(function(){
		if($("#page7 .content_info input:checked").length>=1){
			window.location.href="eight.html";
		}
	});
	
	$("#page8 .prev").click(function(){
		window.location.href="seven.html";
	});
	$("#page8 .next").click(function(){
		if($("#page8 .content_info input:checked").length>=1){
			window.location.href="nine.html";
		}
	});
});
