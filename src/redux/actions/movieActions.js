import axios from 'axios';
import { actionTypes } from '../actionTypes';
import { options } from '../../constants';

// api'dan filmleri alan ve store'a akataran aksiyon
export const getPopular = () => (dispatch) => {
  // yüklenme durumunu reducer'a bildir
  dispatch({ type: actionTypes.MOVIES_LOADING });

  // api dan popüler fimleri al
  axios
    .get('https://api.themoviedb.org/3/movie/popular', options)
    // başarılı olursa reducer'a bildir
    .then((res) =>
      dispatch({
        type: actionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    // başarısız olursa reducer'a bildir
    .catch((err) =>
      dispatch({
        type: actionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};