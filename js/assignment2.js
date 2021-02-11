// const rowCnt = 15;
// const columnCnt = 15;

// document.write('<table border="1">');
// for (let i = 1; i <= rowCnt; i++){
//     document.write('<tr>');
//     for(let j = 1; j <= columnCnt; j++){
//         document.write('<td>');
//         document.write(i + ',' + j);
//         document.write('</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');


function fnCalCount(type, ths){
    var $input = $(ths).parents("td").find("input[name='pop_out']");
    var tCount = Number($input.val());
    var tEqCount = Number($(ths).parents("tr").find("td.bseq_ea").html());
    
    if(type=='p'){
        if(tCount < tEqCount) $input.val(Number(tCount)+1);
        
    }else{
        if(tCount >0) $input.val(Number(tCount)-1);    
        }
}
