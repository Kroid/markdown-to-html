var visit = require('unist-util-visit')

function links(files) {
  backlinks = {}

  function plugin() {

    function transformer(tree, file) {
      visit(tree, 'wikiLink', visitor)

      function visitor(node) { }
    }
    return transformer;
  }

  plugin.backlinks = backlinks
  return plugin
}

module.exports = links
