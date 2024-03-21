---
layout: doc
---
# <span class="h1-icon"><img src="/img/Color Space.webp" alt="Custom Icon"></span>Color Space（设置颜色空间）

<br/>

---

### 简介

- 为RS Node节点（新版节点）纹理节点自动设置颜色空间
- 选中所需贴图，点击执行就会自动贴图设置颜色空间。
- 判断标准是根据所选贴图连接的通道，所以如果贴图没有连接是不会修改的
- 如果同一个贴图同时连接到不同通道可能会误判
- TIP: 插件连接的贴图会自动设置颜色空间，不需要单独设置

> 可以在插件设置中[设置颜色通道](01-RNT-setting#设置颜色通道)，根据需要添加端口ID  
> 也可以在AutoNode（自动节点）[使用该命令](03-RNT-AutoNode)

<br/>


### 使用
全选所有节点，插件会自动判断，会自动贴图设置颜色空间。
<br/>

<video controls>
  <source src="/img/command-set_color_space.webm" type="video/webm">
</video>

<br/>
<br/>

### 在AutoNode（自动节点）使用
执行完成后需要手动排列所有节点（Shift+L）

<br/>

<video controls>
  <source src="/img/autonode-set_color_space.webm" type="video/webm">
</video>

<br/>
<br/>