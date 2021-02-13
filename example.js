const loadSourceFiles = require('./src/load-source-files')
const transformSourceFiles = require('./src/transform-source-files')
const saveSourceFiles = require('./src/save-transformed-files')

const notesDir = 'markdown'
const outputDir = 'html'

let source = loadSourceFiles(notesDir)
let result = transformSourceFiles(source)
saveSourceFiles(result, outputDir)
