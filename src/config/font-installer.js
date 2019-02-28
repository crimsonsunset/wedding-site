const fonts = require('./possible-fonts');
const fs = require('fs');

function splitNames(names){
  let firsts = [];
  let lasts = [];
  names.forEach((e, i) => {
    if (e === '') {
      return
    }
    const [first, last] = e.split(' ');
    firsts.push(first);
    lasts.push(last);
  });
  writeToFile(firsts, 'firsts.txt');
  writeToFile(lasts, 'lasts.txt');
}

function writeToFile(data, fileName){
  fs.writeFile(fileName, data, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`${fileName} saved`);
  });
}

function generateImportFontText(fonts){
  let fontName = '';
  fonts.forEach((e, i) => {
    console.log(`import 'typeface-${e.replace(new RegExp(' ', 'g'), '-').toLowerCase()}'`)
  });
}

generateImportFontText(fonts);
// splitNames(names);
