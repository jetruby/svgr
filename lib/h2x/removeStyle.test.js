"use strict";

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

var _h2x = _interopRequireDefault(require("../plugins/h2x"));

var _removeStyle = _interopRequireDefault(require("./removeStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('removeStyle', () => {
  it('should remove style elements', () => {
    const result = (0, _h2x.default)(`
      <svg>
        <style></style>
        <style></style>
        <g stroke="#063855" stroke-width="2">
          <path d="M51,37 L37,51" id="Shape"></path>
        </g>
      </svg>
    `, {
      plugins: [_h2xPluginJsx.default, _removeStyle.default]
    });
    expect(result.trim()).toBe(`<svg>
  <g stroke="#063855" strokeWidth={2}>
    <path d="M51,37 L37,51" id="Shape" />
  </g>
</svg>`);
  });
});