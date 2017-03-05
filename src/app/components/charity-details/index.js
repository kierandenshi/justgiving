import React, { PropTypes } from 'react';

import './index.scss';

const CharityDetails = ({
  details,
}) => {

  return details ? (
    <div className={'charity-details'}>
      <div className={'charity-details__logo'}>
        <img src={details.logoAbsoluteUrl} />
      </div>
      <div className={'charity-details__name'}>{details.name}</div>
      <div className={'charity-details__desc'}>{details.description}</div>
    </div>
  ) : null;

};

CharityDetails.propTypes = {
  details: PropTypes.object,
};

export default CharityDetails;
