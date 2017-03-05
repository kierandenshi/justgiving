import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'app/reducers';
import rootSaga from 'app/sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
);

const enhancer = (!__DEV__)
  ? createStoreWithMiddleware
  : compose(
    createStoreWithMiddleware,
    window.devToolsExtension ? window.devToolsExtension({
      actionsBlacklist: [],
    }) : f => f,
  );

const configureStore = (initialState) => {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('app/reducers', () =>
      store.replaceReducer(require('app/reducers')/* .default if you use Babel 6+ */)
    );
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
