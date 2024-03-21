---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-AutoPBR.webp" alt="Custom Icon"></span>VR-AutoPBR（自动PBR）

## 简介

用于于V-Ray Node Materials新版节点自动连接PBR贴图：

- 选中所需贴图，点击执行就会自动连接，连接后会自动排列节点
- 根据所连接的通道**自动命名**
- 为不同类型贴图**自动设置颜色空间**
- 贴图的连接依赖文件名中的关键词
- 关键词不区分大小写，可以插件设置[**自定义通道关键词**](01-VAN-setting#自定义通道关键词)
- 支持单个通道**多贴图混合添加**（例如多个`Diffuse`，多个`Bump`）
- 支持**多套贴图**同时连接
- 支持**混合材质**（如果有多个材质节点，需选中对应材质）
- 支持自动设置**置换贴图**（如果有置换需要选择物体）

```
Vray目前没有提供法线（Normal）混合的功能，所以法线只能添加一个。

```
<br />

<video controls>
  <source src="/img/vr-autonode_autopbr_01_normal_mode.webm" type="video/webm">
</video>


<br />
<br />

## 使用说明

### 1. 需要选中材质
使用的时候需要选中材质，然后在该材质的节点中编辑
![选中材质](/img/V-Ray-Node-Material.gif)

<br />

### 2.贴图需要有指定的关键词

贴图的连接依赖文件名中的关键词，所以贴图需要有相关关键词如：Displacement、Normal之类
![关键词](/img/keywords_for_file_names.webp){data-zoomable}


<br />

### 3.修改关键词

- 可以在插件设置[**自定义关键词**](01-VAN-setting#自定义通道关键词)，设置完成后需点击`确定`。  
- 关键词支持[**正则**](01-VAN-setting#正则使用)，可以根据需要添加
- 支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

<br />
<br />

## 连接逻辑
插件会根据所选贴图的类型判断连接的方式，并且设置相应的参数，以下简单举例

<br />

### 1. 单选
如果只选择包含`Bump`关键字的贴图，会自动设置贴图的**颜色空间**，添加对应节点和设置相关选项，并且**自动命名**，最后连接到凹凸通道

```
如果有置换需要选择物体

```
<br />

<video controls>
  <source src="/img/vr-autonode_autopbr_01_1_select_only_bump.webm" type="video/webm">
</video>

<br />
<br />
<br />
<br />


### 2. 多选
如果同时选择包含`Bump`和`Normal`关键字的贴图，会自动设置混合，添加对应节点和设置相关选项，最后连接到凹凸通道

<video controls>
  <source src="/img/vr-autonode_autopbr_01_2_select_normals_and_bump.webm" type="video/webm">
</video>

<br />
<br />
<br />
<br />


同时选择多个`Diffuse`和`AO`：

<video controls>
  <source src="/img/vr-autonode_autopbr_01_3_select_diffuse_and_ao.webm" type="video/webm">
</video>

<br />
<br />
<br />
<br />


### 3. 多贴图混合
如果同时选择多贴图，会根据对应的贴图添加混合层最后连接

```
多套贴图连接需注意：法线只能添加一个，如果有置换需要选择物体

```

<br />

<video controls>
  <source src="/img/vr-autonode_autopbr_03_multi_text.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />


### 4. 多材质节点/混合材质
支持混合材质的连接，如果有多个材质节点，需要指定材质节点

<video controls>
  <source src="/img/vr-autonode_autopbr_04_multi_mat.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />


### 5. 自动添加调节节点
可以在插件设置勾选[**自动添加调节节点**](01-VAN-setting#自动添加调节节点)，连接后会自动添加调节节点

<br />

> 首次使用需要需要导入VR-AutoNode.zip文件

<br />

<video controls>
  <source src="/img/vr-autonode_autopbr_05_add_adjust.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />


### 6. 自动设置置换
只需要选择带`Displacement`关键词的贴图，和选中物体就会自动添加。

```
由于Vray添加置换比较繁琐，所以插件设计了三种方式来添加置换。
AutoPBR（自动PBR）是其中一种。  
```

<br />


<video controls>
  <source src="/img/vr-autonode_autopbr_02_displacement_map.webm" type="video/webm">
</video>


<br />
<br />


## 设置说明
AutoPBR还会根据不同贴图设置相关参数：

- 例如使用`Translucency`贴图，会启用Refract Thin Walled，Translucency Type设置为SSS，并且设置SSS Amount为0.3
- 使用`Roughness`贴图，会勾选Use Roughness
- 如果使用`Diffuse`和多个`AO`，会添加Layered进行混合，并且`AO`会连接到后面的层，启用multiply模式
- 等等

