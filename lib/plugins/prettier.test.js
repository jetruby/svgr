"use strict";

var _prettier = _interopRequireDefault(require("./prettier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('prettier', () => {
  it('should prettify code', () => {
    const result = (0, _prettier.default)(`const foo = <div></div>`);
    expect(result).toBe('const foo = <div />;\n');
  });
  it('should support options', () => {
    const result = (0, _prettier.default)(`const foo = <div></div>`, {
      semi: false
    });
    expect(result).toBe('const foo = <div />\n');
  });
});