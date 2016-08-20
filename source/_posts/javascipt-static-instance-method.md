---
title:  javascript中静态方法、实例方法、内部方法和原型的一点见解
date: 2016-07-18 22:09:28
tags: javascript
---
###1、静态方法的定义


```
var BaseClass = function() {}; // var BaseClass=new Function();  
BaseClass.f1 = function(){//定义静态方法  
     alert(' This is a static method ');  
}  
BaseClass.f1();//This is a static method  
var instance1 = new BaseClass();  
instance1.f1();//instance1.f1 is not a function  
```
由以上代码分析可知，静态方法不能被实例对象调用，再看以下代码

```
var BaseClass = new Function;  
var Class2 = BaseClass;  
BaseClass.f1 = function(){  
alert("BaseClass ' s static method");  
}  
Class2.f2 = function(){  
alert("Class2 ' s static method");  
}  
BaseClass.f1();//BaseClass ' s static method  
BaseClass.f2();//Class2 ' s static method  
Class2.f1();//BaseClass ' s static method  
Class2.f2();//Class2 ' s static method  
```
 从运行结果来看，BaseClass和Class都有f1和f2静态方法，实际上这两个函数是一样的，可以执行以下代码来验证
 
 `alert(BaseClass == Class2);//true `
 
 如果删除其中一个函数中的静态方法，则对应的另一个函数的静态方法也被删除，比如执行
 
 ``
 delete Class2.f2;  
 ``
 同时也会删除BaseClass中的f2
 
###2、实例方法的定义
 这里是利用JavaScript对象原型引用prototype来实现的，看以下代码
 
 ```
  var BaseClass = function() {};  
BaseClass.prototype.method1 = function(){  
      alert(' This is a instance method ');  
}  
var instance1 = new BaseClass();  
instance1.method1();//This is a instance method  
 ```
 method1即为通过prototype原型引用定义的实例方法，这里也可以在实例上直接定义方法（变量），看以下代码
 
 ```
 var BaseClass = function() {};  
var instance1 = new BaseClass();  
instance1.method1 = function(){  
    alert(' This is a instance method too ');  
}   
instance1.method1();//This is a instance method too  
 ```
 下面介绍通过this指针来定义实例方法（变量），看以下代码
 
 ```
 var BaseClass = function() {  
 this.method1 = function(){  
   alert(' Defined by the "this" instance method');  
 }  
};  
var instance1 = new BaseClass();  
instance1.method1();//Defined by the "this" instance method  
 ```
 那么同时在实例上、原型引用上和“this”上定义了相同名字的实例方法后，实例会优先调用那一个呢？请看以下代码
 
 ```
 var BaseClass = function() {  
this.method1 = function(){  
       alert(' Defined by the "this" in the instance method');  
 }  
};  
var instance1 = new BaseClass();  
instance1.method1 = function(){  
    alert(' Defined directly in the instance method');  
}  
BaseClass.prototype.method1 = function(){  
    alert(' Defined by the prototype instance method ');  
}  
instance1.method1();//Defined directly in the instance method 
 ```
 
 通过运行结果跟踪测试可以看出直接定义在实例上的变量的优先级要高于定义在“this”上的，而定义在“this”上的又高于 prototype定义的变量。即直接定义在实例上的变量会覆盖定义在“this”上和prototype定义的变量，定义在“this”上的会覆盖prototype定义的变量。
 
 
###3、内部方法
先看以下定义

```
var BaseClass = function() {  
    var method1 = function() {  
        alert("Internal method");  
    };  
    var method2 = function() {  
        alert("call Internal method");  
        method1();  
    };  
    this.method3 = function(){  
        method2();  
    }  
};  
var instance1 = new BaseClass();  
instance1.method1();// 会报错，因为method1是BaseClass中定义的内部变量，作用域只有在内部可见（闭包）  
instance1.method3();//会先后调用method2和method1 
```

[原文链接](hhttp://blog.csdn.net/jerrysbest/article/details/6642003)
