---
title: [转]揭秘Node.js中exports和module.exports
date: 2016-08-20 17:04:57
tags:[exports,module.exports,node.js]
---
首先我们得先摆出两条不变的真理：

1. exports一开始是指向module.exports的；
2. 通过require得到的是module.exports中的内容，而不是exports的内容；

##详解

exports和module这两个对象是所有Node.js类型的文件中都默认隐式存在的，比如我们新建一个test.js文件：

```
console.log(exports);
console.log(module);
```

在终端运行:

```
[qifuguang@Mac~/nodejs/learnModule]$ node test.js
{}
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/qifuguang/nodejs/learnModule/test.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/qifuguang/nodejs/learnModule/node_modules',
     '/Users/qifuguang/nodejs/node_modules',
     '/Users/qifuguang/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
```     
     
可以看到，test.js文件中并未声明exports和module对象，但是它们确实存在。并且可以看到，exports的初始值是{}，而module的初始值有一大串属性，其中还包含一个exports属性，它的初始值也是{}。

实际上，一开始exports就是指向module.exports的，引用关系如下图：