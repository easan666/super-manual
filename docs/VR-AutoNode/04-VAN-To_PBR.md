---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-To-PBR.webp" alt="Custom Icon"></span>To PBR（PBR连接）

<br/>

---

### 简介

将所选贴图连接指定通道，并创建对应的调节节点

- 选中所需节点，点击执行，会创建对应的调节节点并且连接到指定的通道
- 如果选择的节点为贴图，会自动设置颜色模式。
- 如果选择多个节点会自动创建混合图层
- 选择的节点可以是任意节点，如果是纹理节点会根据连接的通道设置颜色空间
- Layered的混合层上限取决于电脑性能
- Tip: To PBR（PBR连接）是弹出菜单，可以打开命令管理（Shift+F12）根据自己需要设置快捷键

<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_menu.webm" type="video/webm">
</video>

<br/>
<br/>

### 使用
选择需要连接的节点，然后点击执行
<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_demo.webm" type="video/webm">
</video>

<br/>
<br/>

### 添加置换

添加单个置换：选择需要设置的节点和物体，然后点击执行
<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_add_displace_1.webm" type="video/webm">
</video>

<br/>
<br/>


添加多个置换：选择需要设置的节点和物体，然后点击执行
<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_add_displace_2.webm" type="video/webm">
</video>

<br/>
<br/>