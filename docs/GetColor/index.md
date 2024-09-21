---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../GetColor-data'
</script>

# <span class="h1-icon"><img src="/img/GetColor.webp" alt="Custom Icon"></span>GetColor v1.0.0

## 说明
GetColor可以根据剪切板数据生成材质，支持复制颜色代码生成材质，支持截图/复制图片生成材质，支持六大主流渲染器
<br />
<br />
- 支持版本：`Cinema 4D S24~2025`
- 支持`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`
- 插件下载地址（付费）：https://cgexe.com/57555/
- 插件需要登录后才能使用：[登录说明](01-GetColor-setting)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=1255854226&bvid=BV1bJ4m1u7JX&cid=1587107811&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />

## 相关问题


::: details 更新插件怎么保留之前的设置？
更新/移动插件之前可以先备份配置文件，然后在其他电脑上覆盖配置文件，这样就不需要再设置一遍了。
配置文件位置：在插件文件夹的 `res`文件夹下，文件名是`Settings.json`
:::

::: details 无法保存插件设置？
插件会将配置信息存储在配置文件，一般来说C4D对默认的插件目录都有写入权限。  
但是如果没有权限的话，可以尝试下面的几种方法：
1. 将插件放在C4D配置文件夹的插件目录，打开C4D > 编辑 > 设置 > 配置文件夹 > 打开对应的版本 > plugins文件夹
2. 右键C4D，以管理员身份运行
3. 使用管理员账户登录Windows系统
:::




<br />

## 更新说明

::: info GetColor v1.0.0<Badge type="danger" text="发布" />
1. GetColor v1.0.0 发布

:::



<br />
<br />

