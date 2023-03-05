const Progress = require('../bin')
const bar = new Progress('wangyu', {
    total: 30,
})
const id = setInterval(function (){
    bar.run();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);


