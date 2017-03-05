import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import BaseContainer from 'app/containers/base';

render(
  <Provider store={store}>
    <BaseContainer />
  </Provider>,
  document.getElementById('app')
);
