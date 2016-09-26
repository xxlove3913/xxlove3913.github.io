$(function(){
	function tab(id){
		var oPlatBox=document.getElementById(id);
		var oOl=oPlatBox.getElementsByTagName("ol")[0];
		var aMenu=oOl.getElementsByTagName("li");
		
		var aBox=oPlatBox.getElementsByTagName("ul");
		var iNow;
	
		for(var i=0; i<aMenu.length; i++){
			aMenu[i].index=i;
			aMenu[i].onmouseover=function(){
				iNow=this.index;
				for(var i=0; i<aMenu.length; i++){
					aMenu[i].className="";
					aBox[i].style.display="none";
				}
				aMenu[iNow].className="active";
				aBox[iNow].style.display="block";	
				}
		};
	}
	tab("platform_box");
	tab("cooperation");
	
	var oCont=document.getElementById("list_cont");
	
	oCont.innerHTML+=oCont.innerHTML;
	oCont.style.height=oCont.offsetHeight+"px";
	var timer=null;
	var t=0;
	function toTop(){
		clearInterval(timer);
		timer=setInterval(function(){
			t-=1;
			if(t<=-oCont.offsetHeight/2){
				t=0;	
			};
			oCont.style.top=t+"px";
		},30);
	}
	toTop();
	
	var oForm=document.getElementById("form");
	var oInputName=oForm.getElementsByTagName("input")[0];
	var oInputTel=oForm.getElementsByTagName("input")[1];
	oInputName.value="请输入真实姓名";	
	oInputTel.value="请用真实手机号";	
	
	oInputName.onfocus=function(){
		oInputName.value="";	
	}
	oInputTel.onfocus=function(){
		oInputTel.value="";	
	}
	oInputName.onblur=function(){
		oInputName.value="请输入真实姓名";	
	}
	oInputTel.onblur=function(){
		oInputTel.value="请用真实手机号";	
	}
});