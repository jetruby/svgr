"use strict";

var _svgo = _interopRequireDefault(require("./svgo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

describe('svgo', () => {
  it('should optimize svg',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const result = yield (0, _svgo.default)(`<?xml version="1.0" encoding="UTF-8"?>
    <svg width="88px" height="88px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
        <title>Dismiss</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Blocks" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
            <g id="Dismiss" stroke="#063855" stroke-width="2">
                <path d="M51,37 L37,51" id="Shape"></path>
                <path d="M51,51 L37,37" id="Shape"></path>
            </g>
        </g>
    </svg>`);
    expect(result).toBe('<svg width="88" height="88" xmlns="http://www.w3.org/2000/svg"><g stroke="#063855" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M51 37L37 51M51 51L37 37"/></g></svg>');
  }));
  it('should support options',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const result = yield (0, _svgo.default)(`<?xml version="1.0" encoding="UTF-8"?>
    <svg width="88px" height="88px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
        <title>Dismiss</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Blocks" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
            <g id="Dismiss" stroke="#063855" stroke-width="2">
                <path d="M51,37 L37,51" id="Shape"></path>
                <path d="M51,51 L37,37" id="Shape"></path>
            </g>
        </g>
    </svg>`, {
      plugins: [{
        removeDesc: false
      }]
    });
    expect(result).toBe('<svg width="88" height="88" xmlns="http://www.w3.org/2000/svg"><desc>Created with Sketch.</desc><g stroke="#063855" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M51 37L37 51M51 51L37 37"/></g></svg>');
  }));
});