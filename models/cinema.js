const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmByTitle = function(){
    return this.films.map((film) => {
    return film.title
  });
  
};

Cinema.prototype.findFilmByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.checkFilmsByYear = function(year){
  return this.films.some((film) => {
    return film.year === year;
  });
};

Cinema.prototype.checkFilmLength = function(length) {
  return this.films.every((film) => {
    return film.length > length;
  });
};

Cinema.prototype.calculateLengthOfFilms = function(){
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
};

module.exports = Cinema;