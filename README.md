### JavaScript手写的命令行进度条Progress，用于对一些耗时操作提供命令行可视化
1. bin目录为progress核心库
2. example目录提供了该库的一些使用示例

Using npm:
```javascript
npm i node-wangyu-progress
```
Once the package is installed, you can import the library using require approach:
```javascript
const Progress = require('node-wangyu-progress')
```
###### Example:
```javascript
//wangyu：进度条的前缀名称，可以输入为下载文件的名称
const bar = new Progress('wangyu', {
    total: 1500,  //total：必传配置项，可以输入为下载文件的大小
    charIncomplete: '+',  //charIncomplete：未完成进度条字符
    charComplete: '*',  //charComplete：已完成进度条字符
    width: 90  //width：进度条长度，最大为当前命令行的长度
})

const id = setInterval(function (){
    bar.run(8);//run方法在下载过程中不断被调用，传入当前完成的进度
    if (bar.complete) {
      clearInterval(id);
    }
  }, 100);
```