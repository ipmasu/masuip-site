# 交付汇总

## 推荐发给服务器维护方的文件

优先发送：

`masuip-handoff-package.zip`

这个总包包含：

- `masuip-site.zip` - 新官网公开文件部署包
- `DEPLOY-INSTRUCTIONS.md` - 维护人员部署说明
- `MAINTAINER-MESSAGE.txt` - 可直接转发给维护人员的话术
- `POST-LAUNCH-CHECKLIST.md` - 上线后验收清单

如果维护方只需要网站文件，也可以只发送：

`masuip-site.zip`

## 已验证

- 部署包可以正常解压
- 解压后 `index.html` 存在
- 解压后首屏图片存在
- 解压后文章页面存在
- `script.js` 语法检查通过
- 本地页面链接检查通过
- `sitemap.xml` XML 解析通过

## 维护方上传后需要确认

- 首页是否显示新版
- 顶部导航是否可点击
- 首屏图片是否加载
- `robots.txt` 是否可访问
- `sitemap.xml` 是否可访问
- 邮箱和电话是否正确
- CDN 或服务器缓存是否刷新
