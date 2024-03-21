---
layout: doc
---
# <span class="h1-icon"><img src="/img/SG-TriPlanar Control.webp" alt="Custom Icon"></span>Fix Tiling（处理平铺）

<br/>

---

### 简介

- 选中所需贴图，点击执行
- 如果贴图有TriPlanar节点（如果没有则创建TriPlanar节点），就会为TriPlanar节点创建`Distorter`节点。
- 同时还会创建`Tiles`节点、`Maxon Noise`节点和`Mul`节点控制Distorter节点
- 可以根据需要调节对应节点的参数
- Redshift_v3.5.15新增了Distorter节点用于处理平铺贴图，此节点不能应用在Bump通道，如果使用置换需要在标签取消勾选Enable Auto Bump Mapping
- `Redshift_v3.5.19`修复了Distorter节点在Bump的bug，可以正常使用
- 节点相关文档：https://help.maxon.net/r3d/cinema/en-us/#html/Utility+Distorter.html
- 扭曲节点处理重复贴图视频说明：[教程](https://www.bilibili.com/video/BV1Bh4y1D7xy/?share_source=copy_web&vd_source=46329bbe65b4612ef4b45052f64ddb56&t=109)

<br />

> 3.0.45开心版没有Distorter节点，所以无法使用此功能

<br />

<video controls>
  <source src="/img/rs-nodesg-2-fix_tiling-01.webm" type="video/webm">
</video>

<br/>
<br/>