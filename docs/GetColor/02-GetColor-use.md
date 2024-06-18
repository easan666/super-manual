---
layout: doc
---
# <span class="h1-icon"><img src="/img/GetColor.webp" alt="GetColor文档"></span>GetColor

## 使用

使用方法非常简单，只需要复制颜色代码或者图片（截图），然后点击，就会根据剪贴板的数据生成对应的材质。  
- 可以选择生成`漫反射材质`还是`自发光材质`
- [可以自定义](01-GetColor-setting#插件设置-1)生成材质数量和颜色过滤
- 支持六大主流渲染器，`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`

::: danger 注意
不要复制太大的图片，尽量截取缩略图，不然读取剪贴板会有点慢。
:::


<br />

## 复制颜色代码生成材质

- 可以复制颜色代码生成材质，推荐使用截图工具吸色（如QQ截图）
- 支持HEX16颜色代码和RGB颜色代码（rgba不支持透明），  
例如：

1. `#191970`和`191970`
2. `rgb(100,149,237)`、`(100,149,237)`、`100,149,237`、`100 149 237`、
3. `rgba(100,149,237,0.5)`、`(100,149,237,0.5)`、`100,149,237,0.5`、`100 149 237 0.5`

<video controls>
  <source src="/img/getcolor_color_code_to_mat.webm" type="video/webm">
</video>

<br />

## 截图（复制图片）生成材质

可以截图或者复制图片生成材质，插件会提取图片的主要颜色从而生成材质。  
相关设置可以参考：[插件设置](01-GetColor-setting#插件设置-1)

::: danger 注意
不要复制太大的图片，尽量截取缩略图，不然读取剪贴板会有点慢。
:::

<br />

<video controls>
  <source src="/img/getcolor_screenshot_to_mat.webm" type="video/webm">
</video>

<br />
<br />

<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=1255854226&bvid=BV1bJ4m1u7JX&cid=1587107811&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

