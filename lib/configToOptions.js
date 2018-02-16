"use strict";

exports.__esModule = true;
exports.default = void 0;

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

var _wrapIntoComponent = _interopRequireDefault(require("./transforms/wrapIntoComponent"));

var _wrapIntoNativeComponent = _interopRequireDefault(require("./transforms/wrapIntoNativeComponent"));

var _stripAttribute = _interopRequireDefault(require("./h2x/stripAttribute"));

var _emSize = _interopRequireDefault(require("./h2x/emSize"));

var _expandProps = _interopRequireDefault(require("./h2x/expandProps"));

var _svgRef = _interopRequireDefault(require("./h2x/svgRef"));

var _replaceAttrValue = _interopRequireDefault(require("./h2x/replaceAttrValue"));

var _removeComments = _interopRequireDefault(require("./h2x/removeComments"));

var _removeStyle = _interopRequireDefault(require("./h2x/removeStyle"));

var _toReactNative = _interopRequireDefault(require("./h2x/toReactNative"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultConfig = {
  ref: false,
  svgo: true,
  prettier: true,
  native: false,
  icon: false,
  viewBox: true,
  replaceAttrValues: [],
  expandProps: true,
  title: true,
  prefixID: '',
  keepUselessDefs: false,
  ids: false,
  precision: 3,
  // default to svgo
  semi: undefined,
  // default to prettier
  singleQuote: undefined,
  // default to prettier
  tabWidth: undefined,
  // default to prettier
  useTabs: undefined,
  // default to prettier
  trailingComma: undefined,
  // default to prettier
  bracketSpacing: undefined,
  // default to prettier
  jsxBracketSameLine: undefined,
  // default to prettier
  template: _wrapIntoComponent.default,
  ext: 'js'
};

function configToOptions(config = {}) {
  if (!config.template && config.native) config.template = _wrapIntoNativeComponent.default;
  config = _extends({}, defaultConfig, config);

  function getH2xPlugins() {
    const plugins = [_h2xPluginJsx.default, (0, _stripAttribute.default)('xmlns'), _removeComments.default, _removeStyle.default];
    if (config.icon) plugins.push(_emSize.default);
    config.replaceAttrValues.forEach(([oldValue, newValue]) => {
      plugins.push((0, _replaceAttrValue.default)(oldValue, newValue));
    });
    if (config.ref) plugins.push(_svgRef.default);
    if (config.expandProps) plugins.push(_expandProps.default);
    if (config.native) plugins.push(_toReactNative.default);
    return plugins;
  }

  function getSvgoConfig() {
    const plugins = [];
    const svgoConfig = {
      plugins
    };
    if (!config.title || config.icon) plugins.push({
      removeTitle: {}
    });else if (config.title) plugins.push({
      removeTitle: false
    });
    if (config.viewBox) plugins.push({
      removeViewBox: false
    });
    if (config.keepUselessDefs) plugins.push({
      removeUselessDefs: false
    });
    let cleanupIDs = {};

    if (config.ids) {
      cleanupIDs = {
        remove: false
      };
    }

    if (config.prefixID) {
      cleanupIDs = (0, _lodash.merge)(cleanupIDs, {
        prefix: config.prefixID
      });
    }

    plugins.push({
      cleanupIDs
    });
    if (config.precision === 'number') svgoConfig.floatPrecision = Number(svgoConfig.precision);
    return svgoConfig;
  }

  function getPrettierConfig() {
    return {
      semi: config.semi,
      singleQuote: config.singleQuote,
      tabWidth: config.tabWidth,
      useTabs: config.useTabs,
      trailingComma: config.trailingComma,
      bracketSpacing: config.bracketSpacing,
      jsxBracketSameLine: config.jsxBracketSameLine
    };
  }

  return {
    svgo: config.svgo ? getSvgoConfig() : null,
    h2x: {
      plugins: getH2xPlugins()
    },
    prettier: config.prettier ? getPrettierConfig() : null,
    template: config.template(config),
    ext: config.ext
  };
}

var _default = configToOptions;
exports.default = _default;