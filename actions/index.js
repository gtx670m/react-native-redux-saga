import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from "./actionTypes";

export const fetchMoviesAction = sort => {
  return {
    type: FETCH_MOVIES,
    sort
  };
};

//Action sent by Redux-saga
export const fetchSuccessAction = receivedMovies => {
  return {
    type: FETCH_SUCCEEDED,
    receivedMovies
  };
};

export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error
  };
};
