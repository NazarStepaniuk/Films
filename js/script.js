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


let filmName, filmMark;
let i = 3;
while(i != 0){
    filmName = prompt("Один из последних просмотренных фильмов?", "");
    filmMark = +prompt("На сколько вы его оцените?(0-10)", "");
    if(filmName == null || filmMark == null || filmName.length > 50 || filmName == "" || filmMark == "" || typeof filmMark != "number" || filmMark > 10 || filmMark < 0){
        alert("Некоректный ввод данных, попробуйте еще раз");
        continue;
    }
    personalMovieDB.movies[filmName] = filmMark;
    i--;
}


console.log(personalMovieDB);