'use strict';

const movies = require('./movies');

////////// My custom comparison functions

function sortYearComparer(yearA,yearB){
  if(yearA.year<yearB.year) return -1;
  if(yearA.year>yearB.year) return 1;
  return 0;
}

function sortTitleComparer(movieA,movieB){
  let titleA= movieA.title.replace('The ', '');
  let titleB= movieB.title.replace('The ', '');

  if(titleA < titleB) return -1;
  if(titleA > titleB) return 1;
  return 0;
}

///////// End of my custom comparison function

function sortYear(movies,comparator) {
  movies.sort(comparator);
  return movies;
}

function sortTitle(movies,comparator) {
  movies.sort(comparator);
  return movies;
}

function inGenre(movies, genre) {
  let filteredArray=[];
  movies.forEach(movie => {
    if(movie.genres.includes(genre)) filteredArray.push(movie);
  });
  return filteredArray;
}


console.log('Sort by year :\n',sortYear(movies,sortYearComparer));
console.log('Sort by title :\n',sortTitle(movies,sortTitleComparer));
console.log('Filter Movies by genre:\n', inGenre(movies,'Comedy'));


module.exports = { sortYear, sortTitle, inGenre, sortYearComparer, sortTitleComparer};
