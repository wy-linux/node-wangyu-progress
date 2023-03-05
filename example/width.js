const Progress = require('../bin')
const bar = new Progress(null, {
    total: 70,
    width: 90
})
const id = setInterval(function (){
    bar.run();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);
