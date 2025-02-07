---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-NodeMenu.webp" alt="Custom Icon"></span>RS-NodeMenu（节点菜单）

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，调用插件和C4D的命令……

- 支持添加三种id，分别是节点id，插件id，C4D的命令id
- 操作演示请看：[演示说明](03-RNT-NodeMenu-demo)


<br/>


## 自定义菜单

<br/>


在插件设置中的`自定义弹出菜单`点击`设置菜单`, 或者按`Ctrl` / `Alt`点击`RS-NodeMenu（节点菜单）`可以自定义弹出菜单；  

- 支持Redshift节点id，如：`com.redshift3d.redshift4c4d.nodes.core.rscolorcorrection` ……
- 支持c4d命令id，如：`12099`,`c4d.CallCommand(12161)`……
- 支持插件自定义id，如：`to_diffuse`,`to_roughness`,`blur_node`……

<br/>

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-setting_01.webm" type="video/webm">
</video>


<br/>

## 添加命令
<br/>

<div class="img-to" >
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_nodemenu_setting_cn.webp" alt="nodemenu_setting" width=50%>
  <img data-zoomable src="/rs-node/rs_nodetool_2.8_nodemenu_setting_en.webp" alt="nodemenu_setting" width=50%>
</div>

<br/>

- 复制节点id或者命令id点击`粘贴`即可添加
- `文件夹`图标是打组
- `横线`图标是添加分割线
- `加号`图标是添加插件的自定义id
- 双击名称可以自定义显示名称

<br/>

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-setting_02.webm" type="video/webm">
</video>


<br/>


## C4D命令id
添加c4d命令id用于调用常用的命令：
- 按`Shitf + F12 `搜索命令，复制id然后点击粘贴, 如 `12099`
- 在`扩展` > `脚本记录` 可以看到运行过的id, 先点一下需要运行的命令复制如 `c4d.CallCommand(12107)` 然后点击粘贴即可

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-setting_03.webm" type="video/webm">
</video>



<br/>

## Redshift节点id
添加Redshift节点id用于添加和设置常用节点；

复制节点资产id然后点击粘贴，如`com.redshift3d.redshift4c4d.nodes.core.rscolorcorrection`  

::: info 需要开启显示信息和id  
显示信息：节点编辑器 > 预览 > 开启显示信息 
 
id信息：编辑 > 节点编辑首选项 > 勾选id  
:::


<br />

<video  controls autoplay muted>
  <source src="/rs-node/rs-nodetool-2-8-node-menu-setting_04.webm" type="video/webm">
</video>


<br />
<br />