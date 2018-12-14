---
title: github子目录创建hexo博客
---
#文章参考1

*   github新建项目，名称为blog
*   修改已创建好的hexo项目中的_config.yml文件
    
    ![](//upload-images.jianshu.io/upload_images/7691672-10c91cc7e9e1f42c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
    
    ![](//upload-images.jianshu.io/upload_images/7691672-6de8aa1b0c8c5989.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
    
*   终端执行 $ hexo g -d
*   打开github我们的项目地址
*   选择setting
*   找到GitHub Pages勾选master branch

####原文：
https://www.jianshu.com/p/986b975a29ae

#文章参考2
#### 1\. 首先建立xxx.github.io的repo，xxx是你的用户名，之后开启github pages服务

#### 2\. 再建立一个bbbb的repo，bbbb是你想要的子目录

#### 3\. 设置hexo的deploy配置文件 _config.yml

    - type: git
      repo: https://github.com/xxx/bbbb.git
      branch: gh-pages
    

#### 4\. 修改_config.yml中的root选项，由"/"改为"/bbbb"

github page就大概两种，一种user page必须master分支，另一种project page需要给对应的project设置一个gh-pages分支，上传好网页资源文件之后，就可以在username.github.io/projectname这样的域名访问了。

####原文：
https://www.jianshu.com/p/986b975a29ae

---
*结合这两种方法：即可解决我的主站和博客二级目录git的问题。

