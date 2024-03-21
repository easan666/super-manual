---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-CustomMenu.webp" alt="Custom Icon"></span>自定义菜单

## 简介

可以自定义常用节点和命令菜单，可以自动连接和添加常用节点，批量添加混合图层/常用调节节点，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置颜色空间，自动设置设置UDIM……

- 支持自定义添加所有Vray节点和自定义排序
- 可以在所选节点前插入节点，并且自动连接
- 支持三种方式插入，自动添加节点
- 选择多个节点，自动添加混合层
- 可以调用插件命令，批量添加TriPlanar、Randomizer、Transform等


<br/>

### 说明视频
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=368002966&bvid=BV1J94y1c7Zk&t=48&cid=1388713416&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br/>

## 自定义菜单

在插件设置中的`自定义弹出菜单`添加对应id就可以在菜单显示；  
- 使用英文逗号`,`分隔
- 支持Vray节点id，如：`maxon_noise`,`texlayeredmax`,`colorcorrection`……
- 支持c4d命令id，如：`465002363`,`465002315`,`1057439`……
- 支持插件自定义id，如：`set_ramp`,`set_tri`,`set_aces`,`set_random`,`,set_udim`……
- 分割线为：`line`

<br/>

```
示例：maxon_noise,colorcorrection,line,set_tri,set_udim,line,1057439,12161
```

<br/>

<video controls>
  <source src="/img/vr-autonode_custommenu_settings.webm" type="video/webm">
</video>

<br />
<br />
<br />
<br />


## Vray节点id
添加Vray节点id用于添加和设置常用节点；

复制的端口ID会比较长，如`com.chaos.vray_node.colorcorrection`  
设置的时候只需要添加`.`后面的后缀，如：`colorcorrection`


<br />

<video controls>
  <source src="/img/vr-autonode_autonode_get_node_id.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />


## C4D命令id
添加c4d命令id用于调用常用的命令；获取命令id：

<video controls>
  <source src="/img/vr-autonode_autonode_get_script_record.webm" type="video/webm">
</video>



<br />
<br />
<br />
<br />


## 插件自定义id
用于调用插件的功能；
- 添加渐变映射： `set_ramp`
- 批量添加三平面：  `set_tri`
- 批量添加Randomizer： `set_random`
- 批量添加Transform： `set_trans`
- 设置Linear： `set_linear`
- 设置ACES： `set_aces`
- 设置Set UDIM： `set_udim`
- 分割线：`line`


<br />
<br />
<br />
<br />


## 菜单中英文设置
自定义菜单设置节点id和插件自定义id的时候会显示为英文；如果需要显示中文，需要在插件中`vrid`文件夹的`vrMenu_name.py`中修改。  

如：`"set_tri": "Set Triplanar"`修改为`"set_tri": "添加三平面"`，修改后需重启C4D。

<br />

>`lang.zip`压缩包有用ChatGPT翻译好的文件，也可以将对应文件重命名后直接覆盖`vrMenu_name.py`即可。


<br />
<br />
