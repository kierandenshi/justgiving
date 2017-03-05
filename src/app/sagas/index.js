import { fork } from 'redux-saga/effects';

import watchFetchCharityDetailsBegin from './watch-fetch-charity-details-begin';
import watchFetchCharityDonationsBegin from './watch-fetch-charity-donations-begin';

export default function* root() {
  yield [
    fork(watchFetchCharityDetailsBegin),
    fork(watchFetchCharityDonationsBegin),
  ];
}
