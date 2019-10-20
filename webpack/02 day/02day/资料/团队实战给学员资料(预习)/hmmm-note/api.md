
 <h1 class="curproject-name"> 黑马面面-后台 </h1> 
 


# 0-框架

## 文件上传
<a id=文件上传> </a>
### 基本信息

**Path：** /frame/file

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fid</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文件id</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>id</span></p></td></tr>
               </tbody>
              </table>
            
## 文件访问
<a id=文件访问> </a>
### 基本信息

**Path：** /frame/file/:id

**Method：** GET

**接口描述：**
<p>直接打印文件流，请区分类型</p>
<p>图片 =》直接打印输出<br>
字符串文件 =》 直接打印输出<br>
其它文件 =》附件下载形式（如 office）</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  文件id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户修改密码
<a id=用户修改密码> </a>
### 基本信息

**Path：** /frame/password

**Method：** POST

**接口描述：**
<p>oldPassword，newPassword 上传 MD5 码</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户注册
<a id=用户注册> </a>
### 基本信息

**Path：** /frame/register

**Method：** POST

**接口描述：**
<p>password 上传 MD5 码</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> username</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">令牌</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds</span></p></td></tr>
               </tbody>
              </table>
            
## 用户注销
<a id=用户注销> </a>
### 基本信息

**Path：** /frame/logout

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户登录
<a id=用户登录> </a>
### 基本信息

**Path：** /frame/login

**Method：** POST

**接口描述：**
<p>password 上传 MD5 码 SHA256</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> username</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">令牌</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds</span></p></td></tr>
               </tbody>
              </table>
            
## 用户资料
<a id=用户资料> </a>
### 基本信息

**Path：** /frame/profile

**Method：** POST

**接口描述：**
<p>menus 菜单权限，需要从根节点开始 完整节点列表。</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">用户名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>cname</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> group</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">部门</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>传智播客－研究院－项目开发组－前端</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> signature</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">签名</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>海纳百川，有容乃大</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">头像</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> roles</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限</span></td><td key=5></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> menus</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">菜单</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>3</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>6</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=array-65><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">项目</span></td><td key=5></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> points</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限点</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>3</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>5</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=array-66><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">点</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 1-用户管理

## 用户修改
<a id=用户修改> </a>
### 基本信息

**Path：** /users/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">姓名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">联系电话</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_group_id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组id</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">头像</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">邮件</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户列表
<a id=用户列表> </a>
### 基本信息

**Path：** /users

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |  1 |  当前页数 |
| pagesize | 是  |  10 |  页尺寸 |
| keyword | 是  |   |  关键字 |
| disabled | 否  |   |  是否屏蔽 1 屏蔽 0 开启 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> account</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>word</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">姓名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>cname</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">联系电话</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>mobile</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_group_id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组id</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>id</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> permission_group_title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">头像</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>url</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">邮件</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>email</span></p></td></tr><tr key=0-4-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">最近登录时间</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-4-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">注册时间</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-4-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户删除
<a id=用户删除> </a>
### 基本信息

**Path：** /users/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户屏蔽、启用
<a id=用户屏蔽、启用> </a>
### 基本信息

**Path：** /users/:id/disabled

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户添加
<a id=用户添加> </a>
### 基本信息

**Path：** /users

**Method：** POST

**接口描述：**
<p>默认密码&nbsp; 123456</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">姓名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">联系电话</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_group_id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组id</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">头像</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">邮件</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 用户简单列表
<a id=用户简单列表> </a>
### 基本信息

**Path：** /users/simple

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 是  |   |  关键字 |
| disabled | 否  |   |  是否屏蔽 1 屏蔽 0 开启 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">姓名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>cname</span></p></td></tr>
               </tbody>
              </table>
            
## 用户详情
<a id=用户详情> </a>
### 基本信息

**Path：** /users/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> account</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">账号</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fullName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">姓名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">联系电话</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_group_id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组id</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permission_group_title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限组</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> avatar</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">头像</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">邮件</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> last_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">最近登录时间</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> create_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">注册时间</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-10><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> disabled</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否屏蔽</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 用户重置密码
<a id=用户重置密码> </a>
### 基本信息

**Path：** /users/:id/password

**Method：** PUT

**接口描述：**
<p>password 上传 MD5 码 SHA256</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  用户id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> password</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">密码</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
# 2-菜单管理

## 菜单修改
<a id=菜单修改> </a>
### 基本信息

**Path：** /menus/:id

**Method：** PUT

**接口描述：**
<p>菜单项不能挂在权限点上<br>
权限点只能挂在菜单项上</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  项id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isPoint</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否权限点</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pid</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">父 id</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">菜单代码 全局唯一</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">菜单标题</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 菜单列表
<a id=菜单列表> </a>
### 基本信息

**Path：** /menus

**Method：** GET

**接口描述：**
<p>权限点只能挂在菜单项上</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
[
    {
        "id": 1101,
        "pid": 1001,
        "code": "base",
        "title": "数据管理",
        "childs": [                                         // 菜单项
            {
                "id": 1102,
                "pid": 1101,
                "code": "base-users",
                "title": "用户管理",
                "points": [                                 // 权限点
                    {
                        "id": 1106,
                        "pid": 1102,
                        "code": "base-users-list",
                        "title": "用户管理-读取"
                    },
                    {
                        "id": 1107,
                        "pid": 1102,
                        "code": "base-users-edit",
                        "title": "用户管理-修改"
                    }
                ]
            },
            {
                "id": 1103,
                "pid": 1101,
                "code": "base-menus",
                "title": "菜单管理",
            },
            {
                "id": 1104,
                "pid": 1101,
                "code": "base-permissions",
                "title": "权限管理",
            }
        ]
    }
]
```
## 菜单删除
<a id=菜单删除> </a>
### 基本信息

**Path：** /menus/:id

**Method：** DELETE

**接口描述：**
<p>层级删除</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  项id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 菜单添加
<a id=菜单添加> </a>
### 基本信息

**Path：** /menus

**Method：** POST

**接口描述：**
<p>菜单项不能挂在权限点上<br>
权限点只能挂在菜单项上</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isPoint</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否权限点</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pid</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">父 id</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">菜单代码 全局唯一</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">菜单标题</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 菜单详情
<a id=菜单详情> </a>
### 基本信息

**Path：** /menus/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  项id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pid</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">父节点id</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isPoint</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否权限点</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">代码</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>base-users</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">名称</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>用户管理</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr>
               </tbody>
              </table>
            
# 3-权限组管理

## 权限组修改
<a id=权限组修改> </a>
### 基本信息

**Path：** /permissions/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr><tr key=array-67><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">项id</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 权限组列表
<a id=权限组列表> </a>
### 基本信息

**Path：** /permissions

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 是  |  1 |  当前页数 |
| pagesize | 是  |  10 |  页尺寸 |
| keyword | 是  |   |  关键字 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> create_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 权限组删除
<a id=权限组删除> </a>
### 基本信息

**Path：** /permissions/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 权限组添加
<a id=权限组添加> </a>
### 基本信息

**Path：** /permissions

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr><tr key=array-68><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">项id</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 权限组简单列表
<a id=权限组简单列表> </a>
### 基本信息

**Path：** /permissions/simple

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| keyword | 是  |   |  关键字 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 权限组详情
<a id=权限组详情> </a>
### 基本信息

**Path：** /permissions/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr><tr key=array-69><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">项id</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> permissions</span></td><td key=1><span>integer []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">权限ids [1101,1102,1103]</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>integer</span></p></td></tr><tr key=array-70><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">id</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> create_date</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建时间</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
# 4-企业管理

## 企业管理修改
<a id=企业管理修改> </a>
### 基本信息

**Path：** /companys/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| shortName | 否  |   |  企业简称 |
| state | 否  |  1 启用 0 禁用 |  状态 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> number</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业编号</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFamous</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否名企</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> shortName</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业简称</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> company</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">所属公司</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> province</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">备注</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 企业管理列表
<a id=企业管理列表> </a>
### 基本信息

**Path：** /companys

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| shortName | 否  |   |  企业简称 |
| state | 否  |  1 启用 0 禁用 |  状态 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> number</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> isFamous</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否名企</span></td><td key=5><p key=1><span style="font-weight: '700'">undefined: </span><span>@boolean</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> shortName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业简称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> company</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">所属公司</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> province</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@province</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> city</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@city</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@title</span></p></td></tr><tr key=0-4-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> remarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">备注</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cparagraph</span></p></td></tr><tr key=0-4-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creatorID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@date</span></p></td></tr><tr key=0-4-11><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> state</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=1><span style="font-weight: '700'">undefined: </span><span>@boolean</span></p></td></tr>
               </tbody>
              </table>
            
## 企业管理删除
<a id=企业管理删除> </a>
### 基本信息

**Path：** /companys/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| shortName | 否  |   |  企业简称 |
| state | 否  |  1 启用 0 禁用 |  状态 |
**Body**

```javascript
{}
```
### 返回数据

```javascript
{}
```
## 企业管理添加
<a id=企业管理添加> </a>
### 基本信息

**Path：** /companys

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| shortName | 否  |   |  企业简称 |
| state | 否  |  1 启用 0 禁用 |  状态 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFamous</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否名企</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> shortName</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业简称</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> company</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">所属公司</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> province</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">备注</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 企业管理设置状态
<a id=企业管理设置状态> </a>
### 基本信息

**Path：** /companys/:id/:state

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| state |   |  状态 0 屏蔽 1 开启 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| shortName | 否  |   |  企业简称 |
| state | 否  |  1 启用 0 禁用 |  状态 |
**Body**

```javascript
{}
```
### 返回数据

```javascript
{}
```
## 企业管理详情
<a id=企业管理详情> </a>
### 基本信息

**Path：** /companys/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

```javascript
{}
```
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> number</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFamous</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否名企</span></td><td key=5><p key=1><span style="font-weight: '700'">undefined: </span><span>@boolean</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> shortName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业简称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> company</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">所属公司</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> province</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@province</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@city</span></p></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@word</span></p></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">备注</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@sentence</span></p></td></tr>
               </tbody>
              </table>
            
# 5-题库管理

## 审核意见
<a id=审核意见> </a>
### 基本信息

**Path：** /questions/:id/auditOpinions

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  问题ID |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> </span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> opinion</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">意见</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> chkTime</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> checker</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">审核人</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr>
               </tbody>
              </table>
            
## 出题记录
<a id=出题记录> </a>
### 基本信息

**Path：** /questions/:id/setRecords

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  问题ID |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> </span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> operation</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">操作</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> setTime</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">出题时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> setter</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">出题人</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr>
               </tbody>
              </table>
            
## 基础题库列表
<a id=基础题库列表> </a>
### 基本信息

**Path：** /questions

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectID | 否  |   |  学科 |
| difficulty | 否  |   |  难度 |
| questionType | 否  |   |  试题类型 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| keyword | 否  |   |  关键字 |
| remarks | 否  |   |  题目备注 |
| shortName | 否  |   |  企业简称 |
| direction | 否  |   |  方向 |
| creatorID | 否  |   |  录入人 |
| catalogID | 否  |   |  目录 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> number</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> subjectID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> catalogID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> enterpriseID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> province</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> city</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> direction</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">方向</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionType</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题型</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> difficulty</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">难度</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> question</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题干</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-11><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> videoURL</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">解析视频</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4,,,,,</span></p></td></tr><tr key=0-4-12><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> answer</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答案解析</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-13><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> remarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目备注</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-14><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-15><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入人</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-16><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr>
               </tbody>
              </table>
            
## 基础题库删除
<a id=基础题库删除> </a>
### 基本信息

**Path：** /questions/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

```javascript
{}
```
### 返回数据

```javascript
{}
```
## 基础题库添加
<a id=基础题库添加> </a>
### 基本信息

**Path：** /questions

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> number</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题编号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> catalogID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> enterpriseID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@city</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> province</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@province</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> direction</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">方向</span></td><td key=5></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> questionType</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题型</span></td><td key=5><p key=3><span style="font-weight: '700'">枚举: </span><span>1,2,3</span></p></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> difficulty</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">难度</span></td><td key=5><p key=3><span style="font-weight: '700'">枚举: </span><span>1,2,3</span></p></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> question</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题干</span></td><td key=5></td></tr><tr key=0-10><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> options</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">选项</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-10-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">代码</span></td><td key=5></td></tr><tr key=0-10-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-10-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> img</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">图片URL</span></td><td key=5></td></tr><tr key=0-10-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> isRight</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否正确答案</span></td><td key=5></td></tr><tr key=0-11><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">解析视频</span></td><td key=5></td></tr><tr key=0-12><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> answer</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答案解析</span></td><td key=5></td></tr><tr key=0-13><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目备注</span></td><td key=5></td></tr><tr key=0-14><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题标签</span></td><td key=5></td></tr><tr key=0-15><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isPerfect</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否精选题</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
## 基础题库详情
<a id=基础题库详情> </a>
### 基本信息

**Path：** /questions/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| isNext | 否  |  isNext=true |  是否下一题 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> number</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> catalogID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> enterpriseID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> province</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@province</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@city</span></p></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> direction</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">方向</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> questionType</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题型</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> difficulty</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">难度</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-10><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> question</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题干</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@sentence</span></p></td></tr><tr key=0-11><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> option</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">选项</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>3</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>5</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-11-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">代码</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@word</span></p></td></tr><tr key=0-11-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-11-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> img</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">图片</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://www.itcast.cn/2018czgw/images/technology/icon1.png,http://www.itcast.cn/2018czgw/images/technology/icon2.png,http://www.itcast.cn/2018czgw/images/technology/icon3.png,http://www.itcast.cn/2018czgw/images/course/courserpic1.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic2.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic3.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic4.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic5.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic6.jpg,,,,,,,,</span></p></td></tr><tr key=0-11-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-11-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> isRight</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否正确答案</span></td><td key=5></td></tr><tr key=0-12><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">解析视频</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4,,,,,,,</span></p></td></tr><tr key=0-13><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> answerID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答案解析</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cparagraph</span></p></td></tr><tr key=0-14><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目备注</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cparagraph</span></p></td></tr><tr key=0-15><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 基础题库修改
<a id=基础题库修改> </a>
### 基本信息

**Path：** /questions/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> number</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题编号</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科</span></td><td key=5></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> catalogID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录</span></td><td key=5></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> enterpriseID</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> city</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> direction</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">方向</span></td><td key=5></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> questionType</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题型</span></td><td key=5></td></tr><tr key=0-8><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> difficulty</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">难度</span></td><td key=5></td></tr><tr key=0-9><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> question</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题干</span></td><td key=5></td></tr><tr key=0-10><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> option</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">选项</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-10-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5></td></tr><tr key=0-10-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> code</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">代码</span></td><td key=5></td></tr><tr key=0-10-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-10-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> img</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">图片URL</span></td><td key=5></td></tr><tr key=0-10-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> isRight</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否正确答案</span></td><td key=5></td></tr><tr key=0-11><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">解析视频</span></td><td key=5></td></tr><tr key=0-12><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> answerID</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答案解析</span></td><td key=5></td></tr><tr key=0-13><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> remarks</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目备注</span></td><td key=5></td></tr><tr key=0-14><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题标签</span></td><td key=5></td></tr><tr key=0-15><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> creator</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入人</span></td><td key=5></td></tr><tr key=0-16><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> addDate</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入时间</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 批量导入题
<a id=批量导入题> </a>
### 基本信息

**Path：** /questions/batch

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科ID</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> fileID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文件id</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 精选题库上下架
<a id=精选题库上下架> </a>
### 基本信息

**Path：** /questions/choice/:id/:publish

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| publish |   |  1 上架 0 下架 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 精选题库列表
<a id=精选题库列表> </a>
### 基本信息

**Path：** /questions/choice

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectID | 否  |   |  学科 |
| difficulty | 否  |   |  难度 |
| questionType | 否  |   |  试题类型 |
| tags | 否  |   |  标签名称 |
| province | 否  |   |  企业所在地省份 |
| city | 否  |   |  企业所在城市 |
| keyword | 否  |   |  关键字 |
| remarks | 否  |   |  题目备注 |
| shortName | 否  |   |  企业简称 |
| direction | 否  |   |  方向 |
| creatorID | 否  |   |  录入人 |
| catalogID | 否  |   |  目录 |
| chkState | 否  |  0 待审核 1 通过 2 拒绝 |  审核状态 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> number</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> subjectID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> catalogID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> enterpriseID</span></td><td key=1><span>number</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">企业</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@integer</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> province</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">省份</span></td><td key=5></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> city</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">城市</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> direction</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">方向</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-8><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionType</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题型</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-9><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> difficulty</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">难度</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-10><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> question</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题干</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-11><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> videoURL</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">解析视频</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4,,,,,,</span></p></td></tr><tr key=0-4-12><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> answer</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答案解析</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-13><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> remarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目备注</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-14><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-15><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入人</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-16><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-17><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> chkState</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">筛选状态 0 待审核 1 通过 2 拒绝</span></td><td key=5></td></tr><tr key=0-4-18><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> chkUser</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">审核人</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-19><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> chkDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">审核日期</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-20><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> chkRemarks</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">审核意见</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-4-21><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> publishState</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">发布状态 0 待发布 1 已发布 2 已下架</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 组题列表
<a id=组题列表> </a>
### 基本信息

**Path：** /questions/randoms/

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| keyword | 否  |   |  关键字 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addTime</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">组题时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> userName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">用户名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionIDs</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题ID</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=array-71><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> progressOfAnswer</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答题进度</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>10</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> accuracyRate</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">正确率</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>10</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> totalSeconds</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答题总耗时秒</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionType</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">组题类型</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 组题列表删除
<a id=组题列表删除> </a>
### 基本信息

**Path：** /questions/randoms/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

```javascript
{}
```
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addTime</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">组题时间</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> userName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">用户名</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionIDs</span></td><td key=1><span>string []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">试题ID</span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>string</span></p></td></tr><tr key=array-72><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> progressOfAnswer</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答题进度</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>10</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> accuracyRate</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">正确率</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>10</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> totalSeconds</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">答题总耗时秒</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> questionType</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">组题类型</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 试题审核
<a id=试题审核> </a>
### 基本信息

**Path：** /questions/:id/:check

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| check |   |  1 通过 0 不通过 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
# 6-学科管理

## 标签添加
<a id=标签添加> </a>
### 基本信息

**Path：** /tags

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科ID</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tagName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签名称</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 学科修改
<a id=学科修改> </a>
### 基本信息

**Path：** /subjects/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">是否显示</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">前台是否显示</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 学科删除
<a id=学科删除> </a>
### 基本信息

**Path：** /subjects/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectName | 否  |   |  学科名称 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 学科添加
<a id=学科添加> </a>
### 基本信息

**Path：** /subjects

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">前台是否显示</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">前台是否显示</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
## 学科简单列表
<a id=学科简单列表> </a>
### 基本信息

**Path：** /subjects/simple

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| subjectName | 否  |   |  学科名称 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> </span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>3</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>false</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> value</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">数据ID</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> label</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>MySQL,面向对象,JavaScript,HTML,CSS</span></p></td></tr>
               </tbody>
              </table>
            
## 学科详情
<a id=学科详情> </a>
### 基本信息

**Path：** /subjects/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> addDate</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">前台是否显示</span></td><td key=5></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> twoLevelDirectory</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">二级目录</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-7><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr>
               </tbody>
              </table>
            
## 标签修改
<a id=标签修改> </a>
### 基本信息

**Path：** /tags/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科ID</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tagName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签名称</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 标签列表
<a id=标签列表> </a>
### 基本信息

**Path：** /tags

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectID | 否  |   |  学科ID |
| tagName | 否  |   |  标签名称 |
| state | 否  |   |  状态 1 开启 0 屏蔽 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> tagName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">面试题数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> state</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 标签删除
<a id=标签删除> </a>
### 基本信息

**Path：** /tags/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 学科列表
<a id=学科列表> </a>
### 基本信息

**Path：** /subjects

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectName | 否  |   |  学科名称 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@id</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> isFrontDisplay</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">前台是否显示</span></td><td key=5><p key=1><span style="font-weight: '700'">undefined: </span><span>@boolean</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> twoLevelDirectory</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">二级目录</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> tags</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">题目数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr>
               </tbody>
              </table>
            
## 标签状态
<a id=标签状态> </a>
### 基本信息

**Path：** /tags/:id/:state

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| state |   |  状态 1 启用 0 屏蔽 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 标签详情
<a id=标签详情> </a>
### 基本信息

**Path：** /tags/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> tagName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标签名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> addDate</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">面试题数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> state</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 目录修改
<a id=目录修改> </a>
### 基本信息

**Path：** /directorys/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科ID</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> directoryName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录名称</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 目录列表
<a id=目录列表> </a>
### 基本信息

**Path：** /directorys

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| subjectID | 否  |   |  学科ID |
| directoryName | 否  |   |  目录名称 |
| state | 否  |   |  状态 1 开启 0 屏蔽 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> directoryName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> addDate</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=5><span style="font-weight: '700'">undefined: </span><span>@datetime</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">面试题数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> state</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
## 目录删除
<a id=目录删除> </a>
### 基本信息

**Path：** /directorys/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 目录添加
<a id=目录添加> </a>
### 基本信息

**Path：** /directorys

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectID</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科ID</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> directoryName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录名称</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 目录状态
<a id=目录状态> </a>
### 基本信息

**Path：** /directorys/:id/:state

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| state |   |  状态 1 启用 0 屏蔽 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 目录详情
<a id=目录详情> </a>
### 基本信息

**Path：** /directorys/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> subjectName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">学科名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> directoryName</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">目录名称</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建者</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> addDate</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">创建日期</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>1537169459</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1537165459</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> totals</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">面试题数量</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> state</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            
# 7-面试技巧

## 文章列表
<a id=文章列表> </a>
### 基本信息

**Path：** /articles

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |  1 |  当前页数 |
| pagesize | 否  |  10 |  页尺寸 |
| keyword | 否  |   |  关键字 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> oldPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">旧密码</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> newPassword</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">新密码</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> counts</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总记录数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>5000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>100</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pagesize</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">页大小</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>50</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>5</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> pages</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">总页数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> page</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">当前页码</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>100</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>1</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> items</span></td><td key=1><span>object []</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">列表</span></td><td key=5><p key=0><span style="font-weight: '700'">最小数量: </span><span>10</span></p><p key=1><span style="font-weight: '700'">元素是否都不同: </span><span>true</span></p><p key=2><span style="font-weight: '700'">最大数量: </span><span>20</span></p><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-4-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-4-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-4-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> articleBody</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文章正文</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cparagraph</span></p></td></tr><tr key=0-4-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> videoURL</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">视频地址</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4</span></p></td></tr><tr key=0-4-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> reads</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">阅读数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-4-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> state</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=1><span style="font-weight: '700'">undefined: </span><span>@boolean</span></p></td></tr><tr key=0-4-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入人</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cname</span></p></td></tr>
               </tbody>
              </table>
            
## 文章删除
<a id=文章删除> </a>
### 基本信息

**Path：** /articles/:id

**Method：** DELETE

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 文章添加
<a id=文章添加> </a>
### 基本信息

**Path：** /articles

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> articleBody</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文章正文</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">视频地址</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 文章状态
<a id=文章状态> </a>
### 基本信息

**Path：** /articles/:id/:state

**Method：** POST

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
| state |   |  状态 1 开启 0 屏蔽 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 文章编辑
<a id=文章编辑> </a>
### 基本信息

**Path：** /articles/:id

**Method：** PUT

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> articleBody</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文章正文</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">视频地址</span></td><td key=5></td></tr>
               </tbody>
              </table>
            
### 返回数据

```javascript
{}
```
## 文章详情
<a id=文章详情> </a>
### 基本信息

**Path：** /articles/:id

**Method：** GET

**接口描述：**


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJjihIsSbSEQyPa5SkVcUYuA0WfgDds | 是  |   |  令牌 |
**路径参数**

| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| id |   |  数据id |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
            
### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">编号</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>9010000</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>9000001</span></p></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> title</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">标题</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@ctitle</span></p></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> articleBody</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">文章正文</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p><p key=5><span style="font-weight: '700'">undefined: </span><span>@cparagraph</span></p></td></tr><tr key=0-3><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> videoURL</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">视频地址</span></td><td key=5><p key=2><span style="font-weight: '700'">枚举: </span><span>http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4</span></p></td></tr><tr key=0-4><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> reads</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">阅读数</span></td><td key=5><p key=0><span style="font-weight: '700'">最大值: </span><span>500</span></p><p key=1><span style="font-weight: '700'">最小值: </span><span>0</span></p></td></tr><tr key=0-5><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> state</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">状态</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr><tr key=0-6><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> creator</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap">录入人</span></td><td key=5><p key=4><span style="font-weight: '700'">format: </span><span>ctitle</span></p></td></tr>
               </tbody>
              </table>
            