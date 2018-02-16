"use strict";

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

var _memoryFs = _interopRequireDefault(require("memory-fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function compile(rules) {
  const compiler = (0, _webpack.default)({
    context: _path.default.resolve(__dirname),
    entry: './__fixtures__/icon.svg',
    output: {
      path: _path.default.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules
    }
  });
  compiler.outputFileSystem = new _memoryFs.default();
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats.toJson().modules.find(({
        name
      }) => name === './src/__fixtures__/icon.svg').source);
    });
  });
}

describe('webpack loader', () => {
  it('should convert file',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const source = yield compile([{
      test: /\.svg$/,
      use: [{
        loader: _path.default.resolve(__dirname, './webpack.js'),
        options: {
          expandProps: false
        }
      }]
    }]);
    expect(source).toMatchSnapshot();
  }));
  it('should convert file (babel: false)',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    const source = yield compile([{
      test: /\.svg$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-react']
        }
      }, {
        loader: _path.default.resolve(__dirname, './webpack.js'),
        options: {
          babel: false,
          expandProps: false
        }
      }]
    }]);
    expect(source).toMatchSnapshot();
  }));
});