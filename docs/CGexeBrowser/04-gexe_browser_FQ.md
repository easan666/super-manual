---
layout: doc
---
# <span class="h1-icon"><img src="/img/fq.png" alt="CGexeBrowser"></span>常见问题

### 1. 插件安装

1. 打开路径`%appdata%\Maxon`
2. 新建一个`Plugins`文件夹，把插件放到这里
3. 在C4D每个版本的`编辑`>`设置`>`插件`>`添加文件夹`，添加`Plugins`文件夹
4. 重启C4D

::: info 提示
这样做的好处是可以多个C4D版本共享一个插件，统一管理，不用每个C4D版本都复制一份  
`%appdata%\Maxon\Plugins`也是可动盒子的默认下载路径
:::


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

- 插件的数据文件在`browser`文件夹的`config.json`（配置），`browser_data.cgd`（数据库），`favorites.json`（收藏数据）
- 更新插件之前可以自行备份，更新覆盖即可

::: info 提示
CGexeBrowser v1.7.0 新增data_backup（数据备份）.bat文件，用于备份文件
:::


<br />
<br />

