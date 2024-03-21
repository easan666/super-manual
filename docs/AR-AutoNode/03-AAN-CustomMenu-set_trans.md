---
layout: doc
---
# <span class="h1-icon"><img src="/img/AR-NodeMenu.webp" alt="Custom Icon"></span>UVW-Transform


<br/>

- 选中所需贴图，点击执行就会为每个贴图创建Transform节点然后连接。
- 会创建一个`set_transform`节点和控制所有Transform节点的参数
- 插件自定义id： `set_tri`

<br/>

::: danger 首次使用
首次使用先需要导入插件assets文件夹的AutoNode.zip节点文件：[导入教程](01-AAN-import_assets)
:::

<br/>

### Transform Control
Transform Control节点组可以控制Transform的大部分参数，包括偏移缩放等。

![Transform Control](/img/ar_autonode_Transform1.webp){data-zoomable}

<br/>

### 使用
可以直接全选所有节点，插件会自动判断，只为贴图添加Transform节点

::: danger 已知Bug
最多只支持9张贴图添加，不然会有奇怪的bug
:::

<br/>

<video controls>
  <source src="/img/ar_autonode_custommenu_set_transform.webm" type="video/webm">
</video>

<br/>
<br/>

### 缩放
- 默认是使用Uniform scale等比缩放
- 如果想使用Scale frame的不等比缩放，需要双击Transform Control节点组连接Scale frame端口到Scale frame端口（如图）

![Transform Control Scale](/img/ar_autonode_Transform2.webp){data-zoomable}
![Transform Control Scale](/img/ar_autonode_Transform3.gif){data-zoomable}

<br/>
<br/>