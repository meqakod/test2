"use sctrict";
const numberOfFilms = prompt("How many movies you watched ?");
const personalMovieBD = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "ptivat": false
};
const lastMovie = prompt("Last watched movie");
const lastMovieRaiting = prompt("Last watched movie raiting");
personalMovieBD.movies[lastMovie] = lastMovieRaiting;
console.log(personalMovieBD)