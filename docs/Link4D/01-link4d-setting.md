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

<div class="img-to" >
  <img data-zoomable src="/img/link4d_info_setting_cn.webp" alt="列表模式" width=40%>
  <img data-zoomable src="/img/link4d_info_setting_en.webp" alt="文件夹模式" width=40%>
</div>
<br />


<br />

## 切换颜色模式
虽然大部分时候都使用ACES流程，但是部分渲染器有时候可能需要使用线性流程。  
有需要可以切换ACES/线性流程，切换之后点击**确定**  
- Octane：使用ACES会将颜色贴图设置为`sRGB`，非颜色贴图设置为`Non-Color Data`，如果习惯`Linear sRGB + Legacy Gamma`就切换为线性流程。
- Corona：Corona可以忽略此设置，因为Corona的Bitmap节点没有`raw`，所以只能是`Linear`。


<br />

## 导入时自动添加调节节点
右键`Send PBR to C4D`执行后会根据贴图连接的通道自动添加调节节点（Color Correct之类）。  
取消勾选则不会自动添加调节节点。


<br />

## 自定义端口
一般情况下是不需要自定义端口，如果遇到插件无法获取交互信息（概率很小），可以尝试切换端口。端口的范围为：`1025`~`65535`

::: info 端口设置
端口设置后需要**重启C4D**才会生效。
:::


<br />

## 自定义通道关键词
右键`Send PBR to C4D`发送PBR贴图自动连接依赖文件名中的关键词，可以根据需要设置关键词。

![关键词](/img/keywords_for_file_names.webp){data-zoomable}

<br />

支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

- 关键词可以根据需要增删，不区分大小写，是用逗号分隔，`,`是英文的逗号
- 如果不是需要，请不要保留空格
- 关键词支持`正则`，可以根据需要添加
- 设置完成后需点击`确定`


<br />

## 备份设置
如果已经设置好了插件的设置，需要更新/移动插件的话可以备份配置文件，然后在其他电脑上覆盖配置文件，这样就不需要再设置一遍了。  
配置文件位置：在插件文件夹 > `assets`文件夹下，文件名是`settings.json`

<br />

## 正则常用示例
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
