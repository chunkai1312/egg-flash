'use strict';

const assert = require('assert');

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('session');
  assert.notEqual(index, -1, '[egg-session] is required');
  app.config.coreMiddleware.push('flash');
};
