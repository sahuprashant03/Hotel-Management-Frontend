window.onload = function(){
	var url =document.location.href,params = url.split('?')[1].split('&'),
         data={},tmp;
 params = url.split('?')[1].split('&'),
         data={},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
	
	//console.log(data.userid.toUpperCase());
	document.getElementById("userName").innerHTML=data.userid;
	
const url1 ='http://localhost:5050/getImage/'+data.userid;
fetch(url1, {
  method: 'GET'   
})
.then(response => {
var res = response.json();
var p = Promise.resolve(res);

p.then(value=> {
	
	document.getElementById("profilepic").src="data:"+value.imageType+";base64,"+value.byteStream;
	
	});		
	
});
		
}
var url =document.location.href,params = url.split('?')[1].split('&'),
         data={},tmp;
 params = url.split('?')[1].split('&'),
         data={},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }



function silver(){
    var b = 'silver'
	
        url = '../HTML/bookingdetails.html?userid='+data.userid+'&roomtype='+b;

    document.location.href = url;
}
function gold() {
	var b = 'gold'
         url = '../HTML/bookingdetails.html?userid='+data.userid+'&roomtype='+b;

    document.location.href = url;
}
function platinum() {
	var b = 'platinum'
         url = '../HTML/bookingdetails.html?userid='+data.userid+'&roomtype='+b;

    document.location.href = url;
}
function uploadFile(){

	var file = document.querySelector('input[type="file"]');
	var formData = new FormData();
    formData.append('file',file.files[0],data.userid);
//	console.log(file.files[0]);
	//console.log(formData);

	fetch('http://localhost:5050/uploadImage', {
  method: 'POST', // or 'PUT'
  mode: 'cors',

  body:formData  
})
.then(response => {
var data= response.text();

console.log(data);
const p = Promise.resolve(data);
p.then(value=> {
alert(value);
window.location.reload();
}

);

});
	
}
function logout(){
	window.location = "../HTML/index.html";
}
function updateDetails() {
	
var name = document.getElementById("name").value;
var gender =  document.getElementById("gender").value;
var address = document.getElementById("address").value;
var mobileno =  document.getElementById("MobileNo").value;
var password = document.getElementById("password").value;
var updatedData = {  
    "userid":data.userid,
    "name": name,
    "gender": gender,
    "mobileno": mobileno,
    "password": password,
    "address": address
}
fetch('http://localhost:9090/updateCustomerDetails', {
  method: 'POST', 
  mode: 'cors',
  body:JSON.stringify(updatedData)   
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
//console.log(p);
p.then(value=> {
	alert(value);
		
	});		
	
});

	
}
	

function getUserDetails() {
	
const url ='http://localhost:9090/getCustomerDetailsByUserid/'+data.userid;

fetch(url, {
  method: 'GET' ,
 mode: 'cors'
})
.then(response => {
var res = response.json();
var p = Promise.resolve(res);
//console.log(p);
p.then(value=> {
	//console.log("data:"+value.name);
   document.getElementById("name").value = value.name;
   document.getElementById("gender").value = value.gender;
   document.getElementById("address").value = value.address;
   document.getElementById("MobileNo").value = value.mobileNo;
   document.getElementById("password").value = value.password;
	
	});		
	
});

}
/*
window.onload = function(){
	fetch('http://localhost:5050/getImage/createAccount', {
  method: 'GET'   //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.json();
var p = Promise.resolve(res);
console.log(p);
p.then(value=> {
	console.log("data:"+value.imageType+";base64,"+value.byteStream);
	document.getElementById("profilepic").src="data:"+value.imageType+";base64,"+value.byteStream;
	
	});		
	
});
	
}*/