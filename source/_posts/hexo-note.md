---
title: hexo 搭建小记
date: 2016-07-01 01:19:20
tags:
---
#hexo-1

1\. **安装node**

hero要求node版本大于0.12版本

*[node-v0.12版本列表](http://nodejs.org/dist/latest-v0.12.x/)*

这里选择源码安装:

``` 
wget http://nodejs.org/dist/latest-v0.12.x/node-v0.12.15-linux-x64.tar.xz

tar xvf node-v0.12.15-linux-x64.tar.xz

cd node-v0.12.15/

./configure

make

make install

```

添加到环境变量

```
在PATH后面追加/usr/local/bin/node

vi /etc/profile

使环境变量生效

source /etc/profile

查看是否在PATH里面

echo $PATH

node -v

显示v0.12.15说明node已经配置成功

```


2\. **安装Hexo3.0**

```
npm install hexo-cli -g

```

创建一个存放博客的文件夹

```
mkdir myblog

cd myblog

hexo 会通过git下载所需要的文件
hexo init 

安装依赖包
npm install

生成静态文件
hexo g 

vi _config.yml
 
把最下面一行改为其中gname是你github上的名字

` deploy:
   type: git
   repo: https://github.com/gname/gname.github.io.git
   branch: master ` 


启动服务器 端口号为8090
hexo s -p 8090

现在浏览器访问`http://localhost:8090/`，就能看到刚才在本地创建的博客了
```


#####部署到github上

创建repository 名字的格式必须为yourgitname.github.io

```
npm install hexo-deployer-git --save

//上传到github上
hexo d 

```
现在浏览yourgitname.github.io,就可以看到你的博客了


#####添加多说

```
#####添加rss

#####添加sitemap

要重启服务器才能生效
```

