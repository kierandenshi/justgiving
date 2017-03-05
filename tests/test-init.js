require('babel-register')({
  presets: ['es2015'],
});
require('babel-polyfill');

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';
import matchMedia from 'match-media-mock';

chai.use(sinonChai);

// make available globally so we dont have to explicitly import
// in each test
global.expect = expect;
global.sinon = sinon;

// shim dom and various expected objects and functions
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.self = window;
global.navigator = { userAgent: 'Chrome' };
global.console.debug = function debug() {};
global.window.matchMedia = matchMedia.create();

// shim environment variables
global.__DEV__ = (process.env.NODE_ENV !== 'production');
global.__DEBUG__ = false;
global.__DEPLOYMENT_ENV__ = 'test';
global.environment = process.env.NODE_ENV;

// ensure requiring css not to throw
require.extensions['.css'] = function css() {
  return null;
};
require.extensions['.scss'] = function scss() {
  return null;
};
require.extensions['.svg'] = function svg() {
  return null;
};
require.extensions['.png'] = function png() {
  return null;
};
require.extensions['.md'] = function md() {
  return null;
};
