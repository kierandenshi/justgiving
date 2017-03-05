const typeValueAction = type => value => ({ type, value });

export const FETCH_CHARITY_DETAILS_BEGIN = 'FETCH_CHARITY_DETAILS_BEGIN';
export const FETCH_CHARITY_DETAILS_SUCCESS = 'FETCH_CHARITY_DETAILS_SUCCESS';
export const FETCH_CHARITY_DETAILS_FAILED = 'FETCH_CHARITY_DETAILS_FAILED';

export const fetchCharityDetailsBegin = typeValueAction(FETCH_CHARITY_DETAILS_BEGIN);
export const fetchCharityDetailsSuccess = typeValueAction(FETCH_CHARITY_DETAILS_SUCCESS);
export const fetchCharityDetailsFailed = typeValueAction(FETCH_CHARITY_DETAILS_FAILED);

export const FETCH_CHARITY_DONATIONS_BEGIN = 'FETCH_CHARITY_DONATIONS_BEGIN';
export const FETCH_CHARITY_DONATIONS_SUCCESS = 'FETCH_CHARITY_DONATIONS_SUCCESS';
export const FETCH_CHARITY_DONATIONS_FAILED = 'FETCH_CHARITY_DONATIONS_FAILED';

export const fetchCharityDonationsBegin = typeValueAction(FETCH_CHARITY_DONATIONS_BEGIN);
export const fetchCharityDonationsSuccess = typeValueAction(FETCH_CHARITY_DONATIONS_SUCCESS);
export const fetchCharityDonationsFailed = typeValueAction(FETCH_CHARITY_DONATIONS_FAILED);
