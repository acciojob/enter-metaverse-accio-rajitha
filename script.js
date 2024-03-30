//your JS code here. If required.
var para = document.getElementById("status");
var enterbutton = document.getElementById("enterBtn");

function textstatus(){
	para.textContent = "Entered Metaverse"
}
enterbutton.addEventListener('click', textstatus);