// JavaScript Document
function validate_form ( )
{
	var minLength = 5; // Minimum length
	valid = true;
	

 /*      if ( document.checkout_PayPal_Complete.zip.value == "" )
        {
                alert ( "Please fill in your Zip." );
                valid = false;
        } */
		

		//if blank
		if ( document.checkout_PayPal_Complete.zip.value.length == 0) 
		  {
		  alert("Please fill in your Zip");
		  valid = false;
		  } 
		
		// if its numeric  
	    if (chkNumeric(document.checkout_PayPal_Complete.zip.value) == false) 
		  {
		  alert("Please check - non numeric value!");
		  valid = false;
		  }
		
		// check for minimum length
		if (document.checkout_PayPal_Complete.zip.value.length < minLength) 
			{
		alert('Your zipcode must be ' + minLength + ' characters long. Try again.');
		return false;
		valid = false;
		}
		
		//if ( isNumeric( document.checkout_PayPal_Complete.zip.value ))
		
		//{
                //alert ( "Please enter a correct Zip." );
                //valid = true;
        //}
     
        if ( document.checkout_PayPal_Complete.FedEx_Service.selectedIndex == 0 )
        {
                alert ( "Please select your Fed Ex Service." );
                valid = false;
        }

        return valid;
}

//-->

 <!--

function IsNumeric(strString)
   //  check for valid numeric strings	
   {
   var strValidChars = "0123456789-";
   var strChar;
   var blnResult = true;

   if (strString.length == 0) return false;

   //  test strString consists of valid characters listed above
   for (i = 0; i < strString.length && blnResult == true; i++)
      {
      strChar = strString.charAt(i);
      if (strValidChars.indexOf(strChar) == -1)
         {
         blnResult = false;
         }
      }
   return blnResult;
   }
//-->

function putvalueinhidden(id, hidden) {
		var obj = document.getElementsByName(hidden);
		obj.value = obj.value + id;		
	}
	
function mm_preloadimages() { //v1.2 
	
	if (document.images) { 
	
	var imgFiles = mm_preloadimages.arguments; 
	var preloadArray = new Array(); 
		
		for (var i=0; i<imgFiles.length; i++) { 
			preloadArray[i] = new Image; 
			preloadArray[i].src = imgFiles[i]; 
		} 
	} 
} 

function showload(btnid, myform, objid) {

	obj = document.getElementById(objid);
	btn = document.getElementById(btnid); 
	
	obj.style.display="block";
	obj.style.visibility="visible";
	
	//obj.style.width = window.innerWidth; 
	
	btn.disabled = "disabled"; 
	
	myform.submit();
	
}

function hideloadingscreen(objid) {

	document.getElementById(objid).style.visibility="hidden";
	document.getElementById(objid).style.display="none";	
}

function check(totalNum, field) {
	for(i = 0; i < totalNum; i++) {
		var checkbox = field + i;
		document.getElementById(checkbox).checked=true
	}
}
function uncheck(totalNum, field) {
	for(i = 0; i < totalNum; i++) {
		var checkbox = field + i;
		document.getElementById(checkbox).checked=false;
	}
}

function checkValue(ischecked, exptrue, expfalse) {
	if (ischecked) {
		eval(exptrue);	
	} else {
		eval(expfalse); 	
	}
}

function populateID(value, formID) {
	
	obj = document.getElementById(formID); 
	
	obj.value = value; 
	
}

function modelesswin(url,mwidth,mheight){
	if (document.all&&window.print) //if ie5
	eval('window.showModelessDialog(url,"","help:0;resizable:1;dialogWidth:'+mwidth+'px;dialogHeight:'+mheight+'px")')
	else
	eval('window.open(url,"","width='+mwidth+'px,height='+mheight+'px,resizable=1,scrollbars=1")')
}

/* floaty thing
//Enter "frombottom" or "fromtop"
var verticalpos="frombottom"

if (!document.layers)
document.write('</div>')

function JSFX_FloatTopDiv()
{
	var startX = 3,
	startY = 150;
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	var d = document;
	function ml(id)
	{
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x;this.style.top=y;};
		el.x = startX;
		if (verticalpos=="fromtop")
		el.y = startY;
		else{
		el.y = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		el.y -= startY;
		}
		return el;
	}
	window.stayTopLeft=function()
	{
		if (verticalpos=="fromtop"){
		var pY = ns ? pageYOffset : document.body.scrollTop;
		ftlObj.y += (pY + startY - ftlObj.y)/8;
		}
		else{
		var pY = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		ftlObj.y += (pY - startY - ftlObj.y)/8;
		}
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("stayTopLeft()", 10);
	}
	ftlObj = ml("divStayTopLeft");
	stayTopLeft();
}
JSFX_FloatTopDiv();
//end floaty thing */

