---
layout: doc
---
# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="CGexeBrowser"></span>CGexeBrowser

## 说明
- 基于windows文件夹结构的本地化资产管理，备份和迁移操作简单。
- 针对Megascans、GSG等常用资产进行了优化处理，支持一键自动导入
- 支持自动导入模型，PBR套图，HDR贴图，灯光贴图，纹理贴图
- 首次使用需要设置[资产文件夹](03-cgexe_browser-setting#插件设置-1)路径，设置后需要初始化
- PBR贴图自动连接依赖文件名中的关键词，可以根据需要[设置关键词](03-cgexe_browser-setting#自定义通道关键词)

::: info 提醒
`纹理节点`发送贴图只支持C4D原生的节点编辑器（octane和Corona不支持）
:::

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&amp;aid=113771066431875&amp;bvid=BV1tKrxYFEQZ&amp;cid=27703969813&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<br />

## 文件结构/预览图

- 为了兼容Megascans、GSG等常用资产，资产需要为图中的示例文件夹结构：
- `文件夹/文件`的预览图文件名可以和原`文件夹/文件名`相同，也可以使用`_`+ [插件设置的后缀](03-cgexe_browser-setting#缩略图文件夹)  
- 如预览图文件夹命名为`preview`,预览图命名为`xxxxxxxxx_preview.jpg`
- 预览图建议是`1:1`、`2:1`、`1:2`，如`500X500`、`1000X500`、`500X1000`
- 示例文件夹: `https://pan.baidu.com/s/11VcTVV5-FM0NOMfUmXFdQg?pwd=fgwh`

<br />

::: info 提醒
不建议使用CGexeBrowser来管理c4d工程，貌似C4D官方api有问题，单击导入c4d工程需要手动替换贴图路径。可以右键打开目录，然后自己手动拖进去。
:::

<br />

```
├─ 文件夹类型1（PBR套图、新GSG资产…）
│  ├─ 材质1文件夹
│  │    └─ 预览图
│  │    └─ 贴图1
│  │    └─ 贴图2
│  │    └─ 贴图3……
│  ├─ 材质2文件夹
│  ├─ 材质3文件夹……
│  │ 
├─ 文件夹类型2（HDR、贴图、旧GSG贴图资产…）
│  ├─ 系列贴图1文件夹
│  │    └─ 原图文件夹
│  │    └─ 预览图文件夹
│  ├─ 系列贴图2文件夹
│  ├─ 系列贴图3文件夹……
│  │
├─ 文件夹类型3（模型、Megascans资产…）
│  ├─ 资产1文件夹
│  │    └─ .zip文件
│  │    └─ .zip文件预览图
│  │    └─ .fbx文件
│  │    └─ .fbx文件预览图
│  │    └─ …………
│  │
│  ├─ 资产2文件夹
│  ├─ 资产3文件夹……
│  │    
├─ 文件夹类型1预览图
├─ 文件夹类型2预览图
└─ 文件夹类型3预览图……

```


<br />
<br />

