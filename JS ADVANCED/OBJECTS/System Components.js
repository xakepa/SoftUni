function solve(array) {

    const system = {};

    for (const line of array) {
        const [systemName, componentName, subcomponentName] = line.split(' | ');
        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = { [componentName]: [subcomponentName] }
        } else {
            if (system.hasOwnProperty(systemName) && system[systemName].hasOwnProperty(componentName)) {
                system[systemName][componentName].push(subcomponentName);
            } else {
                if (system.hasOwnProperty(systemName)) {
                    system[systemName][componentName] = [subcomponentName];
                }
            }
        }
    }
    const sortFunc = (a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    const sortSystem = Object.entries(system).sort(sortFunc);

    for (const matrixLine of sortSystem) {
        console.log(matrixLine[0]);

        Object.entries(matrixLine[1])
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(arr => {
                console.log(`|||${arr[0]}`);
                arr[1].forEach(subComp => {
                    console.log(`||||||${subComp}`);
                });
            });
    }
}
solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])