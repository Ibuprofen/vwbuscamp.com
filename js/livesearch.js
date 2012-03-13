// Live Search Javascript

var xmlHttp

function showSearchHint(searchString, inputId, hiddenId, displayId, showMax) {
	inputObj = document.getElementById(inputId);
	displayObj = document.getElementById(displayId);
	
	displayObj.innerHTML = "";
	displayObj.style.border="1px solid black";
	
	xmlHttp = GetXmlHttpObject()
	
	if(xmlHttp == null) {
		alert("Your browser does not support this functionality. Please use Firefox or Internet Explorer");
		return;
	}
	
	var url = "ajaxsearch.php";
	url = url + "?search=" + searchString + "&input=" + inputId + "&hidden=" + hiddenId + "&display=" + displayId + "&max=" + showMax;

	xmlHttp.onreadystatechange = searchStateChanged;
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function searchStateChanged() {
	if(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		if(xmlHttp.responseXML.getElementsByTagName('item')) {
			items = xmlHttp.responseXML.getElementsByTagName('item');
			if(items.length > 0) {
				for(var i = 0; i < items.length; i++) {
					value = items[i].getAttribute('value');
					name = items[i].getAttribute('name');
					inputId = items[i].getAttribute('input');
					hiddenId = items[i].getAttribute('hidden');
					displayId = items[i].getAttribute('display');
					displayObj = document.getElementById(displayId);
					displayObj.innerHTML = displayObj.innerHTML + "<span repvalue=\"" + value + "\" onmouseover=\"this.style.background='yellow'\" onmouseout=\"this.style.background='none'\" onclick=\"document.getElementById('" + hiddenId + "').value=this.getAttribute('repvalue');document.getElementById('" + inputId + "').value=this.innerHTML;\">" + name + "</span><br />";
					displayObj.style.border="1px solid #A5ACB2";
				}
			}
			else {
				displayObj.innerHTML = "";
				displayObj.style.border="0px";
				return;
			}
		}
		else {
			displayObj.innerHTML = "";
			displayObj.style.border="0px";
			return;
		}
	}
}

function clearSearchHint(inputId, displayId) {
	inputObj = document.getElementById(inputId);
	displayObj = document.getElementById(displayId);
	
	inputObj.value = "";
	displayObj.innerHTML = "";
}

function addProductToCatalog(prodSku, tableId) {
	var i;
	tableObj = document.getElementById(tableId);
	
	var lastrow = tableObj.rows.length;
	tableObj.insertRow(lastrow);
	var prevrow = tableObj.rows[lastrow - 1];
	var cell1html = prevrow.cells[0].innerHTML;
	var cell2html = prevrow.cells[1].innerHTML;
	var cell3html = prevrow.cells[2].innerHTML;
	var row = tableObj.rows[lastrow];
	row.insertCell(0);
	row.insertCell(1);
	row.insertCell(2);
	row.cells[0].innerHTML = cell1html;
	row.cells[1].innerHTML = cell2html;
	row.cells[2].innerHTML = cell3html;
}

function GetXmlHttpObject() {
	var xmlHtpp = null;
	try {
		// Firefox, Opera 8+, Safari
		xmlHttp = new XMLHttpRequest();
	}
	catch(e) {
		// Internet Explorer
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}