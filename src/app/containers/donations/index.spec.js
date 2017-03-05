import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { DonationsContainer } from './index';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<DonationsContainer charityId={'123'} fetchDetails={()=>{}} fetchDonations={()=>{}}/>);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer,
  };
}

describe('containers', () => {

  describe('donations', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('div');
      expect(output.props.className).to.contain('donations');
    });

  });

});
