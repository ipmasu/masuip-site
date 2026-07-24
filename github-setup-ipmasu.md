# GitHub 仓库设置说明：ipmasu

GitHub 用户名：

`ipmasu`

建议仓库名：

`masuip-site`

最终仓库地址会是：

`https://github.com/ipmasu/masuip-site`

## 一、创建仓库

1. 登录 GitHub：

   `https://github.com/login`

2. 打开新建仓库页面：

   `https://github.com/new`

3. 填写：

   - Repository name: `masuip-site`
   - Description: `Global website for Ma Su and ShineRed IP`
   - Visibility: 建议先选 `Private`

4. 不要勾选：

   - Add a README file
   - Add .gitignore
   - Choose a license

因为本地项目里已经有这些文件。

5. 点击 `Create repository`

## 二、把本地网站上传到 GitHub

在本项目目录执行：

```powershell
git add .
git commit -m "Initial global website prototype"
git branch -M main
git remote add origin https://github.com/ipmasu/masuip-site.git
git push -u origin main
```

也可以直接运行本项目中的脚本：

```powershell
.\github-push-commands.ps1
```

如果 GitHub 要求登录：

- 用户名填：`ipmasu`
- 密码不要填 GitHub 登录密码
- 需要使用 GitHub Personal Access Token，或按 GitHub Desktop / 浏览器授权提示操作

## 三、连接腾讯云 EdgeOne Pages

1. 打开腾讯云 EdgeOne Pages。
2. 选择从 Git 仓库导入项目。
3. 授权 GitHub。
4. 选择：

   `ipmasu/masuip-site`

5. 构建设置：

   - Framework: Static / None
   - Build command: 留空
   - Output directory: `public`

6. 部署。

注意：请让 EdgeOne Pages 只发布 `public` 目录。仓库根目录里有一些内部规划文档和部署说明，不应作为公网网页发布。

## 四、以后每天发文章

以后新增文章的流程：

1. 在 `articles/` 新建文章 HTML。
2. 同步复制到 `public/articles/`。
3. 更新根目录和 `public/` 中的 `articles.html`。
4. 必要时更新根目录和 `public/` 中的 `sitemap.xml`。
5. 提交并推送：

```powershell
git add .
git commit -m "Add new article"
git push
```

EdgeOne Pages 会自动重新部署。

## 五、注意

- 不要把 GitHub 密码、验证码、Token 发给任何人。
- 仓库先用 Private，等网站稳定后再决定是否公开。
- 如果 EdgeOne Pages 需要读取私有仓库，需要在授权时允许腾讯云访问该仓库。
