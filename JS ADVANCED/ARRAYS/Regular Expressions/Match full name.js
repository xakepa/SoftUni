function nameMatch(names) {
    const regex = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+[a-z]/g;
    console.log(names[0].match(regex).join(' '));
}
nameMatch(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'])