function towns(array) {

    const obj = {};

    array.forEach(string => {
        string = string.split(' | ')
        obj['town'] = string[0];
        obj['latitude'] = Number(string[1]).toFixed(2);
        obj['longitude'] = Number(string[2]).toFixed(2);
        console.log(obj);
    });

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])