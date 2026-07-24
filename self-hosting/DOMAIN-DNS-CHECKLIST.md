# masuip.com 域名与 DNS 清单

## 域名确认

- 主域名：`masuip.com`
- 域名是否面向国际客户容易读
- 是否与公司/个人品牌一致
- 是否有 `.com` 可用
- 是否避免过长、拼写困难
- 是否需要同时注册 `.cn`、`.com.cn` 或品牌近似域名

## DNS 方案

### 直接指向公司公网 IP

DNS 记录：

```text
@      A      公司公网 IP
www    CNAME  masuip.com
```

前提：

- 公司有公网 IP
- IP 相对稳定
- 80/443 可用

### 使用云服务器反向代理

DNS 记录：

```text
@      A      云服务器 IP
www    CNAME  masuip.com
```

云服务器再反向代理到公司电脑。

### 使用 Cloudflare Tunnel

DNS 由 Cloudflare 管理，域名指向 Cloudflare Tunnel。

优点：

- 不需要公司公网 IP
- 不需要路由器开放公网端口

注意：

- 需要确认访问速度和合规要求
- 需要公司电脑长期运行 tunnel 客户端

## 上线前 DNS 检查

- [ ] `masuip.com` 能解析
- [ ] `www.masuip.com` 能解析
- [ ] HTTP 自动跳转 HTTPS
- [ ] HTTPS 证书有效
- [ ] `robots.txt` 可访问
- [ ] `sitemap.xml` 可访问
