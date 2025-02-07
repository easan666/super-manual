---
layout: doc
---
# <span class="h1-icon"><img src="/cgexe_browser/CGexeBrowser.webp" alt="CGexeBrowser"></span>网盘挂载

## 说明

CGexeBrowser支持调用网盘挂载的文件，可以方便地使用在线资产文件。  

以下是注意事项：
- 调用的网盘文件夹需要是CGexeBrowser支持的文件夹结构，参考: [文件结构/预览图](01-gexe_browser-start#文件结构-预览图)
- 添加网盘文件夹之后需要点击[重启/初始化](02-cgexe_browser-initialize)，网盘文件扫描需要1~3分钟时间，请耐心等待。
- 只有在`添加/修改`文件夹才需要初始化（可以选择文件夹），之后都是秒开

::: info 提醒
3.5w网盘文件初始化扫描时间大概是1~2分钟，本地3.5w文件初始化扫描时间大概是1~15秒
:::

## 网盘挂载

- 网盘挂载有很多方案，常用的就是Alist+RaiDrive，[Alist](https://alist.nn.ci/zh/guide/)支持市面上大部分的网盘。怎么挂载无所谓，只要能挂载就行了，自己选一个喜欢的方式。
- 这里演示的是[Netmount](https://www.netmount.cn/) (基于Rclone+Alist)，以百度网盘为例
- 挂载网盘之后最好是设置开机自启动（Netmount直接在设置开启）

::: info 提醒
Netmount下载地址 ：[https://www.netmount.cn/download](https://www.netmount.cn/download)  
WinFsp官网下载地址（如果提示下载）： [https://winfsp.dev/rel/](https://winfsp.dev/rel/)  
WinFsp蓝奏云下载 ：[https://wwlc.lanzouu.com/ihuli2lexiva](https://wwlc.lanzouu.com/ihuli2lexiva)
:::
<br />

### 视频教程

<br />

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?isOutside=true&aid=113855187393392&bvid=BV18qw6eoEKA&cid=27961066609&p=1&autoplay=0"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<br />



<br />

<br />


### 图文教程

<br />

#### 1. 点击添加

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_1.webp){data-zoomable}



#### 2. 选择网盘
我这里以百度网盘为例

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_2.webp){data-zoomable}


#### 3. 添加存储
这里是主要的设置
- 存储名称：无所谓，自己随便写一个，最好英文名如`baidu`
- 刷新令牌：这个在`Alist`的文档: [点击查看刷新令牌](https://alist.nn.ci/zh/guide/drivers/baidu.html?baidunetdisk)，有个`点击获取刷新令牌`，点击之后登录就会显示令牌。
- 自定义UA：如果是百度网盘会员就修改为`pan.baidu.com`，说明看[Alist文档](https://alist.nn.ci/zh/guide/drivers/baidu.html?baidunetdisk)
- 设置好之后就点击保存

::: info 提醒
刷新令牌请不要告诉别人，否则会有风险
:::

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_3.webp){data-zoomable}



#### 4. 挂载网盘
- 点击挂载

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_4.webp){data-zoomable}


- 选择`自动分配盘符`，有需要可以修改`卷名`(在我的电脑显示的名称)，然后点击挂载

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_5.webp){data-zoomable}



#### 5. 挂载成功

挂载成功之后，建议在`设置`开启`开机自启`和`启动时隐藏窗口`  
需要点击[重启/初始化](02-cgexe_browser-initialize)，添加网盘文件夹路径然后初始化。

![netmount_1](/cgexe_browser/cgexe_browser_v_1_4_0_netmount_6.webp){data-zoomable}

<br />
<br />