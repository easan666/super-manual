---
layout: doc
---
# <span class="h1-icon"><img src="/img/OC-AddAdjust.webp" alt="Custom Icon"></span>添加调节节点（Set Adjust）

<br/>

---

### 简介

- 选中材质，点击执行会为已连接的贴图添加调节节点
- 如果纹理节点连接到[**颜色通道**](01-OMT-setting#设置颜色-非颜色通道)并且纹理节点的[类型（Type）](https://docs.otoy.com/cinema4d/ImageTexture.html)为正常（Normal）会添加ColorCorrection（颜色修正）节点。  
- 如果纹理节点连接到[**非颜色通道**](01-OMT-setting#设置颜色-非颜色通道)或者纹理节点的[类型（Type）](https://docs.otoy.com/cinema4d/ImageTexture.html)为浮点（Float）会添加Octane gradient（渐变映射）节点。 
- 如果有需要可以在[**插件设置**](01-OMT-setting#设置颜色-非颜色通道)颜色/非颜色通道
- 法线通道不会添加
- 如果是混合材质会显示弹出菜单，可以选择需要连接的材质节点


<br/>

### 使用
选中材质，点击执行
<br/>

<video controls>
  <source src="/img/oc-mattool-addadjust.webm" type="video/webm">
</video>

<br/>
<br/>

