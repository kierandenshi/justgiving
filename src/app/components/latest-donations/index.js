import React, { PropTypes } from 'react';

import './index.scss';

const LatestDonations = ({
  donations,
}) => {

  return donations ? (
    <div className={'latest-donations'}>

      {donations.map((donation, index) => {

        const {
          amount,
          donationDate,
          donorDisplayName,
          imageUrl,
          message,
        } = donation;

        return (
          <div key={`donation-item${index}`} className={'latest-donations__donation'}>
            <div className={'image'}>
              <img src={imageUrl} />
            </div>
            <div className={'details'}>
              <div className={'date'}>{donationDate}</div>
              <div className={'amount'}>{`£${amount}`}</div>
              <div className={'name'}>{donorDisplayName}</div>
              <div className={'message'}>{message}</div>
            </div>
          </div>
        );

      })}

    </div>
  ) : null;

};

LatestDonations.propTypes = {
  donations: PropTypes.array,
};

export default LatestDonations;
