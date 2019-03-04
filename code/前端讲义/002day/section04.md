## css选择器二

####4、id选择器  
通过id名来选择元素，元素的id名称不能重复，所以一个样式设置项只能对应于页面上一个元素，不能复用，id名一般给程序使用，所以不推荐使用id作为选择器。  
举例：
```
#box{color:red} 
......
<p id="box">这是一个段落标签</p>   <!-- 对应以上一条样式，其它元素不允许应用此样式 -->
<p>这是第二个段落标签</p> <!-- 无法应用以上样式，每个标签只能有唯一的id名 -->
<p>这是第三个段落标签</p> <!-- 无法应用以上样式，每个标签只能有唯一的id名  -->
```


####5、组选择器
多个选择器，如果有同样的样式设置，可以使用组选择器。
举例：

```
.box1,.box2,.box3{width:100px;height:100px}
.box1{background:red}
.box2{background:pink}
.box2{background:gold}

<div class="box1">....</div>
<div class="box2">....</div>
<div class="box3">....</div>

```


####6、伪类选择器
常用的伪类选择器有hover，表示鼠标悬浮在元素上时的状态。

```
.box1:{width:100px;height:100px;background:gold;}
.box1:hover{width:300px;}

```
