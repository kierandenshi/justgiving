import React from 'react';

import './index.scss';

import DonationsContainer from 'app/containers/donations';

export const BaseContainer = ({

}) => {

  return (
    <div className={'base'}>
      <DonationsContainer charityId={'13441'} />
    </div>
  );

};

export default BaseContainer;
