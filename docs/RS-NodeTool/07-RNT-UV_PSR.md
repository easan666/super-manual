---
layout: doc
---
# <span class="h1-icon"><img src="/img/UV PSR.webp" alt="Custom Icon"></span>UV PSR（添加PSR控制）

<br/>

---

### 简介

- 可以为纹理节点添加PSR参数控制
- 选中所需贴图，点击执行就会创建`UV PSR节点`然后连接
- 可以选择多个节点，会自动过滤纹理节点，然添加`UV PSR节点`控制所有贴图

> 也可以在AutoNode（自动节点）[使用该命令](03-RNT-AutoNode)

<br />

::: danger 首次使用
首次使用先需要导入插件assets文件夹的NodeTool.zip节点文件：[导入教程](03-RNT-AutoNode#导入)
:::

<br />


#### UV PSR节点
- UV PSR节点可以控制贴图的缩放偏移旋转，还内置模糊功能

![UV PSR](/img/uv-psr-node.webp){data-zoomable}


<br/>
<br/>

### 使用
全选所有节点，插件会自动判断，只为纹理节点添加PSR参数控制
<br/>

<video controls>
  <source src="/img/command-to_pbr.webm" type="video/webm">
</video>

<br/>
<br/>

### 在AutoNode（自动节点）使用
<br/>

<video controls>
  <source src="/img/autonode-add_uv_psr.webm" type="video/webm">
</video>

<br/>
<br/>