'use strict';

const path = require('path');

exports.flash = {
  enable: true,
  path: path.join(__dirname, '../../../../../'),
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
