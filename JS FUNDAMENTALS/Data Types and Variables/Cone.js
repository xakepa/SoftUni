function coneCalc(radius, height) {
    const volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    const slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const lateral = Math.PI * radius * slant;
    const base = Math.PI * Math.pow(radius, 2);
    const area = lateral + base;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
coneCalc(3.3, 7.8);