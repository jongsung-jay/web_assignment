var photoOrderArray = window.opener.photoOrder;
var figFilename = "../images/IMG_0" + photoOrderArray[2] + ".jpg";

function closeWin() {
    window.close();
}

function addFavorite() {
    window.opener.AddFavorite();
}

function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
    var addFavoriteDiv = document.getElementsByTagName("p")[1];
    if (addFavoriteDiv.addEventListener) {
        addFavoriteDiv.addEventListener("click", addFavorite, false);
    } else if (addFavoriteDiv.attachEvent) {
        addFavoriteDiv.attachEvent("onclick", addFavorite);
    }
}

function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; 
    createEventListener();
}

window.onload = pageSetup;