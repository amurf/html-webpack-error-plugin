const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginName = "HtmlWebpackErrorPlugin";

const style = `
    border-color: red;
    border-style: thin;
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
`;

class HtmlWebpackErrorPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName,
        (data, cb) => {

          if (compilation.errors && compilation.errors.length > 0) {
            data.html = "<pre style='" + style + "'>" + escapeHtml(compilation.errors.toString()) + "</pre>";
          }

          cb(null, data);
        }
      );
    });
  }
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

module.exports = HtmlWebpackErrorPlugin;

