function phoneNumberSearch(text) {
    const regexPattern = /\+359(-| )2\1\d{3}\1\d{4}\b/g;
    console.log(text[0].match(regexPattern).join(', '));
}
phoneNumberSearch(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)