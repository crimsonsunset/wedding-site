const webpack = require('webpack');
const { resolve } = require('path');
const fs = require('fs');

class WebpackUtils {
  constructor() {
    let packageJSON;
    try {
      packageJSON = require(resolve(__dirname, './package.json'));
    } catch (err) {
      console.log('cant find packageJSON', err);
    }

    // console.log('process.env')
    // console.log(process.env)
    let { NODE_ENV, npm_lifecycle_event } = process.env;

    const environment = npm_lifecycle_event === 'dev' ? 'Development Build' : 'Production Build';
    const version = packageJSON ? packageJSON.version : 'NA-Version';
    const name = packageJSON ? packageJSON.name : 'NA-Name';

    const date = new Date();
    const fullDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    this.consoleRainbowPlugin = new webpack.DefinePlugin({
      colorLog: function(color, input) {
        console.log(`%c${input}`, `color:${color};`);
      },
    });

    const BUILD_INFO = {
      version: JSON.stringify(version),
      date: JSON.stringify(`${fullDate} - ${time}`),
      name: JSON.stringify(name),
      environment: JSON.stringify(environment),
    };
    this.buildInfoPlugin = new webpack.DefinePlugin({ BUILD_INFO });
    this.buildInfo = BUILD_INFO;
  }

  _listFolderContents(dir) {
    return fs
      .readdirSync(dir)
      .map((file) => (!file.includes('DS_Store') ? file : undefined))
      .filter(Boolean);
  }
}

module.exports = new WebpackUtils();
