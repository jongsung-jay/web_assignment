

var photoOrderArray = window.opener.photoOrder;
var figFilename = "../img/IMG_0" + photoOrderArray[2] + ".jpg";

function closeWin(){ 
    window.close(); 
}

function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; 
    // createEventListener();
 }

function setParentFig(){
    figFilename = window.opener.document.getElementById("ChildFigure");
    // window.close(); 
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

window.onload = pageSetup();

// function createEventListener() {
//     var closeWindowDiv = document.getElementsByTagName("p")[0];
//     if (closeWindowDiv.addEventListener) {
//         closeWindowDiv.addEventListener("click", closeWin, false);
//     } else if (closeWindowDiv.attachEvent) {
//         closeWindowDiv.attachEvent("onclick", closeWin);
//     }
// }



// function addFavorites(){
//     if (window.opener.favoriteCount === 8){
//         window.alert("The favorites list is full.\nYou have to remove at least a favorite!")
//     }
//     document.getElementsByTagName("img")[0].src = figFilename; 
//     window.opener.favoriteCount+=1;
// }

// function favEventListener() {
//     var favoriteWindowDiv = document.getElementById("fav");
//     if (favoriteWindowDiv.addEventListener) {
//         favoriteWindowDiv.addEventListener("click", setParentFig, false);
//     } else if (closeWindowDiv.attachEvent) {
//         favoriteWindowDiv.attachEvent("onclick", setParentFig);
//     }
// }

