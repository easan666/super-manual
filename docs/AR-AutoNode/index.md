---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../AR-AutoNode-data'
</script>

# <span class="h1-icon"><img src="/img/AR-AutoPBR.webp" alt="Custom Icon"></span>AR-AutoNode v2.0
## 说明
AR-AutoNode是Arnold的节点辅助工具，同时支持Node节点（Node Material）和legacy节点（Arnold Material/legacy），可以自动连接PBR贴图，自动插入节点，自动连接指定通道，自动添加UV控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置UDIM，等等……
<br />
<br />
- 支持版本：`Cinema 4D R25~2024`
- 插件下载地址（付费）：https://cgexe.com/56745/
- 插件需要登录后才能使用：[登录说明](01-AAN-setting)
- 首次使用先需要导入插件`assets`文件夹的`AutoNode.zip`节点资产：[导入教程](01-AAN-import_assets)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 更新说明

::: info AR-AutoNode v2.0.0 <Badge type="danger" text="更新15+" />
1. 重写插件，对插件核心逻辑进行重构，优化了插件的性能和兼容性
2. 由于Arnold的api不稳定，所以采用C4D官方的api
3. 重新优化[自动PBR](02-AAN-AutoPBR)的连接逻辑
4. 新增支持多材质节点自动连接PBR
5. 新增自动设置贴图的颜色空间（可自定义）
6. 新增自动连接PBR后自动添加调节节点（可自定义）
7. 新增自动连接PBR后根据文件名重命名材质
8. 新增多贴节点连接根据文件名排序
9. 新增同时支持Glossiness和Roughness贴图
10. 菜单全面升级，使用新的[自定义弹出菜单](03-AAN-CustomMenu)，支持自定义添加常用节点和命令
11. 新增支持插入全部Arnold节点，支持自动混合，支持自定义排序
12. 插入节点方式的重新设计，支持多种插入方式，满足各种情况
13. 对所有节点进行了自动化的处理，计算和混合节点支持自动连接
14. 混合节点连接的优化，layer_rgba、mix_rgba、layer_shader、switch_shader等节点可以自动连接
15. 新增[TP PBR](04-AAN-To_PBR)弹出菜单

:::

::: details AR-AutoNode 1.04<Badge type="info" text="更新1" />
1. 修改阿诺德4.6.7官方api以兼容Cinema 4D 2024，R25~2024可以共用插件

:::

::: details AR-AutoNode 1.01<Badge type="info" text="更新1" />
1. 对Cinema 4D 2024.1的支持，修改阿诺德官方api以兼容新版本

:::

::: details AR-AutoNode v1.0<Badge type="info" text="发布" />
1. AR-AutoNode_v1.0发布

:::


<br />
<br />

## ☠使用注意

新版Node节点生成预览的时候都会造成CPU或者GPU瞬间占用很高，Vray和Arnold是用CPU生成预览，Redshift是用GPU生成预览。  
Arnold在连接节点之后会计算节点产生的预览效果。这个过程CPU中使用率会**瞬间变高🔥**（生成预览之后会降低），特别是同时连接多个贴图的时候CPU的使用率会突然飙升。
> 这和插件无关，就算不用插件，这个问题也是存在的


<br />

::: danger 个人建议
所以如果当你场景比较大或者有大量的节点的时候，建议把节点预览**关闭**。
:::

<br />

可以在设置（Ctrl+E）> 渲染器 > Arnold ，**关闭**节点预览和材质预览。 
<br />  
关闭材质预览之后，连接贴图会快很多，而且也不会占用额外的资源。缺点就是材质没有预览，都是黑色的，所以必须归类命名好😂

<br />

<img data-zoomable src="/img/ar-autonode_close_node_mat_preview.webp" alt="插件设置" width=50%>

