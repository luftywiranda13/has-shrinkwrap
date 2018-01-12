'use strict';

const hasShrinkwrap = require('./');

it('checks `npm-shrinkwrap.json`', () => {
  expect(hasShrinkwrap()).toBe(false);
  expect(hasShrinkwrap('fixtures/foo')).toBe(false);
  expect(hasShrinkwrap('fixtures/bar')).toBe(true);
});
