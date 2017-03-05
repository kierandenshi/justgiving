import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { BaseContainer } from './index';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<BaseContainer />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer,
  };
}

describe('containers', () => {

  describe('base', () => {

    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).to.equal('div');
      expect(output.props.className).to.equal('base');
    });

  });

});
