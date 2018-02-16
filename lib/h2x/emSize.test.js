"use strict";

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

var _h2x = _interopRequireDefault(require("../plugins/h2x"));

var _emSize = _interopRequireDefault(require("./emSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('emSize', () => {
  it('should add width & height if not present', () => {
    const result = (0, _h2x.default)(`<svg>
        <g stroke="#063855" stroke-width="2" />
      </svg>`, {
      plugins: [_h2xPluginJsx.default, _emSize.default]
    });
    expect(result).toMatchSnapshot();
  });
  it('should replace width and height value by 1em', () => {
    const result = (0, _h2x.default)(`<svg width="10px" height="10px">
        <g stroke="#063855" stroke-width="2" />
      </svg>`, {
      plugins: [_h2xPluginJsx.default, _emSize.default]
    });
    expect(result).toMatchSnapshot();
  });
  it('should keep other attributes', () => {
    const result = (0, _h2x.default)(`<svg viewbox="0 0 10 10" width="10px" height="10px">
        <g stroke="#063855" stroke-width="2" />
      </svg>`, {
      plugins: [_h2xPluginJsx.default, _emSize.default]
    });
    expect(result).toMatchSnapshot();
  });
});