---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../LightHit-data'
</script>

# <span class="h1-icon"><img src="/img/LightHit.webp" alt="Custom Icon"></span>LightHit v2.1.0

## 说明
LightHit是C4D打光插件，支持主流渲染器，参考了KeyShot的操作方式，可以快速便捷地控制灯光位置，支持独显，自动设置灯光贴图等灯光操作……
<br />
<br />
- 支持版本：`Cinema 4D R23~2025`
- 支持所有渲染器
- 插件下载地址（付费）：https://cgexe.com/57699/
- 插件需要登录后才能使用：[登录说明](01-lighthit-license)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=113074358976807&bvid=BV1HyHxesEqj&cid=25725045672&p=1&autoplay=0;"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />

<br />

## 更新说明

::: info LightHit v2.1.0<Badge type="danger" text="更新1" />
1. Octane新增切换纹理类型，可以在插件设置选择Texture或者Distribution
:::

::: details LightHit v2.0.0<Badge type="info" text="更新5" />
1. 重写插件，优化整体数据结构
2. 支持多文档同时使用
3. 新增LightHit Tool，可以点击模型调整灯光位置
4. 新增灯光贴图资产，点击可以自动设置灯光贴图
5. 修复已知bug
:::


::: details LightHit v1.0.0<Badge type="info" text="发布" />
1. LightHit v1.0.0 发布
:::

<br />
<br />

