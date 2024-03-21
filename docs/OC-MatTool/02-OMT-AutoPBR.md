---
layout: doc
---
# <span class="h1-icon"><img src="/img/OC-AutoPBR.webp" alt="Custom Icon"></span>OC-AutoPBR（自动PBR）

## 简介

用于Octane自动连接PBR贴图，支持混合材质  
支持Diffuse/Glossy/Specular/Metallic/Toon/Universal/Surface/Mix/Composite/Layered/Sub材质：

- 选中材质，点击执行就会自动连接
- 根据所连接的通道**自动命名节点**
- 为不同类型贴图**自动添加调节节点**
- 根据贴图的文件名**自动命名材质**
- 可以**自动添加chaos节点**用于处理贴图重复
- 可以**自动添加UV Transform节点**
- 贴图的连接依赖文件名中的关键词
- 关键词不区分大小写，可以插件设置[**自定义通道关键词**](01-OMT-setting#自定义通道关键词)

<br />

```
每个通道只能添加一个节点，例如一个Diffuse，一个AO，一个Glossiness

```

<br />

<video  controls autoplay muted>
  <source src="/img/oc-mattool-autopbr-normal_mode-02.webm" type="video/webm">
</video>

<br />
<br />

<video  controls autoplay muted>
  <source src="/img/oc-mattool-autopbr-multi_mat.webm" type="video/webm">
</video>

<br />
<br />


## 使用说明

### 1. 需要选中材质
使用的时候需要选中材质，然后在该材质的节点中编辑
![选中材质](/img/oc-mattool-select_material.gif)

<br />

### 2.贴图需要有指定的关键词

贴图的连接依赖文件名中的关键词，所以贴图需要有相关关键词如：Displacement、Normal之类
![关键词](/img/keywords_for_file_names.webp){data-zoomable}


<br />


### 3.修改关键词


- 可以在插件设置[**自定义关键词**](01-OMT-setting#自定义通道关键词)，设置完成后需点击`确定`。  
- 关键词支持[**正则**](01-OMT-setting#正则使用)，可以根据需要添加
- 支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`


<br />

### 4.混合材质

- 支持混合材质Mix Material，Composite Material，Layered Material
- 如果是混合材质会显示弹出菜单，可以选择需要连接的材质节点

<br />

<video  controls autoplay muted>
  <source src="/img/oc-mattool-autopbr-multi_mat.webm" type="video/webm">
</video>


<br />
<br />

## 连接说明/设置
插件会根据所选贴图的类型判断连接的方式，并且设置相应的参数：  

如果贴图包含对应的关键词，会连接到对应的通道，并且根据不同通道设置贴图的类型（Type）和Legacy Gamma


<br />

::: warning 注意
贴图 [类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html) 设置为正常（Normal）会比浮点（Float）多占用三倍显存，正确设置贴图类型可以节省显存资源，不会造成不必要的资源浪费，所以插件进行了自动化的设置。
:::

<br />


可以根据需要在[**插件设置**](01-OMT-setting#插件设置-1)中设置相关选项：

- 开启/关闭 [**自动添加UV节点**](01-OMT-setting#自动添加uv节点)
- 开启/关闭 [**自动添加调节节点**](01-OMT-setting#自动添加调节节点)
- 开启/关闭 [**自动添加chaos节点**](01-OMT-setting#自动添加chaos节点)
- 开启/关闭 [**自动重命名贴图**](01-OMT-setting#自动重命名贴图)
- 开启/关闭 [**自动重命名材质**](01-OMT-setting#自动重命名材质)

<br />

插件还做了其他自动化的设置，例如：
- 在Standard Surface材质连接`Translucency`的时候会自动勾选Thin wall，和自动设置强度；
- 连接`Glossiness`贴图的时候会开启Invert；
- 连接`Displacement`贴图会自动添加Displacement节点……

<br />
