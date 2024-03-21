---
layout: doc
---
# <span class="h1-icon"><img src="/img/TriPlanar Control.webp" alt="Custom Icon"></span>Set TriPlanar（处理平铺）

<br/>

---

### 简介

- 选中所需贴图，点击执行就会为每个贴图创建TriPlanar节点然后连接。
- 可以直接全选所有节点，插件会自动判断，只为纹理节点添加TriPlanar节点
- 同时还会创建一个`TriPlanar Control`节点和控制所有TriPlanar节点的参数

> 也可以在AutoNode（自动节点）[使用该命令](03-RNT-AutoNode)

<br />

::: danger 首次使用
首次使用先需要导入插件assets文件夹的NodeTool.zip节点文件：[导入教程](03-RNT-AutoNode#导入)
:::

<br />


#### TriPlanar Control
TriPlanar Control节点组可以控制TriPlanar的大部分参数，包括偏移缩放等。还可以处理贴图平铺重复。

```
TriPlanar Control节点内置扭曲节点，用于处理重复贴图
```

![TriPlanar Control](/img/triplanar_control-node.webp){data-zoomable}

<br/>
<br/>

### 使用
全选所有节点，插件会自动判断，只为纹理节点添加TriPlanar节点
<br/>

<video controls>
  <source src="/img/command-set-triplanar.webm" type="video/webm">
</video>

<br/>
<br/>

### 在AutoNode（自动节点）使用
执行完成后需要手动排列所有节点（Shift+L）

<br/>

<video controls>
  <source src="/img/autonode-set-triplanar.webm" type="video/webm">
</video>

<br/>
<br/>