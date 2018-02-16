"use strict";

var _dirCommand = require("./dirCommand");

describe('rename', () => {
  it('should transform fileName to the PascalCase', () => {
    expect((0, _dirCommand.rename)('camel-case.js')).toBe('CamelCase.js');
    expect((0, _dirCommand.rename)('camelCase.js')).toBe('CamelCase.js');
    expect((0, _dirCommand.rename)('camel_case.js')).toBe('CamelCase.js');
    expect((0, _dirCommand.rename)('camelcase.js')).toBe('Camelcase.js');
  });
  it('should change the extension to js by default', () => {
    const result = (0, _dirCommand.rename)('camel-case.svg');
    expect(result).toBe('CamelCase.js');
  });
  it('should change the extension to whatever is configured', () => {
    const result = (0, _dirCommand.rename)('camel-case.svg', {
      ext: 'tsx'
    });
    expect(result).toBe('CamelCase.tsx');
  });
});