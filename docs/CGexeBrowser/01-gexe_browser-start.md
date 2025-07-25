---
layout: doc
---
# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="CGexeBrowser"></span>CGexeBrowser

## 说明
- 基于windows文件夹结构的本地化资产管理，不会对文件夹有任何修改
- 支持[网盘挂载文件](01-gexe_browser-cloud)，可以方便地使用在线资产文件。
- CGexeBrowser理论上支持百万级别的文件数量（我没试过），建议文件数量在十万以内。
- 修改资产文件夹后需要手动点击[重启/初始化](02-cgexe_browser-initialize)（3.5w网盘文件初始化扫描时间大概是1~2分钟，本地3.5w文件初始化扫描时间大概是1~3秒）
- 针对Megascans、GSG、Substance、Kitbash3D等常用资产进行了优化处理，支持一键自动导入
- 支持自动导入模型/工程，PBR套图，HDR贴图，灯光贴图，纹理贴图
- 首次使用需要设置[资产文件夹](03-cgexe_browser-setting#资产文件夹路径)路径，设置后需要初始化
- PBR贴图自动连接依赖文件名中的关键词，可以根据需要[设置关键词](03-cgexe_browser-setting#自定义通道关键词)

::: info 提醒
`纹理节点`发送贴图Corona不支持
:::

<br />
<br />

## 安装

1. 下载[可动盒子](https://cgexe.com/cgexebox/)，首次使用可动盒子需要安装[.NET 8.0](https://builds.dotnet.microsoft.com/dotnet/WindowsDesktop/8.0.5/windowsdesktop-runtime-8.0.5-win-x64.exe)
2. 打开可动盒子之后下载对应的插件
3. 在C4D每个版本的`编辑`>`设置`>`插件`>`添加文件夹`，添加可动盒子的插件目录

::: info 提醒
这样做的好处是可以多个C4D版本共享一个插件，统一管理，不用每个C4D版本都复制一份 
`%appdata%\Maxon\Plugins`也是可动盒子的默认下载路径，不建议修改
:::

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=114784225728284&bvid=BV1Jq38zfEFJ&cid=30879385386&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<br />
<br />

## 添加资产文件夹
1. 首次使用点击CGexeBrowser会添加资产文件夹，也可以点击[重启/初始化](02-cgexe_browser-initialize)添加资产文件夹
2. 右键添加路径，选择对应的资产文件夹即可，可以根据需要添加多个文件夹
3. 添加完成之后点击确定，耐心等进度条跑完

<img src="/cgexe_browser/cgexe_browser_v_1_5_0_initialization.webp" data-zoomable alt="初始化" width=100% >


<br />
<br />

## 使用教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&amp;aid=113771066431875&amp;bvid=BV1tKrxYFEQZ&amp;cid=27703969813&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<br />

## 使用演示


### 材质/PBR套图导入

- 切换对应的渲染器
- 单击蓝色箭头按钮，就会根据插件设置（尺寸，关键词）生成材质
- 贴图尺寸可以右键选择需要导入的尺寸，否则就是遵循插件的尺寸设置

::: info 贴图连接
PBR贴图自动连接依赖文件名中的关键词，可以根据需要[设置关键词](03-cgexe_browser-setting#自定义通道关键词)  
后续版本会优化对材质（如GSG）的相关设置
:::

<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_materials_demo.webm" type="video/webm">
</video>



<br />
<br />


### 贴图导入（纹理/HDR）


- 切换对应的渲染器
- 选择灯光对象或者材质，如果选择灯光会设置灯光贴图，如果同时选择会设置灯光
- 如果设置纹理节点，请不要选择任何对象
- Corona不支持，Octane由于纹理节点api的局限需要特殊操作（见下文）

<br />
<br />


#### Redshift / Arnold / V-Ray

- 切换对应的渲染器
- 选择材质和需要设置的纹理节点，然后点击蓝色箭头按钮，就会自动设置贴图
- 会根据插件设置自动缩放尺寸，也可以右键选择需要的尺寸

::: info 注意
如果设置纹理节点，请不要选择任何对象
:::

<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_textrue_demo_1.webm" type="video/webm">
</video>




<br />
<br />


#### Octane

- 切换到Octane渲染器
- 选择材质，然后点击蓝色箭头按钮，就会自动设置新建贴图节点
- 会根据插件设置自动缩放尺寸，也可以右键选择需要的尺寸
- 如果需要切换指定节点的纹理，由于api的局限需要将节点名称命名为`666`，切换后建议重命名节点名称

::: info 注意
如果将节点名称命名为`666`，使用后最好换个名称，不然再次点击蓝色箭头按钮会替换纹理
:::

<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_textrue_demo_2.webm" type="video/webm">
</video>


<br />
<br />


#### Bokeh

- GSG的Bokeh贴图由于用得比较少暂时没有做自动设置
- 点击蓝色箭头按钮会自动复制贴图路径，根据自己需要粘贴

<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_textrue_demo_3.webm" type="video/webm">
</video>


<br />
<br />


### Magascans导入


- 切换对应的渲染器
- 单击蓝色箭头按钮，就会根据插件设置（尺寸，关键词，Lod）生成材质和导入对应的模型
- 贴图尺寸可以右键选择需要导入的尺寸，否则就是遵循插件的尺寸设置


<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_magascans_demo.webm" type="video/webm">
</video>

<br />
<br />


### 工程/模型导入

- 单击蓝色箭头按钮，导入对应的模型
- 支持`fbx`、`obj`、`C4D工程`
<!-- - 2023导入C4D工程是在`新文档打开`（官方api有bug），其他版本就是在当前文档打开 -->
- 导入工程会自动把tex文件夹路径`写入剪切板`，如果发现有贴图没有链接上就自己粘贴路径重链一下

::: info 注意
C4D官方api中如果将工程导入当前文档，需要自己写方法替换链接，插件已经做了大部分情况的处理。  
如果发现有遗漏可以自己粘贴路径重链，然后跟我反馈
:::


<video controls>
  <source src="/cgexe_browser/cgexe_browser_v_1_2_0_c4d_import.webm" type="video/webm">
</video>

<br />
<br />

## 文件结构/预览图

- 为了兼容Megascans、GSG等常用资产，资产需要为图中的示例文件夹结构：
- `文件夹/文件`的预览图文件名可以和原`文件夹/文件名`相同，也可以使用`_`+ [插件设置的后缀](03-cgexe_browser-setting#缩略图文件夹)  
- 如预览图文件夹命名为`preview`,预览图命名为`xxxxxxxxx_preview.jpg`
- 预览图建议是`1:1`、`2:1`、`1:2`，如`500X500`、`1000X500`、`500X1000`
- 示例文件夹: `https://pan.baidu.com/s/11VcTVV5-FM0NOMfUmXFdQg?pwd=fgwh`

<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=113990394976222&bvid=BV1SHKVeoEqH&t=29&cid=28353496906&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

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
