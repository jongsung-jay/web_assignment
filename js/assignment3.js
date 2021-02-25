/* global variables */
var photoOrder = [1, 2, 3, 4, 5];
var photoFavorite = [];

function deleteButtonAndPicture()
{    
    photoFavorite.splice(photoFavorite.indexOf(this.previousSibling.id), 1)
    this.parentNode.removeChild(this.previousSibling);
    this.parentNode.removeChild(this)
}

function createDeleteButton()
{
    var myButton = document.createElement("button");
    myButton.innerText = "Delete?"
    if (myButton.addEventListener) {
        myButton.addEventListener("click", deleteButtonAndPicture, false);
    } else if (myButton.attachEvent) {
        myButton.attachEvent("onclick", deleteButtonAndPicture);
    }
    this.parentNode.appendChild(myButton);
}

var AddFavorite = function () {
    if (photoFavorite.indexOf("image-" + photoOrder[2]) < 0) {
        var favs = document.getElementById("favorites");
        var myImg = document.createElement("img");
        myImg.setAttribute("src", "../images/IMG_0" + photoOrder[2] + "sm.jpg");
        myImg.setAttribute("id", "../image-" + photoOrder[2]);
        myImg.setAttribute("style", "float:left; width: 120px;")
        if (myImg.addEventListener) {
            myImg.addEventListener("click", createDeleteButton, false);
        } else if (myImg.attachEvent) {
            myImg.attachEvent("onclick", createDeleteButton);
        }
        console.log(photoFavorite);
        photoFavorite.push("image-" + photoOrder[2]);
        favs.appendChild(myImg);
    }
}


function populateFigures() {
    var filename;
    var currentFig;
    for (var i = 1; i < 4; i++) {
        filename = "../images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i - 1];
        currentFig.src = filename;
    }
}

// button
function rightArrow() {
    for (var i = 0; i < 8; i++) {
        if ((photoOrder[i] + 1) === 9) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
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
    }
}

function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false);
    } else if (leftarrow.attachEvent) {
        leftarrow.attachEvent("onclick", leftarrow);
    }
    var rightarrow = document.getElementById("rightarrow");
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
    window.name = "parentForm";
    let winOptions = "width=960, height=600,";
    let zoom = window.open("../Assignment/assignment3_zoom.html", "childForm", winOptions);
    zoom.focus();
}

/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}