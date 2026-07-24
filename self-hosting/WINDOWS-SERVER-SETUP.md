# Windows 公司电脑部署静态网站步骤

## 1. 准备目录

建议创建：

`C:\Websites\masuip`

将部署包 `masuip-site.zip` 解压到这个目录。

解压后应看到：

- `index.html`
- `styles.css`
- `script.js`
- `assets`
- `articles`
- `sitemap.xml`
- `robots.txt`

## 2. 安装 Caddy

下载 Caddy Windows 版本：

`https://caddyserver.com/download`

将 `caddy.exe` 放到：

`C:\Caddy\caddy.exe`

将本目录中的 `Caddyfile` 放到：

`C:\Caddy\Caddyfile`

并把里面的：

`masuip.com`

保持为 `masuip.com`，或按最终实际绑定域名调整。

## 3. 本地测试

如果先不绑定公网域名，可以使用 Caddyfile 中的本地测试配置：

```text
http://localhost:8080 {
  root * C:\Websites\masuip
  file_server
}
```

启动：

```powershell
cd C:\Caddy
.\caddy.exe run --config C:\Caddy\Caddyfile
```

浏览器访问：

`http://localhost:8080`

## 4. 公网访问

如果使用公司电脑直接公网访问：

- 路由器将外网 80 端口映射到公司电脑 80 端口
- 路由器将外网 443 端口映射到公司电脑 443 端口
- Windows 防火墙开放 80 和 443
- DNS A 记录指向公司公网 IP

如果使用 Cloudflare Tunnel 或云服务器反向代理：

- 公司电脑可以只监听本机或内网端口
- 公网入口由 Cloudflare/云服务器处理

## 5. 开机自启

建议使用 Windows 服务方式运行 Caddy。

可以让维护人员使用 NSSM 或 Windows 服务管理工具，将：

`C:\Caddy\caddy.exe run --config C:\Caddy\Caddyfile`

配置为开机自动运行。

## 6. 安全建议

- 不要在服务器电脑上日常办公
- 不要开放远程桌面到公网
- Windows 系统保持更新
- 防火墙只开放必要端口
- 网站目录定期备份
- 不要把公众号原始稿、内部策略文档上传到网站目录
