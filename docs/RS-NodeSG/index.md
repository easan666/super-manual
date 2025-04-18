---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../RS-NodeSG-data'
</script>

# <span class="h1-icon"><img src="/img/RS-NodeSG.webp" alt="Custom Icon"></span>RS-NodeSG v2.6.0
## 说明
RS-NodeSG是Redshift的<span class="gb-text">Shader Graph（旧版节点）</span>辅助工具，可以自动连接PBR贴图，自动插入常用节点，自动连接指定通道，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置UDIM，自动设置颜色空间，自动设置对象ID标签，自动设置材质ID，自动添加PuzzleMatte等等……
<br />
<br />
- 支持版本：`Cinema 4D R23~2025`（2023需要更新到`2023.2+`，2024需要更新到`2024.2+`）
- 对3.0.45开心版进行特别的优化
- 插件下载地址（付费）：https://cgexe.com/56554/
- 插件需要登录后才能使用：[登录说明](01-RSG-setting)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />



## 更新说明

::: info RS-NodeSG v2.6.0<Badge type="danger" text="更新1+" />
1. 新增设置Material ID（材质ID）为0（点击Shift）

:::

::: details RS-NodeSG v2.5.0 <Badge type="info" text="更新3" />
1. RS-材质ID和RS-对象ID新增设置通道相同ID（按Alt键使用）
2. 优化插件设置GUI
3. 优化插件配置文件保存目录
:::

::: details RS-NodeSG v2.4.0 <Badge type="info" text="更新3" />
1. 优化To Absolute Path（转为绝对路径）对特殊路径的处理
2. 修复Object ID（对象ID）选择父子级无法添加的bug
3. 修复Object ID（对象ID）撤回可能导致C4D无响应的bug
:::

::: details RS-NodeSG v2.3.0 <Badge type="info" text="更新4" />
1. 新增自动设置Material ID（材质ID）
2. 新增绝对路径转换，可以将所选材质的纹理路径转换为绝对路径
3. 修复ObjectID（对象ID）的已知bug
4. 优化To Sprite（转为Sprite）的使用方式，可以选择未连接纹理节点转为Sprite
:::

::: details RS-NodeSG v2.2.0 <Badge type="info" text="更新4" />
1. 优化关键词配置文件
2. 自动PBR修复跳过没有关键词的贴图,避免没反应的错误导向
3. 优化登录验证逻辑
4. 添加版本管理文件
:::

::: details RS-NodeSG v2.0 <Badge type="info" text="更新16" />
1. 对插件核心逻辑进行重构，优化了插件的性能和兼容性
2. 优化插件的设置方式，可以在设置面板中直接修改插件的设置
3. 重写AutoPBR（自动PBR）的[连接逻辑](02-RSG-AutoPBR#连接逻辑)
4. AutoPBR支持关键词[正则设置](01-RSG-setting#自定义通道关键词)
5. AutoPBR（自动PBR）新增支持[多套贴图同时连接](02-RSG-AutoPBR#_3-多贴图混合)
6. AutoPBR新增支持[多材质混合连接](02-RSG-AutoPBR#_4-混合材质)
7. AutoPBR新增连接后根据通道自动命名贴图节点
8. AutoPBR新增支持同时使用同时使用Roughness和Glossiness
9. 菜单全面升级，使用新的[自定义弹出菜单](03-RSG-NodeMenu-setting)
10. AutoNode新增支持插入[全部RS节点](03-RSG-NodeMenu-demo)，支持自动混合，支持自定义排序
11. 插入节点方式的重新设计，支持[多种插入方式](03-RSG-NodeMenu-demo)，满足各种情况
12. 优化[AutoID（自动ID）](04-RSG-AutoID)的使用方式
13. 对所有节点进行了自动化的处理，计算和混合节点支持自动连接
14. 混合节点连接的优化，Color Layer、Bump Blender、Displacement Blender节点，可以自动连接所选贴图
15. 将常用的节点命令（TriPlanar、UV PSR等）变成插件命令，可以自定义快捷键
16. 处理平铺时调用Distorter节点，如果没有TriPlanar自动添加TriPlanar

:::

::: details RS-NodeSG v1.35 <Badge type="info" text="更新4" />
1. 此次更新主要是3.0.45开心版ACES OSL设置的优化
2. 判断标准是根据所选贴图连接的通道，所以如果贴图没有连接是不会修改的
3. ACES OSL操作说明：自动给颜色通道添加ACES
4. OSL（自动切换为Rec.2020），并且设置勾选非颜色通道贴图的Gamma Override
:::

::: details RS-NodeSG v1.3 <Badge type="info" text="更新2" />
1. 此次更新主要是对植物类贴图的优化
2. QuickPBR新增了Translucency的设置，可自动设置透光植物材质，一键自动连接Quixel Bridge（Megascans）的植物类贴图
3. QuickNode的To PBR也新增了Translucency的设置，可以选择指定节点，进行自动透光设置
4. 新增To Sprite，可以将指定的贴图转为Sprite节点，并且自动连接
5. 新增插入Color Splitter节点，可以在所选贴图插入Color Splitter，并且分离alpha通道
6. QuickNode菜单层级的调整
7. 优化QuickNode节点菜单调用逻辑，如果不在Shader Graph（旧版节点）下使用会提示
:::

::: details RS-NodeSG v1.2 <Badge type="info" text="更新9" />
1. 更新了对Cinema 4D 2024的支持
2. 兼容官方中文版
3. 根据官方中文修改了部分翻译（虽然现在官方中文也不大对）
:::

::: details RS-NodeSG v1.1.0 <Badge type="info" text="更新2" />
1. 优化QuickNode弹出菜单
2. 新增自动创建Round Corners圆角节点，可以直接创建Round Corners节点连接到bump
3. 新增To PBR的反射/折射/散射的自动连接
4. 新增Blur OSL，可以为贴图节点设置模糊效果，支持批量添加
5. 新增了自动设置UDIM，自动将"10xx"替换为""
6. 对3.0.45版本菜单的优化，同时新增ACES OSL用于设置颜色空间
:::

::: details RS_NodeTool v1.01 <Badge type="info" text="更新3" />
1. 更新了对redshift_v3.0.45开心版的支持
2. 更新RS3.0.45专用版本，为了避免误点击，此版本删除了新版（Scalar Ramp，Distorter，Color Space）相关内容
3. 注意redshift_v3.0.45开心版无法添加Scalar Ramp（标量渐变映射），Distorter（扭曲（处理平铺））和设置Color Space（颜色空间），因为这些节点和功能是新版redshift才有的
:::

