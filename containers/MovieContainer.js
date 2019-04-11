import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Actions ?
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction,
    updateItemAction, updateItemSuccessAction, //Update
    deleteItemAction, deleteItemSuccessAction
 } from '../actions';

const mapStateToProps = (state) => {      
    return {        
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {                     
            dispatch(fetchMoviesAction());
        }
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;