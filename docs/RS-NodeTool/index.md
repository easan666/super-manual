---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../RS-NodeTool-data'
</script>

# <span class="h1-icon"><img src="/img/RS-AutoPBR.webp" alt="Custom Icon"></span>RS-NodeTool v2.4
## 说明
RS-NodeTool是Redshift的<span class="gb-text">Node节点（新版节点）</span>辅助工具，可以自动连接PBR贴图，自动插入常用节点，自动连接指定通道，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置UDIM，自动设置颜色空间，自动设置对象ID标签，自动添加PuzzleMatte等等……
<br />
<br />
- 支持版本：`Cinema 4D 2023~2024`（2023需要更新到`2023.2+`，2024需要更新到`2024.1+`）
- 插件下载地址（付费）：https://cgexe.com/56536/
- 插件需要登录后才能使用：[登录说明](01-RNT-setting)
- 首次使用先需要导入插件`assets`文件夹的`NodeTool.zip`节点资产：[导入教程](03-RNT-AutoNode#导入)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程

### RS-NodeTool v2.0 视频教程
<br />
<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=833983424&bvid=BV1D34y1F7if&cid=1346021641&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />


## 更新说明

::: info RS_NodeTool v2.4<Badge type="danger" text="更新3+" />
1. 新增对所有节点进行了[自动连接的优化](03-RNT-AutoNode#多选自动连接)，大部分节点多选后会自动连接
2. 新增对[Shader Switch](03-RNT-AutoNode#混合节点的优化)自动连接的优化
3. 新增Substance节点连接可选[Specular/Metallic流程](01-RNT-setting#specular-metallic流程)
4. 修复Optimize Node等已知bug

:::

::: details RS_NodeTool v2.2<Badge type="info" text="更新3+" />
1. 新增自定义节点/命令菜单，可以自定义常用节点和命令菜单
2. 自定义调节节点，可以自定义颜色/黑白调节节点
3. 优化设置交互，插件设置点击确定后自动关闭

:::

::: details RS_NodeTool v2.1<Badge type="info" text="更新7+" />
1. AutoPBR（自动PBR）新增自动连接[Substance节点](02-RNT-AutoPBR#_6-自动连接substance节点)
2. 新增自动调节Substance节点[尺寸设置](01-RNT-setting#substance节点尺寸设置)
3. 新增自动添加[调节节点设置](02-RNT-AutoPBR)
4. 新增自动[重命名材质](01-RNT-setting#自动重命名材质)
5. 修复插入节点自动展开预览的bug
6. 修复英文版显示中文节点的问题
7. 修复登录验证无网络连接提示

:::

::: details RS_NodeTool v2.0<Badge type="info" text="更新15+" />
1. 对插件核心逻辑进行重构，优化了插件的性能和兼容性
2. 优化插件的设置方式，可以在设置面板中直接修改插件的设置
3. 重写AutoPBR（自动PBR）的[连接逻辑](02-RNT-AutoPBR#连接逻辑)
4. AutoPBR支持关键词[正则设置](01-RNT-setting#自定义通道关键词)
5. AutoPBR（自动PBR）新增支持[多套贴图同时连接](02-RNT-AutoPBR#_3-多贴图混合)
6. AutoPBR新增支持[多材质混合连接](02-RNT-AutoPBR#_4-混合材质)
7. AutoPBR新增连接后根据通道自动命名贴图节点
8. AutoPBR新增支持同时使用同时使用Roughness和Glossiness
9. AutoNode（自动节点）全面升级，使用新的[资产弹出菜单](03-RNT-AutoNode)
10. AutoNode新增支持插入[全部RS节点](03-RNT-AutoNode)，支持切换显示模式，支持自定义排序
11. 插入节点方式的重新设计，支持[三种插入方式](03-RNT-AutoNode#插入节点的三种方式)，满足各种情况
12. AutoNode新增23个节点资产，可以在AutoNode使用节点命令
13. 优化[AutoID（自动ID）](04-RNT-AutoID)的使用方式
14. 混合节点连接的优化，Color Layer、Bump Blender、Displacement Blender节点，可以自动连接所选贴图
15. 将常用的节点命令（TriPlanar、UV PSR等）变成插件命令，可以自定义快捷键

:::

::: details RS_NodeTool v1.4 <Badge type="info" text="更新12" />
1. 取消插入节点后自动整理全部节点
2. 新增TriPlanar Control、UV PSR、Blur Node几个节点组，用于批量控制
3. TriPlanar Control节点组用于批量控制TriPlanar大部分参数，内置处理贴图平铺重复功能，不需要单独创建distorter
4. UV PSR节点组用于批量控制贴图的缩放，偏移，旋转，内置等比缩放和模糊功能
5. Blur Node节点组用于设置贴图模糊
6. QuickPBR新增了Translucency的设置，可自动设置透光植物材质，一键自动连接Quixel Bridge（Megascans）的植物类贴图
7. QuickNode的To PBR也新增了Translucency的设置，可以选择指定节点，进行自动透光设置
8. 新增To Sprite，可以将指定的贴图转为Sprite节点，并且自动连接
9. 新增插入Color Splitter节点，可以在所选贴图插入Color Splitter，并且分离alpha通道
10. 新增自动创建Round Corners圆角节点，可以直接创建Round Corners节点连接到bump
11. 新增优化所选节点，可以隐藏所选节点预览和未使用的端口（纹理节点和主材质节点除外）
12. QuickNode菜单层级的调整
:::

::: details RS_NodeTool v1.3.1 <Badge type="info" text="更新2" />
1. 更新对Cinema 4D 2024的支持
2. 兼容官方中文版
:::

::: details RS_NodeTool v1.3.0 <Badge type="info" text="更新9" />
1. 优化了操作逻辑，如果没有选中材质会自动选中
2. 重构了QuickPBR的代码
3. 新增QuickNode弹出菜单，集合了常用的工具
4. 新增To PBR（PBR连接），可以自动连接指定通道
5. 新增自动插入常用节点（Ramp，Scalar Ramp，Color Correct，Color Layer，Change Range，Color Change Range）
6. 修改了TriPlanar（三平面）的数值节点，可以控制多个TriPlanar节点的Scale
7. 新增了自动设置UDIM，自动将"10xx"替换为""
8. 新增了Optimize Nodes（优化节点），可以隐藏节点预览和未使用的端口（纹理节点和主材质节点除外）
9. 更新了中文版本
:::

::: details RS_NodeTool v1.2.0 <Badge type="info" text="更新2" />
1. 新增R26版本的插件
2. 优化AutoPuzzleMatte自动命名的逻辑
:::

::: details RS_NodeTool v1.1.0 <Badge type="info" text="更新3" />
1. 新增RS-AddTriPlanar_Node
2. 新增RS-AddDistorter_Node
3. 新增RS-AutoPuzzleMatte
:::


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