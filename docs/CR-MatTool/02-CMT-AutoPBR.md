---
layout: doc
---
# <span class="h1-icon"><img src="/img/CR-AutoPBR.webp" alt="Custom Icon"></span>CR-AutoPBR（自动PBR）

## 简介

用于Corona自动连接PBR贴图，只支持Corona Physical Material（新版物理材质）：

- 选中材质，然后对需要连接的贴图进行**重命名**，可以插件设置[**自定义名称**](01-CMT-setting#自定义名称)
- 点击执行，会对重命名的节点进行自动连接
- 会自动将C4D Bitmap批量转为Corona Bitmap
- 贴图的连接依赖文件名中的关键词
- 关键词不区分大小写，可以插件设置[**自定义通道关键词**](01-CMT-setting#自定义通道关键词)
- 可以**自动添加添加调节**用于处理调节贴图

<br />

```
只能连接一个法线贴图

```

<br />

<video  controls autoplay muted>
  <source src="/img/cr-mattool_v1-1_autopbr_02_multi_tex.webm" type="video/webm">
</video>

<br />
<br />



## 使用说明

### 1. 需要选中材质
使用的时候需要选中材质，然后在该材质的节点中编辑
![选中材质](/img/cr-mattool-select_material.gif)

<br />

### 2.贴图需要重命名
为了避免出错，AutoPBR（自动PBR）需要对贴图节点进行重命名才会连接。  
这里可以[**自定义名称**](01-CMT-setting#自定义名称)，默认是`666`


<br />

### 3.贴图需要有指定的关键词

贴图的连接依赖文件名中的关键词，所以贴图需要有相关关键词如：Displacement、Normal之类
![关键词](/img/keywords_for_file_names.webp){data-zoomable}


<br />



### 4.修改关键词


- 可以在插件设置[**自定义关键词**](01-CMT-setting#自定义通道关键词)，设置完成后需点击`确定`。  
- 关键词支持[**正则**](01-CMT-setting#正则使用)，可以根据需要添加
- 支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`


<br />

插件还做了其他自动化的设置，例如：
- 在Standard Surface材质连接`Translucency`的时候会自动勾选Thin shell (no inside)，和自动设置强度；
- 连接`Glossiness`贴图的时候会会切换Roughness mode为Glossiness；
- 连接`Displacement`贴图会自动勾选Displacement等等……

<br />


<br />

<video  controls autoplay muted>
  <source src="/img/cr-mattool_autopbr_01_normal_mode.webm" type="video/webm">
</video>

<br />
<br />