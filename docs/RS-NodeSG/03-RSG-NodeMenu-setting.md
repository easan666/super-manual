---
layout: doc
---
# <span class="h1-icon"><img src="/img/SG-NodeMenu.webp" alt="Custom Icon"></span>RS-NodeMenu（节点菜单）

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，调用插件和C4D的命令……

- 支持添加三种id，分别是节点id，插件id，C4D的命令id
- 可以调用插件命令和C4D的命令等
- 支持自定义添加所有Redshift节点和自定义排序
- 可以在所选节点前插入节点，支持三种方式插入并且自动连接
- 可以选择多个节点，自动添加混合层

> RS-NodeMenu（节点菜单）使用可以看[**演示说明**](03-RSG-NodeMenu-demo)

<br/>

<br />

<video  controls autoplay muted>
  <source src="/img/rs-nodesg-2-node-menu-01.webm" type="video/webm">
</video>


<br/>

## 自定义菜单

<br/>


在插件设置中的`自定义弹出菜单`添加对应id就可以在菜单显示；  
- 使用英文逗号`,`分隔
- 支持Redshift节点id，如：`rscolorcorrection`,`rsramp`,`maxonnoise`……
- 支持c4d命令id，如：`12099`,`12161`,`1038693`……
- 支持插件自定义id，如：`to_diffuse`,`to_roughness`,`blur_node`……
- 分割线为：`line`

<br/>

示例：

```
rscolorcorrection,rsramp,line,to_diffuse,blur_node,line,1061584,1062620,1038693,12161
```


<br/>
<br/>


## Redshift节点id
添加Redshift节点id用于添加和设置常用节点；

节点ID可以在插件rsid文件夹下的lang.zip压缩包中找到  
如`"rscolorcorrection": "颜色校正"` 或者 `"rscolorcorrection": "Color Correct"`  
设置的时候只需要添加`rscolorcorrection`


<br />
<br />


## C4D命令id
添加c4d命令id用于调用常用的命令；获取命令id：

<video controls>
  <source src="/img/rs-nodetool-2-2-node-menu-03.webm" type="video/webm">
</video>



<br />
<br />
<br />
<br />


## 插件自定义id
用于调用插件的功能；
- 分割线： `line`
- 处理平铺： `set_tiling`
- 模糊节点： `blur_node`
- 垂直排列：  `set_vertical`
- 水平排列：  `set_horizontal`
- 左对齐：  `set_left`
- 右对齐：  `set_right`
- 顶对齐：  `set_top`
- 底对齐：  `set_bottom`
- TO PBR连接到指定通道：
  -  漫反射：`to_diffuse`
  -  金属度：`to_metalness`
  -  粗糙度：`to_roughness`
  - 反射颜色：`to_reflection_color`
  - 反射强度：`to_reflection_weight`
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
自定义菜单设置节点id和插件自定义id的时候会显示为英文；  
如果需要显示中文，可以在插件中`rsid`文件夹的`rsSG_Menu_name.py`中修改。  

如：`"rscolorcorrection": "Color Correct",`修改为`"rscolorcorrection": "颜色校正",`，修改后需重启C4D。

<br />

>`lang.zip`压缩包有中文版的文件，也可以将对应文件重命名后直接覆盖`rsSG_Menu_name.py`即可。


<br />
<br />
