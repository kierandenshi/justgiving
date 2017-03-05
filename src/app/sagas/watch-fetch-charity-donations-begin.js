import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  getDonations,
} from 'app/api';
import {
  FETCH_CHARITY_DONATIONS_BEGIN,
  fetchCharityDonationsSuccess,
  fetchCharityDonationsFailed,
} from 'app/actions';

export default function* watchFetchCharityDetailsBegin() {
  yield takeLatest(FETCH_CHARITY_DONATIONS_BEGIN, function* watch({ value }) {
    const { charityId } = value;
    try {
      const result = yield call(getDonations, charityId);
      const { response, data } = result;
      if(response.ok) {
        yield put(fetchCharityDonationsSuccess({ data, charityId }));
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
