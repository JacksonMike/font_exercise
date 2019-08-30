function init() {
	setInterval("changeImg()", 1000);
	time = setInterval("showAd()", 3000);
}
var i = 0

function changeImg() {
	i++;
	document.getElementById("img1").src = "img/" + i + ".jpg";
	if (i == 3) {
		i = 0;
	}
}

function showAd() {
	var adEle = document.getElementById("img100");
	adEle.style.display = "block"
	clearInterval(time)
	time2 = setInterval("hiddenAd()", 1000)
}

function hiddenAd() {
	document.getElementById("img100").style.display = "none"
	clearInterval(time2)
}
