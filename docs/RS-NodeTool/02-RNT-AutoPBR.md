---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-AutoPBR.webp" alt="Custom Icon"></span>RS-AutoPBR（自动PBR）

## 简介

用于RS Node节点（新版节点）自动连接PBR贴图，适配Standard Material和 Material：

- 选中所需贴图，点击执行就会自动连接，连接后会自动排列节点
- 根据所连接的通道**自动命名**
- 为不同类型贴图**自动设置颜色空间**
- 贴图的连接依赖文件名中的关键词
- 关键词不区分大小写，可以插件设置[**自定义通道关键词**](01-RNT-setting#自定义通道关键词)
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
  <source src="/img/autopbr_set_adjust_node.webm" type="video/webm">
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

- 可以在插件设置[**自定义关键词**](01-RNT-setting#自定义通道关键词)，设置完成后需点击`确定`。  
- 关键词支持[**正则**](01-RNT-setting#正则使用)，可以根据需要添加
- 支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

<br />
<br />

## 连接逻辑
插件会根据所选贴图的类型判断连接的方式，并且设置相应的参数，以下简单举例

<br />

### 1. 单选
如果只选择包含`Bump`关键字的贴图，会自动设置贴图的**颜色空间**，添加对应节点和设置相关选项，并且**自动命名**，最后连接到凹凸通道

<video controls>
  <source src="/img/autopbr_bump_connection.webm" type="video/webm">
</video>

<br />
<br />

### 2. 多选
如果同时选择包含`Bump`和`Normal`关键字的贴图，会自动设置混合，添加对应节点和设置相关选项，最后连接到凹凸通道

<video controls>
  <source src="/img/autopbr_bump_and_normal_combined_connection.webm" type="video/webm">
</video>

<br />
<br />

同时选择多个`Diffuse`和`AO`：

<video controls>
  <source src="/img/autopbr_blend_multiple_nodes_connection.webm" type="video/webm">
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
  <source src="/img/autopbr_connect_multiple_textures.webm" type="video/webm">
</video>


<br />
<br />


### 4. 多材质节点/混合材质
支持混合材质的连接，如果有多个材质节点，需要指定材质节点

<video controls>
  <source src="/img/autopbr_automatic_blend_multiple_materials.webm" type="video/webm">
</video>


<br />
<br />

### 5. 自动添加调节节点
可以在插件设置勾选[**自动添加调节节点**](01-RNT-setting#自动添加调节节点)，连接后会自动添加调节节点

<video controls>
  <source src="/img/autopbr_set_adjust_node.webm" type="video/webm">
</video>


<br />
<br />

### 6. 自动连接Substance节点
可以自动连接Substance节点常用的端口

- 可以在插件设置[**Substance默认尺寸**](01-RNT-setting#substance节点尺寸设置)，连接后会自动设置尺寸
- 可以在插件设置选择[**Specular/Metallic流程**](01-RNT-setting#specular-metallic流程)
- 连接后会根据不同通道自动添加调节节点，可以在[**插件设置**](01-RNT-setting##插件设置-1)中取消
- 连接后会根据sbsar文件名称重命名Substance节点，可以在[**插件设置**](01-RNT-setting##插件设置-1)中取消重命名
- 连接后会根据sbsar文件名称重命名材质，可以在[**插件设置**](01-RNT-setting##插件设置-1)中取消重命名

<video controls>
  <source src="/img/autopbr_set_substance_node.webm" type="video/webm">
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


<br />
<br />

## ☠使用注意
新版Node节点生成预览的时候都会造成CPU或者GPU瞬间占用很高，Vray是用CPU生成预览，Redshift是用GPU生成预览。  
Redshift在连接节点之后会计算节点产生的预览效果。这个过程GPU中使用率会**瞬间变高🔥**（生成预览之后会降低），特别是同时连接多个贴图的时候GPU的使用率会突然飙升。
> 这和插件无关，就算不用插件，这个问题也是存在的

<br />

::: danger 个人建议
所以如果当你场景比较大的时候，建议把材质预览**关闭**或者修改为**渲染器闲置时**。
:::

<br />

### 说明视频
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=833983424&bvid=BV1D34y1F7if&t=185&cid=1346021641&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<br />

可以在设置（Ctrl+E）> 渲染器 > Redshift，**关闭**材质预览或者修改为**渲染器闲置时**。  
[渲染器闲置时](https://help.maxon.net/r3d/cinema/en-us/#html/Redshift+Preferences.html?TocPath=_____8)就是仅在渲染器空闲时更新材质预览。  
关闭材质预览之后，连接贴图会快很多，而且也不会占用额外的资源。  
缺点就是材质没有预览，都是黑色的，所以必须归类命名好😂

<br />

![关闭材质预览](/img/disable_material_preview.webp){data-zoomable}