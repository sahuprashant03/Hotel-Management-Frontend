function getAmount(){
var url =document.location.href,params = url.split('?')[1].split('&'),
         data={},tmp;
 params = url.split('?')[1].split('&'),
         data={},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
return data.amount;
}
function paid(){
alert("Room Booked successfully !!");
window.location="../HTML/roomtype.html";
}	
function price(){
var p=getAmount();
//console.log(p);
document.getElementById("textbox").innerHTML= "Total amount is "+p;
}

function cancel(){
	
	
	
	
	fetch('http://localhost:9090/cancelBooking', {
  method: 'GET', // or 'PUT'
  mode: 'cors'    //'{"userid":"sahu@123","password":"1234"}'
})
.then(response => {
var res = response.text();
var p = Promise.resolve(res);
console.log(p);
p.then(value=> {
	if(value=="Booking cancelled successfully!"){
	alert(value);
	window.location="../HTML/roomtype.html"
	}else{
		alert("Room booked successfully!");
    window.location="../HTML/roomtype.html"
	}
		
	});		
	
	


});

	
}