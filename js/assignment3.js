var photoOrder = [1, 2, 3, 4, 5];
var photoFavorite = [];

function createDeleteButton()
{
    var myButton = confirm("Do you want to delete your image? \n** You cannot add images that you deleted once again.**");
    if(myButton == true){
        $("img:last").remove();
    }
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

function zoomFig() {
    window.name = "parentForm";
    var propertyWidth = 960;
    var propertyHeight = 600;
    var winLeft = (screen.width - propertyWidth) / 2;
    var winTop = (screen.height - propertyHeight) / 2;
    var winOptions = "width=960, height=600,";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    let zoom = window.open("../Assignment/assignment3_zoom.html", "childForm", winOptions);
    zoom.focus();
}

function setUpPage() {
    createEventListeners();
    populateFigures();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}