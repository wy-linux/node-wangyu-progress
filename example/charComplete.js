const Progress = require('../bin')

const bar = new Progress('', {
    total: 30,
    charComplete: '*',
})
const id = setInterval(function (){
    bar.run();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);


