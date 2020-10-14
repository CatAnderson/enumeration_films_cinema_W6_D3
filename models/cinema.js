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






module.exports = Cinema;