---
layout: doc
---
# <span class="h1-icon"><img src="/img/AutoSort-Settings-grey.webp" alt="LightHit插件设置"></span>插件设置


<br />

## 插件设置

### 英文
<br />
<img src="/img/lighthit_setting_v2_1_1_en.webp" data-zoomable alt="LightHit" width=100% >

### 中文
<br />
<img src="/img/lighthit_setting_v2_cn.webp" data-zoomable alt="LightHit" width=100% >


<br />
<br />

## 设置说明

### 1 灯光名称
显示当前所选灯光的名称

<br />

### 2 灯光贴图资产
- 选中灯光图标之后点击可以显示灯光贴图资产, 双击可以自动设置灯光贴图
- 可以在[插件设置](#_9-设置菜单)中自定义资产文件夹

<br />

#### 自定义资产文件夹
自定义资产文件夹需要遵循以下文件夹结构
```
├─ 自定义资产文件夹
   ├─ Textures
   └─ Thumbnails
```

- Textures文件夹放原图
- Thumbnails文件夹放缩略图
- 原图和缩略图名称需要相同, 缩略图建议是150px



<br />

#### 支持灯光
```
Redshift: Infinite Light, Point Light, Spot Light, Area Light, IES Light

Octane: Octane Arealight, Octane les Light

Arnold: Arnold mesh light, Arnold quad light, Arnold photometric light

V-Ray: Rectangle Light, Mesh Light, IES Light

Corona: Corona Light
```

<br />

### 3 灯光状态
点击可以切换显示/隐藏当前所选灯光

<br />

### 4 灯光独显
点击可以切换独显当前所选灯光

<br />

### 5 灯光距离
设置灯光与目标对象的距离

<br />

### 6 设置目标对象
如果不设置目标对象默认是世界原点

<br />

### 7 LightHit Tool
1. 选中图标之后单击会启动LightHit Tool, 再次单击会切换为移动工具
2. 启动之后, 选中的灯光会显示黄色的标识线, 点击模型就会自动调节灯光位置
3. 如果模型结构比较复杂, 需要先设置为[目标对象](#_6-设置目标对象)

<br />

### 8 右键菜单
1. 刷新：刷新重载视图
2. 复制对象：复制当前所选的灯光
3. 删除图标：删除插件面板所选的灯光图标
4. 删除对象：删除当前所选的灯光
5. 清空所有：清空插件面板所有的灯光图标和数据

<br />

### 9 设置菜单
<br />

<div class="img-to" >
  <img src="/img/lighthit_setting_v2_1_2_cn.webp" data-zoomable alt="LightHit" width=50% >
  <img src="/img/lighthit_setting_v2_1_2_en.webp" data-zoomable alt="LightHit" width=50% >
</div>

::: danger 注意
如果修改了插件设置，需要右键清空所有，再重新拖入灯光对象
:::


1. 默认半径：设置编辑器的默认初始距离半径（默认是500）
2. 独显名称：独显是根据名称筛选，可以自定义关键词(关键词之间使用英文逗号`,`分隔)
3. 图标尺寸：设置编辑器图标显示的尺寸
4. 图标字数：设置编辑器图标显示的文字的长度
5. 灯光资产路径：默认是插件的示例资产, 可以根据需要自定义, 资产的文件夹结构参考[2.灯光贴图资产](#_2-灯光贴图资产)
3. Octane纹理类型：可以选择灯光贴图设置Texture或者Distribution