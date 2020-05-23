//var userid = document.getElementById("userId").value;
function getDetails(){
	var adminid = document.getElementById("aid").value;
	var adminpswd = document.getElementById("pswd").value;
	alert(adminid+adminpswd)
	var data = {"userid":adminid,"password":adminpswd};
	
	fetch('http://localhost:9090/adminLogin', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(data)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var data= response.text();

console.log(data);
const p = Promise.resolve(data);
p.then(value=> {
	console.log(value);
	window.location="customerdetails.html";
document.getElementById("details").innerHTML=value;
}

);

});
	
}
function Adminlogin(){
	
	window.location = "admin.html";

}



function login(){  
var userId = document.getElementById("userId").value;
var password = document.getElementById("password").value;
var request = new XMLHttpRequest();
if(userId==''|| password=='')
{
alert("enter user ID and password!")

return;
}
else
{
	//alert(adminid+adminpswd)
	var data = {"userid":userId,"password":password};
	
	fetch('http://localhost:9090/userLogin', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(data)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var data= response.text();

const p = Promise.resolve(data);
p.then(value=> {

if(value=="success")
{
alert("Login Successfully");
window.location = "booking.html";
}
else
{
alert("Invalid user ID or password !");
}
});
});
}  
}
