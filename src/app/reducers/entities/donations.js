import {
  FETCH_CHARITY_DONATIONS_BEGIN,
  FETCH_CHARITY_DONATIONS_SUCCESS,
  FETCH_CHARITY_DONATIONS_FAILED,
} from 'app/actions';

export const initialState = {
  loading: false,
};

const reducer = (state = initialState, { type, value }) => {
  switch (type) {

  case FETCH_CHARITY_DONATIONS_BEGIN:
    return {
      ...state,
      loading: true,
    };

  case FETCH_CHARITY_DONATIONS_SUCCESS:
    return {
      ...state,
      [value.charityId]: {
        ...state[value.charityId],
        ...value.data,
      },
      loading: false,
    };

  case FETCH_CHARITY_DONATIONS_FAILED:
    return {
      ...state,
      loading: false,
    };

  default:
    return state;

  }
};

export default reducer;
