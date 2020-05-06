function languages(country) {
    let langSpoken;

    switch (country) {
        case 'USA':
        case 'England':
            langSpoken = 'English';
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            langSpoken = 'Spanish';
            break;
        default: langSpoken = 'unknown';
    }
    console.log(langSpoken);
}