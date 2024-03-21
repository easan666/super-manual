---
layout: doc
---
# <span class="h1-icon"><img src="/img/VR-Settings.webp" alt="AutoNode插件设置"></span>插件设置

## 登录验证
每个用户可以在**5台电脑**上使用（重装系统会计数），超过5台电脑将会被禁止登录。  
如果短时间内在多地登录或者短时间登录多台电脑，视为异常记录，**可能会封号或者拉黑**。  
没有异常记录却被误封或者无法登录可以联系管理员（`cgexe@qq.com`）解封。


- 打开插件的设置，切换顶部的tab到`登录验证`。  
- 输入用户名（邮箱）和密码，点击`登录`按钮。  当你输入正确的用户名（邮箱）和密码后，插件将会验证你的身份。  
<br/>

> 使用QQ注册的用户可以在[个人信息](https://cgexe.com/user/profile/)绑定邮箱，然后再重置/设置密码。  
如果忘记密码可以[找回密码](https://cgexe.com/lostpwd/)

<br/>
<img src="/img/login.webp" data-zoomable alt="登录验证" width=50% >

<!-- ![](/img/login.webp){data-zoomable} -->

<br />

## 插件设置
- 打开插件的设置，切换顶部的tab到`插件设置`。  

<img data-zoomable src="/img/vr-autonode_plugin_settings.webp" alt="插件设置" width=50%>

<br />
<br />

### 切换颜色模式
Vray 的 Cosmos Browser资产库的资产都是线性流程，所以插件默认也是线性流程。
有需要可以切换为ACES流程，切换之后点击**确定**
更新之后VR-AutoPBR，VR-QuickNode，VR-QuickDisp都会修改颜色模式

<br />

### 自动排列节点
AutoPBR（自动PBR）、和Set TriPlanar（处理平铺）执行后会自动排列节点。  
如果这里取消勾选则不会自动排列。

<br />

### 设置反射为白色
AutoPBR（自动PBR）执行后会根据贴图连接的通道自动命名。  
取消勾选则不会自动命名。

<br />

### 自动添加调节节点
AutoPBR（自动PBR）和To PBR（PBR连接）执行后会根据贴图连接的通道自动添加调节节点（Color Correct或者Ramp）。  取消勾选则不会自动添加调节节点。

```
- 此功能仅作用于纹理节点，其他节点不会添加
- Ramp（渐变映射）节点是节点资产，需要导入AutoNode.zip才能调用

```

<br />

### 自动重命名材质
AutoPBR（自动PBR）执行后会根据贴图的名称自动重命名对应材质。  
取消勾选则不会自动重命名材质。

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

---

<br />

### 设置颜色通道

- 可以根据需要添加端口id到选项，设置的通道连接的贴图将会被设置为sRGB(color data)，其他会判断为non-color data
- 调节节点的设置也是根据这里添加（Color Correct或者Ramp）
- 插件已经设置了材质的大部分常用颜色端口，如果不是特殊情况是不需要修改

>复制的端口ID会比较长，如`com.chaos.vray_node.brdfvraymtl.diffuse`  
设置的时候只需要添加后缀，如：`diffuse`


<br />


#### 获取端口id:

1. 在节点编辑器首选项开启ID和信息显示
2. 选择需要添加的端口
3. 右键复制
<br />

<video controls>
  <source src="/img/vr-autonode_autonode_get_port_id.webm" type="video/webm">
</video>


<br />
<br />
<br />
<br />

### 自定义菜单

> 自定义菜单相关设置请参考[自定义菜单](03-VAN-CustomMenu)