---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../CGexeBrowser-data'
</script>

# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="Custom Icon"></span>CGexeBrowser v2.0.8

## 说明
CGexeBrowser是Cinema 4D资产管理和智能导入插件，支持**各种网盘挂载文件**，支持**六大主流渲染器**。  
可以在线使用资产文件，一键导入Megascans、GSG、sbsar文件（Substance材质）、Kitbash3D等常用资产，支持自动导入模型/工程，PBR套图，HDR贴图，灯光贴图，纹理贴图，可以自动裁剪贴图尺寸，智能筛选Lod等……  

<br />

- 支持版本：`Cinema 4D R23和以上版本`，只支持Windows系统
- 支持`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`
- 插件下载地址（付费）：https://cgexe.com/58021/
- 插件首次使用需要登录后`重启C4D`：[登录说明](03-cgexe_browser-setting)，重启后需要设置资产文件夹路径

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

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 视频教程
<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&amp;aid=113771066431875&amp;bvid=BV1tKrxYFEQZ&amp;cid=27703969813&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>


<br />


<br />

## 更新说明


::: info CGexeBrowser v2.0.8<Badge type="danger" text="更新5+" />
1. 修复搜索结果下导入资产的bug
2. 修改Octane Triplanar的投射模式为Triplanar
3. 插件设置新增导入Substance可选导入贴图或者节点（仅限RS和2024.5+）
4. 插件设置新增导入模型优化，勾选后导入模型不会添加调节节点，k3d模型不会添加置换和ao贴图
5. 新增支持dds贴图
:::

::: details CGexeBrowser v2.0.7<Badge type="info" text="更新3" />
1. 优化GSG Octane数据材质的参数设置
2. 优化Octane灯光贴图的设置逻辑，选择标签也可以设置
3. 优化Reshift，Arnold，Vray贴图的设置，如果没有选择纹理节点会自动创建
:::

::: details CGexeBrowser v2.0.6<Badge type="info" text="更新2" />
1. 修改Redshift导入Substance材质的方式，统一导入为贴图
2. 优化导入C4D文件的逻辑
:::

::: details CGexeBrowser v2.0.5<Badge type="info" text="更新6" />
1. 优化导入C4D文件的方式
2. 修复Octane Standard材质发光贴图连接的问题
3. 优化前进后退显示逻辑
4. 优化显示缓存，提高显示效率
5. 优化载入逻辑
6. 修复收藏夹的排序问题
:::


::: details CGexeBrowser v2.0.4<Badge type="info" text="更新5" />
1. 更新前请更新可动盒子CGexeBox v1.4.0，此版本更新自动备份CGexeBrowser配置文件。
2. 优化侧边栏菜单，支持显示多级文件夹，支持调整宽度
3. 修复侧边栏菜单修改图标的bug
4. 置顶初始化进度条
5. 优化导入Kitbash3D模型的相关设置
:::

::: details CGexeBrowser v2.0.3<Badge type="info" text="更新3" />
1. 此次更新需要下载可动盒子CGexeBox最新版v1.3.0，优化使用可动盒子下载后重复验证的问题
2. 优化贴图导入的逻辑
3. 优化解压zip的文件夹命名问题
:::

::: details CGexeBrowser v2.0.2<Badge type="info" text="更新1" />
1. 修复HDR的裁剪问题
:::

::: details CGexeBrowser v2.0.1<Badge type="info" text="更新1" />
1. 修复RS灯光的颜色空间设置
:::

::: details CGexeBrowser v2.0.0<Badge type="info" text="更新6" />
1. 新增右键Triplanar菜单，用于材质添加Triplanar
2. 优化预览图弹窗，支持滚轮切换
3. 新增前后切换按键，用于没有侧键的鼠标
4. 修复RS穹顶灯的颜色空间设置
5. 优化omat导入相关设置
6. 优化材质导入的相关设置
:::


::: details CGexeBrowser v1.9.3<Badge type="info" text="更新1" />
1. 修复无法导入C4D文件的bug
:::

::: details CGexeBrowser v1.9.2<Badge type="info" text="更新5" />
1. 修复Redshift和Arnold中ao贴图没有连接的bug
2. 优化导入灰猩猩数据材质的参数设置
3. 修复导入材质后赋予对象的问题
4. 优化预览图显示的尺寸设置
5. 优化omat数据导入的设置
:::

::: details CGexeBrowser v1.9.1<Badge type="info" text="更新2" />
1. 优化redshift导入Substance材质的方式，避免破解版RS导入失败
2. 优化导入Substance材质的贴图使用，提高导入效率
:::

::: details CGexeBrowser v1.9.0<Badge type="info" text="更新5" />
1. 新增支持.sbsar文件（Substance材质），可以切换不同分辨率的贴图（如1k~8k贴图）导入
2. 新增收藏功能
3. 新增支持.omat文件，用于k3d等资产导入（后面整理好会发布）
4. 新增导入材质后选择是否添加到所选对象（插件设置中设置）
5. 优化设置贴图的交互提醒
:::


::: details CGexeBrowser v1.8.0<Badge type="info" text="更新4" />
1. 优化灰猩猩材质的参数设置
2. 优化octane材质的默认设置
3. octane新增同时支持Standard Surface和Universal材质（在插件设置切换）
4. 修复导入megascans资产生成重复材质的问题
:::

::: details CGexeBrowser v1.7.3<Badge type="info" text="更新3" />
1. 新增可选是否使用置换贴图
2. 优化关键词识别逻辑
3. 修复修改贴图尺寸无效的bug
:::

::: details CGexeBrowser v1.7.2<Badge type="info" text="更新1" />
1. 插件设置新增浏览器打开CGexeBrowser选项
:::

::: details CGexeBrowser v1.7.0<Badge type="info" text="更新8" />
1. 主要是优化灰猩猩材质的相关设置(Octane、Redshif、Arnold、Vray)
2. 新增灰猩猩材质12种贴图的连接和处理
3. 新增灰猩猩材质30多种参数的映射和设置
4. 修复导入模型的bug
5. 新增导入模型同时导入相关文件夹贴图
6. 优化导入C4D文件的方式
7. 优化网盘资源使用贴图的路径设置
8. 新增data_backup（数据备份）.bat文件，用于备份文件
:::

::: details CGexeBrowser v1.6.0<Badge type="info" text="更新5" />
1. 优化预览图识别逻辑，修复相关问题
2. 新增支持Bridge（Megascans）软件的下载目录读取
3. 新增右键复制路径
4. 优化导入C4D工程的逻辑
5. 新增optimize_folders.bat用于优化文件夹层级
:::

::: details CGexeBrowser v1.5.0<Badge type="info" text="更新5" />
1. 修复1.5.0插件设置无法保存路径的bug
2. 新增支持多资产文件夹路径
3. 优化数据库生成逻辑
4. 新增可选路径初始化
5. 优化部分样式
:::

::: details CGexeBrowser v1.4.2<Badge type="info" text="更新2" />
1. 优化符号链接创建脚本
2. 优化插件启动方式
:::

::: details CGexeBrowser v1.4.0<Badge type="info" text="更新5" />
1. 重写核心逻辑和数据扫描算法，扫描效率提高了10倍+（3.5w本地文件只需1~3秒）
2. 支持网盘挂载资产文件，可以直接调用各种网盘资产文件
3. 修复日期排序的bug
4. 优化右键刷新页面逻辑
5. 优化部分样式
:::

::: details CGexeBrowser v1.3.0<Badge type="info" text="更新3" />
1. 新增索引文件支持（用于Megascans资产）
2. 优化数据结构文件
3. 优化部分样式问题

:::

::: details CGexeBrowser v1.2.0<Badge type="info" text="更新7" />
1. 优化导入C4D工程的功能，点击可以直接添加到当前文档（2023是新文档打开）
2. 新增Octane自动设置贴图的功能，单击箭头可以创建对应的贴图节点，如果节点名称改为`666`可以实时替换节点，参考： [贴图/HDR导入](01-gexe_browser-start#octane)
3. 新增自动设置贴图或者导入工程后会把路径写入剪切板，[Bokeh](01-gexe_browser-start#bokeh)贴图可以自己根据需要粘贴路径
4. 新增自定义尺寸发送，在资产文件右键可以选择需要的尺寸，如果不选为插件的设置尺寸
5. 新增鼠标侧键前进后退切换页面功能
6. 取消自动监测资产文件夹更新初始化，修改资产后可以自行初始化
7. 取消设置HDR时选中材质的提醒，如果设置贴图节点不要选择对象
:::

::: details CGexeBrowser v1.1.5<Badge type="info" text="更新2" />
1. 修复在win11运行异常的bug
2. 优化对灰猩猩Gobos贴图的设置

:::

::: details CGexeBrowser v1.0.0<Badge type="info" text="更新1" />
1. CGexeBrowser v1.0.0发布

:::

<br />
<br />

