import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Component from './index';
import { details } from '../../../../tests/fixtures';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component details={details}/>);
  const output = renderer.getRenderOutput();
  return {
    output,
    renderer,
  };
}

describe('coponents', () => {

  describe('charity-details', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('div');
      expect(output.props.className).to.equal('charity-details');
    });

  });

});
