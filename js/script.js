// Автоматизировать вопросы пользователю про фильмы при помощи цикла
// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов.
// Если это происходит - возвращаем пользователя к вопросам опять.

// При помощи условий проверить personalMovieDB.count,
// и если он меньше 10 - вывести сообщение 'Просмотрено довольно мало фильмов',
// если от 10 до 30 - 'Вы классический зритель',
// а если больше - 'Вы киноман'.
// А если не подошло ни к одному варианту - 'Произошла ошибка'
// Потренироваться и переписать цикл еще двумя способами

let numberOfFilms;
let film = "";
let rate;

//Первый вариант

do {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
} while (!numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: [],
  genres: false,
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
  do {
    film = prompt("Один из последних просмотренных фильмов?");
    rate = +prompt("На сколько оцените его?");
  } while (!film || film.length > 50 || !rate);
  personalMovieDB.movies[film] = rate;
}
console.log(personalMovieDB);

//Второй вариант
// while (!numberOfFilms) {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
// }

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: [],
//   genres: false,
// };
// if (personalMovieDB.count < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка");
// }

// for (let i = 0; i < 2; i++) {
//   film = prompt("Один из последних просмотренных фильмов?");
//   rate = +prompt("На сколько оцените его?");
//   if (!film || film.length > 50 || !rate) {
//     continue;
//   }
//   personalMovieDB.movies[film] = rate;
// }

// console.log(personalMovieDB);

//Третий вариант

// while (!numberOfFilms) {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
// }

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: [],
//   genres: false,
// };

// if (personalMovieDB.count < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка");
// }

// let i = 0;
// while (i < 2) {
//   film = prompt("Один из последних просмотренных фильмов?");
//   rate = +prompt("На сколько оцените его?");
//   if (!film || film.length > 50 || !rate) {
//     continue;
//   }
//   i++;
//   personalMovieDB.movies[film] = rate;
// }

// console.log(personalMovieDB);
