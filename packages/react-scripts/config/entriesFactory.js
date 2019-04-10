'use strict';

module.exports = { create };

function create(entries, mainFiles) {
  const entriesConfig = {
      main: mainFiles,
  };
  const globalFiles = mainFiles.slice(0, -1);
  Object.keys(entries).forEach(entry => {
      const files = entries[entry];
      const entryFiles = Array.isArray(files) ? files : [files];
      entriesConfig[entry] = globalFiles.concat(entryFiles);
  })
  return entriesConfig;
};
