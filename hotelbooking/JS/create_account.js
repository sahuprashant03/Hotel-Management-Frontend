window.onload = function(){
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

document.getElementById('error').innerHTML='<div class="alert alert-dismissible alert-danger"><p id="error1">"Server is down!!"</p>';
document.getElementById("button1").disabled= true;
});	
}
function saveData(){
var name = document.getElementById("name").value;
var gender = document.getElementById("gender").value;
var address = document.getElementById("address").value;
var mobileno = document.getElementById("MobileNo").value;
var userId = document.getElementById("userId").value;
var password = document.getElementById("password").value;
var rslt;
var str="";
var data = {"name":name,"gender":gender,"address":address,"mobileno":mobileno,"userid":userId,"password":password};
if(userId!=''&& password!=''&&name!=''&&gender!=''&&address!=''&&mobileno!=''){
	
	if(mobileno<6000000000||mobileno>9999999999){
		alert("Enter Valid mobile no. !!");
		return;
	}
	//console.log(userId.length);
	
	if(userId.length<5)
	{
		alert("User ID should contain more than 4 character !!");
		return;
	}
	if(password.length<5)
	{
		alert("Password should contain more than 4 character !!");
		return;
	}
}
else{
	alert("Enter all the details !");
	return;
}



function checkUserid(userId){
	var req = {"userid":userId};
	
var tmp=  fetch('http://localhost:9090/useridCheck', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(req)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
//console.log(p);
p.then(value=> {
	if(value=="success"){
	alert("User ID already exist!!");}
	else{
		fetch('http://localhost:9090/createCustomer', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(data)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
//console.log(p);
p.then(value=> {
	if(value=="Customer Id created successfully!"){
	alert(value);
	window.location = "create_account.html";
	}else{
		alert(value);
	}
		
	});		
	
	


});
	
	}	
});
 });
}	 
rslt=checkUserid(userId);



}