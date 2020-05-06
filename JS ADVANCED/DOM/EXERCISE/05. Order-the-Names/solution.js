function solve() {
    const db = {};

    const genAlphabet = () => {
        for (let i = 65; i < 91; i += 1) {
            db[String.fromCharCode(i)] = [];
        }
    }
    genAlphabet()

    db.P.push('Peterson');
    db.N.push('Nixon');

    const addBtn = document.querySelector("#exercise > article > button");
    addBtn.addEventListener('click', addToDb);

    function addToDb() {

        const input = document.querySelector("#exercise > article > input[type=text]").value;
        const firstLetter = input[0].toUpperCase();
        db[firstLetter]["push"](firstLetter + input.slice(1).toLowerCase());

        const listItems = document.querySelectorAll('ol li');
        listItems[firstLetter.charCodeAt(0) - 65].textContent = db[firstLetter].join(', ');
    }
}


