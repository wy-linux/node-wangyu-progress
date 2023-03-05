const Progress = require('../bin')
const bar = new Progress('download', {
    total: 1500,
    charIncomplete: '+',
    charComplete: '*',
    width: 90
})
const id = setInterval(function (){
    bar.run(7.35);
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);


