'use strict';

const { existsSync } = require('fs');
const { resolve } = require('path');

const hasShrinkwrap = (cwd = process.cwd()) => {
  return existsSync(resolve(cwd, 'npm-shrinkwrap.json'));
};

module.exports = hasShrinkwrap;
