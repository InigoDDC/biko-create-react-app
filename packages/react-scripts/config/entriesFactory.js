'use strict';

module.exports = { create };

function create(entries, mainFiles) {
  const entriesConfig = {
      main: mainFiles,
  };
  const globalFiles = mainFiles.slice(0, -1);
  Object.keys(entries).forEach(entry => {
      entriesConfig[entry] = [...globalFiles, entries[entry]];
  })
  return entriesConfig;
};
