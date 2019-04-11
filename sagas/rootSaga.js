//Saga effects
import { fork, all } from "redux-saga/effects";
import { watchFetchMovies } from "./movieSagas";

export default function* rootSaga() {
  yield all([
    fork(watchFetchMovies)
  ]);
}
