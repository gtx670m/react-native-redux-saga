const urlGetMovies = "http://localhost:3000/movies";

function* getMoviesFromApi() {
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

export const Api = {
  getMoviesFromApi
};
