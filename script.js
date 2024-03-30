//your JS code here. If required.
var para = document.getElementById("status");
var enterbutton = document.getElementById("enterBtn");

function textstatus(){
	para.innerHTML = '<h1>Entered Metaverse</h1>';
}
enterbutton.addEventListener('click', textstatus);