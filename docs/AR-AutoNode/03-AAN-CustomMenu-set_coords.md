---
layout: doc
---
# <span class="h1-icon"><img src="/img/AR-NodeMenu.webp" alt="Custom Icon"></span>UVW-Randomizer


<br/>

- 为image节点添加UV参数控制
- 选中所需贴图，点击执行就会创建`UV coordinates`节点然后连接
- 可以选择多个节点，会自动过滤image节点，然添加`UV coordinates`节点控制所有贴图
- 插件自定义id： `set_coords`

<br/>

::: danger 首次使用
首次使用先需要导入插件assets文件夹的AutoNode.zip节点文件：[导入教程](01-AAN-import_assets)
:::

<br/>

### UV coordinates
UV coordinates节点组可以控制贴图的UV坐标参数，包括偏移缩放等。

![UV coordinates](/img/ar_autonode_UV_coordinates1.webp){data-zoomable}

<br/>

### 使用
可以直接全选所有节点，插件会自动判断，只为贴图添加UV coordinates节点

<br/>

<video controls>
  <source src="/img/ar_autonode_custommenu_set_coords.webm" type="video/webm">
</video>

<br/>
<br/>

### 缩放
- 默认是使用Uniform scale等比缩放
- 如果想使用Scale的不等比缩放，需要双击`UV coordinates`节点组连接Scale U端口到Scale U端口，连接Scale V端口到Scale V端口（如图）

![UV coordinates Scale](/img/ar_autonode_UV_coordinates2.webp){data-zoomable}
![UV coordinates Scale](/img/ar_autonode_UV_coordinates3.gif){data-zoomable}

<br/>
<br/>