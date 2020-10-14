const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmByTitle = function(){
    return this.films.map((film) => {
    return film.title
  });
  
}

// const filmByTitle = (title) => {
//   return title += title;
// }

// const result = myNumbers.map(filmByTitle);


// // myNumbers.map = functino(multiplyByTwo) {
//     // const result = []
//     // for (number of myNumbers){
//         // doubleNumber = multuplyByTwo
//         // push doubleNumber to result
// //     }
// //  return result
// // }



module.exports = Cinema;