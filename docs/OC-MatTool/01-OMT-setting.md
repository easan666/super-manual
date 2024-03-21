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

## 插件设置
- 打开插件的设置，切换顶部的tab到`插件设置`。  

<img data-zoomable src="/img/OC-MatTool_v1_3_setting.webp" alt="插件设置" width=50%>

<br />
<br />

### 自定义置换尺寸
AutoPBR（自动PBR）执行后会自动设置Displacement节点的Level of detail。  
可以自适应设置置换贴图尺寸，也支持自定义大小

<img data-zoomable src="/img/OC-MatTool_v1_3_setting_displacement.webp" alt="插件设置" width=50%>


<br />

### 自动添加UV节点
AutoPBR（自动PBR）执行后会自动添加UV变换节点（UV Transform）。  
如果这里取消勾选则不会自动添加。

<br />

### 自动添加调节节点
AutoPBR（自动PBR）执行后会自动添加调节节点。  
- 如果纹理节点连接到颜色通道**并且**纹理节点的[类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html)为正常（Normal）会添加ColorCorrection（颜色修正）节点。  
- 如果纹理节点连接到非颜色通道**或者**纹理节点的[类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html)为浮点（Float）会添加Octane gradient（渐变映射）节点。  

如果这里取消勾选则不会自动添加。

<br />

### 自动添加chaos节点
AutoPBR（自动PBR）执行后会自动添加chaos节点，用于处理贴图重复问题。  
如果这里取消勾选则不会自动添加。

<br />

### 自动重命名贴图
AutoPBR（自动PBR）执行后会根据纹理节点连接的通道自动重命名节点名称。  
如果这里取消勾选则不会自动重命。

<br />

### 自动重命名材质
AutoPBR（自动PBR）执行后会根据贴图的文件名自动重命名材质。  
如果这里取消勾选则不会自动重命。

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

### 设置颜色/非颜色通道

- 可以根据需要添加端口id到选项，
- 连接到颜色通道的贴图将会被判断为sRGB(color data)，[类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html)会设置为正常（Normal），Legacy Gamma会设置为2.2
- 连接到非颜色通道的贴图将会被判断为non-color data，[类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html)会设置为浮点（Float），Legacy Gamma会设置为1

<br />

::: warning 注意
贴图 [类型(Type)](https://docs.otoy.com/cinema4d/ImageTexture.html) 设置为正常（Normal）会比浮点（Float）多占用三倍显存，正确设置贴图类型可以节省显存资源，不会造成不必要的资源浪费，所以插件进行了自动化的设置。
:::

<br />


#### 端口id:


```
OctDiffuse/Glossy/Specular/Metallic/Toon/Universal：
---
Albedo  2517
Specular  2524
Metallic  2587
Roughness 2533
Rotation  2591
Sheen 2605
Sheen Roughness 2625
Sheen Bump  2626
Coating 2615
Coating Roughness 2621
Coating Bump  2622
Coating Normal  623
Film Width  2535
Bump  2539
Normal  2542
Displacement  2580
Opacity 2545
Transmission  2555
Emission  2557
Medium  2560

---

OctStdSurface：
----
Base layer	---
  Weight  2516
  Color 2518
  Diffuse roughness 2520
  Metalness 2522

Specular layer	---
  Weight  2524
  Color 2526
  Roughness 2528
  IOR 2530
  Anisotropy  2532
  Rotation  2534

Transmission layer	---
  Weight  2536
  Color 2538
  Depth 2540
  Scatter 2542
  Extra roughness 2546

Subsurface layer	---
  Weight  2550
  Color 2552
  Radius  2554

Coating layer	---
  Weight  2558
  Color 2560
  Roughness 2562
  IOR 2564
  Anisotropy  2566
  Rotation  2568
  Bump  2569
  Normal  2570

Sheen layer	---
  Weight  2572
  Color 2574
  Roughness 2576

Emission layer	---
  Weight  2578
  Color 2580
  Emission  2661
Thin film layer	---
  Film thickness  2582
  Film IOR  2640

Geometric properties	---
  Bump  2585
  Normal  2586
  Displacement  2587
  Round edges 2590
  Opacity 2592

Material layer  2593

```

