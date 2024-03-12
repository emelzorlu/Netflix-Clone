import { actionTypes } from '../actionTypes';

const initialState = {
  popularMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIES_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    case actionTypes.MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularMovies: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;