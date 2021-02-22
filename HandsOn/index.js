// index -1
function removeSelectDefault(){
    let emptySelect = document.getElementsByTagName("select");
    for(let i=0; i < emptySelect.length; i++){
        emptySelect[i].selectedIndex = -1;
    }
}

// copy Address
function copyBillAddress(){
    let billingInputElements = document.querySelectorAll("#field_a input");
    let deliveryInputElemets = document.querySelectorAll("#field_b input");

    if(document.getElementById('sameCheck').checked){
        for (var i=0; i< billingInputElements.length; i++){
            deliveryInputElemets[i+1].value = billingInputElements[i].value;
        }
        document.querySelector("#field_b select").value = document.querySelector("#field_a select").value;
    }else{
        for(var i = 0; i < billingInputElements.length; i++){
            deliveryInputElemets[i+1].value = "";
        }
        document.querySelector("#field_b select").selectedIndex = -1;
    }
}
let same = document.getElementById("sameCheck");
if(same.addEventListener){
    same.addEventListener("click", copyBillAddress, false);
}else if (same.attachEvent){
    same.attachEvent("onclick", copyBillAddress);
}

// validity
function customvalidity(){
    let fname1 = document.getElementById("txtfName");
    let lname1 = document.getElementById("txtlname");
    let address1 = document.getElementById("txtaddress");
    let city1 = document.getElementById("txtcity");
    let state1 = document.getElementById("txtstate");
    let zip1 = document.getElementById("txtzip");
    let phone1 = document.getElementById("txtphone");
    let fname2 = document.getElementById("deliveryfName");
    let lname2 = document.getElementById("deliverylname");
    let address2 = document.getElementById("deliveryaddress");
    let city2 = document.getElementById("deliverycity");
    let state2 = document.getElementById("deliverystate");
    let zip2 = document.getElementById("deliveryzip");
    let phone2 = document.getElementById("deliveryphone");

    if(fname1.valueMissing || lname1.valueMissing || address1.valueMissing || city1.valueMissing || state1.valueMissing || zip1.valueMissing || phone1.valueMissing ||
        fname2.valueMissing || lname2.valueMissing || address2.valueMissing || city2.valueMissing || state2.valueMissing || zip2.valueMissing || phone2.valueMissing){
        setCustomValidity("Please fill out this field.");
    }
}

function setUpPage(){
    removeSelectDefault();
    copyBillAddress();
}

if(window.addEventListener){
    window.addEventListener("load",setUpPage,false);
}else if(window.attachEvent()){
    window.attachEvent("onload", setUpPage);
}

// copy address
// let fname = "";
// let lname = "";
// let address = "";
// let city = "";
// let state = "";
// let zip = "";
// let phone = "";

// function initValue(frm)
// {
//     fname = frm.txtfName.value;
//     lname = frm.txtlname.value;
//     address = frm.txtaddress.value;
//     city = frm.txtcity.value;
//     state = frm.txtstate.value;
//     zip = frm.txtzip.value;
//     phone = frm.txtphone.value;
// }
// function shipToBill(frm){
//     if(frm.copy.checked){
//         initValue(frm);
//         document.getElementById('deliveryfName').value = document.getElementById('txtfName').value
//         frm.deliverylname.value = frm.txtlname.value;
//         frm.deliveryaddress.value = frm.txtaddress.value;
//         frm.deliverycity.value = frm.txtcity.value;
//         frm.deliverystate.value = frm.txtstate.value;
//         frm.deliveryzip.value = frm.txtzip.value;
//         frm.deliveryphone.value = frm.txtphone.value;
//     }else{
//         frm.deliveryfName.value = "";
//         frm.deliverylname.value = "";
//         frm.deliveryaddress.value = "";
//         frm.deliverycity.value = "";
//         frm.deliverystate.value = "";
//         frm.deliveryzip.value = "";
//         frm.deliveryphone.value = "";
//     }
// }
