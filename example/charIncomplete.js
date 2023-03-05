const Progress = require('../bin')
const bar = new Progress('download', {
    total: 30,
    charIncomplete: '+',
})
const id = setInterval(function (){
    bar.run();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);


