var visit = require('unist-util-visit')

function links(files) {
  backlinks = {}

  function plugin() {

    function transformer(tree, file) {
      visit(tree, 'wikiLink', visitor)

      function visitor(node) {
        if (node.data.hProperties.href[0] == '/') {
          node.data.hProperties.href = node.data.hProperties.href.substring(1)
        }
      }
    }
    return transformer;
  }

  plugin.backlinks = backlinks
  return plugin
}

module.exports = links
