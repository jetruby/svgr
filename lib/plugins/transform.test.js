"use strict";

var _transform = _interopRequireDefault(require("./transform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('transform', () => {
  it('should wrap it into component', () => {
    const result = (0, _transform.default)(`<div />`, {
      transform: (code, state) => `${state.foo}${code}`
    }, {
      foo: 'bar'
    });
    expect(result).toBe('bar<div />');
  });
});