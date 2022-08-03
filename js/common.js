"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
    },
  rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
          i--;
          console.log('error');
        }  
      }
    },
  detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
      } else {
        alert('Произошла ошибка');    
      }
    },
  showMyDB: function (hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
  toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    },
  writeYourGenres: function() {
      for (let i = 1; i < 2; i++) {
        let genres = prompt(`Ваши любимые жанры через запятую`).toLowerCase();
        if (genres == null || genres == '') {
        console.logsss('Некорректные данные');
        i--;
        } else {
          personalMovieDB.genres = genres.split(', ');
          personalMovieDB.genres.sort();
        }      
      }
      personalMovieDB.genres.forEach(function(item, i) {
        console.log(`Любимый жанр № ${i + 1} - это ${item}`);
      });
    }
};
















