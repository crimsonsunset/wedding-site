const fonts = require('./possible-fonts');

let fontName = '';
fonts.forEach((e, i) => {
  console.log(`import 'typeface-${e.replace(new RegExp(' ', 'g'), '-').toLowerCase()}'`)
});

// console.log(fontName)
