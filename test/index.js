let fname = "";
let lname = "";
let address = "";
let city = "";
let state = "";
let zip = "";
let phone = "";

function initValue(frm)
{
    fname = frm.txtfName.value;
    lname = frm.txtlname.value;
    address = frm.txtaddress.value;
    city = frm.txtcity.value;
    state = frm.txtstate.value;
    zip = frm.txtzip.value;
    phone = frm.txtphone.value;
}
function shipToBill(frm){
    if(frm.copy.checked){
        initValue(frm);
        document.getElementById('deliveryfName').value = document.getElementById('txtfName').value
        frm.deliverylname.value = frm.txtlname.value;
        frm.deliveryaddress.value = frm.txtaddress.value;
        frm.deliverycity.value = frm.txtcity.value;
        frm.deliverystate.value = frm.txtstate.value;
        frm.deliveryzip.value = frm.txtzip.value;
        frm.deliveryphone.value = frm.txtphone.value;
    }else{
        frm.deliveryfName.value = "";
        frm.deliverylname.value = "";
        frm.deliveryaddress.value = "";
        frm.deliverycity.value = "";
        frm.deliverystate.value = "";
        frm.deliveryzip.value = "";
        frm.deliveryphone.value = "";
    }
}
