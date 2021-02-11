const rowCnt = 15;
const columnCnt = 15;

document.write('<table border="1">');
for (let i = 1; i <= rowCnt; i++){
    document.write('<tr>');
    for(let j = 1; j <= columnCnt; j++){
        document.write('<td>');
        document.write(i + ',' + j);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');