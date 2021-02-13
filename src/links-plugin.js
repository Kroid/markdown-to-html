require('node-json-color-stringify')

var visit = require('unist-util-visit')

function links(files) {
  backlinks = {}

  function plugin() {
    // console.log(backlinks);

    function transformer(tree, file) {
      // console.log(JSON.stringify(tree, null, 2));
      visit(tree, 'wikiLink', visitor)

      function visitor(node) {
        // console.log(node)
        // console.log(JSON.colorStringify(node, null, 2));
      }
    }
    return transformer;
  }

  plugin.backlinks = backlinks
  return plugin
}

module.exports = links
