function solve(obj) {
    let { dizziness } = obj;

    if (dizziness) {
        const requiredWater = 0.1 * obj.experience * obj.weight;
        obj.levelOfHydrated += requiredWater;
        obj.dizziness = false;
    }
    return obj;
}
solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})