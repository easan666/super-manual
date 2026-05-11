---
layout: doc
---
# <span class="h1-icon"><img src="/img/fq.png" alt="CGexeBrowser"></span>常见问题

### 1. 插件安装

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


### 2. 无法保存插件配置

- 因为插件不是管理员账户使用Windows，插件放的文件夹没有写入权限
- 解决办法: 就是放到`%appdata%\Maxon\Plugins`，参考 `1.插件安装`

<br />
<br />


### 3. 预览图不显示

- 因为没有设置预览图或者预览图设置不正确
- 参考： [文件结构/预览图](01-gexe_browser-start#文件结构-预览图)
- 示例文件夹: `https://pan.baidu.com/s/11VcTVV5-FM0NOMfUmXFdQg?pwd=fgwh`

<br />
<br />


### 4. 点击蓝色箭头按钮无反应

1. 同时打开了多个C4D，解决办法: 把C4D全部关闭，只打开1个版本使用CGexeBrowser
2. 选择的对象不正确，使用贴图的时候不要选择对象，参考： [贴图/HDR导入](01-gexe_browser-start#贴图导入-纹理-hdr)

<br />
<br />



### 5. 更新插件怎么保存之前的设置

- [可动盒子 v1.4.0](https://cgexe.com/cgexebox/)下载插件会自动备份数据，不用手动备份
- 插件的数据文件在`browser`文件夹的`config.json`（配置），`browser_data.cgd`（数据库），`favorites.json`（收藏数据）
- 更新插件之前可以自行备份，更新覆盖即可
- CGexeBrowser v1.7.0 新增data_backup（数据备份）.bat文件，用于备份文件

::: info 提示
[可动盒子 v1.4.0](https://cgexe.com/cgexebox/)下载插件会自动备份数据，不用手动备份
:::

<br />
<br />

### 6. 当前页面的脚本发生错误

<br />

<img src="/cgexe_browser/WebView2_Errors.webp" data-zoomable alt="WebView2_Errors" width=100% >

<br />

- 这是因为电脑缺少WebView2的部件，新版本的Windows系统的都是自带的，旧版本的系统没有
- 解决办法：安装WebView2后重启电脑
- WebView2 官网下载：[点击下载](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2)，建议下载`常青独立安装程序 x64`
- 如果安装失败可以尝试使用[WebView2 修复工具](https://wwlc.lanzouu.com/i4pRV31g030j)

<br />
<br />


### 7. 无法访问此页面

<br />

<img src="/cgexe_browser/unable_to_access_page_Errors.webp" data-zoomable alt="WebView2_Errors" width=50% >

<br />

1. 先打开`CGexeBrowser`插件的`browser`文件夹，看看`CGexeBrowser.exe`是否存在，如果不存在说明被杀毒软件误杀

::: info 解决办法
重新下载插件，然后杀毒软件添加CGexeBrowser.exe为信任
:::

<br />

2. 如果`CGexeBrowser.exe`存在，那就是防火墙的问题

::: info 解决办法
第一种：直接关闭防火墙，在电脑搜索`Windows Defender 防火墙`，点击左侧`启用或关闭 Windows Defender 防火墙`，勾选`关闭`并确定。‌‌‌  

第二种：杀毒软件添加CGexeBrowser.exe为信任
:::


<br />
<br />
