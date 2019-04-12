'use strict';

module.exports = function loadCustomizer(modulePath, webpackEnv) {
  const customizer = requireCustomizer(modulePath, webpackEnv);
  return ensureCustomizerMethods(customizer);
};

function requireCustomizer(modulePath, webpackEnv) {
  try {
    const moduleDefault = require(modulePath);
    console.log(`Extending webpack config from: ${modulePath}`);
    return moduleDefault(webpackEnv);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return {};
    }
    throw e;
  }
}

function ensureCustomizerMethods(customizer) {
  return Object.assign(
    {
      getEntries: () => ({}),
      getRules: () => [],
      getPlugins: () => [],
      getIncludeCompilePaths: () => [],
      getJsonpFunctionName: () => undefined,
      getResolvePlugins: () => [],
    },
    customizer
  );
}
