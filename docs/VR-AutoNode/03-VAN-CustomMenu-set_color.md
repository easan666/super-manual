---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-CustomMenu.webp" alt="Custom Icon"></span>设置Linear/ACES


<br/>

- chaos的资产库默认都是线性流程，所以如果使用ACES流程就可以使用这个功能切换资产的颜色空间
- 全选节点，会自动为贴图设置颜色空间
- 用于切换Linear/ACES
- [设置的颜色通道](01-VAN-setting#设置颜色通道)所连接的贴图将会被设置为sRGB(color data)，其他会判断为non-color data
- 插件自定义id： `set_linear`和`set_aces`

```
插件连接的贴图会自动设置颜色模式，也可以在插件设置中切换颜色模式
```


### 设置Linear线性流程

颜色：
Transfer Function：sRGB；2
RGB Primaries：sRGB；1

非颜色：
Transfer Function：Linear；0
RGB Primaries：sRGB；1


### 设置ACES流程

颜色：
Transfer Function：sRGB；2
RGB Primaries：sRGB；1

非颜色：
Transfer Function：Linear；0
RGB Primaries：Raw；0

<br/>

<video controls>
  <source src="/img/vr-autonode_custommenu_set_linear-aces.webm" type="video/webm">
</video>

<br/>
<br/>