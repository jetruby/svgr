"use strict";

var _rename = require("./rename");

describe('pascalCase', () => {
  it('should transform fileName to the PascalCase', () => {
    expect((0, _rename.pascalCase)('camel-case')).toBe('CamelCase');
    expect((0, _rename.pascalCase)('camel_case')).toBe('CamelCase');
    expect((0, _rename.pascalCase)('camelCase')).toBe('CamelCase');
    expect((0, _rename.pascalCase)('camel--Case')).toBe('CamelCase');
    expect((0, _rename.pascalCase)('camel_case')).toBe('CamelCase');
  });
});