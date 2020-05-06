function encryption(input) {

    function songEncryption(song) {
        let enctypted = '';
        const length = song.split(':')[0].length;

        for (let letter of song) {
            if (letter === ' ') {
                letter = ' ';
            }
            else if (letter === '\'') {
                letter = '\'';
            } else if (letter === ':') {
                letter = '@';
            } else {
                letter = letter.charCodeAt(0) + length;
                if ((letter - length) <= 90 && letter > 90) {
                    letter -= 26;
                } else if (letter > 122) {
                    letter -= 26;
                }
                letter = String.fromCharCode(letter);
            }
            enctypted += letter;
        }
        return enctypted;
    }

    for (let line of input) {


        const artistAndSong = line;
        line = line.split(':');
        const artist = line[0];
        const song = line[1];
        const validArtist = /^[A-Z][a-z\s\']+$/g;
        const validSong = /^[A-Z\s]+$/;

        if (line[0] === 'end') {
            break;
        }

        if (!validArtist.test(artist) || !validSong.test(song)) {
            console.log('Invalid input!');
        } else {
            console.log(`Successful encryption: ${songEncryption(artistAndSong)}`);
        }
    };
}
encryption(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end'])