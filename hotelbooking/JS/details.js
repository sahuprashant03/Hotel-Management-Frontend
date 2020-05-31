function getCustomerDetails(){

var cus_pre = '<tr class="table-info"><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Gender</th><th scope="col">Mobile No.</th><th scope="col">User ID</th><th scope="col">Password</th><th scope="col">Address</th></tr>';

var button = '<div class="form-group inline"><label for="exampleInputPassword1">Enter Id to remove :</label><input type="number" class="form-control-sm" id="id" placeholder="ID"><button type="button" class="btn-sm btn-danger" onclick="remove()">Remove</button></div>';

var cus="";


fetch('http://localhost:9090/getCustomerDetails', {
  method: 'GET', // or 'PUT'
  mode: 'cors'    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.json();
var p = Promise.resolve(res);

p.then(value=> {
	
	for (var i=0;i<value.length;i++){
		cus=cus+"<tr><td>"+value[i].id+"</td><td>"+value[i].name+"</td><td>"+value[i].gender+"</td><td>"+value[i].mobileNo+"</td><td>"+value[i].userid+"</td><td>"+value[i].password+"</td><td>"+value[i].address+"</td></tr>";
	}
	document.getElementById("detailstable").innerHTML=cus_pre+cus;	
	});		
	
});
document.getElementById("removeuser").innerHTML=button;	

}
function getBookingDetails(){
	var pre = '<tr class="table-info"><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Gender</th><th scope="col">Mobile No.</th><th scope="col">Room Type</th><th scope="col">Check-In</th><th scope="col">Check-Out</th><th scope="col">No. of members</th><th scope="col">Payement Mode</th><th scope="col">Amount</th></tr>';
	var button = '<div class="form-group inline"><label for="exampleInputPassword1">Enter Id to cancel booking: </label><input type="number" class="form-control-sm" id="id" placeholder="ID"><button type="button" class="btn-sm btn-danger" onclick="cancel()">Cancel Booking</button></div>';


	var txt="";
	
	fetch('http://localhost:9090/getBookingDetails', {
  method: 'GET', // or 'PUT'
  mode: 'cors'    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.json();
var p = Promise.resolve(res);

p.then(value=> {
	
	for (var i=0;i<value.length;i++){
		txt=txt+"<tr><td>"+value[i].id+"</td><td>"+value[i].name+"</td><td>"+value[i].gender+"</td><td>"+value[i].mobileno+"</td><td>"+value[i].roomtype+"</td><td>"+value[i].startdate+"</td><td>"+value[i].enddate+"</td><td>"+value[i].membercount+"</td><td>"+value[i].paymentmode+"</td><td>"+value[i].amount+"</td></tr>";
	}
	document.getElementById("detailstable").innerHTML=pre+txt;	
	});		
	
});
document.getElementById("removeuser").innerHTML=button;	
}

function remove(){
	
	
	var id = document.getElementById("id").value;
	var data = {"id":id};
	
fetch('http://localhost:9090/removeCustomer', {
  method: 'POST', // or 'PUT'
  mode: 'cors' ,
  body:JSON.stringify(data)   //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
console.log(p);
p.then(value=> {
	console.log(value);
	if(value=='Customer removed successfully!'){
		alert(value);
	window.location = "../HTML/details.html";
	}
	else{
		alert(value);
	}
	});		
	
});	
	
	
}

function logout(){
	window.location="../HTML/admin.html";
}  

function cancel(){
	
	
	var id = document.getElementById("id").value;
	var data = {"id":id};
	
fetch('http://localhost:9090/deleteBooking', {
  method: 'POST', // or 'PUT'
  mode: 'cors' ,
  body:JSON.stringify(data)   //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);

p.then(value=> {
	
	if(value=='Booking cancelled successfully!'){
		alert(value);
	window.location = "../HTML/details.html";
	}
	else{
		alert(value);
	}
	});		
	
});	
	
	
}
