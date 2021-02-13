const fs = require('fs')
const path = require('path')
const Handlebars = require("handlebars");

const defaultTemplateContent = fs.readFileSync(path.resolve(__dirname, './template.html'), { encoding: 'utf8' });

module.exports = function (files, outputDir, templatePath) {
  let templateContent;

  if (templatePath) {
    const absTeplatePath = path.resolve(templatePath)
    templateContent = fs.readFileSync(filepath, { encoding: 'utf8' });
  } else {
    templateContent = defaultTemplateContent
  }

  const template = Handlebars.compile(templateContent);

  Object.keys(files).map((file) => {
    let absPath = `${path.resolve(outputDir)}${file}`;
    let pathParts = absPath.split('/')
    let dir = pathParts.slice(0, -1).join('/');
    let filename = pathParts.slice(-1)[0];
    let content = template({
      title: filename,
      content: files[file],
    })
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync([absPath, 'html'].join('.'), content);
  })
}
