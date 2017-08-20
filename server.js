const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');

const port = process.env.PORT || 9090;

let app;
const compiler = webpack(config);

if (isProduction) {
  const gzipFiles = ['.js'];
  app = express();
  app.get(gzipFiles, (req, res) => {
    res.set('Content-Encoding', 'gzip');
  });
  app.use('/assets', express.static(`${__dirname}/assets`));
  app.get('*.js', (req, res) => {
    res.sendFile(path.join(__dirname, `dist/${req.url}`));
  });
  app.get('*.css', (req, res) => {
    res.sendFile(path.join(__dirname, `dist/${req.url}`));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  app = express();
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    compress: true,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
  });
  app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hotOnly: true,
    inline: true,
    historyApiFallback: true,
    compress: true,
    open: true,
    stats: 'normal',
  });
}


app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Listening at http://localhost:${port}/`);
});
