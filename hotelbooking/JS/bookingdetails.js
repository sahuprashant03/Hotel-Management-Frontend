window.onload = function(){
	var url =document.location.href,params = url.split('?')[1].split('&'),
         data={},tmp;
 params = url.split('?')[1].split('&'),
         data={},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
	document.getElementById("roomtype").innerHTML=data.roomtype.toUpperCase();
}
function getRoomType(){
var url =document.location.href,params = url.split('?')[1].split('&'),
         data={},tmp;
 params = url.split('?')[1].split('&'),
         data={},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

return data.roomtype;
}
function booking(){
var name = document.getElementById("name").value;
var gender=document.getElementById("gender").value;
var member=document.getElementById("membercount").value;
var room=getRoomType();
var mobileno=document.getElementById("MobileNo").value;
var checkin=document.getElementById("checkin").value;
var checkout=document.getElementById("checkout").value;
var paymentmode=document.getElementById("paymentmode").value;

var date1 = new Date(checkin);
var date2 = new Date(checkout);
var startdate= date1.getDate()+'/'+(date1.getMonth()+1)+'/'+date1.getFullYear();
var enddate= date2.getDate()+'/'+(date2.getMonth()+1)+'/'+date2.getFullYear();
var days = (date2.getTime() - date1.getTime())/(1000*3600*24);
var amount = calculateprice(room);
var data={"name":name,"gender":gender,"roomtype":room,"startdate":startdate,"enddate":enddate,"paymentmode":paymentmode,"mobileno":mobileno,"membercount":member,"amount":amount,"paymentmode":paymentmode};

var today = new Date();
var tdate = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
if(name!=''&&checkin!=0&&checkout!=0&&mobileno!=0&&member!=''){
	
	if(member<=0){
		alert("Enter correct no. of members !");
		return;
	}
	if(mobileno<6000000000 || mobileno>9999999999)
	{
		alert("Error : Invalid Mobile No.!");
		return;
	}
	
if(date1.getTime()<=today.getTime()){
	alert("Error: Check-in date should be greater than today's date!");
	return;
}
if(date2.getTime()<=date1.getTime()){
	alert("Error: Check-out date should be greater than check-in date !!");
	return;
}
}else{
	alert("Enter all the details !!");
	return;
}

console.log(data);
fetch('http://localhost:9090/saveBookingDetails', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  body:JSON.stringify(data)    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
console.log(p);
p.then(value=> {
	if(value=="Booked successfully!"){
	//alert(value);
	url = '../HTML/paynow.html?amount=' + encodeURIComponent(amount);
document.location.href = url;
	}else{
		alert(value);
	}
		
	});		
	
	


});


function calculateprice(roomtype){
	
	if(roomtype=='silver'){
		return days*1500+days*(member-1)*500;
	}
	else if(roomtype=='gold'){
		return days*2000+days*(member-1)*500;	
	}
	else{
		return days*3000+days*(member-1)*500;
	}
	
}
}



function back(){
	window.location="../HTML/roomtype.html";
}

