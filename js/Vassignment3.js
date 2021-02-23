// show image
let photoOrder = [1, 2, 3, 4, 5];

function populateFigures() {
    let filename, currentFig;
    for (let i = 1; i < 4; i++) {
        filename = "../img/IMG_0" + photoOrder[i] + "sm.jpg";
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
        // console.log("right success")
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
        // console.log("left success")
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
 function zoomFig() {
     window.name = "parentForm";
     let winOptions = "width=960, height=600,";
     let zoom = window.open("../Assignment/assignment3_zoom.html", "childForm", winOptions);
     zoom.focus()
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


let photoFav = []; 
function deleteButtonAndPicture()
{    
    photoFav.splice(photoFav.indexOf(this.previousSibling.id), 1)
    this.parentNode.removeChild(this.previousSibling);
    this.parentNode.removeChild(this)
}

var AddFavorite = function () {
    if (photoFav.indexOf("image-" + photoOrder[2]) < 0) {
        var favs = document.getElementById("favorites");
        var myImg = document.createElement("img");
        myImg.setAttribute("src", "images/IMG_0" + photoOrder[2] + "sm.jpg");
        myImg.setAttribute("id", "image-" + photoOrder[2]);
        myImg.setAttribute("style", "float:left; width: 120px;")
        if (myImg.addEventListener) {
            myImg.addEventListener("click", createDeleteButton, false);
        } else if (myImg.attachEvent) {
            myImg.attachEvent("onclick", createDeleteButton);
        }
        console.log(photoFav);
        photoFav.push("image-" + photoOrder[2]);
        favs.appendChild(myImg);
    }
}

