function solve(name, lastName, hairColor) {
    const man = {
        name,
        lastName,
        hairColor,
    }
    const json = JSON.stringify(man);
    console.log(json);
}
solve('George', 'Jones', 'Brown')