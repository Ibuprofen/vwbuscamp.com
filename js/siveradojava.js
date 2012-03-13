// JavaScript Document
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var lleft=788;
var ltop=59;

function hidel(layer){
if (document.body.clientWidth>788){
	lleft=(document.body.clientWidth-788)/2
	}else{lleft=0;}

document.getElementById('Layer1').style.left=lleft+183;
document.getElementById('Layer2').style.left=lleft+259;
document.getElementById('Layer3').style.left=lleft+386;
document.getElementById('Layer4').style.left=lleft+485;
document.getElementById('Layer5').style.left=lleft+587;
document.getElementById('Layer6').style.left=lleft+699;
document.getElementById(layer).style.top=ltop;
document.getElementById(layer).style.height=1;
document.getElementById(layer).style.visibility="hidden";

loaded='Layer0';
a=0;
s=1;
clearTimeout(utimer);
clearTimeout(ptimer);
clearTimeout(ltimer);
}

var ltimer=0;
var utimer=0;
var ptimer=0;
var a=0;
var s=1;
var loaded='Layer0';


function loadl(layer){
document.getElementById(layer).style.visibility="visible";
clearTimeout(utimer);
x=4;s=1;
loaded=layer;
if (a<110){
	a=a+x;
	document.getElementById(layer).style.height=a;
	txt="loadl('" + layer + "')";
	ltimer=setTimeout(txt,3);
	}
}

function unloadl(layer){
clearTimeout(ltimer);
x=5;s=1;
loaded=layer;
if (a>5){
	a=a-x;
	document.getElementById(layer).style.height=a;
	txt="unloadl('" + layer + "')";
	utimer=setTimeout(txt,3);
	}else{hidel(layer);a=0;}

}


function kstopl(){
clearTimeout(ptimer);
s=1;
}


function stopl(layer){
s=s+1;
if (s<10){
	txt="stopl('" + layer + "')";
	ptimer=setTimeout(txt,10);}
else{
	unloadl(layer);}
}

function starthide(){
hidel('Layer1');
hidel('Layer2');
hidel('Layer3');
hidel('Layer4');
hidel('Layer5');
hidel('Layer6');
}

//-->
</script>