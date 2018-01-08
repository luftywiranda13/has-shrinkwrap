'use strict';

const hasShrinkwrap = require('./');

test('output', () => {
  expect(hasShrinkwrap()).toBe(false);
  expect(hasShrinkwrap('fixtures/foo')).toBe(false);
  expect(hasShrinkwrap('fixtures/bar')).toBe(true);
});
