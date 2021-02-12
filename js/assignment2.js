// function drawingTd(){
//     const rowCnt = document.getElementById(btnTd1).nodeValue;
//     const columnCnt = document.getElementById(btnTd2).nodeValue;
    
//     document.write('<table border="1">');
//     for (let i = 1; i <= rowCnt; i++){
//         document.write('<tr>');
//         for(let j = 1; j <= columnCnt; j++){
//             document.write('<td>');
//             document.write(i + ',' + j);
//             document.write('</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');
// }
// document.getElementById("calculateBtn").addEventListener("click",drawingTd,false);

function main(a1,a2){
    let tag = "<table border='1'>";
    let b1 = parseInt(a1);
    let b2 = parseInt(a2);
    for(i = 1; i <= b1; i++){
        tag += "<tr>";
        for(j = 1; j <= b2; j++){
            tag += "<td>" + i + "," + j + "</td>";
        }
        tag += "</tr>";
    }
    tag += "</table>";
    resultTable.innerHTML = tag;
}

