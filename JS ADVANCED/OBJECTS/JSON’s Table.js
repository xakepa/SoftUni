function solve(jsons) {

    console.log('<table>');

    for (const json of jsons) {
        const obj = JSON.parse(json);
        console.log('\t<tr>');
        console.log(`\t\t<td>${obj.name}</td>`);
        console.log(`\t\t<td>${obj.position}</td>`);
        console.log(`\t\t<td>${obj.salary}</td>`);
        console.log('\t</tr>');
    }
    console.log('</table>');
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)