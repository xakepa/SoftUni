function solve(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = [];
    const numberOfSongs = arr.shift();
    const typeSong = arr.pop();

    for (let i = 0; i < numberOfSongs; i += 1) {
        const [type, name, time] = arr[i].split('_')

        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong == 'all') {
        song.forEach(s => console.log(s.name));
    } else {
        const filtered = songs.filter((s) => s.typeList === typeSong);
        filtered.forEach((s) => console.log(s.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])