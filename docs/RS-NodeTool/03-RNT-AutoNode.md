---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-QuickNode.webp" alt="Custom Icon"></span>RS-AutoNode（自动节点）

## 简介

用于RS Node节点自动连接和添加常用节点，可以批量添加混合图层/常用调节节点，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置颜色空间，自动设置设置UDIM，优化节点等等，支持Standard Material和 Material。

- 支持自定义节点和排序
- 支持插入**所有RS节点**
- 可以在所选节点前插入节点，并且自动连接
- 选择端口，自动添加节点
- 选择多个节点，自动添加混合层
- 指定端口自动连接贴图
- 可以在[**插件设置**](01-RNT-setting#文件夹-列表模式)，切换列表模式和文件夹模式：

<div class="img-to" >
  <img data-zoomable src="/img/plugin_list_mode.webp" alt="列表模式" width=40%>
  <img data-zoomable src="/img/plugin_folder_mode.webp" alt="文件夹模式" width=40%>
</div>

<br/>

## 导入

> 首次使用先需要导入插件`assets`文件夹的`NodeTool.zip`节点文件

<br/>

1. 打开C4D的资产浏览器（Shift+F8），点击创建>导入资产>选择`NodeTool.zip`
<br/>

<img data-zoomable src="/img/import_node_assets.webp" alt="保存为新版本" width=50%>

<br/>
<br/>

2. 导入之后可以在redshift的节点中的NodeTool文件夹找到相关节点资产

> 需要切换渲染器为Redshift，新建RS材质，然后打开材质节点面板才能看到节点资产文件

<br/>
<img data-zoomable src="/img/browse_node_assets.webp" alt="保存为新版本" width=50%>

<br/>

## 自定义节点资产

1. TriPlanar Control、UV PSR、Blur Node是打包好的节点资产，如果有需要可以选中节点后自己`自定义编辑`并且`保存为新版本`,下次调用就是新版本的节点资产。

2. 其他节点文件为空节点，用于调用命令，请不要修改

```
插件调用之后会自动转为节点组，所以如果是用农场或者分享工程也不受影响
```

<img data-zoomable src="/img/edit_node_assets.webp" alt="编辑节点资产" width=50%>
<img data-zoomable src="/img/save_node_as_new_version.webp" alt="保存为新版本" width=70%>

<br />
<br/>

## 设置菜单和常用节点

- AutoNode弹出菜单，可以在命令管理（Shift+F12）设置快捷键
- AutoNode的菜单可以在[**插件设置**](01-RNT-setting#文件夹-列表模式)切换列表模式。  
- 常用的节点可以点击右边的心形图标，设置过的节点会排在前面

<br />

<video controls>
  <source src="/img/autonode-set_common_nodes.webm" type="video/webm">
</video>

<br />
<br />

## 使用

- 选择需要插入的节点或者端口，然后在AutoNode的弹出菜单中选择节点`双击`

```md
在搜索栏输入`01`可以筛选TO PBR通道命令节点，输入`00`可以筛选命令节点
```

<br />

### 插入节点的三种方式

<br />
<br />

#### 1. 选择节点插入
* 选中节点，然后在AutoNode的弹出菜单中选择节点`双击`
* 一般用于调节节点的插入

<video controls>
  <source src="/img/autonode-insert_node_based_on_selection.webm" type="video/webm">
</video>
<br/>
<br/>

#### 2. 选择端口插入
* 选择需要插入的端口，然后在AutoNode的弹出菜单中选择节点`双击`
* 一般用于噪波等节点的插入

<video controls>
  <source src="/img/autonode-insert_node_based_on_port_selection.webm" type="video/webm">
</video>
<br/>
<br/>

#### 3. 选择节指定端口插入
* 选择需要插入的节点和端口，然后在AutoNode的弹出菜单中选择插入节点`双击`
* 用于一个节点连接多个端口的情况

<video controls>
  <source src="/img/autonode-insert_node_at_specified_port.webm" type="video/webm">
</video>
<br/>
<br/>


### 多选自动连接
* 选择多个节点，会自动连接
* 插件对所有节点进行了自动连接的设置，部分节点没有多个输入端口会跳过

<br/>

<video controls>
  <source src="/img/rs-nodetool_v2_4_auto_double_node.webm" type="video/webm">
</video>
<br/>
<br/>


### 混合节点的优化
* 插入节点对Color Layer、Bump Blender、Displacement Blender、Shader Switch节点进行了特别的优化
* 选择多个节点，会自动连接

> 如果想连接到材质还可以用[**TO PBR**](#to-pbr-指定通道连接)的命令

<br/>

<video controls>
  <source src="/img/autonode-layer_blend_node.webm" type="video/webm">
</video>
<br/>
<video controls>
  <source src="/img/rs-nodetool_v2_4_auto_rsshaderswitch.webm" type="video/webm">
</video>
<br/>
<br/>

### 其他节点的优化
-  选择圆角节点（Round Corners）会直接连接到凹凸
-  选择Color Splitter节点，会分离alpha通道
- 等等

<br/>

### TO PBR 指定通道连接
可以将所选节点连接到指定通道，并创建对应的调节节点，主要是用于没有关键词的贴图，或者其他节点
1. 选中所需节点，点击执行，会创建对应的调节节点并且连接到指定的通道
2. 如果选择的节点为贴图，会自动设置颜色模式。
3. 如果选择多个节点会自动创建混合图层


```md
在搜索栏输入`01`可以筛选TO PBR通道命令节点，输入`00`可以筛选命令节点
```

<br/>

<video controls>
  <source src="/img/autonode-to_pbr.webm" type="video/webm">
</video>
<br/>
<br/>



### TriPlanar（处理平铺）
- 选中所需贴图，点击执行就会为每个贴图创建TriPlanar节点然后连接。
- 可以直接全选所有节点，插件会自动判断，只为纹理节点添加TriPlanar节点
- 同时还会创建一个`TriPlanar Control`节点和控制所有TriPlanar节点的参数
- 执行完成后需要手动排列所有节点（Shift+L）


<br/>

<video controls>
  <source src="/img/autonode-set-triplanar.webm" type="video/webm">
</video>

<br/>
<br/>
<br/>


#### TriPlanar Control
TriPlanar Control节点组可以控制TriPlanar的大部分参数，包括偏移缩放等。还可以处理贴图平铺重复。

```
TriPlanar Control节点内置扭曲节点，用于处理重复贴图
```

![Alt text](/img/triplanar_control-node.webp){data-zoomable}

<br/>
<br/>

### 添加PSR控制（UV PSR）
- 可以为纹理节点添加PSR参数控制
- 选中所需贴图，点击执行就会创建`UV PSR节点`然后连接
- 可以选择多个节点，会自动过滤纹理节点，然添加`UV PSR节点`控制所有贴图

<br/>

<video controls>
  <source src="/img/autonode-add_uv_psr.webm" type="video/webm">
</video>


<br/>
<br/>
<br/>


#### UV PSR节点
- UV PSR节点可以控制贴图的缩放偏移旋转，还内置模糊功能

![Alt text](/img/uv-psr-node.webp){data-zoomable}


<br/>
<br/>


### 模糊节点(Blur Node)
- 可以为贴图节点添加模糊节点设置模糊效果，支持批量添加
- 可以全选节点，会自动过滤，只为贴图节点添加模糊节点

> Tip: 添加PSR控制中[UV PSR](#uv-psr节点)节点有内置模糊功能;  
如果已经添加UV PSR节点，可以不添加模糊节点；

<br/>

<video controls>
  <source src="/img/command-blur_node.webm" type="video/webm">
</video>

<br/>
<br/>


### 设置UDIM
- 用于处理多象限贴图
- 选中所需贴图，点击执行就会自动设置
- 如果检测到贴图的名称尾数后4位为`10xx`，就会将"10xx"替换为`<UDIM>`
- RS UDIM相关文档：[点击查看](https://help.maxon.net/r3d/cinema/en-us/#html/UDIM+and+UVTILE.html)

<br/>

<video controls>
  <source src="/img/autonode-set-udim.webm" type="video/webm">
</video>

<br/>
<br/>


### 设置颜色空间（颜色空间）
- 为RS Node节点（新版节点）纹理节点自动设置颜色空间
- 选中所需贴图，点击执行就会自动贴图设置颜色空间。
- 判断标准是根据所选贴图连接的通道，所以如果贴图没有连接是不会修改的
- 如果同一个贴图同时连接到不同通道可能会误判
- TIP: 插件连接的贴图会自动设置颜色空间，不需要单独设置

> 可以在插件设置中[设置颜色通道](01-RNT-setting#设置颜色通道)，根据需要添加端口ID

<br/>

<video controls>
  <source src="/img/autonode-set_color_space.webm" type="video/webm">
</video>

<br/>
<br/>


### 转为Sprite（To Sprite）

- 选中所需贴图，点击执行会将指定的贴图转为Sprite节点，并且自动连接
- 用于树叶等大量叶子的遮罩设置，可以大幅度节省资源加快渲染速度

<br/>

<video controls>
  <source src="/img/autonode-to-sprite.webm" type="video/webm">
</video>

<br/>
<br/>


### 优化节点

- 除了纹理节点和主材质节点，其他节点会隐藏预览和未使用的端口
- 主要是用于节点较多的情况，隐藏调节节点预览，方便浏览

<br/>

#### 优化全部（Optimize All）

- 全部节点都会被设置

<video controls>
  <source src="/img/autonode-optimize_all_node.webm" type="video/webm">
</video>

<br/>
<br/>
<br/>


#### 优化所选（Optimize Select）

- 只会设置所选节点

<video controls>
  <source src="/img/autonode-optimize_selected_node.webm" type="video/webm">
</video>

<br/>
<br/>
