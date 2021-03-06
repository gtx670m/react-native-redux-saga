/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Send GET / POST api requests to server
*/
const urlGetMovies = "http://localhost:3000/movies";
const urlPostMovies = "http://localhost:3000/movies";
const urlUpdateMovie = "http://localhost:3000/movies";
const urlDeleteMovie = "http://localhost:3000/movies";

function* getMoviesFromApi() {
  //   const response = yield fetch(urlGetMovies, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: ""
  //   });
  //   const movies = yield response.status === 200 || 304
  //     ? JSON.parse(response._bodyInit)
  //     : [];
  //   return movies;
  return yield fetch(urlGetMovies, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: ""
  })
    .then(res => res.json())
    .then(res => {
      return res.status === 200 || 304 ? res : [];
    });
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
  const response = yield fetch(urlPostMovies, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newMovie.name,
      releaseYear: newMovie.releaseYear
    })
  });
  return yield response.status === 201; //true or false
}
//send PUT request to update existing Movie
function* updateMovieFromApi(updatedMovie) {
  console.log(updatedMovie);
  const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
  // const response = yield fetch(urlLink, {
  //   method: "PUT",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     name: updatedMovie.name,
  //     releaseYear: updatedMovie.releaseYear
  //   })
  // });
  // return yield response.status === 200; //true or false
  return yield fetch(urlLink, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: updatedMovie.name,
      releaseYear: updatedMovie.releaseYear
    })
  }).then(res => {
    console.log(res);
    return res.status === 200;
  });
  // return yield response.status === 200; //true or false
}
//send DELETE request to update existing Movie
function* deleteMovieFromApi(deletedMovieId) {
  const urlLink = `${urlDeleteMovie}/${deletedMovieId}`;
  const response = yield fetch(urlLink, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  });
  return yield response.status === 200; //true or false
}
export const Api = {
  getMoviesFromApi,
  insertNewMovieFromApi,
  updateMovieFromApi,
  deleteMovieFromApi
};
