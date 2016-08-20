---
title: 揭秘Node.js中exports和module.exports(转)
date: 2016-08-20 17:04:57
tags: [exports,module.exports,Node.js]
---

首先我们得先摆出两条不变的真理：

1. exports一开始是指向module.exports的；

2. 通过require得到的是module.exports中的内容，而不是exports的内容；

##详解

exports和module这两个对象是所有Node.js类型的文件中都默认隐式存在的，比如我们新建一个test.js文件：


console.log(exports);
console.log(module);


在终端运行:


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
   
     
可以看到，test.js文件中并未声明exports和module对象，但是它们确实存在。并且可以看到，exports的初始值是{}，而module的初始值有一大串属性，其中还包含一个exports属性，它的初始值也是{}。

实际上，一开始exports就是指向module.exports的，引用关系如下图：

![](https://github.com/Fuatnow/LovelyHouese/blob/master/source/imgs/exports和module的引用图.png?raw=true)

请牢记这个引用图，之后的分析都依靠这个图。

我们再举个例子，创建如下的my_module.js文件：


exports.sayHello = function() {
    console.log('Hello world!');
}


再在同一个目录下创建app.js文件：


myModule = require('./my_module');
myModule.sayHello()



在终端运行app.js:

[qifuguang@Mac~/nodejs/learnModule]$ node app.js
Hello world!


现在我们分析一下为什么会有这样的输出结果：
在app.js文件中我们使用require语句从my_module.js模块中得到了module.exports，这里的module.exports的内容是什么呢？

在my_module.js文件中我们在exports的基础上为它添加了一个属性sayHello，这个属性的值是一个函数，并且因为初始时，exports指向的是module.exports，他俩共享同一块内存，所以这个操作后，module.exports变成了这样：

![](https://github.com/Fuatnow/LovelyHouese/blob/master/source/imgs/exports赋值之后.png?raw=true)

所以，app.js文件中的myModule变量的值为：


{
    sayHello: function() {console.log('Hello world');}
}


于是，很自然地，我们可以使用myModule.sayHello调用它对应的函数，输出熟悉的Hello world字符串。

再举个例子，我们将my_module.js文件修改为如下内容：


exports = {
    sayHello: function() {console.log('Hello world!');}
}



然后将app.js文件修改为如下内容：

myModule = require('./my_module');
console.log('module.exports:');
console.log(module.exports);
myModule.sayHello()



然后一样在终端运行：


[qifuguang@Mac~/nodejs/learnModule]$ node app.js
module.exports:
{}
/Users/qifuguang/nodejs/learnModule/app.js:6
myModule.sayHello()
         ^
TypeError: myModule.sayHello is not a function
    at Object.<anonymous> (/Users/qifuguang/nodejs/learnModule/app.js:6:10)
    at Module._compile (module.js:435:26)
    at Object.Module._extensions..js (module.js:442:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:311:12)
    at Function.Module.runMain (module.js:467:10)
    at startup (node.js:136:18)
    at node.js:963:3

可以看到，报错了，报错了，报错了！

分析一下原因：
my_module.js文件中将exports重新赋值为一个新的对象，这就相当于Java中的
`
Object newObje = new Object();
`
一样，这个时候exports将会自己分配一块新的内存，而不再指向module.exports了，所以这个时候exports和module.exports彻底断绝关系，无论你怎么蹂躏（操作）exports对象，都与module.exports无关了。

所以，my_module.js文件中为exports对象重新赋值之后，exports和module.exports的状态是这样的：

![](https://github.com/Fuatnow/LovelyHouese/blob/master/source/imgs/exports重新分配内存之后.png?raw=true)

从输出中也可以看到，此时的module.exports={}，所以肯定找不到sayHello函数，那必然报错！

其他的我也不多说了，根据这两个例子与这两幅图，我相信更多的情况大家都会自己分析了。



*[原文链接](http://qifuguang.me/2015/11/11/揭秘Node-js中exports和module-exports/)*
