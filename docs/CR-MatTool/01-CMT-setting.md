---
layout: doc
---
# <span class="h1-icon"><img src="/img/RS-Settings.webp" alt="NodeTool插件设置"></span>插件设置

## 登录验证
每个用户可以在**5台电脑**上使用（重装系统会计数），超过5台电脑将会被禁止登录。  
如果短时间内在多地登录或者短时间登录多台电脑，视为异常记录，**可能会封号或者拉黑**。  
没有异常记录却被误封或者无法登录可以联系管理员（`cgexe@qq.com`）解封。

<br/>



- 打开插件的设置，切换顶部的tab到`登录验证`。  
- 输入用户名（邮箱）和密码，点击`登录`按钮。  当你输入正确的用户名（邮箱）和密码后，插件将会验证你的身份。  
<br/>

> 使用QQ注册的用户可以在[个人信息](https://cgexe.com/user/profile/)绑定邮箱，然后再重置/设置密码。  
如果忘记密码可以[找回密码](https://cgexe.com/lostpwd/)

<br/>

```
部分VPN工具会造成C4D（2023之前版本）无法联网，如果提示网络问题，请关闭VPN重试

```

<br/>
<img src="/img/login.webp" data-zoomable alt="登录验证" width=50% >

<!-- ![](/img/login.webp){data-zoomable} -->

<br/>

## 插件设置
- 打开插件的设置，切换顶部的tab到`插件设置`。  

<img data-zoomable src="/img/cr-mattool_autopbr_settings_01.webp" alt="插件设置" width=50%>

<br />
<br />

### 自动添加调节节点
AutoPBR（自动PBR）执行后会自动添加Color Correct调节节点。  
如果这里取消勾选则不会自动添加。

<br />

### 自定义名称
为了避免出错，AutoPBR（自动PBR）需要对贴图节点进行重命名才会连接。  
这里可以自定义名称，默认是`666`


<br />

<video  controls autoplay muted>
  <source src="/img/cr-mattool_autopbr_01_normal_mode.webm" type="video/webm">
</video>

<br />
<br />


---

<br />

### 自定义通道关键词
AutoPBR（自动PBR）的连接依赖文件名中的关键词，可以根据需要设置对应的关键词。

![关键词](/img/keywords_for_file_names.webp){data-zoomable}

<br />

支持的通道有`Diffuse`，`AO`，`Metalness`，`Roughness`，`Reflection`，`Glossiness`，`Bump`，`Normal`，`Opacity`，`Displacement`，`Emission`，`Translucency`

- 关键词可以根据需要增删，不区分大小写，是用逗号分隔，`,`是英文的逗号
- 如果不是需要，请不要保留空格
- 关键词支持<span class="gb-text">正则</span>，可以根据需要添加
- 设置完成后需点击`确定`

<br />

### 正则使用

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



