---
layout: doc
---
# <span class="h1-icon"><img src="/img/SG-Color Space.webp" alt="Custom Icon"></span>Color Space（设置颜色空间）

<br/>

---

### 简介

- 为RS Node节点（新版节点）纹理节点自动设置颜色空间
- 选中所需贴图，点击执行就会自动贴图设置颜色空间。
- 判断标准是根据所选贴图连接的通道，所以如果贴图没有连接是不会修改的
- 如果同一个贴图同时连接到不同通道可能会误判
- TIP: 插件连接的贴图会自动设置颜色空间，不需要单独设置

> 可以在插件设置中[设置颜色通道](01-RSG-setting#设置颜色通道)，根据需要添加端口ID  
> 也可以在RS-NodeMenu（节点菜单）[使用该命令](03-RSG-NodeMenu-setting)

<br />

::: danger 3.0.45开心版
由于开心版3.0.45没有Color Space可以设置，所以使用ACES OSL，用于修改贴图的颜色空间  
OSL首次添加会卡顿2秒左右（加载osl文件）
:::

<br />


### 使用
全选所有节点，插件会自动判断，会自动贴图设置颜色空间。
<br/>

<video controls>
  <source src="/img/rs-nodesg-2-color_space-01.webm" type="video/webm">
</video>

<br/>
<br/>

### 在RS-NodeMenu（节点菜单）使用

<br/>

<video controls>
  <source src="/img/rs-nodesg-2-color_space-02.webm" type="video/webm">
</video>

<br/>
<br/>

### 在3.0.45开心版使用
- 颜色通道的贴图会添加ACES OSL的颜色空间会切换为Rec.2020
- 而其他非颜色通道的贴图节点会勾选Gamma Override
<br/>

<video controls>
  <source src="/img/rs-nodesg-2-color_space-03.webm" type="video/webm">
</video>

<br/>
<br/>