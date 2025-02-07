---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-QuickNode.webp" alt="Custom Icon"></span>演示说明

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，调用插件和C4D的命令……

<br/>


::: danger 首次使用
首次使用先需要导入插件assets文件夹的NodeTool.zip节点文件：[导入教程](13-RNT-import)
:::



## 自定义节点资产

TriPlanar Control、UV PSR、Blur Node是打包好的节点资产，如果有需要可以选中节点后自己`自定义编辑`并且`保存为新版本`,下次调用就是新版本的节点资产。


```
插件调用之后会自动转为节点组，所以如果是用农场或者分享工程也不受影响
```

<img data-zoomable src="/img/edit_node_assets.webp" alt="编辑节点资产" width=50%>
<img data-zoomable src="/img/save_node_as_new_version.webp" alt="保存为新版本" width=70%>

<br />
<br/>


## 选择节点插入

选中已连接的节点，点击执行，会在该节点前面插入常用的节点

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_01.webm" type="video/webm">
</video>

<br />
<br/>


## 选择端口插入

选择需要插入的端口，点击执行

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_02.webm" type="video/webm">
</video>

<br />
<br/>


## 选择节指定端口插入

选择需要插入的节点和端口，点击执行

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_03.webm" type="video/webm">
</video>

<br />
<br/>



## 多选自动连接

- 选择多个节点，会自动连接
- 插件对所有节点进行了自动连接的设置，部分节点没有多个输入端口会跳过

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_04.webm" type="video/webm">
</video>

<br />
<br/>


## 混合节点的优化
* 插入节点对Color Layer、Bump Blender、Displacement Blender、Shader Switch节点进行了特别的优化
* 选择多个节点，会自动连接


<br/>

<video controls>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_05.webm" type="video/webm">
</video>
<br/>
<video controls>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_06.webm" type="video/webm">
</video>
<br/>
<br/>

### 其他节点的优化
-  选择圆角节点（Round Corners）会直接连接到凹凸
-  选择Color Splitter节点，会分离alpha通道
- 等等


## TO PBR 指定通道连接
可以将所选节点连接到指定通道，并创建对应的调节节点，主要是用于没有关键词的贴图，或者其他节点
1. 选中所需节点，点击执行，会创建对应的调节节点并且连接到指定的通道
2. 如果选择的节点为贴图，会自动设置颜色模式。
3. 如果选择多个节点会自动创建混合图层


> 如果想连接到材质还可以用[**TO PBR**](05-RNT-To_PBR)的命令

<video controls>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-demo_07.webm" type="video/webm">
</video>

