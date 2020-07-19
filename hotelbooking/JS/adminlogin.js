window.onload = function(){
	window.history.forward();

fetch('http://localhost:9090/test1', {
  method: 'GET', // or 'PUT'
mode: 'cors'})
.then(response => {
var data= response.text();

const p = Promise.resolve(data);
p.then(value=> {
	console.log(value);
});	
}).catch((error) => {

document.getElementById('error').innerHTML='<div class="alert alert-dismissible alert-danger"><p id="error1">"Server is down !!"</p>';

document.getElementById("loginbtn").disabled= true;
});	
}
function getDetails(){
	
	var adminid = document.getElementById("aid").value;
	var adminpswd = document.getElementById("pswd").value;
	var data = {"userid":adminid,"password":adminpswd};
	
	fetch('http://localhost:9090/adminLogin', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(data)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var data= response.text();

//console.log(data);
const p = Promise.resolve(data);
p.then(value=> {
	if(value=='Login successfully!!'){
		alert(value);
	window.location="details.html";
	}
	else{
		alert(value);
		return;
	}
//document.getElementById("details").innerHTML=value;
}

);

}).catch((error) => {

document.getElementById('error').innerHTML='<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><p id="error1">"Server is down!!"</p>';
});
	
}