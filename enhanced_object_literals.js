function getMovies(name, year, rating){
    return{name, year, rating};
}

let avengers = getMovies("Avengers", "2015", "9.0");
console.log(avengers);