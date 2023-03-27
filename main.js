//current time------------>
function clock()
{
	var clock=new Date();
	document.getElementById("clock").innerHTML=clock.toLocaleTimeString();
}
setInterval(clock,1000);




// Alert after 2 sec----------------->

function aler()
{
	alert("hii");
}



//Alert cancel---------------->
function al()
{
	clearInterval(x);
}