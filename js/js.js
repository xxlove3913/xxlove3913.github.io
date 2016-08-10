$(function(){
	var aDl=$("#skill dl");
	var aDd=$("#skill dd");
	aDl.mouseover(function(){
		aDd.hide();
		aDd.eq($(this).index()).show();	
	});
	aDl.mouseout(function(){
		aDd.hide();	
	});
});