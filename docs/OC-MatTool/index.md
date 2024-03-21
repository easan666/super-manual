---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../OC-NodeTool-data'
</script>

# <span class="h1-icon"><img src="/img/OC-AutoPBR.webp" alt="Custom Icon"></span>OC-MatTool v1.3
## 说明
OC-MatTool是Octane材质辅助工具 一键连接PBR贴图，批量添加chaos节点，一键处理重复贴图，批量添加调节节点，批量添加UV节点，批量添加TriPlanar节点，自动设置ID，自动添加Layer /Custom AOV等等……
<br />
<br />
- 支持版本：`Cinema 4D R23~2024`
- 插件下载地址（付费）：https://cgexe.com/57283/
- 插件需要登录后才能使用：[登录说明](01-OMT-setting)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 更新说明

::: info OC-MatTool v1.3<Badge type="danger" text="更新2+" />
1. 新增自动设置Displacement节点的Level of detail，可以自适应设置尺寸，也支持自定义大小
2. 修复一些操作的弹窗提示

:::

::: details OC-MatTool v1.2<Badge type="info" text="更新1" />
1. 新增支持混合材质Mix/Composite/Layered/Sub的连接

:::

::: details OC-MatTool v1.1<Badge type="info" text="更新2" />
1. 修复同时连接Diffuse和AO的bug
2. 新增自动添加Projection节点，添加UV Transform节点时会同时添加

:::


::: details OC-MatTool v1.02<Badge type="info" text="更新3" />
1. 修复子级物体使用自动ID不会递增的bug
2. 设置Custom AOV超过20个时添加提示
3. 修复v1.01颜色通道不更新的bug

:::


::: details OC-MatTool v1.0<Badge type="info" text="发布" />
1. OC-MatTool_v1.0发布

:::

<br />
<br />

### 重复造轮子？
为什么octane已经有自动连接PBR的功能，还重复造轮子？
- 因为官方写的有点敷衍，只能识别名称后缀，稍微复杂一点的名称就不会识别。
- AO不会自动连接，Glossiness不支持，植物常用的Translucency在Standard Surface材质也不会连接和设置
- 没有设置贴图的<a href="https://docs.otoy.com/cinema4d/ImageTexture.html" target="_blank" class="red_link-sm"
            rel="noopener nofollow ugc">类型(Type)</a>，正常（Normal）会比浮点（Float）多占用三倍显存，正确设置贴图类型可以有效节省显存资源
- 交互很霸道，只要拖入一张贴图，其他贴图也会强制添加

<br />

### 优化
- 正确设置贴图类型，不会造成不必要显存资源浪费
- 关键词支持[**正则**](01-OMT-setting#正则使用)，可以进行复杂的匹配和高度自定义
- 支持`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`自动连接和设置
- 适配Diffuse/Glossy/Specular/Metallic/Toon/Universal和 Standard Surface材质
- 可以根据所连接的通道自动[命名节点](01-OMT-setting#自动重命名贴图)
- 可以根据贴图的文件名自动[命名材质](01-OMT-setting#自动重命名材质)
- 可以为不同类型贴图自动添加[调节节点](01-OMT-setting#自动添加调节节点)
- 可以自动添加[chaos节点](01-OMT-setting#自动添加chaos节点) 用于处理贴图重复
- 可以自动添加[UV Transform节点](01-OMT-setting#自动添加uv节点)  
<br />

然后顺便写了自动设置ID和自动添加Layer Id AOV /Custom AOV，批量添加chaos节点，一键处理重复贴图，批量添加调节节点，批量添加UV节点，批量添加TriPlanar节点等功能，如果用的人比较多会继续添加其他功能。


<br />
<br />

## ☠使用注意
由于Octane并没有开放节点的api，所以插件并不是对Octane节点的控制，而是对材质的设置。  
这样就有一些局限性，也无法对节点进行一些精细化的操作  
> 节点连接之后会重叠，需要手动整理。

<br />

<video controls autoplay muted>
  <source src="/img/oc-mattool-autopbr-addadjust-02.webm" type="video/webm">
</video>

