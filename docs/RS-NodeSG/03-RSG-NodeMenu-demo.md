---
layout: doc
---
# <span class="h1-icon"><img src="/img/SG-NodeMenu.webp" alt="Custom Icon"></span>插入节点

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，调用插件和C4D的命令……

<br/>

## 选择节点后自动插入
选中已连接的节点，点击执行，会在该节点前面插入常用的节点
> 3.0.45开心版没有Scalar Ramp节点

<br/>

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-02.webm" type="video/webm">
</video>

<br/>
<br/>


## 多节点和多端口处理
如果所选节点连接到多个端口或者多个节点，会显示弹出菜单，可以选择要插入的位置

<br/>

### 所选节点连接到同一节点的多个端口

<br/>

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-03.webm" type="video/webm">
</video>

<br/>
<br/>
<br/>

### 所选节点连接到多个节点

<br/>

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-04.webm" type="video/webm">
</video>

<br/>
<br/>


## 节点自动化处理
RS-NodeSG v2.0对所有节点进行了自动化处理，大部分节点如果选择两个节点，会自动连接

<br/>

### 一般节点连接

<br/>

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-06.webm" type="video/webm">
</video>

<br/>
<br/>


### 混合节点连接

插入节点对Color Layer、Bump Blender、Displacement Blender节点进行了特别的优化
选择多个节点会自动连接，并且按照节点名称排序

> 如果是要连接`Bump`和`Displacement`可以使用[TO PBR](05-RSG-To_PBR)
<br/>

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-05.webm" type="video/webm">
</video>

<br/>
<br/>
