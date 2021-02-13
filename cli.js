#!/usr/bin/env node

const { program } = require('commander');

const loadSourceFiles = require('./src/load-source-files')
const transformSourceFiles = require('./src/transform-source-files')
const saveSourceFiles = require('./src/save-transformed-files')

program
  .option('-i, --input <dirname>', 'directory name with markdown files', '.')
  .option('-o, --output <dirname>', 'directory for compiled html', 'html')
  .option('-g, --glob <glob>', 'glob pattern for markdown files', '**/*.md')
  .option('-t, --template <filename>', 'template file, handlebars')

program.parse();

const options = program.opts();

let source = loadSourceFiles(options.input, options.glob);
let result = transformSourceFiles(source);
saveSourceFiles(result, options.output);
