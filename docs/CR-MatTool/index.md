---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../CR-MatTool-data'
</script>

# <span class="h1-icon"><img src="/img/CR-AutoPBR.webp" alt="Custom Icon"></span>CR-MatTool v1.0
## 说明
CR-MatTool是Corona材质辅助工具 一键连接PBR贴图，批量添加TriPlanar节点，一键处理重复贴图，批量添加调节节点，批量转换Bitmap……
<br />
<br />
- 支持版本：`Cinema 4D R24~2024`
- 插件下载地址（付费）：https://cgexe.com/57351/
- 插件需要登录后才能使用：[登录说明](01-CMT-setting)

<br />

::: info 已知Bug<Badge type="info" text="1" />
当一个节点生成Shared时，除了AutoPBR（自动PBR），其他命令无法使用。

原因：节点连接多个端口时会生成一个Corona Shared导致无法获取原来节点，由于Corona没有公开相关API，所以暂时无法处理。

:::

<img src="/img/corona-shared-bug.webp" alt="Corona Shared">

<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 更新说明

::: info CR-MatTool v1.1<Badge type="danger" text="更新2" />
1. 修复对Cinema 4D 2024的支持
2. 修复多套贴图连接着色器覆盖的bug

:::

::: details CR-MatTool v1.0<Badge type="info" text="发布" />
1. CR-MatTool_v1.0发布

:::

