---
layout: doc
---
# <span class="h1-icon"><img src="/img/link4d-call_c4d.webp" alt="call c4d文档"></span>Call C4D

## 说明

- 可以实时获取Windows资源管理器所选文件，用于实时替换各种纹理贴图。
- 支持通过选择预览图而获取原图（如hdr）
- Redshift/Arnold/V-Ray支持纹理节点和灯光，其他渲染器只支持灯光

::: warning 使用后注意关闭
Call C4D开启后会实时获取单击的文件，所以使用后请**注意关闭**，避免出错。
:::

## 支持

#### Standard / Physical
- Sky 天空（hdr贴图）

<br>

#### Redshift
- 纹理节点
- Infinite Light
- Point Light
- Spot Light
- Area Light
- Dome Light
- IE SLight


<br>

#### Octane
- Hdri Environment (OctaneSky)
- Texture Environment (OctaneSky)
- Octane Arealight
- Octane les Light


<br>

#### Arnold
- 纹理节点
- Arnold Sky
- Arnold skydome light
- Arnold mesh light
- Arnold quad light
- Arnold photometric light


<br>

#### V-Ray
- 纹理节点
- Dome Light
- Rectangle Light
- Mesh Light
- IES Light


<br>

#### Corona
- Corona Sky
- Corona Light


<br>
<br>

## 开启 / 关闭

- 单击`Call C4D`后会调用监控程序，实时获取单击的文件
- 开启`Call C4D`后视窗的文字会显示为绿色，是为了提醒程序正在运行，关闭后会恢复原状。
- 可以打开控制台（Console）获取运行状况，打开 > 扩展 > 控制台，快捷键是`Shift+F10`
- 再次单击`Call C4D`会关闭程序

<video controls>
  <source src="/img/link4d_info_call_c4d_1.webm" type="video/webm">
</video>


<br>
<br>

## 预览图/原图
由于HDR之类比较大的文件需要使用预览图，所以插件支持通过选择预览图而获取原图。  
如果所选的文件父级文件夹是`2`个，插件会尝试获取原图，获取失败就使用所选文件。

如果使用预览图，需要为以下文件夹结构，文件夹名不限：

```
├─ 文件夹1
│  ├─ 原图文件夹
│  └─ 预览图文件夹
├─ 文件夹2
│  ├─ 原图文件夹
│  └─ 预览图文件夹
└─ 文件夹3
   ├─ 原图文件夹
   └─ 预览图文件夹

```

<br>


预览图文件名可以和原图文件名相同，也可以使用`_`+ 任意后缀，如：
```
xxxxxxxxx_preview.jpg
xxxxxxxxx_ext.jpg
xxxxxxxxx_thumb.jpg
.......

```

<br>


## 使用
每个渲染器的使用方式基本都是一样的，下面以Redshift为例。


<br>

### 实时设置HDR

- 打开需要调用的贴图文件夹
- 选择Dome Light（注意只能单独选择一个灯光）
- 单击`Call C4D`调用监控程序，实时获取单击的文件
- 使用结束后单击`Call C4D`关闭程序


<video controls>
  <source src="/img/link4d_info_call_c4d_2.webm" type="video/webm">
</video>


<br>
<br>


### 实时设置灯光贴图

- 打开需要调用的贴图文件夹
- 选择Area Light（注意只能单独选择一个灯光）
- 单击`Call C4D`调用监控程序，实时获取单击的文件
- 使用结束后单击`Call C4D`关闭程序


<video controls>
  <source src="/img/link4d_info_call_c4d_3.webm" type="video/webm">
</video>


<br>
<br>



### 实时设置纹理节点

- 打开需要调用的贴图文件夹
- 选择材质后，选择纹理节点（注意不要选择物体）
- 单击`Call C4D`调用监控程序，实时获取单击的文件
- 使用结束后单击`Call C4D`关闭程序


<video controls>
  <source src="/img/link4d_info_call_c4d_4.webm" type="video/webm">
</video>