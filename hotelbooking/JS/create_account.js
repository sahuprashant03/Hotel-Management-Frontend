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
if(userId==''|| password==''||name==''||gender==''||address==''||mobileno==''){
	alert("Enter all the details!!");
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
console.log(p);
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
console.log(p);
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