'use strict';

module.exports = { create, mainEntryName };

const mainEntryName = 'main';

function create(entries, mainFiles) {
  const entriesConfig = {
      [mainEntryName]: mainFiles,
  };
  const globalFiles = mainFiles.slice(0, -1);
  Object.keys(entries).forEach(entry => {
      entriesConfig[entry] = [...globalFiles, entries[entry]];
  })
  return entriesConfig;
};
