---
layout: doc
---
# <span class="h1-icon"><img src="/img/link4d-send_to_c4d.webp" alt="Send to C4D"></span>Send to C4D

## 说明

- 可以批量选择PBR贴图后，直接右键发送到C4D自动生成材质。
- 支持同时选择多个贴图和文件夹，自动过滤PBR贴图
- PBR贴图自动连接依赖文件名中的关键词，可以根据需要[设置关键词](01-link4d-setting#自定义通道关键词)
- 请在Cinema 4D 2023+ 以上版本使用**新版节点系统**材质（Redshift/Arnold/V-Ray）

<br />

::: info 添加右键发送菜单
在插件文件夹有个`add_添加菜单.bat`文件，双击运行即可添加，删除的话就运行`del_删除菜单.bat`。
:::

<video controls>
  <source src="/img/link4d_info_send_c4d_0.webm" type="video/webm">
</video>


<br />
<br />

## Standard / Physical

- 切换到Standard/Physical渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质

::: info R23问题
Standard/Physical 在R23版本不支持AO连接，S24+正常使用
:::

<video controls>
  <source src="/img/link4d_info_send_c4d_1.webm" type="video/webm">
</video>


<br />
<br />

## Redshift

- 切换到Redshift渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质

<br />

#### Redshift 新版节点:

<video controls>
  <source src="/img/link4d_info_send_c4d_rs-1.webm" type="video/webm">
</video>

<br />
<br />

#### Redshift 旧版节点:

<video controls>
  <source src="/img/link4d_info_send_c4d_rs-2.webm" type="video/webm">
</video>


<br />
<br />

## Octane

- 切换到Octane渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质

::: info 贴图设置
[插件设置](01-link4d-setting#切换颜色模式)中如果使用ACES会将颜色贴图设置为`sRGB`，非颜色贴图设置为`Non-Color Data`，如果习惯`Linear sRGB + Legacy Gamma`就在[插件设置](01-link4d-setting#切换颜色模式)中切换为线性流程
:::

<video controls>
  <source src="/img/link4d_info_send_c4d_oc.webm" type="video/webm">
</video>


<br />
<br />

## Arnold

- 切换到Arnold渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质

<br />

#### Arnold 新版节点:

<video controls>
  <source src="/img/link4d_info_send_c4d_ar-1.webm" type="video/webm">
</video>

<br />
<br />

#### Arnold 旧版节点:

<video controls>
  <source src="/img/link4d_info_send_c4d_ar-2.webm" type="video/webm">
</video>


<br />
<br />

## V-Ray

- 切换到V-Ray渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质


<video controls>
  <source src="/img/link4d_info_send_c4d_vr.webm" type="video/webm">
</video>


<br />
<br />

## Corona

- 切换到Corona渲染器
- 选择多个贴图和文件夹，会自动过滤PBR贴图发送到C4D，生成材质

::: info R23问题
Corona 在R23版本不支持AO连接，S24+正常使用
:::

<video controls>
  <source src="/img/link4d_info_send_c4d_cr.webm" type="video/webm">
</video>
