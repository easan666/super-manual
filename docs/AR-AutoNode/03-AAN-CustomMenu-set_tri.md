---
layout: doc
---
# <span class="h1-icon"><img src="/img/AR-NodeMenu.webp" alt="Custom Icon"></span>Set Triplanar（批量添加三平面）


<br/>

- 选中所需贴图，点击执行就会为每个贴图创建TriPlanar节点然后连接。
- 会创建一个`Triplanar Control`节点和控制所有TriPlanar节点的参数
- 插件自定义id： `set_tri`

<br/>

::: danger 首次使用
首次使用先需要导入插件assets文件夹的AutoNode.zip节点文件：[导入教程](01-AAN-import_assets)
:::

<br/>

### TriPlanar Control
TriPlanar Control节点组可以控制TriPlanar的大部分参数，包括偏移缩放等。

![TriPlanar Control](/img/ar_autonode_TriPlanar1.webp){data-zoomable}

<br/>

### 使用
可以直接全选所有节点，插件会自动判断，只为贴图添加TriPlanar节点

<br/>

<video controls>
  <source src="/img/ar_autonode_custommenu_set_triplanar.webm" type="video/webm">
</video>

<br/>
<br/>

### 缩放
- 默认是使用Uniform scale等比缩放
- 如果想使用Scale的不等比缩放，需要双击`TriPlanar Control`节点组连接Scale端口到Scale端口（如图）

![TriPlanar Control Scale](/img/ar_autonode_TriPlanar2.webp){data-zoomable}
![TriPlanar Control Scale](/img/ar_autonode_TriPlanar3.gif){data-zoomable}

<br/>
<br/>
