const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "0");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

let filmName = prompt("Один из последних просмотренных фильмов?", "");
let filmMark = +prompt("На сколько вы его оцените?(0-10)", "");
personalMovieDB.movies[filmName] = filmMark;

filmName = prompt("Один из последних просмотренных фильмов?", "");
filmMark = +prompt("На сколько вы его оцените?(0-10)", "");
personalMovieDB.movies[filmName] = filmMark;

console.log(personalMovieDB);