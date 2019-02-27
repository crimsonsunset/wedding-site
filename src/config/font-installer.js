const fonts = require('./possible-fonts');

let firsts = [];
let lasts = [];
fonts.forEach((e, i) => {
  if (e === '') {
    return
  }

  const [first, last] = e.split(' ');
  firsts.push(first);
  lasts.push(last);
});


const fs = require('fs');
fs.writeFile("firsts.txt", firsts, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("firsts saved");
});

fs.writeFile("lasts.txt", lasts, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("lasts saved");
});

// console.log(firsts)
// console.log(lasts)
