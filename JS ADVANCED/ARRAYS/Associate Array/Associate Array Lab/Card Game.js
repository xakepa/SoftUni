function cardGame(input) {

    const players = {};

    const calculateScore = (array) => {
        array = new Set(array);
        array = [...array];
        let result = 0;

        array.forEach(string => {
            let firstChar, secondChar;

            string = string.split('');
            if (string.length === 3) {
                firstChar = string[0] + string[1];
                secondChar = string[2];
            } else {
                firstChar = string[0];
                secondChar = string[1];
            }
            switch (firstChar) {
                case 'J':
                    firstChar = 11;
                    break;
                case 'Q':
                    firstChar = 12;
                    break;
                case 'K':
                    firstChar = 13;
                    break;
                case 'A':
                    firstChar = 14;
                    break;
            }

            switch (secondChar) {
                case 'C':
                    secondChar = 1;
                    break;
                case 'D':
                    secondChar = 2;
                    break;
                case 'H':
                    secondChar = 3;
                    break;
                case 'S':
                    secondChar = 4;
                    break;
            }
            result += +firstChar * +secondChar;
        });
        return result;
    }

    for (const line of input) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = cards;
        } else {
            players[name].push(...cards);
        }
    }
    for (let key in players) {
        if (players.hasOwnProperty(key)) {
            let score = players[key];
            score = calculateScore(score);
            console.log(`${key}: ${score}`);
        }
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])