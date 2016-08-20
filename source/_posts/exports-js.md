---
title: [转]揭秘Node.js中exports和module.exports
date: 2016-08-20 17:04:57
tags: [exports,module.exports,Node.js]
---

首先我们得先摆出两条不变的真理：

1. exports一开始是指向module.exports的；

2. 通过require得到的是module.exports中的内容，而不是exports的内容；

##详解
