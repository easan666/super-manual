---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../AutoSort-data'
</script>

# <span class="h1-icon"><img src="/img/AutoSort.webp" alt="Custom Icon"></span>AutoSort v1.6.0

## 说明
AutoSort（自动整理）是C4D的场景整理插件，可以一键整理所选对象，自动归类和设置层，同名独显（灯光独显），同组独显所选（灯光独显），独显所选对象，根据名称排序，根据对象命名材质，设置图标/对象随机色，支持自定义类型、颜色、正则关键词等等……
<br />
<br />
- 支持版本：`Cinema 4D R23~2025`
- 插件下载地址（付费）：https://cgexe.com/57457/
- 插件需要登录后才能使用：[登录说明](01-AutoSort-setting)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 相关问题

::: details 为什么无法归类？
为了避免出错，已经添加层的对象是不会去移动和修改，所以如果发现无法归类的物体，请将其移出层
:::

::: details 更新插件怎么保留之前的设置？
更新/移动插件之前可以先备份配置文件，然后在其他电脑上覆盖配置文件，这样就不需要再设置一遍了。
配置文件位置：在插件文件夹的 `res`文件夹下，文件名是`ObjectType.json`和`ExtraSettings.json`
:::

::: details 无法保存插件设置？
插件会将配置信息存储在配置文件，一般来说C4D对默认的插件目录都有写入权限。  
如果没有的话，可以分别尝试：
1. 将插件放在C4D配置文件夹的插件目录，打开C4D > 编辑 > 设置 > 配置文件夹 > 打开对应的版本 > plugins文件夹
2. 右键C4D，以管理员身份运行
3. 使用管理员账户登录Windows系统
:::

<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=1851967804&bvid=BV1tp421U7vL&cid=1471471115&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />

## 更新说明

::: info AutoSort v1.6.0<Badge type="danger" text="更新4+" />
1. 新增Hide Selected（隐藏所选），可以隐藏/显示所选对象
2. 新增Top Selected（置顶所选），选择对象单击, 会将所选对象和对应的材质置顶
3. 优化Renam Mat By Obj（对象材质命名），如果有选集会名称会添加选集名称
:::

::: details AutoSort v1.5.0<Badge type="info" text="更新4+" />
1. 新增Sort By Name（名称排序），选择多个对象单击会根据名称排序, Alt或者Ctrl+单击是反序
2. 新增Renam Mat By Obj（对象材质命名），选择对象单击, 会根据对象名称重命名所使用的材质
3. 新增Set Icon Random Color（图标随机色），选择对象单击可以设置图标随机颜色, Alt或者Ctrl+单击是取消图标颜色
4. 新增Set Obj Random Color（对象随机色），选择对象单击可以设置对象随机颜色, Alt或者Ctrl+单击是取消对象颜色

:::

::: details AutoSort v1.4.0<Badge type="info" text="更新3+" />
1. 新增Name Solo（同名独显），根据名称过滤相关对象，单击可将所选独显（可用于灯光独显）
2. 新增Auto Group（一键打组），可以根据设置自动为所选对象打组，类似一键整理，区别就是不会添加层
3. 修复Select Solo（所选独显）使用时摄像机锁定的bug

:::

::: details AutoSort v1.3.0<Badge type="info" text="更新2" />
1. 新增Axis To Bottom（轴心置底），可将所选对象的轴心置于底部中心
2. 新增Select Solo（所选独显），单击可将所选对象独显, 类似Magic Solo，因为Magic Solo对于有父级的对象会失效，所以重写了一个

:::

::: details AutoSort v1.2.0<Badge type="info" text="更新2" />
1. 添加版本管理文件
2. 优化登录验证逻辑
:::

::: details AutoSort v1.1.0<Badge type="info" text="更新8" />
1. 优化查找和分类的逻辑
2. 优化移动的排序，分类之后保持原来的排序
3. 优化同名组的设置逻辑
4. 取消分类后自动折叠
5. 添加相关提示和引导
6. 新增[同组独显](03-AutoSort-groupsolo)
7. 新增[全局独显](03-AutoSort-groupsolo)
8. 新增[隐藏/显示所选](03-AutoSort-groupsolo)
:::

::: details AutoSort v1.0.1<Badge type="info" text="更新1+" />
1. 修复场景太多模型卡死的问题
:::

::: details AutoSort v1.0.0<Badge type="info" text="发布" />
1. AutoSort_v1.0发布

:::


<br />
<br />

