function movies(arrayOfStrings) {
    const movies = [];
    arrayOfStrings.forEach(line => {
        let token = line.split(' ');

        if (line.includes('addMovie')) {
            const movieName = token.slice(1).join(' ');
            movies.push({ name: movieName })

        } else if (line.includes('directedBy')) {
            const index = token.indexOf('directedBy');
            const movieName = token.slice(0, index).join(' ');
            const movieDirector = token.slice(index + 1).join(' ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = movieDirector;
            }
        } else if (line.includes('onDate')) {
            const index = token.indexOf('onDate');
            const movieName = token.slice(0, index).join(' ');
            const movieDate = token.slice(index + 1).join(' ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = movieDate;
            }
        }
    });

    for (const movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
)