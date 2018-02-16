"use strict";

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

var _h2x = _interopRequireDefault(require("../plugins/h2x"));

var _toReactNative = _interopRequireDefault(require("./toReactNative"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toReactNative', () => {
  it('should take svg and convert it to react-native', () => {
    const result = (0, _h2x.default)(`
      <svg>
        <g stroke="#063855" stroke-width="2">
          <path d="M51,37 L37,51" id="Shape"></path>
        </g>
      </svg>
    `, {
      plugins: [_h2xPluginJsx.default, _toReactNative.default]
    });
    expect(result.trim()).toBe(`<Svg>
  <G stroke="#063855" strokeWidth={2}>
    <Path d="M51,37 L37,51" id="Shape" />
  </G>
</Svg>`);
  });
});