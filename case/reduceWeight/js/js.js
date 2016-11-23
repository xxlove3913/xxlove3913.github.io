;(function(){
	function change(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/(320/20)+"px";
	}
	change();
	window.addEventListener("resize",change,false);
})();
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
