import { 
    FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE,
    UPDATE_MOVIE, UPDATE_SUCCEEDED,
    DELETE_MOVIE, DELETE_SUCCEEDED
 } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() { 
    console.log('watchFetchMovies');
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
