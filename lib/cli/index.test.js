"use strict";

var _fs = _interopRequireDefault(require("mz/fs"));

var _child_process = require("mz/child_process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

describe('cli', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  it('should work with a simple file',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref2 = yield (0, _child_process.exec)('bin/svgr __fixtures__/one.svg'),
          stdout = _ref2[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-svgo',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref4 = yield (0, _child_process.exec)('bin/svgr --no-svgo __fixtures__/one.svg'),
          stdout = _ref4[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-prettier',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref6 = yield (0, _child_process.exec)('bin/svgr --no-prettier __fixtures__/one.svg'),
          stdout = _ref6[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-expand-props',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref8 = yield (0, _child_process.exec)('bin/svgr --no-expand-props __fixtures__/one.svg'),
          stdout = _ref8[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--icon',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref10 = yield (0, _child_process.exec)('bin/svgr --icon __fixtures__/one.svg'),
          stdout = _ref10[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--ref',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref12 = yield (0, _child_process.exec)('bin/svgr --ref __fixtures__/one.svg'),
          stdout = _ref12[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--ref --no-expand-props',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref14 = yield (0, _child_process.exec)('bin/svgr --ref --no-expand-props __fixtures__/one.svg'),
          stdout = _ref14[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--ids',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref16 = yield (0, _child_process.exec)('bin/svgr --ids __fixtures__/one.svg'),
          stdout = _ref16[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-view-box',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref18 = yield (0, _child_process.exec)('bin/svgr --no-view-box __fixtures__/one.svg'),
          stdout = _ref18[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--replace-attr-value',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref20 = yield (0, _child_process.exec)('bin/svgr --replace-attr-value "#063855=currentColor" __fixtures__/one.svg'),
          stdout = _ref20[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--precision',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref22 = yield (0, _child_process.exec)('bin/svgr --precision 10 __fixtures__/one.svg'),
          stdout = _ref22[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--tab-width',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref24 = yield (0, _child_process.exec)('bin/svgr --tab-width 4 __fixtures__/one.svg'),
          stdout = _ref24[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-title',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref26 = yield (0, _child_process.exec)('bin/svgr --no-title __fixtures__/one.svg'),
          stdout = _ref26[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--no-semi',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref28 = yield (0, _child_process.exec)('bin/svgr --no-semi __fixtures__/one.svg'),
          stdout = _ref28[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--template',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref30 = yield (0, _child_process.exec)('bin/svgr --template __fixtures__/template.js __fixtures__/one.svg'),
          stdout = _ref30[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('--native',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref32 = yield (0, _child_process.exec)('bin/svgr --native __fixtures__/one.svg'),
          stdout = _ref32[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('should work with stdin',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const _ref34 = yield (0, _child_process.exec)('bin/svgr < __fixtures__/one.svg'),
          stdout = _ref34[0];

    expect(stdout).toMatchSnapshot();
  }));
  it('should work with output directory',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    yield (0, _child_process.exec)('bin/svgr --out-dir __fixtures_build__ __fixtures__');
    expect((yield _fs.default.readFile('__fixtures_build__/One.js', 'utf-8'))).toMatchSnapshot();
    expect((yield _fs.default.readFile('__fixtures_build__/nested/Two.js', 'utf-8'))).toMatchSnapshot();
  }));
});