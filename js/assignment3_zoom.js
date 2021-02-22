/* global variables */
var photoOrderArray = window.opener.photoOrder; 
var figFilename = "../img/images/IMG_0" + photoOrderArray[2] + ".jpg";

function zoomFig() {
	var zoomWindow = window.open("../Assignment/assignment3_zoom.html", "zoomwin", "width=960,height=600");
	zoomWindow.focus();
}

function closeWin(){ 
    window.close(); 
}

function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
}

function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
 }
 
window.onload = pageSetup;
