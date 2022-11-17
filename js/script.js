let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    while (isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms == null) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count == 0){
        alert("Вы действительно никогда не смотрели фильмы?");
    }  else if (personalMovieDB.count > 0 && personalMovieDB.count < 20) {
        alert("Вы посмотрели довольно мало фильмов");
    } else if (personalMovieDB.count >= 20 && personalMovieDB.count <=40){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 40 && personalMovieDB.count < 5000){
        alert("Вы киноман!");
    } else {
        alert("Проверьте данные на коректность");
    }
}

function addMyMovies(number) {
    let filmName, filmMark;
    while(number != 0){
        filmName = prompt("Один из последних просмотренных фильмов?", "");
        filmMark = +prompt("На сколько вы его оцените?(0-10)", "");
        if(filmName == null || filmMark == null || filmName.length > 50 || filmName == "" || filmMark == "" || isNaN(filmMark) || filmMark > 10 || filmMark < 0){
            alert("Некоректный ввод данных, попробуйте еще раз");
            continue;
        }
        personalMovieDB.movies[filmName] = filmMark;
        number--;
    }
}

function addGenres(number) {
    let genre;
    while(number != 0){
        genre = prompt(`Ваш любимый жанр фильмов(${number})?`, "");
        if(genre.length > 40 || genre == null) {
            alert("Ошибка ввода, попробуйте еще раз!");
            continue;
        }
        personalMovieDB.genres.push(genre);
        number--;
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log("Нету доступа к базе данных, она приватная");
    }
}






start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: true
};
detectPersonalLevel();
addMyMovies(2);
addGenres(3);
showMyDB();