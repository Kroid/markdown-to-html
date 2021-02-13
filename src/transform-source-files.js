const unified = require('unified')
const gfm = require('remark-gfm')
const remarkParse = require('remark-parse')
const remarkRehype = require('remark-rehype')
const rehypeStringify = require('rehype-stringify')
const wikiLinkPlugin = require('remark-wiki-link').wikiLinkPlugin
const linksPluginFactory = require('./links-plugin')



module.exports = function (source) {
  let files = Object.keys(source)
  let linksPlugin = linksPluginFactory(files)
  let result = {}

  files.map((file) => {
    let mdastTree = unified()
      .use(remarkParse)
      .use(gfm)
      .use(wikiLinkPlugin, {
        hrefTemplate: (permalink) => `/${permalink}`,
      })
      .parse(source[file]);

    mdastTree = unified().use(linksPlugin).runSync(mdastTree);

    let hastTree = unified().use(remarkRehype).runSync(mdastTree);
    let html = unified().use(rehypeStringify).stringify(hastTree);

    result[file] = html
  })

  return result
}
