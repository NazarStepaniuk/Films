const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function(){
        let numberOfFilms;
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
        while (isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms == null) {
            numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
        }
        this.count = numberOfFilms;
    },
    detectPersonalLevel: function(){
        if(this.count == 0){
            alert("Вы действительно никогда не смотрели фильмы?");
        }  else if (this.count > 0 && this.count < 20) {
            alert("Вы посмотрели довольно мало фильмов");
        } else if (this.count >= 20 && this.count <=40){
            alert("Вы классический зритель");
        } else if (this.count > 40 && this.count < 5000){
            alert("Вы киноман!");
        } else {
            alert("Проверьте данные на коректность");
        }
    },
    addMyMovies: function(number) {
        let filmName, filmMark;
        while(number != 0){
            filmName = prompt("Один из последних просмотренных фильмов?", "");
            filmMark = +prompt("На сколько вы его оцените?(0-10)", "");
            if(filmName == null || filmMark == null || filmName.length > 50 || filmName == "" || filmMark == "" || isNaN(filmMark) || filmMark > 10 || filmMark < 0){
                alert("Некоректный ввод данных, попробуйте еще раз");
                continue;
            }
            this.movies[filmName] = filmMark;
            number--;
        }
    },
    addGenres: function(number) {
        let genre;
        while(number != 0){
            genre = prompt(`Ваш любимый жанр фильмов(${number})?`, "");
            if(genre == null || genre.length > 40 || genre === "") {
                alert("Ошибка ввода, попробуйте еще раз!");
                continue;
            }
            this.genres.push(genre);
            number--;
        }
        this.genres.forEach((item, i) =>{
            alert(`Любимый жанр #${i + 1} - ${item}`);
        });
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        } else {
            console.log("Нету доступа к базе данных, она приватная");
        }
    },
    toggleVisibleMyDB: function() {
        if(this.privat)
            this.privat = false;
        else
            this.privat = true;
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.addMyMovies(0);
personalMovieDB.addGenres(1);
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();