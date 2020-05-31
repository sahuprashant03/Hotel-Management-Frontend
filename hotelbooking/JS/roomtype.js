function silver(){
    var b = 'silver'
        url = '../HTML/bookingdetails.html?roomtype=' + encodeURIComponent(b);

    document.location.href = url;
}
function gold() {
	var b = 'gold'
        url = '../HTML/bookingdetails.html?roomtype=' + encodeURIComponent(b);

    document.location.href = url;
}
function platinum() {
	var b = 'platinum'
        url = '../HTML/bookingdetails.html?roomtype=' + encodeURIComponent(b);

    document.location.href = url;
}
function logout(){
	window.location = "../HTML/index.html";
}