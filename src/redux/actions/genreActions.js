// kategori verilerini al ve reducer'a haber ver

import axios from 'axios';
import { actionTypes } from '../actionTypes';
import { options } from '../../constants/index';

export const getGenres = () => (dispatch) => {
  // api isteği atıldığını reducer'a haber ver
  dispatch({ type: actionTypes.GENRES_LOADING });

  // api isteği at
  axios
    .get('https://api.themoviedb.org/3/genre/movie/list', options)
    // veri gelirse reducer'a haber ver
    .then((res) =>
      dispatch({ type: actionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    // hata olursa reducer'a haber ver
    .catch((err) =>
      dispatch({
        type: actionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};