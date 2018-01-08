# has-shrinkwrap

[![Package Version](https://img.shields.io/npm/v/has-shrinkwrap.svg)](https://www.npmjs.com/package/has-shrinkwrap)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/has-shrinkwrap/master.svg)](https://travis-ci.org/luftywiranda13/has-shrinkwrap)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/has-shrinkwrap/master.svg)](https://codecov.io/gh/luftywiranda13/has-shrinkwrap)
[![Downloads Status](https://img.shields.io/npm/dm/has-shrinkwrap.svg)](https://npm-stat.com/charts.html?package=has-shrinkwrap&from=2016-04-01)

Check if `npm-shrinkwrap.json` is present in the working directory

## Installation

```sh
npm install --save has-shrinkwrap
```

## Usage

```sh
$ tree
.
├── bar
│   ├── npm-shrinkwrap.json
│   └── package.json
└── foo
    └── package.json
```

```js
const hasShrinkwrap = require('has-shrinkwrap');

hasShrinkwrap('foo');
//=> false

hasShrinkwrap('bar');
//=> true
```

## API

### hasShrinkwrap([cwd])

Returns a `boolean`.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Current working directory.

## Related

* [has-lockfile](https://github.com/luftywiranda13/has-lockfile) – Detect lockfiles in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
