---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../CGexeBrowser-data'
</script>

# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="Custom Icon"></span>CGexeBrowser v1.7.2

## 说明
CGexeBrowser是Cinema 4D资产管理和智能导入插件，支持**各种网盘挂载文件**，支持**六大主流渲染器**。  
可以在线使用资产文件，一键导入Megascans、GSG等常用资产，支持自动导入模型/工程，PBR套图，HDR贴图，灯光贴图，纹理贴图，可以自动裁剪贴图尺寸，智能筛选Lod等……  

<br />

- 支持版本：`Cinema 4D R23和以上版本`，只支持Windows系统
- 支持`Redshift` / `Octane` / `Arnold` / `V-Ray` / `Corona` / `Standard` / `Physical`
- 插件下载地址（付费）：https://cgexe.com/58021/
- 插件首次使用需要登录后`重启C4D`：[登录说明](03-cgexe_browser-setting)，重启后需要设置资产文件夹路径

<br />

## 安装
1. 打开路径`%appdata%\Maxon`
2. 新建一个`Plugins`文件夹，把插件放到这里
3. 在C4D每个版本的`编辑`>`设置`>`插件`>`添加文件夹`，添加`Plugins`文件夹
4. 重启C4D

::: info 提示
这样做的好处是可以多个C4D版本共享一个插件，统一管理，不用每个C4D版本都复制一份  
`%appdata%\Maxon\Plugins`也是可动盒子的默认下载路径
:::


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


::: info CGexeBrowser v1.7.2<Badge type="danger" text="更新1+" />
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

