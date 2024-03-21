---
layout: doc
---
# <span class="h1-icon"><img src="/img/SG-AutoPBR.webp" alt="Custom Icon"></span>RS-AutoPBR（自动PBR）

## 简介

用于RS Shader Graph（旧版节点）自动连接PBR贴图，适配Standard Material和 Material：

- 选中所需贴图，点击执行就会自动连接，连接后会自动排列节点
- 根据所连接的通道**自动命名**
- 为不同类型贴图**自动设置颜色空间**
- 会根据贴图连接的通道[**自动添加调节节点**](01-RSG-setting#自动添加调节节点)，调节节点支持[**自定义**](01-RSG-setting#自定义颜色-黑白调节节点)
- 贴图的连接依赖文件名中的关键词
- 关键词不区分大小写，可以插件设置[**自定义通道关键词**](01-RSG-setting#自定义通道关键词)
- 支持单个通道**多贴图混合添加**（例如多个`Diffuse`，多个`Bump`）
- 支持**多套贴图**同时连接
- 支持**混合材质**（如果有多个材质节点，需选中对应材质）

```
多套贴图连接需注意：
- Color Layer最多只能添加8个节点
- Bump Blender最多只能添加4个节点
- Displacement Blender最多只能添加4个节点

```
<br />

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-01.webm" type="video/webm">
</video>


<br />
<br />

## 使用说明

### 1. 需要选中材质
使用的时候需要选中材质，然后在该材质的节点中编辑
![选中材质](/img/select_rs_material.gif)

<br />

### 2.贴图需要有指定的关键词

贴图的连接依赖文件名中的关键词，所以贴图需要有相关关键词如：Displacement、Normal之类
![关键词](/img/keywords_for_file_names.webp){data-zoomable}


<br />

### 3.修改关键词

- 可以在插件设置[**自定义关键词**](01-RSG-setting#自定义通道关键词)，设置完成后需点击`确定`。  
- 关键词支持[**正则**](01-RSG-setting#正则使用)，可以根据需要添加
- 支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

<br />
<br />

## 连接逻辑
插件会根据所选贴图的类型判断连接的方式，并且设置相应的参数，以下简单举例

<br />

### 1. 单选
如果只选择包含`Bump`关键字的贴图，会自动设置贴图的**颜色空间**，添加对应节点和设置相关选项，并且**自动命名**，最后连接到凹凸通道

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-02.webm" type="video/webm">
</video>

<br />
<br />

### 2. 多选
如果同时选择包含`Bump`和`Normal`关键字的贴图，会自动设置混合，添加对应节点和设置相关选项，最后连接到凹凸通道

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-03.webm" type="video/webm">
</video>

<br />
<br />


### 3. 多贴图混合
如果同时选择多贴图，会根据对应的贴图添加混合层最后连接

```
多套贴图连接需注意：
- Color Layer最多只能添加8个节点
- Bump Blender最多只能添加4个节点
- Displacement Blender最多只能添加4个节点

```

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-04.webm" type="video/webm">
</video>


<br />
<br />


### 4. 多材质节点/混合材质
支持混合材质的连接，如果有多个材质节点，需要指定材质节点

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-05.webm" type="video/webm">
</video>


<br />
<br />

### 5. 自动添加调节节点
可以在插件设置勾选[**自动添加调节节点**](01-RSG-setting#自动添加调节节点)，连接后会自动添加调节节点  
调节节点支持自定义，[**自定义调节节点**](01-RSG-setting#自定义颜色-黑白调节节点)

<video controls>
  <source src="/img/rs-nodesg-2-autopbr-06.webm" type="video/webm">
</video>


<br />
<br />


## 设置说明
AutoPBR还会根据不同贴图设置相关参数：

- 在Material材质中使用Metalness贴图，会将材质的BRDF切换为GGX，Fresnel Type切换为Metalness
- 在Standard材质中使用Translucency贴图，会启用Thin Walled，然后连接到Subsurface Color；在Material材质中使用Translucency贴图，则会连接到Back-Lighting/Translucency
- 同时使用`Diffuse`和`AO`，会自动设置`AO`的混合模式为相乘
- 同时使用`Roughness`和`Glossiness`，会自动设置混合层，并且给`Glossiness`添加勾选反转的Ramp节点
- 等等

