import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withLifecycle from 'app/decorators/with-lifecycle';

import './index.scss';

import CharityDetails from 'app/components/charity-details';
import LatestDonations from 'app/components/latest-donations';

import getCharityDetails from 'app/selectors/get-charity-details';
import getCharityDonations from 'app/selectors/get-charity-donations';

import {
  fetchCharityDetailsBegin,
  fetchCharityDonationsBegin,
} from 'app/actions';

export const DonationsContainer = ({
  details,
  donations,
}) => {

  return (
    <div className={'donations container'}>
      <CharityDetails details={details} />
      <h1>Latest donations</h1>
      <LatestDonations donations={donations} />
    </div>
  );

};

DonationsContainer.propTypes = {
  charityId: PropTypes.string.isRequired,
  fetchDetails: PropTypes.func.isRequired,
  fetchDonations: PropTypes.func.isRequired,
  details: PropTypes.object,
  donations: PropTypes.array,
};

export default connect(
  (state, props) => ({
    details: getCharityDetails(state, { charityId: props.charityId }),
    donations: getCharityDonations(state, { charityId: props.charityId }),
  }),
  {
    fetchDetails: fetchCharityDetailsBegin,
    fetchDonations: fetchCharityDonationsBegin,
  }
)(withLifecycle(
  {
    willMount: (props) => {
      const { fetchDetails, fetchDonations, charityId } = props;
      fetchDetails({ charityId });
      fetchDonations({ charityId });
    },
  }
)(DonationsContainer));
