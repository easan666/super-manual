---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../Link4D-data'
</script>

# <span class="h1-icon"><img src="/img/link4d-call_c4d.webp" alt="Custom Icon"></span>Link4D v1.2.0

## 说明
Link4D 是Windows系统和C4D交互的插件，支持**六大主流渲染器**。  
可以批量选择PBR贴图直接右键发送到C4D自动生成材质。可以实时获取Windows资源管理器所选文件，用于实时替换HDR贴图，灯光贴图，纹理贴图等……  

<br />

- 支持版本：`Cinema 4D R23~2024`，只支持Windows系统
- 支持`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`
- 插件下载地址（付费）：https://cgexe.com/57511/
- 插件首次使用需要登录后`重启C4D`：[登录说明](01-link4d-setting)
- 首次使用右键`Send PBR to C4D`需要先双击运行插件文件夹的`add_添加菜单.bat`文件


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=1703604989&bvid=BV1VT421172S&cid=1518250197&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />

## 相关问题

::: details 如何添加/删除右键Send PBR to C4D？
在插件文件夹有个`add_添加菜单.bat`文件，双击运行即可添加，删除的话就运行`del_删除菜单.bat`。
:::

::: details 更新插件怎么保留之前的设置？
更新/移动插件之前可以先备份配置文件，然后在其他电脑上覆盖配置文件，这样就不需要再设置一遍了。
配置文件位置：在插件文件夹的 `assets`文件夹下，文件名是`settings.json`
:::

::: details 无法保存插件设置？
插件会将配置信息存储在配置文件，一般来说C4D对默认的插件目录都有写入权限。  
如果没有的话，可以分别尝试：
1. 将插件放在C4D配置文件夹的插件目录，打开C4D > 编辑 > 设置 > 配置文件夹 > 打开对应的版本 > plugins文件夹
2. 右键C4D，以管理员身份运行
3. 使用管理员账户登录Windows系统
:::

<br />



<br />

## 更新说明


::: details Link4D v1.2.0<Badge type="info" text="更新2+" />
1. Octane渲染器的法线贴图类型修改为normal
2. Octane渲染器置换贴图取消调节节点

:::

::: details Link4D v1.1.0<Badge type="info" text="更新2" />
1. 添加版本管理文件
2. 优化登录验证逻辑

:::

::: details Link4D v1.0.0<Badge type="info" text="发布" />
1. Link4D_v1.0发布

:::

<br />
<br />

