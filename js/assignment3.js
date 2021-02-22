// show image
let photoOrder = [1, 2, 3, 4, 5];
function populateFigures() {
    let filename, currentFig;
    for (let i = 1; i < 4; i++) {
        filename = "../img/images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i-1];
        currentFig.src = filename;
    }
}

// Arrow button
function rightArrow() {
    for (var i = 0; i < 8; i++) {
        if ((photoOrder[i] + 1) === 9) {
           photoOrder[i] = 1;
        } else {
           photoOrder[i] += 1;
        }
        populateFigures();
        console.log("right success")
     }
  }

function leftArrow() {
    for (var i = 0; i < 8; i++) {
        if ((photoOrder[i] - 1) === 0) {
           photoOrder[i] = 8;
        } else {
           photoOrder[i] -= 1;
        }
        populateFigures();
        console.log("left success")
     }
  }
 
 function createEventListeners() {
     var leftarrow = document.getElementById("prevBtn");
     if (leftarrow.addEventListener) {
         leftarrow.addEventListener("click", leftArrow, false);
     } else if (leftarrow.attachEvent) {
         leftarrow.attachEvent("onclick", leftarrow);
     }
     var rightarrow = document.getElementById("nextBtn");
     if (rightarrow.addEventListener) {
         rightarrow.addEventListener("click", rightArrow, false);
     } else if (rightarrow.attachEvent) {
         rightarrow.attachEvent("onclick", rightArrow);
     }
     var mainFig = document.getElementsByTagName("img")[1];
     if (mainFig.addEventListener) {
         mainFig.addEventListener("click", zoomFig, false);
     } else if (mainFig.attachEvent) {
         mainFig.attachEvent("onclick", zoomFig);
     }
 }
 
 /* open center figure in separate window */
 function zoomFig() {
     var propertyWidth = 960;
     var propertyHeight = 600;
     var winLeft = (screen.width - propertyWidth) / 2;
     var winTop = (screen.height - propertyHeight) / 2;
     var winOptions = "width=960, height=600,";
     winOptions += ",left=" + winLeft;
     winOptions += ",top=" + winTop;
     var zoomWindow = window.open("../Assignment/assignment3_zoom.html", "zoomwin", winOptions);
     zoomWindow.focus();
 }
 
 function setUpPage(){
    createEventListeners();
    populateFigures();
 }
 
 if (window.addEventListener) {
     window.addEventListener("load", setUpPage, false); 
 } else if (window.attachEvent)  {
     window.attachEvent("onload", setUpPage);
 }