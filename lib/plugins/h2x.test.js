"use strict";

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

var _h2x = _interopRequireDefault(require("./h2x"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('h2x', () => {
  it('should take svg and convert it to jsx', () => {
    const result = (0, _h2x.default)(`
      <svg>
        <g stroke="#063855" stroke-width="2">
          <path d="M51,37 L37,51" id="Shape"></path>
        </g>
      </svg>
    `, {
      plugins: [_h2xPluginJsx.default]
    });
    expect(result.trim()).toBe(`<svg>
  <g stroke="#063855" strokeWidth={2}>
    <path d="M51,37 L37,51" id="Shape" />
  </g>
</svg>`);
  });
});