---
layout: doc
---
# <span class="h1-icon"><img src="/img/AR-NodeMenu.webp" alt="Custom Icon"></span>自定义菜单

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，批量添加混合图层/常用调节节点，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置设置UDIM……

- 支持自定义添加所有Arnold节点和自定义排序
- 可以在所选节点前插入节点，并且自动连接
- 支持三种方式插入，自动添加节点
- 选择多个节点，自动添加混合层
- 可以调用插件命令，批量添加TriPlanar、Transform等


<br/>

 ### 说明视频
<br />

 <div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=1451516919&t=89&amp;bvid=BV1bi421d7Vg&amp;cid=1467480428&amp;p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div> 


<br/>

## 自定义菜单

在插件设置中的`自定义弹出菜单`添加对应id就可以在菜单显示；  
- 使用英文逗号`,`分隔
- 支持Arnold节点id，如：`color_correct`,`C4D Noise`,`layer_rgba`……
- 支持c4d命令id，如：`1034460`,`1039255`,`12161`……
- 支持插件自定义id，如：`set_tri`,`set_coords`,`set_transform`,`set_udim`……
- 分割线为：`line`

<br/>
示例：

```
color_correct,layer_rgba,line,set_tri,set_udim,line,1062862,1039255,12161
```

<br/>

<video controls>
  <source src="/img/ar_autonode_node_custommenu_settings.webm" type="video/webm">
</video>

<br />
<br />
<br />
<br />


## Arnold节点id
添加Arnold节点id用于添加和设置常用节点；

设置的时候只需要复制添加节点的资产id，如：`color_correct`


<br />

<video controls>
  <source src="/img/ar_autonode_node_autonode_get_node_id.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />


## C4D命令id
添加c4d命令id用于调用常用的命令；
可以在命令管理（Shift+F12）中获取命令id：

<video controls>
  <source src="/img/ar_autonode_node_autonode_get_command_id..webm" type="video/webm">
</video>



<br />
<br />
<br />
<br />


## 插件自定义id
用于调用插件的功能；
- 分割线：`line`
- 批量添加三平面：  `set_tri`
- 批量添加Randomizer： `set_coords`
- 批量添加Transform： `set_trans`
- 设置Set UDIM： `set_udim`
- TO PBR连接到指定通道：
  -  漫反射：`to_diffuse`
  -  金属度：`to_metalness`
  -  粗糙度：`to_roughness`
  - 反射颜色：`to_specular_color`
  - 反射强度：`to_specular_weight`
  - 折射颜色：`to_transmission_color`
  - 折射强度：`to_transmission_weight`
  - 次表面颜色：`to_subsurface_color`
  - 次表面半径：`to_subsurface_radius`
  - 凹凸/法线：`to_bump_normal`
  - 不透明度：`to_opacity`
  - 自发光：`to_emission`
  - 半透明（透光）：`to_translucency`
  - 置换：`to_displacement`

<br />
<br />
<br />
<br />


## 菜单中英文设置
自定义菜单设置节点id和插件自定义id的时候会显示为英文；如果需要显示中文，需要在插件中`arid`文件夹的`arMenu_name.py`中修改。  

如：`"set_tri": "Set Triplanar"`修改为`"set_tri": "添加三平面"`，修改后需重启C4D。

<br />

>`lang.zip`压缩包有用翻译好的文件，也可以将对应文件重命名后直接覆盖`vrMenu_name.py`即可。


<br />
<br />
