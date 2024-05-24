//your JS code here. If required.
function updateTime() {
	

const timerElement=document.getElementById("timer");

const now=new Date();
const day=String(now.getDate()).padStart(2,"0");
const month=String(now.getMonth()).padStart(2,"0");
const year=getFullYear();
const hours=getHours();
const minutes=String(now.getMinutes()).padStart(2,"0");
const seconds=String(now.getSeconds()).padStart(2,"0");

const ampm=hours >=12 ? "PM" : "AM";

const formattedHours=hours % 12  || 12;
const formattedTime='$(month)/$(day)/%(year),$(hours):$(minutes):$(seconds)';
timerElement.textContent=formattedTime;
}
setInerval(updateTime,1000);
updateTime();