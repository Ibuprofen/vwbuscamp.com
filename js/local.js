// Universal functions

function checkThisValue(value, condition, exprtrue, exprfalse) {
	if(value == condition) {
		eval(exprtrue);
	}
	else {
		eval(exprfalse);
	}
}

function showObj(objId) {
	document.getElementById(objId).style.display = 'block';
}

function hideObj(objId) {
	document.getElementById(objId).style.display = 'none';
}

function addNewUser() {
	alert('The selected user was not found. You may add a new user below.');
	var objId = 'addNewUser';
	showObj(objId);
}

var countShowUser = 0;

function showUserInfo() {
	var tableId = 'applyUserTable';
	var searchId = 'txtUserSearch';
	var dropboxId = 'livesearch';
	dropboxObj = document.getElementById(dropboxId);
	searchObj = document.getElementById(searchId);
	if(searchObj.value == "") {
		exit;
	}
	obj = document.getElementById(tableId);
	countShowUser++;
	if(countShowUser > 1) {
		obj.deleteRow(1);
	}
	obj.insertRow(1);
	row = obj.rows[1];
	row.insertCell(0);
	row.insertCell(1);
	cell1 = row.cells[0];
	cell1.innerHTML = '<div align="right"><strong>Applied User:</strong></div>';
	cell2 = row.cells[1];
	cell2.innerHTML = searchObj.value;
	dropboxObj.innerHTML = '';
	searchObj.value = '';
}

// Site specific javascript functions

function showUnits(xNumber) {
	if(xNumber == undefined || xNumber == NaN) {
		xNumber = 0;
	}
	else if(xNumber > 4) {
		xNumber = 4;
	}
	
	objIdPrefix = "residentialPlexUnit";
	
	for(var i = 1; i <= 4; i++) {
		divId = objIdPrefix + i;
		if(i <= xNumber) {
			showObj(divId);
		}
		else {
			hideObj(divId);
		}
	}
}

