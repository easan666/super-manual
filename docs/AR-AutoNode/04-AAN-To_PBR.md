---
layout: doc
---
# <span class="h1-icon"><img src="/img/AR-To-PBR.webp" alt="Custom Icon"></span>To PBR（PBR连接）

<br/>

---

### 简介

将所选贴图连接指定通道，并创建对应的调节节点

- 选中所需节点，点击执行，会创建对应的调节节点并且连接到指定的通道
- 如果选择的节点为贴图，会自动设置颜色模式。
- 如果选择多个节点会自动创建混合图层
- 选择的节点可以是任意节点，如果是纹理节点会根据连接的通道设置颜色空间
- 每个通道混合的上限取决于layer_rgba节点，layer_rgba节点最多支持8个节点。
- Tip: To PBR（PBR连接）是弹出菜单，可以打开命令管理（Shift+F12）根据自己需要设置快捷键

<br/>

<video controls>
  <source src="/img/ar_autonode_node_to_pbr_menu.webm" type="video/webm">
</video>

<br/>
<br/>
