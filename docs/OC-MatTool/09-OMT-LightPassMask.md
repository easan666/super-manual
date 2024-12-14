---
layout: doc
---
# <span class="h1-icon"><img src="/img/oclignht pass.webp" alt="OC-Light Pass Mask"></span>OC-Light Pass Mask（灯光通道遮罩）

<br/>

---

### 简介

- 选中所需灯光和对象，然后执行，会自动设置灯光`Light pass ID`和设置`Octane ObjectTag`标签的`Light Pass Mask`
- 有三种模式：`自定义`，`排除`， `包含`；`排除`和`包含`模式会把对象添加到`灯光通道标签`，如果想保留以往的流程建议只用`自定义`
- 灯光通道标签可以单独添加，用于设置灯光排除/包含

<br/>


### 自定义模式
- 选中所需对象，然后点击执行
- 会为灯光添加`灯光通道标签`, `灯光通道标签`会显示`Light pass ID`数值，可以通过`灯光通道标签`设置`Light pass ID`
- 会根据设置`Light Pass Mask`的id, 设置`Octane ObjectTag`标签的`Light Pass Mask`

<br/>

<video controls>
  <source src="/oc-mattool/oc-mattool-1_6_light_pass_mask_1.webm" type="video/webm">
</video>

<br/>
<br/>

### 排除/包含模式
- 选中所需对象，然后点击执行
- 会为灯光添加`灯光通道标签`, `灯光通道标签`会显示`Light pass ID`数值，，并且将对象添加到`灯光通道标签`，可以通过`灯光通道标签`设置`Light pass ID`
- 会根据设置`Light pass ID`的id, 设置`Octane ObjectTag`标签的`Light Pass Mask`

```
在弹窗中不需要设置Light Pass Mask的id，只需要设置灯光的Light pass ID数值就会自动设置

```

<br/>

<video controls>
  <source src="/oc-mattool/oc-mattool-1_6_light_pass_mask_2.webm" type="video/webm">
</video>

<br/>
<br/>

### 灯光通道标签
- 选中灯光对象，右键`扩展`中可以添加`灯光通道标签`
- 设置`灯光通道ID`会自动显示数值和控制灯光的`Light pass ID`
- 可以根据需要将对象添加到对象列表，添加后需要点击`设置`才会生效

<br/>

<video controls>
  <source src="/oc-mattool/oc-mattool-1_6_light_pass_mask_3.webm" type="video/webm">
</video>

<br/>
<br/>