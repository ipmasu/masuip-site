# masuip.com 新官网部署说明

## 部署目标

将当前新版静态官网部署到原域名：

`https://masuip.com/`

## 部署包

部署包文件：

`masuip-site.zip`

解压后应直接得到网站根目录文件，例如：

- `index.html`
- `about.html`
- `services.html`
- `china-entry.html`
- `methodology.html`
- `education.html`
- `articles.html`
- `contact.html`
- `robots.txt`
- `sitemap.xml`
- `styles.css`
- `script.js`
- `assets/`
- `articles/`

## 上传位置

请上传到 `masuip.com` 当前网站根目录。

常见根目录名称可能是：

- `wwwroot`
- `public_html`
- `htdocs`
- `www`
- 服务器站点配置中的 document root

请以当前旧站 `index.html` 或首页文件所在目录为准。

## 部署步骤

1. 备份旧站
   - 将当前网站根目录完整复制一份，例如命名为 `backup-masuip-20260620`。
   - 不要直接删除旧站文件。

2. 上传新版文件
   - 解压 `masuip-site.zip`。
   - 将解压后的全部文件上传到网站根目录。
   - 如果服务器提示覆盖同名文件，请确认已完成备份后再覆盖。

3. 检查首页
   - 访问 `https://masuip.com/`
   - 确认首页显示新版英文首屏。
   - 确认首页首屏图片加载正常。

4. 检查关键页面
   - `https://masuip.com/about.html`
   - `https://masuip.com/services.html`
   - `https://masuip.com/china-entry.html`
   - `https://masuip.com/methodology.html`
   - `https://masuip.com/articles.html`
   - `https://masuip.com/contact.html`

5. 检查 SEO 文件
   - `https://masuip.com/robots.txt`
   - `https://masuip.com/sitemap.xml`

## 服务器要求

这是纯静态网站，不需要数据库，不需要 Node.js，不需要 PHP。

只要服务器能正常提供 HTML、CSS、JS、PNG 文件即可。

## 注意事项

- 如果旧站有后台系统，请不要删除后台目录，先确认新版是否只覆盖公开网站根目录。
- 如果服务器开启缓存或 CDN，上传后请刷新缓存。
- 如果首页仍显示旧版，可能是浏览器缓存、服务器缓存或 CDN 缓存。
- 如果 `maximasure@hotmail.com` 邮箱未开通，请先开通或改成真实邮箱。

## 回滚方式

如果新版上线后需要回滚：

1. 删除新版上传文件。
2. 将备份目录中的旧站文件恢复到网站根目录。
3. 刷新服务器或 CDN 缓存。
