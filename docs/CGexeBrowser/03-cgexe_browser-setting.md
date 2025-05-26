---
layout: doc
---
# <span class="h1-icon"><img src="/img/link4d-Settings.webp" alt="Link4D插件设置"></span>插件设置

## 登录说明


- 如果是首次使用会显示登录窗口，需要输入账号密码登录。
- 登录后**重启C4D**即可使用插件。

::: info 设置密码
使用QQ注册的用户可以在[个人信息](https://cgexe.com/user/profile/)绑定邮箱，和重置/设置密码。  
如果忘记密码可以[找回密码](https://cgexe.com/lostpwd/)
:::


- 每个用户可以在**5台电脑**上使用（重装系统会计数），超过5台电脑将会被禁止登录。  
如果短时间内在多地登录或者短时间登录多台电脑，视为异常记录，**可能会封号或者拉黑**。  
没有异常记录却被误封或者无法登录可以联系管理员（`cgexe@qq.com`）解封。


<img src="/img/login_verification_screenshot.webp" data-zoomable alt="登录验证" width=60% >

## 插件设置

#### 中文设置截图
<div class="img-to" >
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_0_0_setting_cn_1.webp" alt="cgexe_browser" width=40%>
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_5_0_setting_cn_2.webp" alt="cgexe_browser" width=40%>
</div>

<br />

#### 中文设置截图
<div class="img-to" >
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_0_0_setting_en_1.webp" alt="cgexe_browser" width=40%>
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_5_0_setting_en_2.webp" alt="cgexe_browser" width=40%>
</div>

<br />


<br />

## 切换颜色模式
虽然大部分时候都使用ACES流程，但是部分渲染器有时候可能需要使用线性流程。  
有需要可以切换ACES/线性流程，切换之后点击**确定**  
- Octane：使用ACES会将颜色贴图设置为`sRGB`，非颜色贴图设置为`Non-Color Data`，如果习惯`Linear sRGB + Legacy Gamma`就切换为线性流程。
- Corona：Corona可以忽略此设置，因为Corona的Bitmap节点没有`raw`，所以只能是`Linear`。


<br />

## LOD
Megascans资产会有各种LOD模型，这里可以设置导入的默认LOD级别。  
如果设置LOD5，会优先导入LOD5的模型，如果没有LOD5的模型，会查找LOD4、LOD3……


<br />

## 缩放尺寸
导入贴图会自动缩放为设置目标尺寸，如果不想缩放可以设置为`原图`。  
如果设置2048，会将大于2048的贴图缩放为2048，如果图片小于2048则不会处理

<br />

## HDR缩放
设置HDR的时候默认不会缩放，如果也需要根据缩放尺寸修改可以勾选

<br />

## 添加调节节点
CGexeBrowser发送PBR贴图后会根据贴图连接的通道自动添加调节节点（Color Correct之类）。  
取消勾选则不会自动添加调节节点。

<br />

## 材质类型
可以选择使用Standard Surface或者Universal材质。  
Universal材质仅限于Octane。
::: info 注意
灰猩猩官方是使用Standard Surface材质，他的资产有十多种贴图和30多种参数的设置。有些贴图和参数的设置Universal材质是没有的。所以建议还是使用Standard Surface材质。
:::

<br />

## Octane纹理类型
可以选择灯光贴图设置Texture或者Distribution

<br />


## 自定义通道关键词
CGexeBrowser发送PBR贴图自动连接依赖文件名中的关键词，可以根据需要设置关键词。

![关键词](/img/keywords_for_file_names.webp){data-zoomable}

<br />

支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

- 关键词可以根据需要增删，不区分大小写，是用逗号分隔，`,`是英文的逗号
- 如果不是需要，请不要保留空格
- 关键词支持`正则`，可以根据需要添加
- 设置完成后需点击`确定`


<br />


### 正则常用示例
关键词不区分大小写，支持`正则`，下面是部分正则常用示例：

**常用示例：**

- `a.+?b` 匹配以字母 "a" 开头，后面跟着一个或多个任意字符（非贪婪模式），然后以字母 "b" 结尾的字符串。
- `a..b` 匹配以字母 "a" 开头，后面跟着任意两个字符，然后以字母 "b" 结尾的字符串。
- `\d+` 匹配一个或多个连续的数字。
- `^apple` 匹配以 "apple" 开头的字符串
- `apple$` 来匹配以 "apple" 结尾的字符串

**字符匹配：**

- `\d` 匹配任意数字。
- `\w` 匹配任意字母、数字或下划线。
- `\s` 匹配任意空白字符（空格、制表符等）。
- `.` 匹配除换行符外的任意字符。

**重复次数：**

- `*` 匹配前一个元素零次或多次。
- `+` 匹配前一个元素一次或多次。
- `?` 匹配前一个元素零次或一次。
- `{n}` 匹配前一个元素恰好 n 次。
- `{n,}` 匹配前一个元素至少 n 次。
- `{n,m}` 匹配前一个元素至少 n 次且不超过 m 次。

**字符类：**

- `[abc]` 匹配 a、b 或 c 中的任意一个字符。
- `[^abc]` 匹配除了 a、b 和 c 以外的任意字符。
- `[a-z]` 匹配任意小写字母。（插件不区分大小写）
- `[A-Z]` 匹配任意大写字母。（插件不区分大小写）
- `[0-9]` 匹配任意数字。

**锚点：**

- `^` 匹配行的开头。
- `$` 匹配行的结尾。
- `\b` 匹配单词的边界


<br />

## 浏览器打开
调用默认浏览器打开CGexeBrowser，2023之前版本默认就是浏览器打开

<br />

## 自动清理临时文件夹
插件导入zip压缩包或者缩放贴图会把文件保存在临时文件夹，勾选后每次启动C4D都会自动清理临时文件夹。  
并不建议勾选，如果有时候没有`保存工程含资产`可能会造成文件丢失，所以最好是自己定期清理。

<br />


## 自动运行CGexeBrowser
勾选后每次启动C4D都会自动CGexeBrowser。  

<br />


## 资产文件夹路径
插件启动必须先设置资产文件夹，不然会无法启动。如果修改了路径需要[重启/初始化](02-cgexe_browser-initialize)。

- 右键可以添加路径
- 本地和网盘其实一样，区别就是网盘的路径添加之后的默认图标是☁️
- 路径数量没有限制，一个路径对应CGexeBrowser左侧菜单一个文件夹（菜单排序是按名称）
- 添加的路径在[重启/初始化](02-cgexe_browser-initialize)中可以选择更新
- 视频说明：[点击查看](https://www.bilibili.com/video/BV13pfsY3ETz)

<br />
<div class="img-to" >
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_5_0_setting_folder_path_cn.webp" alt="cgexe_browser" width=40%>
  <img data-zoomable src="/cgexe_browser/cgexe_browser_v_1_5_0_setting_folder_path_en.webp" alt="cgexe_browser" width=40%>
</div>
<img src="/cgexe_browser/cgexe_browser_v_1_5_0_setting_folder_path_cn_2.webp" data-zoomable alt="登录验证" width=81% >

<br />

## 临时文件夹路径
插件导入zip压缩包或者缩放贴图会把文件保存在临时文件夹，可以点击`…`选择文件夹，如果没有读写权限会提示。

<br />


## 缩略图文件夹
插件会根据这些后缀判断是缩略图或者缩略图文件夹，修改后需要`重启/初始化`。  
最好是只设置`preview`，然后所有缩略图都使用`_preview`后缀，缩略图文件夹都命名为`preview`，这样可以提高初始化效率。

<br />


## CGexeBrowser显示
- 显示尺寸：文件管理器图片的显示尺寸，可以根据需要适当修改，修改后需要退出重启CGexeBrowser
- 字体大小：文件管理器文字的显示大小，可以根据需要适当修改，修改后需要退出重启CGexeBrowser

<br />