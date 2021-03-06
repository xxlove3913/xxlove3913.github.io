function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];	
};


window.onload=function(){
	var oDt=document.getElementById("dt");
	var oSlide=document.getElementById("slide");
	var aSlide=oSlide.getElementsByTagName("li");
	var oBtn=document.getElementById("focus");
	var aBtn=oBtn.getElementsByTagName("li");
	var iNow=0;
	var timer=null;
	
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			iNow=this.index;
			tab();
		}
	}
	function tab(){
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className="";
		}
		aBtn[iNow].className="ac";
		oSlide.style.top=-(aSlide[iNow].offsetHeight)*iNow+"px";
	}
	function next(){
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;	
		}
		tab();
	}
	timer=setInterval(next,1000);
	oDt.onmouseover=function(){
		clearInterval(timer);	
	}
	oDt.onmouseout=function(){
		timer=setInterval(next,1000);	
	}
	

		
	//3D轮播	
	var oPre=document.getElementById("pre");
	var oNext=document.getElementById("next");
	var oBox=document.getElementById("rotatePic");
	var aLi=oBox.getElementsByTagName("li");
	var aDd=oBox.getElementsByTagName("dd");
	var aImg=oBox.getElementsByTagName("img");
	var aH=oBox.getElementsByTagName("h4");
	var aP=oBox.getElementsByTagName("p");
	var arr=[];
	
	for(var i=0; i<aLi.length; i++){
		arr.push({left:aLi[i].offsetLeft,
				  top:aLi[i].offsetTop,
				  width:getStyle(aLi[i],"width"),
				  zIndex:getStyle(aLi[i],"z-index"),
				  ddW:getStyle(aDd[i],"height"),
				  imgW:getStyle(aImg[i],"width"),
				  imgH:getStyle(aImg[i],"height"),
				  hFont:getStyle(aH[i],"font-size"),
				  pFont:getStyle(aP[i],"font-size"),
				  pAlign:getStyle(aP[i],"text-align")
		});	
	}
	
	function round(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.left=arr[i].left+'px';
			aLi[i].style.top=arr[i].top+'px';
			aLi[i].style.width=arr[i].width;
			aDd[i].style.height=arr[i].ddW;
			aImg[i].style.width=arr[i].imgW;
			aImg[i].style.height=arr[i].imgH;
			aLi[i].style.zIndex=arr[i].zIndex;
			aH[i].style.fontSize=arr[i].hFont;
			aP[i].style.fontSize=arr[i].pFont;
			aP[i].style.textAlign=arr[i].pAlign;
		}
	}
	oPre.onclick=function(){
		arr.push(arr.shift());
		round();
	};
	oNext.onclick=function(){
		arr.unshift(arr.pop());
		round();
	};
}