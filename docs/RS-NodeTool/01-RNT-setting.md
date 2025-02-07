---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-Settings.webp" alt="NodeTool插件设置"></span>插件设置


## 插件设置

- 中文 
<div class="img-to" >
  <img data-zoomable src="/img/rs_nodetool_2.7_setting_1_cn.webp" width=50%>
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_setting_2_cn.webp" width=50%>
</div>

<br />

- 英文 
<div class="img-to" >
  <img data-zoomable src="/img/rs_nodetool_2.7_setting_1_en.webp" width=50%>
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_setting_2_en.webp" width=50%>
</div>

<br />


## 关键词设置
AutoPBR（自动PBR）的连接依赖文件名中的关键词，可以根据需要设置对应的关键词。

![关键词](/img/keywords_for_file_names.webp){data-zoomable}

<br />

支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

- 关键词可以根据需要增删，不区分大小写，是用逗号分隔，`,`是英文的逗号
- 如果不是需要，请不要保留空格
- 关键词支持<span class="gb-text">正则</span>，可以根据需要添加
- 设置完成后需点击`确定`

<br />

### 正则使用

**常用示例：**

- `a.+?b` 匹配以字母 "a" 开头，后面跟着一个或多个任意字符（非贪婪模式），然后以字母 "b" 结尾的字符串。
- `a..b` 匹配以字母 "a" 开头，后面跟着任意两个字符，然后以字母 "b" 结尾的字符串。
- `\d+` 匹配一个或多个连续的数字。
- `^apple` 匹配以 "apple" 开头的字符串
- `apple$` 来匹配以 "apple" 结尾的字符串

**字符匹配：**

- `\d` 匹配任意数字。
- `\w` 匹配任意字母、数字或下划线。
- `\s` 匹配任意空白字符（空格、制表符等）。
- `.` 匹配除换行符外的任意字符。

**重复次数：**

- `*` 匹配前一个元素零次或多次。
- `+` 匹配前一个元素一次或多次。
- `?` 匹配前一个元素零次或一次。
- `{n}` 匹配前一个元素恰好 n 次。
- `{n,}` 匹配前一个元素至少 n 次。
- `{n,m}` 匹配前一个元素至少 n 次且不超过 m 次。

**字符类：**

- `[abc]` 匹配 a、b 或 c 中的任意一个字符。
- `[^abc]` 匹配除了 a、b 和 c 以外的任意字符。
- `[a-z]` 匹配任意小写字母。（插件不区分大小写）
- `[A-Z]` 匹配任意大写字母。（插件不区分大小写）
- `[0-9]` 匹配任意数字。

**锚点：**

- `^` 匹配行的开头。
- `$` 匹配行的结尾。
- `\b` 匹配单词的边界

<br />


## 其他设置

<br />

### 自动排列节点
AutoPBR（自动PBR）和Set TriPlanar（处理平铺）执行后会自动排列节点。  
如果这里取消勾选则不会自动排列。

<br />

### 自动重命名贴图
AutoPBR（自动PBR）执行后会根据贴图连接的通道自动命名。  
取消勾选则不会自动命名。


<br />

### 自动添加调节节点
AutoPBR（自动PBR）和To PBR（PBR连接）执行后会根据贴图连接的通道自动添加调节节点（Color Correct或者Ramp）。  
取消勾选则不会自动添加调节节点。

```
此功能仅作用于纹理节点，其他节点不会添加
```

<br />

### 自动重命名材质
AutoPBR（自动PBR）执行后会根据贴图的名称自动重命名对应材质。  
取消勾选则不会自动重命名材质。

<br />

<!-- ### 文件夹/列表模式

::: danger 注意
由于C4D 2024.4相关api的变更，无法正常切换到列表模式，AutoNode（自动节点）可能不再维护。
请使用RS-NodeMenu（节点菜单）替代。
:::

- 此处是用于AutoNode（自动节点）的显示模式
- 列表模式和文件夹模式：
<div class="img-to" >
  <img data-zoomable src="/img/plugin_list_mode.webp" alt="列表模式" width=40%>
  <img data-zoomable src="/img/plugin_folder_mode.webp" alt="文件夹模式" width=40%>
</div>

<br /> -->

### Substance节点设置
可以设置Substance节点贴图默认的大小，连接后会自动设置。


<br />

### Specular/Metallic流程
可以选择Substance节点Specular/Metallic流程，连接后会自动设置。  

```
金属/粗糙度流程 Metal/Roughness Workflow ：
Base Color（基础色贴图）、 Metallic（金属贴图）、 Roughness（粗糙度贴图）  

镜面反射/光泽度流程 Specular/Glossiness Workflow ：
Diffuse（漫反射贴图）、Specular（镜面反射贴图）、Glossiness（光泽度贴图）  
```

<br />

### 设置颜色通道

- 可以根据需要添加端口id到选项，设置的通道连接的贴图将会被设置为sRGB(color data)，其他会判断为non-color data
- 插件已经设置了材质的大部分常用颜色端口，如果不是特殊情况是不需要修改

>复制的端口ID会比较长，如`com.redshift3d.redshift4c4d.nodes.core.standardmaterial.base_color`  
设置的时候只需要添加后缀，如：`base_color`

<br />


#### 获取端口id:

1. 在节点编辑器首选项开启ID和信息显示
2. 选择需要添加的端口
3. 右键复制
<br />

<video controls>
  <source src="/img/Obtain Port ID.webm" type="video/webm">
</video>

<br />
<br />

### 自定义颜色/黑白调节节点
如果插件开启自动添加调节节点，会根据贴图连接的通道自动添加调节节点。  
这里可以自定义调节节点：  
节点ID会比较长，如`com.redshift3d.redshift4c4d.nodes.core.rscolorcorrection`  
设置的时候只需要添加`.`后面的后缀，如：`rscolorcorrection`


<br />

### 自定义弹窗菜单
<br />

<div class="img-to" >
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_nodemenu_setting_cn.webp" alt="nodemenu_setting" width=40%>
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_nodemenu_setting_en.webp" alt="nodemenu_setting" width=40%>
</div>

> 自定义菜单相关设置请参考[自定义菜单](03-RNT-NodeMenu)

<br />


### 检索文件夹路径
用于[Convert Path（转为绝对路径）](05-RNT-ConvertPath)，会检索贴图是否存在于当前文件夹下，如果存在将替换为绝对路径

<br />