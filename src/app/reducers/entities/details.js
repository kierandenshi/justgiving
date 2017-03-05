import {
  FETCH_CHARITY_DETAILS_BEGIN,
  FETCH_CHARITY_DETAILS_SUCCESS,
  FETCH_CHARITY_DETAILS_FAILED,
} from 'app/actions';

export const initialState = {
  loading: false,
};

const reducer = (state = initialState, { type, value }) => {
  switch (type) {

  case FETCH_CHARITY_DETAILS_BEGIN:
    return {
      ...state,
      loading: true,
    };

  case FETCH_CHARITY_DETAILS_SUCCESS:
    return {
      ...state,
      [value.id]: {
        ...state[value.id],
        ...value,
      },
      loading: false,
    };

  case FETCH_CHARITY_DETAILS_FAILED:
    return {
      ...state,
      loading: false,
    };

  default:
    return state;

  }
};

export default reducer;
