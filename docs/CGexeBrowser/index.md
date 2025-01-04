---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../CGexeBrowser-data'
</script>

# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="Custom Icon"></span>CGexeBrowser v1.0.0

## 说明
CGexeBrowser是Cinema 4D资产管理和智能导入插件，支持**六大主流渲染器**。  
可以一键导入Megascans、GSG等常用资产，支持自动导入模型，PBR套图，HDR贴图，灯光贴图，纹理贴图，可以自动裁剪贴图尺寸，智能筛选Lod等……  

<br />

- 支持版本：`Cinema 4D R23和以上版本`，只支持Windows系统
- 支持`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`
- 插件下载地址（付费）：https://cgexe.com/58021/
- 插件首次使用需要登录后`重启C4D`：[登录说明](01-link4d-setting)，重启后需要设置资产文件夹路径


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程
<br />

<!-- <div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=1703604989&bvid=BV1VT421172S&cid=1518250197&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div> -->


<br />


<br />

## 更新说明


::: info CGexeBrowser v1.0.0<Badge type="danger" text="更新1+" />
1. CGexeBrowser v1.0.0发布

:::


<br />
<br />

