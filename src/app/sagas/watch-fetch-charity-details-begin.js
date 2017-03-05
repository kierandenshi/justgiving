import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  getDetails,
} from 'app/api';
import {
  FETCH_CHARITY_DETAILS_BEGIN,
  fetchCharityDetailsSuccess,
  fetchCharityDonationsFailed,
} from 'app/actions';

export default function* watchFetchCharityDetailsBegin() {
  yield takeLatest(FETCH_CHARITY_DETAILS_BEGIN, function* watch({ value }) {
    const { charityId } = value;
    try {
      const result = yield call(getDetails, charityId);
      const { response, data } = result;
      if(response.ok) {
        yield put(fetchCharityDetailsSuccess(data));
      }
      else {
        yield put(fetchCharityDonationsFailed(response));
      }
    }
    catch(e) {
      // log the error
    }
  });
}
