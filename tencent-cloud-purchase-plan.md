# 腾讯云出海官网采购与实施清单

## 推荐结论

当前网站是纯静态官网，不需要数据库，不需要 WordPress，不需要高规格云服务器。

推荐优先级：

1. EdgeOne Pages 静态部署
2. 如果 EdgeOne Pages 购买/开通不方便，则用轻量应用服务器 Lighthouse，地域选中国香港或新加坡
3. 域名、DNS、HTTPS、邮箱按需购买或开通

## 方案 A：推荐，EdgeOne Pages 静态站

适合：

- 主要面向海外客户
- 网站是 HTML/CSS/JS 静态页面
- 希望全球访问速度更好
- 不想维护服务器

需要购买/开通：

- 域名注册
- 云解析 DNS / DNSPod，免费版通常够用
- EdgeOne Pages
- SSL/HTTPS，优先使用 EdgeOne 或平台托管证书
- 企业邮箱，可选

不需要购买：

- 云数据库
- 高配 CVM
- WordPress
- 宝塔面板
- Redis
- 负载均衡

实施步骤：

1. 在腾讯云注册新域名。
2. 将域名托管到 DNSPod。
3. 开通 EdgeOne Pages。
4. 上传或连接静态网站文件。
5. 绑定新域名。
6. 开启 HTTPS。
7. 访问首页、文章页、联系页测试。
8. 提交 sitemap。

## 方案 B：稳妥通用，轻量应用服务器 Lighthouse

适合：

- 维护方习惯传统服务器
- 后续可能加后台、表单、动态功能
- 想保留完整服务器控制权

建议购买：

- 轻量应用服务器 Lighthouse
- 地域：中国香港或新加坡
- 系统：Linux，Ubuntu 或 Debian
- 规格：入门款即可，2 核 2G 足够静态网站
- 镜像：系统镜像即可，或 Nginx/应用镜像
- 云解析 DNS / DNSPod
- SSL 证书或服务器自动证书
- 快照备份，可使用 Lighthouse 快照

可选：

- EdgeOne / CDN，用于全球加速和安全防护
- 企业邮箱
- 云监控告警

实施步骤：

1. 购买 Lighthouse，地域选中国香港或新加坡。
2. 安装 Nginx 或 Caddy。
3. 将 `deploy/ipxinrui-global-site.zip` 上传服务器。
4. 解压到网站根目录。
5. 配置域名解析 A 记录到服务器公网 IP。
6. 配置 HTTPS。
7. 配置 80 跳转 443。
8. 设置自动备份或快照。
9. 测试所有页面和 sitemap。

## 方案 C：COS 静态网站托管

适合：

- 完全静态文件
- 希望低维护
- 文件较多、图片较多

需要注意：

- COS 支持静态网站托管，但自定义域名、HTTPS、访问权限、CDN/EdgeOne 组合需要仔细配置。
- 对非技术维护人员来说，EdgeOne Pages 或 Lighthouse 通常更好理解。

## 建议采购清单

### 必买/必开

- 新域名：`.com` 优先
- DNSPod 云解析：免费版先够用
- 静态站托管：
  - 首选 EdgeOne Pages
  - 备选 Lighthouse 香港/新加坡
- HTTPS 证书：
  - EdgeOne 托管证书，或
  - 腾讯云 SSL 证书，或
  - Caddy/Let’s Encrypt 自动证书

### 推荐购买/开通

- 企业邮箱，例如 `contact@newdomain.com`
- 云监控告警
- 快照/备份
- EdgeOne 或 CDN 全球加速

### 暂时不买

- 云数据库
- 高配 CVM
- Kubernetes
- 负载均衡
- Redis
- 高防包
- WordPress 模板站

## 域名建议

如果做个人品牌：

- `masu-ip.com`
- `masuinnovation.com`
- `masupatent.com`

如果做机构品牌：

- `xinrui-ip.com`
- `xruip.com`
- `xinrui-global.com`

如果做方法论品牌：

- `patentmapinnovation.com`
- `chinaipstrategy.com`

## 备案提醒

如果服务器或接入点在中国内地，通常需要 ICP 备案。

如果面向海外客户，建议优先使用中国香港、新加坡或 EdgeOne 全球部署，具体是否需要备案应以腾讯云控制台、域名注册商和接入产品提示为准。
