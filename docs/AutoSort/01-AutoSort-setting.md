---
layout: doc
---
# <span class="h1-icon"><img src="/img/AutoSort-Settings-grey.webp" alt="AutoSort插件设置"></span>插件设置

## 登录说明


- 如果是首次使用会显示登录窗口，需要输入账号密码登录，登录后即可使用插件。

::: info 设置密码
使用QQ注册的用户可以在[个人信息](https://cgexe.com/user/profile/)绑定邮箱，和重置/设置密码。  
如果忘记密码可以[找回密码](https://cgexe.com/lostpwd/)
:::


- 每个用户可以在**5台电脑**上使用（重装系统会计数），超过5台电脑将会被禁止登录。  
如果短时间内在多地登录或者短时间登录多台电脑，视为异常记录，**可能会封号或者拉黑**。  
没有异常记录却被误封或者无法登录可以联系管理员（`cgexe@qq.com`）解封。


<img src="/img/login_verification_screenshot.webp" data-zoomable alt="登录验证" width=60% >

## 插件设置
- 插件会根据id和关键词自动归类，支持C4D的类型id，支持C4D的物体id，支持自定义关键词
- id和关键词使用英文逗号`,`分隔，关键词支持正则
- 使用关键词`other`会匹配未归类的物体
- 支持自定义类型名称和颜色

::: info 注意
自定义物体建议直接写[名称关键词](#自定义关键词)，这样比较省事。如：`穹顶光,天空,Sky`, 用英文逗号`,`分隔。
::: 

<img src="/img/autosort_v1_plugin_settings_screenshot-2.webp" data-zoomable alt="plugin_settings">

<br />

<video controls>
  <source src="/img/autosort_v1_plugin_settings_demo.webm" type="video/webm">
</video>

<br />
<br />

<br />

### 自定义关键词
就是直接写物体的名称或者自定义关键词（[支持正则](#正则常用示例)），如果所选对象的名称包含关键词就会归类  
如：`穹顶光,天空,Sky`等等，用英文逗号`,`分隔。

<br />

### 类型id
C4D中自带的物体都有相关的类型id，如域`Ofield`、效果器`Obaseeffector`等等……  

- 添加的时候需要使用前缀`c4d.`, 如 `c4d.Ofield`
- 更多类型id可以查阅SDK文档：[Object Types](https://developers.maxon.net/docs/py/2024_0_0a/types/objects.html)


<br />

### 物体id
C4D中每个物体都有对应的id，可以在控制台获取

- 打开 > 扩展 > 控制台，快捷键是`Shift+F10`
- 选择单个物体，然后拖曳到控制台的`>>>`，按下回车，就可以获取物体的id，如：`5159`

::: info 注意
有些对象的物体id和类型id是一样的，例如所有RS灯光的id都是`c4d.Orslight`也是`1036751`，  
如果需要归类RS的Dome Light（RS穹顶光），那么就需要[自定义关键词](#自定义关键词)。
::: 

<br />

<video controls>
  <source src="/img/autosort_v1_get_object_id.webm" type="video/webm">
</video>

<br />
<br />


<br />

## 备份设置
如果已经设置好了插件的设置，需要更新/移动插件的话可以备份配置文件，然后在其他电脑上覆盖配置文件，这样就不需要再设置一遍了。  
配置文件位置：在插件文件夹 > `res`文件夹下，文件名是`ObjectType.json`

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
