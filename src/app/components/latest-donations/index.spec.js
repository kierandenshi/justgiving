import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Component from './index';
import { donations } from '../../../../tests/fixtures';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component donations={donations.donations}/>);
  const output = renderer.getRenderOutput();
  return {
    output,
    renderer,
  };
}

describe('coponents', () => {

  describe('latest-donations', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('div');
      expect(output.props.className).to.equal('latest-donations');
    });

  });

});
