// JavaScript Document
var curIndex=0; 
//时间间隔 单位毫秒 
var timeInterval=2000; 
var arr=new Array(); 
arr[0]="images/banner01.jpg"; 
arr[1]="images/banner02.jpg"; 
arr[2]="images/banner03.jpg"; 
arr[3]="images/banner04.jpg"; 
setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
var obj=document.getElementById("obj"); 
if (curIndex==arr.length-1) 
{ 
curIndex=0; 
} 
else 
{ 
curIndex+=1; 
} 
obj.src=arr[curIndex]; 
} 