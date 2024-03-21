---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-QuickDisp.webp" alt="Custom Icon"></span>VR-QuickDisp（快捷置换）

<br/>

---

### 简介

由于V-Ray添加置换贴图(displacement)比较繁琐，所以专门设置三种添加方式。可以通过VR-QuickDisp设置，VR-AutoPBR（自动PBR）设置，VR-QuickNode的To PBR设置

<br/>


## 第一种：VR-QuickDisp
1. 选择物体，然后单击VR-QuickDisp会显示弹窗，选择贴图之后会自动添加Geometry标签并且设置相关选项
2. 选择Geometry标签，配合`Ctrl`或者`Alt`单击VR-QuickDisp会设置置换贴图的udim
- Displacement设置UDIM官方文档：[点击查看](https://docs.chaos.com/display/VC4D/Geometry+Tag#heading-2DDisplacement)

<br/>

### 单击添加置换贴图：
<br/>

<video controls>
  <source src="/img/vr-autonode_quickdisp_demo_1.webm" type="video/webm">
</video>

<br/>
<br/>

### 设置udim：
选择标签，配合Ctrl或者Alt单击VR-QuickDisp
<br/>

<video controls>
  <source src="/img/vr-autonode_quickdisp_demo_2.webm" type="video/webm">
</video>

<br/>
<br/>


## 第二种：VR-AutoPBR

- 适合带有displacement关键词后缀的贴图，一般来说使用PBR贴图都是整套贴图导入使用，所以设计了这个功能
- 选择贴图节点之后，选择物体，再单击VR-AutoPBR，就会自动设置
- 如果多选节点会自动创建层
- 如果多选节点会自动创建层


<br />


<video controls>
  <source src="/img/vr-autonode_autopbr_02_displacement_map.webm" type="video/webm">
</video>


<br />
<br />



## 第三种：To PBR

- 适合没有关键词后缀的贴图
- 选择贴图节点之后，选择物体，再单击就会自动设置
- 如果多选节点会自动创建层

单选节点：
<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_add_displace_1.webm" type="video/webm">
</video>

<br/>
<br/>


多选节点：
<br/>

<video controls>
  <source src="/img/vr-autonode_to_pbr_add_displace_2.webm" type="video/webm">
</video>

<br/>
<br/>