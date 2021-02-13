const fs = require('fs')
const path = require('path')
const glob = require("glob")

module.exports = function (notesDir, pattern) {
  const absPath = path.resolve(notesDir)
  pattern = pattern || '**/*.md'
  files = glob.sync(path.resolve(notesDir, pattern))

  const source = {}

  files.map((filepath) => {
    var relPath = filepath.substring(absPath.length)
    let filename = relPath.split('.').slice(0, -1).join('.').replace(/ /g, '_').toLowerCase()
    let content = fs.readFileSync(filepath, { encoding: 'utf8' });
    source[filename] = content
  });

  return source
};
